<?php
require_once('header.php');
$id = isset($_GET['id']) ? $_GET['id'] : '';
$tuvanvisa = new TinTuc();$danhmuctintuc = new DanhMucTinTuc();
//$tuvanvisa_list = $tuvanvis->get_all_list();
$tours = new Tours();$tour_stick = $tours->get_tour_stick_limit(5);
$tuvanvisa = new TinTuc(); $banner = new Banner(); $b = $banner->get_one();

$query = array('id_danhmuctintuc' => $id);
$tuvanvisa_list = $tuvanvisa->get_list_condition($query);
$danhmuctintuc->id = $id; $dmtt = $danhmuctintuc->get_one();
$tour_list = $tours->get_list_limit(5);
?>
<div class="site wrapper-content">
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
	<?php if($tuvanvisa_list): ?>
	<section class="content-area">
		<div class="container">
			<div class="row">
				<div class="site-main col-md-9 col-sm-12 align-left">
					<div class="wrapper-blog-content">
					<?php
					foreach($tuvanvisa_list as $tv){
						if(isset($tv['hinhanh'][0]['aliasname']) && $tv['hinhanh'][0]['aliasname']){
								$file = $target_images . $tv['hinhanh'][0]['aliasname'];
								$thumb = $target_images . '370x260/' . $tv['hinhanh'][0]['aliasname'];
								if(!file_exists($thumb)){
									resize_image($file , null, 370, 260, false , $thumb , false , false ,100 );
								}
							} else {
								$thumb = 'images/blog/86H.jpg';
							}
						echo '<article class="type-post">
							<div class="img_post"><a href="chitiettintuc.html?id='.$tv['_id'].'">
								<img width="370" height="260" src="'.$thumb.'" class="wp-post-image" alt=""></a>
							</div>
							<div class="entry-content content-thumbnail">
								<header class="entry-header">
									<h2 class="entry-title">
										<a href="chitiettintuc.html?id='.$tv['_id'].'" rel="bookmark">'.$tv['tieude'].'</a>
									</h2>
									<div class="entry-meta">
										<span class="posted-on">Ngày cập nhật:
											<time class="entry-date published">'.date("d/m/Y", $tv['date_post']->sec).'</time>
										</span>
									</div>
								</header>
								<div class="entry-desc">
									'.$tv['mota'];
								if($users->isLoggedIn() && $users->is_admin()):
									echo '<br /><a href="admin/themtintuc.html?id='.$tv['_id'].'&act=edit&url='.$_SERVER['REQUEST_URI'].'" class="btn btn-success">Edit</a>';
								endif;
								echo '</div>
							</div>
						</article>';
					}
					?>
					</div>
				</div>
				<div class="widget-area align-left col-md-3 col-sm-12">
					<aside class="widget widget_travel_tour" style="margin-top: -20px;">
					<h2 style="padding-bottom:10px;border-bottom:2px solid #ccc;">
						Tour nổi bật
						<span style="float: right;">
							<a href="tour-noi-bat.html" class="btn btn-more"><i class="fa fa-send"></i> Xem tất cả</a>
						</span>
					</h2>
						<?php if($tour_stick): ?>
						<div class="wrapper-special-tours">
						<?php
						foreach($tour_stick as $dd){
							if(isset($dd['hinhanh'][0]['aliasname']) && $dd['hinhanh'][0]['aliasname']){
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
											Giá: <b>'.$dd['giatour'].'</b>
										</a>
									</div>
								</div>';
							}
						?>
						</div>
					<?php endif; ?>
					</aside>
					<?php if(isset($b['video']) && $b['video']) : ?>
					<div class="search_tour">
						<h3 class="form-block_title">Video giới thiệu</h3>
						<iframe width="100%" height="auto" src="<?php echo $b['video']; ?>" frameborder="0" allowfullscreen></iframe>
					</div>
					<?php endif; ?>
					<aside class="widget widget_travel_tour">
					<h2 style="padding-bottom:10px;border-bottom:2px solid #ccc;">
						Tour mới nhất
						<span style="float: right;">
							<a href="tour-noi-bat.html" class="btn btn-more"><i class="fa fa-send"></i> Xem tất cả</a>
						</span>
					</h2>
						<?php if($tour_list): ?>
						<div class="wrapper-special-tours">
						<?php
						foreach($tour_list as $dd){
							if(isset($dd['hinhanh'][0]['aliasname']) && $dd['hinhanh'][0]['aliasname']){
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
											Giá: <b>'.$dd['giatour'].'</b>
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