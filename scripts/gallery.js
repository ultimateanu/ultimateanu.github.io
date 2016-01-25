var prepareGallery = function (galleryName, numImages) {
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

    var createElem = function (type, className, innerText) {
        var elem = document.createElement(type);
        elem.className = className;
        if (innerText) {
            var text = document.createTextNode(innerText);
            elem.appendChild(text)
        }
        return elem;
    }

    var createGalleryDOM = function () {
        var container = createElem('div', 'gallery-container');
        var name = createElem('div', 'gallery-name');
        var rot = createElem('div', 'rot', galleryName);
        var content = createElem('div', 'gallery-content');

        var innerContent = document.createElement('div');
        innerContent.className = 'jgallery';
        content.appendChild(innerContent);
        for (var i = 1; i <= numImages; i++) {
            var image = document.createElement('img');
            image.src = '../images/gallery/' + galleryName + '/' + i + '.jpg';

            var d = document.createElement('div');
            d.appendChild(image);
            innerContent.appendChild(d);
        }
        name.appendChild(rot);
        container.appendChild(name);
        container.appendChild(content);
        document.getElementById("gallery").appendChild(container);

        return innerContent;
    }

    var gallery = createGalleryDOM();
    var galleryItems;
    for (var i = 0; i < gallery.children.length; i++) {
        var item = gallery.children[i].children[0];
        item.dataset.index = i;
        item.onclick = openPhotoSwipe;
    }
}

var makeJustifiedGallery = function () {
    var pHeight = 15;
    var minHeight = 150;
    var rowHeight = Math.max(minHeight, Math.floor((pHeight / 100.0) * screen.availHeight));
    $('.jgallery').justifiedGallery({
        rowHeight: rowHeight,
        margins: 3,
        captions: false,
    });
}

function myPageFullyLoaded(e) {
    prepareGallery('acro', 6);
    prepareGallery('korea', 5);
    makeJustifiedGallery();
}
window.addEventListener("load", myPageFullyLoaded, false);