// TODO: Learn what's happening here!

import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
const { window } = new JSDOM('<!doctype html><html><body></body></html>');

configure({ adapter: new Adapter() });
 
function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}
 
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
 
copyProps(window, global);