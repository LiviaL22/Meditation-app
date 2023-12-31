import style from './Sound.module.css';
import img from '../../assets/image/relax.jpg';
import sound from '../../assets/sound/please-calm-my-mind.mp3'

export default function Sound() {
 
 let audio = new Audio(sound);
 const start = () => {
    if (audio.paused === true) {
        audio.play();
    } else {
        audio.pause();
  audio.currentTime = 0;
        audio.stop();
        
    }
};

 return(

    <button className={style.button} onClick={start}>
      <img className={style.img} src={img} alt="image/soundpage" />
      <audio loop src={sound}/>
    </button>
   
    );    
     
  
}