<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :number="number"></LikeNumber>
    <LikeNumber :number="number"></LikeNumber>
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
