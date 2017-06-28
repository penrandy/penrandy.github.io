import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './swiper.html';
import './swiper.scss';

// controller
export class SwiperController {
  'ngInject';
  constructor() {
  }
}


// component
export const swiperComponent = {
  restrict: 'E',
  bindings: {
    imgs: '<'
  },
  template: template,
  controller: SwiperController,
  controllerAs: '$ctrl'
};

// module
let swiperModule = angular.module('swiper', [
  uiRouter
])
// url router config
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('swiper', {
      url: '/swiper',
      component: 'swiper'
    });
})
.component('swiper', swiperComponent)
.name;

export default swiperModule;
