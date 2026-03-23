import { supabase } from '../lib/supabase';

export const productService = {
  async getProducts(brandSlug = null, section = null) {
    let query = supabase
      .from('products')
      .select('*, brands!inner(*)');
    
    if (brandSlug) {
      query = query.eq('brands.slug', brandSlug);
    }
    
    if (section) {
      query = query.eq('section', section);
    }
    
    const { data, error } = await query.order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getProductById(id) {
    const { data, error } = await supabase
      .from('products')
      .select('*, brands(*)')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async createProduct(product) {
    const { data, error } = await supabase
      .from('products')
      .insert([product])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async updateProduct(id, updates) {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async deleteProduct(id) {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  }
};
