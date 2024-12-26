
function hideList(){
    var hidden=document.getElementById('productList');
    var name=document.getElementById('intro');
    hidden.style.height='0';
    name.style.opacity='';return false;
}
function produce(){
    var hidden=document.getElementById('productList');
    var name=document.getElementById('intro');
    hidden.style.height='max-Content';
    if(hidden.style.height='max-Content'){
       name.style.opacity='0.1' ;
    }
}
function showMenu(){
    var menu=document.getElementById('sideMenu');
    var name=document.getElementById('intro');
    menu.style.height='max-Content';
    if(menu.style.height='max-Content'){
        name.style.opacity='0.1' ;
     }else{
        name.style.opacity='';return false;
     }
}
function quitMenu(){
    var menu=document.getElementById('sideMenu');
    var name=document.getElementById('intro');
    menu.style.height='0';
    if(menu.style.height='0'){
        name.style.opacity='';return false;
    }
    
}
function read(){
    alert('Oops! we are sorry,\nthis content is still under review.\nyou will be notified when available.\nthank you\n\n\n..........Giltous Exclusive.........')}

    setInterval(() => {
        blink()
    }, 10000);function blink(){
        var doc=document.getElementById('logo');
        var light= doc.style.color='yellow';
        var dark=doc.style.backgroundColor='black';
        if(doc=light){
            doc=dark
        }else{return true;}
    }
    setInterval(() => {
        unBlink()
    }, 20000);function unBlink(){
        var doc=document.getElementById('logo');
        var light2= doc.style.color='black';
        var dark1=doc.style.backgroundColor='yellow';
        if(doc=light2){
            doc=dark1
        }else{return true;}
    }
    function servicesMissing(){
        alert('Oops! sorry,the services here are still under review,\nyou will be notified when available.\nthank you.\n\n\n\n..........Giltous Exclusive.........')
    }
    setInterval(() => {
        showTheme()
    }, 4000);function  showTheme(){
        var them1=document.getElementById('advise-user-about-theme');
        them1.style.height='0'
    }
    setInterval(() => {
        hideTheme()
    }, 20000);function hideTheme(){
        var them1=document.getElementById('advise-user-about-theme');
        them1.style.height='';return true;
    }
    function giveYourDesign(){
        var design=document.getElementById('choice-design');
        design.style.width='max-Content';
        design.style.height='max-Content';return true;
    }
    function quitChoiceDesign(){
        var design=document.getElementById('choice-design');
        design.style.width='0';
        design.style.height='0';return true;
    }
    
    function sendMessageToWhatsApp() {
        const phoneNumber = '+256765003100'; // Replace with the WhatsApp number, e.g., "1234567890"
        const message = "Hello giltous admin, I found this useful. Let's talk about it.";
        
        // Encode the message for use in a URL
        const encodedMessage = encodeURIComponent(message);
        
        // Construct the WhatsApp URL with the phone number and message
        const whatsappURL = `https://wa.me/${'+256765003100'}?text=${encodedMessage}`;
        
        // Open the URL in a new tab
        window.open(whatsappURL, '_blank');
    }
    
    
      
    
function exit(){
    var getBack=document.getElementById('forms')
    getBack.style.width='0';
}
function Register(){
    var exx=document.getElementById('forms')
    exx.style.maxHeight='800px';
}

function signUp(){
    var sixth=document.getElementById('user-signs')
    
    sixth.style.height='700px'
    
}
function quitSign(){
    var sixth=document.getElementById('user-signs')
    sixth.style.height='0'
    
}
