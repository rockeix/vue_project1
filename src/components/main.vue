<template>
    <div>
        <div id="mainslider" >
          <splide :options="options">
            <splide-slide>
              <!-- <img class="slider-image" src="../img/KakaoTalk_Photo_2023-12-27-17-10-49 001.jpeg" alt="main1" /> -->
            </splide-slide>
            <splide-slide>
              <!-- <img class="slider-image" src="../img/KakaoTalk_Photo_2023-12-27-17-10-49 002.jpeg" alt="main2" /> -->
            </splide-slide>
          </splide>
      </div>
      <div class="con">
        <div class="content cate-list">
            <h2 class="home_title">유산균 BEST</h2>
            <div class="s1" style="height: 230px;">
            <!-- <img src="../img/KakaoTalk_Photo_2023-12-27-17-10-49 001.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;">
            <img src="../img/KakaoTalk_Photo_2023-12-27-17-10-49 001.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;">
            <img src="../img/KakaoTalk_Photo_2023-12-27-17-10-49 001.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;">
            <img src="../img/KakaoTalk_Photo_2023-12-27-17-10-49 001.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;"> -->
            <!-- <img src="../uploads/5-0.jpg" style=" width: 230px; height: 230px; padding-right: 30px;"> -->
            </div>
        </div>

        
        <div class="content cate-list">
            <h2 class="home_title">비타민 BEST</h2>
            <div class="s1" style="height: 230px;">
            <!-- <img src="../img/KakaoTalk_Photo_2023-12-27-17-10-49 001.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;">
            <img src="../img/KakaoTalk_Photo_2023-12-27-17-10-49 001.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;">
            <img src="../img/KakaoTalk_Photo_2023-12-27-17-10-49 001.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;">
            <img src="../img/KakaoTalk_Photo_2023-12-27-17-10-49 001.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;"> -->
            <!-- <img src="../uploads/5-0.jpg" style=" width: 230px; height: 230px; padding-right: 30px;"> -->
            </div>
        </div>
      </div>
    </div>
</template>

 <script>
export default {
  data() {
    return {
      options: {
        type: 'fade',
        rewind: false,
        perPage: 1,
        autoplay: true,
        interval: 3000,
        pauseOnHover: false,
        arrows: false,
        dots: true,
        animatedDots: false,
        transition: 'fade',
        speed: 800
      }
    }
  }
}
</script>
<style>
 @charset "UTF-8";
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");
* {
  box-sizing: border-box;
}

:root {
  --app-container: #f7f8fa;
  /* --app-container: #f3f6fd; */
  --main-color: #1f1c2e;
  --secondary-color: #4A4A4A;
  --link-color: #1f1c2e;
  --link-color-hover: #c3cff4;
  --link-color-active: #fff;
  --link-color-active-bg: #1f1c2e;
  --projects-section: #fff;
  --message-box-hover: #fafcff;
  --message-box-border: #e9ebf0;
  --more-list-bg: #fff;
  --more-list-bg-hover: #f6fbff;
  --more-list-shadow: rgba(209, 209, 209, 0.4);
  --button-bg: #1f1c24;
  --search-area-bg: #fff;
  --star: #1ff1c2e;
  --message-btn: #fff;
}

html, body {
  width: 100%;
  height: 100vh;
  margin: 0;
}

body {
  font-family: "DM Sans", sans-serif;
  overflow: scroll;
  display: flex;
  justify-content: center;
  background-color: var(--app-container);
}

body::-webkit-scrollbar {
  width: 12px;
  height: 8px;
}

body::-webkit-scrollbar-track {
  background-color: rgb(218, 218, 218);
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #9c0410;
}

body::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}

button, a {
  cursor: pointer;
}
footer{
  width: 100%;
}
.form{
  margin: 0;
  padding: 0;
  left: 0;   
  bottom: 0;
  list-style: none;
  text-decoration: none;
  /* border: solid 1px red; */
}
.f_add{
  position: relative;
  height: auto;
  width: 100%;
  left: 0;       
  bottom: 0; 
  padding: 10px;
  background: #f2f2f2;
}

p{
  margin-left: 20px;
  line-height: 24px;
  font-size: 12px;
  color: rgb(173, 173, 173);
}

.app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--app-container);
  transition: 0.2s;
  max-width: 1800px;
}
.app-container button, .app-container input, .app-container optgroup, .app-container select, .app-container textarea {
  font-family: "DM Sans", sans-serif;
}

.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 24px;
    position: relative;
  }
  .app-header-left, .app-header-right {
    display: flex;
    align-items: center;
  }
  .app-header-left {
    flex-grow: 1;
  }
  .app-header-right button {
    margin-left: 10px;
  }

  .app-middle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 300px 24px 300px;
    position: relative;
  }

  .app-middle button {
    width: 100px;
    height: 35px;
    border: 0;
    border-radius: 5px;
    background-color: #9c0410;
    color: #fff;
    font-family: ONE-Mobile-Regular;
    font-size: 15px;
  }

  .con {
  
    justify-content: space-between;
    align-items: center;
    flex: 2;
    background-color: var(--projects-section);
    border-radius: 32px;
    padding: 50px;
    margin: 50px;
    display: flex;
    flex-direction: column;
  }
  
  .con-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 32px;
  }
  
  .con-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    color: var(--main-color);
  }
  .con-header p {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    opacity: 0.9;
    margin: 0;
    color: var(--main-color);
  }
  .con-header .time {
    font-size: 20px;
  }
  .app-name {
  /* color: var(--main-color); */
  color: #9c0410;
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  margin: 0 32px;
}

.slider-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .slider-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
  }

  img {
      width: auto;
      height: 200px;
      /* object-fit: contain; 이미지 비율 */
  }
}

@font-face {
  font-family: 'ONE-Mobile-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.cate-list {
  font-family: ONE-Mobile-Regular;
}

.goods-nm {
  font-size: 14px;
  color: black;
  font-weight: bold;
}

.goods-nm:hover {
  color: #FFAF7D;
  cursor: pointer;
}

.goods-price {
  font-size: 13px;
}

.cate-header {
  display: flex;
  justify-content: space-between;
}

.cate-header .h6 {
  font-size: 14px;
  margin: auto;
}

.crown {
  padding-right: 5px;
}

/* 이미지 확대 */
.imgSpace {
  max-width: 230px;
  max-height: 230px;
  min-width: 100px;
  min-height: 100px;
  overflow: hidden;
  padding: auto;
  border-radius: 15%;
  background-color: #eeeeee;
}

a img {
  margin: auto;
  width: 100%;
  height: 100%;

}

a:hover img {
  transform: scale(1.12);
  transition: all 0.1s linear;
}

a:not(:hover) img {
  transform: scale(1.0);
  transition: all 0.1s linear;
}

/* ----------------------------- */

.card-text {
  margin: 3px;
  margin-top: 5px;
}

.card-text.align-left {
  text-align: left;
}

.card {
  flex-direction: column;
  flex-wrap: wrap;
}

.s1 {
  display: flex;
  margin-bottom: 150px;
}

.content {
  max-width: 1040px;
  width: 80%;
  margin: auto;
  padding-top: 30px;
  overflow:auto;
  
}

.content::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.content::-webkit-scrollbar-track {
  background-color: rgb(218, 218, 218);
  border-radius: 10px;
}

.content::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #9c0410;
}

.content::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}

.home_title {
  margin: 40px 0px 20px 0px;
  text-align: center;
}

@media screen and (max-width: 768px) {

  img {
      width: auto;
      height: 200px;
      /* object-fit: contain; 이미지 비율 */
  }
}

.menu-btn {
  color: var(--main-color);
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-wrapper {
  border-radius: 20px;
  background-color: var(--search-area-bg);
  padding-right: 12px;
  margin: 0 auto;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 480px;
  color: var(--light-font);
  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);
  overflow: hidden;
}

.search-input {
  border: none;
  flex: 1;
  outline: none;
  height: 100%;
  padding: 0 20px;
  font-size: 16px;
  background-color: var(--search-area-bg);
  color: var(--main-color);
}
.search-input:placeholder {
  color: var(--main-color);
  opacity: 0.6;
}

.join-btn {
  color: var(--main-color);
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-btn {
  color: var(--main-color);
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile_btn {
  color: var(--main-color);
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>