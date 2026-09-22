const menu=document.getElementById('menu');
const links=document.getElementById('navLinks');
if(menu&&links){menu.addEventListener('click',()=>links.classList.toggle('open'));links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')))}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('reveal')}),{threshold:.08});
document.querySelectorAll('.metric-grid article,.case,.cap-list>div').forEach(el=>observer.observe(el));
