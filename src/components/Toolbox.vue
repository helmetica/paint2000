<template>
  <div class="toolbox">
    <div class="toolbox-tools">
      <div v-for="tool in tools" :class="['toolbox-tools-item', tool.icon, (selectedTool.name === tool.name) ? 'active' : '']"
           :key=tool.name @click="onToolSelected(tool)" :title="tool.title"></div>
    </div>
    <div class="toolbox-options">
      <div v-if="selectedTool.name === 'brush'">
          <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      tools: {
        type: Array,
        default: []
      },
      selectedTool: Object
    },
    data() {
        return {
            // tools: [
            //     {id: 'free_select', icon: 'free-select', title: 'Free-Form Select'},
            //     {id: 'select', icon: 'select', title: 'Select'},
            //     {id: 'eraser', icon: 'eraser', title: 'Eraser/Color Eraser'},
            //     {id: 'fill', icon: 'fill', title: 'Fill With Color'},
            //     {id: 'pick', icon: 'pick', title: 'Pick Color'},
            //     {id: 'magnifier', icon: 'magnifier', title: 'Magnifier'},
            //     {id: 'pencil', icon: 'pencil', title: 'Pencil'},
            //     {id: 'brush', icon: 'brush', title: 'Brush'},
            //     {id: 'airbrush', icon: 'airbrush', title: 'Airbrush'},
            //     {id: 'text', icon: 'text', title: 'Text'},
            //     {id: 'line', icon: 'line', title: 'Line'},
            //     {id: 'curve', icon: 'curve', title: 'Curve'},
            //     {id: 'rect', icon: 'rect', title: 'Rectangle'},
            //     {id: 'polygon', icon: 'polygon', title: 'Pilygon'},
            //     {id: 'ellipse', icon: 'ellipse', title: 'Ellipse'},
            //     {id: 'rounded_rect', icon: 'rounded-rect', title: 'Rounded Rectangle'}
            // ]
        }
    },
    methods: {
        onToolSelected(selectedTool) {
            this.$emit('toolChanged', selectedTool);
        }
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
