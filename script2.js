setTimeout(() => {
    notice()
   }, 1000);function notice(){
    var noticing=document.getElementById('note');
    noticing.innerHTML='<h4><i class="fa fa-thumbs-up"></i><br>All items on this page are currently available</h4>';
    noticing.style.maxHeight='max-Content';
   }
   setTimeout(() => {
    noticed()
   }, 3000);function noticed(){
    const noticing=document.getElementById('note');
    noticing.style.maxHeight='0';
   }

//-----------------------------------------
   