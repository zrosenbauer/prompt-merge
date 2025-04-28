import type { Falsy, Nil } from "../types.ts";

/**
 * Type guard to check if a value is a string.
 * @param value - The value to check
 * @returns True if the value is a string, false otherwise
 *
 * @example
 * ```ts
 * isString('hello') // true
 * isString(123) // false
 * ```
 */
export function isString(value: unknown): value is string {
  return typeof value === "string";
}

/**
 * Type guard to check if a value is an array.
 * @param value - The value to check
 * @returns True if the value is an array, false otherwise
 *
 * @example
 * ```ts
 * isArray([1, 2, 3]) // true
 * isArray('hello') // false
 * ```
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

/**
 * Type guard to check if a value is falsy.
 * Falsy values are: null, undefined, false, 0, ""
 * @param value - The value to check
 * @returns True if the value is falsy, false otherwise
 *
 * @example
 * ```ts
 * isFalsy('') // true
 * isFalsy('hello') // false
 * ```
 */
export function isFalsy(value: unknown): value is Falsy {
  return !value;
}

/**
 * Type guard to check if a value is a plain object.
 * @param value - The value to check
 * @returns True if the value is a plain object, false otherwise
 *
 * @example
 * ```ts
 * isObject({ key: 'value' }) // true
 * isObject([]) // false
 * ```
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !isArray(value);
}

/**
 * Type guard to check if a value is null or undefined.
 * @param value - The value to check
 * @returns True if the value is null or undefined, false otherwise
 *
 * @example
 * ```ts
 * isNil(null) // true
 * isNil(undefined) // true
 * isNil('hello') // false
 * ```
 */
export function isNil(value: unknown): value is Nil {
  return value === null || value === undefined;
}
