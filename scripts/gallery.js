var prepareGallery = function (galleryName) {
    // TODO: update this as layout changes
    var parseGalleryElements = function (gallery) {
        var items = [];
        for (var i = 0; i < gallery.children.length; i++) {
            var image = gallery.children[i].children[0];
            var rect = image.getBoundingClientRect();
            var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
            var item = {
                msrc: image.getAttribute('src'),
                src: image.getAttribute('src'),
                w: image.naturalWidth,
                h: image.naturalHeight,
                offsets: { x: rect.left, y: rect.top + pageYScroll, w: rect.width },
            };
            items.push(item);
        }
        return items;
    };

    var openPhotoSwipe = function (e) {
        galleryItems = galleryItems || parseGalleryElements(gallery);
        var getStartPos = function (index) {
            return galleryItems[index].offsets;
        }
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var options = {
            index: parseInt(e.target.dataset.index),
            getThumbBoundsFn: getStartPos,
            bgOpacity: .85,
            preload: [1, 3],        // preload 1 previous img and 3 next
            shareEl: false,         // disable share button
        };
        var psGallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, galleryItems, options);
        psGallery.init();
    };

    var gallery = document.getElementById(galleryName)
    var galleryItems;
    for (var i = 0; i < gallery.children.length; i++) {
        var item = gallery.children[i].children[0];
        item.dataset.index = i;
        item.onclick = openPhotoSwipe;
    }
}

function pageFullyLoaded(e) {
    prepareGallery('acro-gallery');
    prepareGallery('travel-gallery');
}

window.addEventListener("load", pageFullyLoaded, false);