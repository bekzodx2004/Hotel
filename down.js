yopiq = true

btn = document.querySelector('.chevronDown')
page = document.querySelector('.page')
function downHome(){

    if (yopiq){
        btn.classList.add("aylan")
        page.classList.add("ochiq")

        yopiq = false
    }


  else{
        btn.classList.remove("aylan")
        page.classList.remove("ochiq")


        yopiq = true
    }
}