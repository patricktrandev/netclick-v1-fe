import React from "react";

const TvShowInformation = ({ tvInfo = [] }) => {
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{tvInfo.original_name || tvInfo.title}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        {(tvInfo.origin_country || []).map((countryCode) => {
          const countryName = countryCode.toLowerCase();
          return (
            <img
              key={countryCode}
              src={`https://flagcdn.com/48x36/${countryName}.png`}
              alt={countryName}
              className="mt-1 mr-1 w-[1.4vw]"
            />
          );
        })}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{tvInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Network</p>
        <p>
          {(tvInfo.networks || []).map((item) => (
            <img
              key={item.id}
              src={`https://media.themoviedb.org/t/p/h30${item.logo_path}`}
            />
          ))}
        </p>
      </div>
    </div>
  );
};

export default TvShowInformation;
