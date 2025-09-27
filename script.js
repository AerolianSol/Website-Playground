// Small JS for theme toggle, smooth scrolling, and form stub
document.addEventListener('DOMContentLoaded', ()=>{
  const themeToggle = document.getElementById('theme-toggle');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  // Apply saved theme
  const saved = localStorage.getItem('theme');
  if(saved === 'dark') document.documentElement.classList.add('dark');

  themeToggle.addEventListener('click', ()=>{
    const isDark = document.documentElement.classList.toggle('dark');
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.textContent = isDark ? 'Light Mode ☀️' : 'Dark Mode 🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // Simple contact form handler
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };
    if(!data.email){
      alert('Please enter an email.');
      return;
    }
    // This is a stub — replace with real submit logic
    alert('Thanks, ' + (data.name || 'friend') + '! (form submission stub)');
    form.reset();
  });
});