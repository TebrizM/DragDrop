// Brand, Model section

function Model(id, name, brandId) {
    this.Id = id;
    this.Name = name;
    this.BrandId = brandId;
}
let model1 = new Model(1, "A3", 1);
let model2 = new Model(2, "A4", 1);
let model3 = new Model(3, "A5", 1);
let model4 = new Model(4, "A6", 1);
let model5 = new Model(5, "A7", 1);
let model6 = new Model(6, "A8", 1);
let model7 = new Model(7, "X5", 2);
let model8 = new Model(8, "X6", 2);
let model9 = new Model(9, "M3", 2);
let model10 = new Model(10, "M4", 2);
let model11 = new Model(11, "M5", 2);
let model12 = new Model(12, "M6", 2);
let model13 = new Model(13, "E-series", 3);
let model14 = new Model(14, "S-series", 3);
let model15 = new Model(14, "C-series", 3);

let models = [];
models.push(model1);
models.push(model2);
models.push(model3);
models.push(model4);
models.push(model5);
models.push(model6);
models.push(model7);
models.push(model8);
models.push(model9);
models.push(model10);
models.push(model11);
models.push(model12);
models.push(model13);
models.push(model14);
models.push(model15);

let brand = document.forms.carForm.elements.Brand;


brand.addEventListener("change", function(e) {
    e.preventDefault();
    let modelChild = document.querySelectorAll("select[name='Model'] option");
    for (let i = 1; i < modelChild.length; i++) {
        modelChild[i].remove();
    }
    for (let i = 0; i < models.length; i++) {
        if (models[i].BrandId == parseInt(this.value)) {
            let option = document.createElement("option");
            option.setAttribute("value", models[i].Id)
            option.innerText = models[i].Name;
            document.forms.carForm.elements.Model.appendChild(option);
        }
    }
})

// Upload Photo Section
let allowDrop = (event) => {
    event.preventDefault();
}

let dropElement = (event) => {
    event.preventDefault();
    let files = [...event.dataTransfer.files]

    for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(files[i])
        reader.onloadend = () => {
            let img = document.createElement("img")
            img.src = reader.result;
            event.target.append(img);
        };


    }
}

let add = document.querySelector(".Add");
// let dropContainer = document.querySelector(".dropContainer");
// add.addEventListener('click', function(e) {
//     e.preventDefault();
//     let inputFile = document.forms.fileForm.inputFile.files;
//     let rawfile = [...inputFile];


//     rawfile.forEach(file => {
//         let reader = new FileReader();
//         reader.readAsDataURL(file)
//         reader.onloadend = () => {
//             let img = document.createElement("img")
//             img.src = reader.result;
//             dropContainer.append(img);
//         };

//     })

// })

// Adding a Card

let selectbrand = document.forms.carForm.elements.Brand;
let selectmodel = document.forms.carForm.elements.Model;
let selectbantype = document.forms.carForms.elements.Bantype;
let selectkm = document.forms.carForms.elements.Km;
// let selectyear = document.querySelector('#year');
let selectyear = document.forms.carForms1.elements.year;
let selectengine = document.forms.carForms1.elements.Engine;
let selectprice = document.forms.carForms2.elements.Price;
let selectfile = document.forms.fileForm.elements.inputFile;
const dropContainer = document.querySelector(".pic-div")

add.addEventListener("click", function(e){
    e.preventDefault();
    console.log(selectfile);
    // let file = document.forms.fileForm.elements.inputFile;
    // console.log(file);
    let file = document.forms.fileForm.inputFile.files;
    let rawfile = [...file];
    let photo = document.createElement('img')
    rawfile.forEach((file)=>{
        let reader = new FileReader(),
        imgDiv = document.createElement('div')
        imgDiv.classList.add('card-img')
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            photo.src = reader.result;
            dropContainer.appendChild(imgDiv);
            cardimg.append(photo);
        }
    })

    
    let apps= document.querySelector('#app')
    // console.log(apps);
    // let selectModel = document.forms.carForm.elements.Model;

    let col4div = document.createElement('div')
    col4div.classList.add('col-lg-4')
    
    let card = document.createElement('div')
    card.classList.add('card')
    let cardimg = document.createElement('div')
    cardimg.classList.add('card-image')
    let cardbody = document.createElement('div')
    cardbody.classList.add('card-info')
    apps.appendChild(col4div)
    col4div.appendChild(card)
    card.appendChild(cardimg)
    card.appendChild(cardbody)

    
    cardbody.innerHTML = `<h2>${selectbrand.options[selectbrand.selectedIndex].innerText}</h2><p>Year: ${selectyear.value}</p>
    <p>Price: ${selectprice.value}$</p><p>Model: ${selectmodel.options[selectmodel.selectedIndex].innerText}</p><p>Ban Type: ${selectbantype.options[selectbantype.selectedIndex].innerText}</p>
    <p>Millage: ${selectkm.value}</p> <p>Engine: ${selectengine.value}</p>`
    

    // console.log(selectyear.value);
})
