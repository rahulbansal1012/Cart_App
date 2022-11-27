let shop =  document.getElementById("shop");

let shopItemData = [
    {
    id: "CasualShirt",
    name:"CasualShirt",
    price : 45,
    desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, eligendi?",
    img :"Images/img-1.jpg"
},
    {
        id: "Tshirt",
        name:"TShirt",
        price : 25,
        desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, eligendi?",
        img :"Images/img-2.jpg"
    },

    {
        id: "Suit",
        name:"Suit",
        price : 145,
        desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, eligendi?",
        img :"Images/img-3.jpg"
    }
,
    {
        id: "Lsat",
        name:"Last",
        price : 300,
        desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, eligendi?",
        img :"Images/img-4.jpg"
    }
]

let basket = [];
let generateShop = () =>{
    return (shop.innerHTML =  shopItemData.map((x)=> {
        return `<div class="item">
        <img src= "${x.img}" width="220">
        <div class="details">
            <h3>${x.name}</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, eligendi?</p>
                <div class="price-quantity">
                    <h2>$ ${x.price}</h2>
                    <div class="buttons">
                        <i onclick= "inc(${x.id})" class="bi bi-plus"></i>
                        <div id = ${x.id} class="quantity">0</div>
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
//    basket =  search(selectedItem,basket);
    // basket.push({id:selectedItem.id,item:1})


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

update(selectedItem.id);}

let dec =(id)=>{
    let selectedItem  =  id;
    //    basket =  search(selectedItem,basket);
        // basket.push({id:selectedItem.id,item:1})
    
    
        let search = basket.find((x)=>
            x.id===selectedItem.id
        );
        if(search.item===0){
            return;
        }
        else{
            if(search.item<=1){search.item=0;}
            else search.item-=1;
        }
        console.log(basket);
update(selectedItem.id);
}

let update = (id)=>{
   let search =  basket.find((x)=>x.id===id);
   document.getElementById(id).innerHTML = search.item;
   calculation(basket);
};


let calculation = (basket)=>{
let cartIcon = document.getElementById("cartAmount");
let total_item =0;
total =  basket.find((x)=>{
    // console.log(x.item);
   total_item+= x.item;
}
);
console.log(total_item);
cartIcon.innerHTML= total_item;

}
/*

let search= (selectedItem,basket) =>{
    let find =  basket.find((x)=> x.id === selectedItem.id);
    if(find===undefined){
        basket.push({
            id:selectedItem.id,
            item:1,
        });
    }
    else{
        find.item+=1;
    }
    console.log(basket);

    return basket;
}

*/