import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import template from './app.html';
import 'normalize.css';
import './app.scss';

class appController {
  "ngInject";
  constructor($mdSidenav, $document, $scope) {
    "ngInject";
    this.$scope= $scope;
    this.imgs = [
      '../app/public/images/home/home1.jpg',
      '../app/public/images/home/home2.jpg',
      '../app/public/images/home/home3.jpg'
    ];
    this.$mdSidenav = $mdSidenav;
    this.$document = $document;
    this.menus = [
    {
      id: 6,
      url: 'home',
      content: '主页'
    },
    {
      id: 1,
      url: 'mitosisDetection',
      content: 'AI癌细胞检测'
    },
    {
      id: 2,
      url: 'cifar10',
      content: 'AI物体识别'
    },
    {
      id: 3,
      url: 'styleTransfer',
      content: 'AI画画'
    },
    {
      id: 4,
      url: 'obama',
      content: '演讲稿生成'
    },
    {
      id: 5,
      url: 'foodClassfication',
      content: '中国菜识别'
    }
  ];
}

  changTitle(content) {
    this.$scope.$broadcast('changTitle', content);
    this.$mdSidenav('left').toggle();
  }

  closeSidenav() {
    this.$mdSidenav('left').toggle();
  }

  $onInit() {
    setTimeout(() => {
        var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 30,
          effect: 'fade',
          autoplay:4000

        });
    }, 100);
    var $swiper = $('#swiper-wrap'),
        $navbar = $('#navbar'),
        $side = $('#side');
    $(document).on('scroll', function (e) {
        if ($(e.currentTarget).scrollTop() > $swiper.height()) {
            $navbar.addClass('fixed-navbar');
            $side.addClass('fixedtop-sidenav');
        } else {
            $navbar.removeClass('fixed-navbar');
            $side.removeClass('fixedtop-sidenav');
        }
    });
  }
}

const appComponent = {
  template,
  restrict: 'E',

  controller: appController,
  controllerAs: '$ctrl'
};

angular.module('app', [
    uiRouter,
    'ngMaterial',
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .component('app', appComponent);
