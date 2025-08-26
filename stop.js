let lap = document.getElementById('lap');
let reset = document.getElementById('reset');
let start = document.getElementById('start');
let stop1 = document.getElementById('stop');
let lapbox = document.querySelector('#lapbox');

let time = document.getElementById('time');

let hr = document.getElementById('p1');
let min = document.getElementById('p2');
let sec = document.getElementById('p3');
let msec = document.getElementById('p4');

let min1 = 0;
let sec1 = 0;
let msec1 = 0;
let hr1 =0;
let a;
        
lapbox.addEventListener("click" , function()
{
   let di = document.createElement('div');
   di.appendChild('lapbox');
   di.style.height = "300px";
   di.style.width = "300px"
   di.style.border = "1px solid white";

});

lap.addEventListener("click" , set);

function set()
{
    if(min1==0&&sec1==0&&hr1==0&&msec1==0)
    {
        alert('nothing');
    }
    else{
        
        let item = document.createElement('div');
        item.setAttribute("id" , "item");
        lapbox.appendChild(item);
        let head = document.createElement('h3');
        head.style.display = "inline-block";
        item.appendChild(head);
        head.innerText = "Lap => ";
        
        let p1 = document.createElement('p');
        let pd1 = document.createElement('p');
        let p2 = document.createElement('p');
        let pd2 = document.createElement('p');
        let p3 = document.createElement('p');
        let pd3 = document.createElement('p');
        let p4 = document.createElement('p');

        p1.innerText = hr.innerText;
        p2.innerText = min.innerText;
        p3.innerText = sec.innerText;
        p4.innerText = msec.innerText;
        pd1.innerText = ":";
        pd2.innerText = ":";
        pd3.innerText = ":";

        item.appendChild(p1);
        item.appendChild(pd1);
        item.appendChild(p2);
        item.appendChild(pd2);
        item.appendChild(p3);
        item.appendChild(pd3);
        item.appendChild(p4);
    }
}

start.addEventListener("click" , function(){
    start.style.display="none";
    stop1.style.display="block";
    lap.style.display="block";
    reset.style.display="none";
    
    a=setInterval(fun1 , 15);
});

stop1.addEventListener("click" , function(){
    lap.style.display="none";
    reset.style.display="block";
    stop1.style.display="none";
    start.style.display="block";
    clearInterval(a);
});

reset.addEventListener("click" , function()
{
    hr.innerText = "00";
    min.innerText = "00";
    sec.innerText = "00";
    msec.innerText = "00";
     min1 = 0;
    sec1 = 0;
    msec1 = 0;
    hr1 =0;

    lapbox.innerHTML="";
});

function fun1()
{
    msec.innerText = msec1++;
    if(msec1==60)
    {
        msec1=0;
        sec.innerText = ++sec1;
    }
    if(sec1==60)
    {
        sec1=0; 
        min.innerText= ++min1;
    }
    if(min1==60)
    {
        min1=0;
        hr.innerText = ++hr1;
    }
}