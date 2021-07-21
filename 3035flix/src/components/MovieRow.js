import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./MovieRow.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const MovieRow = ({ title, items, history }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  const redirectToMovie = (id, item) => {
    const path = `/details/${id}`;
    history.push({ pathname: path, state: item });

  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--Left" onClick={handleLeftArrow}>
        <BsChevronLeft style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--Right" onClick={handleRightArrow}>
        <BsChevronRight style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div
                key={key}
                className="movieRow--item"
                onClick={() => redirectToMovie(item.id, item)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MovieRow);
