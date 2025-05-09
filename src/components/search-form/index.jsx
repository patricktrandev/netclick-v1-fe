import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import MediaTypeInput from "../common/formInputs/MediaTypeInput";
import FormField from "../common/FormField";
import GenresInput from "../common/formInputs/GenresInput";
import RatingInput from "../common/formInputs/RatingInput";
import { useDebounce } from "../../hooks/hooks";

const SearchForm = ({ setSearchFormValues, media }) => {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      mediaType: ["movie", "tv"].includes(media) ? media : "movie",
      genres: [],
      ratings: "All",
    },
  });
  const formValues = watch();
  const onSubmit = (data) => {
    console.log(data);
  };
  const debouncedSearch = useDebounce(formValues);
  useEffect(() => {
    setSearchFormValues(debouncedSearch);
  }, [JSON.stringify(debouncedSearch)]);
  return (
    <div className="rounded-lg border border-slate-200 p-4 shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <br />
        <FormField
          name={"mediaType"}
          label={"Media Type"}
          control={control}
          Component={MediaTypeInput}
        />
        <FormField
          name={"genres"}
          label={"Genres"}
          control={control}
          Component={GenresInput}
        />
        <FormField
          name={"ratings"}
          label={"Ratings"}
          control={control}
          Component={RatingInput}
        />

        <div className="mt-4">
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
