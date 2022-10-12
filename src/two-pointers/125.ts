function isPalindrome(s: string): boolean {
  let l = 0;
  let r = s.length - 1;
  
  while (l < r) {
      
      let lcode = getAlphaNumCode(s[l]);
      while (!lcode && l < r) {
          l++;
          if (!lcode) lcode = getAlphaNumCode(s[l]);
      }
      
      let rcode = getAlphaNumCode(s[r]);
      while (!rcode && r > l) {
          r--;
          if (!rcode) rcode = getAlphaNumCode(s[r]);
      }
      
      if (lcode !== rcode) return false;

      l++;
      r--;
  }
  
  return true;
};


function getAlphaNumCode(char: string) {
  let charCode = char.charCodeAt(0);
  
  const isNum = (48 <= charCode && charCode <=57);
  const isUpper = (65 <= charCode && charCode <= 90);
  const isLower = (97 <= charCode && charCode <= 122);
  
  if (isUpper) {
    charCode = charCode + 32;
  }
  
  return (isNum || isUpper || isLower) ? charCode : 0;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));