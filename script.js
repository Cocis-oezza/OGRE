function generaNumero() {
  const numeroCasuale = Math.floor(Math.random() * 20) + 1;
  document.getElementById('numero').textContent = numeroCasuale;
}