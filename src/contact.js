import {clearContent} from './clearContent'

function loadContact(){
    clearContent()
    var content = document.querySelector('#container')
    var div1 = document.createElement('div')
    div1.innerHTML = 'first'
    content.appendChild(div1)

    
}


export{ loadContact }