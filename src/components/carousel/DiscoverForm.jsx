import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormField from "../common/FormField";
import DiscoverInput from "../common/formInputs/DiscoverInput";

const DiscoverForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    //console.log(data["textSearch"]);
    navigate(`/discover?keyword=${data["textSearch"]}`);
  };

  return (
    <div className="h-[180px] bg-black">
      <div className="container flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name={"textSearch"}
            label={""}
            control={control}
            Component={DiscoverInput}
          />
        </form>
      </div>
    </div>
  );
};

export default DiscoverForm;
