import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatTawk from "../components/ChatTawk";

export default function Projeto() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site do sistema Lapras System" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="Lapras System" />
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
        <title>Lapras System - Projeto</title>
      </Head>
      <div className="bg-black text-white">
        <Navbar className="bg-black" />
      </div>
      <div className="h-full">
        <section class="relative pt-36 lg:pb-14 overflow-hidden bg-black w-full">
          <img
            class="absolute top-0 left-1/2 transform -translate-x-1/2"
            src="/images/sphere.jpg"
            alt=""
            width="100%"
          />
          <div class="relative z-10 container mx-auto px-4 mb-12">
            <div class="flex flex-wrap -m-6">
              <div class="w-full lg:w-1/2 p-6">
                <div class="lg:max-w-xl">
                  <h1 class="mb-10 font-heading font-bold text-6xl sm:text-7xl text-white">
                    Obtenha a segurança que o ambiente precisa.
                  </h1>
                  <ul class="flex flex-wrap w-full -m-3.5">
                    <li class="p-3.5 flex items-center font-heading font-semibold text-lg text-white">
                      <svg
                        class="mr-3"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="11" fill="#3F3F46"></circle>
                        <path
                          d="M6.7959 11.6006L9.1982 14.0029L15.2039 7.99713"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>Segurança</p>
                    </li>
                    <li class="p-3.5 flex items-center font-heading font-semibold text-lg text-white">
                      <svg
                        class="mr-3"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="11" fill="#3F3F46"></circle>
                        <path
                          d="M6.7959 11.6006L9.1982 14.0029L15.2039 7.99713"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>Privacidade</p>
                    </li>
                    <li class="p-3.5 flex items-center font-heading font-semibold text-lg text-white">
                      <svg
                        class="mr-3"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="11" fill="#3F3F46"></circle>
                        <path
                          d="M6.7959 11.6006L9.1982 14.0029L15.2039 7.99713"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>Confiança</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="pl-4 lg:w-1/2 lg:absolute lg:bottom-0 lg:right-0">
            <img
              class="relative z-10 ml-auto transform hover:-translate-x-28 transition ease-in-out duration-500"
              src="/images/dashboard.png"
              alt=""
              width="100%"
            />
          </div>
        </section>
        <div class="py-12 mt-10 dark:bg-[#121212] bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              <h2 class="text-center dark:text-white text-black font-semibold tracking-wide uppercase">
                Características
              </h2>
              <p class="mt-2 text-3xl leading-8 text-center font-extrabold tracking-tight dark:text-white text-black sm:text-4xl">
                Por que o Lapras System?
              </p>
            </div>
            <div class="mt-20">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md dark:bg-white dark:text-black bg-black text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium dark:text-zinc-100 text-zinc-900">
                      Ampla rede de dados
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md dark:bg-white dark:text-black bg-black text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium dark:text-zinc-100 text-zinc-900">
                     Controle de Previsões
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md dark:bg-white dark:text-black bg-black text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium dark:text-zinc-100 text-zinc-900">
                      Rápido envio de informações
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md dark:bg-white dark:text-black bg-black text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium dark:text-zinc-100 text-zinc-900">
                      Notificações a tempo
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <hr class="border-gray-200 mt-5 dark:border-gray-700 max-w-[1000px] m-auto"></hr>
        <div class="max-w-[1200px] m-auto mt-14 mb-20">
          <h2 class="text-center dark:text-white text-black font-semibold tracking-wide uppercase">
            Sistemas
          </h2>
          <p class="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight dark:text-white text-black sm:text-4xl">
            Tecnologias
          </p>
          <div class="grid grid-cols-2 gap-20 mt-14 md:grid-cols-4 lg:grid-cols-8 items-center justify-items-center">
            <div class="">
              <img src="images/node-js.png" width="90px" />
            </div>
            <div class="">
              <img src="images/arduino.png" width="100px" />
            </div>
            <div class="">
              <img src="images/c++.png" width="90px" />
            </div>
            <div class="">
              <svg
                className=""
                width="64px"
                height="64px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z" />
              </svg>
            </div>
            <div class="">
              <img src="images/js.png" width="90px" />
            </div>
            <div class="pr-3">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="512" cy="512" r="512" fill="#13aa52" />
                <path
                  fill="#fff"
                  d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"
                />
              </svg>
            </div>
            <div class="">
              <img src="images/Tailwind.png" width="100px" />
            </div>
            <div class="">
              <img src="images/vscode.png" width="90px" />
            </div>
          </div>
        </div>
        <hr class="border-gray-200 mt-5 dark:border-gray-700 max-w-[1000px] m-auto"></hr>
        <section class="text-gray-700">
          <div class="container px-5 py-16 mx-auto">
            <div class="text-center mb-20">
              <h2 class="text-center dark:text-white text-black font-semibold tracking-wide uppercase">
                Questões
              </h2>
              <p class="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight dark:text-white text-black sm:text-4xl">
                Perguntas Frequentes
              </p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-7">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                    A ferramenta é realmente necessária para o uso de
                    verificações do foco de queimada?
                  </summary>
                  <span>
                    Existem muitos falsos alarmes em relação a queimadas, em que
                    um satélite pode acabar detectando uma temperatura errada
                    por própria falha do sensor ou alguma interferência, além de
                    fenômenos climáticos, que podem dificultar o reconhecimento
                    dos focos, por isso a ferramenta se torna tão importante.
                  </span>
                </details>
                <details class="mb-7">
                  <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4 text-black">
                    A ferramenta oferece algum risco ao meio ambiente?{" "}
                  </summary>
                  <span>
                    O aparelho não irá causar nenhum dado ao meio ambiente ou no
                    local que se encontrará, ele apenas poderá ser posicionado
                    em um local para melhor manutenção e obtenção de sinal.
                  </span>
                </details>
                <details class="mb-7">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                    Os dados obtidos pelo sistema serão divulgados publicamente?{" "}
                  </summary>
                  <span>
                    Os dados obtidos pelo aparelho não estarão disponíveis
                    publicamente, quem poderá ter acesso às estatísticas será
                    instituição de ensino comprovando o motivo da requisição,
                    empresas que o sistema poderá auxiliar, ONGs e governo.
                  </span>
                </details>
              </div>
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-7">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                    O sistema fornece relatório gerenciais em relação aos focos
                    de incêndio e queimadas?
                  </summary>
                  <span class="px-4 py-2">
                    Sim, a fim de captação de imagens, a central pode optar por
                    ter seu relatório com informações através de ondas de calor
                    por parte do sensor infravermelho.
                  </span>
                </details>
                <details class="mb-7">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                    O Sistema facilita o acesso ao histórico de casos de
                    incêndios e de mudanças dos itens de Configuração
                    registrados para fins de pesquisa e controle?
                  </summary>
                  <span class="px-4 py-2">
                    Sim, todas as mudanças e casos de incêndio são mantidos em
                    histórico.
                  </span>
                </details>
                <details class="mb-7">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                    A ferramenta fornece captação de imagens e relatório de
                    focos em tempo real?{" "}
                  </summary>
                  <span class="px-4 py-2">
                    Sim, o sistema atua em tempo real mandando relatório para a
                    central de controle do mesmo.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
        <div class="dark:bg-[#070707] bg-zinc-200">
          <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-extrabold tracking-tight dark:text-white text-black sm:text-4xl">
              <span class="block">Pronto para adquirir?</span>
              <span class="block text-sky-700">
                Obtenha o System Lapras hoje.
              </span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div class="inline-flex rounded-md shadow">
                <a
                  href="/contato"
                  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-md  text-white bg-sky-700 hover:bg-sky-800 "
                >
                  Obter
                </a>
              </div>
              <div class="ml-3 inline-flex rounded-md shadow">
                <a
                  href="/sobre"
                  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-sky-700 bg-white hover:bg-gray-100"
                >
                  {" "}
                  Saber mais{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ChatTawk />
    </>
  );
}
