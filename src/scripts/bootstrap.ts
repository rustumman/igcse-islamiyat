import { CONTENT_TREE } from '../data/content-tree';
import { QUESTION_BANK } from '../data/quiz-bank';

declare global {
  interface Window {
    ROOT?: string;
    PAGE?: Record<string, string>;
    CONTENT_TREE?: typeof CONTENT_TREE;
    QUESTION_BANK?: typeof QUESTION_BANK;
    supabase?: {
      createClient: (url: string, key: string) => unknown;
    };
  }
}

window.CONTENT_TREE = CONTENT_TREE;
window.QUESTION_BANK = QUESTION_BANK;

await import('./app.js');
window.dispatchEvent(new Event('islamiyat:ready'));
