import style from './Header.module.css';
import { Link } from 'react-router-dom';
import {GiLampreyMouth} from 'react-icons/gi';

export default function Header() {
 
    return(
    <>
       <Link className={style.title} to='/'>
        <h1>
           <GiLampreyMouth />
         MEDIDATION 
           <GiLampreyMouth />
        </h1>
       </Link>
    </>
    )
}