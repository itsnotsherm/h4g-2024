import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://kyqlvpyibqlxiibakpbg.supabase.co"; 
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5cWx2cHlpYnFseGlpYmFrcGJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMTU2MzUsImV4cCI6MjA1MjY5MTYzNX0.SXqu3BxRovPwW_UJ6ASt9qi1jcQv5VsVyFpdR9IkgJY"; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);