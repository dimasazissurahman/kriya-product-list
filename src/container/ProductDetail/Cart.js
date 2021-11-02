import React, { useContext } from 'react';
import { AppContext } from '../../component/Provider/Provider';
import { Header } from '../../component/Header/Header';
import styles from '../Home/Home.module.css';

const CartPage = () => {
    const { cartProduct } = useContext(AppContext);
    return (
        <>
            <Header />
            <div className={styles['container']}>
                <h1>This is your cart :</h1>
                <div className={styles['container-list']}>
                    {cartProduct && cartProduct.map((data, i) => {
                        return (
                            <div key={i} className={styles['box-list']}>
                                <p>Title : {data.title}</p>
                                <p>Qty : {data.qty}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CartPage;