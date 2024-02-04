import { createRoot } from 'react-dom/client';
import { createFromFetch } from 'react-server-dom-webpack/client';

createRoot(document.documentElement).render(await createFromFetch(fetch('/react')));
