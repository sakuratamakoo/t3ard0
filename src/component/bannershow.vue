<script setup>
import { ref } from 'vue';

const images = ref([
  { id: 1, src: 'https://img.konami.com/games/silenthill/2r/s/img/top_main_sp.webp' },
  { id: 2, src: 'https://www.konami.com/games/silenthill/2r/s/img/ss/ss_05.webp' }, 
  { id: 3, src: 'https://www.konami.com/games/silenthill/2r/s/img/ss/ss_04.webp' }, 
  { id: 4, src: 'https://www.konami.com/games/silenthill/2r/s/img/ss/ss_01.webp' }, 
]);
const currentIndex = ref(0);
const fillWidth = ref(0);
const intervalTime = 8000;
let fillRate = 100 / (intervalTime / 100);

const updateFillWidth = () => {
  if (fillWidth.value < 100) {
    fillWidth.value += fillRate;
  } else {
    nextImage();
  }
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
  fillWidth.value = 0;
};

const jumpToImage = (index) => {
  currentIndex.value = index;
  fillWidth.value = 0; // 重置进度条
};

setInterval(updateFillWidth, 100);
</script>
<template>
<section class="banner-carousel">
  <div class="navigation">
    <div class="content navigation-container">
        <a class="nav-item"
           v-for="(image, index) in images"
           :key="image.id"
           @click="jumpToImage(index)"
           :class="{ 'active': currentIndex === index }">
            <div class="lc-1 nvfont">Silent Hill 2</div>
            <div class="lc-1 nvfont">KONAMI</div>
            <div class="progress" :style="{ width: currentIndex === index ? fillWidth + '%' : '0%' }"></div>
        </a>
    </div>
</div>
    <div class="banners-container">
        <div class="banner-item banner-item-release" v-for="(image, index) in images" :key="image.id" :class="{ 'active': currentIndex === index }">
                <!--Background-->
                  <div class="banner-item-background" :style="`--background-url: url(${image.src});` "></div>
                  <div class="banner-info-container">
                  <div class="cover-image">
                    <p class="banner-info mt-none mb-small font-italic ls-medium fs-xxxsmall fs-tablet-landscape-small">
                      <span class="tc-uncaged fw-600">Uncaged</span>
                      - Released March 1, 2024
                          </p>
                        <!--Image-->
                        <img :src="image.src">
                        </div>
                        <div class="banner-title-action">
                        <p class="banner-info mt-none mb-small lc-1 font-italic ls-medium fs-xxxsmall fs-tablet-landscape-small">
                        <span class="tc-uncaged fw-600">Uncaged</span>
                        - Released March 1, 2024
                        </p>
                        <!--Music Name-->
                        <h2 class="h-xlarge text-stroke ls-medium text-uppercase fw-500 mt-none mb-desktop-small mb-xsmall lc-desktop-2">
                        <a href="#" class="banner-title">Silent Hill 2</a>
                        </h2>
                        <!--Artist Name-->
                        <h6 class="h-large ls-medium text-uppercase fw-500 mt-none mb-medium lc-1">
                        <a href="#" class="banner-subtitle">KONAMI</a>
                        </h6>
                        <!--Button-->
                        <div class="buttons-container">
                        <a class="btn btn-medium mb-xxsmall mr-small btn-uncaged" href="#">
                        View Detail
                        </a>
                        <a class="btn2 btn-medium mb-xxsmall" href="#">
                        Try On KONAMI
                        </a>
                        </div>
                    </div>
              </div>
        </div>
    </div>
</section>
</template>

<style scoped>
*{
  font-family: 'teardrop', sans-serif;
  color: white;
}
.banner-carousel {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}
.navigation {
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  z-index: 30;
  padding-left: 5rem;
  padding-right: 5rem;
  text-transform: uppercase;
}
.nvfont{
  font-size: 14px;
}
.content {
  display: flex;
  justify-content: stretch;
}
.nav-item {
  margin: 0 1rem 0 0;
  font-weight: 500;
  flex-grow: 1;
  flex-basis: 0;
  position: relative;
  padding-top: 1.5rem;
  text-decoration: none;
  text-shadow: rgba(0, 0, 0, 0.3) 0 0 5px;
}
.nav-item:before {
  content: " ";
  display: block;
  height: 5px;
  width: 100%;
  border: 1px solid #F1F1F1;
  position: absolute;
  top: 0;
  left: 0;
}
.nav-item.active:after {
  content: " ";
  display: block;
  height: 5px;
  width: 100%;
  border: 1px solid transparent;
  background-color: #F1F1F1;
  position: absolute;
  top: 0;
  left: 0;
  animation: carousel-active-nav-item 7s linear;
}
@keyframes carousel-active-nav-item {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.nav-item:hover {
  color: #F1F1F1;
  cursor: pointer;
}
.nav-item:hover:before {
  background-color: #c9c9c9;
}
.banners-container {
  position: relative;
  height: calc(100% + 10px);
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  margin-bottom: -20px;
  --animation-duration: 500ms;
  --animation-delay: 200ms;
  --cover-animation-delay: 200ms;
  --scale-in-offset: 150px;
}



.banner-item {
  flex-shrink: 0;
  position: absolute; /* 使用绝对定位来重叠轮播项 */
  width: 100%; /* 确保轮播项宽度与轮播容器一致 */
  min-height: 100vh;
  opacity: 0; /* 默认隐藏所有轮播项 */
  visibility: hidden; /* 通过visibility隐藏元素，确保它们不会影响布局 */
  transition: opacity 0.4s ease-in, visibility 0s 0.4s; /* 应用过渡效果 */
  cursor: grab;
  overflow: hidden;
}
.banner-item.active {
  position: relative; /* 活动的轮播项应位于最顶层 */
  opacity: 1;
  visibility: visible; /* 使活动的轮播项可见 */
  transition: opacity 0.4s ease-in; /* 应用过渡效果 */
}
.banner-title{
  color: transparent; 
  -webkit-text-stroke: 1px rgb(255, 255, 255); 
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5490196078);
  font-size: 50px;
  text-transform: uppercase;
}
.banner-subtitle{
  font-size: 40px;
  text-transform: uppercase;
}
.banner-item .banner-title,
.banner-subtitle {
  text-decoration: none;
}

.banner-item-release {
  display: grid;
  place-content: center;
  padding-top: 10vh;
}
.banner-title-action, .cover-image {
  opacity: 0;
  transform: translateX(150px);
  transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
}
.banner-title-action {
  transition-delay: 200ms;
}
.cover-image {
  transition-delay: 200ms;
}
.banner-item-release.active .banner-title-action,.banner-item-release.active .cover-image {
  opacity: 1;
  transform: none;
}


@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.banner-gea-release-container {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 5rem;
  z-index: 20;
  animation: fadeInAnimation ease 0.3s;
}
.banner-title,
.banner-subtitle {
  text-decoration: none;
}
.banner-info-container {
  display: grid;
  grid-template-areas: "image text";
  position: relative;
  left: 0;
  bottom: 0;
}
.banner-info{
  font-size: 14px;
}
.banner-info span{
  color: rgb(160, 160, 160);
}
.banner-carousel .banners-container .banner-item-release .cover-image {
  position: relative;
  grid-area: image;
  display: flex;
  flex-direction: row;
}
.banner-carousel .banners-container .banner-item-release .cover-image .banner-info {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}

.banner-carousel .banners-container .banner-item-release .cover-image:after {
  content: "";
  position: absolute;
  width: 50%;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);
  z-index: 2;
}


.banner-carousel .banners-container .banner-item-release .cover-image img {
  width: 32rem;
  height: 32rem;
  object-fit: cover;
  box-shadow: 0 60px 40px 20px rgba(0, 0, 0, 0.3490196078);
}

.banner-carousel .banners-container .banner-item-release .banner-title-action {
  grid-area: text;
  width: 40rem;
  margin-left: -100px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.banner-carousel .banners-container .banner-item-release .banner-title-action .banner-info {
  display: none;
}


.banner-carousel .banners-container .banner-item-release .banner-title-action .banner-title {
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5490196078);
}
.banner-carousel .banners-container .banner-item-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), #0f0d13 80%), var(--background-url) no-repeat;
  background-position: center center !important;
  background-size: 110%;
  filter:blur(8px);
  -webkit-filter:blur(8px);
}
.banner-carousel .banners-container .banner-item:not(.banner-item-release).active .banner-info-container {
  opacity: 1;
  transform: none;
}
.banner-carousel .banners-container .banner-item:not(.banner-item-release) .banner-info-container {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 5rem;
  z-index: 20;
  transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
  opacity: 0;
  transform: translateX(150px);
  transition-delay: 200ms;
}

#artists-with-description-carousel.rotating-carousel .about-container {
  max-height: 160px;
  overflow: hidden;
  margin: 0;
  padding: 0.8em;
  background: rgba(0, 0, 0, 0.8);
}
.buttons-container{
  height: 50px;
  margin-top: 2rem;
}
.btn{
    transition: 0.2s;
    cursor: pointer;
    color: #fff;
    padding: 1rem 2rem;
    margin-right: 1rem;
    user-select: none;
    width: 250px;
    background-color: rgba(116, 116, 116, 0.548);
    text-transform: uppercase;
}
.btn:hover{
  background-color: white;
  color: #000;
}
.btn2{
  transition: 0.2s;
    cursor: pointer;
    color: #fff;
    padding: 1rem 2rem;
    margin-right: 1rem;
    user-select: none;
    width: 250px;
    text-transform: uppercase;
    border: 1px solid #ddd;
}
.btn2:hover{
  background-color: white;
  color: #000;
}

@media (max-width: 1184px) {
  .banner-carousel .banners-container .banner-item-release .cover-image {
    flex-direction: column-reverse;
  }
  .banner-carousel .banners-container .banner-item-release .cover-image .banner-info {
    transform: none;
    writing-mode: lr;
    text-align: center;
    font-size: 1rem;
    margin-top: 2rem;
  }
  .banner-carousel .banners-container .banner-item-release .cover-image:after {
    display: none;
  }
  .banner-carousel .banners-container .banner-item-release .cover-image img {
    max-width: 32rem;
    aspect-ratio: 1/1;
    width: 60vw;
    height: auto;
    margin: 0 auto;
  }
  .banner-carousel .banners-container .banner-item-release .banner-title-action {
    margin-left: 0;
    align-items: center;
    padding-top: 3rem;
    max-width: 90vw;
    margin-bottom: 40px;
  }
  .banner-carousel .banners-container .banner-item-release .banner-title-action h2 {
    text-align: center;
  }
  .banner-carousel .banners-container .banner-item-release .banner-title-action h6 {
    text-align: center;
    font-size: 1.5rem;
  }
  .banner-carousel .banners-container .banner-item-release .banner-info-container {
    grid-template-areas: "image" "text";
    justify-items: center;
  }
}
@media (min-width: 992px) and (max-width: 1184px) {
  .banner-carousel .banners-container .banner-item-release .cover-image img {
    width: 440px;
  }
}

@media (min-width: 600px) and (max-width: 1184px) {
  .banner-carousel .banners-container .banner-item-release .banner-info-container {
    margin-top: 84px;
  }
}
@media (max-height: 768px) {
  .banner-carousel {
    min-height: 768px;
  }
  .banner-carousel .banners-container .banner-item {
    min-height: 768px;
  }
  .banner-carousel .banners-container {
    min-height: 768px;
  }
  #artists-with-description-carousel.rotating-carousel .about-container {
    display: none;
  }

}
@media (max-width: 600px) {
  .banner-carousel .banners-container .banner-item:not(.banner-item-release) .banner-info-container {
    bottom: 5rem;
  }
  .banner-carousel .navigation .nav-item .lc-1 {
    display: none;
  }
  .banner-carousel .banners-container .banner-item {
    height: 100vh;
  }
  .banner-carousel .banners-container .banner-item  {
    font-size: calc(10px);
    padding: 1rem 1rem;
    height: 10px;
  }
  .banner-carousel .banners-container .banner-item .banner-subtitle {
    font-size: 24px;
  }
  .banner-carousel .banners-container .banner-item-release .cover-image p {
    display: none;
  }
  .banner-carousel .banners-container .banner-item-release .cover-image img {
    width: 260px;
  }
  .banner-carousel .banners-container .banner-item-release .banner-title-action {
    align-items: flex-start;
  }
  .banner-carousel .banners-container .banner-item-release .banner-title-action h2 {
    text-align: left;
  }
  .banner-carousel .banners-container .banner-item-release .banner-title-action h6 {
    text-align: left;
    margin-bottom: 1rem;
  }
  .banner-carousel .banners-container .banner-item-release .banner-title-action .buttons-container {
    display: flex;
    flex-direction: column;
  }
  .banner-carousel .banners-container .banner-item-release .banner-title-action .buttons-container a {
    width: 90vw;
    margin-right: 0;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    padding: 1.5rem 1rem;
    text-align: center;
  }
  .banner-carousel .banners-container .banner-item-release .banner-title-action .banner-info {
    display: block;
    text-align: left;
  }
  .banner-carousel .navigation .nav-item {
    display: none;
  }
  .banner-carousel .navigation .nav-item.active {
    display: block;
  }
  .navigation{
    padding-left: 0;
    padding-right: 0;
  }
}
</style>