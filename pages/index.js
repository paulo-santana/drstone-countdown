import Head from "next/head";
import { useState } from "react";
import { intervalToDuration } from "date-fns";
import styles from "../styles/Home.module.css";
import Clock from "../Clock";

export default function Home() {
  const releaseDate = new Date(2020, 10, 10, 0, 25, 0);

  function calcTimeRemaining() {
    return intervalToDuration({
      start: Date.now(),
      end: releaseDate,
    });
  }

  const [time, setTime] = useState(calcTimeRemaining());

  setTimeout(() => {
    setTime(calcTimeRemaining());
  }, 1000);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dr. Stone Countdown!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.greetings}>Bom dia!</h1>
        <div className={styles.message}>
          Faltam <Clock time={time} /> para o lançamento de Dr. Stone dublado ao
          vivo!
        </div>
        <div className={styles.getExcited}>Fique excitado</div>
      </main>
    </div>
  );
}
