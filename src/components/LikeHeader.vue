<template>
  <div>
    <slot></slot>
    <!-- slotによって親コンポーネントのhtmlのテンプレートごと読み込むことができる -->
    <!-- 親と子それぞれに定義されている値にはslotであってもアクセスできない(CSSを除く) -->
  </div>
</template>