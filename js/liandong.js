//国家
var arrs=["中国","美国","韩国"];
//省份
 arrs["中国"]=["安徽","北京"];
 arrs["美国"]=["华盛顿","纽约"];
 arrs["韩国"]=["首尔","釜山"];
//市
 arrs["安徽"]=["六安","合肥","宣城"];
 arrs["北京"]=["北京1","北京2","北京3"];
 arrs["华盛顿"]=["华盛顿1","华盛顿2","华盛顿3"];
 arrs["纽约"]=["纽约1","纽约2","纽约3"];
 arrs["首尔"]=["首尔1","首尔2","首尔3"];
 arrs["釜山"]=["釜山1","釜山2","釜山3"];

var curCounty=-1;
function addInfo(id,array){
	var xuanze=document.getElementById(id);
	/*for(var i=0;i<array.length;i++){
		//create a element
		var o=document.createElement('option');
		o.text=array[i];
		xuanze.add(o,null);
	}*/
	xuanze.options.length=0;
	for(var i=0;i<array.length;i++){
		var op=new Option();
		op.value=array[i];
		op.text=array[i];
		xuanze.options.add(op,null);
	}

}

function init(){
	addInfo("country",arrs);
    addInfo("province",arrs[arrs[0]]);
	addInfo("city",arrs[arrs[arrs[0]][0]]);
	curCounty=0;
}
//获取的是option的下标
function changeCounty(sel){
	addInfo("province",arrs[arrs[sel.selectedIndex]]);
    addInfo("city",arrs[arrs[arrs[sel.selectedIndex]][0]]);
	curCounty=sel.selectedIndex;
}
//获取的是option的值
function changeProvince(sel){
	//addInfo("city",arrs[arrs[arrs[curCounty]][sel.selectedIndex]]);
	addInfo("city",arrs[sel]);
}

 window.onload=init;
