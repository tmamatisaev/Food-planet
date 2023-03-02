import React from 'react';
import styles from './Reviews.module.css'
import border from '../../images/reviewsBorder.svg'
import pencil from '../../images/ручка.svg'
import avatar from '../../images/avatar.svg'

const Reviews = () => {
    return (
        <>
            <div className={styles.reviewsBlock}>
                <h2>Отзывы</h2>
                <div className={styles.reviewsCard}>
                    <img className={styles.reviewsCardBorder} src={border}/>
                    <img className={styles.reviewsCardAvatar} src={avatar}/>
                    <h3>Сергей <img className={styles.pencil} src={pencil}/></h3>
                    <p>Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему
                        коллективу понравилась! День Рождения прошел отлично! :)</p>
                    <span>02.07.2020</span>
                </div>
                <div className={styles.reviewsCard2}>
                    <img className={styles.reviewsCardBorder2} src={border}/>
                    <img className={styles.reviewsCardAvatar2} src={avatar}/>
                    <h3>Сергей <img className={styles.pencil} src={pencil}/></h3>
                    <p>Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными
                        клиентами! Спасибо!</p>
                    <span>02.07.2020</span>
                </div>
                <div className={styles.reviewsCard3}>
                    <img className={styles.reviewsCardBorder3} src={border}/>
                    <img className={styles.reviewsCardAvatar3} src={avatar}/>
                    <h3>Сергей <img className={styles.pencil} src={pencil}/></h3>
                    <p>Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена
                        тоже довольна!</p>
                    <span>02.07.2020</span>
                </div>
                <div className={styles.reviewsCard4}>
                    <img className={styles.reviewsCardBorder4} src={border}/>
                    <img className={styles.reviewsCardAvatar4} src={avatar}/>
                    <h3>Сергей <img className={styles.pencil} src={pencil}/></h3>
                    <p>Хочу поблагодарить за бургер !Очень вкусненький в меру остренький)
                        Спасибо,удивили!)</p>
                    <span>02.07.2020</span>
                </div>
            </div>
        </>
    );
};

export default Reviews;