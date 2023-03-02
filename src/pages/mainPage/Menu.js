import React from 'react';
import styles from "./Menu.module.css";
import img from '../../images/Vector 1.svg'
import pizza from '../../images/pizza1.svg'
import pizza2 from '../../images/pizza2.svg'
import pizza3 from '../../images/pizza3.svg'
import pizza4 from '../../images/pizza4.svg'
import pizza5 from '../../images/pizza5.svg'
import pizza6 from '../../images/pizza6.svg'
import pizza8 from '../../images/pizza8.svg'


const Menu = () => {
    return (
        <>
            <div className={styles.menu}>
                <div className={styles.menuList}>
                    <h2>Меню</h2>
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
                <p className={styles.menuSort}>Сортировать по:</p>
                <select>
                    <option value="">По умолчанию <img src={img}/></option>
                    <option value="">Возрастанию цены</option>
                    <option value="">Новинки</option>
                </select>
                <div className={styles.menuCard1}>
                    <img src={pizza}/>
                    <div className={styles.menuCardContent}>
                        <h3>Мексиканская</h3>
                        <p className={styles.menuCardContentDesc}>Булка, котлета,сыр, соленый огурец, лук,
                            помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез</p>
                        <p className={styles.menuCardContentPrice}>200 сом</p><br/>
                        <button className={styles.menuCardContentBtn}>&#8722; <b>1</b> &#43;</button>
                        <button className={styles.menuCardContentCart}>В КОРЗИНУ</button>
                    </div>
                </div>
                <div className={styles.menuCard2}>
                    <img src={pizza2}/>
                    <div className={styles.menuCardContent2}>
                        <h3>Мексиканская</h3>
                        <p className={styles.menuCardContentDesc2}>Булка, котлета,сыр, соленый огурец, лук,
                            помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез</p>
                        <p className={styles.menuCardContentPrice2}>200 сом</p><br/>
                        <button className={styles.menuCardContentBtn}>&#8722; <b>1</b> &#43;</button>
                        <button className={styles.menuCardContentCart}>В КОРЗИНУ</button>
                    </div>
                </div>
                <div className={styles.menuCard3}>
                    <img src={pizza3}/>
                    <div className={styles.menuCardContent3}>
                        <h3>Мексиканская</h3>
                        <p className={styles.menuCardContentDesc3}>Булка, котлета,сыр, соленый огурец, лук,
                            помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез</p>
                        <p className={styles.menuCardContentPrice3}>200 сом</p><br/>
                        <button className={styles.menuCardContentBtn}>&#8722; <b>1</b> &#43;</button>
                        <button className={styles.menuCardContentCart}>В КОРЗИНУ</button>
                    </div>
                </div>
                <div className={styles.menuCard4}>
                    <img src={pizza4}/>
                    <div className={styles.menuCardContent4}>
                        <h3>Мексиканская</h3>
                        <p className={styles.menuCardContentDesc4}>Булка, котлета,сыр, соленый огурец, лук,
                            помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез</p>
                        <p className={styles.menuCardContentPrice4}>200 сом</p><br/>
                        <button className={styles.menuCardContentBtn}>&#8722; <b>1</b> &#43;</button>
                        <button className={styles.menuCardContentCart}>В КОРЗИНУ</button>
                    </div>
                </div>
                <div className={styles.menuCard5}>
                    <img src={pizza5}/>
                    <div className={styles.menuCardContent5}>
                        <h3>Мексиканская</h3>
                        <p className={styles.menuCardContentDesc5}>Булка, котлета,сыр, соленый огурец, лук,
                            помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез</p>
                        <p className={styles.menuCardContentPrice5}>200 сом</p><br/>
                        <button className={styles.menuCardContentBtn}>&#8722; <b>1</b> &#43;</button>
                        <button className={styles.menuCardContentCart}>В КОРЗИНУ</button>
                    </div>
                </div>
                <div className={styles.menuCard6}>
                    <img src={pizza6}/>
                    <div className={styles.menuCardContent6}>
                        <h3>Мексиканская</h3>
                        <p className={styles.menuCardContentDesc6}>Булка, котлета,сыр, соленый огурец, лук,
                            помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез</p>
                        <p className={styles.menuCardContentPrice6}>200 сом</p><br/>
                        <button className={styles.menuCardContentBtn}>&#8722; <b>1</b> &#43;</button>
                        <button className={styles.menuCardContentCart}>В КОРЗИНУ</button>
                    </div>
                </div>
                <div className={styles.menuCard7}>
                    <img src={pizza3}/>
                    <div className={styles.menuCardContent7}>
                        <h3>Мексиканская</h3>
                        <p className={styles.menuCardContentDesc7}>Булка, котлета,сыр, соленый огурец, лук,
                            помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез</p>
                        <p className={styles.menuCardContentPrice7}>200 сом</p><br/>
                        <button className={styles.menuCardContentBtn}>&#8722; <b>1</b> &#43;</button>
                        <button className={styles.menuCardContentCart}>В КОРЗИНУ</button>
                    </div>
                </div>
                <div className={styles.menuCard8}>
                    <img src={pizza8}/>
                    <div className={styles.menuCardContent8}>
                        <h3>Мексиканская</h3>
                        <p className={styles.menuCardContentDesc8}>Булка, котлета,сыр, соленый огурец, лук,
                            помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез</p>
                        <p className={styles.menuCardContentPrice8}>200 сом</p><br/>
                        <button className={styles.menuCardContentBtn}>&#8722; <b>1</b> &#43;</button>
                        <button className={styles.menuCardContentCart}>В КОРЗИНУ</button>
                    </div>
                </div>
                <button className={styles.menuBtn}>ПОКАЗАТЬ ЕЩЕ</button>
            </div>
        </>
    );
};

export default Menu;