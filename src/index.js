import 'bootstrap'
import './index.html';
import './index.scss';

const shopItemsData = [
    {
        id: "jfhgbvnscs",
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-1.jpg",
      },
      {
        id: "ioytrhndcv",
        name: "Office Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-2.jpg",
      },
      {
        id: "wuefbncxbsn",
        name: "T Shirt",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-3.jpg",
      },
      {
        id: "thyfhcbcv",
        name: "Mens Suit",
        price: 300,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-4.jpg",
      },
      {
        id: "thiecbawdjksadjk",
        name: "Mens Tie",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-5.png",
      },
      {
        id: "iuertrywebncdjksadjk",
        name: "Casual shoes",
        price: 200,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-6.png",
      },
      {
        id: "thierytbvcbvzdhadjk",
        name: "black suit",
        price: 450,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-7.png",
      },
      {
        id: "trfoiwfcnbcawdjksadjk",
        name: "polo shirt",
        price: 45,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-8.png",
      },
      {
        id: "cbvxbcvsceldk",
        name: "denim shirt",
        price: 85,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-9.png",
      },
      {
        id: "oiopijmjkhuihb",
        name: "denim pants",
        price: 120,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-10.png",
      },
      {
        id: "oiopijewyiohbjhib",
        name: "basic cap",
        price: 35,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-11.png",
      },
      {
        id: "rtytytuyuytyytbvncv",
        name: "leather boots",
        price: 350,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-12.png",
      }
];


const cardWrap = document.getElementById("card-wrap")

const cardItemCreator = (name, price, desc, img) => {
    cardWrap.innerHTML += `<div class='col m-2'>
    <div class='card' style='width: 12rem;'>
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${desc}</p>
         <div class="card-price">
            <div class="price-value">
                $ ${price}
            </div>
            <div class="price-button">
                <button type="button" class="btn btn-primary btn-sm decrease">-</button>
                <span class="quantity">0</span>
                <button type="button" class="btn btn-primary btn-sm increase">+</button>

            </div>
         </div>
        </div>
      </div>
    </div>
    `
}

shopItemsData.map(el => cardItemCreator(el.name,el.price, el.prdescice, el.img))
const itemIncrease = document.querySelectorAll(".increase")
const itemDecrease = document.querySelectorAll(".decrease")
const itemQuantity = document.querySelectorAll(".quantity")
