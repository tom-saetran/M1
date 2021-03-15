const changeHeaderText = () => {
    let h1 = document.getElementById("head-text")
    h1.innerText = "I changed just for you."
}

const changeBodyColor = () => {
    document.getElementsByTagName("body")[0].style.backgroundColor === "" ?
    document.getElementsByTagName("body")[0].style.backgroundColor = "black" :
    document.getElementsByTagName("body")[0].style.backgroundColor = ""
}

const changeFooterAddress = () => {
    let footer = document.getElementById("address")

    footer.innerHTML = "<h4>Fake address:</h4>FakeStreet n\n9999 FakeWhere\nFakeCountry"
}

const addClassToAmazonLinks = () => {
    let pointers = document.getElementsByTagName("a")

    for (let i = 0; i < pointers.length; i++) {
        pointers[i].parentElement.classList.add("amazon-link")
    }
}

const hideImages = () => {
    let imageArray = document.getElementsByTagName("img")

    for (let i = 0; i < imageArray.length; i++) {
        imageArray[i].classList.toggle("hidden")
    }
}

const randomPriceColor = () => {
    let priceTable = document.getElementsByClassName("price")

    for (let i = 0; i < priceTable.length; i++) {
        priceTable[i].style.color = "#" + Math.floor(Math.random()*16777215).toString(16)
    }
}