const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const btnCalEl = document.getElementById("btnCal");
const btnClearEl = document.getElementById("btnClear");
const bmiResultEl = document.getElementById("bmiResult");
const resultEl = document.getElementById("result");

btnClearEl.addEventListener("click", () => {
    heightEl.value = "";
    weightEl.value = "";
    bmiResultEl.value = "";
    resultEl.innerText = "";
})


btnCalEl.addEventListener("click", () => {
    const height = (heightEl.value) / 100;
    const weight = weightEl.value;

    const bmi = weight / (height * height);
    bmiResultEl.value=`${bmi}`;

    if(bmi < 18.5){
        resultEl.innerText="Underweight";
        }else if(bmi >= 18.5 && bmi <= 24.99)
        {resultEl.innerText="Normal";}
        else if(bmi >= 25 && bmi <= 29.99){
            resultEl.innerText="Overweight";
        }else{
            resultEl.innerText="Obese";
        }
   
})



