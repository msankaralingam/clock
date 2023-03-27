//current time
let date = new Date();
console.log(date.getHours());



let a=new Date();
var res=a.getHours();

if(res>=6 && res<=11)
{
	console.log("morning");
}
else if(res>=12 && res<=16)
{
	console.log("afternoon");
}
else{
	console.log("night");
}
