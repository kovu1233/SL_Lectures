<?php
//echo json_encode("hi");
//$formData = array();
//$formData['success'] = 'okok';//$_POST['user'];
//$formData['posted'] = 'posted';
//echo "hi :)";

/*$formData->success = "okok";
$formData->posted = "posted";
$formData->city = "New York";

$myJSON = json_encode($formData);
echo $myJSON;*/

include("connection.inc.php");
	//session_start();
   //$myusername = $_GET['user'];
	if($_SERVER["REQUEST_METHOD"] == "POST") {
    	//$remember = preg_replace('#[^0-1]#i', '', $_POST['remember']);

    	$myusername = mysqli_real_escape_string($conn,$_GET['user']);
    	$mypassword = mysqli_real_escape_string($conn,$_GET['pword']);
    	//$msg = $myusername;
    	//$remember = mysqli_real_escape_string($conn,$_POST['remember']);
    	//echo $remember;
		$sql = "SELECT uid, active FROM users WHERE username = '$myusername' AND password = '$mypassword'";

		$result = mysqli_query($conn,$sql);
		$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
		//$active = $row['active'];
		$count = mysqli_num_rows($result);
		$cont = "";
		$days = "";
      	
      	if($count == 1) {
			$_SESSION['login_user'] = $myusername;
			//$user = $myusername;
			$msg = "succ";
			//$cont = $myusername;
			$sql = mysqli_query($conn, "SELECT DISTINCT day FROM mutarjemeen WHERE interpreter = '$myusername'") or die (mysqli_error($conn));
			while($result = mysqli_fetch_array($sql, MYSQLI_ASSOC)){
				$days .= "<tr class='noselect' height='50px' width='100%' style='background-color: #ADD8E6; cursor: pointer; font-weight: bolder; color: #000;'><td onclick=\"clickDay('".$myusername."', '".$result['day']."');\" align='center'>".$result['day']."</td></tr>";
			}
		}
		else {
			$msg = "noSucc";
			$error = "Your Login Name or Password is invalid";
			//echo "<div style='color: red; font-size:110%; font-weight: bolder;' id='logMsgMe'>".$error."</div>";
			//echo "<script>logMsgMe();</script>";
		}
   	}
   	/*else{
   		$msg = "not post";
   	}*/

   	//$response['myusername'];
   	$response['msg'] = $msg;
	$response['cont'] = $cont;
	$response['days'] = $days;
	echo json_encode($response);

?>