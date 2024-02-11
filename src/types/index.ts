import { Database } from './supabase';

export type Post = Omit<Database['public']['Tables']['Post']['Row'], 'tags'> & {
  tags: string[];
};
export type postRequest = Database['public']['Tables']['Post']['Insert'];
