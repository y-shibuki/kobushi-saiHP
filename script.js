var engeki;
var s=0;
var vs=0.1;
var flag=false;
window.onload=function(){
	var elem=document.getElementById("link1");
	var width=200,height=125;
	elem.style.left=window.innerWidth/2-width/2;
	engeki=new ButtonData(parseInt(elem.style.left)+width/2, parseInt(elem.style.top)+height/2, width,height);

	setInterval("tick()",20);
}
function tick(){
	if(flag){
		engeki.x+=s;
		s+=vs;
		document.getElementById("link1").style.left=engeki.x-engeki.width2;
	}else{
		document.onmousemove=function(e){
			var mx=e.clientX;
			var my=e.clientY;
			if( mx > engeki.x - engeki.width2 && mx < engeki.x + engeki.width2 && my > engeki.y - engeki.height2 && my < engeki.y + engeki.height2 ){
				flag=true;
			}
		}
	}
}
function ButtonData(X,Y,W,H){
	this.x=X;this.y=Y;this.width=W;this.height=H;this.width2=W/2;this.height2=H/2;
}