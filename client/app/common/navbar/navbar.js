import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './navbar.html';
import './navbar.scss';

//controller
export class NavbarController {
  "ngInject";
  constructor($mdSidenav,$document, $scope) {
    'ngInject';
    this.$scope = $scope;
    this.$mdSidenav = $mdSidenav;
    this.$document = $document;
    this.SITENAME = '人工智能画廊';
    this.title = '主页';
    this.$scope.$on(['changTitle','changeName'], function (e, newValue) {
      $scope.$ctrl.title = newValue;
    });
    
    this.menus = [
    {
      id: 6,
      url: 'home',
      content: '首页',
      iconname:'home'
    },
    {
      id: 1,
      url: 'mitosisDetection',
      content: 'AI肿瘤细胞检测',
      iconname:'queue_play_next'

    },
    {
      id: 2,
      url: 'cifar10',
      content: 'AI物体识别',
      iconname:'tonality'
    },
    {
      id: 3,
      url: 'styleTransfer',
      content: 'AI画画',
      iconname:'palette'
    },
    {
      id: 4,
      url: 'obama',
      content: '演讲稿生成',
      iconname:'speaker_notes'
    },
    {
      id: 5,
      url: 'foodClassfication',
      content: '中国菜识别',
      iconname:'local_dining'
    }
  ];
  }




  changTitle(content) {
    this.title = content;
    this.$mdSidenav('left').toggle();
  }

  // closeSidenav() {
  //   this.$mdSidenav('left').toggle();
  // }

  toggleList() {
    this.$mdSidenav('left').toggle();
  }

  // toggleHide() {
  //   this.$mdSidenav('left').toggle();
  //
  // }

}

//component
export const navbarComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: NavbarController,
  controllerAs: '$ctrl'
};

//module
let navbarModule = angular.module('navbar', [
  uiRouter
])
// url router config
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('navbar', {
      url: '/navbar',
      component: 'navbar'
    });
})
.component('navbar', navbarComponent)
.name;

export default navbarModule;
