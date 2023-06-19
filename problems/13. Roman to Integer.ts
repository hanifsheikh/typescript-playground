
// https://leetcode.com/problems/roman-to-integer/
// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

enum RomanChars {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000
}

const romanToInt = (s: string): number => {

    let result = 0;

    if(!(1 <= s.length && s.length <= 15)){
        throw new Error("Input string can not be empty or more than 15 characters.")              
    }

    for(let i = 0; i < s.length; i++){
        const char = s[i]       
        if(!Object.keys(RomanChars).includes(char)){
            throw new Error("Input Character '"+ char +"' is not a valid roman character.")
        }
        else {
           const charValue = RomanChars[char as keyof typeof RomanChars]
           if(i > 0){
           const prevCharValue = RomanChars[s[i-1] as keyof typeof RomanChars]
           result += ( charValue > prevCharValue ? (charValue - (prevCharValue * 2)) : charValue )          
        }
        else {
            result += charValue            
           }
        }
    }    

    if(result > 3999){
        throw new Error("Range is 1 to 3999")
    }

    return result;
};

export default function main(){
    const s = "MCMXCV" 
    const result = romanToInt(s)
    console.log(`Roman Input: '${s}'\nOutput: ${result}`)
    
}