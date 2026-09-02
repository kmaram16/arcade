import type { Theme } from './types';

export const THEME: Theme = {
  "brand": "HBO MAX",
  "byline": "por kamyar xd",
  "storageKey": "kmm-hbo",
  "accent": "#a855f7",
  "accent2": "#4c1d95",
  "bg": "#0a0118",
  "surface": "#1a0b3a",
  "catalog": [
    {
      "id": "hb-1",
      "title": "The Batman",
      "year": 2022,
      "genre": "Acción",
      "rating": "16+",
      "duration": "2h 56m",
      "category": "DC",
      "emoji": "🦇",
      "colors": [
        "#334155",
        "#020617"
      ],
      "synopsis": "En su segundo año como vigilante, Bruce Wayne persigue a un asesino que deja acertijos por toda Gotham y destapa la corrupción de la ciudad.",
      "featured": true,
      "cast": [
        {
          "id": "c93",
          "name": "Robert Pattinson",
          "role": "Protagonista",
          "emoji": "🦇",
          "color": "#94a3b8"
        },
        {
          "id": "c94",
          "name": "Zoë Kravitz",
          "role": "Secundario",
          "emoji": "🐈‍⬛",
          "color": "#a855f7"
        },
        {
          "id": "c95",
          "name": "Paul Dano",
          "role": "Villano",
          "emoji": "❓",
          "color": "#16a34a"
        },
        {
          "id": "c96",
          "name": "Colin Farrell",
          "role": "Secundario",
          "emoji": "🐧",
          "color": "#b45309"
        }
      ],
      "props": [
        {
          "id": "p60",
          "name": "Batseñal",
          "emoji": "🦇"
        },
        {
          "id": "p61",
          "name": "Acertijo",
          "emoji": "❓"
        },
        {
          "id": "p62",
          "name": "Batmóvil",
          "emoji": "🏎️"
        }
      ],
      "scenes": [
        {
          "id": "s1",
          "title": "Soy la venganza",
          "colors": [
            "#1e293b",
            "#020617"
          ],
          "script": [
            {
              "charId": "",
              "text": "Gotham. Segundo año del Murciélago. La ciudad se pudre."
            },
            {
              "charId": "c93",
              "text": "No soy la sombra… soy la venganza."
            },
            {
              "charId": "",
              "text": "Pero un asesino empieza a dejar acertijos sobre sus víctimas."
            }
          ]
        },
        {
          "id": "s2",
          "title": "Tú y yo",
          "colors": [
            "#0e7490",
            "#020617"
          ],
          "script": [
            {
              "charId": "c94",
              "text": "Tú y yo nos parecemos, murciélago. Los dos llevamos máscara."
            },
            {
              "charId": "c93",
              "text": "Ayúdame a encontrarlo. Esto es más grande que nosotros."
            }
          ]
        },
        {
          "id": "s3",
          "title": "La inundación",
          "colors": [
            "#1f2937",
            "#020617"
          ],
          "script": [
            {
              "charId": "c95",
              "text": "Lo planeé todo. Gotham se ahogará en sus propias mentiras."
            },
            {
              "charId": "c96",
              "text": "La ciudad es mía ahora, ¿eh?"
            },
            {
              "charId": "c93",
              "text": "Seré algo más que venganza. Seré esperanza."
            }
          ]
        }
      ]
    },
    {
      "id": "hb-2",
      "title": "Dune",
      "year": 2021,
      "genre": "Ciencia ficción",
      "rating": "12+",
      "duration": "2h 35m",
      "category": "Cine Max",
      "emoji": "🏜️",
      "colors": [
        "#b45309",
        "#451a03"
      ],
      "synopsis": "El joven Paul Atreides viaja al desértico planeta Arrakis, el único lugar del universo donde se extrae la especia, y se enfrenta a su destino.",
      "cast": [
        {
          "id": "c97",
          "name": "Timothée Chalamet",
          "role": "Protagonista",
          "emoji": "🏜️",
          "color": "#b45309"
        },
        {
          "id": "c98",
          "name": "Zendaya",
          "role": "Secundario",
          "emoji": "🔵",
          "color": "#1d4ed8"
        },
        {
          "id": "c99",
          "name": "Rebecca Ferguson",
          "role": "Secundario",
          "emoji": "🔮",
          "color": "#6b21a8"
        },
        {
          "id": "c100",
          "name": "Javier Bardem",
          "role": "Secundario",
          "emoji": "🪱",
          "color": "#ca8a04"
        }
      ],
      "props": [
        {
          "id": "p63",
          "name": "Crys",
          "emoji": "🗡️"
        },
        {
          "id": "p64",
          "name": "Especia",
          "emoji": "✨"
        },
        {
          "id": "p65",
          "name": "Gusano de arena",
          "emoji": "🪱"
        }
      ],
      "scenes": [
        {
          "id": "s1",
          "title": "El planeta del desierto",
          "colors": [
            "#b45309",
            "#451a03"
          ],
          "script": [
            {
              "charId": "c99",
              "text": "Arrakis te pondrá a prueba, hijo. Aquí todo quiere matarte."
            },
            {
              "charId": "c97",
              "text": "He soñado con este lugar… y con ella."
            }
          ]
        },
        {
          "id": "s2",
          "title": "El elegido",
          "colors": [
            "#1f2937",
            "#451a03"
          ],
          "script": [
            {
              "charId": "c100",
              "text": "Si caminas sin ritmo, el gusano no vendrá. Camina como el desierto."
            },
            {
              "charId": "c98",
              "text": "Los Fremen te seguirán, Paul. Pero el desierto cobra su precio."
            },
            {
              "charId": "c97",
              "text": "Mi camino lleva al desierto. Lo veo con claridad."
            }
          ]
        }
      ]
    },
    {
      "id": "hb-3",
      "title": "Joker",
      "year": 2019,
      "genre": "Drama",
      "rating": "18+",
      "duration": "2h 2m",
      "category": "DC",
      "emoji": "🤡",
      "colors": [
        "#16a34a",
        "#14532d"
      ],
      "synopsis": "Arthur Fleck, un humorista fracasado y solitario, se hunde poco a poco en la locura y se convierte en el icono criminal de Gotham.",
      "cast": [
        {
          "id": "c101",
          "name": "Joaquin Phoenix",
          "role": "Protagonista",
          "emoji": "🤡",
          "color": "#16a34a"
        },
        {
          "id": "c102",
          "name": "Robert De Niro",
          "role": "Secundario",
          "emoji": "🎙️",
          "color": "#475569"
        },
        {
          "id": "c103",
          "name": "Zazie Beetz",
          "role": "Secundario",
          "emoji": "💃",
          "color": "#b91c1c"
        }
      ],
      "props": [
        {
          "id": "p66",
          "name": "Pistola",
          "emoji": "🔫"
        },
        {
          "id": "p67",
          "name": "Maquillaje",
          "emoji": "🤡"
        }
      ],
      "scenes": [
        {
          "id": "s1",
          "title": "La risa",
          "colors": [
            "#16a34a",
            "#14532d"
          ],
          "script": [
            {
              "charId": "c101",
              "text": "Mi madre dice que sonría, que vine al mundo para repartir alegría."
            },
            {
              "charId": "",
              "text": "Pero Arthur Fleck cada día encajaba menos en el mundo."
            }
          ]
        },
        {
          "id": "s2",
          "title": "El show de Murray",
          "colors": [
            "#1f2937",
            "#14532d"
          ],
          "script": [
            {
              "charId": "c102",
              "text": "Entonces, ¿te crees gracioso? Cuéntanos un chiste."
            },
            {
              "charId": "c101",
              "text": "¿Sabes qué consigues cuando cruzas a un solitario con una sociedad que lo abandona?"
            },
            {
              "charId": "c101",
              "text": "¡Consigues lo que te mereces! 🤡"
            }
          ]
        }
      ]
    },
    {
      "id": "hb-4",
      "title": "Interstellar",
      "year": 2014,
      "genre": "Ciencia ficción",
      "rating": "12+",
      "duration": "2h 49m",
      "category": "Cine Max",
      "emoji": "🌌",
      "colors": [
        "#1e3a8a",
        "#020617"
      ],
      "synopsis": "Con la Tierra agonizando, un grupo de exploradores cruza un agujero de gusano en busca de un nuevo hogar para la humanidad.",
      "cast": [
        {
          "id": "c104",
          "name": "Matthew McConaughey",
          "role": "Protagonista",
          "emoji": "🚀",
          "color": "#b45309"
        },
        {
          "id": "c105",
          "name": "Anne Hathaway",
          "role": "Secundario",
          "emoji": "🛰️",
          "color": "#0e7490"
        },
        {
          "id": "c106",
          "name": "Jessica Chastain",
          "role": "Secundario",
          "emoji": "🔭",
          "color": "#f59e0b"
        }
      ],
      "props": [
        {
          "id": "p68",
          "name": "Nave Endurance",
          "emoji": "🚀"
        },
        {
          "id": "p69",
          "name": "Reloj",
          "emoji": "⌚"
        },
        {
          "id": "p70",
          "name": "Agujero negro",
          "emoji": "⚫"
        }
      ],
      "scenes": [
        {
          "id": "s1",
          "title": "La misión",
          "colors": [
            "#1e3a8a",
            "#020617"
          ],
          "script": [
            {
              "charId": "",
              "text": "La Tierra muere. Una nave busca un nuevo hogar tras un agujero de gusano."
            },
            {
              "charId": "c104",
              "text": "Murph, voy a volver. Te lo prometo."
            }
          ]
        },
        {
          "id": "s2",
          "title": "El amor cruza el tiempo",
          "colors": [
            "#1f2937",
            "#020617"
          ],
          "script": [
            {
              "charId": "c105",
              "text": "El amor es lo único capaz de trascender el tiempo y el espacio."
            },
            {
              "charId": "c104",
              "text": "¡Estoy aquí, Murph! ¡Siempre fui tu fantasma!"
            },
            {
              "charId": "c106",
              "text": "Papá… lo conseguiste. Nos has salvado a todos."
            }
          ]
        }
      ]
    },
    {
      "id": "hb-5",
      "title": "Matrix",
      "year": 1999,
      "genre": "Ciencia ficción",
      "rating": "16+",
      "duration": "2h 16m",
      "category": "Cine Max",
      "emoji": "💊",
      "colors": [
        "#16a34a",
        "#020617"
      ],
      "synopsis": "Un hacker descubre que la realidad es una simulación creada por las máquinas y se une a una rebelión para liberar a la humanidad.",
      "cast": [
        {
          "id": "c107",
          "name": "Keanu Reeves",
          "role": "Protagonista",
          "emoji": "🕶️",
          "color": "#16a34a"
        },
        {
          "id": "c108",
          "name": "Laurence Fishburne",
          "role": "Secundario",
          "emoji": "💊",
          "color": "#6b21a8"
        },
        {
          "id": "c109",
          "name": "Carrie-Anne Moss",
          "role": "Secundario",
          "emoji": "🏍️",
          "color": "#b91c1c"
        },
        {
          "id": "c110",
          "name": "Hugo Weaving",
          "role": "Villano",
          "emoji": "🕴️",
          "color": "#475569"
        }
      ],
      "props": [
        {
          "id": "p71",
          "name": "Píldora roja",
          "emoji": "💊"
        },
        {
          "id": "p72",
          "name": "Teléfono",
          "emoji": "☎️"
        }
      ],
      "scenes": [
        {
          "id": "s1",
          "title": "La píldora roja",
          "colors": [
            "#16a34a",
            "#020617"
          ],
          "script": [
            {
              "charId": "c108",
              "text": "Esta es tu última oportunidad. ¿Píldora azul o roja, Neo?"
            },
            {
              "charId": "c107",
              "text": "Quiero saber la verdad."
            },
            {
              "charId": "c108",
              "text": "Bienvenido… al mundo real."
            }
          ]
        },
        {
          "id": "s2",
          "title": "El Elegido",
          "colors": [
            "#1f2937",
            "#020617"
          ],
          "script": [
            {
              "charId": "c110",
              "text": "Eres un error del sistema, señor Anderson. Y voy a corregirlo."
            },
            {
              "charId": "c109",
              "text": "Levántate, Neo. Sé lo que eres."
            },
            {
              "charId": "c107",
              "text": "Ahora veo el código. Ya no os tengo miedo."
            }
          ]
        }
      ]
    },
    {
      "id": "hb-6",
      "title": "Barbie",
      "year": 2023,
      "genre": "Comedia",
      "rating": "12+",
      "duration": "1h 54m",
      "category": "Cine Max",
      "emoji": "🎀",
      "colors": [
        "#db2777",
        "#500724"
      ],
      "synopsis": "Barbie y Ken salen de Barbieland al mundo real y descubren que ser perfectos no era tan fácil ni tan divertido como parecía.",
      "cast": [
        {
          "id": "c111",
          "name": "Margot Robbie",
          "role": "Protagonista",
          "emoji": "🎀",
          "color": "#db2777"
        },
        {
          "id": "c112",
          "name": "Ryan Gosling",
          "role": "Secundario",
          "emoji": "🏖️",
          "color": "#1d4ed8"
        },
        {
          "id": "c113",
          "name": "America Ferrera",
          "role": "Secundario",
          "emoji": "🚗",
          "color": "#16a34a"
        }
      ],
      "props": [
        {
          "id": "p73",
          "name": "Tacones rosas",
          "emoji": "👠"
        },
        {
          "id": "p74",
          "name": "Descapotable",
          "emoji": "🚗"
        }
      ],
      "scenes": [
        {
          "id": "s1",
          "title": "Un día perfecto en Barbieland",
          "colors": [
            "#db2777",
            "#500724"
          ],
          "script": [
            {
              "charId": "c111",
              "text": "¡Hola, Barbieland! Otro día absolutamente perfecto."
            },
            {
              "charId": "c112",
              "text": "¿Me miras? Es que… solo soy Ken si tú me miras."
            }
          ]
        },
        {
          "id": "s2",
          "title": "El mundo real",
          "colors": [
            "#1f2937",
            "#500724"
          ],
          "script": [
            {
              "charId": "c113",
              "text": "Es imposible ser mujer. Te lo exigen todo y nunca es suficiente."
            },
            {
              "charId": "c111",
              "text": "Ya no quiero ser una idea. Quiero ser quien imagina."
            }
          ]
        }
      ]
    },
    {
      "id": "hb-7",
      "title": "El Señor de los Anillos: La Comunidad del Anillo",
      "year": 2001,
      "genre": "Fantasía",
      "rating": "12+",
      "duration": "2h 58m",
      "category": "Cine Max",
      "emoji": "💍",
      "colors": [
        "#ca8a04",
        "#1c1917"
      ],
      "synopsis": "El hobbit Frodo hereda un anillo de poder y parte con una compañía improbable en la misión de destruirlo en el Monte del Destino.",
      "cast": [
        {
          "id": "c114",
          "name": "Elijah Wood",
          "role": "Protagonista",
          "emoji": "💍",
          "color": "#ca8a04"
        },
        {
          "id": "c115",
          "name": "Ian McKellen",
          "role": "Secundario",
          "emoji": "🧙",
          "color": "#94a3b8"
        },
        {
          "id": "c116",
          "name": "Viggo Mortensen",
          "role": "Secundario",
          "emoji": "⚔️",
          "color": "#b45309"
        },
        {
          "id": "c117",
          "name": "Orlando Bloom",
          "role": "Secundario",
          "emoji": "🏹",
          "color": "#16a34a"
        }
      ],
      "props": [
        {
          "id": "p75",
          "name": "El Anillo Único",
          "emoji": "💍"
        },
        {
          "id": "p76",
          "name": "Bastón de Gandalf",
          "emoji": "🦯"
        },
        {
          "id": "p77",
          "name": "Espada",
          "emoji": "⚔️"
        }
      ],
      "scenes": [
        {
          "id": "s1",
          "title": "La Comunidad",
          "colors": [
            "#ca8a04",
            "#1c1917"
          ],
          "script": [
            {
              "charId": "c115",
              "text": "Debes llevar el Anillo a Mordor, Frodo. Y destruirlo en el fuego."
            },
            {
              "charId": "c114",
              "text": "No conozco el camino… pero iré."
            },
            {
              "charId": "c116",
              "text": "Tienes mi espada."
            }
          ]
        },
        {
          "id": "s2",
          "title": "No pasarás",
          "colors": [
            "#1f2937",
            "#1c1917"
          ],
          "script": [
            {
              "charId": "c115",
              "text": "¡No pasarás!"
            },
            {
              "charId": "c117",
              "text": "¡Un Balrog! ¡Corred hacia el puente!"
            },
            {
              "charId": "c114",
              "text": "Ojalá el Anillo nunca hubiera llegado a mí."
            }
          ]
        }
      ]
    },
    {
      "id": "hb-8",
      "title": "Wonka",
      "year": 2023,
      "genre": "Musical",
      "rating": "TODOS",
      "duration": "1h 56m",
      "category": "Cine Max",
      "emoji": "🍫",
      "colors": [
        "#6b21a8",
        "#3b0764"
      ],
      "synopsis": "El joven Willy Wonka llega a la ciudad con un sueño y un sombrero lleno de magia, dispuesto a abrir la chocolatería más asombrosa del mundo.",
      "cast": [
        {
          "id": "c118",
          "name": "Timothée Chalamet",
          "role": "Protagonista",
          "emoji": "🍫",
          "color": "#6b21a8"
        },
        {
          "id": "c119",
          "name": "Hugh Grant",
          "role": "Secundario",
          "emoji": "🟠",
          "color": "#ea580c"
        },
        {
          "id": "c120",
          "name": "Olivia Colman",
          "role": "Villano",
          "emoji": "🔑",
          "color": "#b91c1c"
        }
      ],
      "props": [
        {
          "id": "p78",
          "name": "Sombrero de copa",
          "emoji": "🎩"
        },
        {
          "id": "p79",
          "name": "Chocolate",
          "emoji": "🍫"
        }
      ],
      "scenes": [
        {
          "id": "s1",
          "title": "Un sueño de chocolate",
          "colors": [
            "#6b21a8",
            "#3b0764"
          ],
          "script": [
            {
              "charId": "c118",
              "text": "He venido a esta ciudad con un sueño: la mejor chocolatería del mundo."
            },
            {
              "charId": "c120",
              "text": "Firma aquí, querido. Una cama, una noche… y mil cláusulas pequeñas."
            }
          ]
        },
        {
          "id": "s2",
          "title": "El pequeño ladrón naranja",
          "colors": [
            "#1f2937",
            "#3b0764"
          ],
          "script": [
            {
              "charId": "c119",
              "text": "¡Me robas el chocolate! Soy un Oompa Loompa y cobro mis deudas."
            },
            {
              "charId": "c118",
              "text": "Entonces ven conmigo. Juntos haremos magia. 🍫"
            }
          ]
        }
      ]
    }
  ]
};
