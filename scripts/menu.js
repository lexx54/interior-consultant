const d=document,
$menuIC='<i class="fas fa-bars"></i>',
$cancelIc='<i class="fas fa-times"></i>',
$menuBtn=d.querySelector(".menu");

export function display(){
  const $move=d.querySelector(".nav-options");
  $move.classList.toggle("nav-move");

  $move.classList.contains("nav-move")
    ?$menuBtn.innerHTML=`${$cancelIc}`
    :$menuBtn.innerHTML=`${$menuIC}`;
  console.log("display")
}