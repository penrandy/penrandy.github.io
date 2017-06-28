import Cifar10Module from './cifar10';
import Cifar10Controller from './cifar10';
import Cifar10Component from './cifar10';
import Cifar10Template from './cifar10.html';

describe('Cifar10', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Cifar10Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Cifar10Controller();
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
      expect(Cifar10Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Cifar10Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Cifar10Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Cifar10Controller);
      });
  });
});
