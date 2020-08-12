// useStackRef.ts
// Copyright 2020 nariakiiwatani
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import { useRef } from "react";

export interface Stack<T> {
	value: T | null
	size: number
	push: (t: T) => number
	pop: () => T | null
	reset: () => void
	clear: () => void
}

export const useStackRef = <T>(init: T | T[] | (() => T) | (() => T[]) = []): Stack<T> => {
	const initial: T[] = ((value) => Array.isArray(value) ? value : [value])(init instanceof Function ? init() : init)
	const stackRef = useRef<T[]>(initial)

	const push = (t: T): number => stackRef.current.push(t)
	const pop = (): T | null => stackRef.current.pop() || null
	const reset = (): void => { stackRef.current = initial }
	const clear = (): void => { stackRef.current = [] }

	return {
		value: stackRef.current.slice(-1)[0] || null,
		size: stackRef.current.length,
		push, pop, reset, clear
	};
};