import test from 'node:test';
import assert from 'node:assert/strict';
import { projects } from './projects.js';

test('mantém AccessManager primeiro e inclui os novos projetos', () => {
  assert.deepEqual(projects.map(({ name }) => name), [
    'AccessManager', 'SERVNET — Carteirinha', 'Carolina Alcântara', 'mycash', 'Quem não me segue?', 'ARKtetura', 'RenameOS Desktop', 'pyCacador',
  ]);
});
test('cada card tem links de demonstração ou documentação e repositório', () => {
  for (const project of projects) {
    assert.match(project.showcaseUrl, /^(https:\/\/|\/projects\/)/, `${project.name} precisa de um link de apresentação`);
    if (project.repositoryUrl) assert.match(project.repositoryUrl, /^https:\/\/github\.com\/olegariobru\//, `${project.name} precisa do GitHub`);
    assert.ok(project.showcaseLabel && project.description);
  }
});
test('remove o projeto substituído e evita entradas duplicadas', () => {
  const slugs = projects.map(({ slug }) => slug);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.ok(!projects.some(({ name, slug }) => /olgusers/i.test(`${name} ${slug}`)));
});
