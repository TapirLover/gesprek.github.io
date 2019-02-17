function getDate(){
	
	var d = new Date();
	console.log(d);
	var naam1;
	var naam2
	var vraag;
	var ant1;
	var reactie;
	var tx;
	
	tx = Date.parse(document.getElementById("datumin").value);
	
	if(document.getElementById("datumin").value != ""){
		d.setTime(tx);
	}
	
	if(d.getDate() % 2 == 0){
		//iseven
		naam1 = "Sophie: ";
		naam2 = "Rudolf: ";
	}else{
		naam1 = "Rudolf: ";
		naam2 = "Sophie: ";
	}
	
	if(d.getHours() >= 6 && d.getHours() <= 8){
		vraag = "Klaar voor een nieuwe dag? ";
	}if(d.getHours() >= 9 && d.getHours() <= 11){
		vraag = "Heb je het nieuws nog gezien/gehoord? ";
	}if(d.getHours() >= 12 && d.getHours() <= 15){
		vraag = "Ben je een begin van de middag persoon of een eind van de middag persoon? ";
	}if(d.getHours() >= 16 && d.getHours() <= 18){
		vraag = "Heb je het gevoel dat de dag al bijna voorbij is? ";
	}if(d.getHours() >= 19 && d.getHours() <= 21){
		vraag = "Zin in vannacht of meer zin in morgen? ";
	}if(d.getHours() >= 22 && d.getHours() <= 23){
		vraag = "Wat is er aan de hand? ";
	}if(d.getHours() >= 0 && d.getHours() <= 2){
		vraag = "Wat is er aan de hand? ";
	}if(d.getHours() >= 3 && d.getHours() <= 5){
		vraag = "Wat vind je er nou echt van dat ik je ken? ";
	}
	
	if(d.getDay() == 0){
		ant1 = "Dat spreekt voor zich, want het is natuurlijk zondag ";
	}if(d.getDay() == 1){
		ant1 = "Hoe moet ik dat weten? ";
	}if(d.getDay() == 2){
		ant1 = "Waar heb je het over? Er gebeurt niks ";
	}if(d.getDay() == 3){
		ant1 = "Ah joh, met mij gaat het wel goed ";
	}if(d.getDay() == 4){
		ant1 = "Nee, nou ik zit er een beetje tussen in denk ik ";
	}if(d.getDay() == 5){
		ant1 = "Meh, ups en downs. Weet je zoals het gaat ";
	}if(d.getDay() == 6){
		ant1 = "Hangt er echt heel erg vanaf ";
	}
	
	if(d.getMinutes() >= 0 && d.getMinutes() <= 14){
		reactie = "Oh nou met mij gaat wel goed hoor, bedankt voor vragen ";
	}if(d.getMinutes() >= 15 && d.getMinutes() <= 29){
		reactie = "Nee oke hey goed gesprek wel ";
	}if(d.getMinutes() >= 30 && d.getMinutes() <= 44){
		reactie = "Lekker weertje verder? ";
	}if(d.getMinutes() >= 45 && d.getMinutes() <= 59){
		reactie = "Oke, nou ik zou bijna verbaasd zijn ";
	}
	
	var datstring = new Date();
	
	document.getElementById('demo').innerHTML = naam1 + vraag;
	document.getElementById('demo1').innerHTML = naam2 + ant1;
	document.getElementById('demo2').innerHTML = naam1 + reactie;
	document.getElementById("demo3").innerHTML = d.toString().slice(0,21);
}
function nunu(){
	var dd = new Date();
	dd.setHours(dd.getHours() + 1);
	document.getElementById('datumin').value = (dd).toISOString().slice(0, 16);
	getDate();
	
}
function nuu(){
	var dd = new Date();
	dd.setHours(dd.getHours() + 1);
	document.getElementById('datumin').value = (dd).toISOString().slice(0, 16);
}