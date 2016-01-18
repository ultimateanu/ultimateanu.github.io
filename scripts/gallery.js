
var openPhotoSwipe = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            msrc: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
            src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
            w: 1024,
            h: 683
        },
        {
            msrc: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
            src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
            w: 964,
            h: 1024
        },

    ];
    
    // define options (if needed)
    var options = {
        bgOpacity: .9,
        showHideOpacity: true,  // fade in image
        preload: [1, 3],        // preload 1 previous img and 3 next
        shareEl: false,         // disable share button
    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

document.getElementById('btn').onclick = openPhotoSwipe;