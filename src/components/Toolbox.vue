<template>
    <div class="toolbox">
        <div v-for="tool in tools" :class="['toolbox-tool', tool.icon, selectedTool == tool.id ? 'active' : '']" 
        :key=tool.id @click="onToolSelected(tool.id)" :title="tool.title"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedTool: 'pencil',
            tools: [
                {id: 'free_select', icon: 'free-select', title: 'Free-Form Select'},
                {id: 'select', icon: 'select', title: 'Select'},
                {id: 'eraser', icon: 'eraser', title: 'Eraser/Color Eraser'},
                {id: 'fill', icon: 'fill', title: 'Fill With Color'},
                {id: 'pick', icon: 'pick', title: 'Pick Color'},
                {id: 'magnifier', icon: 'magnifier', title: 'Magnifier'},
                {id: 'pencil', icon: 'pencil', title: 'Pencil'},
                {id: 'brush', icon: 'brush', title: 'Brush'},
                {id: 'airbrush', icon: 'airbrush', title: 'Airbrush'},
                {id: 'text', icon: 'text', title: 'Text'},
                {id: 'line', icon: 'line', title: 'Line'},
                {id: 'curve', icon: 'curve', title: 'Curve'},
                {id: 'rect', icon: 'rect', title: 'Rectangle'},
                {id: 'polygon', icon: 'polygon', title: 'Pilygon'},
                {id: 'ellipse', icon: 'ellipse', title: 'Ellipse'},
                {id: 'rounded_rect', icon: 'rounded-rect', title: 'Rounded Rectangle'}
            ]
        }
    },
    methods: {
        onToolSelected(selectedTool) {
            this.selectedTool = selectedTool;
        }
    }
}
</script>

<style lang="less">
.toolbox {
    display: flex;
    flex-flow: wrap;
    &-tool {
        width: 20px;
        height: 20px;
        background: bda98f;
        border-top: 1.5px solid white;
        border-left: 1.5px solid white;
        border-bottom: 1.5px solid black;
        border-right: 1.5px solid black;

        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        &.active {
            // background: #ffe78b42;
            border: 1px inset white;
        }
    }
    .free-select {
        background-image: url(/src/assets/tools/freeselect.png);
    }
    .select {
        background-image: url(/src/assets/tools/select.png);
    }
    .eraser {
        background-image: url(/src/assets/tools/eraser.png);
    }
    .magnifier {
        background-image: url(/src/assets/tools/zoom.png);
    }
    .pick {
        background-image: url(/src/assets/tools/pick.png);
    }
    .fill {
        background-image: url(/src/assets/tools/fill.png);
    }
    .pencil {
        background-image: url(/src/assets/tools/pen.png);
    }
    .airbrush {
        background-image: url(/src/assets/tools/airbrush.png);
    }
    .brush {
        background-image: url(/src/assets/tools/brush.png);
    }
    .text {
        background-image: url(/src/assets/tools/text.png);
    }
    .line {
        background-image: url(/src/assets/tools/line.png);
    }
    .curve {
        background-image: url(/src/assets/tools/curve.png);
    }
    .rect {
        background-image: url(/src/assets/tools/rect.png);
    }
    .polygon {
        background-image: url(/src/assets/tools/polygon.png);
    }
    .rounded-rect {
        background-image: url(/src/assets/tools/rounded.png);
    }
    .ellipse {
        background-image: url(/src/assets/tools/ellipsis.png);
    }
}
</style>