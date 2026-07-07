const ANNIVERSARY_DATE = "18/02/2024";

// ===================== FLOWER DEFINITIONS =====================
const FLOWER_TYPES = [
    {
        name: "Rose",
        stem: "#3a7d44",
        petalColor: "#e05080",
        petalColor2: "#c03060",
        draw(size) { return drawRose(size, this.petalColor, this.petalColor2, this.stem); }
    },
    {
        name: "Tulpe",
        stem: "#4a8c55",
        petalColor: "#e86090",
        petalColor2: "#ff9eb5",
        draw(size) { return drawTulip(size, this.petalColor, this.petalColor2, this.stem); }
    },
    {
        name: "Sonnenblume",
        stem: "#5a8a3c",
        petalColor: "#f5c842",
        petalColor2: "#e8a020",
        draw(size) { return drawSunflower(size, this.petalColor, this.petalColor2, this.stem); }
    },
    {
        name: "Lavendel",
        stem: "#5a7a40",
        petalColor: "#9b7fc7",
        petalColor2: "#7a5ba8",
        draw(size) { return drawLavender(size, this.petalColor, this.petalColor2, this.stem); }
    },
    {
        name: "Margerite",
        stem: "#4a8050",
        petalColor: "#f0f0f0",
        petalColor2: "#e0e0e0",
        draw(size) { return drawDaisy(size, this.petalColor, this.petalColor2, this.stem); }
    },
    {
        name: "Kirschblüte",
        stem: "#6a5a40",
        petalColor: "#ffb7c5",
        petalColor2: "#ff8fa3",
        draw(size) { return drawCherry(size, this.petalColor, this.petalColor2, this.stem); }
    },
    {
        name: "Vergissmeinnicht",
        stem: "#4a8a55",
        petalColor: "#6ab0e8",
        petalColor2: "#4888c8",
        draw(size) { return drawForgetMeNot(size, this.petalColor, this.petalColor2, this.stem); }
    },
];

function drawRose(s, p1, p2, stem) {
    const sc = s / 90;
    return `<svg width="${s}" height="${s*1.55}" viewBox="0 0 90 140" xmlns="http://www.w3.org/2000/svg">
        <line x1="45" y1="85" x2="45" y2="138" stroke="${stem}" stroke-width="3" stroke-linecap="round"/>
        <path d="M45 95 Q35 88 32 80" stroke="${stem}" stroke-width="2" fill="none"/>
        <ellipse cx="27" cy="78" rx="9" ry="5" fill="${stem}" opacity="0.7" transform="rotate(-30 27 78)"/>
        <circle cx="45" cy="52" r="30" fill="${p1}" opacity="0.3"/>
        <path d="M45 30 Q58 35 62 48 Q65 60 55 68 Q45 75 35 68 Q25 60 28 48 Q32 35 45 30Z" fill="${p1}"/>
        <path d="M45 36 Q54 40 57 50 Q59 60 52 65 Q45 70 38 65 Q31 60 33 50 Q36 40 45 36Z" fill="${p2}"/>
        <path d="M45 42 Q51 45 53 52 Q54 59 49 62 Q45 65 41 62 Q36 59 37 52 Q39 45 45 42Z" fill="${p1}" opacity="0.6"/>
        <ellipse cx="45" cy="48" rx="6" ry="4" fill="${p2}" opacity="0.8"/>
    </svg>`;
}

function drawTulip(s, p1, p2, stem) {
    return `<svg width="${s}" height="${s*1.55}" viewBox="0 0 90 140" xmlns="http://www.w3.org/2000/svg">
        <line x1="45" y1="90" x2="45" y2="138" stroke="${stem}" stroke-width="3" stroke-linecap="round"/>
        <path d="M45 100 Q28 92 25 80" stroke="${stem}" stroke-width="2" fill="none"/>
        <ellipse cx="21" cy="76" rx="10" ry="5" fill="${stem}" opacity="0.7" transform="rotate(-40 21 76)"/>
        <path d="M30 70 Q30 40 45 28 Q60 40 60 70 Q55 80 45 82 Q35 80 30 70Z" fill="${p1}"/>
        <path d="M35 65 Q35 42 45 32 Q55 42 55 65 Q52 74 45 76 Q38 74 35 65Z" fill="${p2}"/>
        <path d="M40 60 Q40 45 45 38 Q50 45 50 60" fill="${p1}" opacity="0.4"/>
    </svg>`;
}

function drawSunflower(s, p1, p2, stem) {
    const petals = [];
    for(let i=0;i<12;i++){
        const angle = (i * 30) * Math.PI/180;
        const x = 45 + Math.cos(angle)*22;
        const y = 45 + Math.sin(angle)*22;
        petals.push(`<ellipse cx="${x}" cy="${y}" rx="7" ry="11" fill="${p1}" transform="rotate(${i*30} ${x} ${y})"/>`);
    }
    return `<svg width="${s}" height="${s*1.55}" viewBox="0 0 90 140" xmlns="http://www.w3.org/2000/svg">
        <line x1="45" y1="68" x2="45" y2="138" stroke="${stem}" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M45 85 Q30 78 28 68" stroke="${stem}" stroke-width="2" fill="none"/>
        <ellipse cx="23" cy="64" rx="10" ry="5" fill="${stem}" opacity="0.7" transform="rotate(-35 23 64)"/>
        ${petals.join('')}
        <circle cx="45" cy="45" r="16" fill="${p2}"/>
        <circle cx="45" cy="45" r="11" fill="#3a2010"/>
        <circle cx="41" cy="41" r="2" fill="${p2}" opacity="0.4"/>
        <circle cx="49" cy="43" r="1.5" fill="${p2}" opacity="0.3"/>
    </svg>`;
}

function drawLavender(s, p1, p2, stem) {
    const buds = [];
    for(let i=0;i<8;i++){
        const y = 20 + i*8;
        const xOff = (i%2===0)?-6:6;
        buds.push(`<ellipse cx="${45+xOff}" cy="${y}" rx="5" ry="7" fill="${i<4?p1:p2}" opacity="${0.9-i*0.06}"/>`);
    }
    return `<svg width="${s}" height="${s*1.55}" viewBox="0 0 90 140" xmlns="http://www.w3.org/2000/svg">
        <line x1="45" y1="85" x2="45" y2="138" stroke="${stem}" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="45" y1="20" x2="45" y2="88" stroke="${stem}" stroke-width="2" opacity="0.7"/>
        ${buds.join('')}
        <ellipse cx="35" cy="90" rx="8" ry="4" fill="${stem}" opacity="0.6" transform="rotate(-20 35 90)"/>
        <ellipse cx="55" cy="95" rx="8" ry="4" fill="${stem}" opacity="0.6" transform="rotate(20 55 95)"/>
    </svg>`;
}

function drawDaisy(s, p1, p2, stem) {
    const petals = [];
    for(let i=0;i<10;i++){
        const angle = (i*36)*Math.PI/180;
        const x = 45+Math.cos(angle)*20;
        const y = 45+Math.sin(angle)*20;
        petals.push(`<ellipse cx="${x}" cy="${y}" rx="6" ry="12" fill="${p1}" stroke="${p2}" stroke-width="0.5" transform="rotate(${i*36} ${x} ${y})"/>`);
    }
    return `<svg width="${s}" height="${s*1.55}" viewBox="0 0 90 140" xmlns="http://www.w3.org/2000/svg">
        <line x1="45" y1="62" x2="45" y2="138" stroke="${stem}" stroke-width="3" stroke-linecap="round"/>
        <path d="M45 78 Q32 72 30 62" stroke="${stem}" stroke-width="2" fill="none"/>
        <ellipse cx="26" cy="58" rx="9" ry="4.5" fill="${stem}" opacity="0.7" transform="rotate(-35 26 58)"/>
        ${petals.join('')}
        <circle cx="45" cy="45" r="12" fill="#f5d020"/>
        <circle cx="45" cy="45" r="8" fill="#e8b800"/>
    </svg>`;
}

function drawCherry(s, p1, p2, stem) {
    const petals = [];
    for(let i=0;i<5;i++){
        const angle = (i*72-90)*Math.PI/180;
        const x = 45+Math.cos(angle)*18;
        const y = 45+Math.sin(angle)*18;
        petals.push(`<ellipse cx="${x}" cy="${y}" rx="10" ry="13" fill="${p1}" opacity="0.9" transform="rotate(${i*72} ${x} ${y})"/>`);
    }
    return `<svg width="${s}" height="${s*1.55}" viewBox="0 0 90 140" xmlns="http://www.w3.org/2000/svg">
        <line x1="45" y1="68" x2="45" y2="138" stroke="${stem}" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M45 80 Q32 74 30 65" stroke="${stem}" stroke-width="1.5" fill="none"/>
        <ellipse cx="26" cy="62" rx="8" ry="4" fill="${stem}" opacity="0.6" transform="rotate(-35 26 62)"/>
        ${petals.join('')}
        <circle cx="45" cy="45" r="8" fill="${p2}" opacity="0.6"/>
        <circle cx="42" cy="42" r="3" fill="white" opacity="0.3"/>
    </svg>`;
}

function drawForgetMeNot(s, p1, p2, stem) {
    const clusters = [
        {x:45,y:35}, {x:30,y:45}, {x:60,y:45}, {x:38,y:58}, {x:52,y:58}
    ];
    let svgContent = '';
    clusters.forEach(c => {
        for(let i=0;i<5;i++){
            const a = (i*72)*Math.PI/180;
            svgContent += `<ellipse cx="${c.x+Math.cos(a)*9}" cy="${c.y+Math.sin(a)*9}" rx="5" ry="7" fill="${p1}" opacity="0.9" transform="rotate(${i*72} ${c.x+Math.cos(a)*9} ${c.y+Math.sin(a)*9})"/>`;
        }
        svgContent += `<circle cx="${c.x}" cy="${c.y}" r="4" fill="#f5e040"/>`;
    });
    return `<svg width="${s}" height="${s*1.55}" viewBox="0 0 90 140" xmlns="http://www.w3.org/2000/svg">
        <line x1="45" y1="72" x2="45" y2="138" stroke="${stem}" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="45" y1="38" x2="30" y2="48" stroke="${stem}" stroke-width="1.5" opacity="0.7"/>
        <line x1="45" y1="38" x2="60" y2="48" stroke="${stem}" stroke-width="1.5" opacity="0.7"/>
        <line x1="38" y1="50" x2="38" y2="62" stroke="${stem}" stroke-width="1.5" opacity="0.7"/>
        <line x1="52" y1="50" x2="52" y2="62" stroke="${stem}" stroke-width="1.5" opacity="0.7"/>
        ${svgContent}
        <ellipse cx="32" cy="80" rx="8" ry="4" fill="${stem}" opacity="0.6" transform="rotate(-20 32 80)"/>
    </svg>`;
}

// ===================== STATE (localStorage) =====================
const STORAGE_KEY = 'loveu_vase_v2';

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch(e) {}
    return { vase: [], lastDay: null, todayFlowerIdx: null, todayInVase: false };
}

function saveState(s) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch(e) {}
}

// Get today's date string YYYY-MM-DD
function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function hashString(str) {
    let hash = 0;
    for(let i=0;i<str.length;i++) hash = ((hash<<5)-hash)+str.charCodeAt(i);
    return Math.abs(hash);
}

// Deterministic flower index for a given day
function flowerForDay(dateStr) {
    return hashString(dateStr) % FLOWER_TYPES.length;
}

// ===================== DRAG & DROP =====================
let dragState = null; // { el, startX, startY, origParent, origPlaceholder }

function makeDraggable(el, onDrop) {
    el.addEventListener('pointerdown', function(e) {
        if (e.button !== undefined && e.button !== 0) return;
        e.preventDefault();

        const rect = el.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const clone = el.cloneNode(true);
        clone.style.position = 'fixed';
        clone.style.pointerEvents = 'none';
        clone.style.zIndex = '9999';
        clone.style.opacity = '0.92';
        clone.style.transition = 'none';
        clone.style.filter = 'drop-shadow(0 12px 24px rgba(0,0,0,0.3))';
        clone.style.width = rect.width + 'px';
        clone.style.height = rect.height + 'px';
        clone.style.left = (e.clientX - offsetX) + 'px';
        clone.style.top = (e.clientY - offsetY) + 'px';
        document.body.appendChild(clone);
        el.style.opacity = '0.25';

        const dropZone = document.getElementById('vaseDropZone');

        function onMove(ev) {
            ev.preventDefault();
            clone.style.left = (ev.clientX - offsetX) + 'px';
            clone.style.top  = (ev.clientY - offsetY) + 'px';
            const vRect = document.getElementById('vaseArea').getBoundingClientRect();
            const over = ev.clientX >= vRect.left && ev.clientX <= vRect.right && ev.clientY >= vRect.top && ev.clientY <= vRect.bottom;
            dropZone.classList.toggle('active', over);
        }

        function onUp(ev) {
            document.removeEventListener('pointermove', onMove);
            document.removeEventListener('pointerup', onUp);
            clone.remove();
            dropZone.classList.remove('active');
            el.style.opacity = '';
            const vRect = document.getElementById('vaseArea').getBoundingClientRect();
            const overVase = ev.clientX >= vRect.left && ev.clientX <= vRect.right &&
                ev.clientY >= vRect.top  && ev.clientY <= vRect.bottom;
            onDrop(overVase, el);
        }

        document.addEventListener('pointermove', onMove, { passive: false });
        document.addEventListener('pointerup', onUp);
    }, { passive: false });
}

// ===================== GARDEN INIT =====================
function initGarden() {
    const state = loadState();
    const today = todayStr();

    // Assign today's flower if new day
    if(state.lastDay !== today) {
        state.lastDay = today;
        state.todayFlowerIdx = flowerForDay(today);
        state.todayInVase = false;
        saveState(state);
    }

    renderGarden(state);
}

function renderGarden(state) {
    const todayFlowerEl = document.getElementById('todayFlower');
    const todayLabel = document.getElementById('todayLabel');
    const todayFlowerName = document.getElementById('todayFlowerName');
    const vaseFlowersEl = document.getElementById('vaseFlowers');
    const vaseHint = document.getElementById('vaseHint');
    const streakText = document.getElementById('streakText');

    const flowerType = FLOWER_TYPES[state.todayFlowerIdx];

    // Streak = vase count + today if in vase
    const total = state.vase.length + (state.todayInVase ? 0 : 0); // just vase size for now
    const streakCount = state.vase.length;
    streakText.textContent = streakCount === 1 ? '1 Blume in der Vase' : `${streakCount} Blumen in der Vase`;

    // Today's flower
    if(state.todayInVase) {
        todayFlowerEl.innerHTML = '';
        todayLabel.textContent = 'Heutige Blume ist in der Vase 🌸';
        todayFlowerName.textContent = '';
        todayFlowerEl.style.opacity = '0.3';
        todayFlowerEl.style.pointerEvents = 'none';
    } else {
        todayFlowerEl.innerHTML = flowerType.draw(90);
        todayFlowerEl.style.opacity = '';
        todayFlowerEl.style.pointerEvents = '';
        todayLabel.textContent = 'Heutige Blume — ziehe sie in die Vase';
        todayFlowerName.textContent = flowerType.name;

        // make draggable
        makeDraggable(todayFlowerEl, (overVase) => {
            if(overVase) {
                const state2 = loadState();
                state2.todayInVase = true;
                // Add to vase
                state2.vase.push({ idx: state2.todayFlowerIdx, day: state2.lastDay });
                saveState(state2);
                renderGarden(state2);
                showPickupEffect();
            }
        });
    }

    // Vase flowers
    vaseFlowersEl.innerHTML = '';
    if(state.vase.length === 0) {
        vaseHint.style.display = '';
    } else {
        vaseHint.style.display = 'none';
        const n = state.vase.length;
        const center = (n - 1) / 2;
        state.vase.forEach((item, i) => {
            const ft = FLOWER_TYPES[item.idx];
            const div = document.createElement('div');
            div.className = 'vase-flower';
// WICHTIG: Hier auf 90 ändern, damit die Blumen groß genug für die Vase sind
            div.innerHTML = ft.draw(90);
            div.title = ft.name;

            const seed = hashString(item.day + ':' + i);

            // --- NEUER BOUQUET ALGORITHMUS (FÜR DEN VASENBODEN) ---

            const normalizedX = n > 1 ? (i / (n - 1)) * 2 - 1 : 0;
            const zLayer = ((seed % 73) / 72);
            const spreadFactor = Math.min(1, n / 15);

            // X-Position: Sehr klein gehalten, da alle am engen Vasenboden starten
            const MAX_X = 8 * spreadFactor;
            const jitterX = (((seed >> 2) % 100) / 50 - 1) * 2;
            const baseX = (normalizedX * MAX_X) + jitterX;

            // Rotation: Stark begrenzt (22 Grad), damit sie gebündelt durch den Hals passen
            const MAX_ANGLE = 22 * spreadFactor;
            const jitterAngle = (((seed >> 4) % 100) / 50 - 1) * 3;
            const angle = (normalizedX * MAX_ANGLE) + jitterAngle;

            // Höhe: Minimaler Lift, damit die Stängel SICHER den Boden berühren!
            const domeHeight = (1 - Math.pow(Math.abs(normalizedX), 1.5)) * -8 * spreadFactor;
            const depthHeight = (1 - zLayer) * -5;
            const jitterHeight = (((seed >> 6) % 100) / 50 - 1) * 3;

            const lift = domeHeight + depthHeight + jitterHeight;

            // Skalierung: Vordere Blumen wirken etwas größer
            const scale = 0.85 + (zLayer * 0.15);

            div.style.setProperty('--rot', angle + 'deg');
            div.style.setProperty('--basex', baseX + 'px');
            div.style.setProperty('--lift', lift + 'px');
            div.style.setProperty('--scale', scale.toFixed(2));

            div.style.zIndex = String(Math.round(zLayer * 100));
            // --------------------------------

            vaseFlowersEl.appendChild(div);

            makeDraggable(div, (overVase) => {
                if(!overVase) {
                    // Remove from vase
                    const state2 = loadState();
                    // If this is today's flower, mark as not in vase
                    if(item.day === state2.lastDay) {
                        state2.todayInVase = false;
                    }
                    state2.vase.splice(i, 1);
                    saveState(state2);
                    renderGarden(state2);
                }
            });
        });
    }
}

function showPickupEffect() {
    // Small celebration
    const el = document.createElement('div');
    el.textContent = '🌸';
    el.style.cssText = 'position:fixed;font-size:2rem;z-index:9999;pointer-events:none;transition:all 0.8s ease;top:50%;left:50%;transform:translate(-50%,-50%)';
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity='0'; el.style.transform='translate(-50%,-200%)'; }, 50);
    setTimeout(() => el.remove(), 900);
}

// ===================== ORIGINAL SCRIPTS =====================
const reasons = [
    "Weil dein Lachen mein Lieblingsgeräusch auf der ganzen Welt ist.",
    "Weil du mir zuhörst, auch wenn ich zu viel rede.",
    "Weil deine Umarmungen sich wie Zuhause anfühlen.",
    "Weil du morgens die schönste Person bist, die ich sehe.",
    "Weil du mich zum besseren Menschen machst.",
    "Weil du für mich da bist, ohne zu zögern.",
    "Weil du so herzlich mit anderen Menschen umgehst.",
    "Weil du meine Fehler siehst und mich trotzdem liebst.",
    "Weil du mich mit kleinen Sachen glücklich machst.",
    "Weil deine Stimme mich beruhigt, egal wie stressig der Tag war.",
    "Weil du mich immer wieder zum Lachen bringst.",
    "Weil du geduldig mit mir bist.",
    "Weil du meine Träume genauso ernst nimmst wie deine eigenen.",
    "Weil du mir Mut machst, Neues zu wagen.",
    "Weil du so schlau bist.",
    "Weil du dich um die Menschen kümmerst, die dir wichtig sind.",
    "Weil du mich akzeptierst, genau so wie ich bin.",
    "Weil du kleine Momente zu besonderen machst.",
    "Weil du mich niemals im Stich lässt.",
    "Weil du so gut zuhören kannst.",
    "Weil du meine beste Freundin bist.",
    "Weil du so liebevoll mit Tieren umgehst.",
    "Weil du weißt, wie man mich aufmuntert.",
    "Weil du so ehrgeizig bist und trotzdem bescheiden bleibst.",
    "Weil du meinen schlechten Humor erträgst.",
    "Weil du mich stolz machst.",
    "Weil du so schön bist, wenn du konzentriert arbeitest.",
    "Weil du mich mit deiner Neugier ansteckst.",
    "Weil du so kreativ bist.",
    "Weil du meine Familie in dein Herz geschlossen hast.",
    "Weil du meine Erfolge feierst, als wären es deine eigenen.",
    "Weil du mich mit deiner Fürsorge überwältigst.",
    "Weil dein Herz so groß ist.",
    "Weil du dich nicht verstellst.",
    "Weil du für uns kämpfst, wenn es schwierig wird.",
    "Weil du meine schlechten Tage besser machst.",
    "Weil du so toll tanzt.",
    "Weil du meine Lieblingsperson bist.",
    "Weil du so großzügig bist.",
    "Weil du mir Sicherheit gibst.",
    "Weil du mich mit deinem Vertrauen beschenkst.",
    "Weil du meine Gedanken manchmal besser kennst als ich selbst.",
    "Weil du mich nie kleinmachst.",
    "Weil du mich mit deiner Willenskraft inspirierst.",
    "Weil du mich immer verteidigst.",
    "Weil du mir zeigst, was bedingungslose Liebe bedeutet.",
    "Weil du mich mit deiner Ausdauer beeindruckst.",
    "Weil du meine Meinung wirklich hören willst.",
    "Weil du mich mit einem Blick verstehst.",
    "Weil du so treu bist.",
    "Weil du meine Zukunft heller machst.",
    "Weil du mich anspornst, mein Bestes zu geben.",
    "Weil du mich niemals langweilst.",
    "Weil du mir beibringst, im Moment zu leben.",
    "Weil du mich mit deiner Stärke trägst, wenn ich schwach bin.",
    "Weil du meine Zweifel mit Geduld beantwortest.",
    "Weil du mich jeden Tag aufs Neue wählst.",
    "Weil unsere Zukunft mit dir das ist, worauf ich mich am meisten freue.",
];

let remaining = [...reasons];

const form = document.getElementById('dateForm');
const input = document.getElementById('dateInput');
const hint = document.getElementById('hint');
const gate = document.getElementById('gate');
const mainEl = document.getElementById('main');
const canvas = document.getElementById('heartsCanvas');

function normalize(str){ return str.replace(/\D/g, ''); }

// Reads the current wall-clock time in Berlin and returns it as a UTC-labeled
// timestamp, so date arithmetic always reflects German civil time regardless
// of the visitor's own device timezone (and correctly handles CET/CEST).
function berlinNowAsUTC() {
    const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Berlin',
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false
    }).formatToParts(new Date());
    const p = {};
    parts.forEach(part => { if (part.type !== 'literal') p[part.type] = parseInt(part.value, 10); });
    return Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
}

function updateDaysCounter(){
    const [day, month, year] = ANNIVERSARY_DATE.split('/').map(Number);
    const startUTC = Date.UTC(year, month - 1, day, 0, 0, 0);
    const nowUTC = berlinNowAsUTC();

    const startMid = Date.UTC(year, month - 1, day);
    const nowDate = new Date(nowUTC);
    const nowMid = Date.UTC(nowDate.getUTCFullYear(), nowDate.getUTCMonth(), nowDate.getUTCDate());
    const diffDays = Math.floor((nowMid - startMid) / 86400000);
    const daysEl = document.getElementById('daysNumber');
    if(daysEl) daysEl.textContent = diffDays.toLocaleString('de-DE');

    const totalMs = nowUTC - startUTC;
    const totalSeconds = Math.max(0, Math.floor(totalMs / 1000));
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const liveEl = document.getElementById('liveTicker');
    if(liveEl) liveEl.textContent = `${hours} Std ${minutes} Min ${seconds} Sek`;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const val = normalize(input.value);
    const target = normalize(ANNIVERSARY_DATE);

    if(val === target){
        gate.classList.add('open');
        hint.textContent = '';
        setTimeout(() => {
            gate.style.display = 'none';
            mainEl.style.display = 'block';
            canvas.style.display = 'block';
            updateDaysCounter();
            setInterval(updateDaysCounter, 1000);
            startHearts();
            initGarden();
        }, 900);
    } else {
        hint.textContent = 'Das ist nicht ganz richtig... versuch es nochmal.';
        hint.classList.add('error');
        form.classList.add('shake');
        setTimeout(() => form.classList.remove('shake'), 450);
    }
});

const reasonBtn = document.getElementById('reasonBtn');
const reasonDisplay = document.getElementById('reasonDisplay');

reasonBtn.addEventListener('click', () => {
    if(remaining.length === 0) remaining = [...reasons];
    const idx = Math.floor(Math.random() * remaining.length);
    const chosen = remaining.splice(idx, 1)[0];
    reasonDisplay.classList.add('swap');
    setTimeout(() => {
        reasonDisplay.textContent = chosen;
        reasonDisplay.classList.remove('swap');
    }, 200);
});

function startHearts(){
    const ctx = canvas.getContext('2d');
    function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    const hearts = [];
    const HEART_COUNT = window.innerWidth < 500 ? 22 : 40;
    function makeHeart(){
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height,
            size: 8 + Math.random() * 16,
            speed: 0.6 + Math.random() * 1.6,
            drift: (Math.random() - 0.5) * 0.6,
            opacity: 0.35 + Math.random() * 0.5,
            hue: Math.random() > 0.5 ? '#B07A8A' : '#C4956A'
        };
    }
    for(let i=0;i<HEART_COUNT;i++) hearts.push(makeHeart());
    function drawHeart(h){
        ctx.save();
        ctx.globalAlpha = h.opacity;
        ctx.translate(h.x, h.y);
        ctx.scale(h.size/16, h.size/16);
        ctx.fillStyle = h.hue;
        ctx.beginPath();
        ctx.moveTo(0, 4);
        ctx.bezierCurveTo(0, 0, -8, 0, -8, -5);
        ctx.bezierCurveTo(-8, -10, 0, -10, 0, -4);
        ctx.bezierCurveTo(0, -10, 8, -10, 8, -5);
        ctx.bezierCurveTo(8, 0, 0, 0, 0, 4);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        hearts.forEach(h => {
            h.y += h.speed;
            h.x += h.drift;
            if(h.y > canvas.height + 20) Object.assign(h, makeHeart(), {y: -20});
            drawHeart(h);
        });
        requestAnimationFrame(animate);
    }
    animate();
}