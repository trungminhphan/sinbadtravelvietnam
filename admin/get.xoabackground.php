<?php
require_once('header_none.php');
$filename = isset($_GET['filename']) ? $_GET['filename'] : '';
if(file_exists($target_background_home.$filename)){
  if(@unlink($target_background_home.$filename)){
    echo 'Đã xoá thành công';
  } else {
    echo 'Không thể xoá';
  }
}
?>
