import StyletranModule from './styleTransfer';
import StyletranController from './styleTransfer';
import StyletranComponent from './styleTransfer';
import StyletranTemplate from './styleTransfer.html';

describe('Styletran', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StyletranModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StyletranController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(StyletranTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = StyletranComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(StyletranTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(StyletranController);
      });
  });
});
