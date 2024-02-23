import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jyverfcofbjqkmwszkcq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5dmVyZmNvZmJqcWttd3N6a2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTg4MjQsImV4cCI6MjAyNDI3NDgyNH0.5ozDlN-VZwCJuP1Q5-G8HcUKhib1lq4LUhdGgCmDFWI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
