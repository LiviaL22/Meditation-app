import style from "./Sound.module.css";
import img from "../../assets/image/relax.jpg";
import sound from "../../assets/sound/please-calm-my-mind.mp3";
import { useEffect } from "react";

export default function Sound() {
  let audio = new Audio(sound);
  let isPlaying = false;

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      audio.play();
      isPlaying = true;
    }
  };

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <button className={style.button} onClick={toggleAudio}>
      <img className={style.img} src={img} alt="image/soundpage" />
      <audio src={sound} />
    </button>
  );
}
