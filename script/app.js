//Array of my Cars

const brand = [
    {
        image = "photo1",
        name = "Jaguar",
        price = "$11,500"
    },

    {
        image = "photo2",
        name = "Audi",
        price = "$20,800"
    },

    {
        image = "photo3",
        name = "Spider",
        price = "$35,000"
    },

    {
        image = "photo4",
        name = "Lamborgini",
        price = "$50,000"
    },

    {
        image = "photo5",
        name = "Steeda",
        price = "$65,900"
    },

    {
        image = "photo6",
        name = "Benz",
        price = "$85,000"
    },

    {
        image = "photo7",
        name = "Range",
        price = "$130,300"
    },

    {
        image = "photo8",
        name = "Porsche",
        price = "$132,000"
    },

    {
        image = "photo9",
        name = "Cheetah",
        price = "$115,000"
    },

    {
        image = "photo10",
        name = "Blaizer",
        price = "$116,500"
    },

    {
        image = "photo11",
        name = "Audi-Mini",
        price = "$100,000"
    },

    {
        image = "photo12",
        name = "Voltron-slick",
        price = "$175,000"
    },
]

const carbrands = document.querySelector("#fastcars");
let html = "";

brand.forEach(e => {

    html += `
    <div class="col-12 col-md-4 col-lg-4 p-4 bg-light">
        <div class="car-img ">
            <img src="img/${e.image}.jfif" alt="Black Car" class="mycar">
        </div>
        <div class="img-prop">
            <h2 class="text-center fs-3 pt-2">${e.name}</h2>
            <h3 class="text-center fs-5">${e.price}</h3>
        </div>
    </div>

    `
    console.log(e);

    carbrands.innerHTML = html;

})

