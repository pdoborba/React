import React, { useEffect, useState } from "react";
import './Home.css';

import { FaHeart } from "react-icons/fa";

//components
import FeaturedMovie from "../components/FeaturedMovie";
import Header from "../components/Header";
import MovieRow from "../components/MovieRow";
import Tmdb from "../components/tmdb";

const Home = () => {
  const [movieList, SetmovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      SetmovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let choseInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(choseInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com{" "}
        <span role="img" aria-label="coração">
          <FaHeart />
        </span>{" "}
        por Pedro Borba.
        <br />
        Dados fornecidos pelo site Themoviedb.org
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://i.ibb.co/yF6T0tQ/Spinner-1-1s-197px-1.gif"
            alt="Loading"
          ></img>
        </div>
      )}
    </div>
  );
};

export default Home;
