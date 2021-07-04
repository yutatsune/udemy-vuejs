<template>
  <div>
    <LikeHeader>
      <h2>みなさん</h2>
      <!-- templateタグに囲われていないものはデフォルトのslotに格納される -->
      <template v-slot:title>
        <!-- 違うslotを複数箇所に適用するにはv-slotを使う -->
        <h2>こんにちは</h2>
      </template>
      <h3>はじめまして</h3>
      <p>よろしくお願いします</p>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
    <!-- HTMLの属性値はケバブケースを使う -->
    <!-- propsでデータを渡すには、v-bindで属性を指定する必要がある -->
    <!-- $emitで作るカスタムイベントはケバブケースを使う(JSで使われるタイミングが皆無) -->
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
      /* $emitが発火したタイミングで親が親の値を変更している（子が親を変更できない） */
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