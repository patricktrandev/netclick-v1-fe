import React from "react";
import ImageComponent from "../common/Image";
import { Link } from "react-router-dom";

const ActorInfo = ({ name, id, character, profile, episode }) => {
  return (
    <div className="border-slate-30 rounded-lg border shadow-sm">
      <Link to={`/actor/${id}`}>
        <ImageComponent
          url={
            profile
              ? `https://image.tmdb.org/t/p/w276_and_h350_face${profile}`
              : "/default.svg"
          }
          name={name}
          width={320}
          height={350}
          classname={"rounded-lg"}
        />
        <div className="p-3">
          <p className="font-bold">{name}</p>
          <p>Character - {character}</p>
          {episode && <p>{episode} Episodes</p>}
        </div>
      </Link>
    </div>
  );
};

export default ActorInfo;
