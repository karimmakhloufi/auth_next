import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Index.module.css";

const Protected: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") === null) {
      router.replace("/login");
    }
  }, [router]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>This page will be protected</main>
    </div>
  );
};

export default Protected;
