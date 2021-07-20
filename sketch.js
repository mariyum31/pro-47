var fetchTime;
//var Image;
var database;
var time;

function preload() {
    //Image = loadImage("clockImg.png");
}
function setup() {
    createCanvas(1000,500);

    database = firebase.database();
}
function draw() {
    background(0);

    fetchTime = database.ref("Time");
    fetchTime.on("value",function(data){

    time = data.val();
    })
    if(time >= 12) {
        database.ref("/").update({

            Time:hour()
        })
        textSize(20);
        fill("blue");
        text("Time:"+time%12+"PM",475,280);
        text("good night",475,200);
        text("sweet dreams",150,250)
        text("behind every great day is a great night",50,50);
        text("night is to see the dreams and day is to make them true",300,450);
        text("the darkest night produce the brightest star",590,90) ;
        
        

    }else if(time===0) {
        database.ref("/").update({

            Time:hour()
        })
        
        textSize(20);
        fill("blue");
        text("Time:12AM",475,280);
        
    }else{
        database.ref("/").update({

            Time:hour()
        })
        textSize(20);
        fill("blue");
        text("Time:"+time+"AM",475,280);
        
        
    }
}
