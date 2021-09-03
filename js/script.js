function displayList() {

  const lst = document.querySelectorAll("#curiosidades-lista dt");
  lst[0].classList.add('ativo');
  lst[0].nextElementSibling.classList.add('ativo');
  lst.forEach((el) => {
    el.addEventListener('click', function()  { 
      el.classList.toggle('ativo');
      el.nextElementSibling.classList.toggle('ativo');
    })
  })
}

displayList();
