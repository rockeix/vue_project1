<template>
    <div id="setup()"></div>
</template>
<script>

import { ref, onMounted } from 'vue';

export default {
  setup() {
    let body = ref(null);
    let intro = ref(null);
    let btn = ref(null);

    let a = () => new Promise(resolve => {
      intro.value.setAttribute("data-text", "YACJANGSU");
      resolve();
    });

    let b = () => new Promise(resolve => {
      body.value.classList.add("is-first");
      resolve();
    });

    let c = () => new Promise(resolve => {
      setTimeout(() => {
        body.value.classList.add("is-second");
        resolve();
      }, 500);
    });

    let d = () => new Promise(resolve => {
      setTimeout(() => {
        body.value.classList.add("is-third");
        resolve();
      }, 1000);
    });

    let done = () => new Promise(resolve => {
      setTimeout(() => {
        btn.value.style.visibility = "visible";
        btn.value.style.opacity = "1";
        resolve();
      }, 3500);
    });

    let start = () => a().then(b).then(c).then(d).then(done);

    let init = () => {
      onMounted(() => {
        start();
      });
      btn.value.addEventListener("click", () => {
        window.location.href = '/main';
        setTimeout(() => {
          start();
        }, 1500);
      });
    };

    let createButton = () => {
      let button = document.createElement("button");
      let parent = intro.value.parentNode;
      button.innerHTML = "main";
      button.id = "btn";
      parent.insertBefore(button, intro.value.nextSibling);
      btn.value = document.getElementById("btn");
    };

    createButton();
    init();

    return { body, intro, btn };
  }
}
</script>
<style>
@import url(./css/logo.css);
</style>