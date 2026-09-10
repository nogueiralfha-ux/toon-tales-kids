import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function findEpisode() {
  const { data, error } = await supabase.from('episodes').select('id, title, episode_number').ilike('title', '%Noé%').single();
  console.log('Episódio Noé:', data);
}
findEpisode();
