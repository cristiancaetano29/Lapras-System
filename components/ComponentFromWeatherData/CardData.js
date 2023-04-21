import React from "react";
import propType from "prop-types";

const CardData = ({ data }) => {
  const { location, current } = data;

  return (
    <div className="h-full flex justify-center flex-col w-full">
      <div className="text-center mb-5">
        <h1 className="text-slate-400 dark:text-black text-sm font-medium">
          {`${location.region}, ${location.country}`}
        </h1>
      </div>
      <div className="flex items-center justify-around  ">
        <div className="font-bold text-slate-500 flex ">
          <span className="text-7xl dark:text-black">{current.temp_c}</span>
          <span className="text-3xl mt-2 dark:text-black"> °C </span>
        </div>
        <div className="flex text-center flex-col w-44 items-center">
          <img src={current.condition.icon} alt="Logo" />
          <span className="text-slate-500 font-medium dark:text-black">
            {" "}
            {current.condition.text}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardData;

CardData.propTypes = {
  data: propType.object,
}.isRequired;
