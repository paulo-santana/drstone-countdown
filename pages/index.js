import Head from "next/head";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Clock from "../components/Clock";
import IconButton from "../components/IconButton";
import styles from "../styles/Home.module.css";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function Home() {
  const [player, setPlayer] = useState(null);
  const [playerMuted, setPlayerMuted] = useState(false);
  const releaseDate = new Date(2020, 10, 10, 0, 25, 0);

  useEffect(() => {
    setTimeout(() => {
      const el = document.querySelector(`.${styles.greetings}`);
      el.classList.add(styles["fade-in"], styles.faded);
    }, 5000);
    setTimeout(() => {
      const el = document.querySelector(`.${styles.message}`);
      el.classList.add(styles["fade-in"], styles.faded);
    }, 7000);
    setTimeout(() => {
      const el = document.querySelector(`.${styles.getExcited}`);
      el.classList.add(styles["fade-in"], styles.faded);
    }, 9000);
  });

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    // event.target.mute();
    event.target.playVideo();
    setPlayer(event.target);
  };

  const _onEnd = (event) => {
    event.target.playVideo();
  };

  const handleMuteButtonClick = () => {
    if (player) {
      if (player.isMuted()) {
        player.unMute();
        setPlayerMuted(false);
      } else {
        player.mute();
        setPlayerMuted(true);
      }
    }
  };

  const videoOptions = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dr. Stone Countdown!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="video-background">
        <div className="video-foreground">
          <YouTube
            videoId="awDQQ4fVZEg"
            opts={videoOptions}
            className="video-iframe"
            onReady={_onReady}
            onEnd={_onEnd}
          />
        </div>
      </div>
      <main className={styles.main}>
        <h1 className={styles.greetings}>Bom dia mundo bom dia mundo!</h1>
        <div className={styles.message}>
          Faltam <Clock releaseDate={releaseDate} /> para o lançamento de Dr.
          Stone dublado ao vivo!
        </div>
        <div className={styles.getExcited}>Fique excitado</div>
        {player && (
          <div className={styles.buttonContainer}>
            <IconButton
              Icon={playerMuted ? FaVolumeMute : FaVolumeUp}
              onClick={handleMuteButtonClick}
            />
          </div>
        )}
      </main>
    </div>
  );
}
