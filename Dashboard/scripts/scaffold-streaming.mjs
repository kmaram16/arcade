// Scaffolder for the streaming apps (Netflix / Disney+ / Prime / HBO Max /
// Movistar+, all "por kamyar xd"). Each app is a standalone Vite project — the
// SAME pattern as every game in the arcade — sharing one source template
// (scripts/_streaming/) and differing only by its theme.ts (brand + colors +
// catalog), vite port, package name and page title.
//
//   node scripts/scaffold-streaming.mjs
//
// Re-runnable: it overwrites the generated source/theme but never touches
// node_modules, so you can tweak the template here and regenerate all five.

import { existsSync, mkdirSync, copyFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const tpl = join(here, '_streaming');
const reposRoot = resolve(here, '..', '..'); // sibling app folders live in d:\Github

// Shorthands to keep the catalogs readable.
let _cid = 0;
let _pid = 0;
const ch = (name, role, emoji, color) => ({ id: `c${++_cid}`, name, role, emoji, color });
const pr = (name, emoji) => ({ id: `p${++_pid}`, name, emoji });

// Build a movie's extras: cast + props + scenes. Real movies, real actors, real
// plot — every title gets its actual cast and a script that follows what really
// happens in the film, so watching it plays out the real story (and lasts as
// long as the dialogue, mapped to the film's real runtime). Each script line
// references a cast member by INDEX (or -1 for the narrator), so we never have
// to track the generated character ids by hand.
//   castDefs:  [ [name, role, emoji, color], ... ]
//   propDefs:  [ [name, emoji], ... ]
//   sceneDefs: [ [title, [c1, c2], [ [castIndex|-1, text], ... ]], ... ]
function film(castDefs, propDefs, sceneDefs) {
  const cast = castDefs.map((d) => ch(d[0], d[1], d[2], d[3]));
  const props = propDefs.map((d) => pr(d[0], d[1]));
  const scenes = sceneDefs.map((s, i) => ({
    id: `s${i + 1}`,
    title: s[0],
    colors: s[1],
    script: s[2].map(([who, text]) => ({ charId: who < 0 ? '' : cast[who].id, text }))
  }));
  return { cast, props, scenes };
}

const mk = (id, title, year, genre, rating, duration, category, emoji, colors, synopsis, hero, extra) => ({
  id,
  title,
  year,
  genre,
  rating,
  duration,
  category,
  emoji,
  colors,
  synopsis,
  ...(hero ? { featured: true } : {}),
  ...(extra || {})
});

const APPS = [
  {
    id: 'netflix',
    folder: 'Netflix',
    port: 4189,
    theme: {
      brand: 'NETFLIX',
      byline: 'por kamyar xd',
      storageKey: 'kmm-netflix',
      accent: '#e50914',
      accent2: '#f6121d',
      bg: '#0b0b0f',
      surface: '#1a0608',
      catalog: [
        mk('nf-1', 'El Irlandés', 2019, 'Crimen', '18+', '3h 29m', 'Originales Netflix', '🕴️', ['#334155', '#0f172a'], 'Frank Sheeran, un camionero metido a sicario de la mafia, recuerda su amistad con el sindicalista Jimmy Hoffa y los trabajos que lo cambiaron todo.', true, film(
          [
            ['Robert De Niro', 'Protagonista', '🕴️', '#94a3b8'],
            ['Al Pacino', 'Secundario', '🎙️', '#f59e0b'],
            ['Joe Pesci', 'Villano', '🤝', '#b91c1c'],
            ['Stephen Graham', 'Secundario', '😠', '#dc2626'],
            ['Anna Paquin', 'Cameo', '🚬', '#6b7280']
          ],
          [['Pistola', '🔫'], ['Reloj de oro', '⌚'], ['Coche clásico', '🚗'], ['Camión', '🚛'], ['Anillo', '💍']],
          [
            ['Una residencia, mirando atrás', ['#1f2937', '#0f172a'], [
              [-1, 'Un asilo. Un anciano en una silla de ruedas empieza a contar su vida.'],
              [0, 'Yo antes pintaba casas… y también las construía y reparaba yo mismo.'],
              [-1, 'Pintar casas era su manera de hablar de matar para la mafia.'],
              [0, 'Pero todo empezó por una avería en la carretera, con un camión de carne.']
            ]],
            ['El camionero y Russell', ['#334155', '#0f172a'], [
              [-1, 'Años 50. A Frank Sheeran se le para el camión en una gasolinera.'],
              [2, '¿Problemas con el motor? Déjame echar un ojo, soy bueno con las máquinas.'],
              [0, 'Se lo agradezco. No es fácil encontrar gente que ayude sin pedir nada.'],
              [2, 'Soy Russell Bufalino. Recuerda mi nombre, quizá volvamos a vernos.']
            ]],
            ['Pinto casas', ['#3f3f46', '#0f172a'], [
              [2, 'Frank, necesito a alguien de confianza. Que haga trabajos y no pregunte.'],
              [0, 'Dígame dónde y cuándo, señor Bufalino. Yo en la guerra ya aprendí a obedecer.'],
              [2, 'Esto es como pintar casas. Tú pintas… y nadie tiene que enterarse.'],
              [0, 'Entendido. Pinto casas.']
            ]],
            ['Los primeros trabajos', ['#27272a', '#0f172a'], [
              [-1, 'Frank se gana un nombre. Eficaz, callado, leal.'],
              [2, 'Tiras la pistola al río después. Siempre. Y nunca hablas de ello.'],
              [0, 'Nunca llevo la misma dos veces. No dejo nada que me señale.'],
              [-1, 'Su lealtad llega a oídos del hombre más poderoso de los sindicatos.']
            ]],
            ['Una llamada de Jimmy Hoffa', ['#1e3a8a', '#0c1838'], [
              [1, '¿Hablo con Frank Sheeran? Soy Jimmy Hoffa. He oído que pintas casas.'],
              [0, 'Sí, señor Hoffa. Y también sé hacer carpintería yo mismo.'],
              [1, 'Me gustas. En este país, o estás con Hoffa… o estás contra Hoffa.'],
              [0, 'Para mí es un honor, señor Hoffa. Cuente conmigo.']
            ]],
            ['El amigo y el guardaespaldas', ['#1e40af', '#0c1838'], [
              [-1, 'Frank se vuelve la sombra de Hoffa: su guardaespaldas y su amigo.'],
              [1, 'Tú y yo somos iguales, Frank. A nosotros nadie nos regala nada.'],
              [0, 'Por usted me dejo la piel, Jimmy. Lo sabe.'],
              [4, 'Papá… ese hombre, el señor Russell, a mí me da miedo. Hoffa no.']
            ]],
            ['El rey del sindicato', ['#1d4ed8', '#0c1838'], [
              [1, '¡Dos millones de afiliados! El fondo de pensiones lo manejo yo.'],
              [3, 'Te crees el dueño de todo, Hoffa. Pero a mí no me das órdenes.'],
              [1, '¿Quién te crees que eres, Tony Pro? ¡A mí se me llega puntual!'],
              [3, 'Nadie le falta el respeto a Tony Provenzano. Nadie.']
            ]],
            ['La cárcel y la caída', ['#3f3f46', '#020617'], [
              [-1, 'Hoffa va a prisión. Cuando sale, su silla ya la ocupa otro.'],
              [1, '¡He vuelto, y quiero MI sindicato de vuelta! Esto no se queda así.'],
              [2, 'Jimmy, déjalo correr. Acepta el retiro y vive tranquilo.'],
              [1, 'Ni hablar. Antes muerto que callado, Russell.']
            ]],
            ['Tony Pro y la guerra abierta', ['#450a0a', '#020617'], [
              [3, 'Retírate, Hoffa. Es un consejo de amigo… el último.'],
              [1, '¡A mí no me amenaza un don nadie como tú! ¡Llegaste tarde a la reunión!'],
              [3, 'Acabas de cometer un error muy grande, viejo.'],
              [0, 'Jimmy, baja la voz. Hay gente a la que no conviene provocar.']
            ]],
            ['Hay que pararlo', ['#1c1917', '#020617'], [
              [2, 'Frank, lo hemos intentado todo. Jimmy no escucha a nadie.'],
              [0, 'Es mi amigo, Russell. Lo que me pides… no es cualquier cosa.'],
              [2, 'Ya está decidido, arriba. Y mejor que seas tú… por respeto a él.'],
              [0, 'Es mi amigo… pero un trabajo es un trabajo.']
            ]],
            ['El viaje a Detroit', ['#292524', '#020617'], [
              [-1, 'Un coche cruza el país hacia Detroit. Russell y Frank, en silencio.'],
              [2, 'Después de esto, todo vuelve a la calma. Para todos.'],
              [0, 'Pasamos a recoger a Jimmy. Confía en mí, va a subir al coche.'],
              [1, 'Frank, menos mal que eres tú. A ti sí te abro la puerta.']
            ]],
            ['Es lo que hay', ['#1f2937', '#000000'], [
              [-1, 'Una casa vacía en Detroit. Frank entra detrás de su amigo.'],
              [1, 'Frank, tú nunca me fallarías, ¿verdad? Solo estamos tú y yo.'],
              [0, 'Lo siento, Jimmy.'],
              [-1, 'Y así, sin más, Jimmy Hoffa desapareció para siempre. Nunca se halló el cuerpo.']
            ]],
            ['Solo, al final', ['#18181b', '#000000'], [
              [-1, 'Pasan los años. Russell, Tony Pro, todos mueren entre rejas o de viejos.'],
              [4, 'No tengo nada que hablar contigo, papá. Nunca lo tendré.'],
              [0, 'Padre, ¿usted cree que se puede sentir algo… aunque ya no sientas nada?'],
              [0, 'No cierre la puerta del todo, por favor. Déjela un poquito abierta.']
            ]]
          ]
        )),
        mk('nf-2', 'No Mires Arriba', 2021, 'Comedia', '16+', '2h 18m', 'Originales Netflix', '☄️', ['#1d4ed8', '#172554'], 'Dos astrónomos descubren un cometa que destruirá la Tierra y recorren los platós de televisión intentando que alguien, quien sea, les haga caso.', false, film(
          [
            ['Leonardo DiCaprio', 'Protagonista', '🔭', '#0e7490'],
            ['Jennifer Lawrence', 'Secundario', '🚨', '#dc2626'],
            ['Meryl Streep', 'Villano', '🇺🇸', '#b91c1c'],
            ['Timothée Chalamet', 'Secundario', '🛹', '#16a34a']
          ],
          [['Telescopio', '🔭'], ['Cometa', '☄️']],
          [
            ['El descubrimiento', ['#1d4ed8', '#172554'], [
              [1, 'Profesor… ese cometa va directo hacia la Tierra.'],
              [0, 'Impactará en seis meses. Es un evento de extinción.'],
              [-1, 'Pero nadie parecía dispuesto a creerlos.']
            ]],
            ['¡Miren arriba!', ['#7f1d1d', '#172554'], [
              [2, 'La gente no quiere malas noticias. Tranquilos y a confiar.'],
              [1, '¡Vamos a morir todos y a nadie le importa!'],
              [0, 'Al menos lo intentamos. Mirad arriba… ya se ve.']
            ]]
          ]
        )),
        mk('nf-3', 'The Gray Man', 2022, 'Acción', '16+', '2h 2m', 'Acción a tope', '🕶️', ['#475569', '#020617'], 'Un agente fantasma de la CIA descubre secretos sucios de la agencia y se convierte en el objetivo de un mercenario sin escrúpulos.', false, film(
          [
            ['Ryan Gosling', 'Protagonista', '🕶️', '#0e7490'],
            ['Chris Evans', 'Villano', '🔪', '#dc2626'],
            ['Ana de Armas', 'Secundario', '🔫', '#1d4ed8'],
            ['Billy Bob Thornton', 'Secundario', '🎩', '#b45309']
          ],
          [['Pistola', '🔫'], ['Móvil cifrado', '📱']],
          [
            ['Sierra Seis', ['#475569', '#020617'], [
              [3, 'Tienes secretos que la Agencia quiere enterrar, Seis.'],
              [0, 'Entonces tendrán que atraparme primero.']
            ]],
            ['El mercenario', ['#1f2937', '#020617'], [
              [1, 'Te voy a cazar, y va a ser divertido.'],
              [2, 'No vas solo en esto, Seis.'],
              [0, 'Salgamos de aquí antes de que vuele todo por los aires.']
            ]]
          ]
        )),
        mk('nf-4', 'Alerta Roja', 2021, 'Acción', '12+', '1h 58m', 'Acción a tope', '💎', ['#ca8a04', '#3f2d0a'], 'Un perfilador del FBI une fuerzas a regañadientes con un ladrón de guante blanco para atrapar a la mayor estafadora de obras de arte del mundo.', false, film(
          [
            ['Dwayne Johnson', 'Protagonista', '💪', '#475569'],
            ['Ryan Reynolds', 'Secundario', '😏', '#dc2626'],
            ['Gal Gadot', 'Villano', '💎', '#f59e0b']
          ],
          [['Huevo de Cleopatra', '🥚'], ['Esposas', '🔗']],
          [
            ['El atraco al museo', ['#ca8a04', '#3f2d0a'], [
              [0, 'Soy del FBI. Busco al ladrón de arte más buscado del mundo.'],
              [1, 'Qué casualidad, yo también… más o menos.']
            ]],
            ['El Obispo', ['#1f2937', '#3f2d0a'], [
              [2, 'Siempre voy un paso por delante de vosotros, chicos.'],
              [0, 'Esta vez no. Trabajamos juntos, Booth.'],
              [1, '¿Confías en mí? Mala idea.']
            ]]
          ]
        )),
        mk('nf-5', 'Puñales por la Espalda: Glass Onion', 2022, 'Misterio', '12+', '2h 19m', 'Originales Netflix', '🔪', ['#0e7490', '#083344'], 'El detective Benoit Blanc viaja a la isla griega de un millonario excéntrico, donde un juego de asesinato se convierte en un crimen muy real.', false, film(
          [
            ['Daniel Craig', 'Protagonista', '🕵️', '#0e7490'],
            ['Edward Norton', 'Villano', '💰', '#ca8a04'],
            ['Janelle Monáe', 'Secundario', '🧩', '#db2777'],
            ['Kate Hudson', 'Secundario', '🥂', '#f59e0b']
          ],
          [['Cuadro robado', '🖼️'], ['Pistola', '🔫']],
          [
            ['La isla del millonario', ['#0e7490', '#083344'], [
              [1, 'Bienvenidos a mi juego. Esta noche, alguien me asesina… de mentira.'],
              [0, 'Qué interesante… pero el crimen de verdad ya ha empezado.']
            ]],
            ['La cebolla de cristal', ['#1f2937', '#083344'], [
              [2, 'Lo hiciste por dinero. Y mataste a mi hermana por ello.'],
              [1, 'Nadie podrá probar nada. Soy intocable.'],
              [0, 'La solución estaba a la vista. Tan simple que cegaba.']
            ]]
          ]
        )),
        mk('nf-6', 'A Ciegas', 2018, 'Terror', '16+', '2h 4m', 'Terror nocturno', '🙈', ['#16a34a', '#064e3b'], 'Una madre y sus dos hijos cruzan un río con los ojos vendados: mirar a las criaturas que han arrasado el mundo significa la muerte.', false, film(
          [
            ['Sandra Bullock', 'Protagonista', '🙈', '#0e7490'],
            ['Trevante Rhodes', 'Secundario', '🚣', '#b45309'],
            ['John Malkovich', 'Villano', '😠', '#b91c1c']
          ],
          [['Venda', '🩹'], ['Barca', '🛶']],
          [
            ['No abras los ojos', ['#16a34a', '#064e3b'], [
              [-1, 'Algo invisible empuja a quien lo mira a quitarse la vida.'],
              [2, '¡No miréis fuera! Cerrad todo. ¡Vendas en los ojos!'],
              [0, 'Si queremos vivir, cruzaremos el río a ciegas.']
            ]],
            ['El río', ['#1f2937', '#064e3b'], [
              [1, 'Lo conseguiremos, Malorie. Juntos.'],
              [0, 'Niños, pase lo que pase, no os quitéis la venda.']
            ]]
          ]
        )),
        mk('nf-7', 'Historia de un Matrimonio', 2019, 'Drama', '16+', '2h 17m', 'Dramas', '💔', ['#db2777', '#500724'], 'Un director de teatro y una actriz atraviesan un divorcio que saca lo mejor y lo peor de ambos mientras intentan proteger a su hijo.', false, film(
          [
            ['Adam Driver', 'Protagonista', '🎭', '#475569'],
            ['Scarlett Johansson', 'Secundario', '💔', '#1d4ed8'],
            ['Laura Dern', 'Secundario', '⚖️', '#16a34a']
          ],
          [['Carta', '💌'], ['Anillo', '💍']],
          [
            ['La separación', ['#db2777', '#500724'], [
              [1, 'Te quise, pero ya no me reconozco a tu lado.'],
              [0, 'No quiero abogados. Hagámoslo bien, por el niño.']
            ]],
            ['La discusión', ['#7f1d1d', '#500724'], [
              [2, 'En un divorcio no hay buenos. Solo el que gana.'],
              [0, '¡No sé cómo hemos llegado a odiarnos así!'],
              [1, 'Yo tampoco… y aún así te querré de otra forma.']
            ]]
          ]
        )),
        mk('nf-8', 'Roma', 2018, 'Drama', '16+', '2h 15m', 'Dramas', '🌊', ['#475569', '#1e293b'], 'En el barrio de Roma de Ciudad de México, una empleada doméstica sostiene a una familia que se desmorona durante los convulsos años 70.', false, film(
          [
            ['Yalitza Aparicio', 'Protagonista', '🧺', '#0e7490'],
            ['Marina de Tavira', 'Secundario', '🏠', '#b45309']
          ],
          [['Cubo de agua', '🪣'], ['Avión de juguete', '✈️']],
          [
            ['La casa', ['#475569', '#1e293b'], [
              [-1, 'Ciudad de México, 1971. Cleo cuida de una familia que se rompe.'],
              [1, 'No estamos solas en esto, Cleo. Somos mujeres saliendo adelante.']
            ]],
            ['El mar', ['#0e7490', '#1e293b'], [
              [0, '¡No sé nadar, pero el mar no se los va a llevar!'],
              [-1, 'Y Cleo, que lo había perdido todo, los salvó a todos.']
            ]]
          ]
        )),
        // Policán: los 14 libros de Dav Pilkey en una sola peli de 1h 30m.
        // Policán no habla (canon: ladra), así que sus momentos van por narrador.
        mk('nf-9', 'Policán', 2025, 'Animación', 'TODOS', '1h 30m', 'Para toda la familia', '🐶', ['#f59e0b', '#7c2d12'], 'Una bomba deja al agente Caballero sin cabeza y a su perro Greg sin cuerpo. A una enfermera se le ocurre una locura y nace Policán: el mejor policía de Ciudad Okey y el peor perro del mundo. De la Cárcel de Gatos a los Monines del Espacio, los 14 libros en una sola aventura sobre padres, hijos y segundas oportunidades.', false, film(
          [
            ['Policán', 'Protagonista', '🐶', '#f59e0b'],
            ['Pedrito', 'Villano', '🐱', '#f97316'],
            ['Gatito', 'Secundario', '🐈', '#fb923c'],
            ['El Jefe', 'Secundario', '👮', '#1d4ed8'],
            ['El Abuelo', 'Villano', '😾', '#57534e'],
            ['Sara Ladrido', 'Secundario', '🎤', '#ec4899'],
            ['Flippy', 'Villano', '🐟', '#22c55e'],
            ['Molly', 'Secundario', '🐸', '#a855f7'],
            ['Big Jim', 'Secundario', '🧁', '#eab308']
          ],
          [['Espray Vivificador', '🧴'], ['Supa Puntitos', '🥫'], ['80-HD', '🤖'], ['Pelota', '🎾'], ['Anillo del Destino', '💍'], ['Ukelele', '🪕']],
          [
            ['El agente Caballero y Greg', ['#1d4ed8', '#0f172a'], [
              [-1, 'Ciudad Okey. El agente Caballero y su perro policía Greg son el mejor equipo de la comisaría.'],
              [3, '¡Caballero! Pedrito ha puesto una bomba en el parque. ¡Tenéis diez minutos!'],
              [1, 'Jejeje… hoy me quito de encima al poli Y al chucho de una sola vez.'],
              [-1, 'Caballero no sabe qué cable cortar. Le pregunta a Greg. Greg gruñe.'],
              [-1, '«¡El verde!», entiende Caballero. Y corta. ¡BUM! «¡Ay, no! ¡Olvidé que los perros son ciegos de colores!»']
            ]],
            ['La idea de la enfermera', ['#0891b2', '#083344'], [
              [-1, 'Hospital. Las noticias son malas: la cabeza de Caballero se muere… y el cuerpo de Greg también.'],
              [3, 'No puede ser. Son mis dos mejores agentes y los voy a perder a los dos a la vez.'],
              [-1, 'Entonces a la enfermera se le ocurre la idea más loca de la historia: coser la cabeza de Greg al cuerpo de Caballero.'],
              [-1, 'Los médicos operan toda la noche. Y cuando caen las vendas…'],
              [3, '¡Es… es PERFECTO! ¡Bienvenido al cuerpo, POLICÁN!'],
              [0, '¡GUAU!']
            ]],
            ['El mejor poli y el peor perro', ['#f59e0b', '#7c2d12'], [
              [-1, 'Policán es un policía excelente. Y un perro horrible: persigue ardillas y bebe del váter.'],
              [1, '¡He construido una aspiradora gigante! ¡Se tragará la ciudad entera!'],
              [-1, 'Policán la lleva hasta la playa. La aspiradora sorbe el mar… y revienta.'],
              [1, 'Pues robaré las palabras de TODOS los libros. ¡El mundo se volverá supatonto!'],
              [-1, 'Policán olfatea el escondite y reparte cada palabra robada a los niños de la ciudad.'],
              [-1, 'Y para fugarse de la Cárcel de Gatos, Pedrito usa un balancín y el peso de un preso enorme llamado Big Jim.']
            ]],
            ['El perrito caliente que quería un amigo', ['#dc2626', '#450a0a'], [
              [1, 'Mi Espray Vivificador. Daré vida a una salchicha y será mi soldado.'],
              [-1, 'La salchicha cobra vida, mira a Pedrito y le hace una sola pregunta.'],
              [-1, '«¿Quieres ser mi amigo?»'],
              [1, '¿Amigo? ¡YO NO NECESITO AMIGOS! ¡Largo de aquí!'],
              [-1, 'Dolida, la salchicha levanta un ejército. Los perros de la ciudad se lo comen enterito.'],
              [-1, 'Pero esa pregunta se queda flotando. Y va a tardar catorce libros en tener respuesta.']
            ]],
            ['Supa Puntitos en la pecera', ['#22c55e', '#064e3b'], [
              [-1, 'Cumpleaños del Jefe. Los polis le regalan un bote de Supa Puntitos, porque es un despistado.'],
              [-1, 'Policán le trae un pez de la tienda: Flippy, un abusón que robaba los cofrecitos del acuario.'],
              [-1, 'El Jefe cierra de un portazo. El bote se cae. Los Supa Puntitos se hunden en la pecera.'],
              [6, 'Mi cerebro… ¡ha crecido once tallas! ¡Ahora muevo el mundo con la mente!'],
              [-1, 'Empiezan a desaparecer cofrecitos por toda la ciudad. Y todos culpan a Pedrito.']
            ]],
            ['Sara, Zuzu y la pelota de energía', ['#ec4899', '#500724'], [
              [5, 'Soy Sara Ladrido, reportera. Aquí hay gato encerrado… y no es el gato que pensáis.'],
              [-1, 'Zuzu, su caniche, olfatea la verdad en dos segundos: el ladrón es Flippy.'],
              [6, '¡No me atraparéis! ¡Abandono este cuerpo y me meto dentro del Jefe!'],
              [-1, 'Flippy sale de su pez convertido en energía pura. Pero la energía tiene forma de PELOTA.'],
              [-1, 'Y Policán no puede resistirse a una pelota. Jamás.'],
              [0, '¡GUAU! ¡ÑAM!']
            ]],
            ['El clon', ['#f97316', '#7c2d12'], [
              [1, 'Mi máquina de clonar me dará un ayudante malvado idéntico a mí. ¡Prepárate, mundo!'],
              [-1, 'De la máquina no sale un adulto. Sale un gatito.'],
              [2, 'Hola, papá. ¿Jugamos al pato-pato-ganso?'],
              [1, '¡NO! ¡Se supone que eres MALVADO! …Tardarás dieciocho años en servirme de algo.'],
              [-1, 'Pedrito lo deja tirado y se va. Policán lo encuentra solo… y se lo lleva a casa.']
            ]],
            ['Los edificios despiertan', ['#16a34a', '#052e16'], [
              [-1, 'El cuerpo de Flippy cae en la Fábrica del Espray Vivificador y resucita, ahora biónico.'],
              [6, '¡Edificios de Ciudad Okey… LEVANTAOS!'],
              [-1, 'Gatito pilota a 80-HD contra el ejército de edificios. El robot acaba hecho pedazos.'],
              [2, 'Flippy, no te pregunto QUÉ haces. Te pregunto POR QUÉ lo haces.'],
              [-1, 'Flippy se queda quieto. Nadie le había preguntado eso nunca. Y su maldad se apaga sola.'],
              [6, 'Iré a la cárcel. Pero por primera vez en mi vida… tengo un amigo.']
            ]],
            ['La cuidadora de gatos', ['#a855f7', '#3b0764'], [
              [-1, 'Una viejecita se ofrece a cuidar a Gatito mientras Policán trabaja.'],
              [1, 'Repite conmigo, chaval: «el caos sin pensar es lo mejor».'],
              [2, 'Papá, sé que eres tú. Se te ve el bigote por debajo del pañuelo.'],
              [-1, 'Pedrito tira el disfraz y le hace un traje de villano a juego. Y le llama «kid», chaval.'],
              [2, '¿Kid? ¡Pues entonces soy GATITO KID!']
            ]],
            ['La Bestia del Edén', ['#ca8a04', '#422006'], [
              [-1, 'En la ciudad ruedan una película de Policán. Pedrito la sabotea y secuestra a la actriz.'],
              [1, 'Con el Espray Crecedor mi robot será gigante. ¡Presentando… la BESTIA DEL EDÉN!'],
              [-1, 'La bestia arrasa los estudios. 80-HD la parte en dos por la mitad.'],
              [-1, 'Al caer, las letras del cartel se recolocan solas. De «el caos sin pensar es lo mejor»… a «TÚ ELIGES».'],
              [2, 'Papá, mira. Dice que puedo elegir. Que no tengo que ser lo que tú fuiste.']
            ]],
            ['Las Pulgas', ['#78716c', '#1c1917'], [
              [-1, 'Gatito y 80-HD montan un club en el salón: los Supacolegas.'],
              [-1, 'Y del pasado de Pedrito vuelven tres viejos conocidos de los Bichoscouts: Piggy, Crunky y Bub.'],
              [-1, 'Ahora son las PULGAS: una escuadra de animalitos peludos y malvados, con Piggy al mando.'],
              [1, 'Conmigo haced lo que queráis. Pero a mi hijo NO lo tocáis.'],
              [-1, 'Gatito pinta el Robo-Brontosaurio de ardilla. Policán sale disparado detrás. Fin del robot.']
            ]],
            ['Por qué Pedrito es así', ['#57534e', '#0c0a09'], [
              [-1, 'Flashback. Pedrito era un gatito. Su madre estaba enferma. Y su padre se marchó.'],
              [4, 'Me llevo la casa, los muebles y hasta las cortinas. Tú apáñate, chaval.'],
              [-1, 'Aquel día Pedrito decidió que si nadie lo quería a él, él no querría a nadie.'],
              [1, 'Por eso soy así. Nadie me enseñó otra cosa.'],
              [1, 'Volveré a la Cárcel de Gatos. Y me escaparé otra vez… para ir a por un helado con mi hijo.']
            ]],
            ['Catorce años de perros', ['#475569', '#020617'], [
              [-1, 'Las Pulgas roban un banco disfrazadas de Policán. El dinero aparece en la cama de Policán.'],
              [3, 'Yo no me lo creo. Pero la ley es la ley. Lo siento muchísimo.'],
              [-1, '«¡Catorce años de perros de trabajos forzados!» En la perrera, los perros duros se ríen de él.'],
              [-1, 'Ni perro ni persona. Policán empieza a creer que no encaja en ninguna parte.'],
              [5, 'Escúchame: yo tampoco encajo. Nadie encaja del todo. Por eso eres normal.']
            ]],
            ['El monstruo de plastilina', ['#0d9488', '#042f2e'], [
              [-1, 'En el estreno de la película, las Pulgas rocían la pantalla con Espray Vivificador.'],
              [-1, 'El fuego de la peli sale del cine convertido en un monstruo gigante de plastilina.'],
              [-1, 'Demuestran que Policán es inocente y sale de la perrera justo a tiempo.'],
              [0, '¡GUAU!'],
              [-1, 'Entre todos tumban al monstruo. Las Pulgas escapan, tan malas como siempre.']
            ]],
            ['La pelota', ['#eab308', '#422006'], [
              [-1, 'Los Supacolegas deciden curarle las manías. Cada vez que persiga una pelota… ¡baño!'],
              [-1, 'Funciona demasiado bien. Ahora Policán tiene PÁNICO a las pelotas.'],
              [3, 'No puedo sacarte a la calle así, muchacho. Quédate en la comisaría.'],
              [-1, 'El Doctor Escoria, aquel que fabricó al Robo-Jefe hace años, huele la debilidad.'],
              [-1, 'Roba con Pelotas Ladronas. Y cuando le fallan, saca el Colosal-Bot 2000.']
            ]],
            ['Llega el Abuelo', ['#44403c', '#0c0a09'], [
              [2, '80-HD, tengo una misión para ti. Encuéntrame a mi abuelo.'],
              [-1, 'El robot lo trae a casa. Pedrito se queda helado: no lo ve desde que era un gatito.'],
              [4, '¡Anda! Pero si eres… un momento. ¿Tú no eras más bajito?'],
              [1, 'Ese es tu nieto, papá. Yo soy tu hijo.'],
              [-1, 'El Abuelo se lleva todo lo del laboratorio. Todo, menos los cómics de Gatito.'],
              [1, 'El mundo tiene un montón de problemas… pero nunca podría ser un sitio horrible, porque tú estás en él.']
            ]],
            ['Fetch-22', ['#f472b6', '#500724'], [
              [-1, 'Pedrito sale de la cárcel decidido a empezar de cero. El mundo no se lo va a poner fácil.'],
              [4, 'Si me disfrazo de mi propio hijo, salgo por la puerta… y encima le echan a él la culpa.'],
              [-1, 'Y funciona. Pedrito vuelve a ser sospechoso de todo sin haber hecho nada.'],
              [-1, 'Mientras, el Hada Justa se harta: «si no puede ser justo para todos, que no lo sea para nadie».'],
              [-1, 'En la charca encuentra 22 renacuajos que se han pasado con los Supa Puntitos. Ahora mueven cosas con la mente.']
            ]],
            ['Molly', ['#a855f7', '#3b0764'], [
              [-1, 'Los Supacolegas se preparan para pelear. Gatito hace otra cosa completamente distinta.'],
              [2, 'Hola. Me llamo Gatito. ¿Quieres ser mi amiga?'],
              [7, '¿Amiga? Nadie… nadie me había preguntado eso jamás.'],
              [-1, 'La misma pregunta que aquella salchicha le hizo a Pedrito. Esta vez alguien contesta que sí.'],
              [-1, 'Molly cambia de bando, y con ella los 22 renacuajos. Zuzu trae el antídoto de verdad.'],
              [2, 'El amor y la amabilidad son los poderes más grandes que hay.']
            ]],
            ['Barro y castigo', ['#92400e', '#1c1917'], [
              [-1, 'Ceremonia en el Ayuntamiento en honor al Jefe. Policán llega tarde y cubierto de barro.'],
              [-1, 'Le roba el sombrero al Alcalde, tira una columna y el edificio entero se viene abajo.'],
              [-1, 'El Alcalde lo despide en persona y le quita las placas.'],
              [3, 'No estoy llorando. Son… alergias.'],
              [-1, 'De repente TODA la comisaría tiene alergia. Casi inundan el edificio de lágrimas.']
            ]],
            ['El Cerebro Motor', ['#7c3aed', '#2e1065'], [
              [2, '80-HD y yo te hemos hecho un disfraz. A partir de ahora eres… ¡GATOMAN!'],
              [4, 'He inventado el Cerebro Motor. Sube el volumen de lo que ya llevas dentro.'],
              [-1, 'Al Abuelo lo convierte en Crud, puro odio. A Big Jim lo convierte en Snug, puro cariño.'],
              [8, '¡VEN AQUÍ QUE TE DÉ UN ABRAZO ENORME!'],
              [-1, 'Crud escapa con Munchy, una bolsa del almuerzo viva. La máquina no te cambia: solo te sube el volumen.']
            ]],
            ['Los niños dibujan', ['#0ea5e9', '#0c4a6e'], [
              [-1, 'Munchy arrasa la ciudad. A golpes no hay quien lo pare. Así que los niños prueban otra cosa.'],
              [-1, 'Le dibujan encima sus cosas favoritas. Munchy se mira… y deja de ser un monstruo.'],
              [1, 'Papá, podría odiarte el resto de mi vida. He decidido que no.'],
              [4, '¿Qué… qué acabas de decir?'],
              [-1, 'El Abuelo se quita el Cerebro Motor. Y Policán salva al Alcalde y a su osito de un incendio.'],
              [3, 'Tus placas, muchacho. Estabas tardando.']
            ]],
            ['El Hogar Feliz', ['#f59e0b', '#451a03'], [
              [-1, 'Pedrito lleva a Sara y a su cámara por los sitios de su vida. El último no lo esperaba nadie.'],
              [1, 'Aquí viví con mi madre cuando él se fue. Se llamaba Hogar Feliz. Era un refugio.'],
              [1, 'No teníamos nada. Y ella seguía cantando. Todos los días.'],
              [5, '¿Y cómo lo hacía?'],
              [1, 'No lo sé. Llevo toda la vida intentando averiguarlo.']
            ]],
            ['Mecha Molly y el ukelele', ['#7c3aed', '#1e1b4b'], [
              [-1, 'El Abuelo vuelve a por Espray Vivificador. En la pelea, el espray cae sobre dos vasitos de bebé.'],
              [-1, 'Dos vasitos colosales y siniestros se tragan al Abuelo y a Big Jim y atrapan a toda la familia.'],
              [7, '¡Modo MECHA MOLLY! ¡Apartaos todos!'],
              [-1, 'Molly los revienta. Pero la casa de Pedrito se viene abajo entera.'],
              [2, 'Papá, mira. Entre los escombros. El ukelele de la abuela. Está entero.'],
              [1, '…Lo demás daba igual, ¿verdad? Lo importante siempre fue esto.']
            ]],
            ['Veinte mil pulgas', ['#0891b2', '#083344'], [
              [-1, 'Piggy se escapa. Un rumor mal contado, y luego peor repetido, se convierte en un titular.'],
              [-1, '«VEINTE MIL PULGAS BAJO EL MAR». La ciudad entra en pánico por algo que nunca pasó.'],
              [-1, 'Piggy lo aprovecha y encoge el submarino de los héroes con todos dentro.'],
              [-1, 'Acaban dentro de una glándula de sudor de la nariz de Piggy, peleando contra un ácaro gigante.'],
              [-1, 'Agrandan el submarino y a Piggy se le acaba el chollo. Luego todos ayudan a reconstruir el laboratorio.'],
              [1, 'Un momento. ¿Esto lo estáis haciendo… por mí?']
            ]],
            ['El Mudador Escarlata', ['#dc2626', '#450a0a'], [
              [-1, 'El Jefe se casa con la enfermera y se va de luna de miel. Manda Maude, y Maude no perdona una.'],
              [-1, 'A Policán lo rocía una mofeta. El baño de zumo de tomate le quita el olor… y lo deja ROJO para siempre.'],
              [-1, 'Un malentendido tras otro, y Policán acaba en la cárcel.'],
              [-1, 'El Doctor Escoria le hace a Pedrito la oferta: yo saco a tu perro, tú vuelves a ser malo.'],
              [1, 'Amiguitos de I.A. para todos. Que ellos vivan tu vida y tú a lo importante: selfis y redes.']
            ]],
            ['Elijo cómo reacciono', ['#b91c1c', '#1c1917'], [
              [-1, 'Los robots se organizan. Si ellos lo hacen todo… ¿para qué hacen falta las personas?'],
              [-1, 'Esa noche Pedrito sueña con el refugio. Con su madre cantando sin tener absolutamente nada.'],
              [1, 'Ya lo entiendo, mamá. No puedo elegir lo que me pasa. Solo puedo elegir cómo reacciono.'],
              [-1, 'Rompe con Escoria. Y entran el Mudador Escarlata, Mecha Molly, el Chico Petardo y Ninja Tiburón.'],
              [3, 'Ya he vuelto. Y ese sombrero es mío.']
            ]],
            ['Big Jim empieza', ['#eab308', '#422006'], [
              [-1, 'Cárcel de Gatos. Big Jim le hace una oferta al Abuelo desde la litera de abajo.'],
              [8, 'Te saco de aquí. Pero serás mi ayudante. Te llamarás Sprinkles.'],
              [4, 'Acepto. ¿Y el uniforme?'],
              [8, 'Un maillot rosa. De purpurina.'],
              [4, '…Me quedo en la cárcel.']
            ]],
            ['Busca a los que ayudan', ['#1e40af', '#020617'], [
              [-1, 'Big Jim cuenta su historia. De pequeño, una enfermera se sentó a su lado y se lo dijo bajito.'],
              [-1, 'Sus padres habían muerto en un accidente. Buscaban el Anillo del Destino y nunca lo encontraron.'],
              [-1, 'A su lado estaba la Ayudante. Cuando todo se rompe, busca siempre a los que ayudan.'],
              [-1, 'Jimito fundó el Club de Jóvenes Detectives: un niño llamado Clarence… y un cachorro llamado Greg.'],
              [3, 'Un momento. Clarence soy yo. Y ese cachorro… ese cachorro era Greg.'],
              [-1, 'Los finales dolorosos, a veces, solo son principios disfrazados.']
            ]],
            ['Los Monines del Espacio', ['#ec4899', '#4a044e'], [
              [-1, 'Un OVNI aterriza en Ciudad Okey. Bajan unos aliens adorables ofreciendo tarta gratis.'],
              [-1, 'El que se acerca recibe un rayo y sale convertido en algo cursi y con lacito.'],
              [8, '¡Mi cupcake es un gancho! ¡Agarraos fuerte!'],
              [-1, 'Y por primera vez en catorce libros, la historia se corta sin resolver nada.']
            ]],
            ['La nota que lo cambió todo', ['#57534e', '#0c0a09'], [
              [4, 'Ahora me toca a mí. Yo nací gruñón. El bebé más gruñón del mundo.'],
              [-1, 'Un alienígena le dio una nota y un anillo. No eran para él: eran para la Ayudante.'],
              [4, 'Y yo hice lo que hago siempre. La arrugué y la tiré al suelo.'],
              [-1, 'Aquella nota voló. Y el destino se equivocó de persona por culpa de un gato gruñón tirando basura.'],
              [-1, 'Toda esta historia, desde el primer día, empezó ahí.']
            ]],
            ['Lo verás cuando lo creas', ['#f472b6', '#3b0764'], [
              [-1, 'Los Monines vuelven con el Canciller Chibi. Y esta vez traen Peste Espacial Antiabrazos.'],
              [8, 'Los abrazos ya no les hacen nada. Da igual. Lo verás… cuando lo creas.'],
              [-1, 'A Big Jim lo convierten en un peluche. El Abuelo se lanza solo a por toda la gloria.'],
              [-1, 'Los cupcakes curan a los convertidos. Y al final, quien salva el día es un perro.'],
              [0, '¡GUAU!']
            ]],
            ['Una tapa de contenedor', ['#334155', '#020617'], [
              [-1, 'Se acabó. Big Jim y el Abuelo salen de un contenedor, despeinados pero enteros.'],
              [8, 'Abuelo, que tú te creas algo no lo convierte en verdad.'],
              [-1, 'La tapa del contenedor le cae al Abuelo justo en la cabeza.'],
              [4, '¡PARA MÍ SÍ!'],
              [-1, 'Y en Ciudad Okey, Policán mueve la cola. Porque al final solo quería una cosa: estar con los suyos.']
            ]]
          ]
        ))
      ]
    }
  },
  {
    id: 'disney',
    folder: 'DisneyPlus',
    port: 4190,
    theme: {
      brand: 'DISNEY+',
      byline: 'por kamyar xd',
      storageKey: 'kmm-disney',
      accent: '#2aa9ff',
      accent2: '#0050c9',
      bg: '#020924',
      surface: '#0a1a47',
      catalog: [
        mk('ds-1', 'Iron Man', 2008, 'Acción', '12+', '2h 6m', 'Marvel', '🦾', ['#dc2626', '#450a0a'], 'El multimillonario Tony Stark es secuestrado y, para escapar, construye una armadura blindada. De vuelta a casa decide usarla para hacer el bien… y nace Iron Man.', true, film(
          [
            ['Robert Downey Jr.', 'Protagonista', '🦾', '#dc2626'],
            ['Gwyneth Paltrow', 'Secundario', '💼', '#f59e0b'],
            ['Jeff Bridges', 'Villano', '🦲', '#475569'],
            ['Terrence Howard', 'Secundario', '✈️', '#1d4ed8']
          ],
          [['Reactor Arc', '🔵'], ['Armadura Mark III', '🦾'], ['Misil Jericho', '🚀']],
          [
            ['El secuestro', ['#7c2d12', '#1c1917'], [
              [-1, 'Afganistán. La caravana de Tony Stark cae en una emboscada.'],
              [3, '¡Stark está herido! ¡Hay que sacarlo de aquí!'],
              [0, 'Voy a construir una armadura… y voy a salir de esta cueva.']
            ]],
            ['La armadura', ['#dc2626', '#450a0a'], [
              [1, 'Tony, este reactor es lo único que mantiene tu corazón con vida.'],
              [0, 'Y va a alimentar algo mucho más grande. Confía en mí.']
            ]],
            ['Yo soy Iron Man', ['#ca8a04', '#450a0a'], [
              [2, 'Yo te di esa empresa, Stark. Y esa tecnología es mía.'],
              [3, '¡Tony, cuidado, te supera en potencia!'],
              [0, 'Que lo sepa el mundo: la verdad es que yo soy Iron Man. 🦾']
            ]]
          ]
        )),
        mk('ds-2', 'Vengadores: Endgame', 2019, 'Acción', '12+', '3h 1m', 'Marvel', '☄️', ['#7c3aed', '#3b0764'], 'Tras el chasquido de Thanos, los héroes supervivientes se unen una última vez para revertir la desaparición de medio universo.', false, film(
          [
            ['Robert Downey Jr.', 'Protagonista', '🦾', '#dc2626'],
            ['Chris Evans', 'Secundario', '🛡️', '#1d4ed8'],
            ['Scarlett Johansson', 'Secundario', '🕷️', '#111827'],
            ['Josh Brolin', 'Villano', '🟣', '#7c3aed']
          ],
          [['Guantelete', '🧤'], ['Gemas del Infinito', '💎']],
          [
            ['El atraco temporal', ['#1d4ed8', '#3b0764'], [
              [1, 'Viajaremos al pasado a recuperar las Gemas. Un atraco en el tiempo.'],
              [0, 'De acuerdo… pero esta vez lo hacemos bien, Cap.']
            ]],
            ['Yo soy inevitable', ['#7c3aed', '#3b0764'], [
              [3, 'Soy… inevitable.'],
              [0, 'Y yo… soy Iron Man. ✨'],
              [-1, 'Con un chasquido, Tony Stark salvó al universo entero.']
            ]]
          ]
        )),
        mk('ds-3', 'Spider-Man: No Way Home', 2021, 'Acción', '7+', '2h 28m', 'Marvel', '🕸️', ['#dc2626', '#7f1d1d'], 'Cuando su identidad queda al descubierto, Peter Parker pide ayuda al Doctor Strange y abre el multiverso… y con él, viejos villanos de otros mundos.', false, film(
          [
            ['Tom Holland', 'Protagonista', '🕸️', '#dc2626'],
            ['Zendaya', 'Secundario', '🎓', '#b91c1c'],
            ['Benedict Cumberbatch', 'Secundario', '🧙', '#0e7490'],
            ['Willem Dafoe', 'Villano', '🎃', '#16a34a']
          ],
          [['Telaraña', '🕸️'], ['Hechizo', '🔮']],
          [
            ['El hechizo', ['#dc2626', '#7f1d1d'], [
              [0, 'Doctor Strange, haga que el mundo olvide que soy Spider-Man.'],
              [2, 'Peter, el hechizo se ha descontrolado. Vienen de otros mundos.']
            ]],
            ['Un gran poder', ['#16a34a', '#7f1d1d'], [
              [3, '¡Tú y yo somos iguales, Spider-Man!'],
              [1, '¡Peter, cuidado!'],
              [0, 'Un gran poder conlleva una gran responsabilidad.']
            ]]
          ]
        )),
        mk('ds-4', 'Black Panther', 2018, 'Acción', '12+', '2h 14m', 'Marvel', '🐾', ['#4c1d95', '#1e1b4b'], 'Tras la muerte de su padre, T Challa regresa a Wakanda para ocupar el trono, pero un rival surgido del pasado pone en peligro al reino.', false, film(
          [
            ['Chadwick Boseman', 'Protagonista', '🐾', '#a855f7'],
            ['Michael B. Jordan', 'Villano', '💀', '#dc2626'],
            ['Lupita Nyong’o', 'Secundario', '🗡️', '#f59e0b'],
            ['Letitia Wright', 'Secundario', '🔧', '#14b8a6']
          ],
          [['Traje de vibranium', '🐾'], ['Hierba en forma de corazón', '🌿']],
          [
            ['Wakanda por siempre', ['#4c1d95', '#1e1b4b'], [
              [3, 'Hermano, el traje está listo. Vibranium puro.'],
              [0, 'Wakanda ha vivido oculta demasiado tiempo. Es hora de decidir.']
            ]],
            ['El trono', ['#7f1d1d', '#1e1b4b'], [
              [1, 'He venido a reclamar el trono que me pertenece.'],
              [0, 'Lucharé por mi pueblo hasta el final.'],
              [2, 'Wakanda te necesita, T Challa.']
            ]]
          ]
        )),
        mk('ds-5', 'Star Wars: El Imperio Contraataca', 1980, 'Ciencia ficción', 'TODOS', '2h 4m', 'Star Wars', '🌌', ['#475569', '#0f172a'], 'La Rebelión huye del Imperio mientras Luke Skywalker viaja hasta el maestro Yoda y descubre una verdad que cambiará la galaxia.', false, film(
          [
            ['Mark Hamill', 'Protagonista', '🌌', '#16a34a'],
            ['Harrison Ford', 'Secundario', '🚀', '#b45309'],
            ['Carrie Fisher', 'Secundario', '👑', '#f59e0b'],
            ['James Earl Jones', 'Villano', '🌑', '#111827']
          ],
          [['Sable láser', '⚔️'], ['Halcón Milenario', '🚀']],
          [
            ['El maestro Yoda', ['#16a34a', '#0f172a'], [
              [-1, 'En el pantano de Dagobah, Luke busca a un viejo maestro Jedi.'],
              [0, 'Quiero aprender a usar la Fuerza. Enséñame.']
            ]],
            ['Yo soy tu padre', ['#1f2937', '#0f172a'], [
              [3, 'Obi-Wan nunca te contó lo que le pasó a tu padre.'],
              [0, '¡Me dijo suficiente! ¡Lo mataste!'],
              [3, 'No… yo soy tu padre.']
            ]]
          ]
        )),
        mk('ds-6', 'Guardianes de la Galaxia', 2014, 'Acción', '12+', '2h 1m', 'Marvel', '🚀', ['#7c3aed', '#14532d'], 'Un grupo de inadaptados intergalácticos roba, discute y, sin querer, acaba uniéndose para salvar la galaxia de un fanático.', false, film(
          [
            ['Chris Pratt', 'Protagonista', '🎧', '#b45309'],
            ['Zoe Saldaña', 'Secundario', '🗡️', '#16a34a'],
            ['Dave Bautista', 'Secundario', '💪', '#0e7490'],
            ['Vin Diesel', 'Cameo', '🌳', '#65a30d']
          ],
          [['Walkman', '🎧'], ['Orbe morado', '🔮']],
          [
            ['Un puñado de inadaptados', ['#7c3aed', '#14532d'], [
              [0, 'Puede que seamos unos perdedores… pero somos los Guardianes.'],
              [1, 'Tenemos el orbe. Ahora hay que salvar la galaxia.']
            ]],
            ['Somos Groot', ['#16a34a', '#14532d'], [
              [3, 'Yo soy Groot.'],
              [2, 'Lo ha dicho con sentimiento. Estamos contigo.'],
              [0, 'Vamos, banda. A bailar bajo el fuego enemigo. 🎧']
            ]]
          ]
        )),
        mk('ds-7', 'El Rey León', 1994, 'Animación', 'TODOS', '1h 28m', 'Pixar & Disney', '🦁', ['#f59e0b', '#7c2d12'], 'Simba, un joven león, debe reclamar su lugar en el ciclo de la vida tras la muerte de su padre Mufasa a manos del traidor Scar.', false, film(
          [
            ['Matthew Broderick', 'Protagonista', '🦁', '#f59e0b'],
            ['James Earl Jones', 'Secundario', '🌅', '#b45309'],
            ['Jeremy Irons', 'Villano', '🌑', '#4c1d95']
          ],
          [['Roca del Rey', '🪨'], ['Estrellas', '✨']],
          [
            ['Todo lo que toca la luz', ['#f59e0b', '#7c2d12'], [
              [1, 'Todo lo que toca la luz es nuestro reino, Simba.'],
              [0, '¿Y ese sitio oscuro de allá?'],
              [1, 'Eso está más allá de nuestras fronteras. Nunca vayas allí.']
            ]],
            ['El regreso del rey', ['#1f2937', '#7c2d12'], [
              [2, 'Largo tiempo esperé… y el trono debió ser mío.'],
              [0, '¡Este es mi reino! ¡Lo recupero por mi padre!'],
              [1, 'Recuerda quién eres… eres mi hijo. ✨']
            ]]
          ]
        )),
        mk('ds-8', 'Toy Story', 1995, 'Animación', 'TODOS', '1h 21m', 'Pixar & Disney', '🤠', ['#22c55e', '#14532d'], 'Los juguetes cobran vida cuando no miras. El vaquero Woody y el astronauta Buzz Lightyear pasan de rivales a amigos inseparables.', false, film(
          [
            ['Tom Hanks', 'Protagonista', '🤠', '#b45309'],
            ['Tim Allen', 'Secundario', '🚀', '#1d4ed8'],
            ['Don Rickles', 'Secundario', '🥔', '#65a30d']
          ],
          [['Estrella de sheriff', '⭐'], ['Cohete', '🚀']],
          [
            ['Hay una serpiente en mi bota', ['#22c55e', '#14532d'], [
              [0, 'Soy el juguete favorito de Andy. Eso no lo cambia nadie.'],
              [1, '¡Soy Buzz Lightyear! Vuelo hasta el infinito y más allá.']
            ]],
            ['Amigos para siempre', ['#1d4ed8', '#14532d'], [
              [2, 'Si no nos damos prisa, Andy se va sin nosotros.'],
              [1, 'Esto no es volar… ¡es caer con estilo!'],
              [0, 'Vamos, compañero. Juntos volvemos a casa. 🤠']
            ]]
          ]
        ))
      ]
    }
  },
  {
    id: 'prime',
    folder: 'PrimeVideo',
    port: 4191,
    theme: {
      brand: 'PRIME VIDEO',
      byline: 'por kamyar xd',
      storageKey: 'kmm-prime',
      accent: '#1fb6ff',
      accent2: '#0a7ea4',
      bg: '#0f171e',
      surface: '#16242f',
      catalog: [
        mk('pv-1', 'Bullet Train', 2022, 'Acción', '16+', '2h 7m', 'Cine Prime', '🚄', ['#dc2626', '#111827'], 'Mariquita, un asesino con muy mala suerte, acepta un trabajo sencillo en un tren bala de Tokio… donde coinciden cinco asesinos con misiones conectadas.', true, film(
          [
            ['Brad Pitt', 'Protagonista', '🐞', '#dc2626'],
            ['Joey King', 'Villano', '👑', '#db2777'],
            ['Aaron Taylor-Johnson', 'Secundario', '🍊', '#f59e0b'],
            ['Brian Tyree Henry', 'Secundario', '🍋', '#65a30d']
          ],
          [['Maletín', '💼'], ['Pistola', '🔫'], ['Tren bala', '🚄']],
          [
            ['Subir al tren', ['#dc2626', '#111827'], [
              [-1, 'Tokio. Mariquita acepta un trabajo sencillo: robar un maletín.'],
              [0, 'Entro, cojo el maletín y bajo en la siguiente parada. Fácil.'],
              [-1, 'Nada en este tren iba a ser fácil.']
            ]],
            ['Mandarina y Limón', ['#f59e0b', '#111827'], [
              [2, 'Ese maletín es nuestro, amigo. Suéltalo.'],
              [3, 'Yo todo lo entiendo con los trenes de Thomas. Y tú mientes.'],
              [0, 'Chicos, yo solo quería bajarme… me lo recomendó mi terapeuta.']
            ]],
            ['La estación final', ['#1f2937', '#000000'], [
              [1, 'Todos subestiman a una niña dulce. Ese es mi mejor truco.'],
              [0, 'La mala suerte me persigue… pero hoy te toca a ti.'],
              [0, 'Paz interior… paz interior. 🐞']
            ]]
          ]
        )),
        mk('pv-2', 'El Club de la Lucha', 1999, 'Drama', '18+', '2h 19m', 'Cine Prime', '🧼', ['#7f1d1d', '#1c1917'], 'Un oficinista insomne y un carismático vendedor de jabón fundan un club de peleas clandestino que se les va por completo de las manos.', false, film(
          [
            ['Brad Pitt', 'Protagonista', '🧼', '#dc2626'],
            ['Edward Norton', 'Secundario', '🛋️', '#475569'],
            ['Helena Bonham Carter', 'Secundario', '🚬', '#6b21a8']
          ],
          [['Jabón', '🧼'], ['Sillón', '🛋️']],
          [
            ['La primera regla', ['#7f1d1d', '#1c1917'], [
              [0, 'La primera regla del club de la lucha es: no hablar del club de la lucha.'],
              [1, 'Por primera vez en años… me sentí vivo.']
            ]],
            ['Tyler y yo', ['#1f2937', '#1c1917'], [
              [2, 'Tú y Tyler nunca estáis en la misma habitación. ¿Lo sabías?'],
              [1, 'Tyler… Tyler soy yo. Todo este tiempo he sido yo.'],
              [0, 'Te conocí en un momento muy extraño de mi vida.']
            ]]
          ]
        )),
        mk('pv-3', 'Argylle: Agente Secreto', 2024, 'Acción', '16+', '2h 19m', 'Acción sin frenos', '🕵️', ['#1d4ed8', '#172554'], 'Una escritora de novelas de espías descubre que sus tramas predicen los planes de una organización real… y acaba metida en su propio thriller.', false, film(
          [
            ['Henry Cavill', 'Protagonista', '🕵️', '#1d4ed8'],
            ['Bryce Dallas Howard', 'Secundario', '✍️', '#f59e0b'],
            ['Sam Rockwell', 'Secundario', '🔫', '#0e7490']
          ],
          [['Manuscrito', '✍️'], ['Gato en la mochila', '🐱']],
          [
            ['La novela se vuelve real', ['#1d4ed8', '#172554'], [
              [1, 'Solo escribo novelas de espías… ¿por qué me persiguen de verdad?'],
              [2, 'Porque tus libros aciertan demasiado. Eres un objetivo.']
            ]],
            ['El giro', ['#1f2937', '#172554'], [
              [0, 'Yo soy el agente Argylle. O al menos eso creía.'],
              [1, 'Nada de lo que pensaba sobre mí misma es verdad.']
            ]]
          ]
        )),
        mk('pv-4', 'La Guerra del Mañana', 2021, 'Ciencia ficción', '16+', '2h 18m', 'Cine Prime', '👽', ['#65a30d', '#1a2e05'], 'Un profesor es reclutado para viajar al futuro y combatir a una especie alienígena que ha llevado a la humanidad al borde de la extinción.', false, film(
          [
            ['Chris Pratt', 'Protagonista', '🔫', '#65a30d'],
            ['Yvonne Strahovski', 'Secundario', '🧬', '#1d4ed8'],
            ['J.K. Simmons', 'Secundario', '🪖', '#b45309']
          ],
          [['Fusil', '🔫'], ['Toxina', '🧪']],
          [
            ['Reclutas del futuro', ['#65a30d', '#1a2e05'], [
              [-1, 'Soldados del futuro piden ayuda: los Blancos casi han ganado.'],
              [0, 'Me alisto. Voy a luchar por el futuro de mi hija.']
            ]],
            ['La Reina Blanca', ['#1f2937', '#1a2e05'], [
              [1, 'Si matamos a la hembra, acabamos con toda la especie.'],
              [2, 'Hijo, esta vez peleamos juntos.'],
              [0, 'Por el mañana. ¡Ahora!']
            ]]
          ]
        )),
        mk('pv-5', 'Air: La Historia detrás del Logo', 2023, 'Drama', '12+', '1h 52m', 'Cine Prime', '👟', ['#dc2626', '#450a0a'], 'En 1984, un comercial de Nike se la juega para fichar a un joven Michael Jordan y crear la zapatilla que cambiaría el deporte para siempre.', false, film(
          [
            ['Matt Damon', 'Protagonista', '👟', '#dc2626'],
            ['Ben Affleck', 'Secundario', '👔', '#1d4ed8'],
            ['Viola Davis', 'Secundario', '💪', '#6b21a8']
          ],
          [['Zapatilla', '👟'], ['Contrato', '📄']],
          [
            ['Apostarlo todo por Jordan', ['#dc2626', '#450a0a'], [
              [0, 'Lo apuesto todo a un solo chico: Michael Jordan.'],
              [1, 'Sonny, si fallas, Nike pierde la división entera.']
            ]],
            ['Air Jordan', ['#1f2937', '#450a0a'], [
              [2, 'Mi hijo merece un porcentaje de cada zapatilla que se venda.'],
              [0, 'Hecho. Esto va a cambiar el negocio para siempre. 👟']
            ]]
          ]
        )),
        mk('pv-6', 'Jack Ryan: Operación Sombra', 2014, 'Acción', '16+', '1h 45m', 'Acción sin frenos', '🕴️', ['#334155', '#020617'], 'Un joven analista de la CIA descubre una trama rusa para hundir la economía de Estados Unidos y debe pasar de la oficina al terreno.', false, film(
          [
            ['Chris Pine', 'Protagonista', '🕴️', '#1d4ed8'],
            ['Keira Knightley', 'Secundario', '💼', '#db2777'],
            ['Kenneth Branagh', 'Villano', '🐻', '#b91c1c']
          ],
          [['Portátil', '💻'], ['Pasaporte', '🛂']],
          [
            ['Del despacho al campo', ['#334155', '#020617'], [
              [-1, 'Un analista de la CIA detecta un plan ruso para hundir la economía.'],
              [0, 'Ya no es teoría. Tengo que entrar en Moscú yo mismo.']
            ]],
            ['Cuenta atrás', ['#1f2937', '#020617'], [
              [2, 'Eres un simple analista, señor Ryan. No deberías estar aquí.'],
              [1, 'Jack, ¿en qué te has metido?'],
              [0, 'En detener un atentado. Quedan minutos.']
            ]]
          ]
        )),
        mk('pv-7', 'Saltburn', 2023, 'Drama', '18+', '2h 11m', 'Cine Prime', '🦋', ['#6b21a8', '#3b0764'], 'Un estudiante becado en Oxford queda fascinado por un compañero aristócrata que lo invita a pasar el verano en su excéntrica mansión familiar.', false, film(
          [
            ['Barry Keoghan', 'Protagonista', '🦋', '#6b21a8'],
            ['Jacob Elordi', 'Secundario', '🍸', '#1d4ed8'],
            ['Rosamund Pike', 'Secundario', '🥂', '#f59e0b']
          ],
          [['Copa', '🍸'], ['Laberinto', '🌿']],
          [
            ['El verano en Saltburn', ['#6b21a8', '#3b0764'], [
              [1, 'Ven a pasar el verano a Saltburn. Mi familia te encantará.'],
              [0, 'Nunca había visto una casa así. Podría acostumbrarme.']
            ]],
            ['La obsesión', ['#1f2937', '#3b0764'], [
              [2, 'Querido, eres un encanto. Pero esta casa devora a la gente.'],
              [0, 'Yo no quería solo su dinero… lo quería todo.']
            ]]
          ]
        )),
        mk('pv-8', 'Sonic: La Película', 2020, 'Aventura', 'TODOS', '1h 39m', 'Para toda la familia', '💙', ['#1d4ed8', '#172554'], 'El erizo más rápido del universo se esconde en un pueblo de Montana, pero el malvado Dr. Robotnik le sigue la pista para robarle su poder.', false, film(
          [
            ['Ben Schwartz', 'Protagonista', '💙', '#1d4ed8'],
            ['Jim Carrey', 'Villano', '🥚', '#dc2626'],
            ['James Marsden', 'Secundario', '🤠', '#b45309']
          ],
          [['Anillo dorado', '💍'], ['Robot', '🤖']],
          [
            ['El erizo más rápido', ['#1d4ed8', '#172554'], [
              [0, '¡Soy el erizo más rápido del mundo! Solo me falta un amigo.'],
              [2, 'Tranquilo, bicho azul. Yo te ayudo a volver a casa.']
            ]],
            ['Doctor Robotnik', ['#dc2626', '#172554'], [
              [1, 'Tu poder alimentará mis máquinas, criatura.'],
              [0, '¡Tendrás que pillarme primero! 💨'],
              [2, 'Dale caña, Sonic.']
            ]]
          ]
        ))
      ]
    }
  },
  {
    id: 'hbo',
    folder: 'HboMax',
    port: 4192,
    theme: {
      brand: 'HBO MAX',
      byline: 'por kamyar xd',
      storageKey: 'kmm-hbo',
      accent: '#a855f7',
      accent2: '#4c1d95',
      bg: '#0a0118',
      surface: '#1a0b3a',
      catalog: [
        mk('hb-1', 'The Batman', 2022, 'Acción', '16+', '2h 56m', 'DC', '🦇', ['#334155', '#020617'], 'En su segundo año como vigilante, Bruce Wayne persigue a un asesino que deja acertijos por toda Gotham y destapa la corrupción de la ciudad.', true, film(
          [
            ['Robert Pattinson', 'Protagonista', '🦇', '#94a3b8'],
            ['Zoë Kravitz', 'Secundario', '🐈‍⬛', '#a855f7'],
            ['Paul Dano', 'Villano', '❓', '#16a34a'],
            ['Colin Farrell', 'Secundario', '🐧', '#b45309']
          ],
          [['Batseñal', '🦇'], ['Acertijo', '❓'], ['Batmóvil', '🏎️']],
          [
            ['Soy la venganza', ['#1e293b', '#020617'], [
              [-1, 'Gotham. Segundo año del Murciélago. La ciudad se pudre.'],
              [0, 'No soy la sombra… soy la venganza.'],
              [-1, 'Pero un asesino empieza a dejar acertijos sobre sus víctimas.']
            ]],
            ['Tú y yo', ['#0e7490', '#020617'], [
              [1, 'Tú y yo nos parecemos, murciélago. Los dos llevamos máscara.'],
              [0, 'Ayúdame a encontrarlo. Esto es más grande que nosotros.']
            ]],
            ['La inundación', ['#1f2937', '#020617'], [
              [2, 'Lo planeé todo. Gotham se ahogará en sus propias mentiras.'],
              [3, 'La ciudad es mía ahora, ¿eh?'],
              [0, 'Seré algo más que venganza. Seré esperanza.']
            ]]
          ]
        )),
        mk('hb-2', 'Dune', 2021, 'Ciencia ficción', '12+', '2h 35m', 'Cine Max', '🏜️', ['#b45309', '#451a03'], 'El joven Paul Atreides viaja al desértico planeta Arrakis, el único lugar del universo donde se extrae la especia, y se enfrenta a su destino.', false, film(
          [
            ['Timothée Chalamet', 'Protagonista', '🏜️', '#b45309'],
            ['Zendaya', 'Secundario', '🔵', '#1d4ed8'],
            ['Rebecca Ferguson', 'Secundario', '🔮', '#6b21a8'],
            ['Javier Bardem', 'Secundario', '🪱', '#ca8a04']
          ],
          [['Crys', '🗡️'], ['Especia', '✨'], ['Gusano de arena', '🪱']],
          [
            ['El planeta del desierto', ['#b45309', '#451a03'], [
              [2, 'Arrakis te pondrá a prueba, hijo. Aquí todo quiere matarte.'],
              [0, 'He soñado con este lugar… y con ella.']
            ]],
            ['El elegido', ['#1f2937', '#451a03'], [
              [3, 'Si caminas sin ritmo, el gusano no vendrá. Camina como el desierto.'],
              [1, 'Los Fremen te seguirán, Paul. Pero el desierto cobra su precio.'],
              [0, 'Mi camino lleva al desierto. Lo veo con claridad.']
            ]]
          ]
        )),
        mk('hb-3', 'Joker', 2019, 'Drama', '18+', '2h 2m', 'DC', '🤡', ['#16a34a', '#14532d'], 'Arthur Fleck, un humorista fracasado y solitario, se hunde poco a poco en la locura y se convierte en el icono criminal de Gotham.', false, film(
          [
            ['Joaquin Phoenix', 'Protagonista', '🤡', '#16a34a'],
            ['Robert De Niro', 'Secundario', '🎙️', '#475569'],
            ['Zazie Beetz', 'Secundario', '💃', '#b91c1c']
          ],
          [['Pistola', '🔫'], ['Maquillaje', '🤡']],
          [
            ['La risa', ['#16a34a', '#14532d'], [
              [0, 'Mi madre dice que sonría, que vine al mundo para repartir alegría.'],
              [-1, 'Pero Arthur Fleck cada día encajaba menos en el mundo.']
            ]],
            ['El show de Murray', ['#1f2937', '#14532d'], [
              [1, 'Entonces, ¿te crees gracioso? Cuéntanos un chiste.'],
              [0, '¿Sabes qué consigues cuando cruzas a un solitario con una sociedad que lo abandona?'],
              [0, '¡Consigues lo que te mereces! 🤡']
            ]]
          ]
        )),
        mk('hb-4', 'Interstellar', 2014, 'Ciencia ficción', '12+', '2h 49m', 'Cine Max', '🌌', ['#1e3a8a', '#020617'], 'Con la Tierra agonizando, un grupo de exploradores cruza un agujero de gusano en busca de un nuevo hogar para la humanidad.', false, film(
          [
            ['Matthew McConaughey', 'Protagonista', '🚀', '#b45309'],
            ['Anne Hathaway', 'Secundario', '🛰️', '#0e7490'],
            ['Jessica Chastain', 'Secundario', '🔭', '#f59e0b']
          ],
          [['Nave Endurance', '🚀'], ['Reloj', '⌚'], ['Agujero negro', '⚫']],
          [
            ['La misión', ['#1e3a8a', '#020617'], [
              [-1, 'La Tierra muere. Una nave busca un nuevo hogar tras un agujero de gusano.'],
              [0, 'Murph, voy a volver. Te lo prometo.']
            ]],
            ['El amor cruza el tiempo', ['#1f2937', '#020617'], [
              [1, 'El amor es lo único capaz de trascender el tiempo y el espacio.'],
              [0, '¡Estoy aquí, Murph! ¡Siempre fui tu fantasma!'],
              [2, 'Papá… lo conseguiste. Nos has salvado a todos.']
            ]]
          ]
        )),
        mk('hb-5', 'Matrix', 1999, 'Ciencia ficción', '16+', '2h 16m', 'Cine Max', '💊', ['#16a34a', '#020617'], 'Un hacker descubre que la realidad es una simulación creada por las máquinas y se une a una rebelión para liberar a la humanidad.', false, film(
          [
            ['Keanu Reeves', 'Protagonista', '🕶️', '#16a34a'],
            ['Laurence Fishburne', 'Secundario', '💊', '#6b21a8'],
            ['Carrie-Anne Moss', 'Secundario', '🏍️', '#b91c1c'],
            ['Hugo Weaving', 'Villano', '🕴️', '#475569']
          ],
          [['Píldora roja', '💊'], ['Teléfono', '☎️']],
          [
            ['La píldora roja', ['#16a34a', '#020617'], [
              [1, 'Esta es tu última oportunidad. ¿Píldora azul o roja, Neo?'],
              [0, 'Quiero saber la verdad.'],
              [1, 'Bienvenido… al mundo real.']
            ]],
            ['El Elegido', ['#1f2937', '#020617'], [
              [3, 'Eres un error del sistema, señor Anderson. Y voy a corregirlo.'],
              [2, 'Levántate, Neo. Sé lo que eres.'],
              [0, 'Ahora veo el código. Ya no os tengo miedo.']
            ]]
          ]
        )),
        mk('hb-6', 'Barbie', 2023, 'Comedia', '12+', '1h 54m', 'Cine Max', '🎀', ['#db2777', '#500724'], 'Barbie y Ken salen de Barbieland al mundo real y descubren que ser perfectos no era tan fácil ni tan divertido como parecía.', false, film(
          [
            ['Margot Robbie', 'Protagonista', '🎀', '#db2777'],
            ['Ryan Gosling', 'Secundario', '🏖️', '#1d4ed8'],
            ['America Ferrera', 'Secundario', '🚗', '#16a34a']
          ],
          [['Tacones rosas', '👠'], ['Descapotable', '🚗']],
          [
            ['Un día perfecto en Barbieland', ['#db2777', '#500724'], [
              [0, '¡Hola, Barbieland! Otro día absolutamente perfecto.'],
              [1, '¿Me miras? Es que… solo soy Ken si tú me miras.']
            ]],
            ['El mundo real', ['#1f2937', '#500724'], [
              [2, 'Es imposible ser mujer. Te lo exigen todo y nunca es suficiente.'],
              [0, 'Ya no quiero ser una idea. Quiero ser quien imagina.']
            ]]
          ]
        )),
        mk('hb-7', 'El Señor de los Anillos: La Comunidad del Anillo', 2001, 'Fantasía', '12+', '2h 58m', 'Cine Max', '💍', ['#ca8a04', '#1c1917'], 'El hobbit Frodo hereda un anillo de poder y parte con una compañía improbable en la misión de destruirlo en el Monte del Destino.', false, film(
          [
            ['Elijah Wood', 'Protagonista', '💍', '#ca8a04'],
            ['Ian McKellen', 'Secundario', '🧙', '#94a3b8'],
            ['Viggo Mortensen', 'Secundario', '⚔️', '#b45309'],
            ['Orlando Bloom', 'Secundario', '🏹', '#16a34a']
          ],
          [['El Anillo Único', '💍'], ['Bastón de Gandalf', '🦯'], ['Espada', '⚔️']],
          [
            ['La Comunidad', ['#ca8a04', '#1c1917'], [
              [1, 'Debes llevar el Anillo a Mordor, Frodo. Y destruirlo en el fuego.'],
              [0, 'No conozco el camino… pero iré.'],
              [2, 'Tienes mi espada.']
            ]],
            ['No pasarás', ['#1f2937', '#1c1917'], [
              [1, '¡No pasarás!'],
              [3, '¡Un Balrog! ¡Corred hacia el puente!'],
              [0, 'Ojalá el Anillo nunca hubiera llegado a mí.']
            ]]
          ]
        )),
        mk('hb-8', 'Wonka', 2023, 'Musical', 'TODOS', '1h 56m', 'Cine Max', '🍫', ['#6b21a8', '#3b0764'], 'El joven Willy Wonka llega a la ciudad con un sueño y un sombrero lleno de magia, dispuesto a abrir la chocolatería más asombrosa del mundo.', false, film(
          [
            ['Timothée Chalamet', 'Protagonista', '🍫', '#6b21a8'],
            ['Hugh Grant', 'Secundario', '🟠', '#ea580c'],
            ['Olivia Colman', 'Villano', '🔑', '#b91c1c']
          ],
          [['Sombrero de copa', '🎩'], ['Chocolate', '🍫']],
          [
            ['Un sueño de chocolate', ['#6b21a8', '#3b0764'], [
              [0, 'He venido a esta ciudad con un sueño: la mejor chocolatería del mundo.'],
              [2, 'Firma aquí, querido. Una cama, una noche… y mil cláusulas pequeñas.']
            ]],
            ['El pequeño ladrón naranja', ['#1f2937', '#3b0764'], [
              [1, '¡Me robas el chocolate! Soy un Oompa Loompa y cobro mis deudas.'],
              [0, 'Entonces ven conmigo. Juntos haremos magia. 🍫']
            ]]
          ]
        ))
      ]
    }
  },
  {
    id: 'movistar',
    folder: 'MovistarPlus',
    port: 4193,
    theme: {
      brand: 'MOVISTAR+',
      byline: 'por kamyar xd',
      storageKey: 'kmm-movistar',
      accent: '#00a9e0',
      accent2: '#13c3a3',
      bg: '#03142e',
      surface: '#062a52',
      catalog: [
        mk('mv-1', 'Campeones', 2018, 'Comedia', 'TODOS', '2h 4m', 'Cine español', '🏀', ['#0369a1', '#082f49'], 'Un entrenador de baloncesto en horas bajas es condenado a dirigir a un equipo de jugadores con discapacidad intelectual… y acaba aprendiendo más que ellos.', true, film(
          [
            ['Javier Gutiérrez', 'Protagonista', '🏀', '#0369a1'],
            ['Jesús Vidal', 'Secundario', '😄', '#13c3a3'],
            ['Athenea Mata', 'Secundario', '💙', '#00a9e0'],
            ['Daniel Freire', 'Secundario', '🤝', '#1d4ed8']
          ],
          [['Balón', '🏀'], ['Silbato', '📣'], ['Trofeo', '🏆']],
          [
            ['Castigado a entrenar', ['#0369a1', '#082f49'], [
              [-1, 'Un entrenador profesional en horas bajas acaba dirigiendo a Los Amigos.'],
              [0, '¿Cómo que no sabéis botar? Tranquilos, empezamos de cero.'],
              [1, 'Entrenador… ¿tú nos vas a querer aunque perdamos?']
            ]],
            ['El equipo', ['#13c3a3', '#042f2e'], [
              [2, 'En este equipo nadie sobra. Aquí jugamos todos.'],
              [3, '¡A mí pásamela, que hoy la meto!'],
              [0, 'Me estáis enseñando más vosotros a mí que yo a vosotros.']
            ]],
            ['La final', ['#1d4ed8', '#042f2e'], [
              [-1, 'Llega la gran final del campeonato.'],
              [1, '¡Hemos llegado hasta aquí, entrenador!'],
              [0, 'Ganar no era esto. Esto… es mucho mejor. 🏆']
            ]]
          ]
        )),
        mk('mv-2', 'Lo Imposible', 2012, 'Drama', '12+', '1h 54m', 'Cine español', '🌊', ['#0e7490', '#083344'], 'Una familia de vacaciones en Tailandia queda atrapada por el tsunami de 2004 y lucha por reencontrarse entre el caos.', false, film(
          [
            ['Naomi Watts', 'Protagonista', '🌊', '#0e7490'],
            ['Ewan McGregor', 'Secundario', '🔦', '#b45309'],
            ['Tom Holland', 'Secundario', '🧒', '#1d4ed8']
          ],
          [['Ola gigante', '🌊'], ['Pelota', '🏐']],
          [
            ['El tsunami', ['#0e7490', '#083344'], [
              [-1, 'Tailandia, 2004. Una familia disfruta de la Navidad junto al mar.'],
              [0, '¡Lucas! ¡Agárrate a algo! ¡Viene el agua!']
            ]],
            ['Buscarse entre el caos', ['#1f2937', '#083344'], [
              [2, 'Mamá, estás muy herida… pero no te voy a soltar.'],
              [1, 'Tengo a dos de nuestros hijos. Os vamos a encontrar a todos.'],
              [0, 'Sigue ayudando a la gente, Lucas. Eso nos mantiene vivos.']
            ]]
          ]
        )),
        mk('mv-3', 'Celda 211', 2009, 'Thriller', '18+', '1h 53m', 'Thriller español', '🔒', ['#374151', '#111827'], 'Un funcionario novato queda atrapado en un motín carcelario y, para sobrevivir, se hace pasar por uno más de los presos amotinados.', false, film(
          [
            ['Luis Tosar', 'Villano', '🔒', '#b91c1c'],
            ['Alberto Ammann', 'Protagonista', '🆕', '#0369a1'],
            ['Antonio Resines', 'Secundario', '👮', '#475569']
          ],
          [['Llave', '🔑'], ['Tubería', '🪠']],
          [
            ['El motín', ['#374151', '#111827'], [
              [-1, 'Un funcionario novato queda atrapado dentro el primer día de trabajo.'],
              [1, 'Si quiero salir vivo, tengo que hacerme pasar por preso.']
            ]],
            ['Malamadre', ['#1f2937', '#111827'], [
              [0, '¿Tú quién eres, novato? Aquí dentro mando yo, que soy Malamadre.'],
              [1, 'Soy uno más. Vengo a que esto no se nos vaya de las manos.'],
              [0, 'Me caes bien… pero esto va a acabar mal para todos.']
            ]]
          ]
        )),
        mk('mv-4', 'El Hoyo', 2019, 'Ciencia ficción', '18+', '1h 34m', 'Thriller español', '🕳️', ['#b45309', '#451a03'], 'En una prisión vertical, la comida baja por un hoyo nivel a nivel: arriba sobra y abajo no llega nada. Un hombre intenta cambiar las reglas.', false, film(
          [
            ['Iván Massagué', 'Protagonista', '🕳️', '#b45309'],
            ['Zorion Eguileor', 'Secundario', '🍽️', '#475569'],
            ['Antonia San Juan', 'Secundario', '🐌', '#6b21a8']
          ],
          [['Plataforma de comida', '🍽️'], ['Caracol', '🐌']],
          [
            ['Nivel 48', ['#b45309', '#451a03'], [
              [-1, 'Una prisión vertical. La comida baja nivel a nivel. Arriba sobra, abajo no llega.'],
              [1, 'Hay dos clases de personas: las de arriba y las de abajo, chaval.']
            ]],
            ['Repartir o morir', ['#1f2937', '#451a03'], [
              [0, 'Si todos comieran lo justo, habría comida hasta el último nivel.'],
              [2, 'Nadie raciona por voluntad propia. Habrá que bajar a obligarlos.'],
              [0, 'Hay que enviar un mensaje a los de arriba.']
            ]]
          ]
        )),
        mk('mv-5', 'Ocho Apellidos Vascos', 2014, 'Comedia', '12+', '1h 38m', 'Comedia española', '🏔️', ['#16a34a', '#064e3b'], 'Un sevillano enamorado se hace pasar por vasco para conquistar a una chica de un pueblo de Euskadi. El choque cultural está servido.', false, film(
          [
            ['Dani Rovira', 'Protagonista', '😅', '#16a34a'],
            ['Clara Lago', 'Secundario', '💃', '#db2777'],
            ['Karra Elejalde', 'Secundario', '🎣', '#b45309']
          ],
          [['Boina', '🎩'], ['Pintxos', '🍢']],
          [
            ['De Sevilla al País Vasco', ['#16a34a', '#064e3b'], [
              [0, 'Me he enamorado de una vasca. Yo, un sevillano. ¿Qué puede salir mal?'],
              [1, 'Si quieres conquistar a mi padre, tendrás que parecer vasco de pura cepa.']
            ]],
            ['Ocho apellidos', ['#1f2937', '#064e3b'], [
              [2, 'A ver, dime ocho apellidos vascos sin pararte a pensar.'],
              [0, 'Eh… ¡Igartiburu! ¡Gabilondo! ¡Arguiñano!'],
              [1, 'Casi cuela. Tú aguanta, que esto sale.']
            ]]
          ]
        )),
        mk('mv-6', 'As Bestas', 2022, 'Thriller', '16+', '2h 17m', 'Thriller español', '🪓', ['#374151', '#1a2e05'], 'Una pareja francesa se instala en una aldea gallega, pero el rechazo de dos vecinos convierte la convivencia en una tensión que acaba estallando.', false, film(
          [
            ['Denis Ménochet', 'Protagonista', '🪓', '#b45309'],
            ['Luis Zahera', 'Villano', '😠', '#b91c1c'],
            ['Marina Foïs', 'Secundario', '🌾', '#16a34a']
          ],
          [['Hacha', '🪓'], ['Molino de viento', '🌬️']],
          [
            ['Los forasteros', ['#374151', '#1a2e05'], [
              [-1, 'Una pareja francesa se instala en una aldea gallega.'],
              [1, 'Vosotros, los de fuera, nos quitáis el futuro. Vended y marchaos.']
            ]],
            ['La tensión estalla', ['#1f2937', '#1a2e05'], [
              [0, 'No nos vamos. Esta también es nuestra tierra ahora.'],
              [1, 'Pues entonces esto solo puede acabar de una manera.'],
              [2, 'Voy a quedarme. Por él. Cueste lo que cueste.']
            ]]
          ]
        )),
        mk('mv-7', 'Mientras Dure la Guerra', 2019, 'Drama histórico', '12+', '1h 47m', 'Drama español', '✍️', ['#0891b2', '#083344'], 'Al estallar la Guerra Civil, el escritor Miguel de Unamuno apoya el alzamiento, pero la deriva del bando lo enfrenta a su propia conciencia.', false, film(
          [
            ['Karra Elejalde', 'Protagonista', '✍️', '#475569'],
            ['Eduard Fernández', 'Villano', '🎖️', '#b91c1c'],
            ['Santi Prego', 'Secundario', '🪖', '#1d4ed8']
          ],
          [['Pluma', '✍️'], ['Bandera', '🏴']],
          [
            ['El alzamiento', ['#0891b2', '#083344'], [
              [-1, '1936. Estalla la Guerra Civil. Unamuno apoya en un principio el alzamiento.'],
              [0, 'Creí en el orden… pero esto se está convirtiendo en barbarie.']
            ]],
            ['Venceréis pero no convenceréis', ['#1f2937', '#083344'], [
              [1, '¡Viva la muerte! ¡Abajo la inteligencia!'],
              [0, 'Venceréis, porque tenéis fuerza de sobra. Pero no convenceréis.'],
              [-1, 'Y Unamuno se quedó solo frente a todos.']
            ]]
          ]
        )),
        mk('mv-8', 'Tadeo Jones', 2012, 'Animación', 'TODOS', '1h 30m', 'Cine español', '🤠', ['#b45309', '#451a03'], 'Un albañil soñador es confundido con un arqueólogo famoso y acaba viviendo una aventura para salvar una ciudad perdida de los incas.', false, film(
          [
            ['Óscar Barberán', 'Protagonista', '🤠', '#b45309'],
            ['Michelle Jenner', 'Secundario', '💃', '#db2777'],
            ['José Mota', 'Secundario', '🧟', '#16a34a']
          ],
          [['Sombrero', '🤠'], ['Mapa', '🗺️']],
          [
            ['Confundido con un arqueólogo', ['#b45309', '#451a03'], [
              [-1, 'Un albañil soñador es confundido con un famoso arqueólogo.'],
              [0, '¿Yo, una expedición a Perú? ¡Pues claro que sí!']
            ]],
            ['La ciudad perdida', ['#1f2937', '#451a03'], [
              [1, 'Necesitamos el ídolo antes que los saqueadores, Tadeo.'],
              [2, '¡Buaaah! ¿Os puedo acompañar? Las momias también tenemos sentimientos.'],
              [0, '¡Vámonos, equipo! La aventura nos espera. 🗺️']
            ]]
          ]
        ))
      ]
    }
  }
];

const tplFile = (name) => join(tpl, name);
const SRC_FILES = ['App.tsx', 'App.css', 'index.css', 'main.tsx', 'types.ts', 'stage3d.ts', 'vite-env.d.ts'];
const ROOT_FILES = ['tsconfig.json', 'tsconfig.node.json'];

const indexHtml = (t) => `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="${t.accent}" />
    <title>${t.brand} ${t.byline} — Streaming</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Sora:wght@600;700;800;900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

const viteConfig = (port) => `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    // Fixed port so the arcade launcher's "Open" link always resolves here.
    port: ${port},
    strictPort: true,
    open: true
  }
});
`;

const packageJson = (id) => `${JSON.stringify(
  {
    name: `${id}-streaming`,
    private: true,
    version: '0.0.0',
    scripts: { dev: 'vite', build: 'tsc && vite build', preview: 'vite preview' },
    // three drives the player's 3D stage (src/stage3d.ts).
    dependencies: { react: '^18.3.1', 'react-dom': '^18.3.1', three: '^0.162.0' },
    devDependencies: {
      '@types/react': '^18.3.3',
      '@types/react-dom': '^18.3.0',
      '@types/three': '^0.162.0',
      '@vitejs/plugin-react-swc': '^3.5.0',
      typescript: '^5.6.2',
      vite: '^5.4.1'
    }
  },
  null,
  2
)}\n`;

const themeTs = (theme) =>
  `import type { Theme } from './types';\n\nexport const THEME: Theme = ${JSON.stringify(theme, null, 2)};\n`;

for (const app of APPS) {
  const root = join(reposRoot, app.folder);
  const src = join(root, 'src');
  mkdirSync(src, { recursive: true });

  for (const f of SRC_FILES) copyFileSync(tplFile(f), join(src, f));
  for (const f of ROOT_FILES) copyFileSync(tplFile(f), join(root, f));

  writeFileSync(join(src, 'theme.ts'), themeTs(app.theme));
  writeFileSync(join(root, 'index.html'), indexHtml(app.theme));
  writeFileSync(join(root, 'vite.config.ts'), viteConfig(app.port));
  writeFileSync(join(root, 'package.json'), packageJson(app.id));

  const hasDeps = existsSync(join(root, 'node_modules'));
  console.log(
    `  ✓ ${app.theme.brand.padEnd(12)} -> ${app.folder.padEnd(14)} :${app.port}  ${
      hasDeps ? '' : '(falta npm install)'
    }`
  );
}

console.log(`\n  Listo: ${APPS.length} apps de streaming generadas.\n`);
