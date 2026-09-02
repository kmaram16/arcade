// Localization for Cocina del Mundo — mirrors the dashboard's 9-language system
// and reads the SAME stored key ('arcade.lang'), so the language chosen on the
// launcher carries in automatically. A `?lang=xx` in the URL wins (used in dev).
// NOTE: the recipe content (names, ingredients, steps) stays in Spanish for now;
// this translates the whole interface (buttons, filters, labels, the add form…).

import type { Category } from './recipes'

export type Lang = 'es' | 'en' | 'pt' | 'fr' | 'de' | 'it' | 'zh' | 'ja' | 'ar'

export const LANG_ORDER: Lang[] = ['es', 'en', 'pt', 'fr', 'de', 'it', 'zh', 'ja', 'ar']
export const RTL_LANGS: Lang[] = ['ar']

export const LANGS: { code: Lang; label: string; badge: string }[] = [
  { code: 'es', label: 'Español', badge: 'ES' },
  { code: 'en', label: 'English', badge: 'EN' },
  { code: 'pt', label: 'Português', badge: 'PT' },
  { code: 'fr', label: 'Français', badge: 'FR' },
  { code: 'de', label: 'Deutsch', badge: 'DE' },
  { code: 'it', label: 'Italiano', badge: 'IT' },
  { code: 'zh', label: '中文', badge: '中' },
  { code: 'ja', label: '日本語', badge: '日' },
  { code: 'ar', label: 'العربية', badge: 'ع' }
]

const LANG_KEY = 'arcade.lang'

export type Strings = {
  tagline: string
  searchPlaceholder: string
  surpriseTitle: string
  addCta: string
  countAll: string
  typeAll: string
  cat: Record<Category, string>
  diff: [string, string, string]
  favorites: string
  keto: string
  kidsSolo: string
  kidsAdult: string
  badgeSolo: string
  badgeAdult: string
  count: (n: number) => string
  empty: string
  minShort: string
  servings: (n: number) => string
  ingredients: string
  steps: string
  saveFav: string
  savedFav: string
  watchIn: (label: string) => string
  deleteRecipe: string
  addTitle: string
  formHelp: string
  nameLabel: string
  namePlaceholder: string
  linkLabel: string
  typeLabel: string
  saveRecipe: string
  myRecipes: string
  international: string
  footer: (n: number, c: number) => string
  langLabel: string
}

export const STRINGS: Record<Lang, Strings> = {
  es: {
    tagline: 'Recetas de todos los países — hecho con cariño por KMM',
    searchPlaceholder: 'Buscar receta o ingrediente…',
    surpriseTitle: 'Receta al azar',
    addCta: '➕ Añadir receta de TikTok, YouTube, Instagram o Facebook',
    countAll: 'Todos', typeAll: 'Todo tipo',
    cat: { principal: 'Platos principales', entrante: 'Entrantes', postre: 'Dulces y postres', desayuno: 'Desayunos', bebida: 'Bebidas' },
    diff: ['Fácil', 'Media', 'Difícil'],
    favorites: 'Favoritos', keto: 'Keto', kidsSolo: 'Niños solos', kidsAdult: 'Niños con adulto',
    badgeSolo: 'Sin ayuda', badgeAdult: 'Con adulto',
    count: (n) => `${n} receta${n === 1 ? '' : 's'}`,
    empty: 'No hay recetas con ese filtro. Prueba a quitar algún filtro o añade la tuya.',
    minShort: 'min', servings: (n) => `${n} porciones`,
    ingredients: 'Ingredientes', steps: 'Preparación',
    saveFav: '🤍 Guardar', savedFav: '❤️ Guardada',
    watchIn: (l) => `Ver en ${l}`, deleteRecipe: '🗑️ Borrar esta receta',
    addTitle: '➕ Añadir tu receta',
    formHelp: 'Pega el enlace de un vídeo de TikTok, YouTube, Instagram o Facebook y ponle un nombre. Se guarda en tu dispositivo. 💾',
    nameLabel: 'Nombre de la receta', namePlaceholder: 'Ej: Pasta cremosa de TikTok',
    linkLabel: 'Enlace del vídeo', typeLabel: 'Tipo',
    saveRecipe: '💾 Guardar receta', myRecipes: 'Mis recetas', international: 'Internacional',
    footer: (n, c) => `Cocina del Mundo · ${n} recetas + las tuyas · ${c} orígenes 🌎`,
    langLabel: 'Idioma'
  },
  en: {
    tagline: 'Recipes from every country — made with love by KMM',
    searchPlaceholder: 'Search recipe or ingredient…',
    surpriseTitle: 'Random recipe',
    addCta: '➕ Add a recipe from TikTok, YouTube, Instagram or Facebook',
    countAll: 'All', typeAll: 'All types',
    cat: { principal: 'Main dishes', entrante: 'Starters', postre: 'Sweets & desserts', desayuno: 'Breakfast', bebida: 'Drinks' },
    diff: ['Easy', 'Medium', 'Hard'],
    favorites: 'Favorites', keto: 'Keto', kidsSolo: 'Kids alone', kidsAdult: 'Kids with an adult',
    badgeSolo: 'No help', badgeAdult: 'With an adult',
    count: (n) => `${n} recipe${n === 1 ? '' : 's'}`,
    empty: 'No recipes with that filter. Try removing a filter or add your own.',
    minShort: 'min', servings: (n) => `${n} servings`,
    ingredients: 'Ingredients', steps: 'Steps',
    saveFav: '🤍 Save', savedFav: '❤️ Saved',
    watchIn: (l) => `Watch on ${l}`, deleteRecipe: '🗑️ Delete this recipe',
    addTitle: '➕ Add your recipe',
    formHelp: 'Paste a video link from TikTok, YouTube, Instagram or Facebook and give it a name. It saves on your device. 💾',
    nameLabel: 'Recipe name', namePlaceholder: 'E.g. Creamy TikTok pasta',
    linkLabel: 'Video link', typeLabel: 'Type',
    saveRecipe: '💾 Save recipe', myRecipes: 'My recipes', international: 'International',
    footer: (n, c) => `World Kitchen · ${n} recipes + yours · ${c} origins 🌎`,
    langLabel: 'Language'
  },
  pt: {
    tagline: 'Receitas de todos os países — feito com carinho por KMM',
    searchPlaceholder: 'Buscar receita ou ingrediente…',
    surpriseTitle: 'Receita aleatória',
    addCta: '➕ Adicionar receita do TikTok, YouTube, Instagram ou Facebook',
    countAll: 'Todos', typeAll: 'Todos os tipos',
    cat: { principal: 'Pratos principais', entrante: 'Entradas', postre: 'Doces e sobremesas', desayuno: 'Café da manhã', bebida: 'Bebidas' },
    diff: ['Fácil', 'Média', 'Difícil'],
    favorites: 'Favoritos', keto: 'Keto', kidsSolo: 'Crianças sozinhas', kidsAdult: 'Crianças com adulto',
    badgeSolo: 'Sem ajuda', badgeAdult: 'Com adulto',
    count: (n) => `${n} receita${n === 1 ? '' : 's'}`,
    empty: 'Nenhuma receita com esse filtro. Tente remover um filtro ou adicione a sua.',
    minShort: 'min', servings: (n) => `${n} porções`,
    ingredients: 'Ingredientes', steps: 'Modo de preparo',
    saveFav: '🤍 Salvar', savedFav: '❤️ Salva',
    watchIn: (l) => `Ver no ${l}`, deleteRecipe: '🗑️ Excluir esta receita',
    addTitle: '➕ Adicionar sua receita',
    formHelp: 'Cole o link de um vídeo do TikTok, YouTube, Instagram ou Facebook e dê um nome. Salva no seu dispositivo. 💾',
    nameLabel: 'Nome da receita', namePlaceholder: 'Ex: Macarrão cremoso do TikTok',
    linkLabel: 'Link do vídeo', typeLabel: 'Tipo',
    saveRecipe: '💾 Salvar receita', myRecipes: 'Minhas receitas', international: 'Internacional',
    footer: (n, c) => `Cozinha do Mundo · ${n} receitas + as suas · ${c} origens 🌎`,
    langLabel: 'Idioma'
  },
  fr: {
    tagline: 'Des recettes du monde entier — fait avec amour par KMM',
    searchPlaceholder: 'Chercher une recette ou un ingrédient…',
    surpriseTitle: 'Recette au hasard',
    addCta: '➕ Ajouter une recette de TikTok, YouTube, Instagram ou Facebook',
    countAll: 'Tous', typeAll: 'Tous les types',
    cat: { principal: 'Plats principaux', entrante: 'Entrées', postre: 'Desserts', desayuno: 'Petit-déjeuner', bebida: 'Boissons' },
    diff: ['Facile', 'Moyen', 'Difficile'],
    favorites: 'Favoris', keto: 'Kéto', kidsSolo: 'Enfants seuls', kidsAdult: 'Enfants avec un adulte',
    badgeSolo: 'Sans aide', badgeAdult: 'Avec un adulte',
    count: (n) => `${n} recette${n === 1 ? '' : 's'}`,
    empty: 'Aucune recette avec ce filtre. Enlève un filtre ou ajoute la tienne.',
    minShort: 'min', servings: (n) => `${n} portions`,
    ingredients: 'Ingrédients', steps: 'Préparation',
    saveFav: '🤍 Enregistrer', savedFav: '❤️ Enregistrée',
    watchIn: (l) => `Voir sur ${l}`, deleteRecipe: '🗑️ Supprimer cette recette',
    addTitle: '➕ Ajouter ta recette',
    formHelp: 'Colle le lien d’une vidéo TikTok, YouTube, Instagram ou Facebook et donne-lui un nom. Enregistré sur ton appareil. 💾',
    nameLabel: 'Nom de la recette', namePlaceholder: 'Ex : Pâtes crémeuses de TikTok',
    linkLabel: 'Lien de la vidéo', typeLabel: 'Type',
    saveRecipe: '💾 Enregistrer la recette', myRecipes: 'Mes recettes', international: 'International',
    footer: (n, c) => `Cuisine du Monde · ${n} recettes + les tiennes · ${c} origines 🌎`,
    langLabel: 'Langue'
  },
  de: {
    tagline: 'Rezepte aus aller Welt — mit Liebe gemacht von KMM',
    searchPlaceholder: 'Rezept oder Zutat suchen…',
    surpriseTitle: 'Zufälliges Rezept',
    addCta: '➕ Rezept von TikTok, YouTube, Instagram oder Facebook hinzufügen',
    countAll: 'Alle', typeAll: 'Alle Arten',
    cat: { principal: 'Hauptgerichte', entrante: 'Vorspeisen', postre: 'Süßes & Desserts', desayuno: 'Frühstück', bebida: 'Getränke' },
    diff: ['Einfach', 'Mittel', 'Schwer'],
    favorites: 'Favoriten', keto: 'Keto', kidsSolo: 'Kinder allein', kidsAdult: 'Kinder mit Erwachsenem',
    badgeSolo: 'Ohne Hilfe', badgeAdult: 'Mit Erwachsenem',
    count: (n) => `${n} Rezept${n === 1 ? '' : 'e'}`,
    empty: 'Keine Rezepte mit diesem Filter. Entferne einen Filter oder füge dein eigenes hinzu.',
    minShort: 'Min', servings: (n) => `${n} Portionen`,
    ingredients: 'Zutaten', steps: 'Zubereitung',
    saveFav: '🤍 Speichern', savedFav: '❤️ Gespeichert',
    watchIn: (l) => `Auf ${l} ansehen`, deleteRecipe: '🗑️ Dieses Rezept löschen',
    addTitle: '➕ Dein Rezept hinzufügen',
    formHelp: 'Füge einen Videolink von TikTok, YouTube, Instagram oder Facebook ein und gib ihm einen Namen. Wird auf deinem Gerät gespeichert. 💾',
    nameLabel: 'Name des Rezepts', namePlaceholder: 'z. B. Cremige TikTok-Pasta',
    linkLabel: 'Video-Link', typeLabel: 'Art',
    saveRecipe: '💾 Rezept speichern', myRecipes: 'Meine Rezepte', international: 'International',
    footer: (n, c) => `Weltküche · ${n} Rezepte + deine · ${c} Herkünfte 🌎`,
    langLabel: 'Sprache'
  },
  it: {
    tagline: 'Ricette da tutti i paesi — fatto con amore da KMM',
    searchPlaceholder: 'Cerca ricetta o ingrediente…',
    surpriseTitle: 'Ricetta a caso',
    addCta: '➕ Aggiungi una ricetta da TikTok, YouTube, Instagram o Facebook',
    countAll: 'Tutti', typeAll: 'Tutti i tipi',
    cat: { principal: 'Primi e secondi', entrante: 'Antipasti', postre: 'Dolci', desayuno: 'Colazione', bebida: 'Bevande' },
    diff: ['Facile', 'Media', 'Difficile'],
    favorites: 'Preferiti', keto: 'Keto', kidsSolo: 'Bambini da soli', kidsAdult: 'Bambini con un adulto',
    badgeSolo: 'Senza aiuto', badgeAdult: 'Con un adulto',
    count: (n) => `${n} ricett${n === 1 ? 'a' : 'e'}`,
    empty: 'Nessuna ricetta con questo filtro. Togli un filtro o aggiungi la tua.',
    minShort: 'min', servings: (n) => `${n} porzioni`,
    ingredients: 'Ingredienti', steps: 'Preparazione',
    saveFav: '🤍 Salva', savedFav: '❤️ Salvata',
    watchIn: (l) => `Guarda su ${l}`, deleteRecipe: '🗑️ Elimina questa ricetta',
    addTitle: '➕ Aggiungi la tua ricetta',
    formHelp: 'Incolla il link di un video di TikTok, YouTube, Instagram o Facebook e dagli un nome. Si salva sul tuo dispositivo. 💾',
    nameLabel: 'Nome della ricetta', namePlaceholder: 'Es: Pasta cremosa di TikTok',
    linkLabel: 'Link del video', typeLabel: 'Tipo',
    saveRecipe: '💾 Salva ricetta', myRecipes: 'Le mie ricette', international: 'Internazionale',
    footer: (n, c) => `Cucina del Mondo · ${n} ricette + le tue · ${c} origini 🌎`,
    langLabel: 'Lingua'
  },
  zh: {
    tagline: '来自各国的食谱 — 由 KMM 用心制作',
    searchPlaceholder: '搜索食谱或食材…',
    surpriseTitle: '随机食谱',
    addCta: '➕ 添加来自 TikTok、YouTube、Instagram 或 Facebook 的食谱',
    countAll: '全部', typeAll: '所有类型',
    cat: { principal: '主菜', entrante: '前菜', postre: '甜点', desayuno: '早餐', bebida: '饮品' },
    diff: ['简单', '中等', '困难'],
    favorites: '收藏', keto: '生酮', kidsSolo: '孩子独自', kidsAdult: '孩子与大人',
    badgeSolo: '无需帮助', badgeAdult: '需要大人',
    count: (n) => `${n} 份食谱`,
    empty: '没有符合筛选的食谱。去掉一个筛选，或添加你自己的。',
    minShort: '分钟', servings: (n) => `${n} 份`,
    ingredients: '食材', steps: '做法',
    saveFav: '🤍 收藏', savedFav: '❤️ 已收藏',
    watchIn: (l) => `在 ${l} 观看`, deleteRecipe: '🗑️ 删除这个食谱',
    addTitle: '➕ 添加你的食谱',
    formHelp: '粘贴 TikTok、YouTube、Instagram 或 Facebook 的视频链接并起个名字。会保存在你的设备上。💾',
    nameLabel: '食谱名称', namePlaceholder: '例如：TikTok 奶油意面',
    linkLabel: '视频链接', typeLabel: '类型',
    saveRecipe: '💾 保存食谱', myRecipes: '我的食谱', international: '国际',
    footer: (n, c) => `世界厨房 · ${n} 份食谱 + 你的 · ${c} 个来源 🌎`,
    langLabel: '语言'
  },
  ja: {
    tagline: '世界じゅうのレシピ — KMM が心をこめて',
    searchPlaceholder: 'レシピや材料を検索…',
    surpriseTitle: 'ランダムなレシピ',
    addCta: '➕ TikTok・YouTube・Instagram・Facebook のレシピを追加',
    countAll: 'すべて', typeAll: 'すべての種類',
    cat: { principal: 'メイン', entrante: '前菜', postre: 'デザート', desayuno: '朝食', bebida: '飲み物' },
    diff: ['かんたん', 'ふつう', 'むずかしい'],
    favorites: 'お気に入り', keto: 'ケト', kidsSolo: '子どもだけ', kidsAdult: '大人といっしょ',
    badgeSolo: '手伝いなし', badgeAdult: '大人と',
    count: (n) => `${n} 件のレシピ`,
    empty: 'この条件のレシピはありません。フィルターを外すか、自分のを追加してね。',
    minShort: '分', servings: (n) => `${n} 人分`,
    ingredients: '材料', steps: '作り方',
    saveFav: '🤍 保存', savedFav: '❤️ 保存済み',
    watchIn: (l) => `${l} で見る`, deleteRecipe: '🗑️ このレシピを削除',
    addTitle: '➕ 自分のレシピを追加',
    formHelp: 'TikTok・YouTube・Instagram・Facebook の動画リンクを貼って名前を付けてね。端末に保存されます。💾',
    nameLabel: 'レシピ名', namePlaceholder: '例：TikTok のクリームパスタ',
    linkLabel: '動画リンク', typeLabel: '種類',
    saveRecipe: '💾 レシピを保存', myRecipes: 'マイレシピ', international: 'インターナショナル',
    footer: (n, c) => `世界のキッチン · ${n} レシピ + あなたの · ${c} の産地 🌎`,
    langLabel: '言語'
  },
  ar: {
    tagline: 'وصفات من كل البلدان — صُنعت بحب من KMM',
    searchPlaceholder: 'ابحث عن وصفة أو مكوّن…',
    surpriseTitle: 'وصفة عشوائية',
    addCta: '➕ أضِف وصفة من تيك توك أو يوتيوب أو إنستغرام أو فيسبوك',
    countAll: 'الكل', typeAll: 'كل الأنواع',
    cat: { principal: 'أطباق رئيسية', entrante: 'مقبّلات', postre: 'حلويات', desayuno: 'فطور', bebida: 'مشروبات' },
    diff: ['سهل', 'متوسط', 'صعب'],
    favorites: 'المفضّلة', keto: 'كيتو', kidsSolo: 'الأطفال وحدهم', kidsAdult: 'الأطفال مع شخص بالغ',
    badgeSolo: 'بدون مساعدة', badgeAdult: 'مع شخص بالغ',
    count: (n) => `${n} وصفة`,
    empty: 'لا توجد وصفات بهذا الفلتر. أزِل فلترًا أو أضِف وصفتك.',
    minShort: 'دقيقة', servings: (n) => `${n} حصص`,
    ingredients: 'المكوّنات', steps: 'طريقة التحضير',
    saveFav: '🤍 حفظ', savedFav: '❤️ محفوظة',
    watchIn: (l) => `شاهد على ${l}`, deleteRecipe: '🗑️ حذف هذه الوصفة',
    addTitle: '➕ أضِف وصفتك',
    formHelp: 'الصق رابط فيديو من تيك توك أو يوتيوب أو إنستغرام أو فيسبوك وأعطه اسمًا. يُحفظ على جهازك. 💾',
    nameLabel: 'اسم الوصفة', namePlaceholder: 'مثال: باستا كريمية من تيك توك',
    linkLabel: 'رابط الفيديو', typeLabel: 'النوع',
    saveRecipe: '💾 حفظ الوصفة', myRecipes: 'وصفاتي', international: 'دولي',
    footer: (n, c) => `مطبخ العالم · ${n} وصفة + وصفاتك · ${c} أصول 🌎`,
    langLabel: 'اللغة'
  }
}

export function urlLang(): Lang | null {
  if (typeof window === 'undefined') return null
  try {
    const p = new URLSearchParams(window.location.search).get('lang')
    const code = (p ?? '').toLowerCase()
    return LANGS.some((l) => l.code === code) ? (code as Lang) : null
  } catch {
    return null
  }
}

export function storedLang(): Lang | null {
  try {
    const v = localStorage.getItem(LANG_KEY)
    return v && LANGS.some((l) => l.code === v) ? (v as Lang) : null
  } catch {
    return null
  }
}

export function detectLang(): Lang {
  if (typeof navigator === 'undefined') return 'es'
  const supported = LANGS.map((l) => l.code)
  const tags = navigator.languages ?? [navigator.language]
  for (const tag of tags) {
    const base = (tag ?? '').slice(0, 2).toLowerCase() as Lang
    if (supported.includes(base)) return base
  }
  return 'es'
}

export function saveLang(lang: Lang): void {
  try {
    localStorage.setItem(LANG_KEY, lang)
  } catch {
    /* storage disabled */
  }
}

export function initialLang(): Lang {
  return urlLang() ?? storedLang() ?? detectLang()
}
