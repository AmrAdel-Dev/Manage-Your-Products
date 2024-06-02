let container = document.getElementById('container')
let addBtn = document.getElementById('addBtn')
let delBtn = document.getElementById('delBtn')
let clearBtn = document.getElementById('clearBtn')

window.onload = function(){
    if (!window.localStorage.getItem('id')) {
        window.localStorage.setItem('id', 0)
        container.style.padding = '40px 0px'
    }
    for (let i = 0; i < window.localStorage.id; i++) {
        let div = document.createElement('div')
        div.className = `product${i}`
        let nameArea = document.createElement('div')
        let nameh2 = document.createElement('h2')
        let nameVal = document.createTextNode(`${window.localStorage.getItem(`name${i}`)}`)
        nameh2.appendChild(nameVal)
        nameArea.appendChild(nameh2)
        nameArea.className = 'nameArea'
    
        let typeArea = document.createElement('div')
        let typeh2 = document.createElement('h2')
        let typeVal = document.createTextNode(`${window.localStorage.getItem(`type${i}`)}`)
        typeh2.appendChild(typeVal)
        typeArea.appendChild(typeh2)
        typeArea.className = 'typeArea'
    
        let amountArea = document.createElement('div')
        let amountSpan = document.createElement('span')
        let amountVal = document.createTextNode(`${window.localStorage.getItem(`amount${i}`)}`)
        amountSpan.appendChild(amountVal)
        amountArea.appendChild(amountSpan)
        amountArea.className = 'amountArea'
    
        let priceArea = document.createElement('div')
        let priceSpan = document.createElement('span')
        let priceVal = document.createTextNode(`${window.localStorage.getItem(`price${i}`)}`)
        priceSpan.appendChild(priceVal)
        priceArea.appendChild(priceSpan)
        priceArea.className = 'priceArea'
    
        let descP = document.createElement('div')
        let descVal = document.createTextNode(`${window.localStorage.getItem(`desc${i}`)}`)
        descP.appendChild(descVal)
        descP.id = 'descArea'
    
        div.appendChild(nameArea)
        div.appendChild(typeArea)
        div.appendChild(amountArea)
        div.appendChild(priceArea)
        div.appendChild(descP)
        container.appendChild(div)
    
        if (+window.localStorage.id == 0) {
            container.style.padding = '40px 0px'
        } 
        if (+window.localStorage.id >= 1){
            container.style.padding = '10px 0px'
        }
    }
    if (+window.localStorage.id == 0) {
        container.style.padding = '40px 0px'
    } 
    if (+window.localStorage.id >= 1){
        container.style.padding = '10px 0px'
    }
}

addBtn.onclick = function(){
    let nameVal = document.querySelector('#name').value
    let typeVal = document.querySelector('#type').value
    let amountVal = document.querySelector('#amount').value
    let priceVal = document.querySelector('#price').value
    let descVal = document.querySelector('#desc').value
    if (nameVal.length <= 20 && nameVal !== '' && typeVal.length <= 8 && typeVal !== '' && parseInt(amountVal) > 0 && !isNaN(parseInt(amountVal))) {
        if (parseInt(priceVal) > 0 && !isNaN(parseInt(priceVal)) && descVal.length <= 75) {
            window.localStorage.setItem(`name${window.localStorage.id}`,nameVal)
            window.localStorage.setItem(`type${window.localStorage.id}`,typeVal)
            window.localStorage.setItem(`amount${window.localStorage.id}`,amountVal)
            window.localStorage.setItem(`price${window.localStorage.id}`,priceVal)
            window.localStorage.setItem(`desc${window.localStorage.id}`,descVal)

            let div = document.createElement('div')
            div.className = `product${window.localStorage.id}`
            let nameArea = document.createElement('div')
            let nameh2 = document.createElement('h2')
            let nameValue = document.createTextNode(`${nameVal}`)
            nameh2.appendChild(nameValue)
            nameArea.appendChild(nameh2)
            nameArea.className = 'nameArea'

            let typeArea = document.createElement('div')
            let typeh2 = document.createElement('h2')
            let typeValue = document.createTextNode(`${typeVal}`)
            typeh2.appendChild(typeValue)
            typeArea.appendChild(typeh2)
            typeArea.className = 'typeArea'

            let amountArea = document.createElement('div')
            let amountSpan = document.createElement('span')
            let amountValue = document.createTextNode(`${amountVal}`)
            amountSpan.appendChild(amountValue)
            amountArea.appendChild(amountSpan)
            amountArea.className = 'amountArea'

            let priceArea = document.createElement('div')
            let priceSpan = document.createElement('span')
            let priceValue = document.createTextNode(`${priceVal}`)
            priceSpan.appendChild(priceValue)
            priceArea.appendChild(priceSpan)
            priceArea.className = 'priceArea'

            let descP = document.createElement('div')
            let descValue = document.createTextNode(`${descVal}`)
            descP.appendChild(descValue)
            descP.id = 'descArea'

            div.appendChild(nameArea)
            div.appendChild(typeArea)
            div.appendChild(amountArea)
            div.appendChild(priceArea)
            div.appendChild(descP)
            container.appendChild(div)

            ++window.localStorage.id
        }
    }

    if (+window.localStorage.id == 0) {
        container.style.padding = '40px 0px'
    } 
    if (+window.localStorage.id >= 1){
        container.style.padding = '10px 0px'
    }
}

delBtn.onclick = function(){
    let name = document.getElementById('name').value

    for (let i = +window.localStorage.id; i > 0; i--) {
        if (name.toLowerCase() === window.localStorage[`name${i-1}`].toLowerCase()) {
            window.localStorage.removeItem(`name${i-1}`)
            window.localStorage.removeItem(`type${i-1}`)
            window.localStorage.removeItem(`amount${i-1}`)
            window.localStorage.removeItem(`price${i-1}`)
            window.localStorage.removeItem(`desc${i-1}`)

            document.querySelector(`.product${i-1}`).remove()
            --window.localStorage.id
            break
        }
    }

    if (+window.localStorage.id == 0) {
        container.style.padding = '40px 0px'
    } 
    if (+window.localStorage.id >= 1){
        container.style.padding = '10px 0px'
    }
}

clearBtn.onclick = function(){
    window.localStorage.clear()
    window.localStorage.setItem('id', 0)
    container.style.padding = '40px 0px'
    container.innerHTML = ''
}