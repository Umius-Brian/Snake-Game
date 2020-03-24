class BodyNode {
    constructor($el, positionArr) {
        this.positionTop = positionArr[1];
        this.positionLeft = positionArr[0];
        this.node = $('<div id="snake-body"></div>');
        $el.append(this.node);
        this.node.css({ top: this.positionTop, left: this.positionLeft });
    }

    updateNodeCSS() {
        this.node.css({ top: this.positionTop, left: this.positionLeft });
    }

    getCurrentPosition() {
        return [this.positionLeft, this.positionTop]
    }

    getLastPosition() {
        return [this.positionLeftOld, this.positionTopOld]
    }

    setPosition(newPosition) {
        this.positionLeftOld = this.positionLeft;
        this.positionTopOld = this.positionTop;
        this.positionLeft = newPosition[0];
        this.positionTop = newPosition[1];
    }
}

class Body {
    constructor($el) {
        this.nodes = [];
        this.element = $el;
    }

    draw() {
        this.nodes.forEach(node => {
            node.updateNodeCSS();
        });
    }

    moveForward(headPosition) {
        this.nodes.forEach(node => {
            node.setPosition(headPosition);
            headPosition = node.getLastPosition();
        });
    }

    addNewNode(headPosition) {
        if (this.nodes.length === 0) {
            let meat = new BodyNode(this.element, headPosition);
            this.nodes.push(meat);
            return
        }
        let tailNode = this.nodes[this.nodes.length - 1];
        let meat = new BodyNode(this.element, tailNode.getLastPosition());
        this.nodes.push(meat);
    } 
}

