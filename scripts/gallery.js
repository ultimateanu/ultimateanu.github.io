

var openPhotoSwipe = function (selIndex) {
    // TODO: make mscr small version of photos
    // TODO: do not do this for every click
    // dynamically figure out image properties
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

    var getStartPos = function (index) {
        return items[index].offsets;
    }

    var pswpElement = document.querySelectorAll('.pswp')[0];
    var items = parseGalleryElements(document.getElementById("acro-gallery"));
    var options = {
        index: selIndex,
        getThumbBoundsFn: getStartPos,
        bgOpacity: 1,
        preload: [1, 3],        // preload 1 previous img and 3 next
        shareEl: false,         // disable share button
    };
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

var openPS = function (e) {
    openPhotoSwipe(parseInt(e.target.dataset.index));
}

var prepareGallery = function (galleryName) {
    var gallery = document.getElementById(galleryName)

    for (var i = 0; i < gallery.children.length; i++) {
        var item = gallery.children[i].children[0];
        item.dataset.index = i;
        item.onclick = openPS;
    }
}

prepareGallery('acro-gallery');