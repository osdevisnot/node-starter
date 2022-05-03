#!/usr/bin/env node

const { spawn } = require('node:child_process');
const process = require('node:process');
const esbuild = require('esbuild');
const pkg = require('./package.json');

let server;

const isDev = process.argv[2] !== 'build';

const onRebuild = () => {
	if (isDev) {
		if (server) server.kill('SIGINT');
		server = spawn('node', ['dist/server.js'], { stdio: 'inherit' });
	}
};

esbuild
	.build({
		entryPoints: ['src/server.js'],
		bundle: true,
		sourcemap: true,
		format: 'esm',
		platform: 'node',
		target: 'node' + Number.parseInt(pkg.engines.node.replace(/\D/g, ''), 10),
		external: Object.keys({ ...pkg.dependencies, ...pkg.devDependencies }),
		outdir: 'dist',
		watch: isDev && { onRebuild },
	})
	.finally(onRebuild);
