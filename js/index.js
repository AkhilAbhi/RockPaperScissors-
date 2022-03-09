you = "";
op = "";
youS = 0;
opS = 0;



function pop(){
	console.log("loding")
	window.onload = start();
}


function start(){
	document.getElementById('popButton').style.display="none";
	
	document.getElementById('main').style.display="block";
}

function clickButton(txt){
	you = txt;
	s="img/"+txt+".png";
	document.getElementById("m1").src=s;
	//alert(document.getElementById("img1").src)
	anm();
}
function anm(){
	lst=["r","p","s"];
	m =0;
	
	for (var i = 0; i < 20; i++) {
		ff(i);
		if(i == 19){
		//	ran()
		}
	}
	function ff(s){
		pp = 0;
		setTimeout(function() {
			p = "img/"+lst[m]+".png";
			document.getElementById("m2").src=p;
			if (pp == 19 ) {
				ran()
			}
			//console.log(pp)
			m=m+1;
			pp = pp+1;
			if (m == 3) {
				m= 0;
			}
		}, 200*s);
	}
	//ran();
}
function ran(){
	lst=["r","p","s","p","s","r","s","r","p"];
	num = Math.floor(Math.random() * 9);
	m = lst[num];
	a = "img/"+m+".png";
	document.getElementById("m2").src=a;
	//console.log(num);
	op = m;
	console.log(you);
	console.log(m);
	gameLogic()
}


function gameLogic(){
	if (you == op || op == you) {
		console.log("nopady");
		
		document.getElementById("popp").style.display="block";
		document.getElementById("imoshan").src="img/no.gif";
		document.getElementById("poppH1").innerHTML="Nobody Scored"
		
		t = 0;
		for (var i = 0; i < 5; i++) {
		fe(i);
		
	}
		
		
		
		
		function fe(i){
			setTimeout(function() {t = t+1
			console.log(i)
				if (t == 5) {
					document.getElementById("popp").style.display="none"
					document.getElementById("m1").src="img/start.png";
					document.getElementById("m2").src="img/start.png";
				}else{
					document.getElementById("popp").style.display="block"
				}
			}, 1000*i);
	}
		
		
		
		
		
	}else if(you == "r" && op == "p" || you =="p" && op == "s" || you == "s" && op == "r"){
		console.log("opponent win");
		opS = opS+1
		document.getElementById("os").innerHTML=opS;
		document.getElementById("popp").style.display="block";
		document.getElementById("imoshan").src="img/smile.gif";
		document.getElementById("poppH1").innerHTML="Me Scored"
		t = 0;
		for (var i = 0; i < 5; i++) {
		fe(i);
		
	}
		
		
		
		
		function fe(i){
			setTimeout(function() {t = t+1
			console.log(i)
				if (t == 5) {
					document.getElementById("popp").style.display="none"
					document.getElementById("m1").src="img/start.png";
					document.getElementById("m2").src="img/start.png";
				}else{
					document.getElementById("popp").style.display="block"
				}
			}, 1000*i);
	}
		
		
		
	}else if (op == "r" && you == "p" || op == "p" && you == "s" || op == "s" && you == "r") {
		console.log("you win");
		youS = youS+1;
		document.getElementById("us").innerHTML=youS;
		document.getElementById("popp").style.display="block";
		document.getElementById("imoshan").src="img/sad.gif";
		document.getElementById("poppH1").innerHTML="You Scored"
		
		t = 0;
		
		
		for (var i = 0; i < 5; i++) {
		fe(i);
		
	}
		
		function fe(i){
			setTimeout(function() {t = t+1
			console.log(i)
				if (t == 5) {
					document.getElementById("popp").style.display="none"
					document.getElementById("m1").src="img/start.png";
					document.getElementById("m2").src="img/start.png";
				}else{
					document.getElementById("popp").style.display="block"
				}
			}, 1000*i);
		}
	}
	win();
}



function win(){
	
	
	
	
	
	
	if (youS == 2 || youS >= 2) {
		console.log("you pass");
		setTimeout(function() {location.reload()}, 2000*2);
			document.getElementById("popp").style.display="block";
		document.getElementById("imoshan").src="img/youWin.gif";
		document.getElementById("poppH1").innerHTML="Congratulations"
		
		t = 0;
		
		
		
		
		}
	if (opS == 5 || opS >= 5) {
		console.log("op pass");
		console.log("you pass");
		setTimeout(function() {location.reload()}, 2000*2);
		
		document.getElementById("popp").style.display="block";
		document.getElementById("imoshan").src="img/meWin.gif";
		document.getElementById("poppH1").innerHTML="You Loser"
		
		location.reload()
		
		
		
		
		
		
		
		
		
		
		
	}
}