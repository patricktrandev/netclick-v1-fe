import React, { useState } from "react";
import ActorInfo from "./ActorInfo";

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentActors = isShowMore ? actors : actors.slice(0, 4);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {currentActors.length > 0 ? (
          currentActors.map((item) => {
            return (
              <ActorInfo
                key={item.id}
                id={item.id}
                name={item.name}
                character={item.character}
                profile={item.profile_path}
                episode={item.episodeCount}
              />
            );
          })
        ) : (
          <p className="font-italic">No actors to show</p>
        )}
      </div>
      {actors.length > 4 && (
        <p
          className="mt-1 cursor-pointer hover:text-red-500"
          onClick={() => setIsShowMore(!isShowMore)}
        >
          {isShowMore ? "Show less " : "Show more"}
        </p>
      )}
    </div>
  );
};

export default ActorList;
