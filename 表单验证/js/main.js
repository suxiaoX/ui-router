var myApp = angular.module("myApp",[]);

myApp.controller("singUpForm",["$scope",function($scope){
	$scope.userdata = {
		username:"",
		password1:"",
		password2:""
	};
	
	$scope.submitForm = function(){
		
		console.log($scope.userdata);
		
	}
}]);


myApp.directive("compare",function(){
	
	
	return {
		restrict:"AE",
		scope:{
			originText:"=compare"
		},
		require:"ngModel",
		link:function(scope,element,attr,reController){
			
			reController.$validators.compare = function(v){
				return v == scope.originText;
			};
			
			
			scope.$watch("originText",function(){
				reController.$validate();
			});
			
		}
	}
//	var obj = {};
//	
//	obj.restrict = "AE";
//	obj.scope = {
//		originText:"=compare"
//	};
//	obj.require = "ngModel";
//	obj.link = function(scope,element,attr,reController){
//		
//		console.log(reController);
//		
//		reController.$validators.compair = function(v){
//			
//			return v == scope.originText;
//			
//		};
//		
//		scope.$watch("originText",function(){
//			
//			reController.$validate();
//			
//		})
//		
//	};
//	
//	return obj;
})
//
//function box(num){  
// if(num<=1)  
//  {  
//      return 1;  
//   }   
//  else  
//  {  
//     return num*box(num-1); 
//  }  
//}  
//console.log(box(4)); 