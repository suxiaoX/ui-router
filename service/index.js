var myServiceApp = angular.module("myServiceApp",[]);

myServiceApp.factory("userListService",["$http",function($http){
	
	var doRequest = function(username,path){
		return $http({
			method:"GET",
			url:"users.json"
		});		
	};
	
	return {
		userList: function(username){
			return doRequest(username,"userList");
		}
	};
	
}]);


myServiceApp.controller("serviceController",["$scope","$timeout","$parse","$q","userListService",function($scope,$timeout,$parse,$q,userListService){
//	console.log($routeParams);
	var timeout;	
	$scope.$watch("username",function(newUserName){
		console.log(newUserName);
		if(newUserName){
			if(timeout){
				$timeout.cancel(timeout)
			}
			timeout = $timeout(function(){
				userListService.userList(newUserName)
				.success(function(data,status){
					console.log(data)
					$scope.users = data;
				})
				.error(function(data,status){
					console.log("error...")
				})
			},500)
		}
	});
	
	
	
//m1.controller('Aaa',['$scope','$location','$routeParams',function($scope,$location,$routeParams){
//  $scope.name = 'hello';
//  $scope.$location = $location;
//  console.log( $routeParams );
//}]);
	/*
	var context = {
        name: "dreamapple"
    };
    // 因为这个解析的语句中含有我们想要解析的表达式，
    // 所以要把不相关的用引号引起来，整体然后用+连接
    var expression = "'Hello ' + name";
    var parseFunc = $parse(expression);

    //false
    console.log(parseFunc.literal);
    //false
    console.log(parseFunc.constant);
    //undefined
    console.log(parseFunc.assign);
    //hello
    console.log(parseFunc());
    //function (self, locals) {
    //  return fn(self, locals, left, right);
    // }
    console.log(parseFunc);

    $scope.ParsedValue = parseFunc(context);
    
    */
    //$parse服务根据$scope.context中提供的上下文解析$scope.expression语句，然后使用$scope.data数据填充表达式中的变量
    /*
     $scope.context = {
        add: function(a, b){return a + b;},
        mul: function(a, b){return a * b}
    }
    $scope.expression = "mul(a, add(b, c))";
    $scope.data = {
        a: 3,
        b: 6,
        c: 9
    };
    var parseFunc = $parse($scope.expression);
    $scope.ParsedValue = parseFunc($scope.context, $scope.data);
    */
//  console.log($scope.ParsedValue);

	$scope.context = {
		add:function(a,b){
			return a + b;
		},
		mul:function(a,b){
			return a * b;
		}
	};
	
	$scope.expression = "mul(a, add(b, c))";
	
	$scope.data = {
		a:3,
		b:6,
		c:12
	};
	
	var parseFunc = $parse($scope.expression);
	$scope.ParsedValue = parseFunc($scope.context,$scope.data);
	
	///////////////////////////////////////////////////////////////
//	function asyncGreet(name) {
//  var deferred = $q.defer();
//
//  setTimeout(function() {
//    scope.$apply(function() {
//      deferred.notify('About to greet ' + name + '.');
//
//      if (okToGreet(name)) {
//        deferred.resolve('Hello, ' + name + '!');
//      } else {
//        deferred.reject('Greeting ' + name + ' is not allowed.');
//      }
//    });
//  }, 1000);
//
//  	return deferred.promise;
//	}
//
//var promise = asyncGreet('Robin Hood');
//promise.then(function(greeting) {
//  alert('Success: ' + greeting);
//}, function(reason) {
//  alert('Failed: ' + reason);
//}, function(update) {
//  alert('Got notification: ' + update);
//});
	function Aaa(name){
		var defferd = $q.defer();
		
		setTimeout(function(){
			$scope.$apply(function(){
				defferd.notify('About to greet ' + name + '.');
				
				if(okToGreed(name)){
					defferd.resolve("Hello" + name + "!");
				}else{
					defferd.reject("Greetting" + name + "is not allowed")
				}
			})
		},1000);
		return defferd.promise;
	};
	
	
	var promise1 = Aaa("Robin Hood");
	
	promise1.then(
		function(greeting){
			alert('succes' + greeting);},
		function(reson){
			alert("fail" + reson)
		},
		function(update){
			alert('Got notification: ' + update);
		}
	)
}])

