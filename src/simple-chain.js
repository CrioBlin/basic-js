const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    // throw new CustomError('Not implemented');
    return this.chain.length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    this.chain.push(`( ${value} )`);
    
    return this
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    if (position <= 0 || (!Number.isInteger(position)) || position > this.chain.length) {
      this.chain = [];
      throw new Error('Error');
    } else {
      this.chain.splice(position - 1, 1);
      return this
    }
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    this.chain = this.chain.reverse();

    return this;
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    let result = this.chain.join('~~');
    this.chain = [];

    return result;
  }
};

module.exports = chainMaker;
