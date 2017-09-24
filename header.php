<?php
function __autoload($class_name) {
    require_once('admin/cls/class.' . strtolower($class_name) . '.php');
}
$session = new SessionManager();
$users = new Users();
require_once('admin/inc/functions.inc.php');
require_once('admin/inc/config.inc.php');
$danhmuctour = new DanhMucTour();$danhmuctintuc = new DanhMucTinTuc();
$danhmuctour_list = $danhmuctour->get_list_condition(array('id_parent' => ''));
$url = isset($_SERVER['REDIRECT_URL']) ? $_SERVER['REDIRECT_URL'] : 'index.html'; $a = explode("/", $url); $l = end($a);
$id = isset($_GET['id']) ? $_GET['id'] : '';
?>
<!DOCTYPE html>
<html lang="en-US">
<head>
	<title>Sinbad travel</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="keywords" content="travel, Sinbad travel, tour, viet travel, tour du lich, du lich, du lich trong nuoc, du lich ngoai nuoc, du lich chau au, du lich nhat ban, du lich hoa ky" />
	<meta name="description" content="Sinbad travel - Tự hào là đơn vị tổ chức và điều hành tour uy tín cho các cá nhân tập thể du lịch trong và ngoài nước" />
	<meta name="title" content="Sinbad travel - Du lịch trong và ngoài nước theo cách của bạn" />
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="xmlrpc.php">
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
	<link rel="stylesheet" href="assets/css/bootstrap.min.css" type="text/css" media="all">
	<link rel="stylesheet" href="assets/css/font-awesome.min.css" type="text/css" media="all">
	<link rel="stylesheet" href="assets/css/flaticon.css" type="text/css" media="all">
	<link rel="stylesheet" href="assets/css/font-linearicons.css" type="text/css" media="all">
	<link rel="stylesheet" href="style.css" type="text/css" media="all">
	<link rel="stylesheet" href="assets/css/travel-setting.css" type="text/css" media="all">
	<link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
</head>
<body class="archive travel_tour travel_tour-page">
<div class="wrapper-container">
	<header id="masthead" class="site-header sticky_header affix-top">
		<div class="header_top_bar">
			<div class="container" style="font-size: 14px;">
				<div class="row">
					<div class="col-sm-4">
						<aside id="text-15" class="widget_text">
							<div class="textwidget">
								<ul class="top_bar_info clearfix">
									<li><i class="fa fa-clock-o"></i> Thứ 2 - Thứ 7 8.00 - 18.00.</li>
								</ul>
							</div>
						</aside>
					</div>
					<div class="col-sm-8 topbar-right">
						<aside id="text-7" class="widget widget_text">
							<div class="textwidget">
								<ul class="top_bar_info clearfix">
									<li><i class="fa fa-phone"></i>(0296).39.13579 - 0985.899.980</li>
									<li class="hidden-info">
										<i class="fa fa-map-marker"></i> 06 Hoàng Ngọc Phách,P. Mỹ Thới, Tp. Long xuyên, tỉnh An Giang
									</li>
								</ul>
							</div>
						</aside>

						<aside id="travel_login_register_from-2" class="widget widget_login_form">
							<div class="form_popup from_register" tabindex="-1">
								<div class="inner-form">
									<div class="closeicon"></div>
									<h3>Điền thông tin đặt Tour</h3>
									<form method="POST" class="register" action="post.booking.html">
										<input type="hidden" name="id_tour" id="id_tour" value="" />
										<input type="hidden" name="url" id="url" value="<?php echo $_SERVER['REQUEST_URI']; ?>" />
										<p class="form-row">
											<label for="reg_email">Họ tên<span class="required">*</span></label>
											<input type="text" class="input" name="hoten" id="hoten" value="" required>
										</p>
										<p class="form-row">
											<label for="reg_email">Địa chỉ Email<span class="required">*</span></label>
											<input type="email" class="input" name="email" id="email" value="" required>
										</p>
										<p class="form-row">
											<label for="reg_email">Điện thoại<span class="required">*</span></label>
											<input type="text" class="input" name="dienthoai" id="dienthoai" value="" required>
										</p>
										<p class="form-row">
											<label for="reg_email">Số vé<span class="required"></span></label>
											<input type="text" class="input" name="sove" id="sove" value="1" required>
										</p>
										<p class="form-row">
											<textarea name="ghichu" id="ghichu" cols="10" rows="5" placeholder="Ghi chú"></textarea>
										</p>
										<p class="form-row">
											<input type="submit" class="button" name="register" value="Gửi đi">
										</p>
									</form>
								</div>
							</div>
							<div class="background-overlay"></div>
						</aside>
					</div>
				</div>
			</div>
		</div>
		<div class="navigation-menu">
			<div class="container">
				<div class="menu-mobile-effect navbar-toggle button-collapse" data-activates="mobile-demo">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</div>
				<div class="width-logo sm-logo">
					<a href="index.html" title="Travel" rel="home">
						<img src="images/logo_sticky_2.png" alt="Logo" width="474" height="130" class="logo_transparent_static">
						<img src="images/logo_sticky_2.png" alt="Sticky logo" width="474" height="130" class="logo_sticky">
					</a>
				</div>
				<nav class="width-navigation">
					<ul class="nav navbar-nav menu-main-menu side-nav" id="mobile-demo">
						<li class="<?php echo $l == 'index.html' ? 'current-menu-ancestor' : ''; ?>">
							<a href="index.html">Trang chủ</a>
						</li>
						<?php
						if($danhmuctour_list){
							foreach($danhmuctour_list as $t){
								echo '<li class="'.($l=='tours.html' && $id==$t['_id'] ? 'current-menu-ancestor' :'').'"><a href="tours.html?id='.$t['_id'].'">'.$t['ten'].'</a>';
								$child_list = $danhmuctour->get_list_condition(array('id_parent' => new MongoId($t['_id'])));
								if($child_list && $child_list->count() > 0){
									echo '<ul class="sub-menu">';
									foreach($child_list as $child){
										echo '<li><a href="tours.html?id='.$child['_id'].'">'.$child['ten'].'</a></li>';
									}
									echo '</ul>';
								}

								echo '</li>';
							}
						}
						?>
						<li class="<?php echo $l == 'tuvanvisa.html' ? 'current-menu-ancestor' : ''; ?>"><a href="tienich.html">Tiện ích</a>
						<?php
						$danhmuctintuc_list = $danhmuctintuc->get_all_list();
						if($danhmuctintuc_list && $danhmuctintuc_list->count() > 0){
							echo '<ul class="sub-menu">';
							foreach($danhmuctintuc_list as $dmtt){
								echo '<li><a href="tintuc.html?id='.$dmtt['_id'].'">'.$dmtt['ten'].'</a></li>';
							}
							echo '</ul>';
						}
						?>
						</li>
						<li class="<?php echo $l == 'lienhe.html' ? 'current-menu-ancestor' : ''; ?>"><a href="lienhe.html">Liên hệ</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
