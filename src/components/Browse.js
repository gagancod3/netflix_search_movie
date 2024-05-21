import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import { useSelector } from "react-redux";
// import GPTSearchPage from "./GPTSearchPage";
import SearchPage from "./SearchPage";

const Browse = () => {
  const isSearchPage = useSelector((store) => store?.searchPage?.isSearchPage);

  //custom hook called
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      {isSearchPage ? (
        <SearchPage />
      ) : (
        <>
          <PrimaryContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
