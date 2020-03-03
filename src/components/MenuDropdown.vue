<template>
  <div
    v-if="items.length"
    class="menu-dropdown"
  >
    <div
      v-for="item in items"
      :key="item.id"
      class="menu-dropdown-item"
      @click="onItemClick(item.id)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  methods: {
    onItemClick(id) {
      this.$emit('itemClick', id);
    },
  },
};
</script>

<style lang="less">
.menu-dropdown {
  position: absolute;
  background: #c0c0c0;

  &-item {
    padding: 2px 24px;
    cursor: pointer;
    &:hover {
      background-color: #000080;
    }
  }
}
</style>
