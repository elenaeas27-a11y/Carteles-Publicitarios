const INITIAL_JSON = {
    style: "fantasía cinematográfica",
    campaign_type: "lanzamiento de producto",
    target_audience: "jóvenes adultos interesados en experiencias premium",
    product: "perfume artesanal inspirado en la primavera japonesa",
    brand: "Sakura Dreams",
    headline: "Belleza que florece",
    subtitle: "Una fragancia inspirada en la calma de la naturaleza",
    call_to_action: "Descubre la colección",
    visual_references: "cartel de perfume de lujo, estética editorial elegante, publicidad premium de cosmética natural",
    setting: "un jardín japonés con cerezos en flor",
    subject: "una mujer joven con kimono azul",
    animal: "zorro blanco",
    interaction: "el zorro blanco descansa junto a la mujer bajo los pétalos cayendo",
    lighting: "luz suave de primavera",
    mood: "pacífico y emotivo",
    color_palette: "azules suaves, rosa cerezo, blanco cálido y dorado tenue",
    composition: "cartel cuadrado con protagonista centrada, producto visible, fondo delicado y espacio limpio para texto",
    typography: "tipografía elegante, limpia, legible y coherente con una marca premium"
};

const STYLES = [
    "fantasía cinematográfica", "acuarela artística", "surrealismo", "arte cyberpunk",
    "realismo mágico", "pintura al óleo", "anime detallado", "arte de papel recortado",
    "minimalismo premium", "fotografía editorial", "cartel retro", "diseño futurista",
    "publicidad de lujo", "estética urbana", "producto hiperrealista", "estilo cinematográfico comercial"
];

const MODELS = [
    { id: "flux", name: "Flux (Default)" },
    { id: "nanobanana", name: "Nanobanana" },
    { id: "seedream", name: "Seedream" },
    { id: "ideogram-v4-turbo", name: "Ideogram V4" },
    { id: "wan-image", name: "Wan Image" },
    { id: "qwen-image", name: "Qwen Image" },
    { id: "nova-canvas", name: "Nova Canvas" }
];

const TEMPLATES = [
    {
        name: "Perfume Premium",
        thumb: "assets/template-1.jpg",
        data: INITIAL_JSON
    },
    {
        name: "Zapatillas Urbanas",
        thumb: "assets/template-2.jpg",
        data: {
            style: "estética urbana", campaign_type: "lanzamiento", target_audience: "jóvenes streetwear",
            product: "Zapatillas deportivas con luces de neón", brand: "NeonStep", headline: "Pisa el futuro",
            subtitle: "La ciudad a tus pies", call_to_action: "Compra ahora",
            visual_references: "fotografía callejera nocturna, luces de neón, zapatillas brillantes",
            setting: "callejón oscuro con charcos reflejando neón", subject: "zapatillas en primer plano",
            animal: "ninguno", interaction: "zapatillas salpicando agua brillante",
            lighting: "iluminación cyberpunk (magenta y cian)", mood: "energético",
            color_palette: "negro, magenta, cian", composition: "producto central, ángulo bajo",
            typography: "moderna, gruesa, urbana"
        }
    },
    {
        name: "Café Artesanal",
        thumb: "assets/template-3.jpg",
        data: {
            style: "fotografía editorial", campaign_type: "branding", target_audience: "amantes del café de especialidad",
            product: "Café en grano orgánico", brand: "Aroma Puro", headline: "El despertar perfecto",
            subtitle: "Cultivado en las altas montañas", call_to_action: "Pruébalo",
            visual_references: "bodegón rústico, taza de cerámica ahumando, granos esparcidos",
            setting: "mesa de madera vieja", subject: "taza de café humeante",
            animal: "ninguno", interaction: "humo elevándose suavemente",
            lighting: "luz natural de mañana entrando por ventana", mood: "cálido y acogedor",
            color_palette: "marrón, beige, blanco roto", composition: "plano cenital o 45 grados",
            typography: "clásica, serif elegante"
        }
    },
    {
        name: "Tecnología Minimalista",
        thumb: "assets/template-4.jpg",
        data: {
            style: "minimalismo premium", campaign_type: "lanzamiento de producto", target_audience: "profesionales y techies",
            product: "Reloj inteligente premium", brand: "NovaTech", headline: "El tiempo es tuyo",
            subtitle: "Precisión y diseño en tu muñeca", call_to_action: "Descubrir",
            visual_references: "fotografía de producto de apple, render 3D hiperrealista, reflejos limpios",
            setting: "estudio fotográfico completamente negro", subject: "reloj inteligente flotando suavemente",
            animal: "ninguno", interaction: "luz reflejándose en la pantalla de cristal",
            lighting: "iluminación dramática de estudio con luz de borde", mood: "sofisticado, tecnológico",
            color_palette: "negro profundo, plata, azul neón muy sutil", composition: "centro absoluto, mucho espacio negativo",
            typography: "sans-serif ultrafina y futurista"
        }
    },
    {
        name: "Comida Rápida Premium",
        thumb: "assets/template-5.jpg",
        data: {
            style: "fotografía editorial", campaign_type: "promoción", target_audience: "amantes de la comida gourmet",
            product: "Hamburguesa artesanal", brand: "Burger Craft", headline: "Sabor salvaje",
            subtitle: "Ingredientes 100% frescos y locales", call_to_action: "Pide ahora",
            visual_references: "fotografía gastronómica dinámica, ingredientes volando, texturas jugosas",
            setting: "fondo oscuro texturizado", subject: "hamburguesa doble con queso derretido",
            animal: "ninguno", interaction: "hojas de lechuga y tomate cayendo a cámara lenta",
            lighting: "iluminación de claroscuro intensa", mood: "apetitoso, tentador",
            color_palette: "naranja, rojo, marrón tostado, verde vivo", composition: "plano medio, muy dinámico",
            typography: "gruesa, impactante, estilo cartel rústico"
        }
    },
    {
        name: "Fitness Extremo",
        thumb: "assets/template-6.jpg",
        data: {
            style: "estética urbana", campaign_type: "motivacional", target_audience: "deportistas y atletas",
            product: "Equipamiento de gimnasio", brand: "Iron Will", headline: "Supera tu límite",
            subtitle: "El dolor de hoy es la fuerza de mañana", call_to_action: "Únete al reto",
            visual_references: "fotografía de gimnasio estilo crossfit, polvo de tiza en el aire",
            setting: "gimnasio industrial con luces apagadas", subject: "pesa rusa (kettlebell) de hierro",
            animal: "ninguno", interaction: "polvo de tiza blanca flotando alrededor de la pesa",
            lighting: "luz dura, contraluz con tonos rojizos", mood: "intenso, agresivo, motivador",
            color_palette: "negro, gris acero, rojo carmesí", composition: "contrapicado, perspectiva imponente",
            typography: "sans-serif pesada, letras en itálica para dinamismo"
        }
    }
];

let currentData = { ...INITIAL_JSON };
let currentModel = "flux";
let historyData = [];
let currentImageUrl = "";

// --- INDEXEDDB WRAPPER ---
const DB_NAME = "AdCreatorDB";
const DB_VERSION = 1;
const STORE_NAME = "historyStore";
let dbInstance = null;

function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = (e) => reject("IndexedDB error: " + e.target.error);
        request.onsuccess = (e) => {
            dbInstance = e.target.result;
            resolve(dbInstance);
        };
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: "id" });
            }
        };
    });
}

function loadHistoryFromDB() {
    return new Promise((resolve, reject) => {
        if (!dbInstance) return resolve([]);
        const transaction = dbInstance.transaction([STORE_NAME], "readonly");
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();
        request.onsuccess = () => {
            const data = request.result.sort((a, b) => b.id - a.id);
            // Convierte Blobs a ObjectURLs para la UI
            const uiData = data.map(item => {
                const uiItem = { ...item };
                if (uiItem.image instanceof Blob) {
                    uiItem.url = URL.createObjectURL(uiItem.image);
                } else {
                    uiItem.url = uiItem.image;
                }
                return uiItem;
            });
            resolve(uiData);
        };
        request.onerror = () => reject(request.error);
    });
}

async function deleteHistoryItem(id) {
    try {
        if (dbInstance) {
            const transaction = dbInstance.transaction([STORE_NAME], "readwrite");
            const store = transaction.objectStore(STORE_NAME);
            store.delete(id);
        }
        const index = historyData.findIndex(item => item.id === id);
        if (index > -1) {
            if (historyData[index].url && historyData[index].url.startsWith('blob:')) {
                URL.revokeObjectURL(historyData[index].url);
            }
            historyData.splice(index, 1);
        }
        renderHistory();
        showToast("Imagen borrada del historial", "success");
    } catch (e) {
        console.error("Error al borrar", e);
    }
}
// -------------------------

// Elementos del DOM
const selectModel = document.getElementById('select-model');
const selectTextMode = document.getElementById('select-text-mode');
const selectStyle = document.getElementById('select-style');
const selectRatio = document.getElementById('select-ratio');
const jsonEditor = document.getElementById('json-editor');
const jsonErrorBadge = document.getElementById('json-error');
const btnGenerate = document.getElementById('btn-generate');
const btnDownload = document.getElementById('btn-download');
const btnCopy = document.getElementById('btn-copy');
const btnRestore = document.getElementById('btn-restore');
const btnTheme = document.getElementById('btn-theme');
const inputApiKey = document.getElementById('input-api-key');
const inputSeed = document.getElementById('input-seed');
const btnRandomSeed = document.getElementById('btn-random-seed');

let uploadedImageBase64 = null;
const stateEmpty = document.getElementById('state-empty');
const stateLoading = document.getElementById('state-loading');
const resultImage = document.getElementById('result-image');
const historyContainer = document.getElementById('history-container');
const historyList = document.getElementById('history-list');

// Toast Notification System
function showToast(message, type = 'error') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Icon
    const icon = type === 'error' 
        ? `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
        : `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
    
    toast.innerHTML = `${icon} <span style="font-weight: 500; font-size: 0.95rem;">${message}</span>`;
    
    container.appendChild(toast);
    
    // Los errores duran 10 segundos para poder leerlos, los éxitos 3 segundos
    const duration = type === 'error' ? 10000 : 3000;
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Autosave System
function saveStateLocally() {
    const state = {
        data: currentData,
        model: selectModel.value,
        ratio: selectRatio.value,
        textMode: selectTextMode ? selectTextMode.value : 'digital',
        seed: inputSeed.value
    };
    localStorage.setItem('autosaveState', JSON.stringify(state));
}

function loadStateLocally() {
    const saved = localStorage.getItem('autosaveState');
    if (saved) {
        try {
            const state = JSON.parse(saved);
            if (state.data) {
                // Aseguramos que todas las opciones originales existan, incluso si el autoguardado está incompleto
                currentData = { ...INITIAL_JSON, ...state.data };
            }
            if (state.model) selectModel.value = state.model;
            if (state.ratio) selectRatio.value = state.ratio;
            if (state.textMode && selectTextMode) selectTextMode.value = state.textMode;
            if (state.seed !== undefined && inputSeed) inputSeed.value = state.seed;
            currentModel = selectModel.value || "flux";
        } catch (e) {
            console.error("Error cargando autoguardado", e);
        }
    }
}

// Inicialización
async function init() {
    // Inicializar IndexedDB
    try {
        await initDB();
        historyData = await loadHistoryFromDB();
        renderHistory();
    } catch (e) {
        console.error("Error inicializando IndexedDB", e);
    }

    // Theme setup
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        btnTheme.textContent = "☀️";
    } else {
        document.documentElement.classList.add('dark');
        btnTheme.textContent = "🌙";
    }

    btnTheme.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            btnTheme.textContent = "☀️";
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            btnTheme.textContent = "🌙";
        }
    });

    MODELS.forEach(model => {
        const opt = document.createElement('option');
        opt.value = model.id;
        opt.textContent = model.name;
        selectModel.appendChild(opt);
    });

    STYLES.forEach(style => {
        const opt = document.createElement('option');
        opt.value = style;
        opt.textContent = style;
        selectStyle.appendChild(opt);
    });

    renderTemplates();

    document.querySelectorAll('input[data-field], select[data-field], textarea[data-field]').forEach(el => {
        el.addEventListener('input', (e) => {
            currentData[e.target.dataset.field] = e.target.value;
            updateJsonEditor();
            saveStateLocally();
        });
    });

    selectModel.addEventListener('change', (e) => {
        currentModel = e.target.value;
        saveStateLocally();
    });

    selectRatio.addEventListener('change', () => {
        saveStateLocally();
    });

    if (selectTextMode) {
        selectTextMode.addEventListener('change', () => {
            saveStateLocally();
        });
    }

    if (inputSeed) {
        inputSeed.addEventListener('input', () => {
            saveStateLocally();
        });
    }

    if (btnRandomSeed) {
        btnRandomSeed.addEventListener('click', () => {
            inputSeed.value = Math.floor(Math.random() * 999999999);
            saveStateLocally();
        });
    }

    jsonEditor.addEventListener('input', (e) => {
        try {
            const parsed = JSON.parse(e.target.value);
            currentData = parsed;
            syncFormWithData();
            jsonErrorBadge.style.display = 'none';
            saveStateLocally();
        } catch (err) {
            jsonErrorBadge.style.display = 'block';
        }
    });

    // Restaurar a INITIAL_JSON
    btnRestore.addEventListener('click', () => {
        currentData = { ...INITIAL_JSON };
        syncFormWithData();
        if (inputSeed) inputSeed.value = '';
        saveStateLocally();
        showToast("Valores restaurados por defecto", "success");
    });

    // Cargar estado guardado
    loadStateLocally();

    syncFormWithData();
    updateJsonEditor();

    btnCopy.addEventListener('click', handleCopyPrompt);
    btnDownload.addEventListener('click', handleDownload);
    btnGenerate.addEventListener('click', handleGenerate);

    // Cargar API Key
    const savedKey = localStorage.getItem('pollinations_api_key');
    if (savedKey) {
        inputApiKey.value = savedKey;
    }
    inputApiKey.addEventListener('input', (e) => {
        localStorage.setItem('pollinations_api_key', e.target.value.trim());
    });
}

function renderTemplates() {
    const container = document.getElementById('template-grid');
    if (!container) return;
    
    TEMPLATES.forEach((tpl, idx) => {
        const div = document.createElement('div');
        div.className = 'template-card';
        div.innerHTML = `<img src="${tpl.thumb}" alt="${tpl.name}"><div class="template-name">${tpl.name}</div>`;
        div.onclick = () => loadTemplate(idx);
        container.appendChild(div);
    });
}

function loadTemplate(idx) {
    currentData = { ...TEMPLATES[idx].data };
    syncFormWithData();
    if (inputSeed) inputSeed.value = '';
    saveStateLocally();
    showToast(`Plantilla "${TEMPLATES[idx].name}" cargada`, "success");
}

function syncFormWithData() {
    document.querySelectorAll('input[data-field], select[data-field], textarea[data-field]').forEach(el => {
        el.value = currentData[el.dataset.field] || "";
    });
    updateJsonEditor();
}

function updateJsonEditor() {
    jsonEditor.value = JSON.stringify(currentData, null, 2);
    clearJsonError();
}

function handleJsonEdit(e) {
    try {
        const parsed = JSON.parse(e.target.value);
        currentData = parsed;
        syncFormWithData();
        clearJsonError();
    } catch (err) {
        showJsonError();
    }
}

function showJsonError() {
    jsonErrorBadge.classList.remove('hidden');
    jsonEditor.classList.add('invalid');
    btnGenerate.disabled = true;
}

function clearJsonError() {
    jsonErrorBadge.classList.add('hidden');
    jsonEditor.classList.remove('invalid');
    btnGenerate.disabled = false;
}

function constructPrompt(data, textMode = 'digital') {
    let basePrompt = `Crea un cartel publicitario hiperrealista y profesional. Estilo visual: ${data.style || "elegante"}.

DESCRIPCIÓN DE LA ESCENA (¡MUY IMPORTANTE! Deben aparecer TODOS estos elementos explícitamente):
- Escenario/Fondo: ${data.setting || "Fondo neutro"}
- Protagonista principal: ${data.subject || "No especificado"}
- Elemento secundario / Acompañante: ${data.animal || "No especificado"}
- Acción o interacción entre ellos: ${data.interaction || "Posando de forma natural"}

EL PRODUCTO:
Se está anunciando: ${data.product || "Un producto"}. (El producto debe ser claramente visible en la composición).
Público objetivo: ${data.target_audience || "Público general"}. Tipo de campaña: ${data.campaign_type || "Comercial"}.

DIRECCIÓN DE ARTE:
Iluminación: ${data.lighting || "Luz de estudio fotográfico profesional"}
Atmósfera/Mood: ${data.mood || "Profesional y atractivo"}
Paleta de colores: ${data.color_palette || "Colores atractivos y armoniosos"}\n`;

    if (textMode === 'ai') {
        basePrompt += `Composición: ${data.composition || "Encuadre centrado, dejando espacio para integrar textos"}

TEXTOS DEL CARTEL (OBLIGATORIO ESCRIBIR ESTAS PALABRAS EXACTAMENTE DENTRO DEL ARTE):
Titular principal: "${data.headline || ""}"
Subtítulo: "${data.subtitle || ""}"
Botón / Llamada a la acción: "${data.call_to_action || ""}"
Marca: "${data.brand || ""}"
The typography must be perfectly legible, modern, and large. Without typos.

INSTRUCCIONES FINALES DE CALIDAD (¡CRÍTICO!):
El diseño debe parecer un póster o banner profesional listo para publicar.
Asegúrate de que el "Protagonista principal" y el "Elemento secundario" aparezcan físicamente en la imagen.
Obligatorio: Anatomía humana perfecta, proporciones correctas, máximo 2 brazos y 2 piernas por persona, sin deformaciones. Calidad masterpiece, 8k, ultra detallado.`;
    } else {
        basePrompt += `Composición: ${data.composition || "Encuadre centrado, dejando mucho espacio limpio (espacio negativo) arriba y abajo para añadir textos después"}

INSTRUCCIONES FINALES DE CALIDAD (¡CRÍTICO!):
MUY IMPORTANTE: NO incluyas NINGÚN tipo de texto, letras, tipografía, marcas de agua o logos en la imagen. La imagen debe ser puramente el arte visual limpio, con espacio para textos.
Asegúrate de que el "Protagonista principal" y el "Elemento secundario" aparezcan físicamente en la imagen.
Obligatorio: Anatomía humana perfecta, proporciones correctas, máximo 2 brazos y 2 piernas por persona, sin deformaciones. Calidad masterpiece, 8k, ultra detallado.`;
    }
    
    return basePrompt;
}

// NUEVO MOTOR TIPOGRÁFICO: Estampa los textos mediante Canvas
async function renderTextOnImage(imageBlob, data) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        const url = URL.createObjectURL(imageBlob);

        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');

            ctx.drawImage(img, 0, 0);

            const width = canvas.width;
            const height = canvas.height;
            
            function drawText(text, x, y, maxFontSize, fontColor, isBold = false) {
                if (!text) return;
                
                // Ajustar el tamaño de fuente si el texto es demasiado ancho
                let currentFontSize = maxFontSize;
                const maxAllowedWidth = width * 0.9; // Máximo 90% del ancho del lienzo
                ctx.font = `${isBold ? 'bold' : 'normal'} ${currentFontSize}px "Segoe UI", Roboto, "Helvetica Neue", sans-serif`;
                
                while (ctx.measureText(text).width > maxAllowedWidth && currentFontSize > 10) {
                    currentFontSize -= 2;
                    ctx.font = `${isBold ? 'bold' : 'normal'} ${currentFontSize}px "Segoe UI", Roboto, "Helvetica Neue", sans-serif`;
                }

                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Efecto de Drop Shadow profundo para legibilidad en cualquier fondo
                ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
                ctx.shadowBlur = Math.floor(currentFontSize * 0.4);
                ctx.shadowOffsetX = 3;
                ctx.shadowOffsetY = 3;

                ctx.fillStyle = fontColor || '#FFFFFF';
                
                // Trazo muy fino alrededor para separar
                ctx.strokeStyle = 'rgba(0,0,0,0.4)';
                ctx.lineWidth = Math.max(2, currentFontSize * 0.05);
                ctx.strokeText(text, x, y);
                
                // Relleno real
                ctx.fillText(text, x, y);
                
                ctx.shadowBlur = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                
                return currentFontSize; // Devolvemos el tamaño final por si es útil
            }

            // Titular
            if (data.headline) {
                drawText(data.headline.toUpperCase(), width / 2, height * 0.16, height * 0.08, '#FFFFFF', true);
            }
            // Subtítulo
            if (data.subtitle) {
                drawText(data.subtitle, width / 2, height * 0.24, height * 0.04, '#EEEEEE', false);
            }
            // Marca
            if (data.brand) {
                ctx.textAlign = 'left';
                const brandSize = height * 0.05;
                // Calculamos el tamaño manualmente para alinear a la izquierda
                let finalBrandSize = brandSize;
                ctx.font = `bold ${finalBrandSize}px "Segoe UI", Roboto, "Helvetica Neue", sans-serif`;
                while (ctx.measureText(data.brand.toUpperCase()).width > width * 0.4 && finalBrandSize > 10) {
                    finalBrandSize -= 2;
                    ctx.font = `bold ${finalBrandSize}px "Segoe UI", Roboto, "Helvetica Neue", sans-serif`;
                }
                ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
                ctx.shadowBlur = Math.floor(finalBrandSize * 0.4);
                ctx.shadowOffsetX = 3;
                ctx.shadowOffsetY = 3;
                ctx.fillStyle = '#FFD700';
                ctx.strokeStyle = 'rgba(0,0,0,0.4)';
                ctx.lineWidth = Math.max(2, finalBrandSize * 0.05);
                ctx.strokeText(data.brand.toUpperCase(), width * 0.05, height * 0.07);
                ctx.fillText(data.brand.toUpperCase(), width * 0.05, height * 0.07);
                ctx.shadowBlur = 0;
            }
            // Call to Action (Botón)
            if (data.call_to_action) {
                const ctaText = data.call_to_action.toUpperCase();
                let fontSize = height * 0.04;
                ctx.font = `bold ${fontSize}px "Segoe UI", Roboto, "Helvetica Neue", sans-serif`;
                
                // Ajuste de tamaño para el CTA
                while (ctx.measureText(ctaText).width > width * 0.4 && fontSize > 10) {
                    fontSize -= 2;
                    ctx.font = `bold ${fontSize}px "Segoe UI", Roboto, "Helvetica Neue", sans-serif`;
                }
                
                const textWidth = ctx.measureText(ctaText).width;
                const paddingX = fontSize * 1.5;
                const paddingY = fontSize * 0.6;
                const btnW = textWidth + paddingX * 2;
                const btnH = fontSize + paddingY * 2;
                const btnX = width / 2 - btnW / 2; // Centrado
                const btnY = height * 0.92 - btnH / 2;
                
                ctx.shadowBlur = 15;
                ctx.shadowColor = 'rgba(0,0,0,0.6)';
                ctx.fillStyle = '#ff4757'; // Color de acción
                
                // Dibujar forma de píldora
                ctx.beginPath();
                ctx.roundRect(btnX, btnY, btnW, btnH, btnH/2);
                ctx.fill();
                
                ctx.shadowBlur = 0;
                ctx.fillStyle = '#FFFFFF';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(ctaText, btnX + btnW/2, btnY + btnH/2);
            }

            URL.revokeObjectURL(url);
            
            canvas.toBlob((blob) => {
                if (blob) resolve(blob);
                else reject(new Error("Error generando el Blob con los textos"));
            }, 'image/jpeg', 0.95);
        };
        
        img.onerror = () => reject(new Error("Fallo al decodificar la imagen de la IA"));
        img.src = url;
    });
}

async function handleGenerate() {
    const apiKey = inputApiKey.value.trim();

    if (!currentData.product || !currentData.headline) {
        showToast("Producto y titular publicitario son obligatorios.", "error");
        return;
    }
    
    const textMode = selectTextMode ? selectTextMode.value : 'digital';
    const finalPrompt = constructPrompt(currentData, textMode);
    if (!finalPrompt.trim()) {
        showToast("El prompt final está vacío.", "error");
        return;
    }

    setLoadingState(true);

    if (window.innerWidth < 1024) {
        document.querySelector('.right-panel').scrollIntoView({ behavior: 'smooth' });
    }

    try {
        // Dimensiones basadas en la relación de aspecto
        let w = 1024, h = 1024;
        const ratio = selectRatio.value;
        if (ratio === 'square') { w = 1024; h = 1024; }
        else if (ratio === 'vertical') { w = 768; h = 1344; } // 9:16 ~1MP
        else if (ratio === 'horizontal') { w = 1344; h = 768; } // 16:9 ~1MP
        else if (ratio === '4:3') { w = 1024; h = 768; }
        else if (ratio === '3:4') { w = 768; h = 1024; }

        // Gestión de la semilla (seed)
        let seed = inputSeed ? inputSeed.value : '';
        if (!seed || isNaN(seed)) {
            seed = Math.floor(Math.random() * 999999999);
        }

        // Creamos la URL pública de caché para guardarla en el historial (no pesa y es permanente)
        const encodedPrompt = encodeURIComponent(finalPrompt);
        const cacheUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?model=${currentModel}&width=${w}&height=${h}&seed=${seed}&nologo=true`;
        
        // Configuración de la petición POST
        let postEndpoint = "https://image.pollinations.ai/v1/images/generations"; 
        const headers = {
            "Content-Type": "application/json"
        };
        
        if (apiKey) {
            postEndpoint = "https://gen.pollinations.ai/v1/images/generations";
            headers["Authorization"] = `Bearer ${apiKey}`;
        }

        const requestBody = {
            prompt: finalPrompt,
            model: currentModel,
            n: 1,
            size: `${w}x${h}`,
            quality: "medium",
            response_format: "b64_json",
            safe: false,
            seed: seed
        };

        const response = await fetch(postEndpoint, { 
            method: "POST",
            headers: headers,
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error de Pollinations (${response.status}): ${errorText}`);
        }

        const contentType = response.headers.get("content-type");
        let finalBlobToSave = null;

        if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            if (data.data && data.data[0] && data.data[0].b64_json) {
                const b64 = data.data[0].b64_json;
                const binaryStr = atob(b64);
                const len = binaryStr.length;
                const bytes = new Uint8Array(len);
                for (let i = 0; i < len; i++) {
                    bytes[i] = binaryStr.charCodeAt(i);
                }
                finalBlobToSave = new Blob([bytes], { type: "image/jpeg" });
            } else if (data.data && data.data[0] && data.data[0].url) {
                // Not supported for our text rendering
                throw new Error("Formato URL devuelto por la API no está soportado en este momento.");
            } else {
                throw new Error("Formato JSON devuelto por la API no es válido.");
            }
        } else {
            finalBlobToSave = await response.blob();
        }

        // ============================================
        // ESTAMPAR TEXTOS DIGITALMENTE (SI SE ELIGIÓ MODO DIGITAL)
        // ============================================
        if (finalBlobToSave && textMode === 'digital') {
            showToast("Dibujando textos en alta calidad...", "success");
            try {
                finalBlobToSave = await renderTextOnImage(finalBlobToSave, currentData);
            } catch (canvasErr) {
                console.error("Canvas Error:", canvasErr);
                showToast("Fallo al estampar textos, se mostrará la imagen limpia.", "error");
            }
        } else if (textMode === 'ai') {
            showToast("Recibiendo arte y tipografía directamente de la IA...", "success");
        }

        const objectUrl = URL.createObjectURL(finalBlobToSave);
        currentImageUrl = objectUrl;

        showImage(objectUrl);
        
        // Guardamos el Blob real en IndexedDB para historial ilimitado
        await saveToDB(finalBlobToSave, currentData.brand, currentData.product);
        showToast("Cartel generado con éxito mediante POST", "success");

    } catch (err) {
        console.error(err);
        let errorMsg = err.message || "Error al construir la petición.";
        if (errorMsg.length > 200) {
            errorMsg = errorMsg.substring(0, 200) + "... (Error truncado)";
        }
        showToast(errorMsg, "error");
        setLoadingState(false);
    }
}

let loadingInterval = null;
const LOADING_MESSAGES = [
    "Analizando tu idea...",
    "Construyendo la composición...",
    "Iluminando la escena...",
    "Pintando en 8K ultra detalle...",
    "Aplicando estilo visual...",
    "Añadiendo últimos retoques..."
];

function setLoadingState(isLoading) {
    const btnText = btnGenerate.querySelector('.btn-text');
    const loader = btnGenerate.querySelector('.loader');
    const loadingTextElement = document.getElementById('loading-text');

    if (isLoading) {
        btnGenerate.disabled = true;
        btnText.textContent = "Generando Magia...";
        loader.classList.remove('hidden');
        
        stateEmpty.classList.add('hidden');
        resultImage.classList.add('hidden');
        stateLoading.classList.remove('hidden');
        btnDownload.disabled = true;
        
        if (loadingTextElement) {
            loadingTextElement.textContent = "Iniciando motor de IA...";
            let msgIndex = 0;
            loadingInterval = setInterval(() => {
                loadingTextElement.textContent = LOADING_MESSAGES[msgIndex];
                msgIndex = (msgIndex + 1) % LOADING_MESSAGES.length;
            }, 2500); // Cambia cada 2.5 segundos
        }
    } else {
        btnGenerate.disabled = false;
        btnText.textContent = "Generar Cartel";
        loader.classList.add('hidden');
        stateLoading.classList.add('hidden');
        if (loadingInterval) {
            clearInterval(loadingInterval);
            loadingInterval = null;
        }
    }
}

function showImage(url) {
    currentImageUrl = url;
    setLoadingState(false);
    
    stateEmpty.classList.add('hidden');
    resultImage.src = url;
    resultImage.classList.remove('hidden');
    btnDownload.disabled = false;
}

function saveToDB(imageOrUrl, brand, product) {
    return new Promise((resolve) => {
        const newEntry = {
            id: Date.now(),
            image: imageOrUrl,
            brand: brand || "Sin Marca",
            product: product || "Sin Producto",
            date: new Date().toISOString()
        };
        
        // Add to local array for UI
        const memoryEntry = { ...newEntry };
        if (memoryEntry.image instanceof Blob) {
            memoryEntry.url = URL.createObjectURL(memoryEntry.image);
        } else {
            memoryEntry.url = memoryEntry.image;
        }
        
        historyData = [memoryEntry, ...historyData];
        
        try {
            if (dbInstance) {
                const transaction = dbInstance.transaction([STORE_NAME], "readwrite");
                const store = transaction.objectStore(STORE_NAME);
                store.put(newEntry);
                transaction.oncomplete = () => resolve();
            } else {
                resolve();
            }
        } catch (e) {
            console.error("Error guardando en DB", e);
            resolve();
        }
        
        renderHistory();
    });
}

function renderHistory() {
    if (historyData.length === 0) {
        historyContainer.classList.add('hidden');
        return;
    }

    historyContainer.classList.remove('hidden');
    historyList.innerHTML = '';

    historyData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.onclick = () => showImage(item.url);
        
        div.innerHTML = `
            <img src="${item.url}" alt="Historial" class="history-thumb">
            <button class="delete-history-btn" onclick="event.stopPropagation(); deleteHistoryItem(${item.id})">🗑️</button>
            <div class="history-brand">${item.brand}</div>
            <div class="history-product">${item.product}</div>
        `;
        historyList.appendChild(div);
    });
}

function handleCopyPrompt() {
    if (btnGenerate.disabled && !stateLoading.classList.contains('hidden')) {
        // Permitimos copiar incluso si hay errores en el form, pero si está cargando, mejor no.
    }
    const finalPrompt = JSON.stringify(currentData, null, 2);
    navigator.clipboard.writeText(finalPrompt).then(() => {
        showToast("JSON copiado al portapapeles.", "success");
    });
}

function restoreInitial() {
    currentData = { ...INITIAL_JSON };
    syncFormWithData();
    showToast("Ajustes restaurados.", "success");
}

function handleDownload() {
    if (!currentImageUrl) return;
    const link = document.createElement("a");
    link.href = currentImageUrl;
    const safeName = (currentData.brand || "cartel")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")
        .replace(/-+/g, "-");
    link.download = `cartel-${safeName}.jpg`;
    link.click();
}

document.addEventListener('DOMContentLoaded', init);
