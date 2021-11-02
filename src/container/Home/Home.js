import React, { useContext, useEffect } from "react";
import { getProduct } from "../../api/api";
import { Header } from "../../component/Header/Header";
import { AppContext } from "../../component/Provider/Provider";
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

const HomePage = () => {
    const { cartProduct, setCartProduct, data, setData } = useContext(AppContext);

    useEffect(() => {
        const getData = async () => {
            const res = await getProduct();
            const newObj = res.data.map((data, i) => {
                return ({ title: data.title, qty: 0 })
            });
            setData(newObj);
        }
        if (data.length === 0) {
            getData();
        }
    }, [data, setData]);

    const handleIncreaseDecrease = (i, increase) => {
        let newArr = [...data];
        if (increase) {
            let count = data[i].qty + 1;
            newArr[i].qty = count;
            setData(newArr);
        } else {
            let count = data[i].qty === 0 ? data[i].qty - 0 : data[i].qty - 1;
            newArr[i].qty = count;
            setData(newArr);
        }
    }

    const handleCheckout = async (i) => {
        if (data[i].qty === 0) {
            const filterArr = await cartProduct.filter(item => item.title !== data[i].title);
            setCartProduct(filterArr);
        }
        else {
            setCartProduct([...new Set([...cartProduct, data[i]])]);
        }
    }

    return (
        <>
            <Header />
            <div className={styles['container']}>
                <h1>List Product :</h1>
                <div className={styles['container-list']}>
                    {data.map((data, i) => {
                        return (
                            <div key={i} className={styles['box-list']}>
                                <div className={styles['list-data']}>
                                    <p>Title : {data.title}</p>
                                    <p>Qty : {data.qty}</p>
                                </div>
                                <div className={styles['list-button']}>
                                    <button onClick={() => handleIncreaseDecrease(i, true)}>+</button>
                                    <button onClick={() => handleIncreaseDecrease(i, false)}>-</button>
                                    <NavLink to="/detail/id=cart" className={styles['checkout-button']}>
                                        <button onClick={() => handleCheckout(i)}>Checkout</button>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default HomePage;