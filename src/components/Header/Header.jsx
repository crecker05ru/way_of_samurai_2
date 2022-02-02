import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'

const Header = (props) => {
   return <header className={style.header}>
            <img src='https://cdn.shopify.com/shopifycloud/hatchful-web/assets/c3a241ae6d1e03513dfed6f5061f4a4b.png' alt='logo'/>

            <div className={style.loginBlock}>
              { props.isAuth 
              ? <div> {props.login} - <button onClick={props.logout}> Log out </button></div>
              : <NavLink to={'/login'}>Login</NavLink> }
               </div>
          </header>
}

export default Header;