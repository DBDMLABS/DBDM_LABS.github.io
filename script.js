const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const modal = document.getElementById('appointmentModal');
const openBtn = document.getElementById('openAppointment');
const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); };
openBtn?.addEventListener('click', () => { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); });
document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

document.getElementById('appointmentForm')?.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formSuccess').classList.add('show');
  e.target.querySelector('button[type="submit"]').textContent = 'Request saved ✓';
});

const year = new Date().getFullYear();
document.querySelector('footer p').innerHTML = `© ${year} DBDM Labs. All rights reserved. · Data Science · AI · Analytics`;
