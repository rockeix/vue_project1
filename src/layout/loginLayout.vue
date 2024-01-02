<template>
<div>
      <Header></Header>
      <router-view></router-view>
</div>
</template>
<script>
import Header from './HeaderALT.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>