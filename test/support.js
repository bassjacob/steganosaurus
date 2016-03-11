import * as chai from 'chai';
import * as sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import proxyquire from 'proxyquire';
import nock from 'nock';

chai.use(chaiAsPromised);
chai.use(sinonChai);

global.assert = chai.assert;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.sinon = sinon;
global.proxyquire = proxyquire;
global.nock = nock;
