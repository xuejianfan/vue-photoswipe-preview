<template>
    <!-- Root element of PhotoSwipe. Must have class pswp. -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

        <!-- Background of PhotoSwipe. 
            It's a separate element as animating opacity is faster than rgba(). -->
        <div class="pswp__bg"></div>

        <!-- Slides wrapper with overflow:hidden. -->
        <div class="pswp__scroll-wrap">

            <!-- Container that holds slides. 
                PhotoSwipe keeps only 3 of them in the DOM to save memory.
                Don't modify these 3 pswp__item elements, data is added later on. -->
            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>

            <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
            <div class="pswp__ui pswp__ui--hidden">

                <div class="pswp__top-bar">

                    <!--  Controls are self-explanatory. Order can be changed. -->

                    <div class="pswp__counter"></div>

                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                    <button class="pswp__button pswp__button--share" title="Share"></button>

                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                    <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                    <!-- element will get class pswp__preloader--active when preloader is running -->
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                            <div class="pswp__preloader__cut">
                                <div class="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div class="pswp__share-tooltip"></div>
                </div>

                <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                </button>

                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                </button>

                <div class="pswp__caption">
                    <div class="pswp__caption__center"></div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import PhotoSwipe from "photoswipe/dist/photoswipe";
import PhotoSwipeDefaultUI from "photoswipe/dist/photoswipe-ui-default";

export default {
  name:"vue-photoswipe-preview",
  methods: {
    open(
      index,
      items,
      options = {
        // captionEl: false,
        fullscreenEl: true,
        history: false,
        shareEl: false,
        tapToClose: true
      }
    ) {
        let that=this
      const opts = Object.assign(
        {
          index: index,
          getThumbBoundsFn(index) {
            const thumbnail = document.querySelectorAll(".preview-img-item")[
              index
            ];
            const pageYScroll =
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0;
            const rect = thumbnail.getBoundingClientRect();
            return {
              x: rect.left,
              y: rect.top + pageYScroll,
              w: rect.width
            };
          }
        },
        options
      );

      this.photoswipe = new PhotoSwipe(
        this.$el,
        PhotoSwipeDefaultUI,
        items,
        opts
      );
      this.photoswipe.init();
      this.photoswipe.listen("close", function() {
        that.close();
      });
    },

    close() {
      this.photoswipe.close();
    }
  }
};
</script>
<style  scoped>
.pswp__top-bar{
    padding:10px 20px;
    background:rgba(0,0,0,0.45);
    position: absolute;
    width:100%;
    z-index:99;
}
    .pswp__counter{
        display:inline-block;
        font-size:16px;
        color:#fff;
    }
    .pswp__button--close{
        width:22px;
        height:22px;
        background:url('../assets/icon-close.png') 0 0 no-repeat;
        background-size:100% 100%;
        float:right;  
        background:transparent;
        color:#fff; 
    }

</style>
