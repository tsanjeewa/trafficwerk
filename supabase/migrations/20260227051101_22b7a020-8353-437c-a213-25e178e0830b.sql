-- Create landing_posts table for dynamic SEO landing pages
CREATE TABLE public.landing_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  h1 TEXT NOT NULL,
  intro TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  benefits TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.landing_posts ENABLE ROW LEVEL SECURITY;

-- Public read access (marketing content)
CREATE POLICY "Landing posts are publicly readable"
  ON public.landing_posts
  FOR SELECT
  USING (true);