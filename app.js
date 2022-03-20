var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
const sizeY = canvas.clientHeight / 10;
const sizeX = canvas.clientWidth / 10;
let Table = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
class Game {

    GameArr = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    constructor() {
        this.isFinished = false;
        ctx.fillStyle = "Green";
        ctx.fillRect(8 * sizeX, 7 * sizeY, sizeX, sizeY);
        this.GameArr[2][2] = 1;
        this.playerPos = {};
        this.playerPos.x = 2;
        this.playerPos.y = 2;
        this.GameArr[7][8] = 2;
        ctx.fillStyle = "black";
        ctx.fillRect(this.playerPos.x * sizeX, this.playerPos.y * sizeY, sizeX, sizeY);
    }
    resetWorld() {
        this.playerPos.x = 2;
        this.playerPos.y = 2;
        this.GameArr = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        ctx.clearRect(0, 0, 600, 600);
        ctx.fillStyle = "Green";
        ctx.fillRect(8 * sizeX, 7 * sizeY, sizeX, sizeY);
        this.render();
    }
    move(direction) {
        ctx.clearRect(this.playerPos.x * sizeX, this.playerPos.y * sizeY, sizeX, sizeY);
        this.GameArr[this.playerPos.y][this.playerPos.x] = 0;
        switch (direction) {
            case 0:
                if (this.playerPos.y - 1 >= 0)
                    this.playerPos.y -= 1;
                break;
            case 1:
                if (this.playerPos.y + 1 <= 9)
                    this.playerPos.y += 1;
                break;
            case 2:
                if (this.playerPos.x + 1 <= 9)
                    this.playerPos.x += 1;
                break;
            case 3:
                if (this.playerPos.x - 1 >= 0)
                    this.playerPos.x -= 1;
                break;

            default:
                break;
        }
        if (this.GameArr[this.playerPos.y][this.playerPos.x] == 2) {
            this.isFinished = true;
        }
        else
            this.render()
        let stp1 = this.playerPos.y * 10 + this.playerPos.x + 1;
        let r = Table[this.playerPos.y][this.playerPos.x];
        return { stp1, r }
    }
    render() {
        this.GameArr[this.playerPos.y][this.playerPos.x] = 1;
        ctx.fillStyle = "black";
        ctx.fillRect(this.playerPos.x * sizeX, this.playerPos.y * sizeY, sizeX, sizeY);
    }

}



let game = new Game();






let QTable = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]



function TakeAction(st, Q, eps) {
    let action;
    if (Math.random() < eps)
        action = Math.floor(Math.random() * 4)
    else {
        let _action = Math.max(...Q[st])
        action = Q[st].indexOf(_action);
    }

    return action
}

async function play() {

    for (let index = 0; index < 100; index++) {
        game.isFinished = false;
        console.log("start of loop");
        st = 23;
        game.resetWorld();
        while (!game.isFinished) {
            let at = TakeAction(st, QTable, 1 - (0.01 * index))

            let { stp1, r } = game.move(at)
            let atp1 = TakeAction(stp1, QTable, 0.0)

            QTable[st][at] = QTable[st][at] + 0.1 * (r + 0.9 * QTable[stp1][atp1] - QTable[st][at])

            st = stp1;
            await new Promise(r => setTimeout(r, 0.5 * index));
        }

    }
}
play().then(() => {
    console.log(QTable);
});
