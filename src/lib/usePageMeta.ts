import { useEffect } from 'react';

// The SPA ships one index.html, so routed pages set their own head tags.
export function usePageMeta(title: string, description: string, path: string) {
  useEffect(() => {
    const url = `https://howtoicf.com${path}`;
    document.title = title;
    const set = (selector: string, attr: string, value: string) =>
      document.querySelector(selector)?.setAttribute(attr, value);

    set('meta[name="description"]', 'content', description);
    set('link[rel="canonical"]', 'href', url);
    set('meta[property="og:url"]', 'content', url);
    set('meta[property="og:title"]', 'content', title);
    set('meta[property="og:description"]', 'content', description);
    set('meta[name="twitter:title"]', 'content', title);
    set('meta[name="twitter:description"]', 'content', description);
  }, [title, description, path]);
}
