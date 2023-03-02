import React from 'react';
import styles from './Footer.module.css'
import logo from '../../images/logoFooter.svg'
import phone from '../../images/phoneFooter.svg'

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <img className={styles.logoImg} src={logo}/>
                <div className={styles.navFooter}>
                    <ul className={styles.ulFooter}>
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

export default Footer;