<template>
    <canvas id="canvas" :class="cursorClass"></canvas>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    tool: {
      type: Object,
      default: null,
    },
    color: {
      type: String,
      default: 'black',
    },
    lineWidth: {
      type: Number,
      default: 0.5,
    },
  },
  data() {
    return {
      context: null,
      isDrawing: false,
    };
  },
  computed: {
    cursorClass() {
      return this.tool && this.tool.name;
    },
  },
  methods: {
    startDrawing(e) {
      this.isDrawing = true;
      this.context.strokeStyle = this.color;
      this.context.lineWidth = this.lineWidth;
      this.context.beginPath();

      this.tool.start(e, canvas, this.context);
    },
    stopDrawing(e) {
      this.tool.finish(e, canvas, this.context);
      this.context.closePath();
      this.isDrawing = false;
    },
    draw(e) {
      if (this.isDrawing === true) {
        this.tool.move(e, canvas, this.context);
      }
    },
    updateCanvas() {
      this.context = canvas.getContext('2d');
      this.context.strokeStyle = this.color;
      this.context.lineWidth = this.lineWidth;

      this.resize();

      // Подключаем требуемые для рисования события
      canvas.onmousedown = this.startDrawing;
      canvas.onmouseup = this.stopDrawing;
      canvas.onmouseout = this.stopDrawing;
      canvas.onmousemove = this.draw;
    },
    resize() {
      const rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    },
    clearCanvas() {
      this.context.clearRect(0, 0, canvas.width, canvas.height);
    },
  },
  mounted() {
    this.updateCanvas();
  },
};
</script>

<style lang="less">
#canvas {
    background: white;

    &.pencil {
        cursor: url(/src/assets/cursor/pencil.cur), auto;
    }
    &.brush {
        cursor: url(/src/assets/cursor/brush.cur), auto;
    }
    &.pick {
        cursor: url(/src/assets/cursor/pick.cur), auto;
    }
    &.fill {
      cursor: url(/src/assets/cursor/fill.cur), auto;
    }
    &.magnifier {
      cursor: url(/src/assets/cursor/zoom.cur), auto;
    }
}
</style>
