import React from "react";
import Head from "next/head";
import Admin from "../components/Admin";

export default function dashboard() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site do sistema Lapras System" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lapras System" />
      </Head>
      <Admin />
    </div>
  );
}
