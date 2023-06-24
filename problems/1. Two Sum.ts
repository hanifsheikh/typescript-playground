function twoSum(nums: number[], target: number): number[] {
    for(let i:number = 0; i < nums.length ;i++){      
        for(let j:number = i+1; j < nums.length; j++){            
            if(nums[i] + nums[j] == target){
                return [i, j]
            } 
        }    
    }
    return []
}

export default function main(){
    const nums:number[] = [2,7,11,15]
    const target:number = 9
    console.log(twoSum(nums, target))
}