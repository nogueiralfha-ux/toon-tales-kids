import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function checkEpisodes() {
  const { data, error } = await supabase.from('episodes').select('id, title, is_published');
  console.log(`Encontrados ${data?.length} episódios no banco.`);
}
checkEpisodes();
