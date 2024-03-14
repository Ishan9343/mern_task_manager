import React from "react";

const Loader = () => {
  return (
    <>
      
      <span class=" w-8 h-8 my-8 mx-auto relative flex ">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    </>
  );
};

export default Loader;
