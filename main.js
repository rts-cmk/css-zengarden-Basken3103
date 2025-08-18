const pageWrapper = document.querySelector(".page-wrapper")
const intro = pageWrapper.querySelector(".intro")
const main = pageWrapper.querySelector(".main")
const sidebar = pageWrapper.querySelector(".sidebar")
const url = "data/data.json"

const introDom = pageWrapper.querySelector(".intro")
console.log(introDom);


fetch(url)
    .then(respons => {
        return respons.json()
    })
    .then(data => {
        handleIntro(data)
    })


function handleIntro(data) {
    // let allP = ""
    // data.summary.paragraphs.forEach(paragraf => {
    //     allP += `<p>paragraf</p>`
    // });

    // console.log(allP);
    console.log(data.intro.summary.paragraphs);

    let introString = /*html*/ ` 
    <header role="banner">
       <h1>${data.intro.header.h1}</h1>
       <h2>${data.intro.header.h2}</h2>
    </header> 
    <div class="summary" id="zen-summary" role="article">
        ${data.intro.summary.paragraphs.map((paragraf) => { return `<p>${paragraf}</p>` }).join("")}
    </div>
    `


    // introDom.innerHTML += intro
    introDom.insertAdjacentHTML("beforeEnd", introString)

}


