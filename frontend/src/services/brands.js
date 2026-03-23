import { supabase } from '../lib/supabase';

export const brandService = {
  async getBrands() {
    const { data, error } = await supabase
      .from('brands')
      .select('*')
      .order('name');
    
    if (error) throw error;
    return data;
  },

  async getBrandBySlug(slug) {
    const { data, error } = await supabase
      .from('brands')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error) throw error;
    return data;
  },

  async createBrand(brand) {
    const { data, error } = await supabase
      .from('brands')
      .insert([brand])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async updateBrand(id, updates) {
    const { data, error } = await supabase
      .from('brands')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async deleteBrand(id) {
    const { error } = await supabase
      .from('brands')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  }
};
