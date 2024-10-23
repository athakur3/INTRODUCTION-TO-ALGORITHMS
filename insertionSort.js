
// An efficient method to perform insertion sort and sort the numbers in ascending order

function insertionSort(nums) {
    
    for (let i = 1; i < nums.length; i++) {
        
        const currentNumber = nums[i]
        let j = i - 1
        
        if (nums[j] > currentNumber) {
            while (j >= 0) {
            nums[j + 1] = nums[j]
            j -= 1
        }
        
            nums[j + 1] = currentNumber     
        }
    }
    
    return nums
}
