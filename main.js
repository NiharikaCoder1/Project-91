function login(){
  p1n =  document.getElementById('player1').value;
  p2n =  document.getElementById('player2').value;
  localStorage.setItem('p1n', p1n);
  localStorage.setItem('p2n', p2n);
  window.location='game_page.html';
}