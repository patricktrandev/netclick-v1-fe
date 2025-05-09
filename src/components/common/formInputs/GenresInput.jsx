import React, { useEffect } from "react";
import { useWatch } from "react-hook-form";
import useFetch from "../../../hooks/useFetch";

const GenresInput = ({ control, onChange, value = [] }) => {
  const media = useWatch({ name: "mediaType", control: control });

  const { data } = useFetch(
    { url: `/genre/${media}/list` },
    { enabled: media },
  );
  useEffect(() => {
    onChange([]);
  }, [media]);

  return (
    <div className="flex flex-wrap gap-1">
      {(data.genres || []).map((item) => {
        return (
          <p
            key={item.id}
            className={`cursor-pointer rounded-lg border px-2 py-1 hover:scale-90 ${value.includes(item.id) ? "bg-red-500 text-white" : ""} `}
            onClick={() => {
              let newVal = [...value];
              if (value.includes(item.id)) {
                newVal = newVal.filter((g) => g !== item.id);
              } else {
                newVal = [...newVal, item.id];
              }
              onChange(newVal);
            }}
          >
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default GenresInput;
