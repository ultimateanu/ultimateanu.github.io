

var openPhotoSwipe = function () {
    // dynamically figure out image properties
    var parseGalleryElements = function (gallery) {
        var items = [];
        for (var i = 0; i < gallery.children.length; i++) {
            var image = gallery.children[i].children[0];
            var item = {
                src: image.getAttribute('src'),
                w: image.naturalWidth,
                h: image.naturalHeight,
            };
            items.push(item);
        }
        return items;
    };

    var pswpElement = document.querySelectorAll('.pswp')[0];
    var galleryElement = document.getElementById("acro-gallery");
    var items = parseGalleryElements(galleryElement);
    var options = {
        bgOpacity: 1,
        showHideOpacity: true,  // fade in image
        preload: [1, 3],        // preload 1 previous img and 3 next
        shareEl: false,         // disable share button
    };
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

document.getElementById('btn').onclick = openPhotoSwipe;