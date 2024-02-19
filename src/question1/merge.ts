export class MergeSortArray {
    /**
     Do not return anything, modify nums1 in-place instead.
    */
    public merge(nums1: number[], m: number, nums2: number[], n: number): void {
			let result: number[] = [];
			if ((m == 0 || nums1.length == 0) && n != 0) {
				result = this.getArray(nums2, n);
			} else if (m != 0 && (n == 0 || nums2.length == 0)) {
				result = this.getArray(nums1, m);
			}
			const arr1 = this.getArray(nums1, m);
			const arr2 = this.getArray(nums2, n);
			result = [...arr1, ...arr2];
			result.sort();
			nums1 = result;
			console.log(nums1);
    }

    public getArray(arr: number[], num: number): number[] {
			if (num > arr.length) return [];
			let index = 0;
			let result: number[] = [];
			for (let i = 0; i < num; i++) {
				result[index++] = arr[i];
			}
			return result;
    }
}
