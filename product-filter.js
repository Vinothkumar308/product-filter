const data = [
    {
      id: 1,
      name: "Fire Boltt Ninja 2",
      img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
      amt: 1599,
      seller: "Boltt Store",
      catagory: "Watch",
    },
  
    {
      id: 2,
      name: "Noise Pulse Go",
      img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
      amt: 1300,
      seller: "Noise Store",
      catagory: "Watch",
    },
  
    {
      id: 3,
      name: "boAt Xtend Pro",
      img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
      amt: 2799,
      seller: "Rajesh Watchs",
      catagory: "Watch",
    },
    {
      id: 4,
      name: "Lenovo Tab M8",
      img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
      amt: 9270,
      seller: "Stonehenge Retail",
      catagory: "Tablets",
    },
    {
      id: 5,
      name: "Honor PAD X8",
      img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
      amt: 12999,
      seller: "Honor india",
      catagory: "Tablets",
    },
  
    {
      id: 6,
      name: "IKALL N9 ",
      img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
      amt: 3999,
      seller: "IKALL Store",
      catagory: "Tablets",
    },
  
    {
      id: 7,
      name: "Oppo Pad Air",
      img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
      amt: 15999,
      seller: "Oppo Store",
      catagory: "Tablets",
    },
    {
      id: 8,
      name: "Acer EK220Q",
      img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
      amt: 6249,
      seller: "Accer Store",
      catagory: "Monitors",
    },
    {
      id: 9,
      name: "Samsung 24",
      img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
      amt: 9799,
      seller: "Samsung Store",
      catagory: "Monitors",
    },
  
    {
      id: 10,
      name: "ZEBRONICS AC32FHD ",
      img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
      amt: 12799,
      seller: "ZEBRONICS Store",
      catagory: "Monitors",
    },
  ];

let inputData = data


const mainitems = document.querySelector(".main-items")


function createelement(data){
    
    const tags = data.map((data)=>
        `<div class="box">
           <div class="img">
            <img src="${data.img}" alt="${data.name}">
         </div>
        <div class="about-price">
        <div id="product-name">${data.name}</div>
        <div id="price-entry">rs. <span id="price">${data.amt}</span></div>
        <div id="company">${data.seller}</div>
       </div>
     </div>`).join("")
    mainitems.innerHTML = tags
}
createelement(inputData)

function catagorys(){
    const lists = document.querySelector(".lists")
    const catagories = inputData.map((data)=>{
        return data.catagory
    })
   let set = new Set(catagories)
   const newarr = ["All",...set]
   lists.innerHTML = newarr.map((value)=> `<li>${value}</li>`).join("")

}

catagorys()

const litag = document.querySelectorAll("li")
litag.forEach((tag)=>{
  tag.addEventListener("click",()=>{
    const search = tag.innerHTML
    search ==="All"?createelement(inputData):createelement(inputData.filter((data)=>data.catagory===search))
  
  })
})

const pricerange = document.querySelector("#price-range")
const pricemoney = document.querySelector("#price-money")

function setprice(){
  const arr = inputData.map((val)=>val.amt)
  const minprice = Math.min(...arr)
  const maxprice = Math.max(...arr)
  pricemoney.innerText ="Rs."+maxprice
  pricerange.min = minprice
  pricerange.max = maxprice
  pricerange.addEventListener("input",(e)=>{
    pricemoney.innerText = "Rs." + e.target.value
    createelement(inputData.filter((val)=>val.amt<=e.target.value))
  })
}
setprice()

const textsearch = document.querySelector("#textsearch")

textsearch.addEventListener("keyup",(e)=>{
  const textvalue = e.target.value.toLowerCase().trim()
  if(textvalue){
    createelement(inputData.filter((val)=>val.name.toLocaleLowerCase().trim().includes(textvalue)))
  }
  else{
    createelement(inputData)
  }
  
})
