import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "São Paulo",
    },
    {
      id: 2,
      title: "Rio de Janeiro",
    },
    {
      id: 3,
      title: "Belo Horizonte",
    },
    {
      id: 4,
      title: "Brasília",
    },
    {
      id: 5,
      title: "Amazônia",
    },
    {
      id: 6,
      title: "Recife",
    },
  ];
  return (
    <div className="flex flex-wrap lg:w-full md:w-[45rem] sm:w-[35rem] w-[27rem] p-2 items-center justify-between">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium text-center"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
