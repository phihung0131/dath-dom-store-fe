import axiosInstance from "../axios/axios";

export const apiService = {
  // Products
  getProduct: (page = 1, limit = 10) =>
    axiosInstance.get(`/products?page=${page}&limit=${limit}`),
  getSearchProducts: (
    page = 1,
    limit = 10,
    search = "",
    category = "",
    priceRange = "",
    sortBy = "",
    sortOrder = "",
    minRating = 0,
  ) => {
    // Tạo query string thủ công
    const queryString = `page=${page}&limit=${limit}&search=${search}&category=${category}&priceRange=${priceRange}&sortBy=${sortBy}&sortOrder=${sortOrder}&minRating=${minRating}`;

    // Gửi request với query string tự tạo
    return axiosInstance.get(`/products/search?${queryString}`);
  },
  getPromotionProducts: () => axiosInstance.get("/products/promotional"),
  getAProduct: (id) => axiosInstance.get(`/products/${id}`),

  // Auth
  login: (username, password) =>
    axiosInstance.post("/login", {
      username,
      password,
    }),
  register: (username, password, name, address, email) =>
    axiosInstance.post("/register", {
      username,
      password,
      name,
      address,
      email,
    }),
  forgetPassword: (username) =>
    axiosInstance.post("/forgot-password", { username }),

  // Users
  getProfile: (token) => axiosInstance.get("/users/profile", { token }),
  putProfile: (name, address) =>
    axiosInstance.put("/users/profile", { name, address }),
  changePassword: (currentPassword, newPassword) =>
    axiosInstance.put("/users/change-password", {
      currentPassword,
      newPassword,
    }),

  // Support
  getSupportTickers: () => axiosInstance.get("/customer/support-tickets"),
  postSupportTicket: (subject, description) =>
    axiosInstance.post("/customer/support-tickets", { subject, description }),
  putSupportTicket: (id, subject, description) =>
    axiosInstance.put(`/customer/support-tickets/${id}`, {
      subject,
      description,
    }),
  deleteSupportTicket: (id) =>
    axiosInstance.delete(`/customer/support-tickets/${id}`),

  // Reviews
  postReview: (product, comment, rating) =>
    axiosInstance.post(`/review`, { product, comment, rating }),
  putReview: (reviewId, product, comment, rating) =>
    axiosInstance.put(`/review/${reviewId}`, { product, comment, rating }),
  deleteReview: (reviewId) => axiosInstance.delete(`/review/${reviewId}`),

  // Carts
  postCarts: (product_id, quantity, color, size) =>
    axiosInstance.post("/carts", { product_id, quantity, color, size }),
  getCarts: () => axiosInstance.get("/carts"),
  putCarts: (cartProductId, quantity, color) =>
    axiosInstance.put("/carts", { cartProductId, quantity, color }),
  deleteCarts: (cartProductId) =>
    axiosInstance.delete("/carts", { data: { cartProductId } }),

  // Orders
  postOrder: (products, codeVoucher, paymentMethod, name, phone, address) =>
    axiosInstance.post("/orders", { products, codeVoucher, paymentMethod, name, phone, address }),
  getOrders: () => axiosInstance.get("/orders"),
  getOrder: (id) => axiosInstance.get(`/orders/${id}`),
};

export default apiService;
