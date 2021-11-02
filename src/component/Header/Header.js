import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { useHistory, useParams, NavLink } from 'react-router-dom';
import { AppContext } from "../Provider/Provider";
import styles from "./Header.module.css";

export const Header = () => {
    const { cartProduct, setCartProduct, setData } = useContext(AppContext);
    const [totalQty, setTotalQty] = useState(0);
    let history = useHistory();
    let { page } = useParams();
    useEffect(() => {
        if (cartProduct) {
            console.log(cartProduct);
            let total = cartProduct.reduce((accum, item) => accum + item.qty, 0);
            setTotalQty(total);
        }
    }, [cartProduct]);

    const handleBuy = () => {
        setCartProduct([]);
        setData([]);
        alert("Success! The page will automatically direct to home page");
        setTimeout(() => {
            history.push("/");
        },1000);
    }

    return (
        <header className={`${styles["header_logo"]} + ${styles["font_title"]}`}>
            <h1 onClick={() => { history.push("/") }}>KRIYA PRODUCT</h1>
            {page === "cart" &&
                <h3 onClick={() => handleBuy()}>Buy All</h3>
            }
            <div className={`${styles["sub_menu"]} + ${styles["mid"]}`}>
                {/* <p onClick={() => { window.location.href = '/' }}>Home</p> */}
            </div>
            <div className={`${styles["sub_menu"]}`}>
                <p>Hi, Guest</p>
                <NavLink to="/detail/id=cart" className={styles["box_button"]}>
                    <div>
                        <p>Total Cart: {totalQty}</p>
                    </div>
                </NavLink>
            </div>
        </header>
    )
}