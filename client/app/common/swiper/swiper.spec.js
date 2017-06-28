import SwiperModule from './swiper';
import SwiperController from './swiper';
import SwiperComponent from './swiper';
import SwiperTemplate from './swiper.html';

describe('Swiper', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SwiperModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SwiperController();
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
      expect(SwiperTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SwiperComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SwiperTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SwiperController);
      });
  });
});
