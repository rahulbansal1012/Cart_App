const label = document.getElementById("label");
const shoppingCart  = document.getElementById("shopping-cart")
 console.log(shopItemData);
 basket = JSON.parse(localStorage.getItem("Data"))||[];
console.log(basket);


let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
    calculation();

let generateCartItem = () => {
    if(basket.length !== 0){
        return(shoppingCart.innerHTML = basket.map((x) => {
            
            let search = shopItemData.find((y) => y.id === x.id )||[]  ;
            
            return `
                <div class = "cart-item" > 
                    <img width = 100px src = ${search.img} alt ="photo"/>
                        <div class ="details">
                            <div class ="titile-price-x">
                                    <h4 class = "title-price"> 
                                        <p> ${search.name}</p>
                                        <p class ="cart-icon-price"> $${search.price}</p>
                                    </h4>
                                <i onClick ="removeItem(${x.id})" class="bi bi-x"></i>
                            </div>
                            <div class="buttons">
                            <i onclick= "inc(${x.id})" class="bi bi-plus"></i>
                            <div id = ${x.id} class="quantity">${x.item}</div>
                            <i onclick = "dec(${x.id})" class="bi bi-dash"></i>
    
                        </div>
                                    <h3>$${x.item* search.price}</h3>
                                </div>
                </div>`
            }).join("")
        )
              
    }

    else {
        shoppingCart.innerHTML='';
        label.innerHTML= `
        <h2> Cart Is Empty</h2>
        <a href="index.html">
            <button class  = "HomeBtn"> Back To Home</button>
            </a> 
        `;
    }
};
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

     basket = basket.filter((x)=>x.item !==0);
    generateCartItem();   
    totalAmount();
   let search =  basket.find((x)=>x.id===id);
   document.getElementById(id).innerHTML = search.item;
   console.log("calling calculation");
   calculation(basket);
   localStorage.setItem("Data", JSON.stringify(basket));
//    localStorage.setItem("CartItem",JSON.stringify(total_item ));
};
generateCartItem();

let totalAmount = ()=>{
    if(basket.length!=0){
        let amount = basket.map((x) => {
            let search =  shopItemData.find((y) => y.id === x.id)|| [] ;
            return x.item*search.price;
        }) .reduce((x,y)=>x+y , 0);
            label.innerHTML =`
            <h2> Total Bill : $${amount}</h2>
            <button class = "checkOut"> CheckOut</button>
            <button class = "removeAll"> Clear Cart</button>
            `
    }
    else return ;
};
totalAmount();
let removeItem  = (y) =>{

    basket = basket.filter((x) => x.id !== y.id);
    generateCartItem();
    localStorage.setItem("data",JSON.stringify(basket));
};