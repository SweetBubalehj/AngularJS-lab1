import countries from './assets/countries.json' assert { type: 'json' };
import products from './assets/products.json' assert { type: 'json' };

const listApp = angular.module('listApp', []);

listApp.controller('listCtrl', ($scope) => {
  $scope.products = products;
  $scope.categories = ['Мясо', 'Рыба', 'Молочка', 'Все'];
  $scope.getCategory = (input, search_params) => {
    console.log('Here is', input);
    if (search_params === 'Все') {
      return $scope.categories;
    } else {
      return input === search_params;
    }
  };
});

listApp.controller('cityCtrl', ($scope) => {
  $scope.countries = countries;
});

listApp.controller('inputCtrl', ($scope) => {
  $scope.userDefaultText = 'Текст';
  $scope.userText = 'Текст';
  $scope.isDisabled = false;
  $scope.setEnabled = () => {
    $scope.isDisabled = !$scope.isDisabled;
    $scope.userText = $scope.userDefaultText;
  };
});