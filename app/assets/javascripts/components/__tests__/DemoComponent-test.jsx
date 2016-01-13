jest.dontMock('../DemoComponent');

describe('DemoComponent', function() {
  var React = require('react');
  var ReactDOM = require('react-dom');
  var TestUtils = require('react-addons-test-utils');
  var DemoComponent = require('../DemoComponent');

  it('should tell use it is a demo component', function() {
    var demoComponent = TestUtils.renderIntoDocument(<DemoComponent/>);
        // expect(demoComponent.getDOMNode().textContent).toBe('Demo Component');
        expect(ReactDOM.findDOMNode(demoComponent).textContent).toBe('Demo Component');
  });
});
