<?php
include("connection.inc.php");

$modifier = mysqli_real_escape_string($conn,$_GET['z']);
$getDay = '';
$cont = '';
$comT = '';
$zValue = '';

if ($modifier == "clickDay"){
	$myusername = mysqli_real_escape_string($conn,$_GET['x']);
	$myDay = mysqli_real_escape_string($conn,$_GET['y']);

	$sql = mysqli_query($conn, "SELECT DISTINCT coursename FROM mutarjemeen WHERE interpreter = '$myusername' AND day = '$myDay'") or die (mysqli_error($conn));
	while($result = mysqli_fetch_array($sql, MYSQLI_ASSOC)){
		$getDay .= "<tr class='noselect' height='50px' width='100%' style='background-color: #ADD8E6; cursor: pointer; font-weight: bolder; color: #000;'><td onclick=\"clickCourse('".$myusername."', '".$myDay."', '".$result['coursename']."');\" align='center'>".$result['coursename']."</td></tr>";
	}
}

if ($modifier == "clickCourse"){

	$myusername = mysqli_real_escape_string($conn,$_GET['x']);
	$myDay = mysqli_real_escape_string($conn,$_GET['y']);
	$myCourse = mysqli_real_escape_string($conn,$_GET['n']);
	//$myCourse = trim($myCourse);
	
	$sql = mysqli_query($conn, "SELECT * FROM mutarjemeen WHERE interpreter = '$myusername' AND day = '$myDay' AND coursename = '$myCourse'") or die (mysqli_error($conn));
	while($result = mysqli_fetch_array($sql, MYSQLI_ASSOC)){
		$getResults = $result['details'];
		$zValue .= $result['details'].',';
		$cont .= "<tr class='noselect' height='35px' style='background-color: #ADD8E6;'><td id='".$getResults."N' align='center' style='font-size: 120%; color: black; font-weight: bolder;'>".$result['student']."</td><td id='".$getResults."A' onclick='attended(this.id);' style='font-style: italic;' align='center'>None</td><td id='".$getResults."P' style='background-color: #666;' align='center' valign='middle'><img src='images\write.png' height='30px' id='".$getResults."I' style='display: none;' onclick='writeTime(this.id);'></td><td id='".$getResults."D' align='center' valign='middle'><img src='images\write.png' height='30px' id='".$getResults."C' onclick='writeComment(this.id);'></td></tr>";
		
		if ($result['comments'] != "" || $result['late']){
			$sql1 = mysqli_query($conn, "UPDATE mutarjemeen SET comments = '', late = '' WHERE details = '$getResults'") or die (mysqli_error($conn));
		}
	}

	//$zValue = '<tr><td colspan="4" style="border-bottom: none; border-left: none; border-right: none;">&nbsp;</td></tr><tr><td colspan="4" id="subAll" onclick="(subAll('.$zValue.'));" class="button" style="background-color:#2979FF; color: #FFFFFF;">Submit</td></tr>';
}

if ($modifier == "inputData"){
	$inputData = mysqli_real_escape_string($conn,$_GET['x']);
	$attend = mysqli_real_escape_string($conn,$_GET['attend']);
	$user = mysqli_real_escape_string($conn,$_GET['user']);
	$attendArr = explode(",", $attend);
	$inputDataArr = explode(",", $inputData);
	//$counta = 0;
	$todaysDate = date("d/m/Y");
	$countb = count($inputDataArr) - 1;
	//$attendArray = $attendArr[$counta];

	for ($i = 0; $i <= $countb; $i++){
		$sql = mysqli_query($conn, "SELECT * FROM mutarjemeen WHERE details = '$inputDataArr[$i]'") or die (mysqli_error($conn));
		while($result = mysqli_fetch_array($sql, MYSQLI_ASSOC)){
			$late = $result['late'];
			$comments = $result['comments'];
			$name = $result['student'];
			$sql1 = mysqli_query($conn, "INSERT INTO mutarjemeenc (slid, name, attendence, lateBy, enteredBy, dateBy, comment) VALUES ('$inputDataArr[$i]', '$name', '$attendArr[$i]', '$late', '$user', '$todaysDate', '$comments')") or die (mysqli_error($conn));
		}
		//$zValue .= mysqli_error($conn);
	}
}



if ($modifier == "checkComments"){
	$k = mysqli_real_escape_string($conn,$_GET['k']);
	$sql = mysqli_query($conn, "SELECT comments FROM mutarjemeen WHERE details = '$k'") or die (mysqli_error($conn));
	while($result = mysqli_fetch_array($sql, MYSQLI_ASSOC)){
		$comT = $result['comments'];
	}
}

if ($modifier == "checkLate"){
	$k = mysqli_real_escape_string($conn,$_GET['k']);
	$sql = mysqli_query($conn, "SELECT late FROM mutarjemeen WHERE details = '$k'") or die (mysqli_error($conn));
	while($result = mysqli_fetch_array($sql, MYSQLI_ASSOC)){
		$comT = $result['late'];
	}
}

if ($modifier == "cv"){
	$cv = mysqli_real_escape_string($conn,$_GET['cv']);
	$c = mysqli_real_escape_string($conn,$_GET['c']);
	$sql = mysqli_query($conn, "UPDATE mutarjemeen SET comments = '$cv' WHERE details = '$c'") or die (mysqli_error($conn));
}

if ($modifier == "tv"){
	$tv = mysqli_real_escape_string($conn,$_GET['tv']);
	$c = mysqli_real_escape_string($conn,$_GET['c']);
	$sql = mysqli_query($conn, "UPDATE mutarjemeen SET late = '$tv' WHERE details = '$c'") or die (mysqli_error($conn));
}

$response['comT'] = $comT;
$response['getDay'] = $getDay;
$response['getCourse'] = $cont;
$response['zValue'] = $zValue;
echo json_encode($response, JSON_UNESCAPED_UNICODE);

?>