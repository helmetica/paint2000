<template>
    <div v-if="items.length" class="menu-dropdown">
        <div class="menu-dropdown-item"
            v-for="item in items"
            :key="item.id"
            @click="onItemClick(item.id)">
                {{ item.title }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: Array
    },
    methods: {
        onItemClick(id) {
            console.log(id);
            this.$emit('itemClick', id);
        }
    }
}
</script>

<style lang="less">
.menu-dropdown {
    position: absolute;
    background: #c0c0c0;
    width: 200px;
    &-item {
        cursor: pointer;
    }
}
</style>
