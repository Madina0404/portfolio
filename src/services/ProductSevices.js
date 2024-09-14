import api from "../utils/api";

const ProductServices = {
  async getProducts() {
    const { data } = await api.get("/clothes");
    return data;
  },

  async addProduct(payload) {
    const { data } = await api.post("/clothes", payload);
    return data;
  },
  async deleteProduct(id) {
    const { data } = await api.delete(`${"/clothes"}/${id}`);
    return data;
  },
  async getOne({ queryKey }) {
    const [_, id] = queryKey;
    const { data } = await api.get(`/clothes/${id}`);
    return data;
  },
  async updateOne(payload) {
    const { data } = await api.put(`/clothes/${payload.id}`, payload.product);
    return data;
  },
};

export default ProductServices;
