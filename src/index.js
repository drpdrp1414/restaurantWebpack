import { loadContact } from './contact'
import {loadHome} from './home'
import {loadMenu} from './menu'
import {loadContact} from './contact'


let home = document.getElementById('home-btn')
home.addEventListener('click', loadHome)

let menu = document.getElementById('menu-btn')
menu.addEventListener('click', loadMenu)

let contact = document.getElementById('contact-btn')
contact.addEventListener('click', loadContact)