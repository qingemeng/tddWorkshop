import { expect } from 'chai';
import mommify from '../stringMummify';

describe('#mommify', () => {
  it('should not mummify empty string', () => {
    expect(mommify('')).to.equal('');
  });

  it('should not mummify words with no vowels', () => {
    expect(mommify('str')).to.equal('str');
  });

  it('should mummify a vowel', () => {
    expect(mommify('a')).to.equal('mummy');
  });

  it('should mummify consonents and a vowel', () => {
    expect(mommify('bla')).to.equal('blmummy');
  });

  it('should not mummify less than 30 percent vowels', () => {
    expect(mommify('blah')).to.equal('blah');
  });

  it('should mummify continuous vowels once', () => {
    expect(mommify('hear')).to.equal('hmummyr');
  });

  it('should mummify multiple sets of vowels', () => {
    expect(mommify('blaahah')).to.equal('blmummyhmummyh');
  });

  it('should mummify capital vowels', () => {
    expect(mommify('blAhE')).to.equal('blmummyhmummy');
  });

  it('should error on undefined input', () => {
    expect(() => mommify()).to.throw();
  });

});










