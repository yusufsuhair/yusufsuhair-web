'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const storageKey = 'vera-demo-workspace-v1';
const defaultState = () => ({academy:'Rysel academy',name:'',contacted:[],courses:[],favorites:[],drafts:{}});
let state = defaultState();
try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
    state = {
      academy:typeof saved.academy === 'string' ? saved.academy.slice(0,60) : state.academy,
      name:typeof saved.name === 'string' ? saved.name.slice(0,60) : '',
      contacted:Array.isArray(saved.contacted) ? saved.contacted.filter(id => Number.isInteger(id) && id >= 0 && id < 6) : [],
      courses:Array.isArray(saved.courses) ? saved.courses.filter(course => course && typeof course.id === 'string' && typeof course.title === 'string' && typeof course.category === 'string').slice(0,50) : [],
      favorites:Array.isArray(saved.favorites) ? saved.favorites.filter(value => typeof value === 'string').slice(0,20) : [],
      drafts:saved.drafts && typeof saved.drafts==='object' && !Array.isArray(saved.drafts) ? Object.fromEntries(Object.entries(saved.drafts).filter(([id,message])=>/^[0-5]$/.test(id)&&typeof message==='string').map(([id,message])=>[id,message.slice(0,2000)])) : {}
    };
  }
} catch { state = defaultState(); }

const learners = [
  {id:0,name:'Sophia Williams',days:2,initials:'SW',color:'sand',course:'UI/UX Design Fundamentals'},
  {id:1,name:'Tony Stark',days:3,initials:'TS',color:'blue',course:'Web Development Bootcamp'},
  {id:2,name:'Matthew J',days:3,initials:'MJ',color:'sand',course:'Digital Marketing Essentials'},
  {id:3,name:'Lisa Fox',days:4,initials:'LF',color:'blue',course:'UI/UX Design Fundamentals'},
  {id:4,name:'Grace Taylor',days:4,initials:'GT',color:'rose',course:'Digital Marketing Essentials'},
  {id:5,name:'Frank Gary',days:5,initials:'FG',color:'green',course:'Web Development Bootcamp'}
];
const courses = [
  {id:'design',title:'UI/UX Design Fundamentals',category:'Design',lessons:8,learners:34,progress:68},
  {id:'marketing',title:'Digital Marketing Essentials',category:'Marketing',lessons:12,learners:48,progress:42},
  {id:'web',title:'Web Development Bootcamp',category:'Development',lessons:16,learners:62,progress:85}
];
const metrics = {
  signups:{label:'New signups',values:[33,20,27,34,25,18],max:40},
  revenue:{label:'Revenue',values:[3200,1900,2600,3700,2800,2200],max:4000},
  sales:{label:'Product sales',values:[24,16,21,29,19,13],max:35},
  learners:{label:'Active learners',values:[92,120,105,147,132,164],max:200}
};
let selectedMetric = 'signups';
let chartOffset = 0;
let selectedColumn = 3;
let storyIndex = 0;
let toastTimer;
let previousFocus;
const dialog = $('#app-dialog');

function toast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove('visible'), 3800);
}

function persist() {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); return true; }
  catch { return false; }
}

function renderLearners() {
  $$('.learner-list').forEach(list => {
    const shown = list.dataset.learners === 'mini' ? learners.slice(0,5) : learners;
    list.innerHTML = shown.map(person => {
      const contacted = state.contacted.includes(person.id);
      return `<div class="learner"><span class="avatar avatar-${person.color}" aria-hidden="true">${person.initials}</span><span class="learner-details"><strong>${person.name}</strong><small>${contacted ? 'Follow-up recorded' : `joined ${person.days} days ago`}</small></span><button class="contact-button${contacted ? ' contacted' : ''}" data-contact="${person.id}" aria-label="${contacted ? 'View follow-up for' : 'Contact'} ${person.name}">${contacted ? 'Done' : 'Contact'}</button></div>`;
    }).join('');
  });
  $('#follow-count').textContent = String(6-state.contacted.length);
  $('#message-count').textContent = String(6-state.contacted.length);
}

function renderWorkspace() {
  $('#academy-name').textContent = state.academy;
  $('#course-count').textContent = String(12+state.courses.length);
  if (state.name) $('.profile strong').textContent = state.name;
  $$('.favorite-list .saved-favorite').forEach(element => element.remove());
  state.favorites.forEach(title => {
    const button = document.createElement('button');
    button.className = 'saved-favorite';
    button.dataset.favoriteTitle = title;
    button.textContent = title;
    $('.favorite-list').append(button);
  });
}

function renderChart() {
  const metric = metrics[selectedMetric];
  const range = Number($('#date-range').value);
  const scale = range === 7 ? .72 : range === 90 ? 1.8 : 1;
  const upper = Math.ceil(metric.max*scale);
  const values = metric.values.map((value,index) => Math.max(1,Math.round((value+chartOffset*(index%2 ? -2 : 2))*scale)));
  const rangeStart = 9+chartOffset*6;
  $('#chart-bars').innerHTML = values.map((value,index) => `<button class="chart-column${index===selectedColumn?' active':''}" data-column="${index}" aria-label="${metric.label}, period ${index+1}: ${selectedMetric==='revenue'?'$':''}${value}"><span class="chart-label">${selectedMetric==='revenue'?'$'+(value/1000).toFixed(1)+'k':value}<small>${range===30?'Jun '+(rangeStart+index):range===7?'Day '+(index+1):'Week '+(index+1)}</small></span><span class="bar" style="--height:${Math.min(82,value/upper*80)}%"></span></button>`).join('');
  $('.chart').setAttribute('aria-label',metric.label+' chart, example data');
  $$('.y-axis span').forEach((element,index,array) => { const value = Math.round(upper*(1-index/(array.length-1))); element.textContent = selectedMetric==='revenue' ? (value===0?'0':(value/1000).toFixed(1)+'k') : value; });
  $('#chart-period').textContent = `${range===30?'June '+rangeStart+'–'+(rangeStart+5):'Last '+range+' days'} · Example activity`;
  $('[data-chart-step="-1"]').disabled=chartOffset<=-1;
  $('[data-chart-step="1"]').disabled=chartOffset>=2;
}

function openDialog(title,body) {
  if (!dialog.open) previousFocus = document.activeElement;
  $('#dialog-content').innerHTML = `<h2 id="dialog-title">${title}</h2>${body}`;
  if (!dialog.open) dialog.showModal();
  const firstField = $('input,textarea,select',dialog);
  if (firstField) firstField.focus();
  else $('.dialog-close').focus();
}

function closeDialog() {
  dialog.close();
  if (previousFocus?.isConnected) previousFocus.focus();
}

function openStart(plan) {
  const title = plan ? `Try the ${escapeHTML(plan)} workspace` : 'A fresh start for your academy';
  openDialog(title,`<p>Name your demo workspace and make yourself at home. This is an interactive preview; no account or payment is required.</p><form id="workspace-form"><div class="form-field"><label class="dialog-label" for="your-name">Your name</label><input id="your-name" name="name" required maxlength="60" autocomplete="given-name" placeholder="Jamie" value="${escapeHTML(state.name)}"></div><div class="form-field"><label class="dialog-label" for="workspace-name">Academy name</label><input id="workspace-name" name="academy" required maxlength="60" placeholder="Your academy" value="${state.name?escapeHTML(state.academy):''}"></div><button class="button button-black dialog-submit" type="submit">Create demo workspace</button></form><p class="dialog-note">Saved only in this browser. No email, password or payment details.</p>`);
}

function openContact(id) {
  const person = learners.find(learner => learner.id===id);
  if (!person) return;
  const contacted = state.contacted.includes(id);
  const draft=state.drafts[id]??`Hi ${person.name.split(' ')[0]}, welcome to ${state.academy}! I noticed you were exploring ${person.course}. Is there anything I can help you with before you get started?`;
  openDialog(`${contacted?'Follow up with':'Say hello to'} ${person.name.split(' ')[0]}`,`<p>${person.name} joined ${person.days} days ago and is interested in ${person.course}.</p><form id="contact-form" data-person-id="${id}"><div class="form-field"><label class="dialog-label" for="follow-message">Your message draft</label><textarea id="follow-message" name="message" required maxlength="2000">${escapeHTML(draft)}</textarea></div><button class="button button-black dialog-submit" type="submit">${contacted?'Update follow-up':'Mark as contacted'}</button></form><p class="dialog-note">Sample learner. This records a demo follow-up in your browser; it does not send a message.</p>`);
}

function openCourse(id) {
  const course = [...courses,...state.courses].find(item => item.id===id);
  if (!course) return;
  openDialog(escapeHTML(course.title),`<p>${escapeHTML(course.category)} · ${course.lessons||0} lessons · ${course.learners||0} sample learners</p><div class="dialog-summary"><strong>Course overview</strong><br>${course.id.startsWith('custom-') ? 'Your new demo course is ready. Add it to Favorites to keep it close.' : 'A practical course with guided lessons, a project to put ideas into practice, and space to learn together.'}</div><ul class="dialog-list"><li><strong>Getting started</strong><small>Welcome, learning goals and course materials</small></li><li><strong>Learn through practice</strong><small>Guided exercises and a small project</small></li><li><strong>Share what you made</strong><small>Peer feedback and the next steps</small></li></ul><div class="dialog-actions"><button class="button button-black" data-save-course="${escapeHTML(course.id)}">Save to Favorites</button><button class="button button-outline" data-action="close">Back to dashboard</button></div><p class="dialog-note">Course content is illustrative. No hosted lessons are connected.</p>`);
}

function showSummary() {
  const pending = 6-state.contacted.length;
  openDialog('A little clarity for today',`<p>Example AI summary · ${$('#date-range').selectedOptions[0].textContent}</p><div class="dialog-summary"><strong>${pending ? pending+' learners could use a hello.' : 'Your follow-up list is all caught up.'}</strong><br>${pending ? 'Start with the people who have been waiting longest. A short, personal note is a good first step.' : 'Every sample learner now has a recorded follow-up. You can revisit a draft whenever you need.'}</div><ul class="dialog-list"><li><strong>18 new signups</strong><small>Recent activity across your sample courses.</small></li><li><strong>2 courses to check in on</strong><small>Digital Marketing and UI/UX Design have learners ready for their next lesson.</small></li><li><strong>4 payments in the example ledger</strong><small>Open Billing to see the sample transactions.</small></li></ul><div class="dialog-actions"><button class="button button-black" data-action="next-follow">${pending?'Open next follow-up':'Review follow-ups'}</button><button class="button button-outline" data-panel="courses">View courses</button></div><p class="dialog-note">Prepared from demonstration data, without a live AI connection.</p>`);
}

const articleContent = {
  storefront:{title:'Give your course a home',body:'Start with one clear learning outcome. Show who the course is for, what they will make, and what they need before joining. A short sample lesson gives people something concrete to judge.',next:'Make the next step easy to find, and make sure a new signup knows when they will hear from you.'},
  welcome:{title:'A warmer welcome for every learner',body:'A helpful first message uses the learner’s name, acknowledges the course they explored, and asks one easy question. Keep it short enough to answer on a phone.',next:'Try the follow-up draft in the dashboard. Personalize the note before you record the example interaction.'},
  cohort:{title:'Make your cohort feel connected',body:'Give everyone a simple way to introduce themselves. A shared question about what they want to learn can make the first conversation easier.',next:'Keep the schedule visible, leave room for questions, and show where people can get help between sessions.'}
};

function openArticle(id) {
  const article = articleContent[id];
  if (!article) return;
  openDialog(article.title,`<p>${article.body}</p><p>${article.next}</p><button class="button button-black" data-action="close">Back to Vera</button><p class="dialog-note">A short preview resource, created for this design concept.</p>`);
}

function showPanel(panel) {
  if (panel==='courses') {
    openDialog('Your courses',`<p>The academy’s example course library${state.courses.length?' and your saved demo courses':''}.</p><ul class="dialog-list">${[...courses,...state.courses].map(course => `<li><button class="link-row" data-course="${escapeHTML(course.id)}"><strong>${escapeHTML(course.title)}</strong><small>${escapeHTML(course.category)} · ${course.lessons||0} lessons</small></button></li>`).join('')}</ul><button class="button button-black dialog-submit" data-action="create-course">Create a course</button>`);
  } else if (panel==='sessions') {
    openDialog('A place to learn together',`<p>Example live sessions for your academy.</p><ul class="dialog-list"><li><strong>Design critique & questions</strong><small>Tuesday · 10:00–11:00 · UI/UX Design</small></li><li><strong>Build your first landing page</strong><small>Wednesday · 14:00–15:30 · Web Development</small></li><li><strong>Office hours with Marcus</strong><small>Friday · 11:00–12:00 · All cohorts</small></li></ul><p class="dialog-note">Illustrative schedule. Meeting links and calendar bookings are not connected.</p>`);
  } else if (panel==='messages') {
    openDialog('Every conversation starts somewhere',`<p>${6-state.contacted.length} sample learners are waiting for a first response.</p><ul class="dialog-list">${learners.map(person => `<li><div class="list-action"><span><strong>${person.name}</strong><small>${state.contacted.includes(person.id)?'Follow-up recorded':'Joined '+person.days+' days ago'}</small></span><button class="button button-outline" data-contact="${person.id}">Open draft</button></div></li>`).join('')}</ul><p class="dialog-note">Drafts are examples. No email or message is sent.</p>`);
  } else if (panel==='analytics') {
    openDialog('See the shape of your academy',`<p>Example performance, last 30 days.</p><ul class="dialog-list"><li><strong>214 total learners</strong><small>12 more than the previous sample period.</small></li><li><strong>76% course completion</strong><small>Completion across the example courses.</small></li><li><strong>${6-state.contacted.length} learners need a follow-up</strong><small>This number updates as you try the contact controls.</small></li></ul><div class="dialog-actions"><button class="button button-black" data-action="view-chart">Explore the chart</button><button class="button button-outline" data-action="summary">Read the summary</button></div>`);
  } else if (panel==='billing') {
    openDialog('Your academy at a glance',`<p>A sample payment ledger. No real transactions.</p><ul class="dialog-list"><li><div class="list-action"><span><strong>UI/UX Design Fundamentals</strong><small>Example enrollment · June 14</small></span><span>$89</span></div></li><li><div class="list-action"><span><strong>Digital Marketing Essentials</strong><small>Example enrollment · June 13</small></span><span>$69</span></div></li><li><div class="list-action"><span><strong>Web Development Bootcamp</strong><small>Example enrollment · June 12</small></span><span>$149</span></div></li><li><div class="list-action"><span><strong>UI/UX Design Fundamentals</strong><small>Example enrollment · June 11</small></span><span>$89</span></div></li></ul><p class="dialog-note">No payment provider or subscription is connected.</p>`);
  } else if (panel==='cohorts') {
    openDialog('Good company makes good learning',`<p>Example groups for your next chapter.</p><ul class="dialog-list"><li><strong>Design explorers</strong><small>34 sample learners · UI/UX Design Fundamentals</small></li><li><strong>Growth lab</strong><small>48 sample learners · Digital Marketing Essentials</small></li><li><strong>Web builders</strong><small>62 sample learners · Web Development Bootcamp</small></li></ul>`);
  } else if (panel==='settings') {
    openDialog('Your demo workspace',`<p>Personalize the preview or clear the changes you made here.</p><div class="dialog-summary"><strong>${escapeHTML(state.academy)}</strong><br>${state.name?escapeHTML(state.name):'Guest preview'} · ${state.courses.length} added courses · ${state.contacted.length} follow-ups recorded</div><div class="dialog-actions"><button class="button button-black" data-action="start">Edit workspace</button><button class="button button-outline" data-action="reset-confirm">Reset demo data</button></div><p class="dialog-note">Only this preview’s local data is affected.</p>`);
  } else if (panel==='notifications') {
    openDialog('A few things worth a look',`<ul class="dialog-list"><li><strong>${6-state.contacted.length} learners need a first reply</strong><small>Open a contact draft to try a follow-up.</small></li><li><strong>2 courses need attention</strong><small>The sample summary has the details.</small></li><li><strong>Your preview is ready</strong><small>Everything here is safe to explore.</small></li></ul><button class="button button-black dialog-submit" data-action="summary">Read the summary</button>`);
  } else if (panel==='resources') {
    openDialog('A little help along the way',`<p>Short, practical notes for people who teach.</p><ul class="dialog-list">${Object.entries(articleContent).map(([key,article])=>`<li><button class="link-row" data-article="${key}"><strong>${article.title}</strong><small>Read the preview note</small></button></li>`).join('')}</ul>`);
  }
}

function handleAction(action) {
  if (action==='start'||action==='workspace') openStart();
  else if (action==='login') {
    if (state.name) openDialog(`Welcome back, ${escapeHTML(state.name.split(' ')[0])}`,`<p>Your ${escapeHTML(state.academy)} demo is saved in this browser.</p><button class="button button-black" data-action="view-chart">Open workspace</button><p class="dialog-note">This is a local demo session, not an authenticated account.</p>`);
    else openDialog('Welcome to your Vera preview',`<p>Explore the sample academy or create a named demo workspace. No login credentials are needed.</p><div class="dialog-actions"><button class="button button-black" data-action="start">Create demo workspace</button><button class="button button-outline" data-action="view-chart">Continue as a guest</button></div>`);
  } else if (action==='close') closeDialog();
  else if (action==='summary') showSummary();
  else if (action==='tour') openDialog('Your academy, in focus',`<p>A few small things you can try right here.</p><ul class="dialog-list"><li><strong>Make sense of the numbers</strong><small>Switch chart tabs or change the date range.</small></li><li><strong>Start a conversation</strong><small>Choose Contact beside a learner to personalize a draft.</small></li><li><strong>Make the space yours</strong><small>Name your academy and create a sample course.</small></li></ul><button class="button button-black dialog-submit" data-action="view-chart">Explore the dashboard</button><p class="dialog-note">A front-end concept with sample data. Changes stay in this browser.</p>`);
  else if (action==='view-chart') { closeDialog(); $('#dashboard').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'}); setTimeout(()=>$('.chart-tabs [aria-selected="true"]').focus({preventScroll:true}),200); }
  else if (action==='next-follow') openContact(learners.find(person=>!state.contacted.includes(person.id))?.id??0);
  else if (action==='follow-help') openDialog('A thoughtful first reply',`<p>This list brings together new learners without a first response. Pick Contact to open a short, editable welcome message.</p><p>Once you mark the follow-up as done, every copy of the list updates. The change is saved locally.</p><button class="button button-black" data-action="next-follow">Try a follow-up</button><p class="dialog-note">The preview uses sample learners and does not send messages.</p>`);
  else if (action==='create-course') openDialog('Make room for something new',`<p>Create a course in your demo library.</p><form id="course-form"><div class="form-field"><label class="dialog-label" for="course-title">Course title</label><input id="course-title" name="title" required maxlength="90" placeholder="Introduction to creative thinking"></div><div class="form-field"><label class="dialog-label" for="course-category">Category</label><select id="course-category" name="category"><option>Design</option><option>Development</option><option>Marketing</option><option>Business</option><option>Creative practice</option></select></div><button type="submit" class="button button-black dialog-submit">Create sample course</button></form><p class="dialog-note">Saved in this browser. Course hosting and lesson uploads are not connected.</p>`);
  else if (action==='favorite') openDialog('Keep it close',`<p>Add a label to the Favorites list in your demo sidebar.</p><form id="favorite-form"><div class="form-field"><label class="dialog-label" for="favorite-title">Favorite name</label><input id="favorite-title" name="title" required maxlength="60" placeholder="My next course"></div><button type="submit" class="button button-black dialog-submit">Add favorite</button></form>`);
  else if (action==='privacy') openDialog('Just a preview, just this browser',`<p>This site does not ask for a password or payment information. Demo workspace names, course titles and completed follow-ups are stored in your browser’s local storage.</p><p>Messages are not sent. No analytics or advertising scripts are included. Fonts and images are served with the page.</p><p>You can remove saved preview data using Reset demo data in the dashboard’s Settings.</p><button class="button button-outline" data-panel="settings">Open preview settings</button>`);
  else if (action==='reset-confirm') openDialog('Start the demo fresh?',`<p>This clears your saved academy name, added courses, favorites and recorded follow-ups from this preview.</p><div class="dialog-actions"><button class="button button-black" data-action="reset">Reset preview</button><button class="button button-outline" data-action="close">Keep my changes</button></div>`);
  else if (action==='reset') { state=defaultState(); const saved=persist(); $('.profile strong').textContent='Jamie Davis'; renderLearners(); renderWorkspace(); closeDialog(); toast(saved?'Demo reset. A fresh start.':'Demo reset for this visit. Browser storage is unavailable.'); }
}

document.addEventListener('click',event => {
  const target = event.target.closest('button,a');
  if (!target) return;
  if (target.dataset.action) handleAction(target.dataset.action);
  else if (target.dataset.contact!==undefined) openContact(Number(target.dataset.contact));
  else if (target.dataset.course) openCourse(target.dataset.course);
  else if (target.dataset.panel) showPanel(target.dataset.panel);
  else if (target.dataset.article) openArticle(target.dataset.article);
  else if (target.dataset.plan) openStart(target.dataset.plan);
  else if (target.dataset.person) openDialog(escapeHTML(target.dataset.person),'<p>Sample instructor · Design & creative practice</p><div class="dialog-summary">Marcus leads the UI/UX Design cohort and hosts weekly office hours for learners.</div><button class="button button-black" data-panel="sessions">View example sessions</button>');
  else if (target.dataset.favoriteTitle) openDialog(escapeHTML(target.dataset.favoriteTitle),'<p>A saved label in your demo workspace.</p><button class="button button-outline" data-panel="courses">Browse your courses</button>');
  else if (target.dataset.saveCourse) {
    const course=[...courses,...state.courses].find(item=>item.id===target.dataset.saveCourse);
    if (course&&!state.favorites.includes(course.title)) { state.favorites.push(course.title);const saved=persist();renderWorkspace();toast(saved?'Saved to Favorites.':'Added for this visit. Browser storage is unavailable.'); }
    else toast('Already in your Favorites.');
  } else if (target.dataset.metric) {
    selectedMetric=target.dataset.metric;
    $$('.chart-tabs button').forEach(button=>{const selected=button===target;button.setAttribute('aria-selected',selected);button.tabIndex=selected?0:-1;});
    renderChart();
  } else if (target.dataset.column!==undefined) { selectedColumn=Number(target.dataset.column);renderChart(); }
  else if (target.dataset.chartStep) {chartOffset=Math.min(2,Math.max(-1,chartOffset+Number(target.dataset.chartStep)));renderChart();}
  else if (target.dataset.slide) {
    storyIndex=storyIndex===0?1:0;
    const track=$('.story-track');
    const distance=$('.story-crona').getBoundingClientRect().width+parseFloat(getComputedStyle(track).gap);
    const maxDistance=track.scrollWidth-$('.story-viewport').clientWidth;
    track.style.transform=`translateX(-${storyIndex?Math.min(distance,maxDistance):0}px)`;
  } else if (target.dataset.story) {
    const name=target.dataset.story==='crona'?'Crona':'Zantic';
    openDialog(`${name}, a possible next chapter`, `<p>This academy story is an illustrative example from the original design, not a verified customer endorsement.</p><div class="dialog-summary">${name==='Crona'?'Crona shows how a growing academy could bring course activity and learner follow-ups into a shared workspace.':'Zantic imagines a shared home for instructors, teams and connected cohorts.'}</div><p>The figures in the story panel are sample content. Replace them with verified results before using this page commercially.</p><button class="button button-black" data-action="view-chart">Try the workspace</button>`);
  }
  if (target.matches('#navigation a[href^="#"]')) closeMenu();
});

document.addEventListener('submit',event => {
  const form=event.target;
  if (!['workspace-form','contact-form','course-form','favorite-form'].includes(form.id)) return;
  event.preventDefault();
  const data=new FormData(form);
  if (form.id==='workspace-form') {
    const name=String(data.get('name')).trim();const academy=String(data.get('academy')).trim();
    if (!name||!academy) {toast('Enter your name and an academy name.');return;}
    state.name=name;state.academy=academy;const saved=persist();renderWorkspace();closeDialog();$('#dashboard').scrollIntoView({behavior:'smooth'});toast(saved?`Welcome to ${academy}. Your demo is ready.`:'Your demo is ready for this visit. Browser storage is unavailable.');
  } else if (form.id==='contact-form') {
    if (!String(data.get('message')).trim()) {toast('Add a message before recording the follow-up.');return;}
    const id=Number(form.dataset.personId);if (!state.contacted.includes(id)) state.contacted.push(id);
    state.drafts[id]=String(data.get('message')).trim();
    const saved=persist();renderLearners();closeDialog();toast(saved?'Demo follow-up recorded. No message was sent.':'Follow-up recorded for this visit. No message was sent.');
  } else if (form.id==='course-form') {
    const title=String(data.get('title')).trim();if (!title){toast('Give your course a title.');return;}
    const course={id:'custom-'+Date.now(),title,category:String(data.get('category')),lessons:0,learners:0};
    state.courses.push(course);const saved=persist();renderWorkspace();openCourse(course.id);toast(saved?'Your sample course is ready.':'Course created for this visit. Browser storage is unavailable.');
  } else {
    const title=String(data.get('title')).trim();if (!title){toast('Enter a name for your favorite.');return;}
    if (!state.favorites.includes(title)) state.favorites.push(title);
    const saved=persist();renderWorkspace();closeDialog();toast(saved?'Added to Favorites.':'Added for this visit. Browser storage is unavailable.');
  }
});

function closeMenu() {
  $('#navigation').classList.remove('open');
  $('.menu-toggle').setAttribute('aria-expanded','false');
  $('.menu-toggle').setAttribute('aria-label','Open menu');
  $('#feature-links').hidden=true;
  $('#features-toggle').setAttribute('aria-expanded','false');
}
$('.menu-toggle').addEventListener('click',()=>{const isOpen=$('#navigation').classList.toggle('open');$('.menu-toggle').setAttribute('aria-expanded',String(isOpen));$('.menu-toggle').setAttribute('aria-label',isOpen?'Close menu':'Open menu');});
$('#features-toggle').addEventListener('click',()=>{const links=$('#feature-links');links.hidden=!links.hidden;$('#features-toggle').setAttribute('aria-expanded',String(!links.hidden));});
document.addEventListener('click',event=>{if(!event.target.closest('.nav-dropdown')){$('#feature-links').hidden=true;$('#features-toggle').setAttribute('aria-expanded','false');}if(!event.target.closest('.search-wrap'))$('#search-results').hidden=true;});
$('.dialog-close').addEventListener('click',closeDialog);
dialog.addEventListener('click',event=>{if(event.target===dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)closeDialog();}});
dialog.addEventListener('close',()=>{if(previousFocus?.isConnected)previousFocus.focus();});
$('#date-range').addEventListener('change',renderChart);
$('.chart-tabs').addEventListener('keydown',event=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;event.preventDefault();const tabs=$$('.chart-tabs button');let index=tabs.indexOf(document.activeElement);index=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[index].click();tabs[index].focus();});
document.addEventListener('keydown',event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'&&!dialog.open){event.preventDefault();$('#dashboard').scrollIntoView({behavior:'instant'});$('#dashboard-search').focus();}if(event.key==='Escape'){closeMenu();$('#search-results').hidden=true;}});
$('#dashboard-search').addEventListener('input',event=>{
  const query=event.target.value.trim().toLowerCase();const results=$('#search-results');
  if(!query){results.hidden=true;return;}
  const matches=[...learners.filter(person=>person.name.toLowerCase().includes(query)).map(person=>`<button data-contact="${person.id}"><strong>${person.name}</strong><small>Sample learner · ${person.course}</small></button>`),...[...courses,...state.courses].filter(course=>course.title.toLowerCase().includes(query)).map(course=>`<button data-course="${escapeHTML(course.id)}"><strong>${escapeHTML(course.title)}</strong><small>Course · ${escapeHTML(course.category)}</small></button>`)];
  results.innerHTML=matches.length?matches.join(''):'<p>No matches yet.<br>Try a learner name or course title.</p>';results.hidden=false;
});
$('#search-results').addEventListener('click',event=>{if(event.target.closest('button'))$('#search-results').hidden=true;});
window.addEventListener('resize',()=>{if(storyIndex){storyIndex=0;$('.story-track').style.transform='translateX(0)';}if(window.innerWidth>720)closeMenu();});
renderLearners();
renderWorkspace();
renderChart();
