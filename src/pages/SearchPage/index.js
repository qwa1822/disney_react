import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchPage.css";
import { useDebounce } from "../../hooks/useDebounce";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();

  const searchTeam = query.get("q");

  const debouncedSarchTerm = useDebounce(searchTeam, 500);
  useEffect(() => {
    if (debouncedSarchTerm) {
      fetchSearchMovie(searchTeam);
    }
  }, [debouncedSarchTerm]);

  const fetchSearchMovie = async searchTeam => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchTeam}`
      );

      console.log(response);
      setSearchResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  if (searchResults.length > 0) {
    return (
      <section class="search-container">
        {searchResults.map(movie => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
            return (
              <div className="movie" key={movie.id}>
                <div
                  className="movie__column-poster"
                  onClick={() => navigate(`/${movie.id}`)}
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <section class="no-results">
        <div class="no-results_text">
          <p>찾고자하는 검색어 "{searchTeam}에 맞는 영화가 없습니다"</p>
        </div>
      </section>
    );
  }
};

export default SearchPage;
