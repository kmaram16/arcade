// Recetas del mundo — datos. Mucho cariño para Colombia 🇨🇴 e Irán 🇮🇷,
// dulces de varios países y platos de todas partes.

export type Category = 'principal' | 'postre' | 'entrante' | 'desayuno' | 'bebida'

export interface Recipe {
  id: string
  name: string
  country: string
  flag: string
  category: Category
  emoji: string
  minutes: number
  servings: number
  difficulty: 1 | 2 | 3 // 1 fácil, 2 media, 3 difícil
  ingredients: string[]
  steps: string[]
  keto?: boolean // baja en carbohidratos
  kids?: 'solo' | 'adult' // 'solo' = sin supervisión; 'adult' = con supervisión de un adulto
  video?: string // enlace a YouTube / TikTok / Instagram / Facebook
  user?: boolean // receta añadida por el usuario (guardada en el dispositivo)
}

export const CATEGORY_LABEL: Record<Category, string> = {
  principal: 'Platos principales',
  entrante: 'Entrantes',
  postre: 'Dulces y postres',
  desayuno: 'Desayunos',
  bebida: 'Bebidas'
}

export const CATEGORY_EMOJI: Record<Category, string> = {
  principal: '🍽️',
  entrante: '🥟',
  postre: '🍰',
  desayuno: '🍳',
  bebida: '🥤'
}

export const DIFFICULTY_LABEL: Record<1 | 2 | 3, string> = {
  1: 'Fácil',
  2: 'Media',
  3: 'Difícil'
}

export const RECIPES: Recipe[] = [
  // ───────────── COLOMBIA 🇨🇴 ─────────────
  {
    id: 'arepa-queso', name: 'Arepas de queso', country: 'Colombia', flag: '🇨🇴',
    category: 'desayuno', emoji: '🫓', minutes: 25, servings: 4, difficulty: 1,
    ingredients: [
      '2 tazas de harina de maíz precocida (arepa)',
      '2 ½ tazas de agua tibia',
      '1 cucharadita de sal',
      '1 ½ taza de queso blanco rallado',
      '1 cucharada de mantequilla'
    ],
    steps: [
      'Mezcla la harina con la sal y añade el agua tibia poco a poco.',
      'Amasa 3 minutos hasta lograr una masa suave que no se pegue.',
      'Agrega el queso rallado y amasa para integrarlo.',
      'Forma bolas y aplánalas en discos de 1 cm de grosor.',
      'Cocina en una plancha o sartén con un poco de mantequilla, 5 min por lado, hasta dorar.'
    ]
  },
  {
    id: 'bandeja-paisa', name: 'Bandeja paisa', country: 'Colombia', flag: '🇨🇴',
    category: 'principal', emoji: '🍛', minutes: 90, servings: 4, difficulty: 3,
    ingredients: [
      'Frijoles rojos cocidos con hogao',
      'Arroz blanco',
      '300 g de carne molida',
      'Chicharrón (panceta de cerdo)',
      '2 chorizos',
      '4 huevos',
      '2 plátanos maduros',
      'Aguacate y arepa para acompañar'
    ],
    steps: [
      'Cocina los frijoles con hogao (sofrito de tomate y cebolla) hasta que espesen.',
      'Fríe el chicharrón hasta que quede crujiente.',
      'Sofríe la carne molida con sal, comino y cebolla.',
      'Asa los chorizos y fríe los plátanos maduros en rodajas.',
      'Fríe un huevo por persona.',
      'Sirve todo junto en una bandeja grande con arroz, aguacate y arepa.'
    ]
  },
  {
    id: 'ajiaco', name: 'Ajiaco santafereño', country: 'Colombia', flag: '🇨🇴',
    category: 'principal', emoji: '🥘', minutes: 75, servings: 4, difficulty: 2,
    ingredients: [
      '2 pechugas de pollo',
      '4 papas criollas y 4 papas sabaneras',
      '2 mazorcas partidas',
      'Un puñado de guascas (hierba)',
      'Crema de leche y alcaparras',
      'Cilantro, cebolla larga, sal'
    ],
    steps: [
      'Cocina el pollo en agua con cebolla, cilantro y sal unos 20 min.',
      'Retira el pollo, desmenúzalo y reserva.',
      'En el mismo caldo agrega las papas y las mazorcas.',
      'Cuando las papas criollas se deshagan y espesen el caldo, añade las guascas.',
      'Regresa el pollo, cocina 5 min más.',
      'Sirve con crema de leche, alcaparras y aguacate al lado.'
    ]
  },
  {
    id: 'empanada-col', name: 'Empanadas colombianas', country: 'Colombia', flag: '🇨🇴',
    category: 'entrante', emoji: '🥟', minutes: 60, servings: 6, difficulty: 2,
    ingredients: [
      '2 tazas de harina de maíz amarilla precocida',
      '2 tazas de agua tibia con un poco de color (achiote)',
      '2 papas cocidas y majadas',
      '250 g de carne molida guisada con hogao',
      'Aceite para freír'
    ],
    steps: [
      'Mezcla las papas majadas con la carne guisada para el relleno.',
      'Amasa la harina con el agua de achiote hasta una masa suave.',
      'Forma discos finos sobre plástico y pon relleno en el centro.',
      'Dobla, sella los bordes y presiona con un tenedor.',
      'Fríe en aceite caliente hasta dorar.',
      'Sirve con ají de aguacate.'
    ]
  },
  {
    id: 'natilla', name: 'Natilla colombiana', country: 'Colombia', flag: '🇨🇴',
    category: 'postre', emoji: '🍮', minutes: 30, servings: 8, difficulty: 1,
    ingredients: [
      '1 litro de leche',
      '1 taza de maicena',
      '250 g de panela rallada',
      '1 astilla de canela y 3 clavos de olor',
      'Coco rallado (opcional)'
    ],
    steps: [
      'Disuelve la maicena en 2 tazas de leche fría.',
      'Calienta el resto de la leche con la panela, la canela y los clavos.',
      'Añade la mezcla de maicena revolviendo sin parar.',
      'Cocina a fuego medio hasta que espese mucho (unos 10 min).',
      'Vierte en un molde, deja enfriar y desmolda.'
    ]
  },
  {
    id: 'aguapanela', name: 'Aguapanela con limón', country: 'Colombia', flag: '🇨🇴',
    category: 'bebida', emoji: '🍋', minutes: 10, servings: 4, difficulty: 1,
    ingredients: [
      '200 g de panela',
      '1 litro de agua',
      'El jugo de 2 limones',
      'Hielo (para servir fría)'
    ],
    steps: [
      'Hierve el agua con la panela hasta que se disuelva por completo.',
      'Deja enfriar un poco y añade el jugo de limón.',
      'Sirve caliente en días fríos, o con hielo cuando hace calor.'
    ]
  },

  // ───────────── IRÁN 🇮🇷 ─────────────
  {
    id: 'koobideh', name: 'Kabab koobideh', country: 'Irán', flag: '🇮🇷',
    category: 'principal', emoji: '🍢', minutes: 40, servings: 4, difficulty: 2,
    ingredients: [
      '500 g de carne molida (cordero o res)',
      '1 cebolla grande rallada y escurrida',
      '1 cucharadita de sal y pimienta',
      'Una pizca de cúrcuma',
      'Azafrán disuelto en agua caliente'
    ],
    steps: [
      'Mezcla la carne con la cebolla bien escurrida y las especias.',
      'Amasa con las manos 5–10 min hasta que quede pegajosa (así se pega al pincho).',
      'Deja reposar 30 min en la nevera.',
      'Forma la carne alargada alrededor de pinchos planos.',
      'Asa a la parrilla girando, pincelando con azafrán, hasta dorar.',
      'Sirve con arroz, sumac y tomate asado.'
    ]
  },
  {
    id: 'ghormeh', name: 'Ghormeh sabzi', country: 'Irán', flag: '🇮🇷',
    category: 'principal', emoji: '🍲', minutes: 150, servings: 4, difficulty: 3,
    ingredients: [
      '400 g de carne de res en cubos',
      'Manojos de perejil, cilantro y fenogreco picados',
      '1 taza de frijoles rojos',
      '4 limones secos (limoo amani)',
      '1 cebolla, cúrcuma, sal'
    ],
    steps: [
      'Sofríe la cebolla con la carne y la cúrcuma hasta dorar.',
      'Fríe las hierbas picadas en aceite hasta que oscurezcan y huelan rico.',
      'Junta la carne, las hierbas, los frijoles y agua.',
      'Pincha los limones secos y añádelos.',
      'Cocina a fuego muy lento 2–3 horas hasta que espese.',
      'Sirve con arroz basmati.'
    ]
  },
  {
    id: 'fesenjan', name: 'Fesenjan (pollo con nuez y granada)', country: 'Irán', flag: '🇮🇷',
    category: 'principal', emoji: '🍗', minutes: 90, servings: 4, difficulty: 3,
    ingredients: [
      '4 muslos de pollo',
      '2 tazas de nueces molidas finas',
      '½ taza de melaza de granada',
      '1 cebolla, sal, azúcar al gusto'
    ],
    steps: [
      'Dora el pollo con la cebolla y reserva.',
      'Tuesta ligeramente las nueces molidas en la olla.',
      'Añade agua y cocina las nueces a fuego lento hasta que suelten su aceite.',
      'Agrega la melaza de granada y el pollo.',
      'Cocina 1 hora a fuego bajo hasta una salsa espesa y oscura.',
      'Ajusta el punto agridulce y sirve con arroz.'
    ]
  },
  {
    id: 'tahdig', name: 'Tahdig (arroz con costra dorada)', country: 'Irán', flag: '🇮🇷',
    category: 'entrante', emoji: '🍚', minutes: 70, servings: 4, difficulty: 3,
    ingredients: [
      '2 tazas de arroz basmati',
      'Aceite y mantequilla',
      'Azafrán disuelto',
      'Sal'
    ],
    steps: [
      'Remoja el arroz 1 hora, luego hiérvelo a medio cocer y escúrrelo.',
      'Pon aceite y azafrán en el fondo de la olla.',
      'Añade el arroz formando un montículo y haz agujeros con el mango de una cuchara.',
      'Tapa con un paño y cocina a fuego bajo unos 40 min.',
      'Voltea la olla sobre un plato: abajo queda la costra dorada crujiente (tahdig).'
    ]
  },
  {
    id: 'sholeh-zard', name: 'Sholeh zard (arroz de azafrán)', country: 'Irán', flag: '🇮🇷',
    category: 'postre', emoji: '🍚', minutes: 80, servings: 6, difficulty: 2,
    ingredients: [
      '1 taza de arroz',
      '1 taza de azúcar',
      'Azafrán disuelto',
      '2 cucharadas de agua de rosas',
      'Cardamomo, canela y pistachos'
    ],
    steps: [
      'Cocina el arroz con mucha agua hasta que quede muy blando.',
      'Añade el azúcar y remueve.',
      'Agrega el azafrán, el agua de rosas y el cardamomo.',
      'Cocina hasta que espese como un flan cremoso.',
      'Sirve frío y decora con canela y pistacho.'
    ]
  },
  {
    id: 'baghlava', name: 'Baghlava persa', country: 'Irán', flag: '🇮🇷',
    category: 'postre', emoji: '🍯', minutes: 70, servings: 12, difficulty: 3,
    ingredients: [
      'Masa filo',
      '2 tazas de pistachos molidos',
      'Azúcar y cardamomo',
      'Agua de rosas',
      'Mantequilla derretida'
    ],
    steps: [
      'Mezcla los pistachos con azúcar y cardamomo para el relleno.',
      'Coloca capas de masa filo pinceladas con mantequilla, con relleno en medio.',
      'Corta en rombos antes de hornear.',
      'Hornea a 170 °C hasta dorar.',
      'Baña con un jarabe de azúcar y agua de rosas y deja reposar.'
    ]
  },
  {
    id: 'doogh', name: 'Doogh (bebida de yogur)', country: 'Irán', flag: '🇮🇷',
    category: 'bebida', emoji: '🥛', minutes: 5, servings: 2, difficulty: 1,
    ingredients: [
      '1 taza de yogur natural',
      '2 tazas de agua fría (o con gas)',
      'Una pizca de sal',
      'Menta seca'
    ],
    steps: [
      'Bate el yogur con el agua fría hasta que quede líquido.',
      'Añade la sal y la menta seca.',
      'Sirve muy frío, ideal con kabab.'
    ]
  },

  // ───────────── ITALIA 🇮🇹 ─────────────
  {
    id: 'carbonara', name: 'Pasta carbonara', country: 'Italia', flag: '🇮🇹',
    category: 'principal', emoji: '🍝', minutes: 25, servings: 2, difficulty: 2,
    ingredients: [
      '200 g de espaguetis',
      '100 g de guanciale o panceta',
      '2 yemas + 1 huevo',
      '50 g de queso pecorino rallado',
      'Pimienta negra'
    ],
    steps: [
      'Cuece la pasta en agua con sal.',
      'Dora el guanciale en trocitos sin aceite.',
      'Bate los huevos con el pecorino y mucha pimienta.',
      'Escurre la pasta y mézclala con el guanciale fuera del fuego.',
      'Añade el huevo y un poco de agua de cocción, removiendo rápido para crear la crema (sin cuajar).'
    ]
  },
  {
    id: 'margherita', name: 'Pizza margherita', country: 'Italia', flag: '🇮🇹',
    category: 'principal', emoji: '🍕', minutes: 120, servings: 2, difficulty: 2,
    ingredients: [
      '300 g de harina',
      '200 ml de agua, 3 g de levadura, sal',
      'Salsa de tomate',
      'Mozzarella',
      'Albahaca y aceite de oliva'
    ],
    steps: [
      'Amasa harina, agua, levadura y sal; deja leudar 1–2 horas.',
      'Estira la masa con las manos.',
      'Cubre con salsa de tomate y mozzarella.',
      'Hornea muy caliente (250 °C) hasta que los bordes se doren.',
      'Añade albahaca fresca y un chorrito de aceite al salir.'
    ]
  },
  {
    id: 'tiramisu', name: 'Tiramisú', country: 'Italia', flag: '🇮🇹',
    category: 'postre', emoji: '🍰', minutes: 40, servings: 6, difficulty: 2,
    ingredients: [
      '250 g de mascarpone',
      '3 huevos',
      '80 g de azúcar',
      'Bizcochos de soletilla',
      'Café cargado y cacao en polvo'
    ],
    steps: [
      'Bate las yemas con el azúcar y añade el mascarpone.',
      'Monta las claras a punto de nieve e intégralas con suavidad.',
      'Moja los bizcochos en café (sin empaparlos).',
      'Alterna capas de bizcocho y crema en un molde.',
      'Espolvorea cacao y refrigera al menos 4 horas.'
    ]
  },

  // ───────────── MÉXICO 🇲🇽 ─────────────
  {
    id: 'pastor', name: 'Tacos al pastor', country: 'México', flag: '🇲🇽',
    category: 'principal', emoji: '🌮', minutes: 60, servings: 4, difficulty: 2,
    ingredients: [
      '500 g de cerdo en filetes finos',
      'Adobo: chiles, achiote, vinagre y piña',
      'Tortillas de maíz',
      'Piña, cebolla y cilantro',
      'Limón'
    ],
    steps: [
      'Marina el cerdo con el adobo licuado al menos 2 horas.',
      'Asa la carne en plancha bien caliente y pícala fina.',
      'Calienta las tortillas.',
      'Rellena con la carne, piña, cebolla y cilantro.',
      'Sirve con limón y salsa al gusto.'
    ]
  },
  {
    id: 'guacamole', name: 'Guacamole', country: 'México', flag: '🇲🇽',
    category: 'entrante', emoji: '🥑', minutes: 10, servings: 4, difficulty: 1,
    ingredients: [
      '3 aguacates maduros',
      '1 limón',
      '½ cebolla y 1 tomate picados',
      'Cilantro y chile al gusto',
      'Sal'
    ],
    steps: [
      'Machaca los aguacates con un tenedor.',
      'Añade la cebolla, el tomate, el cilantro y el chile.',
      'Agrega el jugo de limón y sal.',
      'Mezcla y sirve (keto: acompaña con crudités en vez de totopos).'
    ],
    keto: true
  },

  // ───────────── ESPAÑA 🇪🇸 ─────────────
  {
    id: 'tortilla', name: 'Tortilla española', country: 'España', flag: '🇪🇸',
    category: 'principal', emoji: '🥚', minutes: 40, servings: 4, difficulty: 2,
    ingredients: [
      '4 patatas medianas',
      '6 huevos',
      '1 cebolla (opcional)',
      'Aceite de oliva',
      'Sal'
    ],
    steps: [
      'Corta las patatas en láminas y fríelas a fuego suave con la cebolla.',
      'Escurre el aceite y salpimienta.',
      'Bate los huevos y mézclalos con las patatas.',
      'Cuaja en la sartén a fuego medio.',
      'Da la vuelta con un plato y termina el otro lado (jugosa por dentro).'
    ]
  },
  {
    id: 'churros', name: 'Churros con chocolate', country: 'España', flag: '🇪🇸',
    category: 'postre', emoji: '🍫', minutes: 30, servings: 4, difficulty: 2,
    ingredients: [
      '250 ml de agua',
      '250 g de harina',
      'Una pizca de sal',
      'Aceite para freír',
      'Azúcar y chocolate para mojar'
    ],
    steps: [
      'Hierve el agua con la sal y añade la harina de golpe.',
      'Remueve enérgicamente hasta formar una masa lisa.',
      'Pon la masa en una manga con boquilla de estrella.',
      'Fríe tiras en aceite caliente hasta dorar.',
      'Reboza en azúcar y sirve con chocolate caliente.'
    ]
  },

  // ───────────── JAPÓN 🇯🇵 ─────────────
  {
    id: 'onigiri', name: 'Onigiri (bolas de arroz)', country: 'Japón', flag: '🇯🇵',
    category: 'entrante', emoji: '🍙', minutes: 30, servings: 3, difficulty: 1,
    ingredients: [
      '2 tazas de arroz japonés',
      'Sal',
      'Alga nori',
      'Relleno: atún con mayonesa o umeboshi'
    ],
    steps: [
      'Cuece el arroz y déjalo templar.',
      'Humedece tus manos con agua y un poco de sal.',
      'Toma una porción de arroz, pon relleno en el centro.',
      'Forma un triángulo apretando suavemente.',
      'Envuelve la base con una tira de nori.'
    ]
  },

  // ───────────── INDIA 🇮🇳 ─────────────
  {
    id: 'tikka-masala', name: 'Pollo tikka masala', country: 'India', flag: '🇮🇳',
    category: 'principal', emoji: '🍛', minutes: 60, servings: 4, difficulty: 2,
    ingredients: [
      '600 g de pollo en cubos',
      '1 yogur natural',
      'Garam masala, comino, cúrcuma, jengibre y ajo',
      '400 g de tomate triturado',
      '150 ml de nata'
    ],
    steps: [
      'Marina el pollo en yogur y especias 1 hora.',
      'Asa o dora el pollo y reserva.',
      'Sofríe ajo, jengibre y especias; añade el tomate.',
      'Incorpora la nata y cocina la salsa 10 min.',
      'Devuelve el pollo y cocina 10 min más.',
      'Sirve con arroz o pan naan.'
    ]
  },

  // ───────────── FRANCIA 🇫🇷 ─────────────
  {
    id: 'crepes', name: 'Crêpes', country: 'Francia', flag: '🇫🇷',
    category: 'postre', emoji: '🥞', minutes: 30, servings: 4, difficulty: 1,
    ingredients: [
      '250 g de harina',
      '2 huevos',
      '500 ml de leche',
      '1 cucharada de mantequilla derretida',
      'Una pizca de sal y azúcar'
    ],
    steps: [
      'Bate la harina, los huevos y la leche hasta una masa líquida sin grumos.',
      'Añade la mantequilla, sal y azúcar; deja reposar 30 min.',
      'Vierte un poco en una sartén caliente y gírala para cubrir el fondo.',
      'Cocina 1 min por lado hasta dorar.',
      'Rellena con crema de cacao, o azúcar y limón.'
    ]
  },

  // ───────────── ARGENTINA 🇦🇷 ─────────────
  {
    id: 'alfajores', name: 'Alfajores de maicena', country: 'Argentina', flag: '🇦🇷',
    category: 'postre', emoji: '🍪', minutes: 50, servings: 12, difficulty: 2,
    ingredients: [
      '200 g de maicena',
      '150 g de harina',
      '100 g de mantequilla',
      '80 g de azúcar y 2 yemas',
      'Dulce de leche y coco rallado'
    ],
    steps: [
      'Bate la mantequilla con el azúcar y las yemas.',
      'Añade la maicena y la harina hasta formar una masa.',
      'Estira y corta discos pequeños.',
      'Hornea a 170 °C unos 10 min (deben quedar pálidos).',
      'Une de dos en dos con dulce de leche y reboza los bordes en coco.'
    ]
  },

  // ───────────── ESTADOS UNIDOS 🇺🇸 ─────────────
  {
    id: 'brownies', name: 'Brownies de chocolate', country: 'Estados Unidos', flag: '🇺🇸',
    category: 'postre', emoji: '🍫', minutes: 40, servings: 9, difficulty: 1,
    ingredients: [
      '200 g de chocolate negro',
      '150 g de mantequilla',
      '200 g de azúcar',
      '3 huevos',
      '120 g de harina y una pizca de sal'
    ],
    steps: [
      'Funde el chocolate con la mantequilla.',
      'Bate el azúcar con los huevos hasta espumar.',
      'Une las dos mezclas y añade la harina y la sal.',
      'Vierte en un molde forrado.',
      'Hornea a 180 °C unos 22–25 min; el centro debe quedar húmedo.'
    ]
  },

  // ───────────── MARRUECOS 🇲🇦 ─────────────
  {
    id: 'tajine', name: 'Tajín de pollo con limón', country: 'Marruecos', flag: '🇲🇦',
    category: 'principal', emoji: '🍗', minutes: 80, servings: 4, difficulty: 2,
    ingredients: [
      '4 contramuslos de pollo',
      '2 cebollas y 2 dientes de ajo',
      'Jengibre, cúrcuma, azafrán y comino',
      'Limón en conserva',
      'Aceitunas verdes y cilantro'
    ],
    steps: [
      'Dora el pollo con las especias.',
      'Añade la cebolla, el ajo y un poco de agua.',
      'Cocina tapado a fuego lento 45 min.',
      'Agrega el limón en conserva y las aceitunas.',
      'Reduce la salsa y termina con cilantro fresco.'
    ]
  },

  // ───────────── VENEZUELA 🇻🇪 ─────────────
  {
    id: 'reina-pepiada', name: 'Arepa reina pepiada', country: 'Venezuela', flag: '🇻🇪',
    category: 'principal', emoji: '🥑', minutes: 35, servings: 4, difficulty: 2,
    ingredients: [
      '2 tazas de harina de maíz precocida',
      '2 ½ tazas de agua tibia y sal',
      '2 pechugas de pollo cocidas y desmenuzadas',
      '2 aguacates maduros',
      'Mayonesa y cilantro'
    ],
    steps: [
      'Amasa la harina con agua y sal, forma arepas gruesas.',
      'Ásalas en plancha y termínalas al horno hasta que suenen huecas.',
      'Mezcla el pollo con aguacate en trozos, mayonesa y cilantro.',
      'Abre las arepas por un lado y rellénalas generosamente.'
    ]
  },
  {
    id: 'tequenos', name: 'Tequeños', country: 'Venezuela', flag: '🇻🇪',
    category: 'entrante', emoji: '🧀', minutes: 45, servings: 6, difficulty: 2,
    ingredients: [
      '300 g de harina, 1 huevo y 50 g de mantequilla',
      'Agua y una pizca de sal',
      '400 g de queso blanco semiduro en bastones',
      'Aceite para freír'
    ],
    steps: [
      'Haz una masa con harina, huevo, mantequilla, sal y agua; deja reposar.',
      'Estira y corta tiras largas.',
      'Envuelve cada bastón de queso en espiral, tapando bien las puntas.',
      'Fríe en aceite caliente hasta dorar.'
    ]
  },

  // ───────────── PERÚ 🇵🇪 ─────────────
  {
    id: 'ceviche', name: 'Ceviche peruano', country: 'Perú', flag: '🇵🇪',
    category: 'entrante', emoji: '🐟', minutes: 25, servings: 4, difficulty: 2,
    ingredients: [
      '500 g de pescado blanco muy fresco',
      'El jugo de 8–10 limones',
      '1 cebolla roja en pluma',
      'Ají limo o chile picado',
      'Cilantro, sal; camote y choclo para servir'
    ],
    steps: [
      'Corta el pescado en cubos y ponlo en un bol frío con sal.',
      'Cúbrelo con el jugo de limón y deja 10–15 min (se "cocina" en el ácido).',
      'Añade la cebolla, el ají y el cilantro.',
      'Sirve enseguida con camote cocido y choclo.'
    ]
  },
  {
    id: 'lomo-saltado', name: 'Lomo saltado', country: 'Perú', flag: '🇵🇪',
    category: 'principal', emoji: '🥩', minutes: 30, servings: 4, difficulty: 2,
    ingredients: [
      '500 g de lomo de res en tiras',
      '1 cebolla roja y 2 tomates en gajos',
      'Ají amarillo',
      'Salsa de soja y un chorrito de vinagre',
      'Papas fritas y arroz blanco'
    ],
    steps: [
      'Saltea la carne en una sartén muy caliente hasta dorar.',
      'Añade la cebolla, el tomate y el ají; saltea sin que se deshagan.',
      'Vierte la salsa de soja y el vinagre.',
      'Mezcla con las papas fritas y sirve con arroz.'
    ]
  },

  // ───────────── BRASIL 🇧🇷 ─────────────
  {
    id: 'brigadeiro', name: 'Brigadeiros', country: 'Brasil', flag: '🇧🇷',
    category: 'postre', emoji: '🍫', minutes: 30, servings: 20, difficulty: 1,
    ingredients: [
      '1 lata de leche condensada',
      '3 cucharadas de cacao en polvo',
      '1 cucharada de mantequilla',
      'Fideos de chocolate (granas)'
    ],
    steps: [
      'Cocina la leche condensada con el cacao y la mantequilla a fuego medio.',
      'Remueve sin parar hasta que se despegue del fondo.',
      'Deja enfriar y, con las manos untadas, forma bolitas.',
      'Rebózalas en fideos de chocolate.'
    ],
    kids: 'adult'
  },
  {
    id: 'pao-queijo', name: 'Pão de queijo', country: 'Brasil', flag: '🇧🇷',
    category: 'desayuno', emoji: '🧀', minutes: 40, servings: 12, difficulty: 2,
    ingredients: [
      '250 g de almidón de yuca (tapioca)',
      '120 ml de leche y 60 ml de aceite',
      '2 huevos',
      '120 g de queso rallado y sal'
    ],
    steps: [
      'Calienta la leche con el aceite y la sal hasta hervir.',
      'Vierte sobre el almidón y mezcla (escaldado).',
      'Cuando entibie, añade los huevos y el queso.',
      'Forma bolitas y hornea a 190 °C hasta inflar y dorar.'
    ]
  },

  // ───────────── CHINA 🇨🇳 ─────────────
  {
    id: 'arroz-frito', name: 'Arroz frito', country: 'China', flag: '🇨🇳',
    category: 'principal', emoji: '🍚', minutes: 20, servings: 3, difficulty: 1,
    ingredients: [
      '3 tazas de arroz cocido y frío',
      '2 huevos',
      'Guisantes y zanahoria en cubos',
      'Cebolleta',
      'Salsa de soja y aceite'
    ],
    steps: [
      'Saltea la zanahoria y los guisantes en aceite bien caliente.',
      'Aparta a un lado y cuaja los huevos revueltos.',
      'Añade el arroz frío y saltea a fuego alto.',
      'Vierte la salsa de soja y la cebolleta, mezcla y sirve.'
    ]
  },
  {
    id: 'jiaozi', name: 'Jiaozi (dumplings)', country: 'China', flag: '🇨🇳',
    category: 'entrante', emoji: '🥟', minutes: 60, servings: 4, difficulty: 3,
    ingredients: [
      'Obleas para dumplings',
      '250 g de carne de cerdo picada',
      'Col china picada',
      'Jengibre, cebolleta',
      'Salsa de soja y aceite de sésamo'
    ],
    steps: [
      'Mezcla la carne con la col, el jengibre, la cebolleta, la soja y el sésamo.',
      'Pon una cucharada de relleno en cada oblea.',
      'Humedece el borde y ciérralo haciendo pliegues.',
      'Hierve 5 min, o hazlos a la plancha con un poco de agua tapados.'
    ]
  },

  // ───────────── TAILANDIA 🇹🇭 ─────────────
  {
    id: 'pad-thai', name: 'Pad Thai', country: 'Tailandia', flag: '🇹🇭',
    category: 'principal', emoji: '🍜', minutes: 30, servings: 2, difficulty: 2,
    ingredients: [
      '150 g de fideos de arroz',
      'Gambas o pollo',
      '1 huevo',
      'Brotes de soja y cacahuetes',
      'Salsa de tamarindo, salsa de pescado, azúcar y lima'
    ],
    steps: [
      'Remoja los fideos en agua tibia hasta ablandar.',
      'Saltea las gambas o el pollo; añade el huevo y revuélvelo.',
      'Agrega los fideos y la salsa (tamarindo, pescado y azúcar).',
      'Incorpora los brotes, termina con cacahuetes y lima.'
    ]
  },

  // ───────────── GRECIA 🇬🇷 ─────────────
  {
    id: 'tzatziki', name: 'Tzatziki', country: 'Grecia', flag: '🇬🇷',
    category: 'entrante', emoji: '🥒', minutes: 15, servings: 4, difficulty: 1,
    ingredients: [
      '400 g de yogur griego',
      '1 pepino rallado y escurrido',
      '1 diente de ajo',
      'Aceite de oliva, eneldo y limón'
    ],
    steps: [
      'Ralla el pepino y exprímelo para quitar el agua.',
      'Mézclalo con el yogur, el ajo picado, el aceite y el eneldo.',
      'Añade un chorrito de limón y sal.',
      'Refrigera y sirve con pan de pita.'
    ]
  },
  {
    id: 'souvlaki', name: 'Souvlaki de pollo', country: 'Grecia', flag: '🇬🇷',
    category: 'principal', emoji: '🍢', minutes: 40, servings: 4, difficulty: 2,
    ingredients: [
      '600 g de pollo en cubos',
      'Aceite de oliva y limón',
      'Ajo y orégano',
      'Pan de pita para servir'
    ],
    steps: [
      'Marina el pollo con aceite, limón, ajo y orégano 1 hora.',
      'Ensarta en pinchos.',
      'Asa a la parrilla girando hasta dorar.',
      'Sirve en pita con tzatziki y tomate.'
    ]
  },

  // ───────────── LÍBANO 🇱🇧 ─────────────
  {
    id: 'hummus', name: 'Hummus', country: 'Líbano', flag: '🇱🇧',
    category: 'entrante', emoji: '🫛', minutes: 15, servings: 4, difficulty: 1,
    ingredients: [
      '400 g de garbanzos cocidos',
      '2 cucharadas de tahini',
      '1 limón y 1 diente de ajo',
      'Aceite de oliva, comino y sal'
    ],
    steps: [
      'Tritura los garbanzos con el tahini, el limón y el ajo.',
      'Añade un poco de agua fría hasta que quede muy cremoso.',
      'Ajusta de comino y sal.',
      'Sirve con aceite de oliva y pimentón por encima.'
    ]
  },
  {
    id: 'falafel', name: 'Falafel', country: 'Líbano', flag: '🇱🇧',
    category: 'principal', emoji: '🧆', minutes: 40, servings: 4, difficulty: 2,
    ingredients: [
      '250 g de garbanzos secos (remojados 12 h, sin cocer)',
      '1 cebolla y 2 dientes de ajo',
      'Perejil y cilantro',
      'Comino, cilantro molido y sal',
      'Aceite para freír'
    ],
    steps: [
      'Tritura los garbanzos crudos remojados con la cebolla, el ajo y las hierbas.',
      'Añade las especias y deja reposar la masa.',
      'Forma bolitas o discos.',
      'Fríe en aceite caliente hasta que estén dorados y crujientes.'
    ]
  },

  // ───────────── COREA DEL SUR 🇰🇷 ─────────────
  {
    id: 'bibimbap', name: 'Bibimbap', country: 'Corea del Sur', flag: '🇰🇷',
    category: 'principal', emoji: '🍚', minutes: 45, servings: 2, difficulty: 2,
    ingredients: [
      'Arroz cocido',
      'Verduras salteadas (espinaca, zanahoria, setas, brotes)',
      '150 g de carne de res picada',
      '2 huevos',
      'Gochujang (pasta picante) y aceite de sésamo'
    ],
    steps: [
      'Saltea cada verdura por separado y la carne con un poco de soja.',
      'Pon el arroz en un bol.',
      'Coloca encima las verduras y la carne por secciones.',
      'Añade un huevo frito y una cucharada de gochujang.',
      'Mezcla todo bien justo antes de comer.'
    ]
  },

  // ───────────── ALEMANIA 🇩🇪 ─────────────
  {
    id: 'pretzel', name: 'Pretzel (Bretzel)', country: 'Alemania', flag: '🇩🇪',
    category: 'entrante', emoji: '🥨', minutes: 90, servings: 6, difficulty: 3,
    ingredients: [
      '400 g de harina',
      '220 ml de agua tibia, 7 g de levadura y sal',
      '2 cucharadas de bicarbonato (para el baño)',
      'Sal gruesa'
    ],
    steps: [
      'Amasa harina, agua, levadura y sal; deja leudar 1 hora.',
      'Divide, haz rollos largos y forma el nudo típico.',
      'Sumérgelos unos segundos en agua hirviendo con bicarbonato.',
      'Espolvorea sal gruesa y hornea a 220 °C hasta dorar.'
    ]
  },

  // ───────────── REINO UNIDO 🇬🇧 ─────────────
  {
    id: 'fish-chips', name: 'Fish and chips', country: 'Reino Unido', flag: '🇬🇧',
    category: 'principal', emoji: '🐟', minutes: 45, servings: 2, difficulty: 2,
    ingredients: [
      '2 filetes de pescado blanco',
      '150 g de harina',
      '200 ml de agua con gas o cerveza fría',
      '4 patatas grandes',
      'Aceite para freír y sal'
    ],
    steps: [
      'Corta las patatas en bastones y fríelas hasta doradas.',
      'Mezcla la harina con el agua con gas para una masa ligera.',
      'Reboza los filetes y fríelos hasta que floten y estén crujientes.',
      'Sirve con sal y un toque de vinagre.'
    ]
  },

  // ───────────── TURQUÍA 🇹🇷 ─────────────
  {
    id: 'kofte', name: 'Köfte (albóndigas turcas)', country: 'Turquía', flag: '🇹🇷',
    category: 'principal', emoji: '🍖', minutes: 35, servings: 4, difficulty: 1,
    ingredients: [
      '500 g de carne picada',
      '1 cebolla rallada',
      '3 cucharadas de pan rallado',
      'Comino, perejil, sal y pimienta'
    ],
    steps: [
      'Mezcla la carne con la cebolla, el pan rallado y las especias.',
      'Amasa bien y deja reposar 20 min.',
      'Forma pequeñas piezas alargadas.',
      'Ásalas o fríelas; sirve con arroz o pan y ensalada.'
    ]
  },

  // ───────────── JAPÓN 🇯🇵 (extra) ─────────────
  {
    id: 'ramen', name: 'Ramen casero', country: 'Japón', flag: '🇯🇵',
    category: 'principal', emoji: '🍜', minutes: 40, servings: 2, difficulty: 2,
    ingredients: [
      '2 raciones de fideos ramen',
      'Caldo (pollo o miso)',
      '2 huevos',
      'Cebolleta, alga nori',
      'Cerdo o pollo cocido'
    ],
    steps: [
      'Calienta y sazona el caldo.',
      'Cuece los huevos 6–7 min y pélalos (yema jugosa).',
      'Hierve los fideos según el paquete.',
      'Monta el bol: caldo, fideos, medio huevo, carne, cebolleta y nori.'
    ]
  },

  // ───────────── KETO 🥑 (baja en carbohidratos) ─────────────
  {
    id: 'keto-huevos-aguacate', name: 'Huevos con aguacate y tocino', country: 'Internacional', flag: '🌍',
    category: 'desayuno', emoji: '🥓', minutes: 15, servings: 2, difficulty: 1, keto: true,
    ingredients: [
      '4 huevos',
      '1 aguacate',
      '4 lonchas de tocino (bacon)',
      'Mantequilla, sal y pimienta'
    ],
    steps: [
      'Fríe el tocino hasta que quede crujiente y resérvalo.',
      'En la misma grasa, fríe los huevos.',
      'Sirve con el aguacate en rodajas.',
      'Salpimienta al gusto. ¡Desayuno keto listo!'
    ]
  },
  {
    id: 'keto-cesar', name: 'Ensalada César con pollo', country: 'Internacional', flag: '🌍',
    category: 'principal', emoji: '🥗', minutes: 25, servings: 2, difficulty: 1, keto: true,
    ingredients: [
      '1 pechuga de pollo',
      'Lechuga romana',
      'Queso parmesano en lascas',
      'Salsa césar (mayonesa, ajo, limón, mostaza)',
      'Sin picatostes (para que sea keto)'
    ],
    steps: [
      'Asa la pechuga con sal y córtala en tiras.',
      'Mezcla la mayonesa con ajo, limón y mostaza para la salsa.',
      'Trocea la lechuga y añade el pollo y el parmesano.',
      'Aliña con la salsa césar y sirve.'
    ]
  },
  {
    id: 'keto-salmon', name: 'Salmón con espárragos', country: 'Internacional', flag: '🌍',
    category: 'principal', emoji: '🐟', minutes: 25, servings: 2, difficulty: 1, keto: true,
    ingredients: [
      '2 lomos de salmón',
      'Un manojo de espárragos',
      'Aceite de oliva',
      'Ajo, limón y sal'
    ],
    steps: [
      'Coloca el salmón y los espárragos en una bandeja.',
      'Riega con aceite, ajo picado, limón y sal.',
      'Hornea a 200 °C unos 15 min.',
      'Sirve caliente: alto en grasa buena, casi sin carbohidratos.'
    ]
  },
  {
    id: 'keto-frittata', name: 'Frittata de espinacas y queso', country: 'Italia', flag: '🇮🇹',
    category: 'desayuno', emoji: '🍳', minutes: 25, servings: 4, difficulty: 2, keto: true,
    ingredients: [
      '6 huevos',
      'Un puñado de espinacas',
      '80 g de queso rallado',
      '3 cucharadas de nata',
      'Sal y pimienta'
    ],
    steps: [
      'Bate los huevos con la nata, sal y pimienta.',
      'Saltea las espinacas en una sartén con un poco de aceite.',
      'Vierte los huevos y el queso encima.',
      'Cuaja a fuego bajo y termina bajo el grill hasta dorar.'
    ]
  },
  {
    id: 'keto-aguacate-atun', name: 'Aguacate relleno de atún', country: 'Internacional', flag: '🌍',
    category: 'entrante', emoji: '🥑', minutes: 10, servings: 2, difficulty: 1, keto: true,
    ingredients: [
      '2 aguacates',
      '1 lata de atún en aceite',
      '2 cucharadas de mayonesa',
      'Cebolla picada y limón'
    ],
    steps: [
      'Mezcla el atún con la mayonesa, la cebolla y el limón.',
      'Parte los aguacates y quita el hueso.',
      'Rellena cada mitad con la mezcla de atún.',
      'Sirve frío.'
    ]
  },
  {
    id: 'keto-pollo-coco', name: 'Pollo al curry de coco', country: 'Tailandia', flag: '🇹🇭',
    category: 'principal', emoji: '🍛', minutes: 35, servings: 4, difficulty: 2, keto: true,
    ingredients: [
      '600 g de pollo en cubos',
      '400 ml de leche de coco',
      '2 cucharadas de pasta de curry',
      'Calabacín y pimiento',
      'Aceite y cilantro'
    ],
    steps: [
      'Sofríe la pasta de curry en aceite.',
      'Añade el pollo y séllalo.',
      'Vierte la leche de coco y las verduras.',
      'Cocina hasta que espese; sirve con arroz de coliflor.'
    ]
  },
  {
    id: 'keto-coliflor', name: 'Arroz de coliflor', country: 'Internacional', flag: '🌍',
    category: 'entrante', emoji: '🥦', minutes: 15, servings: 4, difficulty: 1, keto: true,
    ingredients: [
      '1 coliflor',
      'Mantequilla o aceite',
      '1 diente de ajo',
      'Sal y pimienta'
    ],
    steps: [
      'Ralla la coliflor hasta que parezca granos de arroz.',
      'Saltéala con ajo y mantequilla 5–7 min.',
      'Salpimienta.',
      'Úsalo como sustituto keto del arroz.'
    ]
  },
  {
    id: 'keto-albondigas', name: 'Albóndigas keto en salsa', country: 'Internacional', flag: '🌍',
    category: 'principal', emoji: '🍖', minutes: 40, servings: 4, difficulty: 2, keto: true,
    ingredients: [
      '500 g de carne picada',
      '1 huevo y 2 cucharadas de queso rallado (en vez de pan)',
      'Ajo, perejil y sal',
      'Salsa de tomate natural sin azúcar'
    ],
    steps: [
      'Mezcla la carne con el huevo, el queso, el ajo y el perejil.',
      'Forma bolitas.',
      'Dóralas en la sartén.',
      'Cocínalas 15 min en la salsa de tomate sin azúcar.'
    ]
  },
  {
    id: 'keto-fatbomb', name: 'Fat bombs de chocolate', country: 'Internacional', flag: '🌍',
    category: 'postre', emoji: '🍫', minutes: 20, servings: 12, difficulty: 1, keto: true,
    ingredients: [
      '100 g de aceite de coco',
      '3 cucharadas de cacao en polvo',
      '2 cucharadas de mantequilla de almendra',
      'Edulcorante (eritritol o estevia) y una pizca de sal'
    ],
    steps: [
      'Derrite el aceite de coco.',
      'Mézclalo con el cacao, la mantequilla de almendra y el edulcorante.',
      'Vierte en moldes pequeños.',
      'Congela 30 min hasta que estén firmes. Dulce keto sin azúcar.'
    ]
  },
  {
    id: 'keto-mousse', name: 'Mousse de chocolate keto', country: 'Internacional', flag: '🌍',
    category: 'postre', emoji: '🍮', minutes: 15, servings: 4, difficulty: 1, keto: true,
    ingredients: [
      '200 ml de nata para montar',
      '2 cucharadas de cacao en polvo',
      'Edulcorante al gusto',
      'Esencia de vainilla'
    ],
    steps: [
      'Monta la nata bien fría hasta que esté firme.',
      'Incorpora el cacao, el edulcorante y la vainilla con suavidad.',
      'Reparte en vasitos.',
      'Refrigera 1 hora antes de servir.'
    ]
  },

  // ───────────── PARA NIÑOS 🧒 — SIN SUPERVISIÓN (sin fuego ni cuchillos) ─────────────
  {
    id: 'kid-sandwich-platano', name: 'Sándwich de plátano y cacahuete', country: 'Internacional', flag: '🌍',
    category: 'desayuno', emoji: '🥪', minutes: 5, servings: 1, difficulty: 1, kids: 'solo',
    ingredients: [
      '2 rebanadas de pan de molde',
      'Crema de cacahuete',
      '1 plátano',
      'Un poco de miel (opcional)'
    ],
    steps: [
      'Unta la crema de cacahuete en una rebanada de pan.',
      'Pela el plátano y córtalo en rodajas con un cuchillo de plástico.',
      'Coloca las rodajas encima y añade un chorrito de miel.',
      'Tapa con la otra rebanada. ¡Sin cocinar!'
    ]
  },
  {
    id: 'kid-brochetas', name: 'Brochetas de frutas', country: 'Internacional', flag: '🌍',
    category: 'postre', emoji: '🍡', minutes: 10, servings: 4, difficulty: 1, kids: 'solo',
    ingredients: [
      'Fresas y uvas',
      'Plátano en rodajas',
      'Melón en trozos',
      'Palillos de brocheta'
    ],
    steps: [
      'Lava bien la fruta.',
      'Ensarta trozos de colores en cada palillo.',
      'Haz un arcoíris de frutas.',
      '¡A comer! (Cuidado con la punta del palillo.)'
    ]
  },
  {
    id: 'kid-parfait', name: 'Yogur con frutas y granola', country: 'Internacional', flag: '🌍',
    category: 'desayuno', emoji: '🍓', minutes: 5, servings: 1, difficulty: 1, kids: 'solo',
    ingredients: [
      'Yogur natural o de vainilla',
      'Frutas blandas troceadas (fresa, plátano)',
      'Granola',
      'Un poco de miel'
    ],
    steps: [
      'Pon una capa de yogur en un vaso.',
      'Añade fruta encima.',
      'Espolvorea granola.',
      'Repite las capas y termina con un chorrito de miel.'
    ]
  },
  {
    id: 'kid-bolitas-avena', name: 'Bolitas de avena y cacao (sin horno)', country: 'Internacional', flag: '🌍',
    category: 'postre', emoji: '🍪', minutes: 20, servings: 10, difficulty: 1, kids: 'solo',
    ingredients: [
      '1 taza de avena',
      '3 cucharadas de crema de cacahuete',
      '2 cucharadas de miel',
      '1 cucharada de cacao y coco rallado'
    ],
    steps: [
      'Mezcla la avena con la crema de cacahuete, la miel y el cacao.',
      'Amasa con las manos limpias.',
      'Forma bolitas y rebózalas en coco.',
      'Guárdalas en la nevera 20 min para que se pongan firmes.'
    ]
  },
  {
    id: 'kid-ensalada-frutas', name: 'Ensalada de frutas', country: 'Internacional', flag: '🌍',
    category: 'postre', emoji: '🍉', minutes: 10, servings: 4, difficulty: 1, kids: 'solo',
    ingredients: [
      'Fruta blanda ya cortada (plátano, fresas, uvas, melón)',
      'Zumo de naranja',
      'Un poco de miel (opcional)'
    ],
    steps: [
      'Pon toda la fruta en un bol grande.',
      'Añade un poco de zumo de naranja.',
      'Mezcla con cuidado usando una cuchara.',
      '¡Fresca y lista!'
    ]
  },
  {
    id: 'kid-galletas-deco', name: 'Galletas decoradas', country: 'Internacional', flag: '🌍',
    category: 'postre', emoji: '🍪', minutes: 15, servings: 6, difficulty: 1, kids: 'solo',
    ingredients: [
      'Galletas ya hechas (tipo María)',
      'Glaseado o crema de cacao',
      'Fideos de colores',
      'Gominolas pequeñas'
    ],
    steps: [
      'Unta glaseado o crema sobre cada galleta.',
      'Decora con fideos de colores.',
      'Usa gominolas para hacer caras y ojos.',
      '¡Sin horno y muy divertido!'
    ]
  },

  // ───────────── PARA NIÑOS 👨‍👧 — CON UN ADULTO (usan fuego u horno) ─────────────
  {
    id: 'kid-tortitas', name: 'Tortitas (pancakes)', country: 'Estados Unidos', flag: '🇺🇸',
    category: 'desayuno', emoji: '🥞', minutes: 25, servings: 4, difficulty: 2, kids: 'adult',
    ingredients: [
      '1 taza de harina',
      '1 huevo y 1 taza de leche',
      '1 cucharada de azúcar y 1 de levadura',
      'Mantequilla; sirope o fruta para servir'
    ],
    steps: [
      'Mezcla la harina, el huevo, la leche, el azúcar y la levadura.',
      'Un adulto calienta una sartén con un poco de mantequilla.',
      'Vierte un cucharón de masa.',
      'Da la vuelta cuando salgan burbujas y dora el otro lado.',
      'Sirve con sirope o fruta.'
    ]
  },
  {
    id: 'kid-mini-pizzas', name: 'Mini pizzas', country: 'Italia', flag: '🇮🇹',
    category: 'principal', emoji: '🍕', minutes: 20, servings: 4, difficulty: 1, kids: 'adult',
    ingredients: [
      'Pan de molde o bases pequeñas de pizza',
      'Salsa de tomate',
      'Queso rallado',
      'Ingredientes al gusto (jamón, maíz, aceitunas)'
    ],
    steps: [
      'Unta salsa de tomate sobre cada base.',
      'Añade queso y tus ingredientes favoritos.',
      'Un adulto las hornea a 200 °C durante 8–10 min.',
      'Listo cuando el queso se derrita.'
    ]
  },
  {
    id: 'kid-huevos', name: 'Huevos revueltos', country: 'Internacional', flag: '🌍',
    category: 'desayuno', emoji: '🍳', minutes: 10, servings: 2, difficulty: 1, kids: 'adult',
    ingredients: [
      '3 huevos',
      'Mantequilla',
      'Sal',
      'Pan tostado para acompañar'
    ],
    steps: [
      'Bate los huevos con una pizca de sal.',
      'Un adulto calienta mantequilla en la sartén.',
      'Vierte los huevos y remueve suave con una espátula.',
      'Retira del fuego cuando estén cremosos.'
    ]
  },
  {
    id: 'kid-quesadilla', name: 'Quesadilla de queso', country: 'México', flag: '🇲🇽',
    category: 'principal', emoji: '🧀', minutes: 10, servings: 2, difficulty: 1, kids: 'adult',
    ingredients: [
      '2 tortillas de trigo',
      'Queso rallado que funda',
      'Un poco de mantequilla'
    ],
    steps: [
      'Reparte el queso sobre una tortilla y tápala con la otra.',
      'Un adulto la calienta en la sartén.',
      'Dora por los dos lados hasta que el queso se funda.',
      'Corta en triángulos con ayuda de un adulto.'
    ]
  }
]
