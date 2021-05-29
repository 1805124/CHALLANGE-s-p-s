var state = 0;
var PlayerScore  = 0;
var ComputerScore = 0;
var Csd = document.getElementById("cs"); 
var Psd = document.getElementById("ps");
Psd.innerHTML=PlayerScore;
Csd.innerHTML=ComputerScore;
function gen()
{
    PlayerScore = 0;
    ComputerScore = 0;
    state = 0;
    clear();
    Psd.innerHTML=PlayerScore;
    Csd.innerHTML=ComputerScore;

}

function fun()
{
    var ele = document.getElementById("plane");
    var p = 0 ;
    var h = 0;
    var w = 0;
    var s = 1;
    var x = 1;
    var t = ele.offsetLeft+ele.offsetWidth+(ele.offsetWidth/3);
    var m = setInterval(
    function j()
    {
    if(p>window.innerWidth-t)
    {
        ele.style.transition="2s ease";
        document.getElementById("con1").style.padding="0px";
        ele.style.display="None";
        clearInterval(m)
        var g = document.getElementById("f");
        f.style.display="flex";
        var sb = document.getElementById("sb");
        var gr = document.getElementById("gr");
        var z  = sb.offsetHeight;
        var x = gr.offsetHeight;
        var y = sb.offsetWidth;
        sb.style.top = (x/2 - z/2)+ "px";
        sb.style.left = "-"+((y/2)-z/2)+ "px";
        sb.style.transform = "rotate(270)";
        document.getElementById("btn").innerHTML="reset";
        document.getElementById("btn").style.background="00f00f"
        document.getElementById("btn").setAttribute("onclick","gen()");
        document.getElementById("Text").style.display="none";

    }
    ele.style.left = p + "px";
    ele.style.transform = "scale("+s+")";
    s=s*1.0003;
    x=x+0.148;
    p=p+1;
    },1);
    
    
}


function fun2(ele)
{
var colour = ['#00ff00','#000fff','ff6600','f6f600'];
ele.style.color = colour[Math.floor(Math.random()*colour.length)];

}



var stone = document.getElementById("stone");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

stone.addEventListener("click",function f() {
gaming("stone");    
});
paper.addEventListener("click",function f(){
gaming("paper");
});
scissors.addEventListener("click",function f(){
gaming("scissors");
});



function gaming(val)
{
    if ( state != 0)
    {
        clear();
        state = 0;
    }
    var array = ["stone","paper","scissors"];
    var cal = array[Math.floor(Math.random()*array.length)];
    var j = document.getElementById("anime");
    viz(cal,val);
    console.log(cal,val);
    Play(cal,val);
    state = 1;
}

function viz(cal,val)
{
    var playerElement = document.createElement('i');
    var computerElement = document.createElement('i');
    if( val == "scissors")
    {
        playerElement.setAttribute('class','fas fa-hand-peace');
    }
    else if(val == "stone")
    {
        playerElement.setAttribute('class','fas fa-hand-rock');
    }
    else if(val == "paper")
    {
        playerElement.setAttribute('class','fas fa-hand-paper');
    }
    if( cal == "scissors")
    {
        computerElement.setAttribute('class','fas fa-hand-peace');
    }
    else if(cal == "stone")
    {
        computerElement.setAttribute('class','fas fa-hand-rock');
    }
    else if(cal == "paper")
    {
        computerElement.setAttribute('class','fas fa-hand-paper');
    }
    playerElement.setAttribute('font-size','300px');
    playerElement.setAttribute('id','p1');
    playerElement.setAttribute('transition','2s ease');
    computerElement.setAttribute('transition','2s ease');
    computerElement.setAttribute('id','c1');
    computerElement.setAttribute('font-size','300px');
    var pd = document.getElementById("pldis");
    var cd = document.getElementById("comdis");
    pd.appendChild(playerElement);
    cd.appendChild(computerElement);
}




function Play(cal,val)
{
    if ( cal == val )
    {
        console.log("No change ");
        Psd.innerHTML=PlayerScore;
        Csd.innerHTML=ComputerScore;
    }
    else if( cal == "stone" && val =="scissors" )
    {
        ComputerScore = ComputerScore + 1;
        Psd.innerHTML=PlayerScore;
        Csd.innerHTML=ComputerScore;
    }
    else if( val == "stone" && cal =="scissors" )
    {
        PlayerScore = PlayerScore + 1;
        Psd.innerHTML=PlayerScore;
        Csd.innerHTML=ComputerScore;
    }
    else if ( val == "paper" && cal == "scissors")
    {
        ComputerScore = ComputerScore + 1;
        Psd.innerHTML=PlayerScore;
        Csd.innerHTML=ComputerScore;
    }
    else if ( val == "scissors" && cal == "paper")
    {
        PlayerScore = PlayerScore + 1;
        Psd.innerHTML=PlayerScore;
        Csd.innerHTML=ComputerScore;
    }
    else if ( val == "stone" && cal =="paper" )
    {
        ComputerScore = ComputerScore + 1;
        Psd.innerHTML=PlayerScore;
        Csd.innerHTML=ComputerScore;
    }
    else if ( val == "paper" && cal == "stone" )
    {
        PlayerScore = PlayerScore + 1;
        Psd.innerHTML=PlayerScore;
        Csd.innerHTML=ComputerScore;
    }
} 
 function clear()
 {
     var elem1 = document.getElementById('p1');
     var elem2 = document.getElementById('c1');
     elem1.parentNode.removeChild(elem1);
     elem2.parentNode.removeChild(elem2);
 }




















/*const selectbuttons = document.querySelectorAll('[data-selection]')

selectbuttons.forEach(selectButton => {
    selectButton.addEventListener('click',e =>{
        const selectName = selectButton.dataset.selection
        makeSelection(selectName)
    })
})

function makeSelection(selection)
{
    console.log(selection);
}
*/