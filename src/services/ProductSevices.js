import axios from "axios"
import api from "../utils/api"

const ProductServices = {
    async getProducts() {
        const {data} = await api.get("/clothes")
        return data
    },
    
    async addProduct(payload) {
        const {data} = await api.post("/clothes", payload)
        return data
    }
}

export default ProductServices