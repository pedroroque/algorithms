import { describe, it, expect } from "vitest";
import { bubbleSort, bubbleSortOptimized, mergeSort } from "./bubble";

[
  bubbleSort,
  bubbleSortOptimized,
  mergeSort
].forEach((sort) => {
  describe(`${sort.name}`, () => {
    describe("when array is empty", () => {
      it("should return empty array", () => {
        expect(sort([])).toEqual([]);
      });
    });

    describe("when array has one element", () => {
      it("should return the same array", () => {
        expect(sort([1])).toEqual([1]);
      });
    });

    describe("when array has two elements", () => {
      it("should return the same array if the array is ordered", () => {
        expect(sort([1, 2])).toEqual([1, 2]);
      });

      it("should return the array ordered", () => {
        expect(sort([2, 1])).toEqual([1, 2]);
      });
    });

    describe("when array has three elements", () => {
      it("should return the same array if the array is ordered", () => {
        expect(sort([1, 2, 3])).toEqual([1, 2, 3]);
      });

      it("should return the array ordered", () => {
        expect(sort([2, 1, 3])).toEqual([1, 2, 3]);
      });

      it("should return the array ordered", () => {
        expect(sort([3, 2, 1])).toEqual([1, 2, 3]);
      });

      it("should return the array ordered", () => {
        expect(sort([3, 1, 2])).toEqual([1, 2, 3]);
      });
    });

    describe("when array has any number od elements", () => {
      it("should return the ordered array", () => {
        const numbers = Array.apply(null, { length: 100 }).map(
          () => Number.parseInt(Math.random() * 1000)
        );
        const ordered = sort(numbers);
        for (let i = 0; i < 99; i++) {
          expect(ordered[i] <= ordered[i + 1]).toBe(true);
        }
      });
    });
  });
});
