<template>
    <canvas id="canvas" :class="[tool]"></canvas>
</template>

<script>
export default {
    props: {
        tool: {
            type: String,
            default: 'pencil'
        },
        color: {
            type: String,
            default: 'black'
        },
        lineWidth: {
            type: Number,
            default: 0.5
        }
    },
    data() {
        return {
            context: null,
            isDrawing: false
        }
    },
    methods: {
        startDrawing(e) {
            // Начинаем рисовать
            this.isDrawing = true;
            this.context.strokeStyle = this.color;
            this.context.lineWidth = this.lineWidth;
            // Создаем новый путь (с текущим цветом и толщиной линии)
            this.context.beginPath();
            // Нажатием левой кнопки мыши помещаем "кисть" на холст
            this.context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
        },
        stopDrawing(e) {
            this.context.closePath();
            this.isDrawing = false;
        },
        draw(e) {
            if (this.isDrawing === true)
            {
                // Определяем текущие координаты указателя мыши
                let x = e.pageX - canvas.offsetLeft;
                let y = e.pageY - canvas.offsetTop;

                // Рисуем линию до новой координаты
                this.context.lineTo(x, y);
                this.context.stroke();
            }
        },
        updateCanvas() {
            this.context = canvas.getContext("2d");
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
            let rect = canvas.parentNode.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        },
        clearCanvas() {
            this.context.clearRect(0, 0, canvas.width, canvas.height);
        }
    },
    mounted() {
        this.updateCanvas();
    }
}
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
