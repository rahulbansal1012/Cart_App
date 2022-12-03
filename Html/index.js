let shop =  document.getElementById("shop");


let total_item =JSON.parse(localStorage.getItem("CartItem"))||0;
let basket = JSON.parse(localStorage.getItem("Data")) || [];
let generateShop = () =>{
    return (shop.innerHTML =  shopItemData.map((x)=> {
        let search= basket.find((c)=>c.id===x.id) || [];
        return `<div class="item">
        <img src= "${x.img}" width="220">
        <div class="details">
            <h3>${x.name}</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, eligendi?</p>
                <div class="price-quantity">
                    <h2>$ ${x.price}</h2>
                    <div class="buttons">
                        <i onclick= "inc(${x.id})" class="bi bi-plus"></i>
                        <div id = ${x.id} class="quantity">${search.item===undefined?0:search.item}</div>
                        <i onclick = "dec(${x.id})" class="bi bi-dash"></i>

                    </div>
                </div>
            </div>
     </div>`;
    }).join(""));
}

generateShop();

let inc = (id)=>{
    let selectedItem  =  id;
    
    let search = basket.find((x)=>
        x.id===selectedItem.id
    );
   
   if(search===undefined){
        basket.push({id:selectedItem.id,
        item:1})
    }
    else{
        search.item+=1;
    }
console.log(basket);
console.log("calling update");
update(selectedItem.id);}

let dec =(id)=>{
    let selectedItem  =  id;
    
    
    
        let search = basket.find((x)=>
            x.id===selectedItem.id
        );
        if(search==undefined) return ;
       else if(search.item===0){
            return;
        }
        else{
            if(search.item<1){search.item=0;}
            else search.item-=1;
        }
        console.log(basket);
        console.log("calling update");
update(selectedItem.id);
}

let update = (id)=>{
    // basket = basket.filter((x)=>x.item !=0);
   let search =  basket.find((x)=>x.id===id);
   document.getElementById(id).innerHTML = search.item;
   console.log("calling calculation");
   calculation(basket);
   localStorage.setItem("Data", JSON.stringify(basket));
   localStorage.setItem("CartItem",JSON.stringify(total_item ));
};


let calculation = (basket)=>{
let     total_item=0
let cartIcon = document.getElementById("cartAmount");

total =  basket.find((x)=>{
    // console.log(x.item);
   total_item+= x.item;
}
);

cartIcon.innerHTML= total_item;

}
calculation(basket);



