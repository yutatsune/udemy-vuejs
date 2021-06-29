<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click='increment'>+1</button>
    <!-- templateはルート要素を一つにしなければならない（div要素などで囲む） -->
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 10
      /* propsは型や初期値などを設定することができる */
    }
  },
  /* 親から子にデータを渡すにはpropsを使う */
  /* JSの属性値はキャメルケースを使う */
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      this.$emit("my-click", this.totalNumber + 1);
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