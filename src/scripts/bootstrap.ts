import { createClient } from '@supabase/supabase-js';
import { CONTENT_TREE } from '../data/content-tree';
import { QUESTION_BANK } from '../data/quiz-bank';

declare global {
  interface Window {
    ROOT?: string;
    PAGE?: Record<string, string>;
    CONTENT_TREE?: typeof CONTENT_TREE;
    QUESTION_BANK?: typeof QUESTION_BANK;
    supabase?: {
      createClient: typeof createClient;
    };
  }
}

// Expose the same window.supabase.createClient API app.js already expects,
// but from the npm package — no CDN and no SRI to break the sidebar.
window.supabase = { createClient };
window.CONTENT_TREE = CONTENT_TREE;
window.QUESTION_BANK = QUESTION_BANK;

await import('./app.js');
window.dispatchEvent(new Event('islamiyat:ready'));
