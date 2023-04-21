import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import Button from "../components/Button";

export default function Login() {
  const { systemTheme, theme, setTheme } = useTheme();
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
    <div class="dark:bg-black h-screen">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site do sistema Lapras System" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lapras System" />
        <title>Lapras System - Login</title>
      </Head>
      <div class="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8 ">
        <div class="max-w-lg mx-auto">
          <div className="flex justify-between items-center">
            <a className="ml-[8rem]" href="/">
              <img src="images/logo.png" className="" width={240} />
            </a>
            <div className="cursor-pointer">{renderThemeChanger()}</div>
          </div>
          <form
            action="/api/login"
            method="post"
            class="p-8 mt-3 mb-0 space-y-4 rounded-lg shadow-2xl dark:bg-[#121212]"
          >
            <p class="text-lg font-medium">Inicie sessão na sua conta</p>
            <div>
              <label for="email" class="text-sm font-medium">
                Email
              </label>
              <div class="relative mt-1">
                <input
                  type="email"
                  name="email"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Email"
                  required
                />
                <span class="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label for="password" class="text-sm font-medium">
                Senha
              </label>
              <div class="relative mt-1">
                <input
                  type="password"
                  name="password"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Senha"
                  required
                />
                <span class="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <a href="#" class="text-sky-600">
                Esqueceu a senha ?
              </a>
              <div className="flex items-center mt-3">
                <input
                  type="checkbox"
                  name="rememberMe"
                  class="appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer  checked:bg-sky-700"
                  checked=""
                />
                <label class="ml-2 text-sm" for="rememberMe">
                  Lembrar de mim
                </label>
              </div>
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="py-3 px-4 text-center bg-sky-700 hover:bg-gradient-to-r from-sky-700 to-blue-500 rounded-md shadow block lg:inline"
              >
                <button
                  type="submit"
                  className="text-white font-semibold w-20"
                  value="Login"
                >
                  Login
                </button>
              </a>
            </div>
            <div class="mt-6 ">
              <div class="my-2"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
