<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
    <!-- HTMLの属性値はケバブケースを使う -->
    <!-- propsでデータを渡すには、v-bindで属性を指定する必要がある -->
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 10
    };
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
};
/* シングルファイルコンポーネントをローカル登録するには、
import コンポーネント名 from "ファイルの場所";
export default {
  components: {
    コンポーネント名
  }
};
で読み込む */
</script>

<style scoped>
/* そのままだと全てのdivタグに適用されてしまうため、scopedをつける */
  div {
    border: 1px solid blue;
  }
</style>