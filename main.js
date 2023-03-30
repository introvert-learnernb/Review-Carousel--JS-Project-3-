const reviews = [
    {
        id:1,
        name:"Janet Dawson",
        img:"imgs/person-1.jpeg",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ipsam commodi necessitatibus dolorem sint quisquam? Voluptatem porro est aliquam atque.",
        title:"B.Ex[Stanford University]"
    },
    {
        id:2,
        name:"Harry Styles",
        img:"imgs/person-2.jpg",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ipsam commodi necessitatibus dolorem sint quisquam? Voluptatem porro est aliquam atque.",
        title:"B.Ex[Stanford University]"
    },
    {
        id:3,
        name:"Larry Jones",
        img:"imgs/person-3.jpg",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ipsam commodi necessitatibus dolorem sint quisquam? Voluptatem porro est aliquam atque.",
        title:"B.Ex[Oxford University]"
    },
    {
        id:4,
        name:"Georgina Harrison",
        img:"imgs/person-4.jpg",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ipsam commodi necessitatibus dolorem sint quisquam? Voluptatem porro est aliquam atque.",
        title:"B.CE[Harvard University]"
    },
    {
        id:5,
        name:"Stephen Cage",
        img:"imgs/person-5.jpg",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ipsam commodi necessitatibus dolorem sint quisquam? Voluptatem porro est aliquam atque.",
        title:"B.E[Stanford University]"
    },

];

//now selecting the elements from the testimonial section.... 


const img = document.querySelector('.img-person');
const namePerson = document.querySelector('.testimonial__name');
const description = document.querySelector('.testimonial__description');
const position = document.querySelector('.testimonial__position');

const prevBtn = document.querySelector('.prev__button');
const nextBtn = document.querySelector('.next__button');

//setting the counter
let counterItem = 0;

function showItem(){
    const Item = reviews[counterItem];
    namePerson.textContent = Item.name;
    description.textContent = Item.desc;
    position.textContent = Item.title;
    img.src = Item.img;
}

window.onload = showItem;

prevBtn.addEventListener('click', ()=>{
    counterItem--;
    if(counterItem < 0){
        counterItem = 4;
    }
    console.log(counterItem);
    showItem();
})

nextBtn.addEventListener('click', ()=>{
    counterItem++;
    if(counterItem > reviews.length-1){
        counterItem = 0;
    }
    console.log(counterItem);
    showItem();
})