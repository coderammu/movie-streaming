import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

export default function MovieList() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/mock.json");
      if (res.status === 200) {
        const details = await res.json();

        setMovie(details);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="section flex overflow-auto  items-center gap-4">
      {movie.map((item) => (
        <MovieItem data={item} key={item["#IMDB_ID"]} />
      ))}
    </div>
  );
}
