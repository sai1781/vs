import axios from 'axios'

const product_url = axios.create({
    baseURL:"https://kontests.net/api/v1/all",
    timeout:15000,
})

export {product_url};