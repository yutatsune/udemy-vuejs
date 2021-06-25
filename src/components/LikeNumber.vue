<template>
  <div>
    <p>いいね({{number}})</p>
    <button @click='increment'>+1</button>
    <!-- templateはルート要素を一つにしなければならない（div要素などで囲む） -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 5
    };
  },
  methods: {
    increment() {
      this.number += 1;
    }
  }
};
</script>
