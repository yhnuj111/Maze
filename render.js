class Maze {
    constructor(width, height, mazeMap) {
        this.width = width;
        this.height = height;
        this.mazeMap = mazeMap;
        this.init();
    }
    init() {
        this.mazeMap = new Array(this.width);
        for (let i = 0; i < this.width; ++i) {
            this.mazeMap[i] = new Array(this.height);
            for (let j = 0; j < this.height; ++j) {
                this.mazeMap[i][j] = 0;
            }
        }
    }
    print() {
        let mapString = "";
        for (let i = 0; i < this.mazeMap.length; ++i) {
            for (let j = 0; j < this.mazeMap[i].length; ++j) {
                mapString += ((j+1) < this.mazeMap[i].length ? this.mazeMap[i][j] + ' ' : this.mazeMap[i][j] + '\n');
            }
        }
        console.log(mapString)
    }
    render() {
        let node = '<div class="maze-node clearfix"> <i class="maze-inner green"></i><i class="maze-inner red"></i></div>';
        for (let i = 0; i < this.mazeMap.length; ++i) {
            $(".maze-wrapper").append("<div class='maze-row'></div>")
            for (let j = 0; j < this.mazeMap[i].length; ++j) {
                $(".maze-row:last-child").append(node);
            }
        }
    }
}
let map = null;
let myMaze = new Maze(10, 10, map);
myMaze.print();
myMaze.render();