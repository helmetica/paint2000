<template>
    <div class="paint">
        <div class="paint-title">
            <div class="paint-title-icon"></div>
            <div>untitled - Paint</div>
        </div>
        <Menu @menuClick="onMenuClick"/>
        <div class="paint-content">
            <div class="paint-leftbar">
                <Toolbox :selectedTool="tool" @toolChanged="onToolChanged"/>
            </div>
            <div class="paint-canvas">
                <Canvas ref="canvas" :tool="tool" :color="color" :lineWidth="lineWidth" />
            </div>
        </div>
        <div class="paint-bottompanel">
            <ColorBox :selectedColor="color" @colorChanged="onColorChanged" />
        </div>
        <div class="paint-statusbar"></div>
    </div>
</template>

<script>
import Menu from './Menu.vue'
import Toolbox from './Toolbox.vue'
import Canvas from './Canvas.vue'
import ColorBox from './ColorBox.vue'

export default {
    data() {
        return {
            tool: 'pencil',
            color: '#ff0080',
            lineWidth: 0.5
        }
    },
    components: {
        Menu,
        Toolbox,
        Canvas,
        ColorBox
    },
    methods: {
        onToolChanged(newTool) {
            this.tool = newTool;
            switch (newTool) {
                case 'pencil':
                    this.lineWidth = 0.5;
                    break;
                case 'brush':
                    this.lineWidth = 5;
                    break;
                default:
                    break;
            }
        },
        onColorChanged(newColor) {
            this.color = newColor;
        },
        onMenuClick(menuId) {
            console.log('selectedMenu:  ' + menuId);
            switch (menuId) {
                case 'clear':
                    this.$refs.canvas.clearCanvas();
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style lang="less">
.paint {
    display: flex;
    flex-direction: column;
    height: 420px;
    width: 640px;
    padding: 3px;
    background: #c0c0c0;
    border: 2px outset white;

    &-title {
        display: flex;
        color: white;
        background: #000080;
        &-icon {
            background: url(/src/assets/logopng.png) no-repeat;
            width: 16px;
            margin: 0 4px;
            background-size: 16px 16px;
        }
    }

    &-content {
        display: flex;
        flex-grow: 1;
    }

    &-leftbar {
        background: #c0c0c0;
        width: 48px;
        border-top: 1px outset;
        padding-top: 2px;
        border-bottom: 2px outset;
        margin-bottom: 2px;
    }

    &-canvas {
        flex-grow: 1;
    }

    &-bottompanel {
        height: 30px;
        background: gray;
    }

    &-statusbar {
        height: 10px;
    }
}
</style>
