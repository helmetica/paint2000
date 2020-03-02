<template>
  <div class="toolbox">
    <div class="toolbox-tools">
      <div
        v-for="tool in tools"
        :key="tool.name"
        :class="[ 'toolbox-tools-item', tool.icon, (selectedTool.name === tool.name) ? 'active' : '']"
        :title="tool.title"
        @click="onToolSelected(tool)"
      >
      </div>
    </div>
    <div class="toolbox-options">
      <div v-if="selectedTool.name === 'brush'">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Tools from '../Tools.js'

export default {
    props: {
      value: {
          type: Object,
          default: () => new Tools.Pencil()
      },
    },
    data() {
        return {
            tools: [
                new Tools.FreeSelect(),
                new Tools.Select(),
                new Tools.Eraser(),
                new Tools.Fill(),
                new Tools.Pick(),
                new Tools.Magnifier(),
                new Tools.Pencil(),
                new Tools.Brush(),
                new Tools.Airbrush(),
                new Tools.Text(),
                new Tools.Line(),
                new Tools.Curve(),
                new Tools.Rect(),
                new Tools.Polygon(),
                new Tools.Ellipse(),
                new Tools.RoundedRect()
            ],
            selectedTool: this.value
        }
    },
    methods: {
        onToolSelected(selectedTool) {
            this.$emit('toolChanged', selectedTool);
        }
    },
    created() {
        this.selectedTool = new Tools.Pencil();
    },
    mounted() {
        this.$emit('input');
    }
}
</script>

<style lang="less">
.toolbox {
    &-tools {
        display: flex;
        flex-flow: wrap;
        &-item {
            width: 20px;
            height: 20px;
            border-top: 1.5px solid white;
            border-left: 1.5px solid white;
            border-bottom: 1.5px solid black;
            border-right: 1.5px solid black;
            cursor: pointer;
            &.active {
                border: 1px inset white;
            }
        }
    }
    &-options {
        height: 50px;
        border: 2px inset;
    }
    .free-select {
        background: no-repeat center url(/src/assets/tools/freeselect.png);
    }
    .select {
        background: no-repeat center url(/src/assets/tools/select.png);
    }
    .eraser {
        background: no-repeat center url(/src/assets/tools/eraser.png);
    }
    .magnifier {
        background: no-repeat center url(/src/assets/tools/zoom.png);
    }
    .pick {
        background: no-repeat center url(/src/assets/tools/pick.png);
    }
    .fill {
        background: no-repeat center url(/src/assets/tools/fill.png);
    }
    .pencil {
        background: no-repeat center url(/src/assets/tools/pen.png);
    }
    .airbrush {
        background: no-repeat center url(/src/assets/tools/airbrush.png);
    }
    .brush {
        background: no-repeat center url(/src/assets/tools/brush.png);
    }
    .text {
        background: no-repeat center url(/src/assets/tools/text.png);
    }
    .line {
        background: no-repeat center url(/src/assets/tools/line.png);
    }
    .curve {
        background: no-repeat center url(/src/assets/tools/curve.png);
    }
    .rect {
        background: no-repeat center url(/src/assets/tools/rect.png);
    }
    .polygon {
        background: no-repeat center url(/src/assets/tools/polygon.png);
    }
    .rounded-rect {
        background: no-repeat center url(/src/assets/tools/rounded.png);
    }
    .ellipse {
        background: no-repeat center url(/src/assets/tools/ellipsis.png);
    }
}
</style>
