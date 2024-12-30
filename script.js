
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

// ------js code for showroom page content-----/






function blink(){
    var light1=document.getElementById('chop')
    setInterval(() => {
        listen()
    }, 3000);function listen(){
        light1.style.color='green';
    }
    setInterval(() => {
        deaph()
    }, 6000);function deaph(){
        light1.style.color='yellow';
    }
    
}blink();

//----awaiting update function for item presence updatr ---//

setTimeout(() => {
    load()
}, 1);function load(){
    var attacker=document.getElementById('pending');
    attacker.style.maxHeight='1200px';
}

setTimeout(() => {
    loader()
}, 5000);function loader(){
    var attacker=document.getElementById('pending');
    attacker.style.maxHeight='0';
}

function clearMenuBring(){
    var hambarg=document.getElementById('clear-page-menu');
    hambarg.style.maxHeight='max-Content';
    setTimeout(() => {
        siteTheme()   
       }, 1000);function siteTheme(){
           var site=document.getElementById('extra-menu');
           site.style.maxHeight='max-Content';
       }
       
       setTimeout(() => {
        quitSite()   
       }, 7000);function quitSite(){
           var sit=document.getElementById('extra-menu');
           sit.style.maxHeight='0';
       }
}

function clearMenu(){
    var hambarg=document.getElementById('clear-page-menu');
    hambarg.style.maxHeight='0';
}


function getPlatform(){
    window.location.href='branches.html';
}
function getProducts(){
    window.location.href="products and services.html";
}
function chart(){
    
    const message = "Hello giltous admin, I found this useful. Let's talk about it.";
    
    // Encode the message for use in a URL
    const encodedMessage = encodeURIComponent(message);
    
    // Construct the WhatsApp URL with the phone number and message
    const whatsappURL = `https://wa.me/${'+256765003100'}?text=${encodedMessage}`;
    
    // Open the URL in a new tab
    window.open(whatsappURL, '_blank');
}



function face(){
    const message="hello,giltous exclusive,i need your help from your website!";
    const encodedMessage=encodeURIComponent(message);
    const face=`https://www.facebook.com/profile.php?id=61561628670006?text=${encodedMessage}`;
    window.open(face, '_black');
}
function instagram(){
    const message = 'hello umar arts,i need help from your website';
    const encodedMessage = encodeURIComponent(message)
    const inst = `https://www.instagram.com/umararts24>igsh=YzljYTk1ODg3Zg==?text=${encodedMessage}`;
    window.open(inst, '_blank')
}
function youtube(){
    const message ="hello umar arts,i need some help";
    const encodedMessage=encodeURIComponent(message);
    const you= `https://youtube.com/@umararts-f9h?si=vEoOXpRONcLXtVi3?text=${encodedMessage}`;
    window.open(you, '_blank')
}

//----------listenned buttons...---


document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "prev");
            if (i === index) {
                slide.classList.add("active");
            } else if (i === (index - 1 + slides.length) % slides.length) {
                slide.classList.add("prev");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 3000); 
});
