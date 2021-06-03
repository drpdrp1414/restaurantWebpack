import {clearContent} from './clearContent'

function loadMenu(){
    clearContent()
    var content = document.querySelector('#container')
    var div1 = document.createElement('div')
    div1.innerHTML = 'first'
    var div2 = document.createElement('div')
    div2.innerHTML = 'open'
    var div3 = document.createElement('div')
    div3.innerHTML = 'test'
    content.appendChild(div1)
    content.appendChild(div2)
    content.appendChild(div3)
}

export{ loadMenu }