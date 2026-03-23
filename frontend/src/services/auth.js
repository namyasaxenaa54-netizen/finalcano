import { supabase } from '../lib/supabase';

export const authService = {
  async login(usernameOrEmail, password) {
    // Supabase traditionally uses Email, but we can handle both if we have a lookup
    // For now, assuming usernameOrEmail is an email as per Supabase standards
    const { data, error } = await supabase.auth.signInWithPassword({
      email: usernameOrEmail,
      password: password,
    });
    
    if (error) throw error;
    return data;
  },

  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback);
  }
};
