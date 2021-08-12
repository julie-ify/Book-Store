const listBut = document.querySelector('.item1');
const addNewBut = document.querySelector('.item2');
const contBut = document.querySelector('.item3');
const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');
const sec3 = document.querySelector('.sec3');

listBut.addEventListener('click', () => {
  sec2.classList.add('d-none');
  sec3.classList.add('d-none');
  sec1.classList.remove('d-none');
  addNewBut.classList.remove('current');
  listBut.classList.add('current');
  contBut.classList.remove('current');
});
addNewBut.addEventListener('click', () => {
  sec1.classList.add('d-none');
  sec3.classList.add('d-none');
  sec2.classList.remove('d-none');
  addNewBut.classList.add('current');
  listBut.classList.remove('current');
  contBut.classList.remove('current');
});
contBut.addEventListener('click', () => {
  sec2.classList.add('d-none');
  sec1.classList.add('d-none');
  sec3.classList.remove('d-none');
  addNewBut.classList.remove('current');
  listBut.classList.remove('current');
  contBut.classList.add('current');
});