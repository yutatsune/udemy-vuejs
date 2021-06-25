<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
    <!-- ./LikeNumber.vueの内容を表示している -->
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
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
