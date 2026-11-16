const paths = {
  home: '<path d="m3 10 9-7 9 7M5 9v12h5v-7h4v7h5V9"/>',
  card: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18M6 15h4"/>',
  chart: '<path d="M3 3v18h18M7 15l4-6 4 3 5-7"/>',
  gift: '<rect x="4" y="10" width="16" height="11" rx="1"/><path d="M3 7h18v4H3zM12 7v14"/><path d="M12 7H8a3 3 0 1 1 3-3l1 3Zm0 0h4a3 3 0 1 0-3-3l-1 3Z"/>',
  transfer: '<path d="M4 7h16m-5-5 5 5-5 5M20 17H4m5-5-5 5 5 5"/>',
  file: '<path d="M14 3H5v18h14V8l-5-5Z M14 3v5h5M8 12h8M8 16h5"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  sidebar: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
  plus: '<path d="M12 4v16M4 12h16"/>',
  'chevron-up': '<path d="m6 15 6-6 6 6"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'arrow-up-right': '<path d="M6 18 18 6M6 6h12v12"/>',
  shield: '<path d="m12 3 8 4v6c0 5-8 9-8 9s-8-4-8-9V7l8-4Z"/><path d="m9 12 2 2 4-4"/>',
  message: '<path d="M21 11.5a8.5 8.5 0 0 1-9 8.5 11 11 0 0 1-4-.8L3 21l1.4-5A9 9 0 1 1 21 11.5Z"/>',
  bell: '<path d="M5 16c2-2 1-4 2-8a5 5 0 0 1 10 0c1 4 0 6 2 8H5ZM10 20a2 2 0 0 0 4 0"/>',
  settings: '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z"/><circle cx="12" cy="12" r="3.5"/>',
  sparkle: '<path d="m10 3 2.2 6.8L19 12l-6.8 2.2L10 21l-2.2-6.8L1 12l6.8-2.2L10 3ZM20 17v5M17.5 19.5h5"/>',
  contactless: '<path d="M6 9a5 5 0 0 1 0 6M10 6a9 9 0 0 1 0 12M14 3a13 13 0 0 1 0 18"/>',
  user: '<circle cx="12" cy="7" r="4"/><path d="M4 21c0-10 16-10 16 0"/>',
  coffee: '<path d="M4 8h13v8a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8ZM17 9h2a3 3 0 0 1 0 6h-2M7 3v2M11 2v3"/>',
  music: '<path d="M9 18V5l11-2v13M9 9l11-2"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  building: '<path d="M5 21V3h10v18M15 11h5v10M3 21h19M8 7h3M8 11h3M8 15h3M9 21v-3"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  check: '<path d="m5 12 4 4L20 5"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.card}</svg>`;
const refreshIcons = (root = document) => root.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money = value => `$${Math.abs(value).toLocaleString('en-US', {minimumFractionDigits:2,maximumFractionDigits:2})}`;
const splitMoney = value => { const [whole,cents] = money(value).split('.'); return `${whole}<span>.${cents}</span>`; };
let balance = 579.02;
let income = 1240;
let outflow = 660.98;
let selectedCard = 'platinum';
let currency = 'USD';
let toastTimer;
const cards = {
  platinum: {name:'Platinum Card',number:'4821',type:'Visa',limit:'$5,000.00'},
  virtual: {name:'Virtual Card',number:'1863',type:'Visa',limit:'$1,000.00'},
  debit: {name:'Debit Card',number:'2408',type:'Visa',limit:'$2,500.00'},
  gold: {name:'Gold Card',number:'9286',type:'Mastercard',limit:'$3,000.00'},
  infinite: {name:'Infinite Card',number:'7501',type:'Visa',limit:'$10,000.00'}
};
const transactions = [
  {id:1,name:'Alex Smith',description:'Transfer · Nov 4',amount:5,category:'Income',icon:'user',date:'2026-11-04'},
  {id:2,name:'Add to Invest',description:'Invest balance · Nov 4',amount:-24.01,category:'Pending',icon:'chart',date:'2026-11-04'},
  {id:3,name:'Coffee Lab',description:'Card 4821 · Nov 3',amount:-4.50,category:'Food & Drink',icon:'coffee',date:'2026-11-03'},
  {id:4,name:'Music subscription',description:'Card 4821 · Nov 2',amount:-.99,category:'Subscription',icon:'music',date:'2026-11-02'},
  {id:5,name:'Northwind Ltd',description:'Salary · Nov 1',amount:1240,category:'Income',icon:'building',date:'2026-11-01'}
];

function toast(message) {
  const el = document.querySelector('#toast');
  el.textContent = message; el.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; }, 3600);
}

function miniCharts() {
  const patterns = {balance:[1,1,2,2,2,3,3,4,5],income:[1,1,2,1,2,2,2,4,5],outflow:[5,4,4,3,3,2,2,1,1],portfolio:[1,1,1,2,3,2,3,3,4]};
  document.querySelectorAll('.mini-chart').forEach(el => {
    const negative = el.dataset.chart === 'outflow';
    let squares = '';
    patterns[el.dataset.chart].forEach((h,x) => {
      for (let y=0;y<h;y++) {
        const green = ['#e2f1e6','#d2eea5','#afdcbc','#7ec59e','#469f79','#175d5b','#002f35'];
        const red = ['#fbe5e6','#f9dbba','#f5bec1','#ee9ca6','#e56875','#c24556'];
        const colors = negative ? red : green;
        const index = negative ? Math.max(0,5-Math.floor(x/2)-y) : Math.min(6,Math.max(0,x-y-1));
        squares += `<rect x="${x*9}" y="${(4-y)*9}" width="7.4" height="7.4" rx="1.8" fill="${colors[index]}"/>`;
      }
    });
    el.innerHTML = `<svg viewBox="0 0 81 45">${squares}</svg>`;
  });
}

function flowChart(month=document.querySelector('#month').value) {
  const container=document.querySelector('#flow-chart');
  const width=container.clientWidth;
  const height=container.clientHeight;
  if(!width||!height)return;
  const xFor=col=>61+col*(width-67)/27;
  const yFor=row=>24+row*(height-65)/5;
  const radiusScale=Math.min(1,width/360);
  const months=['Apr','May','Jun','Jul','Aug','Sep','Oct'];
  const labels=['Salary','Received','Food','Subs','Shopping','Sent'];
  const offset = month==='September' ? 3 : month==='August' ? 6 : 0;
  let chart = '<defs><linearGradient id="bubble-shadow" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#244f55" stop-opacity=".09"/><stop offset="1" stop-color="#244f55" stop-opacity="0"/></linearGradient></defs>';
  for (let c=0;c<28;c++) {
    const x=xFor(c);
    chart += `<line x1="${x}" y1="6" x2="${x}" y2="${height-23}" stroke="#637d83" stroke-opacity="${c>23?.20:.10}" stroke-width="1"/>`;
  }
  labels.forEach((label,row) => {
    const y=yFor(row);
    chart += `<text x="1" y="${y+4}" fill="#52747b" font-size="11" font-family="DM Sans">${label}</text>`;
    for (let col=0;col<28;col++) {
      const x=xFor(col);
      let r=0;
      if(row===0 && col%4===2) r=11+(col/4)*.8;
      if(row===1 && (col%3===0 || col%5===0)) r=2.2+((col+2)%4)*.55;
      if(row===2) r=2.1+(col%5)*.25;
      if(row===3 && col%3!==1 && col%4!==3) r=1.6;
      if(row===4 && col%5!==0 && col%4!==0 && col%6!==0) r=3+((col+offset)%4)*.75;
      if(row===5 && (col%5===0 || col%3===0 || col===26)) r=4.5+((col+offset)%3)*1;
      if(r) {
        r*=radiusScale;
        const fill=row<2?'#002f35':'#e9606d';
        const opacity=col>23?1:row<2?.34:.39;
        if(row===0) chart += `<rect x="${x-r}" y="${y}" width="${r*2}" height="70" fill="url(#bubble-shadow)"/>`;
        chart += `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" opacity="${opacity}"><title>${label}, ${months[Math.min(6,Math.floor(col/4))]}: illustrative amount</title></circle>`;
      }
    }
  });
  months.forEach((m,i) => {chart += `<text x="${xFor(1.5+i*4)}" y="${height-6}" fill="${i===6?'#002f35':'#52747b'}" text-anchor="middle" font-size="11" font-family="DM Sans">${m}</text>`;});
  container.innerHTML=`<svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet">${chart}</svg>`;
}

function spendingChart() {
  let dots='';
  [78,90,102].forEach((radius,row) => {
    const count=24+row*3;
    for(let n=0;n<=count;n++) {
      const angle=Math.PI+n/count*Math.PI;
      const x=110+Math.cos(angle)*radius;
      const y=110+Math.sin(angle)*radius;
      const t=n/count;
      const color=t<.58?'#002f35':'#83c69c';
      const opacity=t<.18?.35+t*3.6:t>.86?1-(t-.86)*4:1;
      dots+=`<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="4" fill="${color}" opacity="${opacity.toFixed(2)}"/>`;
    }
  });
  document.querySelector('#spending-chart').innerHTML=`<svg viewBox="0 0 220 116">${dots}</svg>`;
}

function monthlyChart() {
  const heights=[2,1,2,1,4,2,3,4,3,5,3,3,5,3,6,5,4,7,4,4,6,5,7,7,7,10,9,10];
  let squares='';
  heights.forEach((height,col) => {
    for(let row=0;row<10;row++) {
      const on=row>=10-height;
      const top=row===10-height;
      const outline=on&&(col*7+row*3)%11===0;
      let fill=on?(top&&height>=4&&col%3===1?'#002f35':col>23?'#50aa81':'#86c79f'):'#e1eaee';
      if(outline) fill='transparent';
      squares+=`<rect x="${col*10}" y="${row*10}" width="8" height="8" rx="1.7" fill="${fill}" ${outline?'stroke="#3d9e77" stroke-width="1.1"':''}/>`;
    }
  });
  document.querySelector('#monthly-chart').innerHTML=`<svg viewBox="0 0 278 98">${squares}</svg>`;
}

function transactionMarkup(t) {
  return `<button class="transaction" data-transaction="${t.id}" aria-label="${escapeHTML(t.name)}, ${t.amount>0?'received':'spent'} ${money(t.amount)}"><span class="transaction-icon"><i>${icon(t.icon)}</i></span><span class="transaction-description"><strong>${escapeHTML(t.name)}</strong><small>${escapeHTML(t.description)}</small></span><span class="transaction-amount"><strong class="${t.amount>0?'positive':''}">${t.amount>0?'+':'−'}${splitMoney(t.amount)}</strong><small>${t.category==='Pending'?'<em class="pending-dot"></em>':''}${escapeHTML(t.category)}</small></span></button>`;
}

function renderTransactions() {
  document.querySelector('#recent-transactions').innerHTML=transactions.slice(0,5).map(transactionMarkup).join('');
  const query=document.querySelector('#transaction-search').value.toLowerCase();
  const filter=document.querySelector('#transaction-filter').value;
  const filtered=transactions.filter(t=>(`${t.name} ${t.category} ${t.description}`.toLowerCase().includes(query))&&(filter==='all'||(filter==='income'?t.amount>0:t.amount<0)));
  document.querySelector('#all-transactions').innerHTML=filtered.length?filtered.map(transactionMarkup).join(''):'<div class="empty-state"><h3>No matching transactions</h3><p>Try another name or select a different transaction type.</p><button class="pill" data-action="clear-filters">Clear filters</button></div>';
}

function showView(view) {
  document.querySelector('#overview-view').hidden=view!=='overview';
  document.querySelector('#activity-view').hidden=view!=='activity';
  document.querySelectorAll('.top-nav [data-view]').forEach(el=>el.classList.toggle('active',el.dataset.view===view));
  document.querySelector('.side-link[data-view="overview"]').classList.toggle('active',view==='overview');
  closeMobileMenu();
  if(view==='activity') renderTransactions();
}

const dialog=document.querySelector('#app-dialog');
function openDialog(title,html) {
  document.querySelector('#dialog-title').textContent=title;
  document.querySelector('#dialog-body').innerHTML=html;
  refreshIcons(dialog);
  closeMobileMenu();
  if(!dialog.open) dialog.showModal();
}
function details(rows) {return `<dl class="detail-list">${rows.map(([key,value])=>`<div><dt>${escapeHTML(key)}</dt><dd>${escapeHTML(value)}</dd></div>`).join('')}</dl>`;}
function demoNote() {return '<p class="dialog-note">Interactive demo. No real accounts or payments are connected.</p>';}
function success(title,message) {
  openDialog(title,`<div class="success-view"><span class="success-icon"><i data-icon="check"></i></span><h3>${escapeHTML(title)}</h3><p>${escapeHTML(message)}</p><button class="pill primary" data-action="close-dialog">Back to dashboard</button></div>`);
}

function moneyForm(type) {
  const send=type==='send';
  openDialog(send?'Send money':'Deposit money',`<p class="dialog-intro">${send?'Make a transfer from your US Dollar account.':'Add money to your US Dollar account.'}</p><form id="money-form" data-type="${type}" novalidate>${send?'<label class="form-field">Recipient<input name="recipient" placeholder="Name or email" autocomplete="off" required maxlength="80" /></label>':'<label class="form-field">From<select name="source"><option>Linked demo bank account</option><option>Demo debit card</option></select></label>'}<label class="form-field">Amount (USD)<input name="amount" type="number" inputmode="decimal" placeholder="0.00" min="0.01" max="100000" step="0.01" required /><small>Available balance: ${money(balance)}</small></label><p class="form-error" id="money-error" role="alert" hidden></p>${demoNote()}<div class="form-actions"><button type="button" class="pill" data-action="close-dialog">Cancel</button><button class="pill primary" type="submit">${send?'Send':'Deposit'} money</button></div></form>`);
}

function selectCard(key,notify=true) {
  selectedCard=key;
  document.querySelectorAll('.bank-card').forEach(el=>{
    const picked=el.dataset.selectCard===key;
    el.classList.toggle('picked',picked&&key!=='platinum');
    el.setAttribute('aria-pressed',String(picked));
  });
  if(notify) toast(`${cards[key].name} selected · Ending in ${cards[key].number}`);
}

function cardsDialog() {
  openDialog('Your cards',`<p class="dialog-intro">Choose a card to view its details.</p><div class="option-list">${Object.entries(cards).map(([key,card])=>`<button class="option-row" data-card-detail="${key}"><i data-icon="card"></i><span>${card.name}<small>${card.type} · •••• ${card.number}${card.frozen?' · Frozen':''}</small></span><i data-icon="arrow-up-right"></i></button>`).join('')}</div>`);
}

function cardDetails(key) {
  selectedCard=key;
  const card=cards[key];
  openDialog(card.name,`${details([['Card number',`•••• •••• •••• ${card.number}`],['Cardholder','Alex Morgan'],['Network',card.type],['Monthly limit',card.limit],['Status',card.frozen?'Frozen':'Active']])}<div class="form-actions"><button class="pill" data-freeze="${key}">${card.frozen?'Unfreeze':'Freeze'} card</button><button class="pill primary" data-use-card="${key}">Select card</button></div>${demoNote()}`);
}

function closeMobileMenu() {
  const sidebar=document.querySelector('.sidebar');
  const hadFocus=sidebar.contains(document.activeElement);
  sidebar.classList.remove('mobile-open');
  document.querySelector('.main-content').inert=false;
  sidebar.inert=matchMedia('(max-width:760px)').matches;
  document.querySelector('.sidebar-scrim').hidden=true;
  document.querySelector('.mobile-menu').setAttribute('aria-expanded','false');
  if(hadFocus&&sidebar.inert)document.querySelector('.mobile-menu').focus();
}

function exportCSV() {
  const rows=[['Date','Name','Description','Amount (USD)','Category'],...transactions.map(t=>[t.date,t.name,t.description,t.amount.toFixed(2),t.category])];
  const csv=rows.map(row=>row.map(value=>`"${String(value).replace(/"/g,'""')}"`).join(',')).join('\r\n');
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));
  const a=document.createElement('a');a.href=url;a.download='growza-demo-statement-november-2026.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  toast('Statement exported as CSV');
}

const actions = {
  'home':()=>showView('overview'),
  'close-dialog':()=>dialog.close(),
  'send':()=>moneyForm('send'),
  'deposit':()=>moneyForm('deposit'),
  'cards':cardsDialog,
  'sidebar':()=>{
    if(matchMedia('(max-width:760px)').matches) {closeMobileMenu();return;}
    const collapsed=document.querySelector('.app-shell').classList.toggle('sidebar-collapsed');
    document.querySelector('.sidebar-toggle').setAttribute('aria-label',collapsed?'Expand sidebar':'Collapse sidebar');
  },
  'mobile-menu':()=>{
    const open=document.querySelector('.sidebar').classList.toggle('mobile-open');
    document.querySelector('.sidebar').inert=!open;
    document.querySelector('.main-content').inert=open;
    document.querySelector('.sidebar-scrim').hidden=!open;
    document.querySelector('.mobile-menu').setAttribute('aria-expanded',String(open));
    if(open) document.querySelector('.sidebar-toggle').focus();
  },
  'accounts':()=>{
    const list=document.querySelector('#account-list');list.hidden=!list.hidden;
    const button=document.querySelector('[data-action="accounts"]');button.setAttribute('aria-expanded',String(!list.hidden));
    button.querySelector('i').innerHTML=icon(list.hidden?'chevron-down':'chevron-up');
  },
  'search':()=>{
    openDialog('Search your account','<label class="form-field">Find a transaction<input id="global-search" type="search" placeholder="Search names or categories" autofocus /></label><div id="search-results" class="option-list"></div>');
    document.querySelector('#global-search').focus();
    renderSearch('');
  },
  'wallets':()=>openDialog('Your wallets',`<p class="dialog-intro">Choose an account to see its balance.</p><div class="option-list"><button class="option-row" data-action="usd"><span class="flag flag-us"></span><span>US Dollar<small>USD · ${money(balance)}</small></span><i data-icon="arrow-up-right"></i></button><button class="option-row" data-action="eur"><span class="flag flag-eu"><span>✦</span></span><span>Euro<small>EUR · €0.00</small></span><i data-icon="arrow-up-right"></i></button><button class="option-row" data-action="add-account"><i data-icon="plus"></i><span>Add an account</span></button></div>`),
  'usd':()=>{currency='USD';openDialog('US Dollar account',`<p class="dialog-intro">Available balance</p><p class="dialog-amount">${money(balance)}</p>${details([['Currency',currency],['Account type','Personal'],['Cards','3 active cards']])}<div class="form-actions"><button class="pill" data-action="send">Send money</button><button class="pill primary" data-action="deposit">Deposit</button></div>${demoNote()}`);},
  'eur':()=>{currency='EUR';openDialog('Euro account','<div class="empty-state"><h3>€0.00</h3><p>Your demo Euro account has no transactions yet.</p></div>'+details([['Currency','EUR'],['Account type','Personal']])+demoNote());},
  'add-account':()=>openDialog('Add an account',`<form id="account-form"><label class="form-field">Account currency<select name="currency"><option>British Pound (GBP)</option><option>Singapore Dollar (SGD)</option><option>Malaysian Ringgit (MYR)</option></select></label>${demoNote()}<div class="form-actions"><button class="pill primary" type="submit">Create demo account</button></div></form>`),
  'add-card':()=>openDialog('Add a card',`<form id="card-form"><label class="form-field">Card type<select name="type"><option>Virtual Card</option><option>Debit Card</option></select></label><label class="form-field">Card name<input name="name" placeholder="e.g. Everyday spending" maxlength="40" required /></label>${demoNote()}<div class="form-actions"><button class="pill primary" type="submit">Create demo card</button></div></form>`),
  'invest':()=>openDialog('Your portfolio',`<p class="dialog-intro">Portfolio balance</p><p class="dialog-amount">$260.05</p>${details([['Monthly change','+7.6%'],['Pending transfer','$24.01'],['Account','US Dollar']])}<div class="form-actions"><button class="pill primary" data-action="investment-activity">View investment activity</button></div>${demoNote()}`),
  'investment-activity':()=>{dialog.close();showView('activity');document.querySelector('#transaction-search').value='invest';renderTransactions();},
  'rewards':()=>openDialog('Rewards','<div class="empty-state"><i data-icon="gift" style="margin-bottom:15px"></i><h3>Your rewards start here</h3><p>No rewards have been earned in this demo account. Eligible rewards will appear here.</p></div>'),
  'statements':()=>openDialog('Account statements',`<p class="dialog-intro">Download the transactions shown in this demo.</p><div class="option-list"><button class="option-row" data-action="export"><i data-icon="file"></i><span>November 2026<small>US Dollar · CSV statement</small></span><i data-icon="download"></i></button></div>${demoNote()}`),
  'export':exportCSV,
  'security':()=>openDialog('Security settings',`<p class="dialog-intro">Preview your account security preferences.</p><label class="toggle-row">Transaction alerts<input type="checkbox" data-preference="alerts" ${getPreference('alerts',true)?'checked':''} /></label><label class="toggle-row">Card spending notifications<input type="checkbox" data-preference="card-notifications" ${getPreference('card-notifications',true)?'checked':''} /></label>${demoNote()}`),
  'settings':()=>openDialog('Settings',`<p class="dialog-intro">Personalize this demo workspace.</p><div class="option-list"><button class="option-row" data-action="profile"><i data-icon="user"></i><span>Profile details</span><i data-icon="arrow-up-right"></i></button><button class="option-row" data-action="security"><i data-icon="shield"></i><span>Security &amp; notifications</span><i data-icon="arrow-up-right"></i></button></div><label class="toggle-row">Show balance on overview<input type="checkbox" data-preference="show-balance" ${getPreference('show-balance',true)?'checked':''} /></label>${demoNote()}`),
  'profile':()=>openDialog('Your profile',`<form id="profile-form"><label class="form-field">Display name<input name="displayName" value="${escapeHTML(getPreference('display-name','Alex'))}" required maxlength="30" /></label><label class="form-field">Account currency<input value="US Dollar (USD)" readonly /></label>${demoNote()}<div class="form-actions"><button class="pill primary" type="submit">Save profile</button></div></form>`),
  'help':()=>openDialog('How can we help?',`<div class="option-list"><button class="option-row" data-action="help-transfer"><i data-icon="transfer"></i><span>Sending and depositing money</span></button><button class="option-row" data-action="help-cards"><i data-icon="card"></i><span>Managing your cards</span></button><button class="option-row" data-action="help-demo"><i data-icon="message"></i><span>About this dashboard</span></button></div>`),
  'help-transfer':()=>openDialog('Sending and depositing','<p class="dialog-intro">Use Send to create a demo transfer. Enter a recipient and an amount up to your available balance. Deposit adds a simulated amount to the account. Both update your balance and transaction list.</p>'+demoNote()),
  'help-cards':()=>openDialog('Managing your cards','<p class="dialog-intro">Select a card in the dashboard to bring it forward. Open Cards to see its details, freeze or unfreeze it, and set it as your selected card.</p>'+demoNote()),
  'help-demo':()=>openDialog('About this dashboard','<p class="dialog-intro">A local recreation of Alamin Hossen’s Fintech Banking Dashboard UI Design on Dribbble. Figures and activity are sample data from the visual reference. The sky and profile image are replacement assets.</p><a class="pill" href="https://dribbble.com/shots/27892428-Fintech-Banking-Dashboard-UI-Design" target="_blank" rel="noreferrer">View original design</a>'+demoNote()),
  'messages':()=>openDialog('Messages','<div class="empty-state"><h3>You’re all caught up</h3><p>There are no messages in this demo workspace.</p><button class="pill" data-action="help">Open help center</button></div>'),
  'notifications':()=>{document.querySelector('.notification-dot').hidden=true;document.querySelector('.notification-button').setAttribute('aria-label','Notifications');openDialog('Notifications',`<div class="option-row"><i data-icon="building"></i><span>Salary received<small>$1,240.00 from Northwind Ltd · Nov 1</small></span></div><p class="dialog-note">All notifications marked as read.</p>`);},
  'upgrade':()=>openDialog('Growza Infinite',`<p class="dialog-intro">The premium plan featured in the original design.</p><p class="dialog-amount">$99.99 <small style="font-size:15px">/ year</small></p>${details([['Travel','Travel insurance'],['Airports','VIP lounge access'],['Cards','Infinite card']])}<p class="dialog-note">Plan preview only. Subscriptions and purchases are unavailable in this demo.</p><div class="form-actions"><button class="pill primary" data-action="close-dialog">Back to dashboard</button></div>`),
  'spending':()=>openDialog('Spending breakdown',`<p class="dialog-intro">October total spent</p><p class="dialog-amount">$660.98</p>${details([['Card payments (58%)','$383.37'],['Transfers (42%)','$277.61']])}<div class="form-actions"><button class="pill primary" data-action="expense-activity">View outgoing transactions</button></div><p class="dialog-note">Chart totals are sample figures from the reference.</p>`),
  'expense-activity':()=>{dialog.close();showView('activity');document.querySelector('#transaction-filter').value='expense';document.querySelector('#transaction-search').value='';renderTransactions();},
  'monthly':()=>openDialog('October overview',`<p class="dialog-intro">Net balance</p><p class="dialog-amount">$579.02</p>${details([['Money in','$1,240.00'],['Money out','$660.98'],['Net change','+$579.02'],['Compared with last month','+6.3%']])}<p class="dialog-note">Sample figures from the original design.</p>`),
  'clear-filters':()=>{document.querySelector('#transaction-search').value='';document.querySelector('#transaction-filter').value='all';renderTransactions();}
};

function getPreference(key,fallback) {
  try {const value=localStorage.getItem(`growza-${key}`);return value===null?fallback:JSON.parse(value);} catch{return fallback;}
}
function setPreference(key,value) {
  try {localStorage.setItem(`growza-${key}`,JSON.stringify(value));} catch{toast('This browser cannot save preferences. Changes last for this visit.');}
}
function updateBalance() {
  document.querySelector('#balance-value').innerHTML=getPreference('show-balance',true)?splitMoney(balance):'••••<span>.••</span>';
  document.querySelector('#income-value').innerHTML=splitMoney(income);
  document.querySelector('#outflow-value').innerHTML=splitMoney(outflow);
}
function renderSearch(query) {
  const matches=transactions.filter(t=>(t.name+' '+t.category).toLowerCase().includes(query.toLowerCase()));
  document.querySelector('#search-results').innerHTML=matches.length?matches.map(t=>`<button class="option-row" data-transaction="${t.id}"><i>${icon(t.icon)}</i><span>${escapeHTML(t.name)}<small>${escapeHTML(t.category)} · ${money(t.amount)}</small></span></button>`).join(''):'<div class="empty-state"><h3>No matches</h3><p>Try a name, “Income”, or “Food”.</p></div>';
}

document.addEventListener('click',event=>{
  const button=event.target.closest('button,[data-action]');
  if(!button)return;
  if(button.dataset.action&&actions[button.dataset.action])actions[button.dataset.action]();
  if(button.dataset.view)showView(button.dataset.view);
  if(button.dataset.selectCard)selectCard(button.dataset.selectCard);
  if(button.dataset.cardDetail)cardDetails(button.dataset.cardDetail);
  if(button.dataset.freeze){cards[button.dataset.freeze].frozen=!cards[button.dataset.freeze].frozen;cardDetails(button.dataset.freeze);}
  if(button.dataset.useCard){selectCard(button.dataset.useCard);dialog.close();}
  if(button.dataset.transaction){const t=transactions.find(t=>t.id===Number(button.dataset.transaction));openDialog(t.name,`<p class="dialog-amount">${t.amount>0?'+':'−'}${money(t.amount)}</p>${details([['Date',t.date],['Description',t.description],['Category',t.category],['Status',t.category==='Pending'?'Pending':'Completed'],['Account','US Dollar']])}${demoNote()}`);}
});

document.addEventListener('input',event=>{
  if(event.target.id==='transaction-search')renderTransactions();
  if(event.target.id==='global-search')renderSearch(event.target.value);
});
document.addEventListener('change',event=>{
  if(event.target.id==='transaction-filter')renderTransactions();
  if(event.target.id==='month'){
    const month=event.target.value;
    const data={October:[1240,660.98,'Oct'],September:[1100,555.29,'Sep'],August:[1080,621.50,'Aug']}[month];
    document.querySelector('#flow-value').innerHTML=splitMoney(data[0]);
    document.querySelector('.flow-out').innerHTML=`${data[2]} out <b>${money(data[1])}</b>`;
    flowChart(month);
    toast(`${month} sample cash flow`);
  }
  if(event.target.dataset.preference){setPreference(event.target.dataset.preference,event.target.checked);updateBalance();toast('Preference saved');}
});

document.addEventListener('submit',async event=>{
  const form=event.target;
  if(!['money-form','profile-form','account-form','card-form'].includes(form.id))return;
  event.preventDefault();
  const data=new FormData(form);
  if(form.id==='money-form'){
    const amount=Number(data.get('amount'));
    const recipient=String(data.get('recipient')||'').trim();
    const send=form.dataset.type==='send';
    const error=document.querySelector('#money-error');
    let message='';
    if(send&&!recipient)message='Enter a recipient’s name or email.';
    else if(!Number.isFinite(amount)||amount<=0)message='Enter an amount greater than $0.00.';
    else if(amount>100000)message='Use an amount of $100,000 or less for this demo.';
    else if(Math.abs(amount*100-Math.round(amount*100))>.00001)message='Use no more than two decimal places.';
    else if(send&&amount>balance)message=`You have ${money(balance)} available. Enter a smaller amount.`;
    if(message){error.textContent=message;error.hidden=false;return;}
    error.hidden=true;
    const submit=form.querySelector('[type="submit"]');submit.disabled=true;submit.textContent=send?'Sending…':'Adding deposit…';
    await new Promise(resolve=>setTimeout(resolve,650));
    balance=Math.round((balance+(send?-amount:amount))*100)/100;
    if(send)outflow+=amount;else income+=amount;
    transactions.unshift({id:Date.now(),name:send?recipient:'Demo deposit',description:send?'Transfer · Just now':'Deposit · Just now',amount:send?-amount:amount,category:send?'Transfer':'Income',icon:send?'user':'building',date:'2026-11-04'});
    updateBalance();renderTransactions();
    if(dialog.open)success(send?'Transfer complete':'Deposit complete',`${money(amount)} ${send?`sent to ${recipient}`:'added to your account'} in this demo.`);
    else toast(`${send?'Transfer':'Deposit'} completed in this demo.`);
  }
  if(form.id==='profile-form'){
    const name=String(data.get('displayName')).trim();if(!name)return;
    setPreference('display-name',name);document.querySelector('.greeting h1').textContent=`Good morning, ${name}`;dialog.close();toast('Profile saved');
  }
  if(form.id==='account-form'){
    const name=String(data.get('currency'));
    const button=document.createElement('button');button.className='side-link';button.innerHTML=`<i>${icon('card')}</i><span>${escapeHTML(name.split(' (')[0])}</span>`;
    button.addEventListener('click',()=>openDialog(name,'<div class="empty-state"><h3>Your new account is ready</h3><p>No transactions yet. This is a demo account.</p></div>'));
    document.querySelector('#account-list').insertBefore(button,document.querySelector('[data-action="add-account"]'));
    success('Account created',`${name} is now in your demo account list.`);
  }
  if(form.id==='card-form'){
    const name=String(data.get('name')).trim();if(!name)return;
    const key=`card-${Date.now()}`;
    cards[key]={name,number:String(1000+Math.floor(Math.random()*9000)),type:String(data.get('type')),limit:'$1,000.00'};
    const button=document.createElement('button');button.className='side-link';button.dataset.cardDetail=key;button.innerHTML=`<i>${icon('card')}</i><span>${escapeHTML(name)}</span>`;
    document.querySelector('.nested-accounts').insertBefore(button,document.querySelector('[data-action="add-card"]'));
    success('Card created',`${name} is ready in your demo account.`);
  }
});

document.addEventListener('keydown',event=>{
  if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();actions.search();}
  if(event.key==='Escape')closeMobileMenu();
  if(event.key==='Tab'&&document.querySelector('.sidebar.mobile-open')){
    const items=[...document.querySelectorAll('.sidebar button,.sidebar a')].filter(el=>el.getClientRects().length);
    const first=items[0],last=items[items.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  }
});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});

refreshIcons();miniCharts();flowChart();spendingChart();monthlyChart();renderTransactions();updateBalance();
document.querySelectorAll('.side-link,.nav-pill').forEach(button=>{
  button.setAttribute('aria-label',button.querySelector(':scope > span:not(.nav-icon):not(.flag)')?.textContent.trim()||button.textContent.trim());
});
let flowSize='';
new ResizeObserver(entries=>{
  const size=`${Math.round(entries[0].contentRect.width)}:${Math.round(entries[0].contentRect.height)}`;
  if(size!==flowSize){flowSize=size;flowChart();}
}).observe(document.querySelector('#flow-chart'));
const mobileQuery=matchMedia('(max-width:760px)');
mobileQuery.addEventListener('change',closeMobileMenu);
closeMobileMenu();
document.querySelector('.greeting h1').textContent=`Good morning, ${getPreference('display-name','Alex')}`;
