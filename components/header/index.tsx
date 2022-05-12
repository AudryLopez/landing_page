import Head from 'next/head';
import style from './header.module.css'

function Header() {
  return ( 
    <header className={style.nav}>
      <div  className={style.left}></div>
      <div  className={style.center}></div>
      <div  className={style.right}> <button className={style.mainButton}>Request Invite</button></div>
    </header>
   );
}

export default Header;