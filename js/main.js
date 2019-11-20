function loginUser(){
	var user = document.getElementById("user").value;
	var pword = document.getElementById("pword").value;
	//var dataString = "user="+user+"&pword="+pword;


	if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
        	
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var myData= eval("(" + xmlhttp.responseText + ")");
                //alert (myData['cont']);
                if (myData['msg'] == "succ"){
                	//window.location.href = "Mutarjemeen.html?user="+user;
                	//alert (myData['cont']);
                	document.getElementById("tbl1").style.display = "none";
                	//document.getElementById("tbl3").style.display = "none";
                	//document.getElementById("mutarjemeen").innerHTML = myData['cont'];
                	document.getElementById("tbl2").style.display = "table";
                	document.getElementById("tbl2").innerHTML = myData['days'];
                	document.getElementById("navChanger").style.display = "block";
                }
                else{
                	alert ("Incorrect Username/ Password!");
                }
            }
        }
		
        xmlhttp.open("POST", "http://m16-002-05.sharjah.uos.edu/phonegap/framework7/www/login.php?user=" + user + "&pword=" + pword, true);
        xmlhttp.send();
}

function attended(x){
	document.getElementById(x).style.color = "#000";
	//var pl = str.charAt(x.length-3)

	if (document.getElementById(x).innerHTML == "None" || document.getElementById(x).innerHTML == "Absent"){
		document.getElementById(x).innerHTML = "Present";
		document.getElementById(x).style.backgroundColor = "green";
	}
	else if (document.getElementById(x).innerHTML == "Present"){
		document.getElementById(x).innerHTML = "Late";
		document.getElementById(x).style.backgroundColor = "yellow";
	}
	else if (document.getElementById(x).innerHTML == "Late"){
		document.getElementById(x).innerHTML = "Absent";
		document.getElementById(x).style.backgroundColor = "red";
	}

	if (document.getElementById(x).innerHTML == "Late"){
		var i = x.slice(0,-1) + "I";
		var p = x.slice(0,-1) + "P";
		document.getElementById(p).style.backgroundColor = "";
		document.getElementById(i).style.display = "block";
	}
	else{
		var i = x.slice(0,-1) + "I";
		var p = x.slice(0,-1) + "P";
		document.getElementById(p).style.backgroundColor = "#666";
		document.getElementById(i).style.display = "none";
	}
}

function writeComment(x){
	var z = "checkComments";
	var k = x.slice(0,-1);
	var n = x.slice(0,-1) + "N";
	var idHolder = x.slice(-4);
	idHolder = idHolder.slice(0,-1);
	document.getElementById("cName").innerHTML = document.getElementById(n).innerHTML;
	document.getElementById("idHolder").value = idHolder;
	
	if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){
	    	var myData= eval("(" + xmlhttp.responseText + ")");
	    	document.getElementById("commentArea").value = myData['comT'];
	    	document.getElementById("tbl4").style.display = "none";
			document.getElementById("tbl5").style.display = "block";
	    }
	}	
	xmlhttp.open("POST", "http://m16-002-05.sharjah.uos.edu/phonegap/framework7/www/viewPort.php?k=" + k + "&z=" + z, true);
	xmlhttp.send();
}

function writeTime(x){
	var z = "checkLate";
	var k = x.slice(0,-1);
	var n = x.slice(0,-1) + "N";
	var idHolder = x.slice(-4);
	idHolder = idHolder.slice(0,-1);
	document.getElementById("tName").innerHTML = document.getElementById(n).innerHTML;
	document.getElementById("idHolder").value = idHolder;

	if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){
	    	var myData= eval("(" + xmlhttp.responseText + ")");
	    	document.getElementById("late").value = myData['comT'];
	    	document.getElementById("tbl4").style.display = "none";
			document.getElementById("tbl6").style.display = "block";
	    }
	}	
	xmlhttp.open("POST", "http://m16-002-05.sharjah.uos.edu/phonegap/framework7/www/viewPort.php?k=" + k + "&z=" + z, true);
	xmlhttp.send();
}

function closeComment(){
	//if (document.getElementById("tbl5").style.display == "block"){
		document.getElementById("tbl5").style.display = "none";
		document.getElementById("tbl6").style.display = "none";
		document.getElementById("tbl4").style.display = "table";
	//}
}


function addComment(){
	var c = document.getElementById("idHolder").value;
	var tv = document.getElementById("late").value; 
	var cv = document.getElementById("commentArea").value;
	cv = encodeURIComponent(cv);
	tv = encodeURIComponent(tv);
	var z = "";

	if (document.getElementById("tbl5").style.display == "block"){
		if (cv == ""){
			alert ("No Comments Added");
		}
		else{
			document.getElementById(c+"C").src = "images/writeD.png";
			z = "cv";
		}
	}

	if (document.getElementById("tbl6").style.display == "block"){
		if (tv == ""){
			alert ("No Late Time Added");
		}
		else{
			var late = document.getElementById(c+"I");
			late.src = "images/writeD.png";
			if(parseInt(late.value,10)<10)late.value='0'+late.value;
			z = "tv";
		}
	}

	if (window.XMLHttpRequest) {
    	xmlhttp = new XMLHttpRequest();
    }
    else {
    	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	//var myData= eval("(" + xmlhttp.responseText + ")");
	    	document.getElementById("commentArea").value = "";
	    	document.getElementById("late").value = "";
	    	closeComment();
	    }
	}	
	xmlhttp.open("POST", "http://m16-002-05.sharjah.uos.edu/phonegap/framework7/www/viewPort.php?c=" + c + "&cv=" + cv + "&tv=" + tv + "&z=" + z, true);
	xmlhttp.send();
}

function clickDay(x, y){
	var z = "clickDay";
	if (window.XMLHttpRequest) {
    	xmlhttp = new XMLHttpRequest();
    }
    else {
    	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	var myData= eval("(" + xmlhttp.responseText + ")");
	    	document.getElementById("tbl2").style.display = "none";
	    	document.getElementById("tbl3").style.display = "table";
	       	document.getElementById('tbl3').innerHTML = myData['getDay'];
	    }
	}	
	xmlhttp.open("POST", "http://m16-002-05.sharjah.uos.edu/phonegap/framework7/www/viewPort.php?x=" + x + "&y=" + y + "&z=" + z, true);
	xmlhttp.send();	
}

function clickCourse(x, y, n){
	var z = "clickCourse";
	n = encodeURIComponent(n);
	if (window.XMLHttpRequest) {
    	xmlhttp = new XMLHttpRequest();
    }
    else {
    	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	var myData= eval("(" + xmlhttp.responseText + ")");
	    	document.getElementById("tbl3").style.display = "none";
	    	document.getElementById("tbl4").style.display = "table";
	       	document.getElementById('mutarjemeen').innerHTML = myData['getCourse'];


	       	document.getElementById('mutarjemeenSub').innerHTML = "<tr><td colspan='4' style='border-left: none; border-right: none; border-bottom: none;'>&nbsp;</tr></tr><tr><td colspan='4' align='center' class='button' style='background-color:#2979FF; color: #FFFFFF;' onclick=\"inputData('"+myData['zValue']+"');\">Submit</td></tr>";
	    }
	}	
	xmlhttp.open("POST", "http://m16-002-05.sharjah.uos.edu/phonegap/framework7/www/viewPort.php?x=" + x + "&y=" + y + "&n=" + n + "&z=" + z, true);
	xmlhttp.send();
}

function inputData(x){
	
	var z = "inputData";
	var user = document.getElementById("user").value;
	var att = x.split(",");
	var attend = "";

	for (var i = 0; i < att.length-1; i++){
		attend += document.getElementById(att[i]+"A").innerHTML+",";
		//alert();
	}

	if (window.XMLHttpRequest) {
    	xmlhttp = new XMLHttpRequest();
    }
    else {
    	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	//var myData= eval("(" + xmlhttp.responseText + ")");
			//alert (myData['zValue']);    	
			alert (xmlhttp.responseText);
	    }
	}	
	xmlhttp.open("POST", "http://m16-002-05.sharjah.uos.edu/phonegap/framework7/www/viewPort.php?x=" + x + "&attend=" + attend + "&user=" + user + "&z=" + z, true);
	xmlhttp.send();
}

function navChanger(){
	if (document.getElementById("tbl2").style.display == "table"){
		document.getElementById("tbl2").style.display = "none";
		document.getElementById("tbl1").style.display = "table";
		document.getElementById("navChanger").style.display = "none";
	}
	if (document.getElementById("tbl3").style.display == "table"){
		document.getElementById("tbl3").style.display = "none";
		document.getElementById("tbl2").style.display = "table";
	}
	if (document.getElementById("tbl4").style.display == "table"){
		document.getElementById("tbl4").style.display = "none";
		document.getElementById("tbl3").style.display = "table";
	}

	if (document.getElementById("tbl5").style.display == "block" || document.getElementById("tbl6").style.display == "block"){
		document.getElementById("tbl5").style.display = "none";
		document.getElementById("tbl6").style.display = "none";
		document.getElementById("tbl4").style.display = "table";
	}
}

/*$("#upSubmitted").click(function(){
	var user = document.getElementById("user").value;
	var pword = document.getElementById("pword").value;
	var dataString = "user="+user+"&pword="+pword;

	/*if (window.XMLHttpRequest) {xmlhttp = new XMLHttpRequest();} else {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}xmlhttp.onreadystatechange=function(){if (xmlhttp.readyState==4&&xmlhttp.status==200){
		alert ("sending");
		alert (xmlhttp.responseText);
		if (xmlhttp.responseText == "succ"){
			window.location.href = "Mutarjemeen.html";
		}
		else{
			alert ("Incorrect username/ password");
		}
	}}

	xmlhttp.open("POST", "login.php?user=" + user + "&pword=" + pword, true);
	//document.getElementById("displayAndGo").innerHTML = "Added 1 Record!";
	xmlhttp.send();*/
 //$.mobile.allowCrossDomainPages = true;

	/*$.ajax({
		type: "POST",
		url: "./login.php",
		//crossDomain: true,
    	//cache: false,
		data: "",
		dataType: 'text',


		
		success: function (data) {
			//alert ("done");
			//var data = JSON.parse(data);
			//data = jQuery.parseJSON(data);
			var myData= eval("(" + data + ")");
			alert(myData['msg']);


		}
	});
	//return false;
	*/
/*
	if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                alert(xmlhttp.responseText);
            }
        }
		
        xmlhttp.open("POST","./login.php?Username=" + user + "&pass=" + pword, true);//+"&q1="+str2,true);
        xmlhttp.send();
	

/*xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myData= eval("(" + xmlhttp.responseText + ")");
		alert(myData['lastUpdateCount']);
  }
};
xmlhttp.open("GET", "login.php", true);
xmlhttp.send();*/


	/*$.ajax({ type:"POST",
             url:"http://localhost/phonegap/framework7/www/login.php",
             data: { name: "TEMP" },
             dataType : 'json',
             success: function(data) { alert(data.return);},
             error: function(xhr, textStatus, thrownError) { alert("Error: " + thrownError);}
             //error: function(xhr, textStatus, thrownError, data.return) { alert("Error: " + thrownError);}
    });

    //alert ("ok");*/

//});
