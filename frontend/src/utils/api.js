const API_URL = "https://canocrystal-backend.onrender.com";

class API {
  constructor() {
    this.baseURL = `${API_URL}/api`;
  }

  async getBrands() {
    const response = await fetch(`${this.baseURL}/brands`);
    return response.json();
  }

  async getBrandBySlug(slug) {
    const response = await fetch(`${this.baseURL}/brands/${slug}`);
    return response.json();
  }

  async getProducts(brand = null, section = null) {
    let url = `${this.baseURL}/products`;
    const params = new URLSearchParams();
    
    if (brand) params.append('brand', brand);
    if (section) params.append('section', section);
    
    if (params.toString()) {
      url += `?${params.toString()}`;
    }
    
    const response = await fetch(url);
    return response.json();
  }

  async getProductById(id) {
    const response = await fetch(`${this.baseURL}/products/${id}`);
    return response.json();
  }

  async getCompanyInfo() {
    const response = await fetch(`${this.baseURL}/company-info`);
    return response.json();
  }
}

export default new API();
