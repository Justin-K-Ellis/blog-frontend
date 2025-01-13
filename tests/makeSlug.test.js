import { expect, test } from "vitest";
import makeSlug from "../src/services/makeSlug.js";

test("makes slug from title with no articles", () => {
  expect(makeSlug("Philosophy in Threes")).toBe("philosophy-in-threes");
});

test("title containing 'the'", () => {
  expect(makeSlug("Pet the Cat")).toBe("pet-cat");
  expect(makeSlug("The Argument from Eternal Truths")).toBe(
    "argument-from-eternal-truths"
  );
});
