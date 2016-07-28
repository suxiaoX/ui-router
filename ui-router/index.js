var routerApp = angular.module("routerApp",["ui.router"]);

routerApp.config(function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise("/index");
	
	$stateProvider
	.state("index",{
		url:"/index",
		views:{
			"":{
				templateUrl:"views/index.html"
			},
			"topbar@index":{
				templateUrl:"views/topbar.html"
			},
			"main@index":{
				templateUrl:"views/home.html"
			}
		}		
	})
	.state("index.usermng",{
		url:"/usermng",
		views:{
			"main@index":{
				templateUrl:"views/usermng.html",
				controller:function($scope,$state){
					$state.go("index.usermng.highendusers");
					$scope.addUserType = function(){
						$state.go("index.usermng.addusertype")
					}
				}
			}
		}
	})
	.state("index.usermng.highendusers",{
		url:"/highendusers",
		templateUrl:"views/highendusers.html"
	})
	.state("index.usermng.normalusers",{
		url:"/normalusers",
		templateUrl:"views/normalusers.html"
	})
	.state("index.usermng.lowusers",{
		url:"/lowusers",
		templateUrl:"views/lowusers.html"
	})
	.state("index.usermng.blackusers",{
		url:"/blackusers",
		template:"你讨厌的人"
	})
	.state("index.usermng.addusertype",{
		url:"/addusertype",
		templateUrl:"views/addusertypeform.html",
		controller:function($scope,$state){
			$scope.backToPrevious = function() {
                window.history.back();
            }
		}
	})
	
	.state("index.permission",{
		url:"/permission",
		 views: {
            'main@index': {
                template: '这里是权限管理'
            }
        }
	})
	.state("index.report",{
		url:"/report",
		views:{
			"main@index":{
				template:"这里是报表管理"
			}
		}
	})	
	.state("index.settings",{
		url:"/settings",
		views:{
			"main@index":{
				template:"这里是设置中心"
			}
		}
	})
})