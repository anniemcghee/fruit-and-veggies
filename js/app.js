/* setup your angular app here */
var fruitsAndVeggies = angular.module('fruitsAndVeggies',[]);

fruitsAndVeggies.run(function(){
  console.log('App started');
})

fruitsAndVeggies.controller('list',['$scope',function($scope){

  $scope.fruit = fruit;
  $scope.vegetables = vegetables;
  $scope.all = $scope.fruit.concat($scope.vegetables);

  // $scope.all = $filter('orderBy')


  $scope.newFruit = [];
  $scope.newVeggie = [];

  $scope.addFruit = function(index) {
    // alert('going to Fruit!')
    $scope.newFruit.push($scope.all[index]);
    $scope.all.splice(index,1);
    //set this on the arrow left inside fruits and vegs
  }

  $scope.addVeggie = function(index) {
    // alert('going to veggie!')
    $scope.newVeggie.push($scope.all[index]);
    $scope.all.splice(index,1);
    //set this on the right arrow inside fruits and vegs
  }

  $scope.addFromFruit = function(index) {
    // alert('going to all')
    $scope.all.push($scope.newFruit[index]);
    $scope.newFruit.splice(index,1);
    //set this on the arrow in fruits and the arrow in vegs
  }

  $scope.addFromVeg = function(index) {
    // alert('going to all')
    $scope.all.push($scope.newVeggie[index]);
    $scope.newVeggie.splice(index,1);
    //set this on the arrow in fruits and the arrow in vegs
  }

  $scope.checkWinner = function() {
    alert('checking...');
    // if (angular.equals(newFruit, fruit) && angular.equals(newVeggie, vegetables)) {
    //   alert('You win!');
    // } else {
    //   alert('You lose!')
    // }
  }
// = fruit && newVeggie = vegetables
// you won!
// else
// highlight the ones that are mismatched
//


  // $scope.all.push(($scope.fruit));
  // $scope.all.push(($scope.vegetables));

  // console.log(fruit.length);
  // console.log(vegetables.length);
}]);



