'use strict';

class Tool {
    constructor(name) {
      this.name = name;

      this.x = 0;
      this.y = 0;
      this.lineWidth = 0.5;
    }
}

export class Pencil extends Tool {
    constructor() {
      super('pencil');
    }

    start(e, canvas, context) {
        this.x = e.pageX - canvas.offsetLeft;
        this.y = e.pageY - canvas.offsetTop;
        context.moveTo(this.x, this.y);
    }

    move(e, canvas, context) {
        this.x = e.pageX - canvas.offsetLeft;
        this.y = e.pageY - canvas.offsetTop;

        context.lineTo(this.x, this.y);
        context.stroke();
    }

    finish() {

    }
}
