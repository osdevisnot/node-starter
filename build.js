#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { argv } from 'node:process';

import { build } from 'esbuild';

const isDev = argv[2] !== 'build';

const externalsPlugin = {
	name: 'externals-plugin',
	setup(bundle) {
		const filter = /^[^./]|^\.[^./]|^\.\.[^/]/;
		bundle.onResolve({ filter }, (args) => ({ external: true, path: args.path }));
	},
};

let server;

const onRebuild = () => {
	if (isDev) {
		if (server) server.kill('SIGINT');
		server = spawn('node', ['dist/server.js'], { stdio: 'inherit' });
	}
};

build({
	entryPoints: ['src/server.js'],
	bundle: true,
	sourcemap: true,
	format: 'esm',
	platform: 'node',
	target: 'node16',
	plugins: [externalsPlugin],
	outdir: 'dist',
	watch: isDev && { onRebuild },
}).finally(onRebuild);
