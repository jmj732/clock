const canvas = document.getElementById("clock");
const ctx = canvas.getContext("2d");
const radius = 180;
ctx.translate(200,200);

function drawClock(){
    drawFace(ctx,radius);
    drawTime(ctx,radius);
    drawNumbers(ctx,radius);
}
function drawFace(ctx,radius){

    ctx.beginPath();
    ctx.arc(0,0, radius, 0, 2 * Math.PI);    
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.lineWidth = 15; 
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 20; 
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#333';
    ctx.arc(0 ,0, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}
function drawNumbers(ctx,radius){
    let x, y , radian; 
    const time = [1,2,3,4,5,6,7,8,9,10,11,12];
    ctx.font = "27px Arial";
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";

    for(let i = 0; i < 12; i++)
    {
        radian = Math.PI * 1 + time[i] * -Math.PI / 6;
        x = radius * 0.8 * Math.sin(radian);
        y = radius * 0.8 * Math.cos(radian) + 10;

        ctx.fillText(time[i], x, y);
    }
}
function drawTime(ctx, radius)
{
    const ntime = new Date();
    const hour = ntime.getHours();
    const minute = ntime.getMinutes();
    const second = ntime.getSeconds();
    const msecond = ntime.getMilliseconds();
    const hourAngle = (((hour % 12) * 30) + 270) * Math.PI / 180 + minute * Math.PI / 360; 
    const minuteAngle = ((minute * 6) + 270) * Math.PI / 180 + second * Math.PI / 1800; 
    const secondAngle = ((second * 6) + 270) * Math.PI / 180 + msecond * Math.PI / 30000 ; 
    console.log(msecond);
    //시침
    drawHand(ctx, hourAngle, radius*0.5, radius* 0.07);
    //분침
    drawHand(ctx, minuteAngle, radius*0.75, radius* 0.07);
    //초침
    drawHand(ctx, secondAngle, radius*0.85, radius* 0.02,'red');
}

function drawHand(ctx, pos, length, width, color ="#333")
{
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    const x = length * Math.cos(pos);
    const y = length * Math.sin(pos);

    ctx.moveTo(0,0);
    ctx.lineTo(x,y);
    ctx.stroke();
}

setInterval(drawClock,10);

// ctx.arc(95, 50, 40, 0, 360 * Math.PI / 180); //  원그리기
// ctx.strokeStyle = "yellow"; // 선 색깔

// ctx.lineWidth = 10;         // 선 두께
// ctx.stroke();               // 그리기
// ctx.beginPath();


// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.lineCap = "round";      // 선 끝부분 스타일
// ctx.stroke();               
// ctx.beginPath();

// ctx.fillStyle = "rgb(0 255 0 / 50%)";
// ctx.fillRect(0, 0, 400, 400);
// ctx.strokeStyle = "rgb(0 0 255 / 50%)";
// ctx.lineWidth = 5;
// ctx.stroke();


// ctx.moveTo(0,0)
// ctx.lineTo(0,75);
// ctx.lineTo(150,75);
// ctx.lineTo(75,0);
// ctx.lineTo(0,0);
// ctx.stroke();

// ctx.font = "50px Arial";
// ctx.fillText("Hello World",10 ,80);