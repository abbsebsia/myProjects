let qrInput = document.getElementById('qrInput')
let passwordEl = document.getElementById('selectPassword')

if(passwordEl.value == 'password'){
    console.log('type password')
    qrInput.setAttribute('type','password');
}

var container = document.getElementById('container')

function changeInputType(){
    
    if(passwordEl.value == 'password'){
        qrInput.setAttribute('type','password');
    }else{
        qrInput.setAttribute('type','text');
    }
}

var idList = [0]

function addQR() {

    var data = qrInput.value
    var size = document.getElementById('selectSize').value
    let currentId = (idList.length + 1).toString()
    var type = document.getElementById('selectType').value
    var textPosition = document.getElementById('selectText').value
    var isPassword = document.getElementById('selectPassword').value

    if (type === 'qrcode') {

        if (textPosition == 'above') {
            container.innerHTML += `<div id="${currentId}" style=" height: fit-content;
            width: fit-content;
            padding: 1rem;
            margin: 1rem;
            display: flex;
            flex-direction: column;
            align-items:center;
            border: black solid 1px;"
            >
                <p class="qrText">${data}</p>
            </div>`
        } else {
            container.innerHTML += `<div id="${currentId}" style=" height: fit-content;
            width: fit-content;
            padding: 1rem;
            margin: 1rem;
            display: flex;
            flex-direction: column-reverse;
            align-items:center;
            border: black solid 1px;"
            >
                <p class="qrText">${data}</p>
            </div>`
        }
        if(isPassword == 'password'){
            console.log(document.getElementById(currentId).children[0].innerHTML = 'password')
        }

        var qrCodeDiv = document.getElementById(currentId)
        var qrElem = new QRCode(qrCodeDiv)


        console.log(data, qrElem, 'size', size, 'type', type, 'textPos: ', textPosition, 'pass', isPassword)
        idList.push(currentId)

        qrElem.makeCode(data)

        qrCodeDiv.children[2].style.width = size
        qrCodeDiv.children[2].style.height = size
    } else {

        container.innerHTML += `<div id="${currentId}" class="qrCode"><svg id="svg${currentId}"></svg></div>`

        JsBarcode(`#svg${currentId}`, data);


        console.log(data, 'size', size, 'type', type)
        idList.push(currentId)


        // qrCodeDiv.children[2].style.width = size
        // qrCodeDiv.children[2].style.height = size
    }


}

function printContent() {
    var restorepage = document.body.innerHTML;

    for (let i = 0; i < document.getElementById('pageContent').children.length; i++) {
        let current = document.getElementById('pageContent').children[i]
        if (current.innerHTML !== container.innerHTML) {
            current.style.visibility = 'hidden'
        }
    }

    document.getElementById('printBTN').style.visibility = 'hidden'
    window.print()
    for (let i = 0; i < document.getElementById('pageContent').children.length; i++) {
        let current = document.getElementById('pageContent').children[i]
        if (current.innerHTML !== container.innerHTML) {
            current.style.visibility = 'visible'
        }
    }

    document.getElementById('printBTN').style.visibility = 'visible'



}