import { cp, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const source = resolve('admin');
const destination = resolve('dist', 'admin');

await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });
console.log('Copied admin files to dist/admin');
