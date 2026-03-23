const API_URL = "https://canocrystal-backend.onrender.com";

class AdminAPI {
  constructor() {
    this.baseURL = `${API_URL}/api`;
  }

  getToken() {
    return localStorage.getItem('admin_token');
  }

  async login(username, password) {
    const response = await fetch(`${this.baseURL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return response.json();
  }

  async getStats() {
    const response = await fetch(`${this.baseURL}/admin/stats`, {
      headers: { 'Authorization': `Bearer ${this.getToken()}` }
    });
    return response.json();
  }

  async getBrands() {
    const response = await fetch(`${this.baseURL}/brands`);
    return response.json();
  }

  async updateBrand(id, data) {
    const response = await fetch(`${this.baseURL}/admin/brands/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async getProducts(brand = null) {
    const url = brand ? `${this.baseURL}/products?brand=${brand}` : `${this.baseURL}/products`;
    const response = await fetch(url);
    return response.json();
  }

  async createProduct(data) {
    const response = await fetch(`${this.baseURL}/admin/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async updateProduct(id, data) {
    const response = await fetch(`${this.baseURL}/admin/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async deleteProduct(id) {
    const response = await fetch(`${this.baseURL}/admin/products/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${this.getToken()}` }
    });
    return response.json();
  }

  async getCompanyInfo() {
    const response = await fetch(`${this.baseURL}/company-info`);
    return response.json();
  }

  async updateCompanyInfo(data) {
    const response = await fetch(`${this.baseURL}/admin/company-info`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
}

export default new AdminAPI();
