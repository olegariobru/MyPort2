import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('pages expose keyboard navigation and a named main landmark', async () => {
  const app = await readFile(new URL('./App.jsx', import.meta.url), 'utf8');
  const css = await readFile(new URL('./index.css', import.meta.url), 'utf8');
  assert.match(app, /skipLink/);
  assert.match(app, /id="main-content"/);
  assert.match(app, /aria-label="Navegação principal"/);
  assert.match(css, /:focus-visible/);
});
test('layout includes narrow-screen and reduced-motion rules', async () => {
  const css = await Promise.all([
    readFile(new URL('./App.css', import.meta.url), 'utf8'),
    readFile(new URL('./paginas/Projetos/projetos.css', import.meta.url), 'utf8'),
    readFile(new URL('./paginas/SobreMim/sobremim.css', import.meta.url), 'utf8'),
    readFile(new URL('./Componentes/ProjectCards/projectCard.module.css', import.meta.url), 'utf8'),
  ]);
  assert.ok(css.some((file) => /max-width:\s*760px/.test(file)));
  assert.match(css[0] + css[1], /prefers-reduced-motion/);
});
