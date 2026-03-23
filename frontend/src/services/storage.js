import { supabase } from '../lib/supabase';

export const storageService = {
  async uploadImage(file, folder = 'uploads') {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${folder}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('site-assets')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('site-assets')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  },

  async deleteImage(url) {
    try {
      // Extract path from public URL
      const path = url.split('/storage/v1/object/public/site-assets/')[1];
      if (!path) return;

      const { error } = await supabase.storage
        .from('site-assets')
        .remove([path]);

      if (error) throw error;
    } catch (error) {
      console.error('Error deleting image:', error);
      throw error;
    }
  }
};
