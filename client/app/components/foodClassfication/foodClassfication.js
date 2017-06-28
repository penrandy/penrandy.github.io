import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './foodClassfication.html';
import './foodClassfication.scss';

// controller
export class FoodClassficationController {
  'ngInject';
  constructor() {
    this.name = 'foodClassfication';

    //图片数据
    this.imgs = [
      {
        title: '锅包肉',
        url: '../app/public/images/FCgbr.jpg'
      },
      {
        title: '火爆腰花',
        url: '../app/public/images/FChbyh.jpg'
      },
      {
        title: '虎皮尖椒',
        url: '../app/public/images/FChpjj.jpg'
      },
      {
        title: '可乐鸡翅',
        url: '../app/public/images/FCkljc.jpg'
      },
      {
        title: '凉拌黄瓜',
        url: '../app/public/images/FClbhg.jpg'
      },
      {
        title: '番茄鸡蛋',
        url: '../app/public/images/FCfqjd.jpg'
      },
      {
        title: '宫保鸡丁',
        url: '../app/public/images/FCgbjd.jpg'
      },
      {
        title: '辣子鸡',
        url: '../app/public/images/FClzj.jpg'
      },
      {
        title: '毛血旺',
        url: '../app/public/images/FCmxw.jpg'
      },
      {
        title: '上汤娃娃菜',
        url: '../app/public/images/FCstwwc.jpg'
      },
      {
        title: '糖醋里脊',
        url: '../app/public/images/FCtclj.jpg'
      },
      {
        title: '土豆丝',
        url: '../app/public/images/FCtds.jpg'
      }
    ];
    this.bigPicture = "../app/public/images/FCgbjd.jpg";
    this.divRed = "0.00000%";
    this.divBlu = "0.00000%";

    //控制显示内容
    this.divChange = true;
    this.divBluChange = true;
  }

  change() {
    this.divChange = false;
    this.divRedClass = true;
    this.divRed= "97.23148%";

    this.divBluChange = false;
    this.divBluClass = true;
    this.divBlu= "23.678941%";
  }
}

// component
export const foodClassficationComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: FoodClassficationController,
  controllerAs: '$ctrl'
};

// module
let foodClassficationModule = angular.module('foodClassfication', [
  uiRouter
])
// url router config
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('foodClassfication', {
      url: '/foodClassfication',
      component: 'foodClassfication'
    });
})
.component('foodClassfication', foodClassficationComponent)
.name;

export default foodClassficationModule;
