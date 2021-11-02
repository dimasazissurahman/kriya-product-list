import axios from "axios"

export const getProduct = async () => {
    try {
        const res = axios.get('https://jsonplaceholder.typicode.com/todos');
        return res;
    } catch (error) {
        throw error;
    }
}