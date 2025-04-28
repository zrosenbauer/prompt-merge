import { describe, expect, it } from "vitest";
import { promptMerge } from "../prompt-merge.ts";

describe("promptMerge", () => {
  it("should merge string prompts", () => {
    expect(promptMerge("Hello", "World")).toBe("Hello\nWorld");
  });

  it("should handle falsy values", () => {
    expect(promptMerge("Hello", null, undefined, false, 0, "", "World")).toBe(
      "Hello\nWorld",
    );
  });

  it("should handle arrays of prompts", () => {
    expect(promptMerge(["Hello", "World"], "!")).toBe("Hello\nWorld\n!");
  });

  it("should handle conditional objects", () => {
    expect(
      promptMerge({
        Hello: true,
        World: false,
        "!": true,
      }),
    ).toBe("Hello\n!");
  });

  it("should handle mixed inputs", () => {
    expect(
      promptMerge("Hello", ["World"], {
        "!": true,
        "?": false,
      }),
    ).toBe("Hello\nWorld\n!");
  });

  it("should handle empty inputs", () => {
    expect(promptMerge()).toBe("");
    expect(promptMerge([])).toBe("");
    expect(promptMerge({})).toBe("");
  });

  it("should handle the example from the documentation", () => {
    const defaultSystemPrompts = ["You are helpful.", "You are kind."];
    const hasAccessToTools = false;
    const canHelp = false;

    expect(
      promptMerge(
        "You are a helpful assistant.",
        canHelp && "You can help with tasks.",
        defaultSystemPrompts,
        {
          "You have access to the following tools: githubSearch, googleSearch":
            hasAccessToTools,
        },
      ),
    ).toBe("You are a helpful assistant.\nYou are helpful.\nYou are kind.");
  });

  it("should deduplicate strings", () => {
    expect(
      promptMerge("Hello", "Hello", ["World", "World"], {
        Hello: true,
        World: true,
      }),
    ).toBe("Hello\nWorld");
  });

  it("should preserve order while deduplicating", () => {
    expect(promptMerge("First", "Second", "First", "Third", "Second")).toBe(
      "First\nSecond\nThird",
    );
  });

  it("should handle nested arrays and objects", () => {
    expect(
      promptMerge("Hello", ["World", "!"], {
        Hello: true,
        World: true,
        "!": true,
      }),
    ).toBe("Hello\nWorld\n!");
  });

  it("should handle falsy values", () => {
    expect(promptMerge("Hello", null, undefined, false, 0, "", "World")).toBe(
      "Hello\nWorld",
    );
  });
});
