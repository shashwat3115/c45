class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 30;
        this.image = loadImage("images/player.jpg");
    }
    
    display(){
        this.y = mouseY;
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width*3,this.height*3);
    }
    
}