import React from 'react';
import styles from './CartContent.module.css'
import ches from '../../images/ches2.svg'
import pizza from '../../images/pizza3.svg'
import {Link} from "react-router-dom";

const CartContent = () => {
    return (
        <>
            <div>
                <h2 className={styles.CartTitle}>Корзина</h2>
                <h3 className={styles.CartDesc}>Товары в вашей корзине</h3>
            </div>
            <div className={styles.productTitle}>
                <p>Продукт</p>
                <p>Количество</p>
                <p>Цена</p>
                <p>К оплате</p>
            </div>
            <div>
                <div>
                    <hr className={styles.Line}/>
                </div>
                <div className={styles.productCart}>
                    <img className={styles.productCartImg} src={ches}/>
                    <button>&#8722; <b>1</b> &#43;</button>
                    <br/>
                    <p>200 сом</p>
                    <p className={styles.productCartTotal}>200 сом <button><span
                        className={styles.productCartClose}>&#10005;</span></button></p>
                </div>
                <div>
                    <hr className={styles.Line}/>
                </div>
                <div className={styles.productCart}>
                    <img className={styles.productCartImg} src={pizza}/>
                    <button>&#8722; <b>1</b> &#43;</button>
                    <br/>
                    <p>200 сом</p>
                    <p className={styles.productCartTotal}>200 сом <button><span
                        className={styles.productCartClose}>&#10005;</span></button></p>
                </div>
                <div>
                    <hr className={styles.Line}/>
                </div>
                <div className={styles.cartTotal}>
                    <h3>Итого:</h3>
                    <p>400 сом</p>
                    <Link to='/order'>
                        <button>ОФОРМИТЬ ЗАКАЗ</button>
                    </Link>
                    <div className={styles.linkTotal}>
                        <Link to="/">  &lt; Продолжить покупки</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartContent;