/*
1. 点击购买的时候 进行数量的增加或者条目的增加，同时总价格变化；

2. 进行删除的时候，删除当前条目，总价变化；

3. 进行数目增加减少的时候，总价格变化；

*/

var  shopApp = angular.module("shopApp",[]);

shopApp.controller("shop",["$scope",function($scope){
	$scope.items = items;
	$scope.buyList = buyList;
	$scope.total = 0;
	
	$scope.totalPrice = function(){//计算总价
		$scope.total = 0;
		for(var k in buyList){
			buyList[k].num = buyList[k].num<0?0:buyList[k].num;			
			$scope.total += buyList[k].num * buyList[k].price;
		}
	}
	
	$scope.buyAction = function($event){
		var target = $event.target;		
		var id = target.getAttribute("item-id");
		
		if(buyList[id]){
			buyList[id].num += 1;
		}else{//给购物车填充数据
			var arr = [];
			arr.id = id;
			arr.price = target.getAttribute("price");
			arr.name = target.getAttribute("name");
			arr.num = 1;			
			buyList[id] = arr;	
		}
		
		$scope.totalPrice();
	};
	
	$scope.changeNum = function($event,num){//计算加减价格--$
		var id ;
		if(typeof $event == "string"){//这里是判断是否是点击input进行加减的算法，如果是，级直接等于这个数
			id = $event;
		}else{
			id = $event.target.parentNode.getAttribute('item-id');
		}
		buyList[id].num = num;
		$scope.totalPrice(); 
		console.log($event);
	};
	
	
	$scope.deleteData = function($event){//计算删除价格
		var li = $event.target.parentNode;
		console.log(li);
		li.parentNode.removeChild(li);
		var id = $event.target.getAttribute('item-id');
		if(buyList[id]){
			delete buyList[id];
		};		
		$scope.totalPrice();
	}
}])





/*
 var common = {
	getTotal: function(total) { //每次重新清零 算出总价，这样的话为什么还要传total参数？当时怎么想的？
		total = 0;
		for(var k in boughtList) {
			if(boughtList[k]) {
				if(boughtList[k].num <= 0) {
					boughtList[k].num = 0;
				}
				total += boughtList[k].num * boughtList[k].price;
			}
		}
		return total;
	}
}
var shopApp = angular.module("shopApp", []);

shopApp.controller("shop", ["$scope", function($scope) {
	$scope.items = items;
	$scope.boughtList = boughtList;
	$scope.totle = 0;
	for(var k in boughtList) {
		if(boughtList[k]) {
			$scope.total += boughtList[k].num * boughtList[k].price;
		}
	};

	$scope.buyAction = function($event) {
		var el = $event.target;
//		var el = $event.target;
		var id = el.getAttribute('item-id');
		if(boughtList[id]) {
			boughtList[id].num += 1;
		} else {
			var arr = [];
			arr.name = el.getAttribute('name');
			arr.price = el.getAttribute('price');
			arr.num = 1;
			arr.id = id;
			boughtList[id] = arr;
		}
		$scope.total = common.getTotal($scope.total);
	}
	 $scope.delItem = function($event) {
	 	var li = $event.target.parentNode;
	 	li.parentNode.removeChild(li);
	 	var id = $event.target.getAttribute('item-id');
	 	if(boughtList[id]) {
	 		delete boughtList[id];
	 	}
	 	$scope.total = common.getTotal($scope.total);
	 }
	 $scope.changeNum = function($event, num) {
	 	var id;
	 	if(typeof $event == 'string') {
	 		id = $event;
	 	} else {
	 		id = $event.target.parentNode.getAttribute('item-id');
	 	}	
	 	boughtList[id].num = num;
	 	$scope.total = common.getTotal($scope.total);
	 }          
}])
*/