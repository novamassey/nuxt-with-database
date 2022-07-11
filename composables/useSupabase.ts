import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkcGlodW5pcHFwd2NnYXNleHB0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NzMxMjk5MSwiZXhwIjoxOTcyODg4OTkxfQ._hQyCJCEl8CPQJUdaZK2UnivQrL7f6bQjpb4dZMHMus";

const SUPABASE_URL = "https://edpihunipqpwcgasexpt.supabase.co";

const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  return {
    supabase,
  }
};

export default useSupabase;
