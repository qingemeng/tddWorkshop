const VOWELS = 'aeiou';
const REPLACEMENT = 'mummy';

const isAVowel = (char) => {
  return VOWELS.indexOf(char.toLowerCase()) >= 0;
};

const isVowelCountLessThan30Percent = (word) => {
  let vowelCount = 0;
  const length = word.length;
  for (let i = 0; i < length; i++) {
    const letter = word.charAt(i);
    if (isAVowel(letter)) {
      vowelCount += 1;
    }
  }
  return length === 0 || vowelCount / length < 0.3
};

const replaceVowels = (word) => {
  let mummified = '';
  for (let i = 0; i < word.length; i++) {
    const letter = word.charAt(i);
    if (!isAVowel(letter)) {
      mummified += letter;
    } else if (!mummified.endsWith(REPLACEMENT)) {
      mummified += REPLACEMENT;
    }
  }
  return mummified;
};

const mummify = (word) => {
  if(isVowelCountLessThan30Percent(word)){
    return word;
  }
  return replaceVowels(word);
};

export default mummify;
