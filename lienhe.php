<?php
require_once('header.php');
$banner = new Banner();$b = $banner->get_one();
$banner = new Banner(); $b = $banner->get_one();
if(isset($b['background']) && $b['background']){
	$background = $target_background . $b['background'][0]['aliasname'];
} else {
	$background = '';
}
?>
<div class="site wrapper-content" <?php echo $background ? 'style="background: url('.$background.');background-size:cover;"' : ''; ?>>
	<div class="top_site_main" style="background-image:url(images/banner/top-heading.jpg);">
		<div class="banner-wrapper container article_heading">
			<h1 class="heading_primary">Liên hệ</h1>
		</div>
	</div>
	<section class="content-area">
		<div class="container">
			<div class="row">
				<div class="site-main col-sm-9 alignleft">
					<div class="video-container">
						<iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d490.61637117830986!2d105.45906439155092!3d10.34740484002016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d10.3474804!2d105.45921919999999!4m3!3m2!1d10.3474427!2d105.45921279999999!5e0!3m2!1sen!2s!4v1505100728702" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
					</div>
					<div class="pages_content padding-top-4x">
						<h4>Sinbad Travel Service Limited Company</h4>
						<div class="contact_infor">
							<ul>
								<li><label><i class="fa fa-map-marker"></i>ĐỊA CHỈ</label>
									<div class="des">06 Hoàng Ngọc Phách, P. Mỹ Thới, Tp. Long Xuyên, tỉnh An Giang</div>
								</li>
								<li><label><i class="fa fa-phone"></i>ĐIỆN THOẠI</label>
									<div class="des">(0296).39.13579 - 0985.899.980</div>
								</li>
								<li><label><i class="fa fa-money"></i>MÃ SỐ THUẾ</label>
									<div class="des">1602048096</div>
								</li>
								<li><label><i class="fa fa-envelope"></i>EMAIL</label>
									<div class="des">sinbadtravelvietnam@gmail.com</div>
								</li>
								<li>
									<label><i class="fa fa-clock-o"></i>GIỜ LÀM VIỆC</label>
									<div class="des">Thứ hai – Thứ sáu 9:00 am – 5:30 pm, Thú bảy 9:00 am – 1:00 pm
										<br>
										Chủ nhật nghỉ
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="wpb_wrapper pages_content">
						<h4>Gởi câu hỏi?</h4>
						<div role="form" class="wpcf7">
							<div class="screen-reader-response"></div>
							<form action="#" method="post" class="wpcf7-form" novalidate="novalidate">
								<div class="form-contact">
									<div class="row-1x">
										<div class="col-sm-6">
												<span class="wpcf7-form-control-wrap your-name">
													<input type="text" name="your-name" value="" size="40" class="wpcf7-form-control" placeholder="Họ tên*">
												</span>
										</div>
										<div class="col-sm-6">
												<span class="wpcf7-form-control-wrap your-email">
													<input type="email" name="your-email" value="" size="40" class="wpcf7-form-control" placeholder="Email*">
												</span>
										</div>
									</div>
									<div class="form-contact-fields">
											<span class="wpcf7-form-control-wrap your-subject">
												<input type="text" name="your-subject" value="" size="40" class="wpcf7-form-control" placeholder="Tiêu đề">
											</span>
									</div>
									<div class="form-contact-fields">
										<span class="wpcf7-form-control-wrap your-message">
											<textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" placeholder="Nội dung"></textarea>
											 </span><br>
										<input type="submit" value="Gởi" class="wpcf7-form-control wpcf7-submit">
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="widget-area col-sm-3 align-left">
				<?php if(isset($b['banner_right'])) : ?>
				<?php foreach($b['banner_right'] as $r) : ?>
					<aside class="widget widget_text">
						<?php echo $r['link'] ? '<a href="'.$r['link'].'">' : ''; ?>
							<img src="<?php echo $target_banner . $r['aliasname']; ?>" alt="<?php echo $r['mota']; ?>" title="<?php echo $r['mota']; ?>">
						<?php echo $r['link'] ? '</a>' : ''; ?>
					</aside>
				<?php endforeach; ?>
				<?php endif; ?>
				</div>
			</div>
		</div>
	</section>
</div>

<?php require_once('footer.php'); ?>
