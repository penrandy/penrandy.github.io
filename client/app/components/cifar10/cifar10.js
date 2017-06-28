import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './cifar10.html';
import './cifar10.scss';

// controller
export class Cifar10Controller {
  'ngInject';
  constructor($document) {
    'ngInject';
    this.$document = $document;
    this.imgData1 = [
      '../app/public/images/cf001.png',
      '../app/public/images/cf002.png'
    ];
    this.imgData2 = [
      '../app/public/images/cf42.png',
      '../app/public/images/cf43.png',
      '../app/public/images/cf44.png',
      '../app/public/images/cf45.png'
    ];
    this.imgData3 = [
      '../app/public/images/cf412.png',
      '../app/public/images/cf414.png',
      '../app/public/images/cf412.png',
      '../app/public/images/cf414.png'
    ];
    this.imgData4 = [
      '../app/public/images/cfa15.png',
      '../app/public/images/cfa14.png',
      '../app/public/images/cfa16.png',
      '../app/public/images/cfa17.png'
    ];
    this.imgData5 = [
      '../app/public/images/cfd3.png',
      '../app/public/images/cffc3.png',
      '../app/public/images/cfd3.png',
      '../app/public/images/cffc3.png'
    ];
    this.examplePredictionsData = [
      '../app/public/images/cf8.png',
      '../app/public/images/cf9.png',
      '../app/public/images/cf1.png',
      '../app/public/images/cf2.png',
      '../app/public/images/cf8.png',
      '../app/public/images/cf9.png',
      '../app/public/images/cf1.png',
      '../app/public/images/cf2.png',
      '../app/public/images/cf8.png',
      '../app/public/images/cf9.png',
      '../app/public/images/cf1.png',
      '../app/public/images/cf2.png'
    ];
  }
  $onInit() {
    // const $cifar10Demo = this.$document[0].getElementById('cifar10-demo');
    // setTimeout(function () {
    //   $cifar10Demo.height = $cifar10Demo.contentWindow.document.body.scrollHeight;
    // }, 3000);
  }

}

// component
export const cifar10Component = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: Cifar10Controller,
  controllerAs: '$ctrl'
};

// module
let cifar10Module = angular.module('cifar10', [
    uiRouter
  ])
//url router config
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('cifar10', {
      url: '/cifar10',
      component: 'cifar10'
    });
})
.component('cifar10', cifar10Component)
.name;

export default cifar10Module;
