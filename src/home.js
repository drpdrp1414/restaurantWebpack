import {clearContent} from './clearContent'

function loadHome(){
    clearContent()
    var content = document.querySelector('#container')
    var div1 = document.createElement('div')
    div1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec rhoncus orci. Praesent quam quam, euismod vel ornare eu, egestas ac dolor. Nam porttitor, nunc et tristique dignissim, sapien augue imperdiet nisl, posuere placerat eros libero eget lacus. Aliquam in magna congue, sagittis sapien a, eleifend leo. Mauris viverra, quam condimentum scelerisque malesuada, ante erat volutpat ligula, lacinia congue tellus velit eu orci. In a accumsan velit. Suspendisse accumsan massa quis malesuada suscipit.'
    var div2 = document.createElement('div')
    div2.innerHTML = 'Morbi sapien dolor, congue ac lacus in, congue pulvinar nunc. Morbi gravida id turpis ac laoreet. Vestibulum rutrum orci vitae accumsan tempus. Phasellus eu lorem ut urna commodo tincidunt. Fusce sagittis velit quis tortor luctus finibus. Proin tincidunt, orci semper mollis rhoncus, nunc nisl iaculis erat, ut sagittis elit diam non turpis. Mauris fringilla diam vitae quam finibus, quis aliquet lectus pharetra. Cras vitae tincidunt metus.'
    var div3 = document.createElement('div')
    div3.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec rhoncus orci. Praesent quam quam, euismod vel ornare eu, egestas ac dolor. Nam porttitor, nunc et tristique dignissim, sapien augue imperdiet nisl, posuere placerat eros libero eget lacus. Aliquam in magna congue, sagittis sapien a, eleifend leo. Mauris viverra, quam condimentum scelerisque malesuada, ante erat volutpat ligula, lacinia congue tellus velit eu orci. In a accumsan velit. Suspendisse accumsan massa quis malesuada suscipit.'
    content.appendChild(div1)
    content.appendChild(div2)
    content.appendChild(div3)
    
}


export{ loadHome }