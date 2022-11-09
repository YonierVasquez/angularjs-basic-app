let app = angular.module('appForTest', []);

// personal data controller
app.controller('controllerForTest', ($scope) => {
    $scope.firstName = "Yonier";
    $scope.lastName = "Vasquez Marin";
});

// dollar price directive
app.directive('dollarPriceDirective', () => {
    return {
        template: 'Price: COP$ 5.000,00'
    };
});

app.directive('polymerSayHello', () => {
    return {
        restrict: 'E',
        template: '<p>Hi, i am new tag type directive</p>'
    };
});

app.controller('productController', ($scope) => {
    $scope.product = {
        name: 'Lenovo Thinkpad',
        price: 5000
    };
    $scope.changeProduct = () => {
        if ($scope.product.name === 'Lenovo Thinkpad') 
            $scope.product.name = 'Dell Latitude';
        else 
            $scope.product.name = 'Lenovo Thinkpad';
    }
})