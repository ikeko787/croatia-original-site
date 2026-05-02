$(function () {
    // --- スライドショー(Slick)の設定 ---
    $(".slick-area").slick({
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        variableWidth: true,
        dots: true,      // これでドットが表示されます
        arrows: false,   // スマホなら矢印は消してドットだけにするのがスッキリします
        infinite: true,
        slidesToShow: 1, // スマホなら1枚、PCなら3枚など適宜
        centerPadding: '0px',
    });

    // --- TOPに戻るボタンの設定 ---
    let pagetop = $(".to-top");
    pagetop.hide(); // 最初は隠しておく

    $(window).scroll(function () {
        // 700px以上スクロールしたらフワッと出す
        if ($(this).scrollTop() > 700) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });

    pagetop.click(function () {
        // 0.5秒かけてスルスル〜っと一番上へ
        $("body,html").animate({ scrollTop: 0 }, 500);
        return false;
    });

    // // ナビメニューの「ぬるっと」スクロール
    // $('a[href^="#"]').click(function () {
    //     // クリックされたリンクの先のIDを取得
    //     let href = $(this).attr("href");
    //     let target = $(href == "#" || href == "" ? 'html' : href);
    //     // その場所まで0.5秒かけて移動
    //     let position = target.offset().top;
    //     $("html, body").animate({ scrollTop: position }, 500, "swing");
    //     return false;
    // });

    $(".hamburger").on("click", function () {
        // header全体に「open」クラスを付け外しする
        // これで、CSS側で .header.open .header-nav { ... } みたいに制御できるで！
        $(".header").toggleClass("open");
    });

    // もしマスク（背景）をクリックした時もメニューを閉じたいなら、これも追加！
    $(".mask").on("click", function () {
        $(".header").removeClass("open");
    });

    // マスク（黒背景）または メニュー内のリンク を押した時：メニューを閉じる
    $("#mask, #navi a").on("click", function () {
        $(".header-container").removeClass("open");
    });

    //アコーディオンメニュー

    $(document).on("click", ".js-ac", function () {
        $(this).toggleClass("open").next().slideToggle(280);
    });
});

