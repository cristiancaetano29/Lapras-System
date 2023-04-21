import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Index() {
  return (
    <div className="dark:bg-[#000] bg-white h-screen">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site do sistema Lapras System" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lapras System" />
        <title>Lapras System - Home</title>
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
      <Navbar />
      <section className="mt-20 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
          <p className="text-gray-500 max-w-xl mx-auto text-2xl leading-relaxed font-semibold">
            Para conscientização e vida.
          </p>
          <h1 className="font-bold text-5xl md:text-7xl text-sky-700">
            Lapras System
          </h1>
          <p className="dark:text-white text-black max-w-3xl mx-auto text-4xl leading-relaxed font-semibold">
            Evolução é se preocupar com o meio ambiente.
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <a
            href="/contato"
            className="px-10 py-3.5 w-full bg-sky-700 text-white text-center rounded-md shadow-md block sm:w-auto hover:scale-105 transition-all 500ms"
          >
            Adquira agora
          </a>
          <a
            href="/projeto"
            className="px-10 py-3.5 w-full dark:bg-white dark:text-black text-gray-500 text-center border rounded-md duration-300 hover:text-sky-700 hover:shadow dark:hover:text-sky-700 dark:hover:shadow block sm:w-auto hover:scale-105"
          >
            Saber mais
          </a>
        </div>
      </section>
    </div>
  );
}
