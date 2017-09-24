<?php
	//DEFINE QUYEN CHO TUNG NGUOI
	define("ADMIN", 1);
	define("MANAGER", 2);
	define("USERS", 4);
	//define("FARMER", 8);
	//define("PACKER", 16);

	$target_files = 'uploads/files/';
	$target_videos = 'uploads/videos/';
	$target_videos_home = '../uploads/videos/';
	$target_images = 'uploads/images/';
	$target_images_home = '../uploads/images/';
	$target_banner = 'uploads/banner/';
	$target_banner_home = '../uploads/banner/';
	$target_background_home = '../uploads/background/';
	$target_background = 'uploads/background/';

	$files_extension = array('pdf', 'zip', 'rar', 'doc', 'docx', 'xls', 'png', 'gif', 'jpg', 'jpeg', 'bmp', 'rtf');
	$videos_extension = array('mp4', 'ogg', 'webm');
	$images_extension = array('png', 'gif', 'jpg', 'jpeg', 'bmp');
	$valid_formats = array("jpg", "png", "gif", "zip", "bmp", "doc", "docx", "pdf", "xls", "xlsx", "ppt", "pptx", 'zip', 'rar');
	$max_file_size = 1024*1024*1024*1024; //1024MB

	$arr_gioitinh = array('M' => 'Nam', 'F' => 'Nữ');
	$arr_dungdenngay = array('D' => 'Ngày', 'M' => 'Tháng', 'Y' => 'Năm');

	$items_of_page = 9;

?>
