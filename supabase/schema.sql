-- Run this once in the Supabase SQL editor for your project.
-- Stores each signed-in student's retrieval-card scores and review-planner
-- state, so it survives across devices instead of living only in
-- localStorage. card_state.history is an append-only log of every graded
-- attempt (timestamp + score), used to render the trend charts on
-- progress.html — no schema change needed since card_state is jsonb.

create table if not exists public.progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  card_state jsonb not null default '{}'::jsonb,
  planner_state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint progress_card_state_size check (pg_column_size(card_state) < 65536),
  constraint progress_planner_state_size check (pg_column_size(planner_state) < 65536)
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

create policy "Users can delete own progress"
  on public.progress for delete
  using (auth.uid() = user_id);

create or replace function public.set_progress_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists progress_set_updated_at on public.progress;
create trigger progress_set_updated_at
before update on public.progress
for each row
execute function public.set_progress_updated_at();
