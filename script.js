const billAmount = document.getElementById("bill-input");
const peopleAmount = document.getElementById("people-amount-input")
const fivePercentBtn = document.getElementById("five"); 
const percentButtons = document.querySelectorAll(".percent-btn");
const totalResult = document.getElementById("total-tip");
const tipAmountPerson = document.getElementById("tip-amount-person");
const resetBtn = document.getElementById("resetBtn-js");
const tipsResult = document.querySelectorAll(".tips-result")
const peopleAmountInput = document.querySelector(".people-amount-input")
const warningMessage = document.querySelector(".people-amount-warning");
const customInput = document.querySelector(".custom")

function calculateTip(percent) {
            if(!Number(billAmount.value) || Number(billAmount.value) <= 0){
                billAmount.setAttribute("style", "border: 0.2rem solid red")
                return;
            }



            if (Number(peopleAmount.value) <= 0 || 
                !Number.isInteger(Number(peopleAmount.value))  
                ){
                    peopleAmount.setAttribute("style", "border: 0.2rem solid red");
                    warningMessage.textContent = "Can't be zero"; 
                    tipAmountPerson.textContent = "$0.0";
                    totalResult.textContent = "$0.0";
                    return;
                } 
                
                if(!billAmount.value || !peopleAmount.value){
                    tipAmountPerson.textContent = "$0.0";
                    totalResult.textContent = "$0.0";
                    return;
                }
            
                else {
                    peopleAmount.setAttribute("style", "border: 0.2rem solid black");
                    billAmount.setAttribute("style", "border: 0.2rem solid black");
                    warningMessage.textContent = "";
                }
                
    
        const percentAmount = percent / 100;
        const totalTip = Number(billAmount.value * percentAmount);
        const tipAmount = Math.round(Number(totalTip / peopleAmount.value));
        tipAmountPerson.textContent = `$${tipAmount}`; 
        const totalBill = (Number(billAmount.value) + totalTip).toFixed(2);
        const totalPerson = (Number(totalBill / Number(peopleAmount.value))).toFixed(2);

        
        totalResult.textContent = `$${totalPerson}`;
        }
        
percentButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculateTip(Number(button.dataset.percent))
    })
})

customInput.addEventListener("input", () => {
    if (!customInput.value) {  
        tipAmountPerson.textContent = "$0.0";
        totalResult.textContent = "$0.0";
        return;
    }
    calculateTip(customInput.value)
        
})


resetBtn.addEventListener("click", () => {
    tipAmountPerson.textContent = "$0.0";
    totalResult.textContent = "$0.0";
    peopleAmount.setAttribute("style", "border: 0.2rem none");
    billAmount.setAttribute("style", "border: 0.2rem none");
    warningMessage.textContent = "";
    billAmount.value="";
    peopleAmount.value="";
})



