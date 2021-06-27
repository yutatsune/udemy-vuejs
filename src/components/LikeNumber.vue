<template>
  <div>
    <p>いいね({{ totalNumber / 2 }})</p>
    <button @click='increment'>+1</button>
    <!-- templateはルート要素を一つにしなければならない（div要素などで囲む） -->
  </div>
</template>

<script>
export default {
  props: ["totalNumber"],
  /* 親から子にデータを渡すにはpropsを使う */
  /* JSの属性値はキャメルケースを使う */
  methods: {
    increment() {
      this.number += 1;
    }
  }
};
</script>

<style scoped>
/* そのままだと全てのdivタグに適用されてしまうため、scopedをつける */
  div {
    border: 1px solid red;
  }
</style>