import Head from 'next/head';
import Image from 'next/image';
import style from './header.module.css'
import logo from '../imgs/logo.svg'

function Header() {
  return ( 
    <div className={style.nav}>
      <div  className={style.left}>
        <Image src={logo} alt="logo of the company" height={40} width={220} /> 
      </div>
      <div  className={style.center}>
        <a href="">home</a>
        <a href="">about</a>
        <a href="">contact</a>
        <a href="">blog</a> 
        <a href="">carrers</a> 
      </div>
      <div  className={style.right}>
        <button className={style.Btn}>request Invite</button>
      </div>
    </div>
   );
}

export default Header;