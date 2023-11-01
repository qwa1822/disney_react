import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  let { movieId } = useParams();

  const [movies, setMovies] = useState({});

  console.log(movieId);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      setMovies(response.data);
    }

    fetchData();
  }, [movieId]);
  if (!movies) return null;
  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
        alt="img"
      />
    </section>
  );
};

export default DetailPage;
