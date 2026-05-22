
'use strict';

/* ═══════════════════════════════════════════════════
   MENU DATA  — All 10 pages, exact prices preserved
═══════════════════════════════════════════════════ */
const MENU = [
  /* ── PAGE 1 — Entrées Chaudes ── */
  {
    id: 'entrees-chaudes',
    icon: '🔥',
    fr: 'Entrées Chaudes',
    en: 'Hot Appetizers',
    ar: 'مقبلات ساخنة',
    twoCol: false,
    items: [
      { fr:'Plat de Frites',           en:'French Fries',            ar:'صحن فريت',              price:6   },
      { fr:'Brik au Thon',             en:'Brik with Tuna',          ar:'بريكة تن',               price:7,  desc:'A fried thin pastry with tuna filling' },
      { fr:'Brik aux Fruits de Mer',   en:'Brik with Seafood',       ar:'بريكة بغلال البحر',      price:9,  desc:'A fried thin pastry with seafood filling' },
      { fr:'Calamar Doré',             en:'Fried Calamari',          ar:'مطيق مبطن',            price:28  },
      { fr:'Beignets de Crevettes',    en:'Breaded Shrimp',          ar:'جمبري مبطن',            price:33  },
      { fr:'Gratin de Fruits de Mer',  en:'Seafood Quiche',          ar:'غراتان بغلال البحر',     price:35  },
      { fr:'Poulpe en Sauce',          en:'Octopus in Sauce',        ar:'قرنيط بالصلصة',          price:45  },
      { fr:'Oeufs de Seiche Sautés',   en:'Sauteed Cuttlefish Eggs', ar:'عظم شوابي مقلي',         price:50  },
      { fr:'Ojja aux Fruits de Mer',   en:'Ojja with Seafood',       ar:'عجة بغلال البحر',        price:46, desc:'Eggs and tomato based sauce with seafood' },
      { fr:'Fritto Misto',             en:'Fritto Misto',            ar:'غلال البحر مقلي',        price:38  },
    ]
  },

  /* ── PAGE 2 — Salades ── */
  {
    id: 'salades',
    icon: '🥗',
    fr: 'Entrées Froides — Salades',
    en: 'Cold Appetizers · Salads',
    ar: 'مقبلات باردة — السلطات',
    twoCol: false,
    items: [
      { fr:'Salade Mechouia',           en:'Salad Mechouia',        ar:'سلاطة مشوية',          price:9.5  },
      { fr:'Salade Variée',             en:'All Salad Toppings',    ar:'سلاطة مشكلة',          price:9.5  },
      { fr:'Salade Tunisienne',         en:'Tunisian Salad',        ar:'سلاطة تونسية',         price:9.5  },
      { fr:'Salade César',              en:'Cesar Salad',           ar:'سلاطة سيزار',          price:22,  desc:'Suprême de poulet, laitue, tomate fraîche, sauce César, câpres, parmesan, noix' },
      { fr:'Salade Tomate Mozzarella',  en:'Tomato Mozzarella Salad',ar:'سلاطة طماطم موزاريلا', price:24  },
      { fr:'Salade Fruits de Mer',      en:'Seafood Salad',         ar:'سلاطة غلال البحر',     price:38  },
      { fr:'Salade de Poulpe',          en:'Octopus Salad',         ar:'سلاطة قرنيط',          price:38  },
      { fr:'Salade Zitouna',            en:'Zitouna Salad',         ar:'سلاطة الزيتونة',       price:40  },
    ]
  },

  /* ── PAGE 3 — Pasta & Riz ── */
  {
    id: 'pasta',
    icon: '🍝',
    fr: 'Nos Pâtes',
    en: 'Pasta & Rice',
    ar: 'المعكرونات',
    twoCol: false,
    note: 'Pâtes préférées : Penne, Spaghetti, Tagliatelle — Pâtes Barilla +4 DT',
    items: [
      { fr:'Spaghetti Bolognaise',               en:'Spaghetti Bolognese',        ar:'سباغتي لحم المفروم',        price:25  },
      { fr:'Lasagne Bolognaise',                 en:'Lasagna Bolognese',          ar:'لازانيا لحم المفروم',        price:26  },
      { fr:'The Crazy Chicken',                  en:'The Crazy Chicken',          ar:'كريزي شيكن',               price:29,  desc:'Pâte au poulet, sauce blanche, jambon champignon' },
      { fr:'Pâtes à la Sauce Hulk',              en:'Pasta with Hulk Sauce',      ar:'باستا بصلصة هيلك',          price:28,  desc:'Pâte, sauce blanche, poulet, pesto, pignons' },
      { fr:'Tagliatelle à la Crème de Crevettes',en:'Tagliatelle with Shrimp Sauce',ar:'تلياتلي بكريمة الجمبري', price:34  },
      { fr:'Lasagne aux Fruits de Mer',          en:'Seafood Lasagna',            ar:'لازانيا بغلال البحر',        price:35  },
      { fr:'The Farme',                          en:'The Farme',                  ar:'باستا ذي فارم',             price:38,  desc:'Pâte, émincé de bœuf, parmesan, champignon, sauce blanche' },
      { fr:'La Cremozza',                        en:'La Cremozza',                ar:'باستا لا كريموزا',          price:42,  desc:'Pâte, sauce rosée aux crevettes et saumon fumé' },
      { fr:'Riz aux Fruits de Mer',              en:'Rice with Seafood',          ar:'أرز بغلال البحر',           price:46  },
      { fr:'Spaghetti Fruits de Mer',            en:'Seafood Spaghetti',          ar:'سباغتي بغلال البحر',        price:46,  desc:'À la Sfaxienne ou à l\'Italienne' },
    ]
  },

  /* ── PAGE 4 — Volailles ── */
  {
    id: 'volailles',
    icon: '🍗',
    fr: 'Nos Volailles',
    en: 'Poultry',
    ar: 'الدجاج',
    twoCol: false,
    items: [
      { fr:'Escalope Grillée',      en:'Grilled Escalope',                     ar:'إسكالوب مشوي',      price:20  },
      { fr:'Escalope Panée',        en:'Breaded Escalope',                     ar:'إسكالوب مبطن',      price:22  },
      { fr:'Cuisse de Poulet Farci',en:'Chicken Leg Stuffed with Lamb Liver',  ar:'فخذ دجاج محشي',     price:27,  desc:'Cuisse de poulet farci avec foie d\'agneau et fruits secs' },
      { fr:'Gratin de Poulet',      en:'Chicken Gratin',                       ar:'غراتان الدجاج',     price:28  },
      { fr:'Cordon Bleu',           en:'Cordon Bleu',                          ar:'كردون بلو',         price:27,  desc:'Stuffed chicken rolls' },
      { fr:'Poulet Crunchi',        en:'Crunchy Chicken',                      ar:'دجاج مقرمش',        price:25,  desc:'3 pilons de poulet croustillants' },
      { fr:'Escalope Alfredo',      en:'Escalope with Alfredo Sauce',          ar:'إسكالوب إلفريدو',   price:30,  desc:'Sauce champignon et fromage' },
      { fr:'Mixte de Volailles',    en:'Poultry Mix',                          ar:'دجاج مشكل',         price:33  },
    ]
  },

  /* ── PAGE 5 — Viandes Rouges ── */
  {
    id: 'viandes',
    icon: '🥩',
    fr: 'Nos Viandes',
    en: 'Red Meat',
    ar: 'اللحوم',
    twoCol: false,
    items: [
      { fr:'Foie d\'Agneau Grillé',     en:'Grilled Lamb Liver',         ar:'كبدة علوش مشوية',           price:33  },
      { fr:'Grillade Mixte',            en:'Mixed Grill',                 ar:'مشوي مشكل',                  price:38  },
      { fr:'Grillade Mixte Royale',     en:'Royal Mixed Grill',           ar:'مشوي مشكل ملكي',             price:55  },
      { fr:'Côtelette d\'Agneau Grillée',en:'Grilled Lamb Chops',        ar:'كتلات علوش مشوي',            price:42  },
      { fr:'Filet de Veau Grillé',      en:'Grilled Veal Fillet',         ar:'فلي بقري مشوي',              price:44  },
      { fr:'Entrecôte Grillée',         en:'Grilled Rib Steak 350 gr',    ar:'شريحة لحم مشوية',            price:45  },
      { fr:'Filet de Veau au Choix',    en:'Veal Fillet of Choice',       ar:'شريحة فلي بقري حسب الإختيار',price:50, desc:'Sauce au champignon, sauce au poivre ou sauce 4 fromages' },
      { fr:'Mixte de Veau Zitouna',     en:'Zitouna Veal Mix',            ar:'مشكل لحم العجول زيتونة',     price:60, desc:'Faux-filet grillé, maajouka libanaise, émincé de veau à la crème' },
    ]
  },

  /* ── PAGE 6 — Spécialités Tunisiennes ── */
  {
    id: 'specialites-tunisiennes',
    icon: '🫕',
    fr: 'Spécialités Tunisiennes',
    en: 'Our Tunisian Specialties',
    ar: 'أطباقنا التونسية',
    twoCol: false,
    items: [
      { fr:'Loup de Mer Grillé',         en:'Grilled Sea Bass',                 ar:'قاروص مشوي',              price:29  },
      { fr:'Dorade Grillée',             en:'Grilled Sea Bream',                ar:'وراطة مشوي',              price:26  },
      { fr:'Couscous au Poisson',        en:'Fish Couscous',                    ar:'كسكسي بالحوت',            price:26  },
      { fr:'Spaghetti d\'Agneau',        en:'Lamb Spaghetti',                   ar:'سباغتي بلحم الضأن',       price:32  },
      { fr:'Couscous d\'Agneau',         en:'Lamb Couscous',                    ar:'كسكسي بلحم الضأن',        price:32  },
      { fr:'Coucha d\'Agneau',           en:'Roast Lamb',                       ar:'كوشة علــوش',               price:32  },
      { fr:'Kolla d\'Agneaux (2 pers)',  en:'Kolla of Lamb (2 persons)',         ar:'قصلة بلحم الضأن (للشخصين)',price:90 },
      { fr:'Kolla Fruits de Mer (2 pers)',en:'Kolla of Seafood (2 persons)',     ar:'قصلة بغلال البحر (للشخصين)',price:125 },
      { fr:'Klaya',                      en:'Klaya',                            ar:'قلاية',                   price:28,  desc:'Morceaux de bœuf et foie, poivron vert frit, tomate frite, œuf au plat' },
      { fr:'Gigot d\'Agneau',            en:'Stuffed Leg of Lamb',              ar:'جيقو علوش محشي',          price:null, desc:'Sur commande — Beef pieces, liver pieces, fried green pepper, fried tomato and a fried egg' },
    ]
  },

  /* ── PAGE 7 — Poisson du Jour ── */
  {
    id: 'poisson-du-jour',
    icon: '🐟',
    fr: 'Poisson du Jour',
    en: 'Fish of the Day',
    ar: 'سمك اليوم',
    twoCol: false,
    note: '* Prix affiché au présentoir — Note au pâte, au couscous, à la crème, à la Sfaxienne ou grillé.',
    items: [
      { fr:'Loup',           en:'Bass — Wild / Farm-Raised',  ar:'قاروص — بلدي / مربي',     price:null, marketLabel:'* / 100 gr' },
      { fr:'Dorade',         en:'Dorade — Wild / Farm-Raised',ar:'وراطة — بلدي / مربي',     price:null, marketLabel:'* / 100 gr' },
      { fr:'Andassi',        en:'Sole',                       ar:'أنداس',                   price:null, marketLabel:'* / 100 gr' },
      { fr:'Mlou Hajar',     en:'Red Mullet',                 ar:'ملو حجر',                  price:null, marketLabel:'* / 100 gr' },
      { fr:'Mérou',          en:'Grouper (Mérou)',             ar:'مناني',                   price:null, marketLabel:'* / 100 gr' },
      { fr:'Crevette Royale',en:'Royal Shrimp',               ar:'جمبري ملكي',               price:null, marketLabel:'* / 100 gr' },
      { fr:'Langouste',      en:'Lobster',                    ar:'جراد البحر',               price:null, marketLabel:'* / 100 gr' },
    ]
  },

  /* ── PAGE 8 — Nos Spécialités (Seafood) ── */
  {
    id: 'nos-specialites',
    icon: '🦞',
    fr: 'Nos Spécialités',
    en: 'Our Specialties',
    ar: 'اختصاصنا',
    twoCol: false,
    items: [
      { fr:'Duo de Filet de Poisson à la Crème',en:'Fish Fillet Duo with Cream',       ar:'ديو شريحة سمك بالكريمة',    price:32  },
      { fr:'Duo de Filet de Poisson Pané',      en:'Fish Fillet Duo Breaded',           ar:'ديو شريحة سمك مبطن',        price:30  },
      { fr:'Poisson Farci',                     en:'Stuffed Fish',                      ar:'سمك محشي',                  price:42  },
      { fr:'Cocotte du Pêcheur',                en:'Fisher Man\'s Stew',                ar:'مارميت البحار',              price:50  },
      { fr:'Fianca Zitouna',                    en:'Fianca Zitouna',                    ar:'فيانكا زيتونة',              price:50,  desc:'Fruits de mer sautées à l\'ail' },
      { fr:'Symphonie Fruits de Mer',           en:'Seafood Symphony',                  ar:'سيمفوني بغلال البحر',        price:48  },
      { fr:'Paella Espagnole',                  en:'Spanish Paella',                    ar:'بايلا إسبانية',              price:78,  desc:'Fruits de mer, volaille, viande, moules' },
      { fr:'Délices de Mer',                    en:'Sea Delight',                       ar:'غلة البحر',                  price:88  },
      { fr:'Trésor Fruits de Mer Zitouna',      en:'Zitouna Seafood Treasure',          ar:'كنوز غلال البحر',            price:98  },
      { fr:'Assiette Marine Grillée',           en:'Grilled Seafood Platter',           ar:'طبق بحري مشوي',              price:45,  desc:'Poisson loup grillé, deux brochettes grillées' },
    ]
  },

  /* ── PAGE 9 — Boissons ── */
  {
    id: 'boissons',
    icon: '🥤',
    fr: 'Nos Boissons',
    en: 'Drinks',
    ar: 'المشروبات',
    twoCol: false,
    items: [
      { fr:'Eau Minérale',                en:'Mineral Water',    ar:'ماء معدني',                   price:4.5  },
      { fr:'Eau Minérale Gazéifiée',      en:'Sparkling Water',  ar:'ماء معدني غازي',               price:4.5  },
      { fr:'Boisson Gazeuse (Canette)',   en:'Soda',             ar:'صودا معلبة',                  price:5    },
      { fr:'Citronade',                   en:'Lemonade',         ar:'عصير الليمون',                 price:6    },
      { fr:'Jus d\'Orange',              en:'Orange Juice',     ar:'عصير البرتقال',                price:6.5  },
      { fr:'Mojito',                      en:'Mojito',           ar:'موخيتو',                       price:8.5  },
      { fr:'Jus Frais au Choix',          en:'Fresh Juice',      ar:'عصير طازج حسب الإختيار',      price:9    },
      { fr:'Café Lavazza',                en:'Lavazza Coffee',   ar:'قهوة لافازا',                  price:5    },
      { fr:'Shark',                       en:'Energy Drink',     ar:'شارك',                         price:12,  desc:'Boisson énergisante' },
    ]
  },

  /* ── PAGE 10 — Desserts ── */
  {
    id: 'desserts',
    icon: '🍰',
    fr: 'Nos Desserts',
    en: 'Our Desserts',
    ar: 'الحلويات',
    twoCol: false,
    kids: {
      price: 28,
      fr: 'Soupe, Escalope Panée ou Grillée et Pâte à la Sauce Blanche ou Sauce Rouge, Frites, un Jus + Dessert',
      en: 'Soup, Breaded or Grilled Cutlet or Pasta with White Sauce or Red Sauce + Fries, Juice + Dessert',
      ar: 'حساء، إسكالوب مبطن أو مشوي أو سباغتي بالصلصة بيضاء أو حمراء + فريت، عصير + التحلية'
    },
    items: [
      { fr:'Sorbet de Citron',           en:'Lemon Sorbet',              ar:'شربات الليمون',             price:6    },
      { fr:'Cheesecake au Choix',        en:'Cheesecake with the Choices',ar:'تشيز كيك حسب الإختيار',   price:12   },
      { fr:'Tiramisu',                   en:'Tiramisu',                   ar:'تيراميسو',                 price:12   },
      { fr:'Fondant au Chocolat',        en:'Chocolate Fondant',          ar:'فوندان بالشكولاتة',        price:9.5  },
      { fr:'Salade de Fruits',           en:'Fruit Salad',                ar:'سلسطة غلال',               price:12   },
      { fr:'Coupe de Glace Zitouna',     en:'Cup of Ice Cream',           ar:'أيس كريم',                 price:10   },
      { fr:'Panier de Fruits (1 pers)',   en:'Fruit Basket',               ar:'سلة غلال',                 price:15   },
    ]
  },
];

/* ═══════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);

function fmtPrice(p) {
  if (p === null || p === undefined) return null;
  return Number.isInteger(p) ? String(p) : p.toFixed(1);
}

function getHeaderH() {
  return $('site-header')?.offsetHeight ?? 110;
}

/* ═══════════════════════════════════════════════════
   RENDER NAV TABS
═══════════════════════════════════════════════════ */
function renderTabs() {
  const track = $('cat-nav-track');
  if (!track) return;
  track.innerHTML = MENU.map(cat => `
    <button class="cat-tab" data-target="${cat.id}" role="tab"
            aria-selected="false" aria-controls="${cat.id}">
      <span class="cat-tab-icon" aria-hidden="true">${cat.icon}</span>
      <span>${cat.fr}</span>
    </button>`).join('');
}

/* ═══════════════════════════════════════════════════
   RENDER MENU
═══════════════════════════════════════════════════ */
function renderMenu() {
  const main = $('menu-main');
  if (!main) return;
  main.innerHTML = MENU.map(cat => buildSection(cat)).join('<div class="section-gap"></div>');
}

function buildSection(cat) {
  const items = cat.items.map(item => buildItem(item)).join('');

  /* Kids menu box (desserts page) */
  const kidsHTML = cat.kids ? buildKidsMenu(cat.kids) : '';

  /* Footer note */
  const noteHTML = cat.note
    ? `<div class="section-note">${cat.note}</div>` : '';

  return `
<section class="menu-section fade-up" id="${cat.id}"
         aria-labelledby="title-${cat.id}">
  <div class="section-banner">

    <!-- Left green panel -->
    <div class="section-panel-left">
      <div class="section-icon-wrap" aria-hidden="true">${cat.icon}</div>
      <div class="section-title-block">
        <p class="section-title-en">${cat.en}</p>
        <h2 class="section-title-fr" id="title-${cat.id}">${cat.fr}</h2>
        <p class="section-title-ar" lang="ar" dir="rtl">${cat.ar}</p>
      </div>
    </div>

    <!-- Right white content panel -->
    <div class="section-panel-right">
      <div class="items-grid${cat.twoCol ? ' items-grid--2col' : ''}">
        ${items}
      </div>
      ${noteHTML}
      ${kidsHTML}
    </div>
  </div>
</section>`;
}

function buildItem(item) {
  const priceStr = fmtPrice(item.price);
  let priceHTML;

  if (item.marketLabel) {
    priceHTML = `<span class="item-price item-price--market" aria-label="Prix au présentoir">${item.marketLabel}</span>`;
  } else if (priceStr) {
    priceHTML = `<span class="item-price" aria-label="${priceStr} dinars">${priceStr}<sup class="price-dt">DT</sup></span>`;
  } else {
    priceHTML = `<span class="item-price item-price--market">Sur commande</span>`;
  }

  const descHTML = item.desc
    ? `<p class="item-desc">${item.desc}</p>` : '';

  return `
<article class="menu-item" data-fr="${item.fr}" data-en="${item.en || ''}" data-ar="${item.ar || ''}">
  <div class="item-body">
    <p class="item-name-fr">${item.fr}</p>
    ${item.en ? `<p class="item-name-en">${item.en}</p>` : ''}
    ${descHTML}
    ${item.ar ? `<p class="item-name-ar" lang="ar" dir="rtl">${item.ar}</p>` : ''}
  </div>
  ${priceHTML}
</article>`;
}

function buildKidsMenu(kids) {
  return `
<div class="kids-box" role="complementary" aria-label="Menu enfants">
  <p class="kids-box-title-ar" lang="ar" dir="rtl">قائمة طعام الأطفال</p>
  <p class="kids-box-title">Menu Enfants · Menu Kids</p>
  <div class="kids-price-badge">
    <span class="kids-price-value">${kids.price}</span>
    <sup class="price-dt" style="font-size:.9rem;color:var(--c-text-soft)">DT</sup>
  </div>
  <p class="kids-box-desc">${kids.fr}</p>
  <p class="kids-box-desc" style="margin-top:4px">${kids.en}</p>
  <p class="kids-box-desc-ar" lang="ar" dir="rtl">${kids.ar}</p>
</div>`;
}

/* ═══════════════════════════════════════════════════
   SEARCH
═══════════════════════════════════════════════════ */
let searchTimer = null;

function normalize(s) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function performSearch(q) {
  const raw = q.trim();
  const query = normalize(raw);
  const banner = $('search-banner');
  const termEl = $('search-term-display');
  const countEl = $('search-count');
  const clearBtn = $('search-clear');

  /* Remove previous highlights */
  document.querySelectorAll('mark.hl').forEach(m => m.replaceWith(m.textContent));
  document.getElementById('menu-main')?.normalize();

  if (!query) {
    banner.hidden = true;
    clearBtn.hidden = true;
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('is-hidden'));
    document.querySelectorAll('.menu-section').forEach(el => el.classList.remove('is-hidden'));
    document.querySelector('.no-results')?.remove();
    return;
  }

  clearBtn.hidden = false;
  termEl.textContent = raw;

  let matchCount = 0;

  document.querySelectorAll('.menu-section').forEach(section => {
    let sectionMatch = false;
    section.querySelectorAll('.menu-item').forEach(item => {
      const text = normalize(item.dataset.fr + ' ' + item.dataset.en + ' ' + item.dataset.ar);
      if (text.includes(query)) {
        item.classList.remove('is-hidden');
        sectionMatch = true;
        matchCount++;
        /* Highlight */
        item.querySelectorAll('.item-name-fr, .item-name-en, .item-name-ar').forEach(el => hlNode(el, query));
      } else {
        item.classList.add('is-hidden');
      }
    });
    section.classList.toggle('is-hidden', !sectionMatch);
  });

  banner.hidden = false;
  countEl.textContent = `${matchCount} résultat${matchCount !== 1 ? 's' : ''}`;

  /* No results message */
  document.querySelector('.no-results')?.remove();
  if (matchCount === 0) {
    const el = document.createElement('div');
    el.className = 'no-results';
    el.innerHTML = `<p>🍽️</p><h3>Aucun résultat pour « ${raw} »</h3><p>Essayez un autre mot-clé.</p>`;
    $('menu-main').appendChild(el);
  }
}

function hlNode(el, query) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let n;
  while ((n = walker.nextNode())) nodes.push(n);
  nodes.forEach(tn => {
    const t = tn.textContent;
    const idx = normalize(t).indexOf(query);
    if (idx < 0) return;
    const before = t.slice(0, idx);
    const match  = t.slice(idx, idx + query.length);
    const after  = t.slice(idx + query.length);
    const frag = document.createDocumentFragment();
    if (before) frag.appendChild(document.createTextNode(before));
    const mark = document.createElement('mark');
    mark.className = 'hl';
    mark.textContent = match;
    frag.appendChild(mark);
    if (after) frag.appendChild(document.createTextNode(after));
    tn.parentNode.replaceChild(frag, tn);
  });
}

function clearSearch() {
  const input = $('search-input');
  if (input) { input.value = ''; input.focus(); }
  performSearch('');
}

/* ═══════════════════════════════════════════════════
   THEME
═══════════════════════════════════════════════════ */
function initTheme() {
  const saved = localStorage.getItem('zitouna-theme');
  const dark  = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  applyTheme(dark ? 'dark' : 'light');
}
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('zitouna-theme', t);
  $('icon-moon').style.display = t === 'light' ? 'block' : 'none';
  $('icon-sun').style.display  = t === 'dark'  ? 'block' : 'none';
}
function toggleTheme() {
  applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

/* ═══════════════════════════════════════════════════
   NAVIGATION — reliable scroll-based active tab
═══════════════════════════════════════════════════ */
let isScrollingToSection = false;
let scrollLockTimer = null;

function getActiveSectionId() {
  const y = window.scrollY + getHeaderH() + 20;
  const sections = [...document.querySelectorAll('.menu-section')];
  let active = sections[0]?.id ?? null;
  for (const s of sections) {
    if (s.offsetTop <= y) active = s.id;
    else break;
  }
  return active;
}

function setActiveTab(id, scrollTrack = false) {
  const track = $('cat-nav-track');
  document.querySelectorAll('.cat-tab').forEach(tab => {
    const isMatch = tab.dataset.target === id;
    tab.classList.toggle('is-active', isMatch);
    tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    if (isMatch && scrollTrack && track) {
      const center = tab.offsetLeft - track.clientWidth / 2 + tab.offsetWidth / 2;
      track.scrollTo({ left: center, behavior: 'smooth' });
    }
  });
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  setActiveTab(id, true);
  isScrollingToSection = true;
  clearTimeout(scrollLockTimer);
  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderH() - 8;
  window.scrollTo({ top, behavior: 'smooth' });
  scrollLockTimer = setTimeout(() => { isScrollingToSection = false; }, 750);
}

/* ═══════════════════════════════════════════════════
   SCROLL LISTENER (rAF-throttled)
═══════════════════════════════════════════════════ */
let rafId = null, lastActive = null;

function onScroll() {
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    rafId = null;
    /* Back-to-top */
    const btt = $('back-to-top');
    btt?.classList.toggle('visible', window.scrollY > 400);
    /* Active tab */
    if (isScrollingToSection) return;
    const id = getActiveSectionId();
    if (id && id !== lastActive) { lastActive = id; setActiveTab(id, true); }
  });
}

/* ═══════════════════════════════════════════════════
   FADE-UP ANIMATION (IntersectionObserver)
═══════════════════════════════════════════════════ */
function initFadeUp() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.05 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

/* ═══════════════════════════════════════════════════
   NAV ARROW CONTROLS
═══════════════════════════════════════════════════ */
function initNavArrows() {
  const track = $('cat-nav-track');
  const btnL  = $('nav-arrow-l');
  const btnR  = $('nav-arrow-r');
  if (!track || !btnL || !btnR) return;
  const AMT = 180;
  btnL.addEventListener('click', () => track.scrollBy({ left: -AMT, behavior: 'smooth' }));
  btnR.addEventListener('click', () => track.scrollBy({ left:  AMT, behavior: 'smooth' }));
  const upd = () => {
    btnL.style.opacity = track.scrollLeft > 2 ? '1' : '.3';
    btnR.style.opacity = (track.scrollLeft + track.clientWidth) < (track.scrollWidth - 4) ? '1' : '.3';
  };
  track.addEventListener('scroll', upd, { passive: true });
  window.addEventListener('resize', upd);
  upd();
}

/* ═══════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* 1. Theme */
  initTheme();
  $('theme-toggle')?.addEventListener('click', toggleTheme);

  /* 2. Render */
  renderTabs();
  renderMenu();

  /* 3. Search */
  $('search-input')?.addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => performSearch(e.target.value), 200);
  });
  $('search-clear')?.addEventListener('click', clearSearch);
  $('search-banner-clear')?.addEventListener('click', clearSearch);

  /* 4. Tab clicks */
  $('cat-nav-track')?.addEventListener('click', e => {
    const tab = e.target.closest('.cat-tab');
    if (tab?.dataset.target) scrollToSection(tab.dataset.target);
  });
  $('cat-nav-track')?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.target.closest('.cat-tab')?.click(); }
  });

  /* 5. Hero CTA */
  $('hero-cta')?.addEventListener('click', e => {
    e.preventDefault();
    const first = document.querySelector('.menu-section');
    if (first) scrollToSection(first.id);
  });

  /* 6. Back to top */
  $('back-to-top')?.addEventListener('click', () => {
    isScrollingToSection = true;
    clearTimeout(scrollLockTimer);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    scrollLockTimer = setTimeout(() => { isScrollingToSection = false; }, 750);
  });

  /* 7. Scroll listener */
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* 8. Fade-up animations */
  initFadeUp();

  /* 9. Nav arrows */
  initNavArrows();
});

