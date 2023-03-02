import React from 'react';
import styles from './OrderContent.module.css'
import ches from "../../images/ches2.svg";

const OrderContent = () => {
    return (
        <>
            <div className={styles.orderContent}>
                <div>
                    <h2 className={styles.orderContentTitle}>Оформление заказа</h2>
                </div>
                <div className={styles.orderContentInput}>
                    <input className={styles.contentInput} type="text" placeholder="Фамилия"/>
                    <input className={styles.contentInput} type="text" placeholder="Имя"/>
                    <br/>
                    <input className={styles.contentInput} type="number" placeholder="Мобильный телефон"/>
                    <input className={styles.contentInput} type="email" placeholder="Email"/>
                </div>
                <div className={styles.productContent}>
                    <h3>Ваш заказ</h3>
                    <div className={styles.productTitle}>
                        <p>Продукт</p>
                        <p>Количество</p>
                        <p>Цена</p>
                        <p>К оплате</p>
                    </div>
                    <div>
                        <hr className={styles.Line}/>
                    </div>
                    <div className={styles.productOrder}>
                        <img className={styles.productOrderImg} src={ches}/>
                        <button className={styles.productOrderBtn}>&#8722; <b>1</b> &#43;</button>
                        <br/>
                        <p>200 сом</p>
                        <p className={styles.productOrderTotal}>200 сом <button className={styles.productOrderClose}><span>&#10005;</span></button></p>
                    </div>
                    <div>
                        <hr className={styles.Line}/>
                    </div>
                </div>
                <div className={styles.confirmOrder}>
                    <p className={styles.confirmOrderTitle}>Промокод</p>
                    <input type="text" placeholder="Введите промокод"/>
                    <p className={styles.confirmOrderTotal}>Итого:</p>
                    <p className={styles.confirmOrderProduct}>1 товар на сумму</p><span>200сом</span>
                    <p className={styles.confirmOrderPay}>К оплате</p>  <span>200сом</span>
                    <button className={styles.confirmOrderBtn}>Подтвердить заказ</button>
                    <p className={styles.confirmOrderText}>Подтверждая заказ, я принимаю условия <a className={styles.link} href="#">пользовательского соглашения</a></p>
                </div>
            </div>
            <div className={styles.delivery}>
                <h3>Адрес доставки</h3>
                <label className={styles.deliveryLabel}>
                    <input type="radio" name="address"/>
                    Самовывоз
                </label>
                <label className={styles.deliveryLabel}>
                    <input type="radio" name="address" checked/>
                    Курьерская доставка
                </label>
                <br/>
                <select>
                    <option>Бишкек</option>
                    <option>Кара-Балта</option>
                    <option>Кант</option>
                </select>
                <input type="text" placeholder="Введите адрес доставки"/>
            </div>
            <div className={styles.payment}>
                <h3>Способ оплаты</h3>
                <label className={styles.paymentLabel}>
                    <input type="radio" name="payment"/>
                    Наличными
                </label>
                <label className={styles.paymentLabel}>
                    <input type="radio" name="payment"/>
                    Банковский перевод
                </label>
                <label className={styles.paymentLabel}>
                    <input type="radio" name="payment"/>
                    Оплата картой,электронными кошельками на сайте
                </label>
                <label className={styles.paymentLabel}>
                    <input type="radio" name="payment"/>
                    Денежный перевод
                </label><br/>
                <label className={styles.paymentLabel2}>
                    <input type="radio" name="payment"/>
                    Оплата курьеру на месте
                </label>
            </div>
            <div className={styles.comment}>
                <h3>Комментарий к заказу</h3>
                <textarea className={styles.commentText}></textarea>
            </div>
        </>
    );
};

export default OrderContent;