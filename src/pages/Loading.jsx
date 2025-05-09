import React from "react";

const Loading = () => {
  return (
    <div className="m-auto flex h-40 items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-5 border-t-slate-200 bg-red-500"></div>
    </div>
  );
};

export default Loading;
