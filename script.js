(function() {
  const title = document.getElementById('station-title');
  const player = document.getElementById('player');
  const now = document.getElementById('now-playing');
  const tabs = Array.from(document.querySelectorAll('.tab'));

  function setStation(idx) {
    const st = STATIONS[idx];
    title.textContent = st.name;
    player.src = st.url;
    now.textContent = st.tagline || 'En vivo';
    tabs.forEach(t => t.classList.remove('active'));
    tabs[idx].classList.add('active');
    try { player.play(); } catch(e) {}
  }

  tabs.forEach(t => t.addEventListener('click', () => setStation(parseInt(t.dataset.station,10))));
  setStation(0);
})();