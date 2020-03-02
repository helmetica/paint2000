<template>
    <div class="menu">
        <div class="menu-item" v-for="menuItem in menuItems" :key="menuItem.id">
            <div @click="onMenuItemClick(menuItem.id)">{{ menuItem.title }}</div>
            <menu-dropdown
              :class="['menu-item-dropdown', activeMenu == menuItem.id ? 'active' : '']"
              :items="menuItem.submenuItems"
              @itemClick="onDropdownMenuItemClick"
            />
        </div>
    </div>
</template>

<script>
import MenuDropdown from './MenuDropdown.vue'

export default {
    components: { MenuDropdown },
    data() {
        return {
            activeMenu: null,
            menuItems: [
                {id: 'file', title: 'File', submenuItems: [
                    {id: 'new', title: 'New'},
                    {id: 'open', title: 'Open...'},
                    {id: 'save', title: 'Save'},
                    {id: 'save_as', title: 'Save As...'},
                    {id: 'print_preview', title: 'Print Preview'},
                    {id: 'page', title: 'Page Setup...'},
                    {id: 'print', title: 'Print...'},
                    {id: 'send', title: 'Send...'},
                    {id: 'wallpaper_tiled', title: 'Set As Wallpaper (Tiled)'},
                    {id: 'wallpaper_center', title: 'Set As Wallpaper (Centered)'},
                    {id: 'recent', title: 'Recent File'},
                    {id: 'exit', title: 'Exit'}
                ]},
                {id: 'edit', title: 'Edit', submenuItems: [
                    {id: 'undo', title: 'Undo'},
                    {id: 'repeat', title: 'Repeat'},
                    {id: 'cut', title: 'Cut'},
                    {id: 'copy', title: 'Copy'},
                    {id: 'paste', title: 'Paste'},
                    {id: 'clear_selection', title: 'Clear Selection'},
                    {id: 'select', title: 'Select All'},
                    {id: 'copy_to', title: 'Copy To...'},
                    {id: 'paste_from', title: 'Paste From...'}
                ]},
                {id: 'view', title: 'View', submenuItems: [
                    {id: 'toolbox', title: 'Tool Box'},
                    {id: 'colorbox', title: 'Color Box'},
                    {id: 'status_bar', title: 'Status Bar'},
                    {id: 'text_toolbar', title: 'Text Toolbar'},
                    {id: 'zoom', title: 'Zoom'},
                    {id: 'bitmap', title: 'View Bitmap'}
                ]},
                {id: 'image', title: 'Image', submenuItems: [
                    {id: 'flip', title: 'Flip/Rotate...'},
                    {id: 'strech', title: 'Strech/Skew...'},
                    {id: 'invert', title: 'Inver Colors'},
                    {id: 'attr', title: 'Attributes...'},
                    {id: 'clear', title: 'Clear Image'},
                    {id: 'draw', title: 'Draw Opaque'}
                ]},
                {id: 'options', title: 'Colors', submenuItems: [
                    {id: 'edit_colors', title: 'Edit Colors...'}
                ]},
                {id: 'help', title: 'Help', submenuItems: [
                    {id: 'help_topics', title: 'Help Topics'},
                    {id: 'about', title: 'About Paint'}
                ]}
            ]
        }
    },
    methods: {
        onMenuItemClick(activeMenu) {
            this.activeMenu = this.activeMenu === activeMenu ? null : activeMenu;
        },
        onDropdownMenuItemClick(dropdownMenuId) {
            this.$emit('menuClick', dropdownMenuId);
        }
    }
}
</script>

<style lang="less">
.menu {
    display: flex;
    height: 20px;
    align-items: center;
    &-item {
        cursor: pointer;
        margin-right: 6px;
        &-dropdown {
            display: none;
            &.active {
                display: unset;
            }
        }
    }
}
</style>
