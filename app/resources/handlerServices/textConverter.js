const DEFAULT_WORD_MAX_LENGTH = 15;
const DEFAULT_CHAR_MAX_LENGTH = 15;

export const reduceByWords = (text, length = DEFAULT_WORD_MAX_LENGTH) => {
  let words = text.split(' ');
  let output = [];
  for(let i=0; i<words.length; i++) {
    if(i < length) {
      i === length - 1 ? output.push(words[i]) + '...' : output.push(words[i]);
    }
  }
  return output.join(' ');
}

export const reduceByChar = (text, length = DEFAULT_CHAR_MAX_LENGTH) => {
  let output = '';
  for(let i=0; i<text.length; i++) {
    if(i < length - 1) {
      output += text[i];
    }
  }
  return output + (text.length > length - 1 ? '...' : '');
}

export const convertToUrlParam = (text = 'The Helm Store') => {
  return text.split(' ').join('-');
}