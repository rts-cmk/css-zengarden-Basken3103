const pageWrapper = document.querySelector(".page-wrapper")
const intro = pageWrapper.querySelector(".intro")
const main = pageWrapper.querySelector(".main")
const sidebar = pageWrapper.querySelector(".sidebar")
const url = "/data/data.json"

fetch(url)
    .then(respons => {
        return respons.json()
    })
    .then(data => {
        console.log(data);

    })


