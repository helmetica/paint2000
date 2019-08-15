<template>
    <div class="colorbox">
        <div class="colorbox-selector" :style="{ background: selectedColor }"></div>
        <div class="colorbox-colors">
            <div class="colorbox-colors-item" v-for="color in colors" :key="color" @click="onItemClick(color)"
            :style="{ background: color }"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        selectedColor: {
            type: String,
            default: '#000000'
        }
    },
    data() {
        return {
            colors: [
                '#000000', '#808080', '#820000', '#837e00', '#008000', '#008080',
                '#000080', '#800080', '#808040', '#004040', '#0080ff', '#023f83',
                '#8000ff', '#814103', '#ffffff', '#c0c0c0', '#ff0100', '#ffff00',
                '#0f0', '#0ff', '#00f', '#f0f', '#ffff80', '#00ff80', '#80ffff',
                '#8080ff', '#ff0080', '#ff8040'
            ]
        }
    },
    methods: {
        onItemClick(color) {
            // this.selectedColor = color;
            this.$emit('colorChanged', color);
        }
    }
}
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