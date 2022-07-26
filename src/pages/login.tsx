import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { resolve } from "path";
import { useEffect, useState } from "react";
import styles from "../styles/Index.module.css";

const Login: NextPage = () => {
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <input value={login} onChange={(e) => setLogin(e.target.value)} />
        <br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button
          onClick={async () => {
            try {
              const token: string = await new Promise((resolve, reject) => {
                // setTimeout(resolve, 1000, "thisisafaketoken");
                setTimeout(reject, 1000, "thisisafaketoken");
              });
              localStorage.setItem("token", token);
              router.replace("/protected");
            } catch (err) {
              alert("invalid credentials");
            }
          }}
        >
          Login
        </button>
      </main>
    </div>
  );
};

export default Login;
