import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://rgnmsyltvuuhmeipulst.supabase.co"
const supabaseKey = "sb_publishable_dqCQDAErOW3Zi6ublWF2fg_fIQDVQg2"

export const supabase = createClient(supabaseUrl, supabaseKey)