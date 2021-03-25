const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(state) {
    this.state = state;
    this.alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(word, key) {
    // throw new CustomError('Not implemented');
    if (word === undefined || key === undefined) {
      throw Error('Error')
    }

    let result = [];
    let newKey = [];

    word = word.toUpperCase();
    key = key.toUpperCase();

    // Creating new key including special symbols
    newKey = this.setNewKey(word, this.keyNormalize(word, key));

    // Encrypting word
    for (let i = 0; i < word.length; i++) {
      let newChar = (this.alph.indexOf(word[i]) + this.alph.indexOf(newKey[i])) % 26;     
      if (this.alph.includes(word[i])) {
        result.push(this.alph[newChar])
      } else {
        result.push(word[i])
      }
    }

    return this.reverse(this.state, result.join(''));
  } 

  decrypt(word, key) {
    // throw new CustomError('Not implemented');
    if (word === undefined || key === undefined) {
      throw Error('Error')
    }

    let result = [];
    let newKey = [];

    word = word.toUpperCase();
    key = key.toUpperCase();
    newKey = this.setNewKey(word, this.keyNormalize(word, key));

    // Decrypting word
    for (let i = 0; i < word.length; i++) {
      let newChar = (this.alph.indexOf(word[i]) - this.alph.indexOf(newKey[i]) + 26) % 26;     
      if (this.alph.includes(word[i])) {
        result.push(this.alph[newChar])
      } else {
        result.push(word[i])
      }
    }

    return this.reverse(this.state, result.join(''))
  }

  // Function for setting key length to be equal to word length
  keyNormalize(word, key) { 
    for (let i = 0; i < word.length; i++) {
      if (key.length < word.length) {
        key = key.concat(key[i]);
      } else {
        break;
      }
    }
    return key;
  }

  // Function creats new key with special symbols
  setNewKey(word, key) {
    let newKey = [],
        counter = 0;

    for (let i = 0; i < word.length; i++) {
      if (this.alph.includes(word[i])) {
        if (counter < key.length) {
          newKey.push(key[counter])
          counter++
        } else {
          counter = 0;
          newKey.push(key[counter])
        }
      } else {
        newKey.push(word[i]);
      }
    }

    return newKey.join('');
  }

  reverse(state, word) {
    if (state === false) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  }
}

module.exports = VigenereCipheringMachine;
