import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Button from "./Button";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [state, setState] = useState(false);
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <Button onClick={() => setTheme("light")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clip-rule="evenodd"
            />
          </svg>
        </Button>
      );
    }
  };

  return (
    <>
      <Head></Head>
      <nav className="bg-black w-full top-0 z-20">
        <div className="items-center px-4 max-w-screen-xl mx-auto h-full lg:flex lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
            <a href="/">
              <img
                src="images/logo.png"
                width={200}
                height={130}
                alt="Float UI logo"
              />
            </a>
            <div className="lg:hidden">
              <button
                className="text-white outline-none p-2 rounded-md focus:border-white focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
              state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
            }`}
          >
            <div>
              <ul className="text-white flex flex-col text-center font-bold space-x-0 lg:space-x-6 lg:flex-row items-center">
                <li className="lg:mt-0 lg:mb-0 ">
                  <a href="/" className=" hover:text-sky-700">
                    Home
                  </a>
                </li>
                <li className="mt-8 lg:mt-0 lg:mb-0">
                  <a href="/projeto" className=" hover:text-sky-700">
                    Projeto
                  </a>
                </li>
                <li className="mt-8 lg:mt-0 lg:mb-0">
                  <a href="/sobre" className=" hover:text-sky-700">
                    Sobre
                  </a>
                </li>
                <li className="mt-8 lg:mt-0 lg:mb-0">
                  <a href="/contato" className=" hover:text-sky-700">
                    Contato
                  </a>
                </li>
                <li className="mt-8 lg:mt-0">
                  <a
                    href="/login"
                    className="py-3 px-4 text-center bg-sky-700 hover:bg-gradient-to-r from-sky-700 to-blue-500 rounded-md shadow block lg:inline"
                  >
                    Login
                  </a>
                </li>
                <li className="mt-8 lg:mt-0 lg:mb-0">{renderThemeChanger()}</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
