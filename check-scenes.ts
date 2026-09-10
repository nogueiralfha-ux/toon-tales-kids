import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function checkScenes() {
  const { data, error } = await supabase.from('scenes').select('id, episode_id, character_name, dialogue').limit(5);
  console.log('Algumas cenas:', data);
}
checkScenes();
