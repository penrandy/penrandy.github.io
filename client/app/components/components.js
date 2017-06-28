import angular from 'angular';
import Home from './home/home';

import Cifar10 from './cifar10/cifar10';
import StyleTransfer from './styleTransfer/styleTransfer';
import Obama from './obama/obama';
import FoodClassfication from './foodClassfication/foodClassfication';
import MitosisDetection from './mitosisDetection/mitosisDetection';

let componentModule = angular.module('app.components', [
  Home,
  Cifar10,
  Obama,
  FoodClassfication,
  StyleTransfer,
  MitosisDetection
])

.name;

export default componentModule;
