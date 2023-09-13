import style from  './Home.module.css';
import image from '../../assets/image/img.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home () {
	
	const [quote, setQuote] = useState({
		text:'Genius is one percent inspiration and ninety-nine percent perspiration.',
	});
  
	const getData = async () => {
	const data = await axios.get("https://type.fit/api/quotes");
	const arrayLength = data.data.length;
	const randomNumber = Math.floor(Math.random() * (arrayLength - 1));
	
	// eslint-disable-next-line no-unused-vars
	setQuote(prevQuote => prevQuote = (data.data[randomNumber]));
  }
  
  
	useEffect(() => {
	setInterval(() => {
		getData();
	}, 5000);
  }, [])

    const navigate = useNavigate();
	const goStart = () => {
		navigate ("/Timer");
	}
  
	

	return (
	<>

    <p onClick={getData} className={style.title2}>{quote.text}</p>
	
    <div className={style.container}>

	<button className={style.button} onClick={goStart}>

		<strong>Meditation</strong> 

	</button>
			
	</div>
	<div className={style.containerPhoto}>

		<img className={style.photo} src={image} alt='image'/>

	</div>
		</>
	)
}