import axios from "../api/axios";
import React, { useCallback, useEffect, useState } from "react";
import "./Row.css";
import MovieModal from "./MovieModal";
const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMoives] = useState([]);

  const [movieSelected, setMovieSelection] = useState({});

  const [modalOpen, setModalOpen] = useState(false);
  const fetchMovies = useCallback(async () => {
    const request = await axios.get(fetchUrl);

    console.log(request);
    setMoives(request.data.results);
    return request;
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleClick = movie => {
    setModalOpen(true);
    setMovieSelection(movie);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            onClick={() =>
              (document.getElementById(id).scrollLeft -= window.innerWidth - 80)
            }
            className="arrow"
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map(movie => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            ></img>
          ))}
        </div>

        <div className="slider__arrow-right">
          <span
            onClick={() =>
              (document.getElementById(id).scrollLeft += window.innerWidth - 80)
            }
            className="arrow"
          >
            {">"}
          </span>
        </div>
      </div>

      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen}></MovieModal>
      )}
    </div>
  );
};

export default Row;
