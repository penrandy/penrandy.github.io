import MitosisDetectionModule from './mitosisDetection';
import MitosisDetectionController from './mitosisDetection';
import MitosisDetectionComponent from './mitosisDetection';
import MitosisDetectionTemplate from './mitosisDetection.html';

describe('MitosisDetection', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MitosisDetectionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MitosisDetectionController();
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
      expect(MitosisDetectionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MitosisDetectionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MitosisDetectionTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MitosisDetectionController);
      });
  });
});
