class Bullet{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.height=10;
        this.width=20;
        this.image = loadImage("images/daBullt.jpg");

    };
    fire(bullet_pos){
        this.x = this.x+bullet_pos*5;
    }
    display(){
        fill(255,255,255);
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width*3,this.height*3);
    }
   
}