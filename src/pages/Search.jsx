import React, { useEffect, useState } from "react";
import MovieItem from "../component/MovieItem";

export default function Search() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const searchString = params.get("s");
      console.log(searchString);
      const res = await fetch(
        `https://imdb.iamidiotareyoutoo.com/search?q=${searchString}`
      );
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        const { description } = data;
        setSearchResult(description);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap container mx-auto gap-3 justify-center">
      {searchResult.map((item) => (
        <MovieItem data={item} key={item["#IMDB_ID"]} />
      ))}
    </div>
  );
}
