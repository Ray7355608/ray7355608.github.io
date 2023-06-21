/*
obj 要执行动画的对象
atrr 要执行动画的样式
target 执行动画的目标位置
speed 移动速度
callback 回调函数，动画执行完后执行
*/
function move(obj , atrr , target , speed , callback){
	clearInterval(obj.timer);
	//获取自身位置
	var current = parseInt(getStyle(obj,atrr));
	//判断正负
	if(current > target){
		speed = -speed;
	}
	obj.timer = setInterval(function(){
		//自身位置
		var oldValue = parseInt(getStyle(obj,atrr));
		//自身位置上自增
		var newValue = oldValue + speed;
		//判断是否到达目的地
		if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
		newValue = target;
		}
		//移动
		obj.style[atrr] = newValue + "px";
		//关掉计时器
		if(newValue == target){
			clearInterval(obj.timer);
			callback && callback();
		}
	},30);
}
function getStyle(obj , name){
	if(window.getComputedStyle){
		return getComputedStyle(obj , null)[name];
	}else{
		return obj.currentStyle[name];
	}
}
function addClass(obj , cn){
	if(!hasClass(obj , cn)){
	obj.className +=" "+ cn;
	}
}
function hasClass(obj , cn){
	//验证类名可以使用正则表达式来验证是否存在
	var reg = new RegExp("\\b"+cn+"\\b");
	return reg.test(obj.className);
}
function removeClass(obj , cn){
	var reg = new RegExp("\\b"+cn+"\\b");
	obj.className = obj.className.replace(reg , "");
}
//替换类toggleClass可以用来切换一个类,有就删除没有就添加
function toggleClass(obj , cn){
	var reg = new RegExp("\\b"+cn+"\\b");
	if(hasClass(obj , cn)){
		obj.className = obj.className.replace(reg , "");
	}else{
		obj.className +=" "+ cn;
	}
}
