import React from 'react';
import truck from '../../images/gruzovik.svg'
import product from '../../images/product.svg'
import uniqueMenu from '../../images/menu.svg'
import delivery from '../../images/delivery.svg'
import styles from './Choice.module.css'

const Сhoice = () => {
    return (
        <>
            <div className={styles.choiceBlock}>
                <h2>Почему выбирают нас:</h2>
                <div className={styles.choiceInstantly}>
                    <img src={truck}/>
                    <h3>Мгновенная доставка</h3>
                    <p>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
                </div>
                <div className={styles.choiceProducts}>
                    <img src={product}/>
                    <h3>Свежие продукты</h3>
                    <p>Вся продукция хранится в хороших условиях тем самым продливая срок хранения</p>
                </div>
                <div className={styles.choiceUniqueMenu}>
                    <img src={uniqueMenu}/>
                    <h3>Уникальное меню</h3>
                    <p>Ежедневно мы обновляем наше
                        меню и том числе коктейльное</p>
                </div>
                <div className={styles.choiceDelivery}>
                    <img src={delivery}/>
                    <h3>Доставка</h3>
                    <p>Мы быстро доставляем вашу еду по указанному адресу</p>
                </div>
            </div>
        </>
    );
};

export default Сhoice;