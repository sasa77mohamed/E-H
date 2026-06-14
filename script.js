const envelope = document.getElementById('envelope');
const intro = document.getElementById('intro');
const content = document.getElementById('content');

function openInvitation(){
  if(envelope.classList.contains('opened')) return;
  envelope.classList.add('opened');
  setTimeout(()=>{
    intro.classList.add('hidden');
    content.classList.add('show');
    document.body.style.overflow = 'auto';
  }, 700);
}

document.body.style.overflow = 'hidden';
envelope.addEventListener('click', openInvitation);
envelope.addEventListener('keypress', (e)=>{
  if(e.key === 'Enter' || e.key === ' ') openInvitation();
});

// scroll fade-ins
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold:0.15});
document.querySelectorAll('.fade-up').forEach(el=>observer.observe(el));
// ===== Countdown =====
const weddingDate = new Date("2026-07-02T21:00:00").getTime();

const cdDays = document.getElementById('cd-days');
const cdHours = document.getElementById('cd-hours');
const cdMinutes = document.getElementById('cd-minutes');
const cdSeconds = document.getElementById('cd-seconds');

function updateCountdown(){
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if(distance <= 0){
    cdDays.textContent = "00";
    cdHours.textContent = "00";
    cdMinutes.textContent = "00";
    cdSeconds.textContent = "00";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  cdDays.textContent = String(days).padStart(2, '0');
  cdHours.textContent = String(hours).padStart(2, '0');
  cdMinutes.textContent = String(minutes).padStart(2, '0');
  cdSeconds.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);