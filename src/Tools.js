'use strict';

class Tool {
    constructor(name) {
        this.name = name;
        this.lineWidth = 0.5;

        this.x = 0;
        this.y = 0;

        this.x1 = 0;
        this.y1 = 0;

        this.x2 = 0;
        this.y2 = 0;
    }
}

export class Pencil extends Tool {
    constructor() {
        super('pencil');
        this.icon = 'pencil';
        this.title = 'Pencil';
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

export class FreeSelect extends Tool {
  constructor() {
    super('free_select');

    this.icon = 'free-select';
    this.title = 'Free-Form Select';
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Select extends Tool {
  constructor(icon, title) {
    super('select');

    this.icon = 'select';
    this.title = 'Select';
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Eraser extends Tool {
  constructor() {
    super('eraser');

    this.icon = 'eraser';
    this.title = 'Eraser/Color Eraser';
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Fill extends Tool {
  constructor(icon, title) {
    super('fill');

    this.icon = 'fill';
    this.title = 'Fill With Color';
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Pick extends Tool {
  constructor() {
    super('pick');

    this.icon = 'pick';
    this.title = 'Pick Color';
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Magnifier extends Tool {
  constructor() {
    super('magnifier');

    this.icon = 'magnifier';
    this.title = 'Magnifier';
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Brush extends Tool {
    constructor() {
        super('brush');

        this.icon = 'brush';
        this.title = 'Brush';
        this.lineWidth = 5;
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

export class Airbrush extends Tool {
  constructor() {
    super('airbrush');

    this.icon = 'airbrush';
    this.title = 'Airbrush';
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Text extends Tool {
  constructor() {
    super('text');

    this.icon = 'text';
    this.title = 'Text';
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Line extends Tool {
  constructor() {
    super('line');

    this.icon = 'line';
    this.title = 'Line';
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Curve extends Tool {
  constructor() {
    super('curve');

    this.icon = 'curve';
    this.title = 'Curve';
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Rect extends Tool {
  constructor() {
    super('rect');

    this.icon = 'rect';
    this.title = 'Rectangle';
    this.lineWidth = 2;
  }

  start(e, canvas, context) {
    this.x = e.pageX - canvas.offsetLeft;
    this.y = e.pageY - canvas.offsetTop;
  }

  move(e, canvas, context) {
    context.clearRect(this.x, this.y, this.x2 - this.x, this.y2 - this.y);

    this.x1 = e.clientX - canvas.offsetLeft;
    this.y1 = e.clientY - canvas.offsetTop;

    context.strokeRect(this.x, this.y, this.x1 - this.x, this.y1 - this.y);

    this.x2 = e.clientX - canvas.offsetLeft;
    this.y2 = e.clientY - canvas.offsetTop;
  }

  finish(e, canvas, context) {
    this.x1 = e.pageX - canvas.offsetLeft;
    this.y1 = e.pageY - canvas.offsetTop;

    context.strokeRect(this.x, this.y, this.x1 - this.x, this.y1 - this.y);
  }
}

export class Polygon extends Tool {
  constructor() {
    super('polygon');

    this.icon = 'polygon';
    this.title = 'Polygon';
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Ellipse extends Tool {
  constructor() {
    super('ellipse');

    this.icon = 'ellipse';
    this.title = 'Ellipse';
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class RoundedRect extends Tool {
  constructor() {
    super('rounded_rect');

    this.icon = 'rounded-rect';
    this.title = 'Rounded Rectangle';
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}
