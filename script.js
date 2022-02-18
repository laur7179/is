const btn = document.querySelector('button');
const ul = document.querySelector('nav');

// Burger-menu

function toggleMenu() {
  console.log('test');
  ul.classList.toggle('shown');

  const menu = ul.classList.contains('shown');

  if (menu) {
    // hvis det er sandt, at ul har klassen "shown"  //   .. Så vil jeg gerne have at min menuknaps indhold er lig med burger-ikon.Hvis IKKE, menu indeholder hidden, og det altså er "falsk", så skal der i stedet for, vises et kryds.
    //btn.textContent = "Luk";
    btn.classList.add('open');
  } else {
    // hvis IKKE ul har klassen "shown", så skal den vise burger-menuen
    //btn.textContent = "Menu";
    btn.classList.remove('open');
  }
}

// Lytter efter button, og fortælller at når der klikkes på den skal den kalde på toggleMenu-funktionen
btn.addEventListener('click', toggleMenu);
