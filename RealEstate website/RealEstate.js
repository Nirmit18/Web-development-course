

<script>
    var menu=document.querySelector('#menu-bars');
    var bar=document.querySelector('.navbar');

    menu.onclick=()=>{
        bar.classList.toggle('active');
    }

    let toggle=document.getElementById('toggle');

      toggle.addEventListener('click',()=>{
        document.body.classList.toggle('dark');
      });

</script>
