import React from "react";
import {
  RiTempHotLine,
  RiDropLine,
  RiWindyFill,
  RiSunLine,
  RiSunCloudyLine,
  RiTempColdLine,
} from "react-icons/ri";
import {
  iconUrlFromCode,
  formatToLocalTime,
} from "../../services/weatherService";

function TemperaturaDetalhes({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div className="flex flex-col justify-around w-full">
      <div className="flex items-center justify-center py-6 text-cl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-around py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col items-start justify-center space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <RiTempHotLine size={18} className="mr-1" />
            Temperatura:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <RiDropLine size={18} className="mr-1" />
            Humidade:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <RiWindyFill size={18} className="mr-1" />
            Velocidade do vento:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 w-full items-center lg:gap-0 gap-3 justify-items-center space-x-2 text-sm py-3">
        <div className="flex flex-col items-center gap-2">
          <RiSunLine />
          <p className="font-light">
            Nascer do sol:
            <span className="font-medium ml-1">
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          {" "}
          <RiSunCloudyLine />
          <p className="font-light">
            Pôr do sol:
            <span className="font-medium ml-1">
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          {" "}
          <RiTempHotLine />
          <p className="font-light">
            Temperatura máxima:{" "}
            <span className="font-medium ml-1">{`${temp_max.toFixed()}°C`}</span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          {" "}
          <RiTempColdLine />
          <p className="font-light">
            Temperatura mínima:{" "}
            <span className="font-medium ml-1">{`${temp_min.toFixed()}°C`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TemperaturaDetalhes;
