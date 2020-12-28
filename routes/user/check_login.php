<?php
require_once('../../controllers/CustomerController.php');
$userControl = new CustomerController();
$login = $userControl->checkLogin();
if ($login) {
	header("Location: ../../index.php");
} else {
	session_start();
	$_SESSION['errors'] = array('Wrong login information, please try again!');
	header("Location: ../../login.php");
}
?>