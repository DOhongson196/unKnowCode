angular.module('myApp',[]).controller('namesCtrl',function($scope){
    $scope.names = [
        {country:'Brazil',capital:'Brasilia'},
        {country:'Russia',capital:'Moscow'},
        {country:'VietNam',capital:'HaNoi'},
    ];
});