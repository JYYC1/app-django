class AcGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`<div class="ac-game-playground"></div>`);

        this.hide();
    
        this.start();


    }

    get_random_color() { // 小球的颜色
        let colors = ["blue", "red", "pink", "grey", "green"];
        return colors[Math.floor(Math.random() * 5)]; // 
    }



    start() {
    }

    show() {//打开playground页面
        this.$playground.show();
        this.root.$ac_game.append(this.$playground);
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        this.game_map = new GampMap(this);
        this.players = [];
        this.players.push(new Player(this, this.width     / 2 / this.scale, 0.5, 0.05, "white", 0.15, true));




    }

    hide() {// 关闭界面
        this.$playground.hide();
    }

}
