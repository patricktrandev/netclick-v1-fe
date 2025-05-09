import React, { useEffect, useState } from "react";

const Paginate = ({ movies, activeMovieId, setActiveMovieId }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let arrayId = movies.map((item) => {
      return item.id;
    });
    const interval = setInterval(() => {
      if (count < 4) {
        setActiveMovieId(arrayId[count]);
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [activeMovieId, count]);

  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {movies.map((item) => {
          return (
            <li
              onClick={() => setActiveMovieId(item.id)}
              key={item.id}
              className={`h-1 w-6 cursor-pointer ${item.id == activeMovieId ? "bg-slate-100" : "bg-slate-600"} `}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default Paginate;
