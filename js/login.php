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

$response['msg'] = "Hello";
$response['triggered'] = "How are you?";
$response['lastUpdateCount'] = "Good Bye";

echo json_encode($response);

/*include("connection.inc.php");
	session_start();
   
	if($_SERVER["REQUEST_METHOD"] == "POST") {
    	//$remember = preg_replace('#[^0-1]#i', '', $_POST['remember']);
    	$myusername = mysqli_real_escape_string($conn,$_POST['user']);
    	$mypassword = mysqli_real_escape_string($conn,$_POST['pword']);
    	//$remember = mysqli_real_escape_string($conn,$_POST['remember']);
    	//echo $remember;
		$sql = "SELECT uid, active FROM users WHERE username = '$myusername' AND password = '$mypassword'";

		$result = mysqli_query($conn,$sql);
		$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
		$active = $row['active'];

		$count = mysqli_num_rows($result);
		
      	if($count == 1) {
			$_SESSION['login_user'] = $myusername;
			echo "succ";
			//header("location: ../drcsystem/DMS/index.php");

		}
		else {
			echo "noSucc";
			$error = "Your Login Name or Password is invalid";
			//echo "<div style='color: red; font-size:110%; font-weight: bolder;' id='logMsgMe'>".$error."</div>";
			//echo "<script>logMsgMe();</script>";
		}
   	}*/

?>