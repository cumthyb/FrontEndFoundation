window.requestAnimationFrame = window.requestAnimationFrame ||
    function(fn){
        return window.setTimeout(fn);
    };
window.cancelAnimationFrame = window.cancelAnimationFrame || window.clearTimeout;

function getStyle(ele, attr){
    return ele.currentStyle ? ele.currentStyle[attr] : window.getComputedStyle(ele)[attr];
}

var box=document.getElementById("box");

var styles=box.currentStyle||window.getComputedStyle(box);

function fn(obj,move,time){

    let startTime=new Date();
    function loop(){

        var now=new Date();
        var timeSpan=now-startTime;
        var currentVal;

        var roti=timeSpan/time;

        if(roti>=1){
            roti=1;
        }
        else {
            requestAnimationFrame(loop);
        }

        for (var key in move) {
            currentVal=roti*move[key]['s']+move[key]['start'];
            if(key==="opacity"){
                obj.style[key]=currentVal;
            }
            else
                obj.style[key]=currentVal+"px";
            //console.log(`${key}:${currentVal}`);
        }

    }
    loop();

}
