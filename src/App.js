import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import Search from "./pages/Search";
import Home from "./pages/Home";

import "../src/asset/css/App.css";

function App() {
  // const [show, setshow] = useState(false);
  // const handleClick = () => {
  //   setshow("");
  // };

  // const handleHundburger = () => {
  //   setshow(true)
  // }

  return (
    <>
      <BrowserRouter>
        <Navigation />
        {/* {show && (
          <aside className="flex w-full h-full  fixed top-0">
            <div className="w-1/2 " onClick={handleClick}></div>
            <div className="w-1/2 bg-zinc-800  ">
              <ul className="flex flex-col  gap-10 text-white relative  top-0 left-0 w-full pt-4 pl-2">
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
            </div>
          </aside>
        )} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
