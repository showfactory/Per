/* Showfactory · motore delle pagine prospect.
   Ogni pagina contiene solo i dati dell'azienda (window.SF). Il nome del referente
   arriva dal link personale (#r=...) e non viene mai scritto nella pagina. */
(function(){
  var A='../../assets/';
  var W={
    duomo:{img:'portfolio/duomo.jpg',tag:'Ledwall e struttura',title:'Ledwall in Piazza Duomo, Milano',cap:'Struttura, ledwall e regia: tutto Showfactory, nessun service esterno.'},
    audi:{img:'portfolio/audi.jpg',tag:'Brand activation',title:'Padiglione Audi quattro sulla neve',cap:'Montato in quota, dove un cantiere normale non arriva.'},
    moncler:{img:'portfolio/moncler.jpg',tag:'Pop-up',title:'Moncler Grenoble, in alta quota',cap:'Un pop-up costruito a Parma e montato sulla neve.'},
    amarone:{img:'portfolio/amarone-galleria.jpg',tag:'Anteprima di settore',title:'Amarone Opera Prima, Verona',cap:'Una galleria storica vestita per una sera: telai, tessuti, luci, percorsi.'},
    arch:{img:'opt/arch.jpg',tag:'Scenografia',title:'Gli archi del Consorzio Valpolicella',cap:'Strutture ad arco su misura, luce e marchio integrati.'},
    specchi:{img:'portfolio/specchi.jpg',tag:'Experiential',title:'La stanza degli specchi, Fuori Salone Vinitaly',cap:'Cento bottiglie, riflessi infiniti.'},
    gala:{img:'portfolio/gala.jpg',tag:'Gala',title:'Gala sotto le stelle',cap:'Scenografia, arredi e luci per una cena di gala.'},
    lampadari:{img:'portfolio/lampadari.jpg',tag:'Garden dinner',title:'Cena sotto i lampadari',cap:'Tavolo imperiale e lampadari sospesi, all’aperto.'},
    iseo:{img:'portfolio/iseo.jpg',tag:'Wedding',title:'La struttura che galleggia, Lago d’Iseo',cap:'Plexiglass e acciaio: dal prato sembra sospesa sull’acqua.'},
    cerimonia:{img:'portfolio/cerimonia.jpg',tag:'Cerimonia',title:'Cerimonia nel parco',cap:'Allestimento della cerimonia, dal disegno all’ultimo fiore appeso.'},
    arco:{img:'portfolio/arco.jpg',tag:'Tavolo imperiale',title:'L’arco fiorito',cap:'Struttura su misura sopra il tavolo degli sposi.'},
    maxam:{img:'opt/stand_maxam.jpg',tag:'Stand fieristico',title:'Stand MAXAM, EIMA Bologna',cap:'Progetto, pratiche per l’ente fiera, produzione e montaggio.'},
    pneumatici:{img:'opt/stand_hero.jpg',tag:'Stand fieristico',title:'Stand per un marchio di pneumatici agricoli',cap:'Prodotto in primo piano, struttura su misura.'},
    ecotech:{img:'opt/stand_ecotech.jpg',tag:'Stand fieristico',title:'Stand EcoTech Italia',cap:'Stand su misura per EcoTech Italia.'},
    vuoto:{img:'opt/stand_vuototecnica.jpg',tag:'Stand fieristico',title:'Stand Vuototecnica',cap:'Stand per l’automazione industriale.'},
    rizzoli:{img:'portfolio/rizzoli.jpg',tag:'Stand food',title:'Stand Rizzoli',cap:'Stand su misura per Rizzoli.'},
    borbone:{img:'portfolio/borbone.jpg',tag:'Stand food',title:'Stand Borbone',cap:'Il marchio in primo piano, dal corridoio.'},
    sarchio:{img:'portfolio/sarchio.jpg',tag:'Stand food',title:'Stand Sarchio',cap:'Stand su misura per un marchio del biologico.'},
    thermo:{img:'portfolio/thermofisher.jpg',tag:'Stand fieristico',title:'Stand Thermo Fisher',cap:'Stand per il settore scientifico.'},
    custom:{img:'portfolio/custom.jpg',tag:'Stand fieristico',title:'Stand Custom',cap:'Tecnologia esposta in uno stand su misura.'},
    officina:{img:'portfolio/saldatura.jpg',tag:'Officina',title:'Prima architetti, poi saldatori',cap:'La nostra carpenteria a Parma.'},
    falegnameria:{img:'opt/fabrication.jpg',tag:'Falegnameria',title:'Arredi e banchi su misura',cap:'Taglio, assemblaggio e finiture nelle nostre falegnamerie.'},
    montaggio:{img:'opt/logistics.jpg',tag:'Montaggio',title:'Le nostre squadre, anche di notte',cap:'Chi costruisce è chi monta.'}
  };
  var P={
    sub:{q:'«Chi monta non è chi ha costruito, e in fiera nessuno sa rispondere.»',h:'Stesse persone dal disegno all’ultima vite.',p:'Progettiamo, tagliamo il legno, saldiamo il ferro e montiamo con le nostre squadre. <strong>Zero subappalti, un solo numero da chiamare.</strong>'},
    render:{q:'«Il render era bellissimo. Lo stand montato, un’altra cosa.»',h:'Il render che approvate è quello che montiamo.',p:'Finiture e materiali li proviamo in officina prima di partire, non li scopriamo in padiglione. <strong>Nessun passaggio di mano tra disegno e falegnameria.</strong>'},
    led:{q:'«Ledwall da un service, struttura da un altro: l’incastro si scopre la notte prima.»',h:'Ledwall e regia nascono dentro la struttura.',p:'Li gestiamo internamente, quindi schermo e scenografia si disegnano insieme. <strong>Niente prove di incastro alle due di notte.</strong>'},
    ente:{q:'«L’ente fiera chiede tavole, calcoli e certificazioni, e il tempo stringe.»',h:'Le pratiche le prepariamo noi.',p:'Disegni tecnici, relazioni e certificazioni dei materiali per l’approvazione dell’ente fiera: <strong>voi pensate al prodotto, noi al padiglione.</strong>'},
    riuso:{q:'«Ogni anno uno stand nuovo da zero, e a fine fiera tutto in discarica.»',h:'Moduli che tornano a casa e ripartono.',p:'Progettiamo strutture modulari che si smontano, si stoccano e si riadattano alla fiera successiva. <strong>Lo stand diventa un investimento, non un costo a perdere.</strong>'},
    whiteLabel:{q:'«Il fornitore parla con il cliente e la regia salta.»',h:'Il cliente resta vostro.',p:'Render e tavole con il vostro marchio, nessun contatto diretto se non lo volete voi. <strong>Noi costruiamo, montiamo e poi spariamo.</strong>'},
    multi:{q:'«Progetto su più città, e ogni tappa ha un fornitore diverso.»',h:'Un kit costruito una volta, montato ovunque.',p:'Moduli pensati per viaggiare sui nostri bilici: stessa qualità alla prima e all’ultima tappa. <strong>Italia ed Europa, con le stesse squadre.</strong>'},
    idea:{q:'«In produzione l’idea si ridimensiona: “così non si può fare”.»',h:'Prima di dire no, facciamo una prova.',p:'Il nostro team R&amp;D cerca materiali e soluzioni, e il prototipo lo fa in officina. <strong>L’idea arriva in scena intera.</strong>'},
    wedLoc:{q:'«La location ha regole rigide: orari, carichi, nessun foro nei muri.»',h:'Strutture autoportanti, montaggi silenziosi.',p:'Costruiamo pensando alla location: niente fissaggi invasivi, montaggio e smontaggio negli orari concessi. <strong>La villa resta com’era.</strong>'},
    wedMeteo:{q:'«E se piove?»',h:'Il piano B lo progettiamo insieme al piano A.',p:'Coperture, pedane e strutture pensate per reggere il tempo senza cambiare l’estetica. <strong>Gli sposi non devono accorgersene.</strong>'},
    wedUnico:{q:'«Gli sposi vogliono qualcosa che non si è mai visto.»',h:'Lo costruiamo, non lo noleggiamo.',p:'Strutture, arredi e scenografie nascono nelle nostre falegnamerie su disegno: <strong>pezzi unici, non il catalogo di un service.</strong>'},
    degus:{q:'«Lo stand deve vendere, far assaggiare e accogliere i buyer, in 30 metri quadri.»',h:'Ogni metro quadro ha un lavoro da fare.',p:'Banchi di degustazione, retro con frigo e magazzino, salottino per i buyer: <strong>lo stand progettato intorno a come vendete, non a come si fotografa.</strong>'},
    vedere:{q:'«In un padiglione con mille espositori, nessuno ci vede.»',h:'Il vostro marchio si vede dal fondo del padiglione.',p:'Altezze, luce e ledwall studiati per farvi trovare prima di arrivare davanti allo stand. <strong>Il prodotto in primo piano, sempre.</strong>'},
    pesi:{q:'«Macchine pesanti, prodotti fuori misura, pochi giorni per montare.»',h:'Strutture calcolate per il vostro prodotto.',p:'Pedane, rinforzi e percorsi pensati per macchine e carichi veri, con le pratiche per l’ente fiera già pronte. <strong>Il montaggio lo facciamo noi, nei tempi del padiglione.</strong>'},
    demo:{q:'«Il prodotto va spiegato, e in fiera nessuno ha tempo.»',h:'Uno stand che fa la demo al posto vostro.',p:'Ledwall, postazioni demo e percorsi integrati nella struttura: <strong>il visitatore capisce il prodotto in trenta secondi.</strong>'},
    lusso:{q:'«Il brand è premium: lo stand non può sembrare uno stand.»',h:'Finiture da boutique, costruite in falegnameria.',p:'Laccature, essenze, metalli e luce progettati come in un negozio: <strong>il pubblico entra nel vostro mondo, non in un padiglione.</strong>'},
    evento:{q:'«Un evento importante e tre fornitori diversi da coordinare.»',h:'Palco, scenografia, arredi e ledwall: un solo fornitore.',p:'Una sola squadra dal disegno allo smontaggio, con le pratiche per la location. <strong>Voi ospitate, noi costruiamo.</strong>'}
  };
  var F={
    agenzie:{eyebrow:'Il reparto produzione esterno della vostra agenzia',h1:'Voi gestite il progetto.<br><em>Noi costruiamo la parte che si vede.</em>',
      hello:'<strong>Showfactory costruisce, monta e smonta i progetti delle agenzie senza passarli a nessun altro</strong>: due falegnamerie, una carpenteria e i ledwall in casa, a Parma. Il cliente resta vostro.',
      hero:'duomo',probs:['sub','whiteLabel','idea','led'],works:['amarone','audi','moncler','gala'],chips:['Render con il vostro marchio','Nessun contatto diretto con il cliente','Italia ed Europa'],
      ctaH:'Qual è il prossimo progetto<br><em>con una produzione da gestire?</em>',ctaP:'Mandateci brief e date: vi rispondiamo con una proposta concreta e un solo referente fino allo smontaggio.'},
    wedding:{eyebrow:'Strutture e scenografie per i vostri matrimoni',h1:'Voi immaginate il giorno.<br><em>Noi lo costruiamo.</em>',
      hello:'<strong>Showfactory costruisce strutture, arredi e scenografie su misura per i wedding planner</strong>, nelle sue falegnamerie di Parma e Forte dei Marmi. Gli sposi restano vostri: noi lavoriamo dietro le quinte.',
      hero:'iseo',probs:['wedUnico','wedLoc','wedMeteo','whiteLabel'],works:['cerimonia','lampadari','arco','gala'],chips:['Progetti con il vostro marchio','Montaggi negli orari della location','Costa Smeralda, Toscana, laghi'],
      ctaH:'Il prossimo matrimonio<br><em>impossibile?</em>',ctaP:'Mandateci la location e l’idea: vi diciamo come la costruiremmo, con un primo disegno.'},
    hospitality:{eyebrow:'Allestimenti per location ed eventi',h1:'La vostra location,<br><em>vestita per ogni evento.</em>',
      hello:'<strong>Showfactory progetta e costruisce allestimenti, palchi e scenografie per chi ospita eventi</strong>: gala, convention, matrimoni, anteprime. Tutto prodotto nelle nostre falegnamerie, montato dalle nostre squadre.',
      hero:'gala',probs:['evento','wedLoc','led','riuso'],works:['amarone','lampadari','iseo','duomo'],
      ctaH:'Il prossimo evento<br><em>in calendario?</em>',ctaP:'Raccontateci spazi e date: vi proponiamo come trasformarli, con un primo disegno.'},
    food:{eyebrow:'Stand per il food &amp; beverage',h1:'Lo stand che fa assaggiare,<br><em>vendere e tornare.</em>',
      hello:'<strong>Showfactory progetta, costruisce e monta stand per le aziende del food</strong>, dalle nostre falegnamerie di Parma alle fiere di Milano, Parigi e D\u00fcsseldorf. Un solo referente, zero intermediari.',
      hero:'rizzoli',probs:['degus','vedere','sub','riuso'],works:['borbone','sarchio','specchi','falegnameria'],
      ctaH:'Lo stand della prossima fiera<br><em>è già deciso?</em>',ctaP:'Mandateci planimetria e metri quadri: vi rispondiamo con un’idea concreta e un preventivo voce per voce.'},
    wine:{eyebrow:'Stand ed eventi per il vino',h1:'Il vino si racconta.<br><em>Lo spazio lo costruiamo noi.</em>',
      hello:'<strong>Showfactory progetta e costruisce stand, degustazioni ed eventi per il mondo del vino</strong>: da Amarone Opera Prima a Verona al Fuori Salone di Vinitaly. Tutto prodotto a Parma, montato dalle nostre squadre.',
      hero:'amarone',probs:['degus','vedere','render','riuso'],works:['specchi','arch','gala','falegnameria'],
      ctaH:'La prossima fiera,<br><em>o la prossima anteprima?</em>',ctaP:'Mandateci spazi e date: vi proponiamo come raccontare la vostra cantina, con un primo disegno.'},
    industria:{eyebrow:'Stand per l’industria',h1:'Macchine vere,<br><em>stand che le reggono.</em>',
      hello:'<strong>Showfactory progetta, costruisce e monta stand per le aziende industriali</strong>, con le pratiche per l’ente fiera già pronte. Falegnameria e carpenteria metallica nostre, a Parma: zero subappalti.',
      hero:'maxam',probs:['pesi','ente','sub','riuso'],works:['pneumatici','ecotech','vuoto','officina'],
      ctaH:'Lo stand della prossima fiera<br><em>è già deciso?</em>',ctaP:'Mandateci planimetria, metri quadri e cosa dovete esporre: vi rispondiamo con un’idea concreta e un preventivo voce per voce.'},
    tech:{eyebrow:'Stand per tecnologia e medicale',h1:'Prodotti complessi,<br><em>capiti in trenta secondi.</em>',
      hello:'<strong>Showfactory progetta e costruisce stand per aziende tecnologiche e medicali</strong>: postazioni demo, ledwall e regia integrati nella struttura. Tutto prodotto e montato da noi.',
      hero:'thermo',probs:['demo','led','ente','sub'],works:['custom','vuoto','duomo','officina'],
      ctaH:'Lo stand della prossima fiera<br><em>è già deciso?</em>',ctaP:'Mandateci planimetria e prodotti da mostrare: vi rispondiamo con un’idea concreta e un preventivo voce per voce.'},
    lifestyle:{eyebrow:'Stand e pop-up per brand premium',h1:'Uno stand<br><em>che non sembra uno stand.</em>',
      hello:'<strong>Showfactory costruisce stand, pop-up e spazi su misura per i brand di moda, beauty e design</strong>, con finiture da boutique nate nelle nostre falegnamerie. Un solo referente, zero intermediari.',
      hero:'moncler',probs:['lusso','render','vedere','riuso'],works:['specchi','lampadari','falegnameria','custom'],
      ctaH:'Il prossimo stand<br><em>o il prossimo pop-up?</em>',ctaP:'Mandateci spazi e date: vi rispondiamo con un’idea concreta e un preventivo voce per voce.'},
    mobilita:{eyebrow:'Brand activation, lanci e grandi eventi',h1:'Il prodotto al centro.<br><em>Tutto il resto lo costruiamo noi.</em>',
      hello:'<strong>Showfactory progetta e costruisce padiglioni, stand e scenografie per lanci e attivazioni</strong>, anche dove un cantiere normale non arriva: sulla neve, in piazza, su una banchina.',
      hero:'audi',probs:['vedere','led','multi','sub'],works:['moncler','duomo','montaggio','officina'],
      ctaH:'Il prossimo lancio<br><em>dove lo facciamo?</em>',ctaP:'Raccontateci luogo e date: vi rispondiamo con un’idea concreta e un preventivo voce per voce.'},
    corporate:{eyebrow:'Eventi, stand e allestimenti su misura',h1:'Il vostro evento,<br><em>costruito da chi lo monta.</em>',
      hello:'<strong>Showfactory progetta, costruisce e monta palchi, stand e scenografie</strong> nelle sue falegnamerie di Parma e Forte dei Marmi. Un solo referente dal disegno allo smontaggio.',
      hero:'duomo',probs:['evento','sub','led','render'],works:['gala','amarone','pneumatici','montaggio'],
      ctaH:'Il prossimo evento<br><em>o la prossima fiera?</em>',ctaP:'Raccontateci cosa avete in programma: vi rispondiamo con un’idea concreta e un preventivo voce per voce.'}
  };
  var G={
    dir:'Un solo fornitore per progetto, produzione e montaggio: una responsabilità, un numero da chiamare.',
    mkt:'Il marchio come l’avete pensato, uguale al render: lo stand non scende a compromessi in padiglione.',
    event:'Calendari chiari, squadre nostre e un solo referente in cantiere, quello che risponde anche alle sei del mattino.',
    sales:'Uno spazio che lavora per i vostri commerciali: accogliere, far provare, chiudere.',
    buy:'Preventivo voce per voce e nessun ricarico di intermediari: produciamo tutto noi.',
    creative:'Le idee non si ridimensionano in produzione: il prototipo lo facciamo in officina.',
    tech:'Struttura, ledwall e regia integrati, progettati insieme dal primo disegno.'
  };
  var d=window.SF||{},fam=F[d.f]||F.corporate;
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  var who=null;
  try{var m=/[#&]r=([A-Za-z0-9_-]+)/.exec(location.hash);if(m){var b=m[1].replace(/-/g,'+').replace(/_/g,'/');while(b.length%4)b+='=';who=JSON.parse(decodeURIComponent(escape(atob(b))));}}catch(e){who=null;}
  var nome=who&&who.n?String(who.n).slice(0,40):'',grp=who&&G[who.g]?who.g:'';
  var today=new Date();today.setHours(12,0,0,0);
  var next=null;(d.fiere||[]).forEach(function(x){if(!x.d)return;var t=new Date(x.d+'T12:00:00');var days=Math.round((t-today)/864e5);if(days>=0&&(!next||days<next.days))next={l:x.l,c:x.c,w:x.w,days:days};});
  function pic(p,alt,eager){var b=A+p.replace(/\.jpg$/,'');return '<img src="'+b+'-720.webp" srcset="'+b+'-720.webp 720w, '+b+'-1280.webp 1280w" sizes="(max-width:960px) 100vw, 50vw" alt="'+esc(alt)+'"'+(eager?' fetchpriority="high"':' loading="lazy" decoding="async"')+'>';}
  function work(k,cls){var w=W[k];return '<figure class="'+(cls||'work')+'">'+pic(w.img,w.title)+'<figcaption><small>'+w.tag+'</small><b>'+w.title+'</b><span>'+w.cap+'</span></figcaption></figure>';}
  var fairHtml='';
  if(next){var hot=next.days<=45;var msg=hot?'Tempi stretti, ma se lo stand non è ancora chiuso possiamo ancora entrare in produzione: conviene sentirci questa settimana.':(next.days<=150?'È la finestra giusta per progettare e produrre senza correre.':'Chi progetta adesso sceglie materiali e soluzioni con calma.');
    fairHtml='<div class="fair'+(hot?' hot':'')+'"><div class="days">'+next.days+'<small>giorni</small></div><p>a <b>'+esc(next.l)+'</b><span> · '+esc(next.c)+', '+esc(next.w)+'</span><br>'+msg+'</p></div>';}
  var heroW=W[fam.hero];
  var wa='https://wa.me/393791842927?text='+encodeURIComponent('Ciao Francesco, sono '+(nome?nome+' di ':'di ')+(d.a||'')+': ho visto la pagina, sentiamoci.');
  var h=''
  +'<div class="wrap"><header class="top"><div class="brand"><b>Show</b>factory</div><div class="for"><i></i>Pagina riservata · '+(nome?esc(nome)+' · ':'')+esc(d.a)+'</div></header>'
  +'<section class="hero"><div><p class="eyebrow">'+fam.eyebrow+'</p><h1>'+fam.h1+'</h1>'
  +'<p class="hello">'+(nome?'Ciao '+esc(nome)+', questa pagina è per '+esc(d.a)+'. ':'Questa pagina è per '+esc(d.a)+'. ')+fam.hello+'</p>'
  +fairHtml
  +(grp?'<p class="hello" style="margin-top:14px;color:var(--ink)">'+G[grp]+'</p>':'')
  +'<div class="hero-actions"><a class="btn btn-gold" href="#lavori">I nostri lavori ↓</a><a class="btn" href="#call">15 minuti di call</a></div></div>'
  +'<div class="hero-pic">'+pic(heroW.img,heroW.title,true)+'<div class="stamp"><em>Costruito a Parma · montato dalle nostre squadre</em><b>'+heroW.title+'</b><span>'+heroW.cap+'</span></div></div></section>'
  +'<div class="facts"><div class="fact"><b>2</b><span>falegnamerie interne, a Parma e Forte dei Marmi</span></div><div class="fact"><b>0</b><span>subappalti: chi costruisce è chi monta</span></div><div class="fact"><b>1</b><span>referente per strutture, arredi e ledwall</span></div><div class="fact"><b>22</b><span>anni di cantieri, in Italia e in Europa</span></div></div></div>'
  +'<section class="band"><div class="wrap"><div class="head"><h2>Quattro problemi che <em>conoscete bene.</em></h2><p>E come li risolviamo, con persone e officine nostre.</p></div><div class="probs">'
  +fam.probs.map(function(k){var p=P[k];return '<article class="prob"><div class="q"><small>Il problema</small><p>'+p.q+'</p></div><div class="a"><small>Showfactory</small><h3>'+p.h+'</h3><p>'+p.p+'</p></div></article>';}).join('')
  +'</div></div></section>'
  +'<section class="band" id="lavori"><div class="wrap"><div class="head"><h2>Lavori nostri, <em>niente foto di repertorio.</em></h2><p>Progetti costruiti nelle nostre falegnamerie e montati dalle nostre squadre.</p></div><div class="works">'
  +fam.works.map(function(k){return work(k);}).join('')+'</div></div></section>'
  +'<section class="band"><div class="wrap"><div class="head"><h2>Come lavoriamo, <em>dall’inizio alla fine.</em></h2><p>Cinque passaggi, sempre gli stessi, con un solo referente.</p></div>'
  +'<div class="steps"><div class="step"><span class="n">1</span><h4>Brief</h4><p>Planimetria, metri quadri e date. Basta anche una call.</p></div><div class="step"><span class="n">2</span><h4>Render e preventivo</h4><p>Render 3D e preventivo voce per voce.</p></div><div class="step"><span class="n">3</span><h4>Disegni tecnici</h4><p>Tavole per ente fiera o location, calcoli e permessi.</p></div><div class="step"><span class="n">4</span><h4>Produzione</h4><p>Falegnameria e carpenteria interne, prova in officina.</p></div><div class="step"><span class="n">5</span><h4>Montaggio e smontaggio</h4><p>Le nostre squadre, con un solo referente in cantiere.</p></div></div>'
  +(fam.chips?'<div class="chips">'+fam.chips.map(function(c){return '<span>'+c+'</span>';}).join('')+'</div>':'')
  +'</div></section>'
  +'<section class="band" id="call"><div class="wrap"><div class="cta"><div><h2>'+fam.ctaH+'</h2><p>'+fam.ctaP+'</p><p class="sign">Francesco<span>Founder, Showfactory</span></p></div>'
  +'<div class="cta-actions"><a class="btn btn-gold" href="'+wa+'" target="_blank" rel="noopener">Scrivimi su WhatsApp →</a><div class="mail"><code id="sfMail">allestimenti@showfactory.events</code><button type="button" id="sfCopy">Copia</button></div><a class="btn" href="https://www.instagram.com/show__factory_/" target="_blank" rel="noopener">I nostri cantieri su Instagram ↗</a><a class="btn" href="https://www.showfactory.events" target="_blank" rel="noopener">Il sito Showfactory ↗</a></div></div></div></section>'
  +'<div class="wrap"><footer><span>Pagina preparata per '+esc(d.a)+' · non indicizzata</span><span>Showfactory S.r.l. · Parma · Forte dei Marmi · <a href="https://www.showfactory.events" target="_blank" rel="noopener">showfactory.events</a></span></footer></div>';
  var app=document.getElementById('app');app.innerHTML=h;
  document.title='Showfactory per '+(d.a||'voi');
  var cb=document.getElementById('sfCopy'),ad=document.getElementById('sfMail');
  cb.addEventListener('click',function(){function sel(){var r=document.createRange();r.selectNodeContents(ad);var s=window.getSelection();s.removeAllRanges();s.addRange(r);}
    try{navigator.clipboard.writeText(ad.textContent).then(function(){cb.textContent='Copiata';},function(){sel();cb.textContent='Selezionata';});}catch(e){sel();cb.textContent='Selezionata';}});
  window.addEventListener('hashchange',function(){location.reload();});
})();
