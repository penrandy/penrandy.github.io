import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './mitosisDetection.html';
import './mitosisDetection.scss';

// controller
export class MitosisDetectionController {
  'ngInject';
  constructor() {
    this.name = 'mitosisDetection';

    this.sideNav = ['内容简介', 'CT图片输入','AI检测结果'];

    this.cellImgs1 = [
      '../app/public/images/mitosisDetection/MD001.png',
      '../app/public/images/mitosisDetection/MD002.png'
    ];
    this.cellImgs2 = [
      '../app/public/images/mitosisDetection/MD003.png',
      '../app/public/images/mitosisDetection/MD004.png'
    ];

    this.splitImgs1 = [
      '../app/public/images/mitosisDetection/MD005.png',
      '../app/public/images/mitosisDetection/MD006.png',
      '../app/public/images/mitosisDetection/MD007.png',
      '../app/public/images/mitosisDetection/MD008.png',
      '../app/public/images/mitosisDetection/MD009.png',
      '../app/public/images/mitosisDetection/MD010.png',
      '../app/public/images/mitosisDetection/MD011.png',
      '../app/public/images/mitosisDetection/MD012.png',
      '../app/public/images/mitosisDetection/MD013.png',
      '../app/public/images/mitosisDetection/MD014.png',
      '../app/public/images/mitosisDetection/MD015.png',
      '../app/public/images/mitosisDetection/MD016.png'
    ];
    this.splitImgs2 = [
      '../app/public/images/mitosisDetection/MD011.png',
      '../app/public/images/mitosisDetection/MD012.png',
      '../app/public/images/mitosisDetection/MD013.png',
      '../app/public/images/mitosisDetection/MD014.png',
      '../app/public/images/mitosisDetection/MD015.png',
      '../app/public/images/mitosisDetection/MD016.png'
    ];

    
    this.imgDetectionResultUrl = "../app/public/images/mitosisDetection/MDresult.jpg";



  }
}

// component
export const mitosisDetectionComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: MitosisDetectionController,
  controllerAs: '$ctrl'
};

// module
let mitosisDetectionModule = angular.module('mitosisDetection', [
  uiRouter
])
// url router config
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('mitosisDetection', {
      url: '/mitosisDetection',
      component: 'mitosisDetection'
    });
})
.component('mitosisDetection', mitosisDetectionComponent)
.name;

export default mitosisDetectionModule;
