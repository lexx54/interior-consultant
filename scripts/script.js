import { contactMaker } from "./contact.js";
import { display } from "./menu.js";

const d=document;

d.addEventListener("DOMContentLoaded",e=>{
  contactMaker();
})
d.addEventListener("click",e=>{
  if(e.target.matches(".menu") || e.target.matches(".menu i") ) display();

})