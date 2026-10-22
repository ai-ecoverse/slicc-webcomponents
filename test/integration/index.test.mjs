import assert from 'node:assert/strict';
import { test } from 'node:test';

test('the package entry imports with no exports', async () => {
  const entry = await import('@ai-ecoverse/slicc-webcomponents');
  assert.deepEqual(Object.keys(entry), []);
});
