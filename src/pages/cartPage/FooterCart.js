import React from 'react';
import styles from './FooterCart.module.css'
import logo from "../../images/logoFooter.svg";
import phone from "../../images/phoneFooter.svg";

const FooterCart = () => {
    return (
        <>
            <footer className={styles.footerCart}>
                <img className={styles.logoImgCart} src={logo}/>
                <div className={styles.navFooterCart}>
                    <ul className={styles.ulFooterCart}>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Меню</a></li>
                        <li><a href="#">Доставка</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><img src={phone} /> <a href="#">+996500405988</a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default FooterCart;