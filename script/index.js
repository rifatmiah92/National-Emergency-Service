
let count = 0

let hearts = document.querySelectorAll('.heart')

for (let heart of hearts) {
  heart.onclick = function() {
    count++
    document.getElementById('heart-count').innerText = count;
  }
}
let copys = document.querySelectorAll('.copy-card')
for (let copy of copys ){
    copy.onclick =function(){
        count++
        document.getElementById('copy-btn').innerText = count
  }
}
// let balance = 100  
// let coines = document.querySelectorAll('.coin-card')

// for (let coine of coines) {
//     coine.addEventListener('click', function () {
//         balance = balance - 20;  
//         if(balance < 0){
//             alert("You have no balance you need 20 coin for 1 call")
//             return;

//         }
//         document.getElementById('coin-btn').innerText = balance
//     })
// }
// let calls = document.querySelectorAll('.coin-card')

// for (let call of calls) {
//     call.addEventListener('click', function () {
       
//             alert("📞 Calling Emergency Helpline ....")
//             return;

//         }
        
//     )}
let balance = 100  
document.getElementById('call-1').addEventListener('click', function () {
        balance = balance - 20;  
        if(balance < 0){
            alert("❌You have no coin each call you need 20 coin")
            return;

        }
        else{alert("📞National Emergency Number 999...")
            
        }
     return   document.getElementById('coin-btn').innerText = balance
    })

document.getElementById('call-2').addEventListener('click', function () {
        balance = balance - 20;  
        if(balance < 0){
            alert("❌You have no coin each call you need 20 coin")
            return;

        }
        else{alert("📞 Police Helpline Number 999...")
            
        }
     return   document.getElementById('coin-btn').innerText = balance
    })
document.getElementById('call-3').addEventListener('click', function () {
        balance = balance - 20;  
        if(balance < 0){
            alert("❌You have no coin each call you need 20 coin")
            return;

        }
        else{alert("📞 Fire Service  Number 999...")
            
        }
     return   document.getElementById('coin-btn').innerText = balance
    })
document.getElementById('call-4').addEventListener('click', function () {
        balance = balance - 20;  
        if(balance < 0){
            alert("❌You have no coin each call you need 20 coin")
            return;

        }
        else{alert("📞 Ambulance Service Number 1994-999999...")
            
        }
     return   document.getElementById('coin-btn').innerText = balance
    })
document.getElementById('call-5').addEventListener('click', function () {
        balance = balance - 20;  
        if(balance < 0){
            alert("❌You have no coin each call you need 20 coin")
            return;

        }
        else{alert("📞 Women & Child Helpline Number 109...")
            
        }
     return   document.getElementById('coin-btn').innerText = balance
    })
document.getElementById('call-6').addEventListener('click', function () {
        balance = balance - 20;  
        if(balance < 0){
            alert("❌You have no coin each call you need 20 coin")
            return;

        }
        else{alert("📞 Anti-Corruption Helpline Number 106...")
            
        }
     return   document.getElementById('coin-btn').innerText = balance
    })
document.getElementById('call-7').addEventListener('click', function () {
        balance = balance - 20;  
        if(balance < 0){
            alert("❌You have no coin each call you need 20 coin")
            return;

        }
        else{alert("📞 Electricity Helpline Number 16216...")
            
        }
     return   document.getElementById('coin-btn').innerText = balance
    })
document.getElementById('call-8').addEventListener('click', function () {
        balance = balance - 20;  
        if(balance < 0){
            alert("❌You have no coin each call you need 20 coin")
            return;

        }
        else{alert("📞Brac Helpline Number 16445..")
            
        }
     return   document.getElementById('coin-btn').innerText = balance
    })
document.getElementById('call-9').addEventListener('click', function () {
        balance = balance - 20;  
        if(balance < 0){
            alert("❌You have no coin each call you need 20 coin")
            return;

        }
        else{alert("📞 Bangladesh Railway Helpline Number 163.....")
            
        }
     return   document.getElementById('coin-btn').innerText = balance
    })


    // cart 1
document.getElementById('copy-1')
.addEventListener('click', function () {
       
            alert("National Emergency Number 999")
            return;

        }
        
    )
document.getElementById('copy-2')
.addEventListener('click', function () {
       
            alert("Police Helpline Number 999")
            return;

        }
        
    )
document.getElementById('copy-3')
.addEventListener('click', function () {
       
            alert("Fire Service  Number 999")
            return;

        }
        
    )
document.getElementById('copy-4')
.addEventListener('click', function () {
       
            alert("Ambulance Service Number 1994-999999")
            return;

        }
        
    )
document.getElementById('copy-5')
.addEventListener('click', function () {
       
            alert("Women & Child Helpline Number 109")
            return;

        }
        
    )
document.getElementById('copy-6')
.addEventListener('click', function () {
       
            alert("Anti-Corruption Helpline Number 106")
            return;

        }
        
    )
document.getElementById('copy-7')
.addEventListener('click', function () {
       
            alert("Electricity Helpline Number 16216")
            return;

        }
        
    )
document.getElementById('copy-8')
.addEventListener('click', function () {
       
            alert("Brac Helpline Number 16445")
            return;

        }
        
    )
document.getElementById('copy-9')
.addEventListener('click', function () {
       
            alert("Bangladesh Railway Helpline Number 163")
            return;

        }
        
    )
// traverse techniqe
const callCard=document.getElementsByClassName('coin-card')

for (let callcard of callCard){
    
    callcard.addEventListener('click',function (){
         if (balance >= 0) {  
            

            const callTitle = callcard.parentNode.parentNode.children[1].innerText;
            const callNumber = callcard.parentNode.parentNode.children[4].innerText;
            const now = new Date();
        const timeString = now.toLocaleTimeString();

            const cardContainer = document.getElementById('card-container');
            const newCard = document.createElement('div');
            newCard.innerHTML = `
                <div class="bg-white shadow-2xl rounded-2xl h-[100px] w-full p-5 my-4 ">
                    <h1 class="font-bold">${callTitle}</h1>
                    
                     <div class="flex justify-between items-center">
            <p class="font-bold">${callNumber}</p>
            <p class="font-semibold">${timeString}</p>
        </div>
                </div>`;
            cardContainer.append(newCard);

            console.log("Current balance:", balance);
        } else {
           
        }
    });
}
document.getElementById('clear-btn').addEventListener('click',function(){
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML=""
})