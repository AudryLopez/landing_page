import Head from 'next/head';
import style from './header.module.css'

function Header() {
  return ( 
    <div className={style.nav}>
      <div  className={style.left}></div>
      <div  className={style.center}></div>
      <div  className={style.right}> <button className={style.Btn}>request Invite</button></div>
    </div>
   );
}

export default Header;