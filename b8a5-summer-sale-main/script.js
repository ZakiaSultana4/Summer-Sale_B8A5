
let total = 0 ;

function card(target){

   

    const itemName = target.childNodes[3].childNodes[3].innerText;
 
    const productPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const productPriceConvert = parseFloat(productPrice);
    total = parseFloat(total) + productPriceConvert;
   
    // const cardRateText= cardRate.innerText;
    // console.log(cardRateText)
   
    document.getElementById("total-price").innerText = total;

    

    const getItemName = document.getElementById("item-name");
    const count = getItemName.childElementCount;
    const p = document.createElement("p");
    p.innerHTML =` <div id="item-name" class="m-3 font-bold">
                       ${count + 1}. ${ itemName}
                     </div> `;
    getItemName.appendChild(p);

    const mkBtn =document.getElementById("make-btn");
    const cuponBtn =document.getElementById("cuppon-btn");
    const cuppon = document.getElementById("cuppon-input").value;
    
    
        
    if(total >= 0 ){
        mkBtn.removeAttribute("disabled");
        document.getElementById("net-total").innerText = total;
    }  if(total >= 200){
      
        cuponBtn.removeAttribute("disabled");

        const parsent = 20 ;
        const percent = total*parsent/100;
        const percentDecimal = percent.toFixed(2)
        const netAmount = total - percent;

        document.getElementById("cuppon-btn").addEventListener("click", function(){

            const cupponInput = document.getElementById("cuppon-input").value;

            const fixiedDecimal = netAmount.toFixed(2)
           
           
            if(cupponInput == "SALE200"){
                const discount = document.getElementById("discount").innerText = percentDecimal;
                const netTotal = document.getElementById("net-total").innerText = fixiedDecimal;


                const inputFild = document.getElementById("cuppon-input").style.border = "#D2D4D7"
                const cupponBtn = document.getElementById("cuppon-btn").style.backgroundColor = "#E527B2";
            }else{
                const inputFild = document.getElementById("cuppon-input").style.border = "2px solid red"
                const cupponBtn = document.getElementById("cuppon-btn").style.backgroundColor = "red";
            }

            })
            
      
       
        
    }else{

       
        mkBtn.setAttribute("disable" , true);
        cuponBtn.setAttribute("disable" , true);
    }

    document.getElementById("modal-btn").addEventListener("click", function(){
        window.location.href = "index.html";
    })
}


