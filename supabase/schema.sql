-- Run this once in the Supabase SQL editor for your project.
-- Stores each signed-in student's retrieval-card scores and review-planner
-- state, so it survives across devices instead of living only in
-- localStorage.

create table if not exists public.progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  card_state jsonb not null default '{}'::jsonb,
  planner_state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

create policy "Users can view own progress"
  on public.progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on public.progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on public.progress for update
  using (auth.uid() = user_id);
