import React from "react";
import RelatedMediaList from "../movie-details/RelatedMediaList";
import { Genders } from "../../libs/constants";

const PeopleDetails = ({ personInfo }) => {
  return (
    <div className="container">
      <div className="flex gap-6 text-[1.1vw]">
        <div className="flex-1">
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${personInfo.profile_path}`}
            width={600}
            height={900}
            alt=""
            className="mb-6"
          />
          <div>
            <p className="mb-6 text-lg font-bold">Personal Info</p>
            <div className="space-y-4">
              <div>
                <p>Known for</p>
                <p>{personInfo.known_for_department}</p>
              </div>
              <div>
                <p>Gender</p>
                <p>{Genders[personInfo.gender]}</p>
              </div>
              <div>
                <p>Place of Birth</p>
                <p>{personInfo.place_of_birth}</p>
              </div>
              <div>
                <p>Birthday</p>
                <p>{personInfo.birthday}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <p className="mb-6 text-2xl font-bold">{personInfo.name}</p>
          <div className="mb-6">
            <p className="mb-4 text-lg font-bold">Biography</p>
            <p className="whitespace-pre-line">{personInfo.biography}</p>
            <br />
            <RelatedMediaList
              title={"Know For"}
              mediaList={personInfo.combined_credits?.cast || []}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetails;
