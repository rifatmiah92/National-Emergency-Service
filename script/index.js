
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
let balance = 100  
let coines = document.querySelectorAll('.coin-card')

for (let coine of coines) {
    coine.addEventListener('click', function () {
        balance = balance - 20;  
        if(balance < 0){
            alert("You have no balance")
            return;

        }
        document.getElementById('coin-btn').innerText = balance
    })
}
let calls = document.querySelectorAll('.coin-card')

for (let call of calls) {
    call.addEventListener('click', function () {
       
            alert("📞 Calling Emergency Helpline ....")
            return;

        }
        
    )}
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
