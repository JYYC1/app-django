class AcGamePlayground {
	constructor(root) {
		this.root = root;
		this.$playground = $(`<div class="ac-game-playground"></div>`);

		this.hide();
		this.root.$ac_game.append(this.$playground);

		this.start();

	}

	start() {
	}

	show() {//打开playground页面
		this.$playground.show();
	}

	hide() {// 关闭界面
		this.$playground.hide();
	}

}
