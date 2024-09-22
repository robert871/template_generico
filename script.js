let cont = 1
function menu(){
  
    if(cont==1){
        window.document.getElementById('menu').classList.replace(`home`, `home2`) 
        window.document.getElementById('li').classList.replace(`li`, `li2`)
        cont = cont + 1
    }else{
        window.document.getElementById('menu').classList.replace(`home2`, `home`)
        window.document.getElementById('li').classList.replace(`li2`, `li`)
        cont = cont - 1
        
    }


}   