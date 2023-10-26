// DOM VARS
const btn = document.querySelector('#submit');
const form = document.querySelector('#digite');
const form1 = document.querySelector('#form1');
const LEDS = document.querySelector('.LEDS')
const LEDc = document.querySelector('.LEDc');
const LEDb = document.querySelector('.LEDb');
const LEDa = document.querySelector('.LEDa');
const stscode = document.querySelector('.stscode')
const url = "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"
const tentenovamente = document.querySelector('.tentenovamente')


// GENERAL VARS
three_digit_number = null
hundreds = null
tens = null
ones = null
data = null
palpite = null
tentenovamente.style.display = 'none'

// ALL TIME FUNCTION
if (palpite == null) {
    stscode.style.display = 'none';

};
LEDb.remove()
LEDc.remove()

// FUNCTIONS LEDS
function LEDSall(){
    
    if (ones == 0){
        LEDa.src = "svg/LEDBLACK/LED0.svg"
     }
     
    if (ones == 1){
       LEDa.src = "svg/LEDBLACK/LED1.svg"
    }
    if (ones == 2){
        LEDa.src = "svg/LEDBLACK/LED2.svg"
     }
     if (ones == 3){
        LEDa.src = "svg/LEDBLACK/LED3.svg"
     }
     if (ones == 4){
        LEDa.src = "svg/LEDBLACK/LED4.svg"
     }
     if (ones == 5){
        LEDa.src = "svg/LEDBLACK/LED5.svg"
     }
     if (ones == 6){
        LEDa.src = "svg/LEDBLACK/LED6.svg"
     }
     if (ones == 7){
        LEDa.src = "svg/LEDBLACK/LED7.svg"
     }
     if (ones == 8){
        LEDa.src = "svg/LEDBLACK/LED8.svg"
     }
     if (ones == 9){
        LEDa.src = "svg/LEDBLACK/LED9.svg"
     }
        if (tens == 0){
        LEDb.src = "svg/LEDBLACK/LED0.svg"
     }
     
    if (tens == 1){
       LEDb.src = "svg/LEDBLACK/LED1.svg"
    }
    if (tens == 2){
        LEDb.src = "svg/LEDBLACK/LED2.svg"
     }
     if (tens == 3){
        LEDb.src = "svg/LEDBLACK/LED3.svg"
     }
     if (tens == 4){
        LEDb.src = "svg/LEDBLACK/LED4.svg"
     }
     if (tens == 5){
        LEDb.src = "svg/LEDBLACK/LED5.svg"
     }
     if (tens == 6){
        LEDb.src = "svg/LEDBLACK/LED6.svg"
     }
     if (tens == 7){
        LEDb.src = "svg/LEDBLACK/LED7.svg"
     }
     if (tens == 8){
        LEDb.src = "svg/LEDBLACK/LED8.svg"
     }
     if (tens == 9){
        LEDb.src = "svg/LEDBLACK/LED9.svg"
     }
        if (hundreds == 0){
        LEDc.src = "svg/LEDBLACK/LED0.svg"
     }
     
    if (hundreds == 1){
       LEDc.src = "svg/LEDBLACK/LED1.svg"
    }
    if (hundreds == 2){
        LEDc.src = "svg/LEDBLACK/LED2.svg"
     }
     if (hundreds == 3){
        LEDc.src = "svg/LEDBLACK/LED3.svg"
     }
     if (hundreds == 4){
        LEDc.src = "svg/LEDBLACK/LED4.svg"
     }
     if (hundreds == 5){
        LEDc.src = "svg/LEDBLACK/LED5.svg"
     }
     if (hundreds == 6){
        LEDc.src = "svg/LEDBLACK/LED6.svg"
     }
     if (hundreds == 7){
        LEDc.src = "svg/LEDBLACK/LED7.svg"
     }
     if (hundreds == 8){
        LEDc.src = "svg/LEDBLACK/LED8.svg"
     }
     if (hundreds == 9){
        LEDc.src = "svg/LEDBLACK/LED9.svg"
     }
    }
function LEDERROR(){
    if (ones == 0){
        LEDa.src = "svg/LEDRED/LED0.svg"
     }
     
    if (ones == 1){
       LEDa.src = "svg/LEDRED/LED1.svg"
    }
    if (ones == 2){
        LEDa.src = "svg/LEDRED/LED2.svg"
     }
     if (ones == 3){
        LEDa.src = "svg/LEDRED/LED3.svg"
     }
     if (ones == 4){
        LEDa.src = "svg/LEDRED/LED4.svg"
     }
     if (ones == 5){
        LEDa.src = "svg/LEDRED/LED5.svg"
     }
     if (ones == 6){
        LEDa.src = "svg/LEDRED/LED6.svg"
     }
     if (ones == 7){
        LEDa.src = "svg/LEDRED/LED7.svg"
     }
     if (ones == 8){
        LEDa.src = "svg/LEDRED/LED8.svg"
     }
     if (ones == 9){
        LEDa.src = "svg/LEDRED/LED9.svg"
     }
        if (tens == 0){
        LEDb.src = "svg/LEDRED/LED0.svg"
     }
     
    if (tens == 1){
       LEDb.src = "svg/LEDRED/LED1.svg"
    }
    if (tens == 2){
        LEDb.src = "svg/LEDRED/LED2.svg"
     }
     if (tens == 3){
        LEDb.src = "svg/LEDRED/LED3.svg"
     }
     if (tens == 4){
        LEDb.src = "svg/LEDRED/LED4.svg"
     }
     if (tens == 5){
        LEDb.src = "svg/LEDRED/LED5.svg"
     }
     if (tens == 6){
        LEDb.src = "svg/LEDRED/LED6.svg"
     }
     if (tens == 7){
        LEDb.src = "svg/LEDRED/LED7.svg"
     }
     if (tens == 8){
        LEDb.src = "svg/LEDRED/LED8.svg"
     }
     if (tens == 9){
        LEDb.src = "svg/LEDRED/LED9.svg"
     }
        if (hundreds == 0){
        LEDc.src = "svg/LEDRED/LED0.svg"
     }
     
    if (hundreds == 1){
       LEDc.src = "svg/LEDRED/LED1.svg"
    }
    if (hundreds == 2){
        LEDc.src = "svg/LEDRED/LED2.svg"
     }
     if (hundreds == 3){
        LEDc.src = "svg/LEDRED/LED3.svg"
     }
     if (hundreds == 4){
        LEDc.src = "svg/LEDRED/LED4.svg"
     }
     if (hundreds == 5){
        LEDc.src = "svg/LEDRED/LED5.svg"
     }
     if (hundreds == 6){
        LEDc.src = "svg/LEDRED/LED6.svg"
     }
     if (hundreds == 7){
        LEDc.src = "svg/LEDRED/LED7.svg"
     }
     if (hundreds == 8){
        LEDc.src = "svg/LEDRED/LED8.svg"
     }
     if (hundreds == 9){
        LEDc.src = "svg/LEDRED/LED9.svg"}
    }
function LEDGREEN(){
    if (ones == 0){
        LEDa.src = "svg/LEDGREEN/LED0.svg"
     }
     
    if (ones == 1){
       LEDa.src = "svg/LEDGREEN/LED1.svg"
    }
    if (ones == 2){
        LEDa.src = "svg/LEDGREEN/LED2.svg"
     }
     if (ones == 3){
        LEDa.src = "svg/LEDGREEN/LED3.svg"
     }
     if (ones == 4){
        LEDa.src = "svg/LEDGREEN/LED4.svg"
     }
     if (ones == 5){
        LEDa.src = "svg/LEDGREEN/LED5.svg"
     }
     if (ones == 6){
        LEDa.src = "svg/LEDGREEN/LED6.svg"
     }
     if (ones == 7){
        LEDa.src = "svg/LEDGREEN/LED7.svg"
     }
     if (ones == 8){
        LEDa.src = "svg/LEDGREEN/LED8.svg"
     }
     if (ones == 9){
        LEDa.src = "svg/LEDGREEN/LED9.svg"
     }
        if (tens == 0){
        LEDb.src = "svg/LEDGREEN/LED0.svg"
     }
     
    if (tens == 1){
       LEDb.src = "svg/LEDGREEN/LED1.svg"
    }
    if (tens == 2){
        LEDb.src = "svg/LEDGREEN/LED2.svg"
     }
     if (tens == 3){
        LEDb.src = "svg/LEDGREEN/LED3.svg"
     }
     if (tens == 4){
        LEDb.src = "svg/LEDGREEN/LED4.svg"
     }
     if (tens == 5){
        LEDb.src = "svg/LEDGREEN/LED5.svg"
     }
     if (tens == 6){
        LEDb.src = "svg/LEDGREEN/LED6.svg"
     }
     if (tens == 7){
        LEDb.src = "svg/LEDGREEN/LED7.svg"
     }
     if (tens == 8){
        LEDb.src = "svg/LEDGREEN/LED8.svg"
     }
     if (tens == 9){
        LEDb.src = "svg/LEDGREEN/LED9.svg"
     }
        if (hundreds == 0){
        LEDc.src = "svg/LEDGREEN/LED0.svg"
     }
     
    if (hundreds == 1){
       LEDc.src = "svg/LEDGREEN/LED1.svg"
    }
    if (hundreds == 2){
        LEDc.src = "svg/LEDGREEN/LED2.svg"
     }
     if (hundreds == 3){
        LEDc.src = "svg/LEDGREEN/LED3.svg"
     }
     if (hundreds == 4){
        LEDc.src = "svg/LEDGREEN/LED4.svg"
     }
     if (hundreds == 5){
        LEDc.src = "svg/LEDGREEN/LED5.svg"
     }
     if (hundreds == 6){
        LEDc.src = "svg/LEDGREEN/LED6.svg"
     }
     if (hundreds == 7){
        LEDc.src = "svg/LEDGREEN/LED7.svg"
     }
     if (hundreds == 8){
        LEDc.src = "svg/LEDGREEN/LED8.svg"
     }
     if (hundreds == 9){
        LEDc.src = "svg/LEDGREEN/LED9.svg"
     }
    }
// FUNCTION STATUS CODE
function SobreStatus(){
    if (palpite < data.value) {
        stscode.style.display = ''
        stscode.textContent = "É maior"
        stscode.style.color = "#ff6600"
    };
    if (palpite > data.value) {
        stscode.style.display = ''
        stscode.textContent = "É menor"
        stscode.style.color = "#ff6600"
    };
    if (palpite == data.value) {
        stscode.style.display = ''
        stscode.textContent = "Você acertou!!!!"
        stscode.style.color = "#32bf00"
        
    };
}

// FUNCTION MOSTRAR SOMENTE A QUANTIDADED NECESSARIA DE ALGARISMOS
function LEDSSHOW(){
    LEDa.remove()
    LEDb.remove()
    LEDc.remove()
    if (palpite < 10) {
        LEDS.appendChild(LEDa)
    }
    if (palpite > 9 && palpite < 100) {
        LEDS.appendChild(LEDb)
        LEDS.appendChild(LEDa)
    };
    if (palpite > 99) {
        LEDS.appendChild(LEDc)
        LEDS.appendChild(LEDb)
        LEDS.appendChild(LEDa)
    }
}

// FUNCTION CASAS DE UNIDADES, DEZENAS, CENTENAS
function algorithm(){
    three_digit_number = parseInt (palpite);
    ones=three_digit_number%10;
    tens=three_digit_number%100-ones;
    hundreds=three_digit_number%1000-tens-ones;
    hundreds=hundreds/100;
    tens=tens/10;
    hundreds.value = hundreds;
    ones.value = ones;
    tens.value = tens;
    console.log(hundreds, tens, ones)
}

// FUNCTION TRAVAR BOTÃO PALPITE
function disablepalpite(){
    btn.disabled = true;
    form.disabled = true;
    form1.disabled = true;
}

// RESQUEST API + ERROR
async function getAllPosts() {
    const response = await fetch(url);

    console.log(response);
    
    data = await response.json()

    console.log(data)
    
    
    if (data.StatusCode == 502) {
        stscode.style.display = ''
        stscode.textContent = "ERRO"
        stscode.style.color = "#cc3300"
        palpite = data.StatusCode
        LEDSSHOW();
        algorithm();
        LEDSall();
        LEDERROR();
        disablepalpite();
        tentenovamente.style.display = ''
    }
}


// FUNCIONAMENTO DA PÁGINA
getAllPosts();
btn.addEventListener("click", function handleSubmit(e) {

    e.preventDefault();

    palpite = +document.querySelector('#form1').value;

    
    SobreStatus();
    LEDSSHOW();
    algorithm();
    LEDSall();
    

    if (palpite == data.value) {
        LEDGREEN();
        disablepalpite();
        tentenovamente.style.display = ''
    }
    form.reset();
})
tentenovamente.addEventListener("click", function handleSubmit(e) {
    e.preventDefault();
    location.reload();
    return false;
})