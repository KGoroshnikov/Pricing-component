let texts = document.getElementsByClassName("price-text");
let arr2 = [199.99, 249.99, 399.99];
let arr1 = [19.99, 24.99, 39.99];

const checkbox = document.getElementById('input-checkbox');
checkbox.addEventListener('change', () => {
  console.log("Состояние чекбокса изменнено" + checkbox.checked)
  for(let i = 0; i < texts.length; i++){
    if (!checkbox.checked){
      texts[i].innerHTML = "<span class=" + "dollar-text" + ">&#36;</span>" + arr1[i];
    }
    else{
      texts[i].innerHTML = "<span class=" + "dollar-text" + ">&#36;</span>" + arr2[i];
    }
  }
})