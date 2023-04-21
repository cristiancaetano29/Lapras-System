import Head from "next/head";
import NavbarDash from "../../components/NavbarDash";
import BarChart from "../../components/graficos/BarChart";
import AreaChart from "../../components/graficos/AreaChart";
import GeoChart from "../../components/graficos/GeoChart";
import PieChart from "../../components/graficos/PieChart";
import GaugeChart from "../../components/graficos/GaugeChart";
import Candlestick from "../../components/graficos/CandlestickChart";
import ComboChart from "../../components/graficos/ComboChart";

const Graficos = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site do sistema Lapras System" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lapras System" />
        <title>Lapras System - Gráficos</title>
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

      <NavbarDash title="Gráficos" />
      <div class="m-0 font-sans antialiased font-normal text-base leading-default dark:bg-gray-700 h-full bg-zinc-100 fadeIn">
        <div class="ml-auto w-full dark:bg-gray-700 h-full max-w-[1300px] mx-auto p-2">
          <div class="2xl:container h-full dark:bg-gray-700 fadeIn">
            <div class="2xl:container h-full  dark:bg-gray-700">
              <div class="flex justify-center items-center">
                <div class="w-full px-6 py-2 mx-auto">
                  <div class="flex flex-wrap mt-2 items-start -mx-3 justify-between h-full p-2">
                    <div class="w-full h-full md:w-full flex-wrap p-3 mb-6 gap-4 md:mb-0 md:flex-none flex items-center justify-between">
                      <div className="h-full w-full flex flex-wrap gap-4 items-center justify-between">
                        
                        <div class="relative lg:h-3/5 h-full w-full lg:w-2/4 flex flex-col min-w-0 break-words bg-white dark:bg-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg">
                                <div className="flex justify-around items-center h-full w-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <BarChart />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="relative h-3/5 w-full lg:w-2/5 flex flex-col min-w-0 break-words bg-white dark:bg-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <PieChart />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="relative h-[15rem] w-full md:w-1/5 flex flex-col min-w-0 break-words bg-white dark:bg-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col justify-center items-center p-1 w-full h-full">
                                    <GaugeChart />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="relative h-2/4 w-full md:w-2/4 flex flex-col min-w-0 break-words bg-white dark:bg-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <AreaChart />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="relative h-[15rem] w-full md:w-1/4 flex flex-col min-w-0 break-words bg-white dark:bg-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex justify-center items-center p-1 w-full h-full">
                                    <ComboChart />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="relative h-full w-full md:w-full flex flex-col min-w-0 break-words bg-white dark:bg-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <GeoChart />
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
    </>
  );
};

export default Graficos;
