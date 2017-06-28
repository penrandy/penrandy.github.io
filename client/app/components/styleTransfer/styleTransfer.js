import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './styleTransfer.html';
import './styleTransfer.scss';

// controller
export class StyletranController {
  'ngInject';
  constructor($interval, $timeout) {
    'ngInject';
    this.name = '项目简介';
    this.input="图片输入";
    this.describe="AI画画 | 项目简介";
    this.product="开始画画";
    this.src=1;
    this.flag = false;
    this.picItems=[
      {
        imgUrl1:"/app/public/images/ST400.jpg",
        imgUrl2:"/app/public/images/ST500.png",
        num:"ST50",
        num2:"ST60",
        num3:"ST70"
      }
    ];

    this.imgMen = [
      '../app/public/images/ST201.jpeg',
      '../app/public/images/ST202.jpeg',
      '../app/public/images/ST203.jpeg',
      '../app/public/images/ST204.jpeg'
    ];

    this.imgMen2 = [
      '../app/public/images/ST205.jpeg',
      '../app/public/images/ST206.jpeg',
      '../app/public/images/ST207.jpeg',
      '../app/public/images/ST208.jpeg'
    ];

    this.$interval=$interval;
    this.$timeout = $timeout;
  }
  startTimer(){
    this.src=1;
    this.timer=this.$interval(()=>{
        if(this.src==4){
          this.src=4;
        return;
        }
      this.src++;
    },1500);

    if (this.flag) {
      this.flag = false;
    } else {
      this.$timeout(() => {
        this.flag = true;
      }, 3000);
    }

  }

}

// component
export const styletranComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: StyletranController,
  controllerAs: '$ctrl'
};

// module
let styletranModule = angular.module('styleTransfer', [
  uiRouter
])
// url router config
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('styleTransfer', {
      url: '/styleTransfer',
      component: 'styleTransfer'
    });
})
.component('styleTransfer', styletranComponent)
.name;

export default styletranModule;
