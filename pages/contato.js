import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Contato() {
  return (
    <div className="dark:bg-[#000] h-screen">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site do sistema Lapras System" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lapras System" />
        <title>Lapras System - Contato</title>
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
      <section class="dark:bg-[#000] bg-gray-100">
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:py-12 lg:col-span-2 flex flex-col">
              <h1 className="font-bold text-5xl mb-4">Contate-nos</h1>
              <p class="max-w-xl text-lg pl-1">Envie-nos um mensagem.</p>
              <div class="mt-8">
                <address class="mt-2 not-italic inline-flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  <span>Campinas - SP</span>
                </address>
              </div>
              <div class="mt-1">
                <address class="mt-2 not-italic inline-flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>{" "}
                  <span>lapras.system@gmail.com</span>
                </address>
              </div>
            </div>
            <div class="p-8 dark:bg-[#121212] bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
              <form
                action="https://formsubmit.co/0023eb5449ab2048b38648a356ebf3b4"
                method="POST"
                class="space-y-4"
              >
                <input type="hidden" name="_template" value="box" />
                <div>
                  <label class="sr-only" for="name">
                    Nome
                  </label>
                  <input
                    class="w-full p-3 text-sm border bg-gray-200 border-gray-200 rounded-lg"
                    placeholder="Nome"
                    type="text"
                    name="name"
                    id="name"
                    required
                  />
                </div>
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">
                      Email
                    </label>
                    <input
                      class="w-full p-3 text-sm border bg-gray-200 border-gray-200 rounded-lg"
                      placeholder="Email"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="Recebemos seu Email, Logo entraremos em contato!"
                    ></input>
                    <input
                      type="hidden"
                      name="_next"
                      value="http://localhost:3000/"
                    ></input>
                  </div>
                  <div>
                    <label class="sr-only" for="phone">
                      Telefone
                    </label>
                    <input
                      class="w-full p-3 text-sm border bg-gray-200 border-gray-200 rounded-lg"
                      placeholder="Telefone"
                      type="tel"
                      name="phone"
                      id="phone"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-1">
                  <div>
                    <label class="sr-only" for="assunto">
                      Assunto
                    </label>
                    <input
                      class="w-full p-3 text-sm border bg-gray-200 border-gray-200 rounded-lg"
                      placeholder="Assunto"
                      type="text"
                      id="assunto"
                      name="assunto"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label class="sr-only" for="message">
                    Mensagem
                  </label>
                  <textarea
                    class="w-full p-3 text-sm border bg-gray-200 border-gray-200 rounded-lg"
                    placeholder="Mensagem"
                    rows="8"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <span class="font-medium"> Enviar </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

