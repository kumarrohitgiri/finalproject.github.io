let paymentButton = document.getElementById("paybtn1")
let paymentButtonTwo = document.getElementById("paybtn2")

// const pay = () => {
//     Instamojo.open('https://test.instamojo.com/@fahej28047')
// }

//changing colors
const main = document.getElementById("main1")
        const arrBG = [
            "green", "blue", "grey", "yellow","white"
    ]
        // console.log(random)
        

        setInterval(function() {
            main.style.backgroundColor = arrBG[Math.floor(Math.random() * 5) + 1];
            console.log(Math.floor(Math.random() * 5) + 1)
            // console.log("hello")
        }, 1000)

function onButtonClick() {
    Instamojo.open('https://test.instamojo.com/@fahej28047');
  }

let form = document.querySelector("#registration")
        form.addEventListener('submit', (e)=> {
            e.preventDefault()
            document.querySelector("#sub").value = "Submitting...."
            let data = new FormData(form)
            fetch('https://script.google.com/macros/s/AKfycbx9O_22q-Dw-1IVOYHfsw1tezrYPlbDqeA4owW4FIqm1djgrd-bYeF0B2AlWXzyezMC2w/exec', {
                method: "POST",
                body: data
            })
                .then(res => res.text())
                .then(data => {
                    // document.querySelector("#msg").innerHTML=data
                    document.querySelector("#sub").value="Submit"
                })
                .then(() => {
                    form.reset()
                    // setTimeout(function(){document.querySelector("#msg").innerHTML=""}, 2000)
                })
        })

let feedbackForm = document.querySelector("#feedback")
        feedbackForm.addEventListener('submit', (e)=> {
            e.preventDefault()
            document.querySelector("#submitted").value = "Submitting...."
            let data = new FormData(feedbackForm)
            fetch('https://script.google.com/macros/s/AKfycbz4XkfnN5YWTn-qhNG_XwjNzxqd1r1gFms5Ryzoub7ewMfPrAqWOcXaKiw288ACsT8D6A/exec', {
                method: "POST",
                body: data
            })
                .then(res => res.text())
                .then(() => {
                    // document.querySelector("#msg").innerHTML=data
                    document.querySelector("#submitted").value="Submit"
                })
                .then(() => {
                    feedbackForm.reset()
                    // setTimeout(function(){document.querySelector("#msg").innerHTML=""}, 2000)
                })
        })

       paymentButton.addEventListener("click", onButtonClick);
       paymentButtonTwo.addEventListener("click", onButtonClick);