<?php
require_once('header.php');
$tours = new Tours();$lichkhoihanh = new LichKhoiHanh();
$tour_stick = $tours->get_tour_stick();
$banner = new Banner(); $b = $banner->get_one();
if(isset($b['background']) && $b['background']){
    $background = $target_background . $b['background'][0]['aliasname'];
} else {
    $background = '';
}
<<<<<<< HEAD
$query = array('hienthi' => 1, 'stick' => 1);
=======
$query = array('id_danhmuctour' => $id, 'hienthi' => 1, 'stick' => 1);
>>>>>>> origin/master
$page = isset($_GET['page']) ? $_GET['page'] : 1;
$position = ($page-1) * $items_of_page;
$all_items = $tours->count_all_condition($query);
$page_list = ceil($all_items/$items_of_page);
$tours_list = $tours->get_list_to_condition_position($query, $position, $items_of_page);
?>
<div class="site wrapper-content" <?php echo $background ? 'style="background: url('.$background.');background-size:cover;"' : ''; ?>>
    <div class="top_site_main" style="background-image:url(images/banner/top-heading.jpg);">
        <div class="banner-wrapper container article_heading">
            <h1 class="heading_primary">Tour nổi bật</h1>
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
<<<<<<< HEAD
                            if(isset($tour['hinhanh'][0]['aliasname']) && $tour['hinhanh'][0]['aliasname']){
=======
                            if($tour['hinhanh'][0]['aliasname']){
>>>>>>> origin/master
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
<<<<<<< HEAD
                                    <span class="price"><?php echo $tour['giatour']; ?></span>
=======
                                    <span class="price"><?php echo format_number($tour['giatour']); ?> VNĐ</span>
>>>>>>> origin/master
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
                            <li><a class="next page-numbers" href="tours.html?id=<?php echo $id; ?>&page=<?php echo $page-1; ?>"><i class="fa fa-long-arrow-left"></i></a></li>
                        <?php endif; ?>
                        <?php for($i=1; $i<=$page_list; $i++): ?>
                            <?php if($i == $page): ?>
                                <li><span class="page-numbers current"><?php echo $i; ?></span></li>
                            <?php else: ?>
                            <li><a class="page-numbers" href="tours.html?id=<?php echo $id; ?>&page=<?php echo $i; ?>"><?php echo $i; ?></a></li>
                            <?php endif; ?>
                        <?php endfor; ?>
                        <?php if($page < $page_list): ?>
<<<<<<< HEAD
                            <li><a class="next page-numbers" href="tours.html?id=<?php echo $id; ?>&page=<?php echo $page+1; ?>"><i class="fa fa-long-arrow-right"></i></a></li>
=======
                            <li><a class="next page-numbers" href="tours.html?id=<?php echo $id; ?>&page=<?php echo $page-1; ?>"><i class="fa fa-long-arrow-right"></i></a></li>
>>>>>>> origin/master
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
<<<<<<< HEAD
                    <!--<div class="search_tour">
=======
                    <div class="search_tour">
>>>>>>> origin/master
                        <div class="form-block block-after-indent">
                            <h3 class="form-block_title">Tìm kiếm</h3>
                            <div class="form-block__description">Tìm Tour bạn cần tìm kiếm!</div>
                            <form method="GET" action="search.html">
                                <input type="text" placeholder="Tên Tour" value="" name="tieude" id="tieude">
                                <select name="id_danhmuctour" id="id_danhmuctour">
                                    <option value="">Chọn loại Tour</option>
                                    <?php
<<<<<<< HEAD
                                        /*if($danhmuctour_list){
                                            $list_tree = iterator_to_array($danhmuctour_list);
                                            showCategories($list_tree);
                                        }*/
=======
                                        if($danhmuctour_list){
                                            $list_tree = iterator_to_array($danhmuctour_list);
                                            showCategories($list_tree);
                                        }
>>>>>>> origin/master
                                    ?>
                                </select>
                                <select name="id_danhmucdiemden" id="danhmucdiemden">
                                    <option value="">Điểm đến</option>
                                     <?php
<<<<<<< HEAD
                                        /*if($danhmucdiemden_list){
                                            $list_tree = iterator_to_array($danhmucdiemden_list);
                                            showCategories($list_tree);
                                        }*/
=======
                                        if($danhmucdiemden_list){
                                            $list_tree = iterator_to_array($danhmucdiemden_list);
                                            showCategories($list_tree);
                                        }
>>>>>>> origin/master
                                    ?>
                                </select>

                                <input type="text" placeholder="Ngày khởi hành" value="" class="datepicker" name="ngaykhoihanh" id="ngaykhoihanh" data-provide="datepicker" data-date-format="dd/mm/yyyy"/>
                                <button type="submit"><i class="fa fa-search"></i> Tìm</button>
                            </form>
                        </div>
<<<<<<< HEAD
                    </div>-->
                    <?php
                    $tintuc = new TinTuc();
                    $tintuc_list = $tintuc->get_list_limit(6);
                    ?>
                    <aside class="widget widget_travel_tour">
                        <h2 style="padding-bottom:10px;border-bottom:2px solid #ccc;">
                            Tin tức
                            <span style="float: right;">
                                <a href="tintuc.html?id=59b241ae51e3a540278b4568" class="btn btn-more"><i class="fa fa-send"></i> Xem tất cả</a>
                            </span>
                        </h2>
=======
                    </div>
                    <?php
                    $tintuc = new TinTuc();
                    $tintuc_list = $tintuc->get_list_limit(3);
                    ?>
                    <aside class="widget widget_travel_tour">
                        <h2 style="padding-bottom:10px;border-bottom:2px solid #ccc;">Tin tức</h2>
>>>>>>> origin/master
                        <?php if($tintuc_list): ?>
                        <div class="wrapper-special-tours">
                        <?php
                        foreach($tintuc_list as $tt){
<<<<<<< HEAD
                            if(isset($tt['hinhanh'][0]['aliasname']) && $tt['hinhanh'][0]['aliasname']){
=======
                            if($tt['hinhanh'][0]['aliasname']){
>>>>>>> origin/master
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
