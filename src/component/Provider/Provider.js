import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [cartProduct, setCartProduct] = useState([]);
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     if(cartProduct){
    //         if (cartProduct.length === 0) {
    //             const data = localStorage.getItem("cartObj");
    //             setCartProduct(JSON.parse(data));
    //         }
    //     }
    // }, [cartProduct]);

    return <AppContext.Provider value={{
        cartProduct: cartProduct,
        setCartProduct: setCartProduct,
        data: data,
        setData: setData,
    }}>
        {children}
    </AppContext.Provider>
}

export { AppContext, AppProvider };