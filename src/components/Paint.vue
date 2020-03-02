<template>
  <div class="paint">
    <div class="paint-title">
      <div class="paint-title-icon"></div>
      <div>untitled - Paint</div>
    </div>

    <menu-bar @menuClick="onMenuClick"/>

    <div class="paint-content">
      <div class="paint-leftbar">
        <tool-box v-model="tool"/>
      </div>
      <div class="paint-canvas">
        <canvas-area
          ref="canvas"
          :tool="tool"
          :color="color"
          :lineWidth="lineWidth"
        />
      </div>
    </div>

    <div class="paint-bottompanel">
      <color-box v-model="color"/>
    </div>

    <div class="paint-statusbar"></div>
  </div>
</template>

<script>
import MenuBar from './MenuBar.vue';
import ToolBox from './ToolBox.vue';
import CanvasArea from './CanvasArea.vue';
import ColorBox from './ColorBox.vue';
import * as Tools from '../Tools.js';
import { colors } from '../utils/constants';

export default {
    data() {
        return {
            tool: new Tools.Pencil(),
            color: colors[0],
        }
    },
    components: {
        MenuBar,
        ToolBox,
        CanvasArea,
        ColorBox,
    },
    computed: {
        lineWidth() {
            return this.tool && this.tool.lineWidth || 0.5;
        },
    },
    methods: {
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
    height: 550px;
    width: 900px;
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
