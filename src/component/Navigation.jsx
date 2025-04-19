import React, { useState } from "react";
import logo from "../asset/image/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navigation({ handleHundburger }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setearchText] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    setShowSearch(true);
  };
  const handleRemove = () => {
    setShowSearch(false);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setearchText(value);
  };

  const handleSearchValue = () => {
    if (searchText) {
      navigate(`/search?s=${searchText}`);
      window.location.reload();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchText) {
      navigate(`/search?s=${searchText}`);
      window.location.reload();
    }
  };

  return (
    <nav className="flex container mx-auto   items-center px-5 ">
      <div className="w-1/2 flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="w-1/2 relative items-center flex gap-5  justify-end">
        {/* {!showSearch && (
          <ul className="lg:flex gap-10 items-center text-white hidden ">
            <Link>
              <li>New Movie</li>
            </Link>
            <Link>
              <li>Genre</li>
            </Link>
            <Link>
              <li>Country</li>
            </Link>
            <Link>
              <li>Movie</li>
            </Link>
            <Link>
              <li>TV Series</li>
            </Link>
          </ul>
        )} */}
        <div className="flex gap-4  items-center  pl-5 border-white">
          {/* <i className="fa-regular fa-heart text-white cursor-pointer"></i> */}
          <i
            className="fa-solid fa-magnifying-glass text-white cursor-pointer text-2xl"
            onClick={handleClick}
          ></i>
          {/* <i
            className="fa-solid fa-bars text-white pr-7 lg:!hidden"
            onClick={handleHundburger}
          ></i> */}
        </div>
        {showSearch && (
          <div className="absolute bg-white w-80 shadow-2xl flex h-7 rounded-lg items-center px-2 h-10">
            <i
              className="fa-solid fa-arrow-left text-gray-400 cursor-pointer"
              onClick={handleRemove}
            ></i>
            <input
              type="text"
              placeholder="Search movies"
              value={searchText}
              className="outline-none px-2 flex-1"
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
            />
            <i
              className="fa-solid fa-magnifying-glass text-gray-400 cursor-pointer "
              onClick={handleSearchValue}
            ></i>
          </div>
        )}
      </div>
    </nav>
  );
}
