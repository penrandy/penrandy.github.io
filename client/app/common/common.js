import angular from 'angular';
import Navbar from './navbar/navbar';
import Swiper from './swiper/swiper';

let commonModule = angular.module('app.common', [
  Navbar,
  Swiper
])

.name;

export default commonModule;
