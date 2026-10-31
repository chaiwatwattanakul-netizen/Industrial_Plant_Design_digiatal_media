(()=>{
'use strict';
const cfg=window.IPD_CONFIG;
if(!cfg||!Array.isArray(cfg.weeks)){console.error('Missing js/config.js');return}
const $=sel=>document.querySelector(sel);
const grid=$('#weekGrid'),search=$('#lessonSearch'),filters=$('#phaseFilters'),counter=$('#availableCount'),results=$('#resultsCount'),empty=$('#noResults'),dialog=$('#missingDialog');
const phaseLabels={foundation:'01 · พื้นฐาน',analysis:'02 · วิเคราะห์',design:'03 · ออกแบบ',application:'04 · ประยุกต์',exam:'EXAM · การสอบ'};
let activePhase='all';
let states=new Map();
const visitedKey='ipd-hub-opened-weeks-v1';
let visited=[];
try{visited=JSON.parse(localStorage.getItem(visitedKey)||'[]');if(!Array.isArray(visited))visited=[]}catch{visited=[]}
const safe=(s)=>String(s??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const lessonUrl=(week)=>{try{return new URL(week.file,document.baseURI).href}catch{return '#'}};
function statusFor(week){return states.get(week.week)||'checking'}
function statusHTML(week){let st=statusFor(week);let done=visited.includes(week.week);const label=st==='ready'?(done?'พร้อมเรียน · เคยเปิดแล้ว':'พร้อมเรียน'):st==='missing'?'รออัปโหลดไฟล์':'ตรวจสอบไฟล์…';return `<span class="lesson-status ${st==='ready'?'is-available':'is-unavailable'} ${done?'is-visited':''}" aria-label="${safe(label)}">${safe(label)}</span>`}
function card(week){const number=String(week.week).padStart(2,'0');const st=statusFor(week);const href=lessonUrl(week);return `<article class="week-card phase-${safe(week.phase)} ${st==='missing'?'is-not-ready':''}" data-week="${week.week}">
 <div class="card-upper"><div class="card-labels"><span class="week-badge">WEEK <span>${number}</span></span><div class="phase-name">${safe(phaseLabels[week.phase])}</div></div><img class="card-image" loading="eager" src="assets/icons/week-${number}.svg" alt="ภาพไอคอนประกอบสัปดาห์ที่ ${week.week}"></div>
 <div class="card-body"><h3 class="card-title">${safe(week.title)}</h3><p class="card-en">${safe(week.en)}</p><div class="card-topics">${week.topics.map(t=>`<span class="card-topic">${safe(t)}</span>`).join('')}</div><p class="card-description">${safe(week.summary)}</p></div>
 <div class="card-bottom">${statusHTML(week)}<a class="lesson-visit" href="${safe(href)}" aria-label="เปิดบทเรียนสัปดาห์ที่ ${week.week}: ${safe(week.title)}" data-open="${week.week}">${week.exam?'รายละเอียดสอบ':'เปิดบทเรียน'} <span class="arr" aria-hidden="true">↗</span></a></div></article>`}
function render(){const query=search.value.trim().toLocaleLowerCase('th');const filtered=cfg.weeks.filter(w=>(activePhase==='all'||w.phase===activePhase)&&(!query||[w.week,w.title,w.en,w.summary,...w.topics].join(' ').toLocaleLowerCase('th').includes(query)));grid.innerHTML=filtered.map(card).join('');results.textContent=`แสดง ${filtered.length} จาก ${cfg.weeks.length} สัปดาห์`;empty.hidden=filtered.length>0;const count=cfg.weeks.filter(w=>states.get(w.week)==='ready').length;const hasPending=cfg.weeks.some(w=>!states.has(w.week));counter.textContent=hasPending?'…':count.toString().padStart(2,'0');}
function showMissing(week){$('#missingTitle').textContent=`สัปดาห์ที่ ${week.week} ยังไม่เปิดบทเรียน`;$('#missingDesc').textContent=`ยังไม่พบไฟล์ HTML ของ “${week.title}” บนเว็บไซต์ กรุณาอัปโหลดไฟล์บทเรียนให้ตรงกับชื่อด้านล่าง แล้วรีเฟรชเว็บไซต์`;
$('#missingPath').textContent=week.file;if(typeof dialog.showModal==='function')dialog.showModal();else alert('ยังไม่พบไฟล์บทเรียน: '+week.file)}
grid.addEventListener('click',e=>{const link=e.target.closest('[data-open]');if(!link)return;const week=cfg.weeks.find(w=>w.week===Number(link.dataset.open));if(!week)return;if(states.get(week.week)!=='ready'){e.preventDefault();showMissing(week);return}if(!visited.includes(week.week)){visited.push(week.week);try{localStorage.setItem(visitedKey,JSON.stringify(visited))}catch{}}});
filters.addEventListener('click',e=>{let b=e.target.closest('button[data-phase]');if(!b)return;activePhase=b.dataset.phase;filters.querySelectorAll('button').forEach(btn=>{const yes=btn===b;btn.classList.toggle('active',yes);btn.setAttribute('aria-pressed',String(yes))});render()});
search.addEventListener('input',render);
$('#resetFilters').addEventListener('click',()=>{search.value='';filters.querySelector('[data-phase="all"]').click();search.focus()});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&!dialog.open){e.preventDefault();search.focus()}if(e.key==='Escape'&&document.activeElement===search){search.blur()}});
$('#year').textContent=new Date().getFullYear();

// GitHub Pages: same-origin relative resources can be checked via HEAD.
// Absolute external URLs are treated as ready (cross-origin HEAD would be blocked by CORS).
// While opening index.html locally, no network fetch is possible; show 'upload' state.
async function checkLesson(week){if(week.published===true)return 'ready';if(week.published===false)return 'missing';
 const target=lessonUrl(week);const external=new URL(target).origin!==location.origin;
 if(external&&location.protocol!=='file:')return 'ready';
 if(location.protocol==='file:')return 'missing';
 try{const response=await fetch(target,{method:'HEAD',cache:'no-store'});return response.ok?'ready':'missing'}catch{return 'missing'}
}
render();
Promise.all(cfg.weeks.map(async week=>{const st=await checkLesson(week);states.set(week.week,st);const old=document.querySelector(`.week-card[data-week="${week.week}"]`);if(old){const replacement=document.createElement('div');replacement.innerHTML=card(week);old.replaceWith(replacement.firstElementChild)}counter.textContent=cfg.weeks.filter(w=>states.get(w.week)==='ready').length.toString().padStart(2,'0')})).then(()=>render());
})();
