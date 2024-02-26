
let totalPrice = 0

function handlerEvent(target){
    const selectedItemContainer = document.getElementById("selected-item")
  
  const itemName = target.childNodes[3].childNodes[3]
 
   console.log(itemName)
   
   const count =selectedItemContainer.childElementCount
   const p = document.createElement("p")
   p.innerHTML = `${count}. ${itemName.innerText}`
  selectedItemContainer.appendChild(p)

    
  const pricetext = target.childNodes[3].childNodes[5].innerText.split(" ")[0]
  const price = parseFloat(pricetext)

   totalPrice = totalPrice + price
  const firstTotal = document.getElementById("totalspan")
  firstTotal.innerText = totalPrice.toFixed(2)

  const newTotalText = document.getElementById("grandTotal")
  newTotalText.innerText = totalPrice.toFixed(2)
 

 
  if (totalPrice>=200){
    document.getElementById("btn").addEventListener('click',function(){
      const emailField = document.getElementById('emailfield')
      const input = emailField.value
      console.log(input)
      
      if(input ==='SELL200' ){
        const newTotalText = document.getElementById("grandTotal")
        const grandTotal = totalPrice * (20/100)
      
        const grand = parseFloat(grandTotal)
        const newTotal = totalPrice - grand
        newTotalText.innerText = newTotal.toFixed(2)
    
        const discountText =  (totalPrice - newTotal).toFixed(2)
        document.getElementById("discountId").innerText=discountText
      }
    })
  

    document.getElementById("btn").removeAttribute("disabled");
    document.getElementById("btn").style.backgroundColor="red"

  }

  if(totalPrice>=0){
    const p = document.getElementById("buyBtn")
    p.removeAttribute("disabled")
    p.style.backgroundColor="red"
  }
 
}

const resetBtn = document.getElementById("reset")
resetBtn.addEventListener("click" , () =>{
  window.location.reload()
})














