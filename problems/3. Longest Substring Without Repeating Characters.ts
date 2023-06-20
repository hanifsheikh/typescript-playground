// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const lengthOfLongestSubstring = (s:string) : number =>  {
    let largestSubstring = ""; 
    let currentSubstring = ""; 
    let letters:any[] = [];
 
    if(!( 0 <= s.length && s.length <= 5 * Math.pow(10, 4))){
        throw new Error('Constraints: 0 <= s.length <= 5 * 104')
    }
    const english_regex = /^[A-Za-z0-9\s]*$/; 
    if(!(english_regex.test(s))){        
        throw new Error('String only contains English letters, digits, symbols and spaces.')
    }
    for(let i = 0 ; i < s.length ; i++){
        if(letters.includes(s[i])){            
            letters = [s[i]];
            currentSubstring = s[i];   
        }
        else {
            letters.push(s[i]);        
            currentSubstring += s[i];  
        }
        if(currentSubstring.length > largestSubstring.length){
            largestSubstring = currentSubstring
        }
    } 
    return largestSubstring.length;
}

export default function main(){
    const s = "pwwkew"
    console.log(lengthOfLongestSubstring(s))
}