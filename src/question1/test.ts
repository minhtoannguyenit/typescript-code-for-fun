import { MergeSortArray } from "./merge";

const testClass = new MergeSortArray();
testClass.merge([1,2,3,0,0,0], 3, [2,5,6], 2);
testClass.merge([1], 1, [], 0);
testClass.merge([], 0, [1], 1);