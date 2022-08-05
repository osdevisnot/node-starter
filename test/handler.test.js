import { describe, expect, test } from 'vitest';
import { handler } from '../src/handler.js';

describe('node-starter', () => {
	test('handler', () => {
		expect(handler).toBeDefined();
	});
});
