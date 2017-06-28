import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './home.html';
import Common from '../../common/common';
import Components from '../../components/components';

import './home.scss';

//controller
export class HomeController {
    "ngInject";

  constructor($mdSidenav,$document, $scope) {
    "ngInject";
    this.$scope= $scope;
      let swiper=document.getElementsByClassName("imgSwiper")[0];
      this.$mdSidenav = $mdSidenav;

    this.$document = $document;
  }
  changeName(contt) {
    this.$scope.$broadcast('changeName', contt);

    //打开滚动条
    // this.$document[0].body.style.overflow='auto';
  }
}

//component
export const homeComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: HomeController,
  controllerAs: '$ctrl'
};

//module
let homeModule = angular.module('home', [
  uiRouter,
 
])

//urlRouter config
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)
.name;

export default homeModule;
