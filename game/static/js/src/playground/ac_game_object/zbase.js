let AC_GAME_OBJECTS = [];

class AcGameObject {
	constructor() {
		AC_GAME_OBJECTS.push(this);

		this.has_called_start = false;  // 是否执行过start函数
		this.timedelta = 0;  // 两帧间的时间间隔(毫秒)
	}
	start() {  // 只会在第一帧执行一次（单独抽出第一帧）
    }

	update() {  // 每一帧均会执行一次
    }

	on_destroy() {  // 在被销毁前执行一次
    }


	destroy() {  // 删掉该物体
		this.on_destroy();

		for (let i = 0; i < AC_GAME_OBJECTS.length; i ++ ) {
            if (AC_GAME_OBJECTS[i] === this) {
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }

	}

}

let last_timestamp;// 上一帧的时间间隔
let AC_GAME_ANIMATION = function(timestamp) { // 每帧调用一次
    for (let i = 0; i < AC_GAME_OBJECTS.length; i ++ ) {
        let obj = AC_GAME_OBJECTS[i];
        if (!obj.has_called_start) { // 如果没有执行过第一帧
            obj.start();
            obj.has_called_start = true; // 标记执行过第一帧
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    for (let i = 0; i < AC_GAME_OBJECTS.length; i ++ ) {
        let obj = AC_GAME_OBJECTS[i];
        obj.late_update();
    }

    last_timestamp = timestamp; // 更新时间戳

    requestAnimationFrame(AC_GAME_ANIMATION); // 递归调用
}




requestAnimationFrame(AC_GAME_ANIMATION);
