import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fhxlxnmgmncccsocvtpr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGx4bm1nbW5jY2Nzb2N2dHByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2MDM4OTksImV4cCI6MjA1OTE3OTg5OX0.SVC6MtZqGgNKHXkCQ635GyBpCcE5JpwXoViNKWY-aFY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
