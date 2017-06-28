import ObamaModule from './obama';
import ObamaController from './obama';
import ObamaComponent from './obama';
import ObamaTemplate from './obama.html';

describe('Obama', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ObamaModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ObamaController();
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
      expect(ObamaTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ObamaComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ObamaTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ObamaController);
      });
  });
});
