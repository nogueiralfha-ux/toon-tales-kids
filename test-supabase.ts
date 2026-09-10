import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function testConnection() {
  const { data, error } = await supabase.from('episodes').select('title').limit(2);
  if (error) {
    console.error('❌ Erro de conexão:', error);
  } else {
    console.log('✅ Conexão estabelecida com sucesso! Episódios encontrados:', data);
  }
}
testConnection();
