import Head from "next/head";
import NavbarDash from "../../components/NavbarDash";
import initialData from "../../helpers/initialData";
import fetchDataFromRegion from "../../services/DataFromWeatherApi";
import { useEffect, useState } from "react";
import CardData from "../../components/ComponentFromWeatherData/CardData";

const Aovivo = () => {
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
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site do sistema Lapras System" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lapras System" />
        <title>Lapras System - Ao vivo</title>
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

      <NavbarDash title="Ao Vivo" />
      <div class="m-0 font-sans antialiased font-normal text-base leading-default dark:bg-gray-700 h-full bg-zinc-100 fadeIn">
        <div class="ml-auto w-full dark:bg-gray-700 h-full max-w-[1300px] mx-auto p-2">
          <div class="2xl:container h-full dark:bg-gray-700 fadeIn">
            <div class="2xl:container h-full  dark:bg-gray-700">
              <div class="flex justify-center items-center">
                <div class="w-full px-6 py-2 mx-auto">
                  <div class="flex flex-wrap mt-3 items-center -mx-3 justify-between h-full p-2 gap-4">
                    <div className="lg:w-[55%] md:w-full w-full mt-4 h-full">
                      <div class="w-full h-full px-3 mb-6 md:mb-0 md:flex-none">
                        <div class="relative h-full flex flex-col min-w-0 break-words bg-white dark:bg-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                          <div class="flex-auto p-4 ">
                            <div class="flex flex-wrap -mx-3">
                              <div class="max-w-full px-3 lg:w-full lg:flex-none">
                                <div class="flex flex-wrap w-full justify-between items-center px-2 h-full">
                                  <p class="pt-2 mb-1 font-semibold w-full">
                                    Câmera
                                  </p>
                                </div>
                              </div>
                              <div class="max-w-full px-3 mt-7 ml-auto text-center w-full lg:flex-none">
                                <div class="h-full bg-gradient-to-tl rounded-xl">
                                  <div class="relative flex items-center justify-center h-full">
                                    <img
                                      src="/images/sala.jpg"
                                      className="w-full h-full"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex flex-col gap-2 w-full h-full max-w-full px-3 lg:w-2/5 lg:flex-none relative lg:h-[25rem]">
                      <div class="border-black/12.5 shadow-md relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white dark:bg-white dark:text-black bg-clip-border p-2 h-full">
                        <div class="flex flex-col">
                          <div class="max-w-full px-3 lg:w-full lg:flex-none">
                            <div class="flex flex-wrap w-full justify-between items-center px-2 h-full">
                              <p class="pt-3 mb-1 font-semibold w-3/6">
                                Sensor
                              </p>
                            </div>
                          </div>
                          <div class="max-w-full px-3 mt-7 ml-auto text-center w-full lg:flex-none">
                            <div class="h-full w-full ">
                              <div class="relative h-full w-full">
                                <img
                                  className="w-full h-full"
                                  src="/images/sensorInfra.jpg"
                                  alt="Imagem Sensor Infravermelho"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div class="flex justify-center items-center">
                <div class="w-full px-6 py-2 mx-auto">
                  <div class="flex flex-wrap mt-2 items-start -mx-3 justify-between sm:h-full md:h-[30rem] lg:h-[30rem] p-2  ">
                    <div class="w-full h-full md:w-full flex-wrap p-3 mb-6 gap-4 md:mb-0 md:flex-none flex items-center justify-between">
                      <div className="h-full w-full flex flex-wrap gap-4 items-center justify-between">
                        <div class="relative h-2/4 w-full md:w-2/5  flex flex-col min-w-0 break-words bg-white dark:bg-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
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

                        <div class="relative h-2/4 w-full md:w-1/4 flex flex-col min-w-0 break-words bg-white dark:bg-white shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
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

                        <div class="relative h-2/4 w-full md:w-1/4  flex flex-col min-w-0 break-words bg-white dark:bg-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
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

                        <div class="relative h-2/4 w-full md:w-2/5 flex flex-col min-w-0 break-words bg-white dark:bg-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
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

                        <div class="relative h-2/4 w-full md:w-1/4 flex flex-col min-w-0 break-words bg-white dark:bg-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
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

                        <div class="relative h-2/4 w-full md:w-1/4 flex flex-col min-w-0 break-words bg-white dark:bg-white dark:text-black shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
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

                      {/* TABELA 
                      <div class="p-1 bg-red-400 h-[10%] w-full">
                        <PageGraficos />
                      </div>
                      */}
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
export default Aovivo;
