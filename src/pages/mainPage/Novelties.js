import React from 'react';
import styles from './Novelties.module.css'
import cheesburger1 from '../../images/Tofu-Burger-PNG-Image 2.svg'
import cheesburger2 from '../../images/ches2.svg'
import cheesburger3 from '../../images/chees3.svg'
import cheesburger4 from '../../images/chees4.svg'

const Novelties = () => {
    return (
        <>
            <div className={styles.novelties}>
                <div className={styles.noveltiesMenu}>
                    <h2>Новинки</h2>
                    <ul>
                        <li><a href="#">Пицца</a></li>
                        <li><a href="#">Бургер</a></li>
                        <li><a href="#">Суши</a></li>
                        <li><a href="#">Роллы</a></li>
                        <li><a href="#">Салаты</a></li>
                        <li><a href="#">Десерты</a></li>
                        <li><a href="#">Напитки</a></li>
                    </ul>
                </div>
                <div className={styles.noveltiesCard1}>
                    <img src={cheesburger1}/>
                    <div className={styles.noveltiesCardContent}>
                        <h3>Чизбургер</h3>
                        <p className={styles.noveltiesCardContentDesc}>Булка, котлета,сыр, соленый огурец, лук, помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез</p>
                        <p className={styles.noveltiesCardContentPrice}>200 сом</p><br/>
                        <button className={styles.noveltiesCardContentBtn}>&#8722; <b>1</b> &#43;</button>
                        <button className={styles.noveltiesCardContentCart}>В КОРЗИНУ</button>
                    </div>
                </div>
                <div className={styles.noveltiesCard2}>
                    <img src={cheesburger2}/>
                    <div className={styles.noveltiesCardContent2}>
                        <h3>Чизбургер</h3>
                        <p className={styles.noveltiesCardContentDesc2}>Булка, котлета,сыр, соленый огурец, лук, помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез</p>
                        <p className={styles.noveltiesCardContentPrice2}>200 сом</p><br/>
                        <button className={styles.noveltiesCardContentBtn}>&#8722; <b>1</b> &#43;</button>
                        <button className={styles.noveltiesCardContentCart}>В КОРЗИНУ</button>
                    </div>
                </div>
                <div className={styles.noveltiesCard3}>
                    <img src={cheesburger3}/>
                    <div className={styles.noveltiesCardContent3}>
                        <h3>Чизбургер</h3>
                        <p className={styles.noveltiesCardContentDesc3}>Булка, котлета,сыр, соленый огурец, лук, помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез</p>
                        <p className={styles.noveltiesCardContentPrice3}>200 сом</p><br/>
                        <button className={styles.noveltiesCardContentBtn}>&#8722; <b>1</b> &#43;</button>
                        <button className={styles.noveltiesCardContentCart}>В КОРЗИНУ</button>
                    </div>
                </div>
                <div className={styles.noveltiesCard4}>
                    <img src={cheesburger4}/>
                    <div className={styles.noveltiesCardContent4}>
                        <h3>Чизбургер</h3>
                        <p className={styles.noveltiesCardContentDesc4}>Булка, котлета,сыр, соленый огурец, лук, помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез</p>
                        <p className={styles.noveltiesCardContentPrice4}>200 сом</p><br/>
                        <button className={styles.noveltiesCardContentBtn}>&#8722; <b>1</b> &#43;</button>
                        <button className={styles.noveltiesCardContentCart}>В КОРЗИНУ</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Novelties;