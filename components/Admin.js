import { useState, useEffect } from "react";
import Head from "next/head";
import NavbarDash from "./NavbarDash";
import Calendar from "../components/calendar";
import CardData from "../components/ComponentFromWeatherData/CardData";
import initialData from "../helpers/initialData";
import fetchDataFromRegion from "../services/DataFromWeatherApi";
import PieChart from "./graficos/PieChart";
import GaugeChart from "./graficos/GaugeChart";

export default function Admin() {
  const [data, setData] = useState(initialData);
  const randomRegions = ["São Paulo", "Rio de Janeiro", "Salvador"];
  const randomRegion = () => {
    let t = randomRegions.length;
    let av = Math.floor(Math.random() * t);
    let rdf = randomRegions[av];
    return rdf;
  };
  const FetchData = () => {
    fetchDataFromRegion(randomRegion()).then((response) => {
      setData(response);
    });
  };
  useEffect(() => {
    setInterval(() => {
      FetchData();
    }, 60000);
  }, []);
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site do sistema Lapras System" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lapras System" />
        <title>Lapras System - Dashboard</title>
        <link
          rel="apple-touch-icon"
          tamanhos="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          tamanhos="32x32 "
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          tamanhos="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c " />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <NavbarDash title="Estatísticas Gerais" />
      <div class="m-0 font-sans antialiased font-normal text-base leading-default dark:bg-gray-700 h-full bg-zinc-100 fadeIn">
        <div class="ml-auto w-full dark:bg-gray-700 h-full max-w-[1300px] mx-auto p-2">
          <div class="2xl:container h-full dark:bg-gray-700 fadeIn">
            <div class="2xl:container h-full dark:bg-gray-700">
              <div class="flex justify-center items-center">
                <div class="w-full px-6 py-6 mx-auto">
                  <div class="flex items-center flex-wrap justify-between gap-3 lg:gap-0">
                    <div class="flex flex-wrap w-full items-center justify-between gap-10">
                      <div className=" flex flex-wrap items-center justify-around lg:w-[45rem] w-full p-4 gap-4">
                        <div class="relative h-2/4 lg:w-[20rem] w-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none dark:bg-white rounded-lg dark:text-black">
                              
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-white">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <CardData data={data} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="relative h-2/4 lg:w-[20rem] w-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none dark:bg-white rounded-lg dark:text-black">
                              <div className="w-full h-full p-2 m-auto rounded-lg">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <CardData data={data} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="relative h-2/4 lg:w-[20rem] w-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none dark:bg-white rounded-lg dark:text-black">
                              <div className="w-full h-full p-2 m-auto rounded-lg">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <CardData data={data} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="relative h-2/4 lg:w-[20rem] w-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none dark:bg-white rounded-lg dark:text-black">
                              <div className="w-full h-full p-2 m-auto rounded-lg">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <CardData data={data} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mb-6 lg:mb-0 lg:max-w-sm w-full p-2">
                        <div class="relative min-w-0 w-full break-words bg-white dark:bg-gray-white  shadow-md rounded-2xl bg-clip-border">
                          <Calendar />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between flex-wrap w-full mt-4 mb-5">
                      <div className="lg:w-1/2 md:w-full w-full mt-4 lg:h-[32rem]">
                        <div class="w-full h-full px-3 mb-6 md:mb-0 md:flex-none">
                          <div class="relative h-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                            <div class="flex-auto p-4 ">
                              <div class="flex flex-wrap -mx-3">
                                <div class="max-w-full px-3 lg:w-full lg:flex-none">
                                  <div class="flex flex-wrap w-full justify-between items-center px-2 h-full">
                                    <p class="pt-2 mb-1 font-semibold ">
                                      Câmera
                                    </p>
                                  </div>
                                </div>
                                <div class="max-w-full lg:h-[25rem] px-3 mt-7 ml-auto text-center h-[20rem] w-full lg:flex-none">
                                  <div class="h-full bg-gradient-to-tl rounded-xl">
                                    <div class="relative flex items-center justify-center h-full bg-red-100">
                                      <img src="/images/sala.jpg" className="w-full h-full" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-between lg:w-1/2 md:w-full w-full ">
                        <div className="w-full mt-4">
                          <div class="w-full h-full px-3 mb-6 md:mb-0 md:flex-none">
                            <div class="relative h-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                              <div class="flex-auto p-4 ">
                                <div class="flex flex-wrap -mx-3">
                                  <GaugeChart />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full mt-4">
                          <div class="w-full h-full px-3 mb-6 md:mb-0 md:flex-none">
                            <div class="relative h-full flex flex-col min-w-0 break-words bg-white dark:bg-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                              <div class="flex-auto p-4 ">
                                <div class="flex flex-wrap -mx-3">
                                  <PieChart />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
