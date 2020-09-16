// IIFE Immediatley invoked function expression
(function(){
    //code goes here
    // console.info("I was called")
    // VAR is 
    var pricePounds;
    var exchangeRate = 0.87;
    var priceEuros =0;

    var convertForm = document.getElementById("myForm");
    var msg = document.getElementById("msg");

    convertForm.addEventListener("submit", function(ev){
        console.dir(ev);
        ev.preventDefault();
        pricePounds = parseFloat (document.getElementById("pounds").value);
        console.info(pricePounds);
        if(isNaN(pricePounds)){
            msg.innerHTML = "Must be a number"
            msg.setAttribute("class","error")
        }else{
            msg.removeAttribute("class")
        priceEuros = pricePounds *exchangeRate;
        msg.innerHTML = `&euro; ${priceEuros}`
    }

        // console.info("form submitted")
    })

    document.getElementById("pounds").addEventListener("focus", function(ev){
        ev.target.value = ""
    })


})();