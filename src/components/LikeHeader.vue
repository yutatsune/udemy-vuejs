<template>
  <div>
    <slot name="title">
      <!-- v-slotの名前をname属性で記述するとそのslotを適用できる(名前付きスロット) -->
<!--       <h2>デフォルトのタイトル</h2>
      slotはフォールバックコンテンツを配置できる -->
    </slot>
    <slot></slot>
    <!-- <slot name="default"></slot>と同じ意味になる -->
    <hr>
    <p>いいねの数</p>
    <slot name="number"></slot>
    <!-- slotによって親コンポーネントのhtmlのテンプレートごと読み込むことができる -->
    <!-- 親と子それぞれに定義されている値にはslotであってもアクセスできない(CSSを除く) -->
  </div>
</template>