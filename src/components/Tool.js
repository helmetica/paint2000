'use strict';

class Tool {
    constructor(name) {
        this.name = name;

        this.x = 0;
        this.y = 0;

        this.x1 = 0;
        this.y1 = 0;

        this.x2 = 0;
        this.y2 = 0;
    }
}

export class Pencil extends Tool {
    constructor(icon, title) {
        super('pencil');
        this.icon = icon;
        this.title = title;
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
  constructor(icon, title) {
    super('free_select');

    this.icon = icon;
    this.title = title;
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

    this.icon = icon;
    this.title = title;
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Eraser extends Tool {
  constructor(icon, title) {
    super('eraser');

    this.icon = icon;
    this.title = title;
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

    this.icon = icon;
    this.title = title;
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Pick extends Tool {
  constructor(icon, title) {
    super('pick');

    this.icon = icon;
    this.title = title;
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Magnifier extends Tool {
  constructor(icon, title) {
    super('magnifier');

    this.icon = icon;
    this.title = title;
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Brush extends Tool {
    constructor(icon, title) {
        super('brush');

        this.icon = icon;
        this.title = title;
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
  constructor(icon, title) {
    super('airbrush');

    this.icon = icon;
    this.title = title;
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Text extends Tool {
  constructor(icon, title) {
    super('text');

    this.icon = icon;
    this.title = title;
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Line extends Tool {
  constructor(icon, title) {
    super('line');

    this.icon = icon;
    this.title = title;
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Curve extends Tool {
  constructor(icon, title) {
    super('curve');

    this.icon = icon;
    this.title = title;
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Rect extends Tool {
  constructor(icon, title) {
    super('rect');

    this.icon = icon;
    this.title = title;
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
  constructor(icon, title) {
    super('polygon');

    this.icon = icon;
    this.title = title;
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class Ellipse extends Tool {
  constructor(icon, title) {
    super('ellipse');

    this.icon = icon;
    this.title = title;
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}

export class RoundedRect extends Tool {
  constructor(icon, title) {
    super('rounded_rect');

    this.icon = icon;
    this.title = title;
  }

  start(e, canvas, context) {

  }

  move(e, canvas, context) {

  }

  finish() {

  }
}
