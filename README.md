# Getting Started with KRIYA PRODUCT APP
Before started make sure to npm install and then can running with npm run start. 
## Features :
1. Page 1 (Home Page) => link endpoint "/";
    There are : 
    - Header 
        -> Button "KRIYA PRODUCT" to direct to Home Page
        -> Button "Total Cart: {number total quantity of product has been checkout}" to direct to detail Page.
    - Main Content 
        -> List of Product
            Data get from this url "https://jsonplaceholder.typicode.com/todos" with Axios.
            Data will automatically get and set to state context. 
            Why I using context rather than redux? => because data are not complex and big, so I choosing context to manage state.
            - there are : 
                Button (+) and (-) their function are to Increase total and decrease total.
                Button "Checkout" is to setState Product Qty has been Increase or Decrease, then page will automatically direct to detail Page.

2. Page 2 (Detail Page) 
    There are :
    - Header 
        -> Button "KRIYA PRODUCT" to direct to Home Page, all data state in context not changing.
        -> Button "Buy All" will remove all state in context, then page will automatically direct to Home Page, and if state context is [] then system will automatically get data from API.
        -> Button "Total Cart: {number total quantity of product has been checkout}" to go to detail Page.

    - Main Content
        To show all data has been checkout in Home Page before.
        the system will checking if any duplication data and remove the duplicate data.

I build each folder for component, container, and api.
based on my experience, it would be easier to find file, and if project get bigger it would be reusable component.

this project has been deploy at this url : https://admiring-morse-dd35c6.netlify.app/

Thank you

Regards,
## Dimas


