import FoodClassficationModule from './foodClassfication';
import FoodClassficationController from './foodClassfication';
import FoodClassficationComponent from './foodClassfication';
import FoodClassficationTemplate from './foodClassfication.html';

describe('FoodClassfication', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FoodClassficationModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FoodClassficationController();
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
      expect(FoodClassficationTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FoodClassficationComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FoodClassficationTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FoodClassficationController);
      });
  });
});
