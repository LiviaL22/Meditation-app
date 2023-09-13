import style from './Timer.module.css';
import Sound from '../../components/Sound/Sound';
import { useEffect, useState } from 'react';
import {IoMdMusicalNote} from 'react-icons/io';


export default function Timer() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState("0" + 0);       
    const [isRunning, setIsRunning] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [keys, setKeys] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [isStopped, setIsStopped] = useState(false);    
    

    useEffect(() => {
        let interval;
		if (isRunning) {
            interval = setTimeout(() => {
                if (seconds > 0 && seconds < 11) {                        
                    setSeconds((prevSeconds) => "0" + (prevSeconds - 1));
                } else if (seconds >= 11){
                    setSeconds((prevSeconds) => (prevSeconds - 1));
                } else if (minutes > 0) {
                    setMinutes(prevMinutes => prevMinutes - 1);
                    setSeconds(59);
                }
            }, 1000)
		} 

        if (minutes === 0 && seconds === 0) {
            setIsRunning(false);
            setSeconds(0);
            setMinutes(0);
            setIsStopped(true);
        }

        return () => clearTimeout(interval);
	},
     [minutes, seconds, isRunning]);

    /* Start */

    // eslint-disable-next-line no-unused-vars
    const start = (e) => {
        if (minutes !== 0 || seconds !== 0) {
            setIsRunning(true);
            setIsStopped(false);
        } else {
            alert("Insert time and sound");
        }
    }

    /* Pause */

    const pause = () => {
        setIsRunning(false);
        setIsStopped(true)
    }
    
    /* Stop */

    // eslint-disable-next-line no-unused-vars
    const stop = (e) => {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
        setIsStopped(true);
    }
    

    /* time buttons */

    const changeTimer = (e) => {
        setIsRunning(false);
        setSeconds(prevSeconds => {
            prevSeconds = e.target.getAttribute("value")
            return (
                `${Math.floor(prevSeconds % 60) + "0"}`
            )
        });
        setMinutes(prevMinutes => {
            prevMinutes = e.target.getAttribute("value")
            return (
                `${Math.floor(prevMinutes / 60)}`
            )
        })
        setKeys(keys => {                           
            keys = e.target.getAttribute("value")
            return (
                `${keys}`
            )
        })   
    }


   
    return (
<>

    <h1 className={style.title}>TIME TO MEDITATION</h1>

    <div className={style.timer}>
            <div value={minutes} className={style.number}>{minutes}</div>
            <div className={style.divider}>:</div>
            <div value={seconds} className={style.number}>{seconds}</div>
    </div>
   
    <div className={style.buttons}>
               
            <button value={300} className={style.buttonStyle} onClick={changeTimer}>
              <strong>5 Minutes</strong>  
            </button>
        
          
            <button value={600} className={style.buttonStyle} onClick={changeTimer} >
            <strong>10 Minutes</strong>  
            </button>
          
            <button value={900} className={style.buttonStyle} onClick={changeTimer} >
            <strong>15 Minutes</strong>  
            </button>
   </div>

        <div className={style.buttons}>
              {!isRunning &&(
                <button className={style.buttonStyle} onClick={start}  >
                    <strong>Play</strong>  
                </button>
             )} 
               {isRunning && (
                <button className={style.buttonStyle} onClick={pause}>
                    <strong>Pause</strong>  
                </button>
                )}
                <button className={style.buttonStyle} onClick={stop}>
                <strong>Stop</strong>  
                </button>
        </div>
        <p className={style.title2}>
            <IoMdMusicalNote/>
            Click on the photo to listen to relaxing background music
            <IoMdMusicalNote/>
            </p>
        
        <div className={style.buttonSound}>
            
          <Sound/>
            
        </div>
    
</>   
    )

}