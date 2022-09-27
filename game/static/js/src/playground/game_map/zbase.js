class GameMap extends AcGameObject {
	constructor(playground) {
		super(); // 相当于注册到数组里面
		this.playground = playground; // 传进来
		this.$canvas = $(`<canvas tabindex=0></canvas>`);
		this.ctx = this.$canvas[0].getContext('2d');
		this.ctx.canvas.width = this.playground.width;
        this.ctx.canvas.height = this.playground.height;
        this.playground.$playground.append(this.$canvas);

	}
	start() {
        this.$canvas.focus();
    }

	update() {
        this.render();  // 每帧都要画
    }

	render() { // 渲染画布
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); // 画 矩形
    }

}
