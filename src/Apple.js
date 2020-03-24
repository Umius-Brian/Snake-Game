class Apple {

  constructor($el) {
    this.node = $('<img id="apple"></img>');
    this.node.attr('src', 'src/assets/apple.jpg').width(70);
    this.positionTop = 50 * (Math.floor(Math.random() * (13)));
    this.positionLeft = 50 * (Math.floor(Math.random() * (13)));
    $el.append(this.node);
    this.node.css({ top: this.positionTop, left: this.positionLeft });
  }
}



