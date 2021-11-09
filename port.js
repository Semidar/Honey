window.addEventListener('load',()=>{

    // burger-menu start
    let menu = document.querySelector('.menu');
    let burger = document.querySelector('.burger');

    burger.addEventListener('click',()=>{
        console.log(11)
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
    // burger-menu end

    // validation start
    let form = document.myForm;

    let validate =(elem, pattern)=>{
        let res = elem.value.search(pattern);
        if(res == -1){
            elem.className = 'invalid';
            elem.value  = '';
        }
        else{
            elem.className = 'valid'
        }
    }

    form[0].addEventListener('change',()=>{
        let pattern = /[a-zA-Z]/;
        validate(form[0], pattern);
    });

    form[1].addEventListener('change',()=>{
        let pattern = /[a-zA-Z]/;
        validate(form[1], pattern);
    });

    form[2].addEventListener('change',()=>{
        let pattern = /\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
        validate(form[2], pattern);
    });

    form[3].addEventListener('change',()=>{
        let pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        validate(form[3], pattern);
    });
    
    form[4].addEventListener('click',(e)=>{
        for(let i of form){
            if(i.className == 'invalid'){
                e.preventDefault();
            }
            else{
                form.reset();
                i.className = '';
                form[4].className = 'btn';
            }
        }
    });
    // validation end
});