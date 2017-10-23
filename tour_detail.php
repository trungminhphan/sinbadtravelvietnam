<?php
require_once('header.php');
$id = isset($_GET['id']) ? $_GET['id'] : '';
$book = isset($_GET['book']) ? $_GET['book'] : '';
$tours = new Tours();$tours->id = $id; $t = $tours->get_one();
$danhmuctour = new DanhMucTour();$lichkhoihanh = new LichKhoiHanh();
$tour_stick = $tours->get_tour_stick_limit(5);
$id_danhmuctour = $t['id_danhmuctour'];
$relates = $tours->get_relates_tour($id_danhmuctour);
$banner = new Banner(); $b = $banner->get_one();
if(isset($b['background']) && $b['background']){
	$background = $target_background . $b['background'][0]['aliasname'];
} else { $background = ''; }
?>
<script type="text/javascript" src="assets/js/html5.messages.js"></script>
<div class="site wrapper-content" <?php echo $background ? 'style="background: url('.$background.');background-size:cover;"' : ''; ?>>
	<?php if($b) : ?>
	<div class="home-content" role="main">
		<div class="top_site_main"></div>
		<div id="home-page-slider-image" class="carousel slide" data-ride="carousel">
			<!-- Wrapper for slides -->
			<div class="carousel-inner" role="listbox">
			<?php foreach($b['banner'] as $k => $v){
				$file = $target_banner .  $v['aliasname'];
				$thumb = $target_banner . 'thumb/' .  $v['aliasname'];
				if(!file_exists($thumb)){
					resize_image($file , null, 1920, 500, false , $thumb , false , false ,100 );
				}
				echo '<div class="item '.($k==0 ? 'active' :'').'">
					<img src="'.$thumb.'" alt="'.$v['mota'].'">
					<div class="carousel-caption content-slider">
						<div class="container">
						'.($v['mota'] ? '<h2>'.$v['mota'].'</h2>' : '').'
						'. ($v['link'] ? '<p><a href="'.$v['link'].'" class="btn btn-slider"> Xem chi tiết</a></p>' : '').'
						</div>
					</div>
				</div>';
				} ?>
			</div>
			<!-- Controls -->
			<a class="carousel-control-left" href="#home-page-slider-image" data-slide="prev">
				<i class="lnr lnr-chevron-left"></i>
			</a>
			<a class="carousel-control-right" href="#home-page-slider-image" data-slide="next">
				<i class="lnr lnr-chevron-right"></i>
			</a>
		</div>
	</div>
	<?php endif; ?>
	<section class="content-area single-woo-tour">
		<div class="container">
			<div class="tb_single_tour product">
				<div class="top_content_single row">
					<div class="images images_single_left">
					<?php if($book && $book == 'ok'): ?>
						<div class="alert alert-danger" role="alert">
							<p><b>Quí khách đã đặt Tour thành công!</b></p>
							<p>
								Cám ơn quí khách đã đặt Tour trực tuyến, chúng tôi sẽ liên hệ với quí khách.
							</p>
						</div>
					<?php endif; ?>
						<div class="title-single">
							<div class="title">
								<h1><?php echo $t['tieude']; ?></h1>
							</div>
						</div>
						<div class="tour_after_title" style="text-align:justify;">
							<?php if($users->isLoggedIn() && $users->is_admin()): ?>
								<div style="clear:both; text-align:right;">
									<a href="admin/themtours.html?id=<?php echo $t['_id']; ?>&act=edit&url=<?php echo $_SERVER['REQUEST_URI']; ?>" class="btn btn-success">Edit</a>
								</div>
							<?php endif; ?>
							<?php echo $t['mota']; ?>
							<p style="margin-top:20px;">
								<?php if(isset($t['giagiamtour']) && $t['giagiamtour']) : ?>
									<b>Giá Tour:</b> <span style="color:#ff0000;font-size:18px;font-weight:bold;"><?php echo $t['giagiamtour']; ?></span>&nbsp;&nbsp;&nbsp;<span><strike><?php echo $t['giatour']; ?></strike></span>
								<?php else: ?>
									<b>Giá Tour:</b> <span style="color:#ff0000;font-size:18px;font-weight:bold;"><?php echo $t['giatour']; ?></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<?php endif; ?>
								<?php
								$ngaykhoihanh = ''; $ngayketthuc='';
								$lich = $lichkhoihanh->get_one_condition(array('id_tours' => strval($t['_id'])));
								if($lich['ngaykhoihanh'] && is_array($lich['ngaykhoihanh'])){
									foreach($lich['ngaykhoihanh'] as $key => $value){
										if(date("Y-m-d", $value->sec) >= date("Y-m-d")){
											$ngaykhoihanh = date("d/m/Y", $value->sec);
											$ngayketthuc = date("d/m/Y", $lich['ngayketthuc'][$key]->sec);
											break;
										}
									}
								} 
								?>
							</p>
							<p style="margin-top:20px;">
								<?php if($ngaykhoihanh == '' || $ $ngayketthuc ==''):?>
									<b>Ngày khởi hành:</b> <span style="color:#652f8f;font-size:18px;font-weight: bold;">Đang cập nhật</span>
								<?php else: ?>
								<b>Ngày khởi hành:</b> <span style="color:#652f8f;font-size:18px;font-weight: bold;"><?php echo $ngaykhoihanh; ?></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<b>Ngày kết thúc:</b> <span style="color:#89c53f;font-size:18px;font-weight: bold;"><?php echo $ngayketthuc; ?></span>
								<?php endif;?>
							<p style="margin-top:20px;">
								<b>Loại Tour:</b> <?php echo $danhmuctour->get_tours($t['id_danhmuctour']); ?>
							</p>
						</div>
						<?php if($t['hinhanh']): ?>
						<div id="slider" class="flexslider">
							<ul class="slides">
							<?php
							foreach($t['hinhanh'] as $h){
								echo '<li>
									<a href="'.$target_images.$h['aliasname'].'" class="swipebox" title=""><img width="950" height="700" src="'.$target_images.$h['aliasname'].'" class="attachment-shop_single size-shop_single wp-post-image" alt="" title="" draggable="false"></a>
								</li>';
							}
							?>
							</ul>
						</div>
						<div id="carousel" class="flexslider thumbnail_product">
							<ul class="slides">
							<?php
							foreach($t['hinhanh'] as $h){
								$file = $target_images . $h['aliasname'];
								$thumbs = $target_images . 'thumbs/' . $h['aliasname'];
								if(!file_exists($thumbs)){
									resize_image($file , null, 150 , 100 , false , $thumbs , false , false ,100 );
								}
								echo '<li>
									<img width="150" height="100" src="'.$thumbs.'" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" title="" draggable="false">
								</li>';
							}
							?>
							</ul>
						</div>
						<?php endif; ?>
						<div class="clear"></div>
						<div class="single-tour-tabs wc-tabs-wrapper">
							<ul class="tabs wc-tabs" role="tablist">
								<li class="itinerary_tab_tab active" role="presentation">
									<a href="#tab-itinerary_tab" role="tab" data-toggle="tab">Hành trình</a>
								</li>
								<li class="description_tab" role="presentation">
									<a href="#tab-description" role="tab" data-toggle="tab">Chi tiết Tour</a>
								</li>
								<li class="itinerary_tab_tab" role="presentation">
									<a href="#tab-calendar_tab" role="tab" data-toggle="tab">Lịch khởi hành</a>
								</li>
							</ul>
							<div class="tab-content">
								<div role="tabpanel" class="tab-pane single-tour-tabs-panel single-tour-tabs-panel--itinerary_tab panel entry-content wc-tab active" id="tab-itinerary_tab">
									<div class="item_content">
										<?php echo $t['noidung']; ?>
									</div>
								</div>
								<div role="tabpanel" class="tab-pane single-tour-tabs-panel single-tour-tabs-panel--description panel entry-content wc-tab" id="tab-description">
									<h2>Thông tin chi tiết Tours</h2>
									<?php echo $t['giave']; ?>
								</div>

								<div role="tabpanel" class="tab-pane single-tour-tabs-panel single-tour-tabs-panel--itinerary_tab panel entry-content wc-tab" id="tab-calendar_tab">
									<div class="item_content">
										<table>
											<thead>
											<tr>
												<th>STT</th>
												<th>Ngày khởi hành</th>
												<th>Ngày kết thúc</th>
											</tr>
											</thead>
											<tbody>
											<?php
											if(is_array($lich['ngaykhoihanh']) && is_array($lich['ngayketthuc'])){
												$i = 1;
												foreach($lich['ngaykhoihanh'] as $key => $value){
													echo '
														<tr>
															<td align="center">'.$i.'</td>
															<td align="center">'.date("d/m/Y", $value->sec).'</td>
															<td align="center">'.date("d/m/Y", $lich['ngayketthuc'][$key]->sec).'</td>
														</tr>
													';$i++;
												}
											} else {
												echo '
													<tr>
														<td align="center" colspan="3"><b>Đang cập nhật</b></td>
													</tr>
												';
											}
											?>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="summary entry-summary description_single">
						<div class="affix-sidebar">
							<div class="entry-content-tour">
								<p class="price" style="background: #8bc63e;">
									<span class="travel_tour-Price-amount amount">Đặt Tours</span>
								</p>
								<div class="clear"></div>
								<div class="booking">
									<div class="">
										<form id="tourBookingForm" method="POST" action="post.booking.html">
											<input type="hidden" name="id_tour" id="id_tour" value="<?php echo $id; ?>" />
											<div class="">
												<input name="hoten" value="" placeholder="Họ tên" type="text" required oninvalid="InvalidMsg(this);" oninput="InvalidMsg(this);" />
											</div>
											<div class="">
												<input name="email" value="" placeholder="Email" type="email" required oninvalid="InvalidMsg(this);" oninput="InvalidMsg(this);" />
											</div>
											<div class="">
												<input name="dienthoai" value="" placeholder="Điện thoại" type="text" required oninvalid="InvalidMsg(this);" oninput="InvalidMsg(this);" />
											</div>
											<div class="">
												<input type="number" name="sove" value="1" placeholder="Số vé" class="hasDatepicker" required oninvalid="InvalidMsg(this);" oninput="InvalidMsg(this);" />
											</div>
											<div class="">
												<textarea name="ghichu" id="ghichu" cols="10" rows="5" placeholder="Ghi chú"></textarea>
											</div>
											<input class="btn-booking btn" value="Đặt Tour" type="submit" name="submit" id="booking_submit" />
										</form>
									</div>
								</div>
							</div>
							<div class="widget-area align-left col-sm-3">
								<aside class="widget widget_travel_tour">
									<div class="wrapper-special-tours">
										<h2>Tour Liên quan</h2>
										<?php if($relates): ?>
										<div class="wrapper-special-tours" style="margin-bottom:50px;">
										<?php
										foreach($relates as $r){
											if(isset($r['hinhanh'][0]['aliasname']) && $r['hinhanh'][0]['aliasname']){
												$file = $target_images . $r['hinhanh'][0]['aliasname'];
												$thumb = $target_images . '80x60/' . $r['hinhanh'][0]['aliasname'];
												if(!file_exists($thumb)){
													resize_image($file , null, 80, 60, false , $thumb , false , false ,100);
												}
											} else {
												$thumb = 'images/tour/430x305/tour-2.jpg';
											}
											echo '<div class="inner-special-tours">
													<div class="post_title">
														<a href="tour_detail.html?id='.$r['_id'].'" rel="bookmark">
															<img width="80" height="60" src="'.$thumb.'" alt="'.$r['tieude'].'" title="'.$r['tieude'].'">
															'.$r['tieude'].' <br />
															Giá: <b>'.$r['giatour'].'</b>
														</a>
													</div>
												</div>';
											}
										?>
										</div>
									<?php endif; ?>
										<h2>Tour nổi bật
											<span style="float: right;">
												<a href="tour-noi-bat.html" class="btn btn-more"><i class="fa fa-send"></i> Xem tất cả</a>
											</span>
										</h2>
										<?php if($tour_stick): ?>
										<div class="wrapper-special-tours">
										<?php
										foreach($tour_stick as $dd){
											if($dd['hinhanh'][0]['aliasname']){
												$file = $target_images . $dd['hinhanh'][0]['aliasname'];
												$thumb = $target_images . '80x60/' . $dd['hinhanh'][0]['aliasname'];
												if(!file_exists($thumb)){
													resize_image($file , null, 80, 60, false , $thumb , false , false ,100);
												}
											} else {
												$thumb = 'images/tour/430x305/tour-2.jpg';
											}
											echo '<div class="inner-special-tours">
													<div class="post_title">
														<a href="tour_detail.html?id='.$dd['_id'].'" rel="bookmark">
															<img width="80" height="60" src="'.$thumb.'" alt="'.$dd['tieude'].'" title="'.$dd['tieude'].'">
															'.$dd['tieude'].' <br />
															Giá: <b>'.$dd['giatour'].' VNĐ</b>
														</a>
													</div>
												</div>';
											}
										?>
										</div>
									<?php endif; ?>
									</div>
								</aside>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
<?php require_once('footer.php'); ?>
