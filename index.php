<?php
require_once('header.php');
$tours = new Tours(); $banner = new Banner(); $b = $banner->get_one();
$danhmucdiemden = new DanhMucDiemDen();$danhmuctour = new DanhMucTour();$lichkhoihanh = new LichKhoiHanh();
$tour_stick = $tours->get_tour_stick();
$danhmucdiemden_list = $danhmucdiemden->get_all_list();
$danhmuctour_list = $danhmuctour->get_all_list();
if(isset($b['background']) && $b['background']){
	$background = $target_background . $b['background'][0]['aliasname'];
} else {
	$background = '';
}

$page = isset($_GET['page']) ? $_GET['page'] : 1;
$position = ($page-1) * $items_of_page;
$all_items = $tours->count_all();
$page_list = ceil($all_items/$items_of_page);
$tours_list = $tours->get_list_to_position($position, $items_of_page);
//$tours_list = $tours->get_all_list_show();
?>
<link href="admin/assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css" rel="stylesheet" />
<link href="admin/assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css" rel="stylesheet" />
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
	<?php
	$ngaykhoihanh = ''; $ngayketthuc = '';
	if($tours_list): ?>
	<section class="content-area">
		<div class="container">
			<div class="row">
				<div class="site-main col-sm-9 alignright">
					<ul class="tours products wrapper-tours-slider">
					<?php
						foreach($tours_list as $tour):
							if($tour['hinhanh'][0]['aliasname']){
								$file = $target_images . $tour['hinhanh'][0]['aliasname'];
								$thumb = $target_images . '430x305/' . $tour['hinhanh'][0]['aliasname'];
								if(!file_exists($thumb)){
									resize_image($file , null, 430, 305, false , $thumb , false , false ,100 );
								}
							} else {
								$thumb = 'images/tour/430x305/tour-2.jpg';
							}
					?>
						<li class="item-tour col-md-4 col-sm-6 product">
							<div class="item_border item-product">
								<div class="post_images">
									<a href="tour_detail.html?id=<?php echo $tour['_id'];?>">
										<span class="price">
										<?php echo nl2br($tour['mota']); ?>
										</span>
										<img width="430" height="305" src="<?php echo $thumb; ?>" alt="<?php echo $tour['tieude']; ?>" title="<?php echo $tour['tieude']; ?>">
									</a>
								</div>
								<div class="wrapper_content">
									<div class="post_title"><h4>
										<a href="tour_detail.html?id=<?php echo $tour['_id'];?>"><?php echo $tour['tieude']; ?></a>
									</h4></div>
									<span class="price"><?php echo format_number($tour['giatour']); ?> VNĐ</span>
								</div>
								<div class="read_more">
									<div class="item_rating">
										<?php if($users->isLoggedIn() && $users->is_admin()): ?>
												<a href="admin/themtours.html?id=<?php echo $tour['_id']; ?>&act=edit&url=<?php echo $_SERVER['REQUEST_URI']; ?>" class="btn btn-success">Edit</a>
											<?php endif; ?>
									</div>
									<a rel="nofollow" href="<?php echo $tour['_id']; ?>" class="button product_type_tour_phys add_to_cart_button register_btn" onclick="return false;">Book now</a>

								</div>
							</div>
						</li>
					<?php endforeach; ?>
					</ul>
					<?php if($page_list > 1): ?>
					<div class="navigation paging-navigation" role="navigation">
						<ul class="page-numbers">
						<?php if($page > 1): ?>
							<li><a class="next page-numbers" href="index.html?page=<?php echo $page-1; ?>"><i class="fa fa-long-arrow-left"></i></a></li>
						<?php endif; ?>
						<?php for($i=1; $i<=$page_list; $i++): ?>
							<?php if($i == $page): ?>
								<li><span class="page-numbers current"><?php echo $i; ?></span></li>
							<?php else: ?>
							<li><a class="page-numbers" href="index.html?page=<?php echo $i; ?>"><?php echo $i; ?></a></li>
							<?php endif; ?>
						<?php endfor; ?>
						<?php if($page < $page_list): ?>
							<li><a class="next page-numbers" href="index.html?page=<?php echo $page-1; ?>"><i class="fa fa-long-arrow-right"></i></a></li>
						<?php endif; ?>
						</ul>
					</div>
					<?php endif; ?>
				</div>
				<div class="widget-area align-left col-sm-3">
					<?php if(isset($b['video']) && $b['video']) : ?>
					<div class="search_tour">
						<h3 class="form-block_title">Video giới thiệu</h3>
						<iframe width="100%" height="auto" src="<?php echo $b['video']; ?>" frameborder="0" allowfullscreen></iframe>
					</div>
					<?php endif; ?>
					<div class="search_tour">
						<div class="form-block block-after-indent">
							<h3 class="form-block_title">Tìm kiếm</h3>
							<div class="form-block__description">Tìm Tour bạn cần tìm kiếm!</div>
							<form method="GET" action="search.html">
								<input type="text" placeholder="Tên Tour" value="" name="tieude" id="tieude">
								<select name="id_danhmuctour" id="id_danhmuctour">
									<option value="">Chọn loại Tour</option>
									<?php
				                        if($danhmuctour_list){
				                            $list_tree = iterator_to_array($danhmuctour_list);
				                            showCategories($list_tree);
				                        }
				                    ?>
								</select>
								<select name="id_danhmucdiemden" id="danhmucdiemden">
									<option value="">Điểm đến</option>
									 <?php
				                        if($danhmucdiemden_list){
				                            $list_tree = iterator_to_array($danhmucdiemden_list);
				                            showCategories($list_tree);
				                        }
				                    ?>
								</select>

								<input type="text" placeholder="Ngày khởi hành" value="" class="datepicker" name="ngaykhoihanh" id="ngaykhoihanh" data-provide="datepicker" data-date-format="dd/mm/yyyy"/>
								<button type="submit"><i class="fa fa-search"></i> Tìm</button>
							</form>
						</div>
					</div>
					<aside class="widget widget_travel_tour">
					<h2 style="padding-bottom:10px;border-bottom:2px solid #ccc;">Tour nổi bật</h2>
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
											Giá: <b>'.format_number($dd['giatour']).' VNĐ</b>
										</a>
									</div>
								</div>';
							}
						?>
						</div>
					<?php endif; ?>
					</aside>
					<?php
					$tintuc = new TinTuc();
					$tintuc_list = $tintuc->get_list_limit(3);
					?>
					<aside class="widget widget_travel_tour">
						<h2 style="padding-bottom:10px;border-bottom:2px solid #ccc;">Tin tức</h2>
						<?php if($tintuc_list): ?>
						<div class="wrapper-special-tours">
						<?php
						foreach($tintuc_list as $tt){
							if($tt['hinhanh'][0]['aliasname']){
								$file = $target_images . $tt['hinhanh'][0]['aliasname'];
								$thumb = $target_images . '80x60/' . $tt['hinhanh'][0]['aliasname'];
								if(!file_exists($thumb)){
									resize_image($file , null, 80, 60, false , $thumb , false , false ,100);
								}
							} else {
								$thumb = 'images/tour/430x305/tour-2.jpg';
							}
							echo '<div class="inner-special-tours">
									<div class="post_title">
										<a href="chitiettuvanvisa.html?id='.$tt['_id'].'" rel="bookmark">
											<img width="80" height="60" src="'.$thumb.'" alt="'.$tt['tieude'].'" title="'.$tt['tieude'].'">
											'.$tt['tieude'].'
										</a>
									</div>
								</div>';
							}
						?>
						</div>
						<?php endif; ?>
					</aside>
				</div>
			</div>
		</div>
	</section>
	<?php endif; ?>
</div>

<?php require_once('footer.php'); ?>