<template>
    <div class="colorbox">
        <div
          class="colorbox-selector"
          :style="{ background: this.value }"
        >
        </div>
        <div class="colorbox-colors">
            <div
              v-for="color in colors"
              :key="color"
              :style="{ background: color }"
              class="colorbox-colors-item"
              @click="onItemClick(color)"
            >
            </div>
        </div>
    </div>
</template>

<script>
import { colors } from '../utils/constants';

export default {
  props: {
    value: {
      type: String,
      default: colors[0],
    },
  },
  data() {
    return {
      localValue: this.value,
      colors,
    };
  },
  methods: {
    onItemClick(color) {
      this.$emit('input', color);
    },
  },
};
</script>

<style lang="less">
.colorbox {
    display: flex;
    &-selector {
        width: 30px;
        border: 2px inset white;
    }
    &-colors {
        display: flex;
        flex-flow: wrap;
        width: 252px;
        &-item {
            height: 15px;
            width: 15px;
            border: 1.5px inset white;
        }
    }
}
</style>
