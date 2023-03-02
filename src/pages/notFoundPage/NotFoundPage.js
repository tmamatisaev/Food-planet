import React from 'react';
import styles from './NotFoundPage.module.css'
import not404 from '../../images/23736e5af84855ef8458126d8775732b---pages-page-design.jpg'
import brg from '../../images/pizza3.svg'
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.notFound}>
                    <span>4</span><img src={brg}/><span>4</span>
                    <h3>ERROR</h3>
                    <p>Упс... Что то не так,перейдите в главное меню</p>
                    <Link to='/'>
                        <button>Главное меню</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;