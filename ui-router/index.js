var routerApp = angular.module("routerApp",["ui.router"]);


routerApp.controller("loadData",["$scope","$http",function($scope,$http){
	
	$http({
		method:"GET",
		url:"data.json"
	}).success(function(data,status,headers,config){
		console.log(data);
		$scope.datas =data;
	}).error(function(data,status,headers,config){
		console.log("error...")
	})
}])

routerApp.config(function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise("/index");
	
	$stateProvider
	.state("index",{//对应ui-sref的名称 ui-sref = "index"
		url:"/index",
		views:{
			"":{
				templateUrl:"views/index.html"//模板下面的两个视图，ui-view="topbar" ui-view="main"。
			},
			"topbar@index":{
				templateUrl:"views/topbar.html"
			},
			"main@index":{//表示index下面的main，模板里面的ui-view=“mian”就对应这个了。
				templateUrl:"views/home.html"
			}
		}		
	})
	.state("index.usermng",{//对应ui-sref的名称 ui-sref = "index.uermng"
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