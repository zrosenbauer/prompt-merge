import type { Falsy } from "../types.ts";
import { isArray, isFalsy, isObject, isString } from "./utils.ts";

/**
 * The arguments for the promptMerge function.
 * @see {@link promptMerge}
 */
export type PromptMergeArgs = Array<
  string | Falsy | Array<string | Falsy> | Record<string, boolean>
>;

/**
 * Merges a list of prompts into a single prompt, removing duplicates.
 * @param prompts - The prompts to merge
 * @returns The merged prompt with duplicates removed
 *
 * @example
 * ```ts
 * promptMerge(
 *   'You are a helpful assistant.',
 *   'You are a helpful assistant.', // This will be deduplicated
 *   ['You can help with tasks.', 'You can help with tasks.'], // This will be deduplicated
 *   {
 *     'You have access to tools.': true,
 *     'You have access to tools.': true, // This will be deduplicated
 *   }
 * );
 * ```
 */
export function promptMerge(...prompts: PromptMergeArgs): string {
  const strings = collectStrings(...prompts);
  const uniqueStrings = deduplicateStrings(strings);
  return uniqueStrings.filter((p) => !isFalsy(p)).join("\n");
}

/**
 * Flattens and collects all strings from the prompts, including nested arrays and objects.
 * @param prompts - The prompts to process
 * @returns An array of all strings found in the prompts
 */
function collectStrings(...prompts: PromptMergeArgs): string[] {
  const strings: string[] = [];

  for (const p of prompts) {
    if (isString(p)) {
      strings.push(p);
    } else if (isArray(p)) {
      strings.push(...collectStrings(...p));
    } else if (isObject(p)) {
      const values = [];
      for (const [key, value] of Object.entries(p)) {
        if (value) {
          values.push(key);
        }
      }
      strings.push(...collectStrings(...values));
    }
  }

  return strings;
}

/**
 * Deduplicates an array of strings while preserving order.
 * @param strings - The array of strings to deduplicate
 * @returns A new array with duplicates removed
 */
function deduplicateStrings(strings: string[]): string[] {
  const seen = new Set<string>();
  return strings.filter((str) => {
    if (seen.has(str)) {
      return false;
    }
    seen.add(str);
    return true;
  });
}

/*
|------------------
| Internals
|------------------
*/
