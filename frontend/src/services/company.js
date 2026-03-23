import { supabase } from '../lib/supabase';

export const companyService = {
  async getCompanyInfo() {
    const { data, error } = await supabase
      .from('company_info')
      .select('*')
      .eq('id', 'company_info')
      .single();
    
    if (error) throw error;
    return data;
  },

  async updateCompanyInfo(updates) {
    const { data, error } = await supabase
      .from('company_info')
      .update(updates)
      .eq('id', 'company_info')
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};
