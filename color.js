const colorArray=[
    `rgb(${pickColor(256)}, ${pickColor(256)}, ${pickColor(256)})`,
    `rgb(${pickColor(256)}, ${pickColor(256)}, ${pickColor(256)})`,
    `rgb(${pickColor(256)}, ${pickColor(256)}, ${pickColor(256)})`,
    `rgb(${pickColor(256)}, ${pickColor(256)}, ${pickColor(256)})`,
    `rgb(${pickColor(256)}, ${pickColor(256)}, ${pickColor(256)})`,
    `rgb(${pickColor(256)}, ${pickColor(256)}, ${pickColor(256)})`
];

const rgbText=document.getElementById('rgbColor');
const squares=document.querySelectorAll('.square');
var pickedColor=colorArray[pickColor(colorArray.length)];
rgbText.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
    //setting color
    squares[i].style.backgroundColor=colorArray[i];

    //setting click lisners
    squares[i].addEventListener('click',function() {
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor){
            winColor();
        }else{
            this.style.backgroundColor="#232323";
        }
    });
}

const winColor=function(){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=pickedColor;
    }
}

function pickColor(upperLimit){
    return Math.floor(Math.random()*parseInt(upperLimit));
}