import React from "react";
export default function MovieItem({ data }) {
  
  return (
    <a href={data["#IMDB_URL"]} target="_blank" rel="noreferrer">
      <div className="relative bg-black  flex w-40 h-50 hover:h-60 hover:w-50 group">
        <img
          src={data["#IMG_POSTER"]}
          alt="poster"
          className="h-full w-full object-cover"
        />
        <i className="fa-solid fa-circle-play absolute top-[calc(50%-18px)] left-[calc(50%-18px)] text-yellow-400 text-4xl !hidden group-hover:!inline-block"></i>
      </div>
    </a>
  );
}
