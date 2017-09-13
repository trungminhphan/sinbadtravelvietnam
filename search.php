<?php
require_once('header.php');
$tours = new Tours(); $banner = new Banner(); $b = $banner->get_one();
$danhmucdiemden = new DanhMucDiemDen();$danhmuctour = new DanhMucTour();$lichkhoihanh = new LichKhoiHanh();
$tours_list = $tours->get_all_list();
$tour_stick = $tours->get_tour_stick();
$danhmucdiemden_list = $danhmucdiemden->get_all_list();
$danhmuctour_list = $danhmuctour->get_all_list();

$tieude = isset($_GET['tieude']) ? $_GET['tieude'] : '';
$id_danhmuctour = isset($_GET['id_danhmuctour']) ? $_GET['id_danhmuctour'] : '';
$id_danhmucdiemden = isset($_GET['id_danhmucdiemden']) ? $_GET['id_danhmucdiemden'] : '';
$search_ngaykhoihanh = isset($_GET['ngaykhoihanh']) ? $_GET['ngaykhoihanh'] : '';
$query = array();
if($tieude){
	array_push($query, array('tieude' => new MongoRegex('/'.$tieude.'/i')));
}
if($id_danhmuctour){
	array_push($query, array('id_danhmuctour' => $id_danhmuctour));
}
if($id_danhmucdiemden){
	array_push($query, array('id_danhmucdiemden' => $id_danhmucdiemden));
}
/*if($search_ngaykhoihanh){
	$nkh = $ngaykhoihanh ? new MongoDate(convert_date_yyyy_mm_dd($ngaykhoihanh)) : '';
	array_push($query, array('ngaykhoihanh' => $nkh));
}*/
if(count($query) > 0){
$q = array('$and' => array(
	array('hienthi' => 1),
	array('$or' => $query)
));
} else { $q = array();}
//$q = array('$or' => $query);
$tours_list = $tours->get_list_condition($q);
if(isset($b['background']) && $b['background']){
	$background = $target_background . $b['background'][0]['aliasname'];
} else {
	$background = '';
}
?>
<div class="site wrapper-content" <?php echo $background ? 'style="background: url('.$background.');background-size:cover;"' : ''; ?>>
	<div class="top_site_main" style="background-image:url(images/banner/top-heading.jpg);">
		<div class="banner-wrapper container article_heading">
			<h1 class="heading_primary">KẾT QUẢ TÌM KIẾM</h1>
		</div>
	</div>
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
					<!--<div class="navigation paging-navigation" role="navigation">
						<ul class="page-numbers">
							<li><span class="page-numbers current">1</span></li>
							<li><a class="page-numbers" href="#">2</a></li>
							<li><a class="next page-numbers" href="#"><i class="fa fa-long-arrow-right"></i></a>
							</li>
						</ul>
					</div>-->
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
								<input type="text" placeholder="Tên Tour" value="<?php echo isset($tieude) ? $tieude : ''; ?>" name="tieude" id="tieude">
								<select name="id_danhmuctour" id="id_danhmuctour">
									<option value="">Chọn loại Tour</option>
									<?php
				                        if($danhmuctour_list){
				                            $list_tree = iterator_to_array($danhmuctour_list);
				                            showCategories($list_tree, '', '' , array($id_danhmuctour));
				                        }
				                    ?>
								</select>
								<select name="id_danhmucdiemden" id="danhmucdiemden">
									<option value="">Điểm đến</option>
									 <?php
				                        if($danhmucdiemden_list){
				                            $list_tree = iterator_to_array($danhmucdiemden_list);
				                            showCategories($list_tree, '', '' , array($id_danhmucdiemden));
				                        }
				                    ?>
								</select>

								<input type="text" placeholder="Ngày khởi hành" value="<?php echo isset($ngaykhoihanh) ? $ngaykhoihanh : ''; ?>" class="datepicker" name="ngaykhoihanh" id="ngaykhoihanh" data-provide="datepicker" data-date-format="dd/mm/yyyy"/>
								<button type="submit"><i class="fa fa-search"></i> Tìm</button>
							</form>
						</div>
					</div>
					<aside class="widget widget_travel_tour">
						<div class="wrapper-special-tours">
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
						</div>
					</aside>
				</div>
			</div>
		</div>
	</section>
	<?php endif; ?>
</div>
<?php require_once('footer.php'); ?>
