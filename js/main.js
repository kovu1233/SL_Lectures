$("#upSubmitted").click(function(){
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

	$.ajax({
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

});