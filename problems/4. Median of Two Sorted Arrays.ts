const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    const array = [...nums1, ...nums2]
    array.sort((a,b) => a - b); 

    const mid = Math.round(array.length / 2)

    if(array.length % 2){       
        return array[mid - 1]
    }  
    return (array[mid] + array[mid-1]) / 2  
}
export default function main(){
    const nums1 = [1,2]
    const nums2 = [3,4]
   console.log(findMedianSortedArrays(nums1, nums2) )
}