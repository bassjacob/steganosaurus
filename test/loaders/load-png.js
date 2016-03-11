import loadPng from '../../src/loaders/load-png.js';
import path from 'path';

describe('loadPng', () => {
  const subject = loadPng;

  describe('given a valid filepath', () => {
    const validPath = path.join(__dirname, '../fixtures/images/toad.png');

    it('fulfills', () => {
      assert.isFulfilled(subject(validPath));
    });

    it('resolves on object that has a width key', (done) => {
      subject(validPath).then(data => {
        assert(data.width);
        done();
      });
    });

    it('resolves on object that has a height key', (done) => {
      subject(validPath).then(data => {
        assert(data.height);
        done();
      });
    });

    it('resolves on object that has an image key', (done) => {
      subject(validPath).then(data => {
        assert(data.image);
        done();
      });
    });
  });

  describe('given a path to a nonexistant file', () => {
    const nonExistantPath = 'foo';

    it('rejects', () => {
      assert.isRejected(subject(nonExistantPath));
    });
  });

  describe('given a path to a file that isn\'t a png', () => {
    const nonPngPath = './load-png.js';

    it('rejects', () => {
      assert.isRejected(subject(nonPngPath));
    });
  });
});
