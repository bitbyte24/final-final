function hide(){
    var menu=document.getElementById('sideMenu')
    menu.style.width='0';
}
function show(){
    var menu=document.getElementById('sideMenu')
    menu.style.width='max-Content';
}
function help(){
    setTimeout(() => {
        help1()
    }, 5000);function help1(){
        var msg=document.getElementById('msg')
        msg.style.width='max-Content';
    }
    setTimeout(() => {
        help2()
    }, 10000);function help2(){
        var msg=document.getElementById('msg')
        msg.style.width='0';
    }
}
window.onscrollend(help());

function call(){
    var me=document.getElementById('me2');
    setInterval(() => {
        lightRed()
    }, 1000);function lightRed(){
        me.style.borderColor='green';
    }
} 
call();

//----user-form content function------/
//--------------000000\\\\\\\\\\\\\\\\\\
function form(){
    var formFill=document.getElementById('form1')
    formFill.style.width='300px';
    formFill.style.height='';
}
function ignore(){
    var formFill=document.getElementById('form1')
    formFill.style.width='0';
    formFill.style.height='0';
}
function register(){
    var reg=document.getElementById('registror')
    reg.style.maxWidth='450px';
    reg.style.height='max-Content';
}

function leave(){
    var reg=document.getElementById('registror')
    reg.style.maxWidth="0";
    reg.style.height="0";
}

function quitSign(){
    var sign=document.getElementById('sign-in')
    sign.style.maxWidth='0';
}
function sign(){
    var sign=document.getElementById('sign-in')
    sign.style.maxWidth='450px';
}