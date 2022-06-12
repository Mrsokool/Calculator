(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.getElementById('btn-equal');
    


    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "please enter";
        }else{
            let ans = eval(screen.value);
            screen.value = ans;
        }
        console.log(screen.value)
    })


    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let values = e.target.dataset.num;
            screen.value += values;
        })
    })



     clear.addEventListener('click', function(e){
        screen.value = "";
     })
    
    })();

