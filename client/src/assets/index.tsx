import { CountryItem } from '../interfaces/interfaces';
import Cuba from './countries/cuba.jpg';
import Albania from './countries/albania.jpg';
import Peru from './countries/peru.jpg';
import Canada from './countries/canada.jpg';
import Iceland from './countries/iceland.jpg';
import Portugal from './countries/portugal.jpg';
import Jordan from './countries/jordan.jpg';
import CostaRica from './countries/сostarica.jpg';
import OldHavana from './sights/Cuba/OldHavana.jpg';
import BayOfPigs from './sights/Cuba/BayOfPigs.jpg';
import PlazaMayor from './sights/Cuba/PlazaMayor.jpg';
import Fusterlandia from './sights/Cuba/Fusterlandia.jpg';
import FabricaDeArteCubano from './sights/Cuba/FabricaDeArteCubano.jpg';
import OldSquare from './sights/Cuba/OldSquare.jpg';
import AlbanianRiviera from './sights/Albania/AlbanianRiviera.jpg';
import BunkArtInTirana from './sights/Albania/BunkArt.jpg';
import Gjirokaster from './sights/Albania/Gjirokaster.jpg';
import Tirana from './sights/Albania/Tirana.jpg';
import LlogaraPass from './sights/Albania/LlogaraPass.jpg';
import Berat from './sights/Albania/Berat.jpg';
import IncaPisac from './sights/Peru/IncaPisac.jpg';
import Moray from './sights/Peru/Moray.jpg';
import PlazaDeArmas from './sights/Peru/PlazaDeArmas.jpg';
import Kuelap from './sights/Peru/Kuelap.jpg';
import CordilleraBlanca from './sights/Peru/CordilleraBlanca.jpg';
import Sacsayhuaman from './sights/Peru/Sacsayhuaman.jpg';
import GrosMorneNationalPark from './sights/Canada/GrosMorneNationalPark.jpg';
import CalgaryStampede from './sights/Canada/CalgaryStampede.jpg';
import VictoriasInnerHarbour from './sights/Canada/VictoriasInnerHarbour.jpg';
import BayOfFundy from './sights/Canada/BayOfFundy.jpg';
import AthabascaFalls from './sights/Canada/AthabascaFalls.jpg';
import NiagaraFallsOntario from './sights/Canada/NiagaraFallsOntario.jpg';
import Svartifoss from './sights/Iceland/Svartifoss.jpg';
import BreidavikBeach from './sights/Iceland/BreidavikBeach.jpg';
import Seljalandsfoss from './sights/Iceland/Seljalandsfoss.jpg';
import Askja from './sights/Iceland/Askja.jpg';
import Hallgrimskirkja from './sights/Iceland/Hallgrimskirkja.jpg';
import Laugavegur from './sights/Iceland/Laugavegur.jpg';
import AlcobacaMonastery from './sights/Portugal/AlcobacaMonastery.jpg';
import UniversityOfCoimbra from './sights/Portugal/UniversityOfCoimbra.jpg';
import CaboGirao from './sights/Portugal/CaboGirao.jpg';
import SaoJorgeCastle from './sights/Portugal/SaoJorgeCastle.jpg';
import ObidosCastle from './sights/Portugal/ObidosCastle.jpg';
import BelemTower from './sights/Portugal/BelemTower.jpg';
import Petra from './sights/Jordan/Petra.jpg';
import DeadSea from './sights/Jordan/DeadSea.jpg';
import WadiRum from './sights/Jordan/WadiRum.jpg';
import JerashRuins from './sights/Jordan/JerashRuins.jpg';
import RomanRuinsInAmman from './sights/Jordan/RomanRuinsInAmman.jpg';
import WadiMujib from './sights/Jordan/WadiMujib.jpg';
import ArenalVolcanoNationalPark from './sights/CostaRica/ArenalVolcanoNationalPark.jpg';
import CorcovadoNationalPark from './sights/CostaRica/CorcovadoNationalPark.jpg';
import TamarindoPlayaLangostaPlayaGrande from './sights/CostaRica/TamarindoPlayaLangostaPlayaGrande.jpg';
import ManuelAntonioManuelAntonioNationalPark from './sights/CostaRica/ManuelAntonioManuelAntonioNationalPark.jpg';
import MonteverdeCloudForestReserve from './sights/CostaRica/MonteverdeCloudForestReserve.jpg';
import Matapalo from './sights/CostaRica/Matapalo.jpg';

export const Countries: Array<CountryItem> = [
  {
    id: 1,
    picture: Cuba,
    video: 'https://www.youtube.com/watch?v=exfjK7rvLUY',
    lat: 23.1165,
    long: -82.3882,
    translateTo: {
      en: {
        countryName: 'The Republic of Cuba',
        capitalName: 'Havana',
        lang: 'Spanish',
        description: 'This is a country comprising the island of Cuba, as well as Isla de la Juventud and several minor archipelagos. Cuba is located in the northern Caribbean where the Caribbean Sea, Gulf of Mexico and Atlantic Ocean meet. It is east of the Yucatán Peninsula (Mexico), south of both the U.S. state of Florida and the Bahamas, west of Hispaniola, and north of both Jamaica and the Cayman Islands. Havana is the largest city and capital; other major cities include Santiago de Cuba and Camagüey. The official area of the Republic of Cuba is 109,884 km2 (42,426 sq mi) (without the territorial waters). The main island of Cuba is the largest island in Cuba and in the Caribbean, with an area of 104,556 km2 (40,369 sq mi). Cuba is the second-most populous country in the Caribbean after Haiti, with over 11 million inhabitants.',
        sights: [
          {
            id: 1,
            picture: OldHavana,
            sightName: 'Old Havana',
            description: 'Bohemian, rhythmically Latin, certainly picturesque and, above all, charming.'
          },
          {
            id: 2,
            picture: BayOfPigs,
            sightName: 'Bay Of Pigs',
            description: 'The Bahia de Cochinos is, of course, where the U.S. staged a failed invasion of Cuba.'
          },
          {
            id: 3,
            picture: PlazaMayor,
            sightName: 'Plaza Mayor',
            description: 'Being the central square in Trinidad, it i9s surrounded by interesting and attractive buildings in various styles. There is so0me seating in the square.'
          },
          {
            id: 4,
            picture: Fusterlandia,
            sightName: 'Fusterlandia',
            description: 'Artist Jose Fuster has created a magical, colourful, dream-like house covered entirely with his ceramic and tile art and magnificent architecture and includes some of the surrounding streets and entrances to the neighborhood homes. '
          },
          {
            id: 5,
            picture: FabricaDeArteCubano,
            sightName: 'Fabrica De Arte Cubano',
            description: 'The F.A.C., Cuban Art Factory, located on the 26 and 11 in Vedado, is the best night cultural proposal in La Havana. There is always something new to do, theater, jazz, contemporary dance, concerts, DJs, exhibitions or intranet chatting. The best of all, all of this can take place in one night, while taking a glass of wine and eating delicious tapas. Visit this place, a new Oxygen in Havana!'
          },
          {
            id: 6,
            picture: OldSquare,
            sightName: 'Old Square (Plaza Vieja)',
            description: 'What is now called the Old Square was originally Plaza Nueva (New Square), built as a popular alternative to Plaza de Armas, the military and government nerve center. Later called Plaza del Mercado (Market Square) as Havanas commercial hub, Plaza Vieja was the site of executions, processions, bullfights, and fiestas -- all witnessed by Havanas wealthiest citizens, who looked on from their balconies. The original Carrara marble fountain surrounded by four dolphins was demolished in the 1930s when President Gerardo Machado (1871-1939) built an underground parking lot here. Today the squares surrounding structures vary wildly in condition, though all of them are noteworthy.'
          },
        ]
      },
      ru: {
        countryName: 'Республика Куба',
        capitalName: 'Гавана',
        lang: 'Испанский',
        description: 'Это страна, состоящая из острова Куба, а также Исла-де-ла-Хувентуд и нескольких небольших архипелагов. Куба расположена в северной части Карибского моря, где встречаются Карибское море, Мексиканский залив и Атлантический океан. Это к востоку от полуострова Юкатан (Мексика), к югу от американского штата Флорида и Багамских островов, к западу от Эспаньолы и к северу от Ямайки и Каймановых островов. Гавана - крупнейший город и столица; другие крупные города включают Сантьяго-де-Куба и Камагуэй. Официальная площадь Республики Куба составляет 109 884 км2 (42 426 квадратных миль) (без территориальных вод). Главный остров Кубы - самый большой остров на Кубе и в Карибском бассейне, его площадь составляет 104 556 км2 (40 369 квадратных миль). Куба - вторая по численности населения страна в Карибском бассейне после Гаити, с ее населением более 11 миллионов человек.',
        sights: [
          {
            id: 1,
            picture: OldHavana,
            sightName: 'Старая Гавана',
            description: 'Богемный, ритмично-латинский, безусловно, колоритный и, прежде всего, очаровательный.'
          },
          {
            id: 2,
            picture: BayOfPigs,
            sightName: 'Залив свиней',
            description: 'Баия-де-Кочинос, место, где США устроили неудавшееся вторжение на Кубу.'
          },
          {
            id: 3,
            picture: PlazaMayor,
            sightName: 'Главная площадь',
            description: 'Центральная площадь Тринидада окружена интересными и привлекательными зданиями в разных стилях. На площади есть еще места для сидения.'
          },
          {
            id: 4,
            picture: Fusterlandia,
            sightName: 'Фустерленд',
            description: 'Художник Хосе Фустер создал волшебный, красочный, похожий на сон дом, полностью покрытый его керамикой и плиткой и великолепной архитектурой, включающий некоторые из окружающих улиц и входы в соседние дома.'
          },
          {
            id: 5,
            picture: FabricaDeArteCubano,
            sightName: 'Кубинский художественный завод',
            description: 'Кубинский художественный завод, расположенный на 26 и 11 в Ведадо, является лучшим ночным культурным предложением в Гаване. Всегда есть чем заняться: театр, джаз, современный танец, концерты, ди-джеи, выставки или общение в интранете. Лучше всего то, что все это можно провести за одну ночь, выпив бокал вина и закусив вкусными закусками. Посетите это место, новый кислород в Гаване!'
          },
          {
            id: 6,
            picture: OldSquare,
            sightName: 'Старая площадь',
            description: 'То, что сейчас называется Старой площадью, изначально было Plaza Nueva (Новая площадь), построенным как популярная альтернатива Plaza de Armas, военному и правительственному нервному центру. Позже площадь Пласа-дель-Меркадо (Рыночная площадь) называлась торговым центром Гаван. Плаза Вьеха была местом казней, шествий, корриды и фиест, свидетелями которых были самые богатые жители Гаван, которые наблюдали за ней со своих балконов. Оригинальный фонтан из каррарского мрамора, окруженный четырьмя дельфинами, был снесен в 1930-х годах, когда президент Херардо Мачадо (1871-1939) построил здесь подземную автостоянку. Сегодня скверы, окружающие постройки, сильно различаются по состоянию, но все они достойны внимания.'
          },
        ]
      },
      es: {
        countryName: 'La republica de Сuba',
        capitalName: 'la Habana',
        lang: 'Española',
        description: 'Este es un país que comprende la isla de Cuba, así como la Isla de la Juventud y varios archipiélagos menores. Cuba está ubicada en el norte del Caribe, donde se encuentran el Mar Caribe, el Golfo de México y el Océano Atlántico. Está al este de la península de Yucatán (México), al sur del estado estadounidense de Florida y las Bahamas, al oeste de La Española y al norte de Jamaica y las Islas Caimán. La Habana es la ciudad y capital más grande; otras ciudades importantes incluyen Santiago de Cuba y Camagüey. El área oficial de la República de Cuba es 109,884 km2 (42,426 millas cuadradas) (sin las aguas territoriales). La isla principal de Cuba es la isla más grande de Cuba y del Caribe, con un área de 104,556 km2 (40,369 millas cuadradas). Cuba es el segundo país más poblado del Caribe después de Haití, con más de 11 millones de habitantes.',
        sights: [
          {
            id: 1,
            picture: OldHavana,
            sightName: 'Habana vieja',
            description: 'Bohemia, rítmicamente latina, ciertamente pintoresca y, sobre todo, encantadora.'
          },
          {
            id: 2,
            picture: BayOfPigs,
            sightName: 'Bahía de cochinos',
            description: 'La Bahía de Cochinos es, por supuesto, donde Estados Unidos protagonizó una fallida invasión a Cuba.'
          },
          {
            id: 3,
            picture: PlazaMayor,
            sightName: 'Plaza Mayor',
            description: 'Siendo la plaza central de Trinidad, está rodeada de interesantes y atractivos edificios de varios estilos. Hay algunos asientos en la plaza.'
          },
          {
            id: 4,
            picture: Fusterlandia,
            sightName: 'Fusterlandia',
            description: 'El artista José Fuster ha creado una casa mágica, colorida y de ensueño cubierta por completo con su arte de cerámica y azulejos y una arquitectura magnífica e incluye algunas de las calles circundantes y entradas a las casas del vecindario.'
          },
          {
            id: 5,
            picture: FabricaDeArteCubano,
            sightName: 'Fabrica De Arte Cubano',
            description: 'La F.A.C., Fábrica de Arte Cubano, ubicada en los días 26 y 11 del Vedado, es la mejor propuesta cultural nocturna en La Habana. Siempre hay algo nuevo que hacer, teatro, jazz, danza contemporánea, conciertos, DJs, exposiciones o charlas en la intranet. Lo mejor de todo es que todo esto se puede realizar en una noche, mientras tomas una copa de vino y degustas unas deliciosas tapas. ¡Visita este lugar, un nuevo Oxígeno en La Habana!'
          },
          {
            id: 6,
            picture: OldSquare,
            sightName: 'Plaza Vieja',
            description: 'Lo que ahora se llama la Plaza Vieja fue originalmente Plaza Nueva, construida como una alternativa popular a la Plaza de Armas, el centro neurálgico militar y gubernamental. Más tarde llamada Plaza del Mercado como el centro comercial de La Habana, la Plaza Vieja fue el lugar de ejecuciones, procesiones, corridas de toros y fiestas, todo presenciado por los ciudadanos más ricos de La Habana, que miraban desde sus balcones. La original fuente de mármol de Carrara rodeada por cuatro delfines fue demolida en la década de 1930 cuando el presidente Gerardo Machado (1871-1939) construyó aquí un estacionamiento subterráneo. Hoy en día, las plazas que rodean las estructuras varían enormemente en condiciones, aunque todas son dignas de mención.'
          },
        ]
      },
    },
  },
  {
    id: 2,
    picture: Albania,
    video: 'https://www.youtube.com/watch?v=TcggfMkWgpg',
    lat: 41.33,
    long: 19.82,
    translateTo: {
      en: {
        countryName: 'The Republic of Albania',
        capitalName: 'Tirana',
        lang: 'Albanian',
        description: 'is a country in Southeastern Europe. It is located on the Adriatic and Ionian Sea within the Mediterranean Sea, and shares land borders with Montenegro to the northwest, Kosovo[c] to the northeast, North Macedonia to the east, Greece to the south; and maritime borders with Greece, Montenegro and Italy to the west. Tirana is its capital and largest city, followed by Durrës, Vlorë and Shkodër.',

        sights: [
          {
            id: 1,
            picture: AlbanianRiviera,
            sightName: 'Albanian Riviera',
            description: 'The Albanian Riviera is, with the capital city Tirana, the most popular place in the country. The reason is that it is just amazing: long sandy and pebble beaches lapped by turquoise water, and lovely coastal hamlets with small Orthodox churches, cobblestoned streets and flowers everywhere. The best places to visit are Dhërmi, Drymades beach, Vuno, Qeparo and the seaside town of Himara.'
          },
          {
            id: 2,
            picture: BunkArtInTirana,
            sightName: 'BunkArt in Tirana',
            description: 'Tirana is one of the liveliest capitals of the Balkan Peninsula, with plenty of museums and art galleries that are worth a visit. Once in town, don’t miss the BunkArt, a majestic coveted bunker built in the outskirts of the town in the 70s by the former dictator Enver Hoxha. It is the perfect place to visit if you want to learn more about the Communist history of Albania.'
          },
          {
            id: 3,
            picture: Gjirokaster,
            sightName: 'The UNESCO town of Gjirokastër',
            description: 'One of the most stunning destinations in Albania and the Balkans is Gjirokastër. This town is located in the south of the country and, for its unique Ottoman architecture, has been included in the heritage sites by UNESCO. Gjirokastër is home to one of the most beautiful castles in the country, which offers spectacular views over the city.'
          },
          {
            id: 4,
            picture: Tirana,
            sightName: 'Tirana',
            description: 'The capital city of Albania, Tirana will be the starting point for many people exploring the best places in Albania.'
          },
          {
            id: 5,
            picture: LlogaraPass,
            sightName: 'Llogara Pass',
            description: 'The Llogara Pass is one of Albania’s most famous places, with the road providing one of the most spectacular drives in the whole world.'
          },
          {
            id: 6,
            picture: Berat,
            sightName: 'Berat',
            description: 'Berat is in the middle of Albania and it is believed to be one of the country’s oldest towns. Berat is often known by its nickname – the City of a Thousand Windows – due to its mix of Ottoman and Albanian architecture.'
          },
        ]
      },
      ru: {
        countryName: 'Республика Албания',
        capitalName: 'Тирана',
        lang: 'Албанский',
        description: 'Страна в Юго-Восточной Европе. Он расположен на берегу Адриатического и Ионического морей в Средиземном море и имеет сухопутные границы с Черногорией на северо-западе, Косово [c] на северо-востоке, Северной Македонией на востоке, Грецией на юге; и морские границы с Грецией, Черногорией и Италией на западе. Тирана - ее столица и крупнейший город, за ней следуют Дуррес, Влёра и Шкодер.',

        sights: [
          {
            id: 1,
            picture: AlbanianRiviera,
            sightName: 'Албанская Ривьера',
            description: 'Албанская Ривьера со столицей Тираной является самым популярным местом в стране. Причина в том, что это просто потрясающе: длинные песчано-галечные пляжи, омываемые бирюзовой водой, и очаровательные прибрежные деревушки с небольшими православными церквями, мощеными улочками и повсюду цветами. Лучшие места для посещения - Дерми, пляж Дримадес, Вуно, Кепаро и приморский город Химара.'
          },
          {
            id: 2,
            picture: BunkArtInTirana,
            sightName: 'BunkArt в Тиране',
            description: 'Тирана - одна из самых оживленных столиц Балканского полуострова с множеством музеев и художественных галерей, которые стоит посетить. Оказавшись в городе, не пропустите BunkArt, величественный желанный бункер, построенный на окраине города в 70-х годах бывшим диктатором Энвером Ходжей. Это идеальное место для посещения, если вы хотите больше узнать о коммунистической истории Албании.'
          },
          {
            id: 3,
            picture: Gjirokaster,
            sightName: 'Город Гирокастер, внесенный в список всемирного наследия ЮНЕСКО',
            description: 'Гирокастер - одно из самых красивых мест в Албании и на Балканах. Этот город расположен на юге страны и за его уникальную османскую архитектуру был включен ЮНЕСКО в список объектов культурного наследия. В Гирокастре находится один из самых красивых замков страны, откуда открывается захватывающий вид на город.'
          },
          {
            id: 4,
            picture: Tirana,
            sightName: 'Тирана',
            description: 'Столица Албании Тирана станет отправной точкой для многих людей, исследующих лучшие места Албании.'
          },
          {
            id: 5,
            picture: LlogaraPass,
            sightName: 'Перевал Логара',
            description: 'Перевал Логара - одно из самых известных мест Албании, по которому можно пройти по одной из самых захватывающих трасс в мире.'
          },
          {
            id: 6,
            picture: Berat,
            sightName: 'Берат',
            description: 'Берат находится в центре Албании и считается одним из старейших городов страны. Берат часто называют городом тысячи окон из-за смешения османской и албанской архитектуры.'
          },
        ]
      },
      es: {
        countryName: 'La república de Albania',
        capitalName: 'Tirana',
        lang: 'Albanian',
        description: 'es un país del sureste de Europa. Se encuentra en el Mar Adriático y Jónico dentro del Mar Mediterráneo, y comparte fronteras terrestres con Montenegro al noroeste, Kosovo [c] al noreste, Macedonia del Norte al este, Grecia al sur; y fronteras marítimas con Grecia, Montenegro e Italia al oeste. Tirana es su capital y ciudad más grande, seguida de Durrës, Vlorë y Shkodër.',

        sights: [
          {
            id: 1,
            picture: AlbanianRiviera,
            sightName: 'Riviera albanesa',
            description: 'La Riviera albanesa es, con la capital Tirana, el lugar más popular del país. La razón es que es simplemente increíble: largas playas de arena y guijarros bañadas por agua turquesa, y encantadoras aldeas costeras con pequeñas iglesias ortodoxas, calles adoquinadas y flores por todas partes. Los mejores lugares para visitar son Dhërmi, la playa Drymades, Vuno, Qeparo y la ciudad costera de Himara.'
          },
          {
            id: 2,
            picture: BunkArtInTirana,
            sightName: 'BunkArt en Tirana',
            description: 'Tirana es una de las capitales más animadas de la península de los Balcanes, con muchos museos y galerías de arte que merecen una visita. Una vez en la ciudad, no te pierdas el BunkArt, un majestuoso y codiciado búnker construido en las afueras de la ciudad en los años 70 por el ex dictador Enver Hoxha. Es el lugar perfecto para visitar si desea aprender más sobre la historia comunista de Albania.'
          },
          {
            id: 3,
            picture: Gjirokaster,
            sightName: 'La ciudad de Gjirokastër, declarada Patrimonio de la Humanidad por la UNESCO',
            description: 'Uno de los destinos más impresionantes de Albania y los Balcanes es Gjirokastër. Esta ciudad está ubicada en el sur del país y, por su arquitectura otomana única, ha sido incluida en el patrimonio de la UNESCO. Gjirokastër alberga uno de los castillos más bellos del país, que ofrece unas vistas espectaculares de la ciudad.'
          },
          {
            id: 4,
            picture: Tirana,
            sightName: 'Tirana',
            description: 'Tirana, la capital de Albania, será el punto de partida para que muchas personas exploren los mejores lugares de Albania.'
          },
          {
            id: 5,
            picture: LlogaraPass,
            sightName: 'Paso de Llogara',
            description: 'El paso de Llogara es uno de los lugares más famosos de Albania, y la carretera ofrece uno de los recorridos más espectaculares del mundo.'
          },
          {
            id: 6,
            picture: Berat,
            sightName: 'Berat',
            description: 'Berat se encuentra en el centro de Albania y se cree que es una de las ciudades más antiguas del país. Berat es a menudo conocida por su apodo, la Ciudad de las Mil Ventanas, debido a su mezcla de arquitectura otomana y albanesa.'
          },
        ]
      },
    }

  },
  {
    id: 3,
    picture: Peru,
    video: 'https://www.youtube.com/watch?v=wvdc8S1WoE8',
    lat: -12.0453,
    long: -77.0311,
    translateTo: {
      en:{
        countryName: 'The Republic of Peru',
        capitalName: 'Lima',
        lang: 'Spanish',
        description: 'This is a country in western South America. It is bordered in the north by Ecuador and Colombia, in the east by Brazil, in the southeast by Bolivia, in the south by Chile, and in the south and west by the Pacific Ocean. Peru is a megadiverse country with habitats ranging from the arid plains of the Pacific coastal region in the west to the peaks of the Andes mountains extending from the north to the southeast of the country to the tropical Amazon Basin rainforest in the east with the Amazon river.[9] At 1.28 million km2 (0.5 million mi2), Peru is the 19th largest country in the world, and the third largest in South America.',
        sights: [
          {
            id: 1,
            picture: IncaPisac,
            sightName: 'Inca Pisac',
            description: 'Spread out on the mountains above the bustling colonial village of Pisac are several impressive Inca ruins known as Inca Pisac. The ruins include a military citadel, religious temples, and individual dwellings, and overlooks the Sacred Valley. It is thought that Inca Písac defended the southern entrance to the valley and controlled a route which connected the Inca Empire with the border of the rain forest'
          },
          {
            id: 2,
            picture: Moray,
            sightName: 'Moray',
            description: 'Reached through the small town of Maras, Moray is an Inca site consisting of several enormous terraces carved into a huge earthen bowl. Each layer has its own micro-climate, according to how deep into the bowl it is. The temperature difference between the top and the bottom is as much as 15 °C (27 °F). For this reason, some theorize that the Incas used them as a kind of laboratory to determine the optimal conditions for growing crops of each species.'
          },
          {
            id: 3,
            picture: PlazaDeArmas,
            sightName: 'Plaza de Armas, Lima',
            description: 'The Plaza de Armas is where the city of Lima was born. Also known as the Plaza Mayor, it is the heart of the city, located in its historic district, with streets radiating out in a grid. The location was picked by the Spanish conquistador Francisco Pizarro in 1535. Today the plaza is flanked by a cathedral and several palaces'
          },
          {
            id: 4,
            picture: Kuelap,
            sightName: 'Kuelap',
            description: 'Kuelap combines ancient ruins with a cloud forest and the Amazon River. Kuelap is an ancient walled city built by the Chachapoyans, also known as the Cloud People, who lived where the Amazon carved a valley deeper than the Grand Canyon in the Andes. The fortress at Kuelap is the largest one in South America and pre-dates the Incas. Orchids and bromeliads grow inside the fortress.'
          },
          {
            id: 5,
            picture: CordilleraBlanca,
            sightName: 'Cordillera Blanca',
            description: 'Cordillera Blanca is a mountain adventurer’s dream, offering hiking, climbing and mountain biking. Located in northern Peru, it has 16 peaks more than 6,000 meters (19,000 feet) high, earning it the nickname of “the highest tropical mountain range in the world.” Part of the Andes, Peru’s highest mountain, Huascaran, is located here. Cordillera Blanca also is a good place to see ruins of pre-Inca cultures.'
          },
          {
            id: 6,
            picture: Sacsayhuaman,
            sightName: 'Sacsayhuaman',
            description: 'Sacsayhuaman is an ancient walled complex overlooking Cusco. The Incas built Cusco in the shape of a puma, which was one of their symbols, with Sacsayhuaman as its head. Sacsayhuaman is considered one of man’s greatest building feats. The fortress walls were built with huge boulders that dwarf humans; pieces were cut to fit so mortar wasn’t needed. The foundations can be seen today'
          },
        ]
      },
      ru:{
        countryName: 'Республика Перу',
        capitalName: 'Лима',
        lang: 'Испанский',
        description: 'Это страна на западе Южной Америки. Он граничит на севере с Эквадором и Колумбией, на востоке с Бразилией, на юго-востоке с Боливией, на юге с Чили, а на юге и западе с Тихим океаном. Перу - огромная страна с местом обитания, варьирующимся от засушливых равнин тихоокеанского прибрежного региона на западе до пиков Анд, простирающихся с севера на юго-восток страны до тропических лесов бассейна Амазонки на востоке с рекой Амазонка. . [9] Перу, занимающая 1,28 миллиона км2 (0,5 миллиона квадратных миль), является 19-й по величине страной в мире и третьей по величине страной в Южной Америке.',
        sights: [
          {
            id: 1,
            picture: IncaPisac,
            sightName: 'Инка Писак',
            description: 'В горах над шумной колониальной деревней Писак раскинулось несколько впечатляющих руин инков, известных как Писак инков. Руины включают военную цитадель, религиозные храмы и отдельные жилища и выходят на Священную долину. Считается, что инка Писак защищал южный вход в долину и контролировал маршрут, который соединял Империю инков с границей тропического леса.'
          },
          {
            id: 2,
            picture: Moray,
            sightName: 'Мурена',
            description: 'Достигнутый через небольшой городок Марас, Морей - это место инков, состоящее из нескольких огромных террас, вырезанных в огромной глиняной чаше. Каждый слой имеет свой микроклимат в зависимости от того, насколько глубоко он находится в чаше. Разница температур между верхом и низом составляет 15 ° C (27 ° F). По этой причине некоторые предполагают, что инки использовали их как своего рода лабораторию для определения оптимальных условий для выращивания сельскохозяйственных культур каждого вида.'
          },
          {
            id: 3,
            picture: PlazaDeArmas,
            sightName: 'Пласа-де-Армас, Лима',
            description: 'На площади Пласа-де-Армас родился город Лима. Также известный как Plaza Mayor, это сердце города, расположенное в его историческом районе, с улицами, расходящимися в виде сетки. Место было выбрано испанским конкистадором Франсиско Писарро в 1535 году. Сегодня площадь окружена собором и несколькими дворцами.'
          },
          {
            id: 4,
            picture: Kuelap,
            sightName: 'Куэлап',
            description: 'Куэлап сочетает в себе древние руины с облачным лесом и рекой Амазонка. Куэлап - это древний обнесенный стеной город, построенный чачапоянами, также известными как облачные люди, которые жили там, где Амазонка вырезала долину глубже Гранд-Каньона в Андах. Крепость в Куэлапе - самая большая в Южной Америке, построенная еще до инков. Внутри крепости растут орхидеи и бромелии.'
          },
          {
            id: 5,
            picture: CordilleraBlanca,
            sightName: 'Кордильера Бланка',
            description: 'Кордильера-Бланка - мечта любителей горных приключений, предлагающих пешие прогулки, скалолазание и катание на горных велосипедах. Расположенный на севере Перу, он имеет 16 вершин высотой более 6000 метров (19000 футов), за что получил прозвище «самый высокий тропический горный хребет в мире». Здесь находится часть Анд, самая высокая гора Перу, Уаскаран. Кордильера-Бланка также является хорошим местом, чтобы увидеть руины доинкских культур.'
          },
          {
            id: 6,
            picture: Sacsayhuaman,
            sightName: 'Саксайуаман',
            description: 'Саксайуаман - это древний обнесенный стеной комплекс с видом на Куско. Инки построили Куско в форме пумы, которая была одним из их символов, с Саксайуаманом во главе. Саксайуаман считается одним из величайших строительных подвигов человека. Стены крепости были построены из огромных валунов, которые затмевают людей; куски были обрезаны по размеру, поэтому раствор не понадобился. Фундамент можно увидеть сегодня'
          },
        ]
      },
      es:{
        countryName: 'La republica del Peru',
        capitalName: 'Lima',
        lang: 'Española',
        description: 'Este es un país en el oeste de América del Sur. Limita al norte con Ecuador y Colombia, al este con Brasil, al sureste con Bolivia, al sur con Chile y al sur y oeste con el Océano Pacífico. Perú es un país megadiverso con hábitats que van desde las llanuras áridas de la región costera del Pacífico en el oeste hasta los picos de las montañas de los Andes que se extienden desde el norte al sureste del país hasta la selva tropical de la cuenca del Amazonas en el este con el río Amazonas . [9] Con 1,28 millones de km2 (0,5 millones de mi2), Perú es el decimonoveno país más grande del mundo y el tercero más grande de América del Sur.',
        sights: [
          {
            id: 1,
            picture: IncaPisac,
            sightName: 'Inca Pisac',
            description: 'Repartidas en las montañas sobre el bullicioso pueblo colonial de Pisac se encuentran varias ruinas incas impresionantes conocidas como Inca Pisac. Las ruinas incluyen una ciudadela militar, templos religiosos y viviendas individuales, y tienen vista al Valle Sagrado. Se cree que Inca Písac defendió la entrada sur del valle y controló una ruta que conectaba el Imperio Inca con la frontera de la selva tropical.'
          },
          {
            id: 2,
            picture: Moray,
            sightName: 'Moray',
            description: 'Alcanzado a través del pequeño pueblo de Maras, Moray es un sitio Inca que consta de varias terrazas enormes talladas en un enorme cuenco de barro. Cada capa tiene su propio microclima, según la profundidad del cuenco. La diferencia de temperatura entre la parte superior e inferior es de hasta 15 ° C (27 ° F). Por esta razón, algunos teorizan que los incas los utilizaron como una especie de laboratorio para determinar las condiciones óptimas para el cultivo de cultivos de cada especie.'
          },
          {
            id: 3,
            picture: PlazaDeArmas,
            sightName: 'Plaza de Armas, Lima',
            description: 'La Plaza de Armas es donde nació la ciudad de Lima. También conocida como la Plaza Mayor, es el corazón de la ciudad, ubicado en su distrito histórico, con calles que se irradian en una cuadrícula. La ubicación fue elegida por el conquistador español Francisco Pizarro en 1535. Hoy la plaza está flanqueada por una catedral y varios palacios.'
          },
          {
            id: 4,
            picture: Kuelap,
            sightName: 'Kuelap',
            description: 'Kuelap combina ruinas antiguas con un bosque nuboso y el río Amazonas. Kuelap es una antigua ciudad amurallada construida por los chachapoyanos, también conocidos como la gente de las nubes, que vivían donde el Amazonas excavaba un valle más profundo que el Gran Cañón en los Andes. La fortaleza de Kuelap es la más grande de América del Sur y es anterior a los incas. Dentro de la fortaleza crecen orquídeas y bromelias.'
          },
          {
            id: 5,
            picture: CordilleraBlanca,
            sightName: 'Cordillera Blanca',
            description: 'Cordillera Blanca es el sueño de un aventurero de montaña, ya que ofrece senderismo, escalada y ciclismo de montaña. Ubicada en el norte de Perú, tiene 16 picos de más de 6.000 metros (19.000 pies) de altura, lo que le valió el sobrenombre de “la cadena montañosa tropical más alta del mundo”. Aquí se encuentra parte de los Andes, la montaña más alta del Perú, Huascarán. La Cordillera Blanca también es un buen lugar para ver ruinas de culturas preincaicas.'
          },
          {
            id: 6,
            picture: Sacsayhuaman,
            sightName: 'Sacsayhuaman',
            description: 'Sacsayhuaman es un antiguo complejo amurallado con vista a Cusco. Los incas construyeron Cusco en forma de puma, que era uno de sus símbolos, con Sacsayhuaman como cabeza. Sacsayhuaman se considera una de las mayores hazañas de construcción del hombre. Los muros de la fortaleza fueron construidos con enormes rocas que empequeñecen a los humanos; las piezas se cortaron para que encajaran de modo que no se necesitara mortero. Los cimientos se pueden ver hoy'
          },
        ]
      }
    }
  },
  {
    id: 4,
    picture: Canada,
    video: 'https://www.youtube.com/watch?v=FqrcRmGPWQc',
    lat: 45.4208,
    long: -75.69,
    translateTo: {
      en: {
        countryName: 'Canada',
        capitalName: 'Ottawa',
        lang: 'English, French',
        description: 'This is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres (3.85 million square miles), making it the worlds second-largest country by total area. Its southern and western border with the United States, stretching 8,891 kilometres (5,525 mi), is the worlds longest bi-national land border. Canadas capital is Ottawa, and its three largest metropolitan areas are Toronto, Montreal, and Vancouver.',

        sights: [
          {
            id: 1,
            picture: GrosMorneNationalPark,
            sightName: 'Gros Morne National Park',
            description: 'Gros Morne National Park in Newfoundland is important to the world, geologically, because the ancient rocks help people understand how the oceans and continents were created. The park is a nature lover’s paradise featuring lowlands along the Gulf of St. Lawrence and the alpine setting of the Long Range Mountains.'
          },
          {
            id: 2,
            picture: CalgaryStampede,
            sightName: 'Calgary Stampede',
            description: 'The Calgary Stampede, one of the most famous rodeos in the world, traces its origins back to the traveling wild west shows of the late 1800s and early 1900s. The Stampede has grown over the years, today attracting the best cowboys in the world who compete for $2 million in prize money.'
          },
          {
            id: 3,
            picture: VictoriasInnerHarbour,
            sightName: 'Victorias Inner Harbour',
            description: 'Victoria’s Inner Harbour on Vancouver Island is a cool place to visit. There’s the water on one side and stately government buildings on the other since Victoria is the capital of British Columbia. The city hosts a classic boat festival on Labour Day in September, with the harbor filling up with wooden boats.'
          },
          {
            id: 4,
            picture: BayOfFundy,
            sightName: 'Bay of Fundy',
            description: 'The Bay of Fundy, located on the Atlantic coast in eastern Canada, is famous for its high tidal range. Because of the unique shape of the bay, the difference in water level between high tide and low tide can be as much as 16 meters (52 feet).'
          },
          {
            id: 5,
            picture: AthabascaFalls,
            sightName: 'Athabasca Falls',
            description: 'Jasper National Park in the Alberta province is the largest of Canada’s Rocky Mountain Parks boasting broad valleys, rugged mountains, glaciers, forests, alpine meadows and wild rivers. One of the top attractions is Athabasca Falls, a beautiful waterfall that thunders through a narrow gorge.'
          },
          {
            id: 6,
            picture: NiagaraFallsOntario,
            sightName: 'Niagara Falls, Ontario',
            description: 'Many Americans think of Niagara Falls as being only a waterfall in the United States, namely New York, when in actuality, Niagara Falls is three falls on the border between the United States and Canada. Horseshoe Falls is the largest falls and is located mainly on the Canadian side, while the smaller American and Bridal Veil falls are mostly on the U.S. side.'
          },
        ]
      },
      ru: {
        countryName: 'Канада',
        capitalName: 'Оттава',
        lang: 'Английский французский',
        description: 'Это страна в северной части Северной Америки. Его десять провинций и три территории простираются от Атлантики до Тихого океана и на север до Северного Ледовитого океана, покрывая 9,98 миллиона квадратных километров (3,85 миллиона квадратных миль), что делает его второй по величине страной в мире по общей площади. Его южная и западная граница с США, протяженностью 8 891 км (5 525 миль), является самой длинной в мире сухопутной границей между двумя странами. Столица Канады - Оттава, а ее три крупнейших мегаполиса - Торонто, Монреаль и Ванкувер.',
        sights: [
          {
            id: 1,
            picture: GrosMorneNationalPark,
            sightName: 'Национальный парк Рос-Морн',
            description: 'Национальный парк Грос-Морн на Ньюфаундленде важен для мира с геологической точки зрения, потому что древние скалы помогают людям понять, как были созданы океаны и континенты. Этот парк - рай для любителей природы. Он включает в себя низины вдоль залива Святого Лаврентия и альпийскую местность Длинных гор.'
          },
          {
            id: 2,
            picture: CalgaryStampede,
            sightName: 'Калгари Стампид',
            description: 'Калгари Стампид, одно из самых известных родео в мире, восходит к путешествующим шоу на Диком Западе конца 1800-х - начала 1900-х годов. Stampede разросся с годами, и сегодня он привлекает лучших ковбоев мира, которые соревнуются за 2 миллиона долларов призовых.'
          },
          {
            id: 3,
            picture: VictoriasInnerHarbour,
            sightName: 'Внутренняя гавань Викториаса',
            description: 'Внутренняя гавань Виктории на острове Ванкувер - отличное место для посещения. С одной стороны вода, а с другой - величественные правительственные здания, поскольку Виктория - столица Британской Колумбии. В сентябре в День труда в городе проводится фестиваль классических лодок, при этом гавань заполняется деревянными лодками.'
          },
          {
            id: 4,
            picture: BayOfFundy,
            sightName: 'Залив Фанди',
            description: 'Залив Фанди, расположенный на атлантическом побережье в восточной части Канады, славится своим высоким уровнем приливов и отливов. Из-за уникальной формы залива разница в уровне воды между приливом и отливом может достигать 16 метров (52 фута).'
          },
          {
            id: 5,
            picture: AthabascaFalls,
            sightName: 'Водопад Атабаска',
            description: 'Национальный парк Джаспер в провинции Альберта является крупнейшим из канадских парков Скалистых гор с широкими долинами, скалистыми горами, ледниками, лесами, альпийскими лугами и дикими реками. Одна из главных достопримечательностей - водопад Атабаска, красивый водопад, который гремит через узкое ущелье.'
          },
          {
            id: 6,
            picture: NiagaraFallsOntario,
            sightName: 'Ниагарский водопад, Онтарио',
            description: 'Многие американцы думают, что Ниагарский водопад - это всего лишь водопад в Соединенных Штатах, а именно в Нью-Йорке, тогда как на самом деле Ниагарский водопад - это три водопада на границе между США и Канадой. Подковообразный водопад - самый большой водопад, расположенный в основном на канадской стороне, в то время как более мелкие водопады Американского водопада и Фата невесты в основном находятся на американской стороне.'
          },
        ]
      },
      es: {
        countryName: 'Canadá',
        capitalName: 'Ottawa',
        lang: 'Inglesa, Francesa',
        description: 'Este es un país en la parte norte de América del Norte. Sus diez provincias y tres territorios se extienden desde el Atlántico hasta el Pacífico y hacia el norte hasta el Océano Ártico, cubriendo 9,98 millones de kilómetros cuadrados (3,85 millones de millas cuadradas), lo que lo convierte en el segundo país más grande del mundo por área total. Su frontera sur y oeste con los Estados Unidos, que se extiende por 8.891 kilómetros (5.525 millas), es la frontera terrestre binacional más larga del mundo. La capital de Canadá es Ottawa, y sus tres áreas metropolitanas más grandes son Toronto, Montreal y Vancouver.',
        sights: [
          {
            id: 1,
            picture: GrosMorneNationalPark,
            sightName: 'Parque Nacional Gros Morne',
            description: 'El Parque Nacional Gros Morne en Terranova es importante para el mundo, geológicamente, porque las rocas antiguas ayudan a las personas a comprender cómo se crearon los océanos y los continentes. El parque es un paraíso para los amantes de la naturaleza con tierras bajas a lo largo del golfo de San Lorenzo y el entorno alpino de las montañas Long Range.'
          },
          {
            id: 2,
            picture: CalgaryStampede,
            sightName: 'Estampida de Calgary',
            description: 'El Calgary Stampede, uno de los rodeos más famosos del mundo, tiene sus orígenes en los espectáculos itinerantes del salvaje oeste de finales del siglo XIX y principios del XX. The Stampede ha crecido a lo largo de los años y hoy atrae a los mejores vaqueros del mundo que compiten por 2 millones de dólares en premios.'
          },
          {
            id: 3,
            picture: VictoriasInnerHarbour,
            sightName: 'Puerto interior de Victorias',
            description: 'El puerto interior de Victoria en la isla de Vancouver es un lugar genial para visitar. Está el agua a un lado y los majestuosos edificios gubernamentales al otro, ya que Victoria es la capital de la Columbia Británica. La ciudad alberga un festival de barcos clásico el Día del Trabajo en septiembre, y el puerto se llena de barcos de madera.'
          },
          {
            id: 4,
            picture: BayOfFundy,
            sightName: 'Bahía de Fundy',
            description: 'La bahía de Fundy, ubicada en la costa atlántica en el este de Canadá, es famosa por su rango de mareas altas. Debido a la forma única de la bahía, la diferencia en el nivel del agua entre la marea alta y la marea baja puede ser de hasta 16 metros (52 pies).'
          },
          {
            id: 5,
            picture: AthabascaFalls,
            sightName: 'Cataratas de Athabasca',
            description: 'El Parque Nacional Jasper en la provincia de Alberta es el más grande de los Parques de las Montañas Rocosas de Canadá y cuenta con amplios valles, montañas escarpadas, glaciares, bosques, prados alpinos y ríos salvajes. Una de las principales atracciones es Athabasca Falls, una hermosa cascada que truena a través de un estrecho desfiladero.'
          },
          {
            id: 6,
            picture: NiagaraFallsOntario,
            sightName: 'Cataratas del Niágara, Ontario',
            description: 'Muchos estadounidenses piensan que las Cataratas del Niágara son solo una cascada en los Estados Unidos, es decir, Nueva York, cuando en realidad, las Cataratas del Niágara son tres cataratas en la frontera entre los Estados Unidos y Canadá. Horseshoe Falls es la catarata más grande y se encuentra principalmente en el lado canadiense, mientras que las cataratas más pequeñas American y Bridal Veil se encuentran principalmente en el lado estadounidense.'
          },
        ]
      }
    }
  },
  {
    id: 5,
    picture: Iceland,
    video: 'https://www.youtube.com/watch?v=wwVoA_s60JQ',
    lat: 64.1353,
    long: -21.8952,
    translateTo: {
      en: {
        countryName: 'Iceland',
        capitalName: 'Reykjavik',
        lang: 'Icelandic',
        description: 'Iceland is volcanically and geologically active. The interior consists of a plateau characterised by sand and lava fields, mountains, and glaciers, and many glacial rivers flow to the sea through the lowlands. Iceland is warmed by the Gulf Stream and has a temperate climate, despite a high latitude just outside the Arctic Circle. Its high latitude and marine influence keep summers chilly, with most of its islands having a polar climate.',
        sights: [
          {
            id: 1,
            picture: Svartifoss,
            sightName: 'Svartifoss',
            description: 'Framed by black basalt hexagonal columns that hang down like the pipes of a giant organ, Svartifoss is one of Iceland’s most unusual looking waterfalls. Its name, which means Black Falls, comes from these dark columns. Svartifoss is located in the Vatnajokull National Park in southeast Iceland'
          },
          {
            id: 2,
            picture: BreidavikBeach,
            sightName: 'Breidavik Beach',
            description: 'Breidavik Beach is, arguably, Iceland’s most beautiful beach. It boasts pretty turquoise blue waters, rugged cliffs that have been carved by glaciers and a wide stretch of golden sand. It is a lovely area to go camping or to explore on an ATV as it is not a huge tourist destination'
          },
          {
            id: 3,
            picture: Seljalandsfoss,
            sightName: 'Seljalandsfoss',
            description: 'Seljalandsfoss is one of Iceland’s most popular waterfalls. Part of its popularity is probably due to the fact that visitors can actually walk behind this waterfall — a unique, perhaps once-in-a-lifetime opportunity for most. One word of warning — the path behind the falls is closed during the winter months'
          },
          {
            id: 4,
            picture: Askja,
            sightName: 'Askja',
            description: 'Askja is a huge caldera that is located in the Dyngjufjoll Mountains. It is a popular day tour that takes approximately 11 to 14 hours in total to complete. To reach Askja, visitors must first travel through Odadahraun, which is Iceland’s biggest desert.'
          },
          {
            id: 5,
            picture: Hallgrimskirkja,
            sightName: 'Hallgrimskirkja',
            description: 'It is hard to miss Hallgrimskirkja if you’re in Reykjavik. The church stands on the top of a hill, and its tower is 73 meters (244 feet) tall. Hallgrimskirkja was designed by the state architect Gudjon Samuelsson, who was inspired by Iceland’s amazing landscape, including its basalt lava flows, glaciers and mountains.'
          },
          {
            id: 6,
            picture: Laugavegur,
            sightName: 'Laugavegur',
            description: 'One of the best ways to get to know Iceland is by foot on the Laugavegur. At 79 km (49 miles), Laugavegur is Iceland’s longest hiking trail, stretching from Landmannalaugar to Skogar. This popular trail takes hikers through some of this country’s most gorgeous scenery and past geysers, glaciers, hot springs and waterfalls.'
          },
        ]
      },
      ru: {
        countryName: 'Исландия',
        capitalName: 'Рейкьявик',
        lang: 'Исландский',
        description: 'Исландия вулканически и геологически активна. Внутренняя часть состоит из плато с песчаными и лавовыми полями, горами и ледниками, а многие ледниковые реки текут в море через низменности. Исландия согревается Гольфстримом и имеет умеренный климат, несмотря на высокую широту за Полярным кругом. Его высокие широты и морское влияние делают лето прохладным, а на большинстве островов полярный климат.',
        sights: [
          {
            id: 1,
            picture: Svartifoss,
            sightName: 'Свартифосс',
            description: 'Свартифосс, обрамленный черными базальтовыми шестиугольными колоннами, свисающими, как трубы гигантского органа, является одним из самых необычных водопадов Исландии. Его название, что означает «Черный водопад», происходит от этих темных столбов. Свартифосс расположен в национальном парке Ватнайёкюдль на юго-востоке Исландии.'
          },
          {
            id: 2,
            picture: BreidavikBeach,
            sightName: 'Пляж Брейдавик',
            description: 'Пляж Брейдавик, пожалуй, самый красивый пляж Исландии. Он может похвастаться красивыми бирюзово-голубыми водами, крутыми скалами, вырезанными ледниками, и широкой полосой золотого песка. Это прекрасное место для кемпинга или путешествий на квадроцикле, так как это не очень популярное туристическое направление.'
          },
          {
            id: 3,
            picture: Seljalandsfoss,
            sightName: 'Сельяландсфосс',
            description: 'Сельяландсфосс - один из самых популярных водопадов Исландии. Частично его популярность, вероятно, связана с тем, что посетители действительно могут прогуляться за этим водопадом - уникальная, возможно, единственная в жизни возможность для большинства. Одно предупреждение - тропа за водопадом закрыта в зимние месяцы.'
          },
          {
            id: 4,
            picture: Askja,
            sightName: 'Аскья',
            description: 'Аскья - огромная кальдера, расположенная в горах Дынгьюфьолль. Это популярный однодневный тур, который в общей сложности занимает от 11 до 14 часов. Чтобы добраться до Аскья, посетители должны сначала пройти через Одадахраун, самую большую пустыню Исландии.'
          },
          {
            id: 5,
            picture: Hallgrimskirkja,
            sightName: 'Хатльгримскиркья',
            description: 'Трудно пропустить Халльгримскиркья, если вы находитесь в Рейкьявике. Церковь стоит на вершине холма, а ее башня имеет высоту 73 метра (244 фута). Хатльгримскиркья был спроектирован государственным архитектором Гуджоном Самуэльссоном, которого вдохновил удивительный ландшафт Исландии, в том числе потоки базальтовой лавы, ледники и горы.'
          },
          {
            id: 6,
            picture: Laugavegur,
            sightName: 'Лаугавегур',
            description: 'Один из лучших способов познакомиться с Исландией - пешком по Лаугавегур. Лейгавегур - самая длинная пешеходная тропа Исландии, простирающаяся от Ландманналаугара до Скогара, протяженностью 79 км (49 миль). Этот популярный маршрут проходит через одни из самых красивых пейзажей страны, мимо гейзеров, ледников, горячих источников и водопадов.'
          },
        ]
      },
      es: {
        countryName: 'Iceland',
        capitalName: 'Reykjavik',
        lang: 'Islandesa',
        description: 'Islandia es activa volcánica y geológicamente. El interior consiste en una meseta caracterizada por campos de arena y lava, montañas y glaciares, y muchos ríos glaciares fluyen hacia el mar a través de las tierras bajas. Islandia es calentada por la Corriente del Golfo y tiene un clima templado, a pesar de una alta latitud en las afueras del Círculo Polar Ártico. Su alta latitud e influencia marina mantienen los veranos fríos, y la mayoría de sus islas tienen un clima polar.',
        sights: [
          {
            id: 1,
            picture: Svartifoss,
            sightName: 'Svartifoss',
            description: 'Enmarcado por columnas hexagonales de basalto negro que cuelgan como los tubos de un órgano gigante, Svartifoss es una de las cascadas de aspecto más inusual de Islandia. Su nombre, que significa Black Falls, proviene de estas columnas oscuras. Svartifoss se encuentra en el Parque Nacional Vatnajokull en el sureste de Islandia.'
          },
          {
            id: 2,
            picture: BreidavikBeach,
            sightName: 'Playa de Breidavik',
            description: 'La playa de Breidavik es, posiblemente, la playa más hermosa de Islandia. Cuenta con hermosas aguas azul turquesa, acantilados escarpados que han sido tallados por glaciares y una amplia franja de arena dorada. Es una zona preciosa para acampar o explorar en cuatrimoto, ya que no es un gran destino turístico.'
          },
          {
            id: 3,
            picture: Seljalandsfoss,
            sightName: 'Seljalandsfoss',
            description: 'Seljalandsfoss es una de las cascadas más populares de Islandia. Parte de su popularidad se debe probablemente al hecho de que los visitantes pueden caminar detrás de esta cascada, una oportunidad única, quizás única en la vida para la mayoría. Una palabra de advertencia: el camino detrás de las cataratas está cerrado durante los meses de invierno.'
          },
          {
            id: 4,
            picture: Askja,
            sightName: 'Askja',
            description: 'Askja es una enorme caldera que se encuentra en las montañas Dyngjufjoll. Es un recorrido de un día popular que tarda aproximadamente de 11 a 14 horas en total en completarse. Para llegar a Askja, los visitantes deben viajar primero a través de Odadahraun, que es el desierto más grande de Islandia.'
          },
          {
            id: 5,
            picture: Hallgrimskirkja,
            sightName: 'Hallgrimskirkja',
            description: 'Es difícil perderse Hallgrimskirkja si estás en Reykjavik. La iglesia se encuentra en la cima de una colina y su torre mide 73 metros (244 pies) de altura. Hallgrimskirkja fue diseñado por el arquitecto estatal Gudjon Samuelsson, quien se inspiró en el asombroso paisaje de Islandia, incluidos sus flujos de lava basáltica, glaciares y montañas.'
          },
          {
            id: 6,
            picture: Laugavegur,
            sightName: 'Laugavegur',
            description: 'Una de las mejores formas de conocer Islandia es a pie por el Laugavegur. Con 79 km (49 millas), Laugavegur es la ruta de senderismo más larga de Islandia, que se extiende desde Landmannalaugar hasta Skogar. Este sendero popular lleva a los excursionistas a través de algunos de los paisajes más hermosos de este país y pasa por géiseres, glaciares, aguas termales y cascadas.'
          },
        ]
      }
    }
  },
  {
    id: 6,
    picture: Portugal,
    video: 'https://www.youtube.com/watch?v=KCgtPL1D6vM',
    lat: 38.7927,
    long: -9.18272,
    translateTo: {
      en: {
        countryName: 'The Portuguese Republic',
        capitalName: 'Lisbon',
        lang: 'Portuguese',
        description: 'is a country located on the Iberian Peninsula, in southwestern Europe. It is the westernmost sovereign state in mainland Europe, being bordered to the west and south by the Atlantic Ocean and to the north and east by Spain. Its territory also includes the Atlantic archipelagos of the Azores and Madeira, both autonomous regions with their own regional governments. The official and national language is Portuguese.',
        sights: [
          {
            id: 1,
            picture: AlcobacaMonastery,
            sightName: 'Alcobaca Monastery',
            description: 'The Alcobaça Monastery is a Roman Catholic Monastery located in the town of Alcobaça, in central Portugal. It was founded by the first Portuguese King, Afonso Henriques, in 1153, and maintained a close association with the Kings of Portugal throughout its history.'
          },
          {
            id: 2,
            picture: UniversityOfCoimbra,
            sightName: 'University of Coimbra',
            description: 'The University of Coimbra is one of the oldest, continuous universities in Europe, having been established in 1290. It also is one of the largest universities in Portugal, with approximately 20,000 students. There are many sections of interest within the university complex.'
          },
          {
            id: 3,
            picture: CaboGirao,
            sightName: 'Cabo Girao',
            description: 'Cabo Girão is located in the southern coast of Madeira, in the Portuguese archipelago with the same name. At 570 meters (1,870 feet), the cliff is often referred to as the highest sea cliff in Europe but at least three European cliffs are higher.'
          },
          {
            id: 4,
            picture: SaoJorgeCastle,
            sightName: 'Sao Jorge Castle',
            description: 'The São Jorge Castle is one of the top tourist attractions in Lisbon as it can be seen from all over the city. It dates back to Roman times, though the Moors rebuilt the fortifications in the 10th century. The castle was freed from Moorish rule in 1147 during the Siege of Lisbon in the Second Crusade.'
          },
          {
            id: 5,
            picture: ObidosCastle,
            sightName: 'Obidos Castle',
            description: 'Obidos Castle is an impressive structure that sits on a hill at Obidos, a small city that dates back to Roman times on Portugal’s Atlantic coast. The Moors built the castle sometime in the eighth century.'
          },
          {
            id: 6,
            picture: BelemTower,
            sightName: 'Belem Tower',
            description: 'Belem Tower, also known as the Tower of St. Vincent, sits on what once was an island in the Tagus River in Lisbon, the capital of Portugal. Dating back to 1515, the imposing tower was built both to defend Lisbon from invaders and to welcome the city’s friends.'
          },
        ]
      },
      ru: {
        countryName: 'Португальская Республика',
        capitalName: 'Лиссабон',
        lang: 'Португальский',
        description: 'Cтрана, расположенная на Пиренейском полуострове, в юго-западной Европе. Это самое западное суверенное государство континентальной Европы, граничащее на западе и юге с Атлантическим океаном, а на севере и востоке - с Испанией. Его территория также включает атлантические архипелаги Азорских островов и Мадейры, оба автономных региона со своими региональными правительствами. Официальный и национальный язык - португальский.',
        sights: [
          {
            id: 1,
            picture: AlcobacaMonastery,
            sightName: 'Монастырь Алкобака',
            description: 'Монастырь Алкобаса - это римско-католический монастырь, расположенный в городе Алкобаса в центральной Португалии. Он был основан первым португальским королем Афонсу Энрикесом в 1153 году и на протяжении всей своей истории поддерживал тесные связи с королями Португалии.'
          },
          {
            id: 2,
            picture: UniversityOfCoimbra,
            sightName: 'Коимбрский университет',
            description: 'Университет Коимбры - один из старейших непрерывных университетов Европы, основанный в 1290 году. Это также один из крупнейших университетов Португалии, в котором обучается около 20 000 студентов. В университетском комплексе есть много интересных участков.'
          },
          {
            id: 3,
            picture: CaboGirao,
            sightName: 'Кабо-Жирао',
            description: 'Кабо-Жирао расположен на южном побережье Мадейры, в одноименном португальском архипелаге. Скалу высотой 570 метров (1870 футов) часто называют самой высокой морской скалой в Европе, но по крайней мере три европейских скалы выше.'
          },
          {
            id: 4,
            picture: SaoJorgeCastle,
            sightName: 'Замок Сан-Хорхе',
            description: 'Замок Сан-Хорхе - одна из главных туристических достопримечательностей Лиссабона, так как его можно увидеть со всего города. Он восходит к римским временам, хотя мавры перестроили укрепления в 10 веке. Замок был освобожден от мавританского владычества в 1147 году во время осады Лиссабона во время Второго крестового похода.'
          },
          {
            id: 5,
            picture: ObidosCastle,
            sightName: 'Замок Бидо',
            description: 'Замок Обидуш - впечатляющее сооружение, расположенное на холме в Обидуше, небольшом городке, построенном во времена Римской империи на атлантическом побережье Португалии. Мавры построили замок где-то в восьмом веке.'
          },
          {
            id: 6,
            picture: BelemTower,
            sightName: 'Башня Белен',
            description: 'Башня Белен, также известная как Башня Святого Винсента, расположена на том, что когда-то было островом на реке Тежу в Лиссабоне, столице Португалии. Величественная башня 1515 года была построена как для защиты Лиссабона от захватчиков, так и для встречи друзей города.'
          },
        ]
      },
      es: {
        countryName: 'La república Portuguesa',
        capitalName: 'Lisboa',
        lang: 'Portuguesa',
        description: 'es un país ubicado en la Península Ibérica, en el suroeste de Europa. Es el estado soberano más occidental de la Europa continental, limita al oeste y al sur con el Océano Atlántico y al norte y al este con España. Su territorio también incluye los archipiélagos atlánticos de las Azores y Madeira, ambas regiones autónomas con sus propios gobiernos regionales. El idioma oficial y nacional es el portugués.',
        sights: [
          {
            id: 1,
            picture: AlcobacaMonastery,
            sightName: 'Monasterio de Alcobaca',
            description: 'El Monasterio de Alcobaça es un monasterio católico romano ubicado en la ciudad de Alcobaça, en el centro de Portugal. Fue fundada por el primer rey portugués, Afonso Henriques, en 1153, y mantuvo una estrecha asociación con los reyes de Portugal a lo largo de su historia.'
          },
          {
            id: 2,
            picture: UniversityOfCoimbra,
            sightName: 'Universidad de Coimbra',
            description: 'La Universidad de Coimbra es una de las universidades continuas más antiguas de Europa, ya que se estableció en 1290. También es una de las universidades más grandes de Portugal, con aproximadamente 20.000 estudiantes. Hay muchas secciones de interés dentro del complejo universitario.'
          },
          {
            id: 3,
            picture: CaboGirao,
            sightName: 'Cabo Girao',
            description: 'Cabo Girão se encuentra en la costa sur de Madeira, en el archipiélago portugués del mismo nombre. Con 570 metros (1.870 pies), el acantilado a menudo se conoce como el acantilado marino más alto de Europa, pero al menos tres acantilados europeos son más altos.'
          },
          {
            id: 4,
            picture: SaoJorgeCastle,
            sightName: 'Castillo de San Jorge',
            description: 'El Castillo de San Jorge es una de las principales atracciones turísticas de Lisboa, ya que se puede ver desde toda la ciudad. Se remonta a la época romana, aunque los moros reconstruyeron las fortificaciones en el siglo X. El castillo fue liberado del dominio árabe en 1147 durante el asedio de Lisboa en la Segunda Cruzada.'
          },
          {
            id: 5,
            picture: ObidosCastle,
            sightName: 'Castillo de Obidos',
            description: 'El castillo de Obidos es una estructura impresionante que se encuentra en una colina en Obidos, una pequeña ciudad que data de la época romana en la costa atlántica de Portugal. Los moros construyeron el castillo en algún momento del siglo VIII.'
          },
          {
            id: 6,
            picture: BelemTower,
            sightName: 'Torre Belén',
            description: 'La Torre de Belem, también conocida como la Torre de San Vicente, se encuentra en lo que una vez fue una isla en el río Tajo en Lisboa, la capital de Portugal. La imponente torre, que data de 1515, se construyó tanto para defender Lisboa de los invasores como para recibir a los amigos de la ciudad.'
          },
        ]
      }
    }
  },
  {
    id: 7,
    picture: Jordan,
    video: 'https://www.youtube.com/watch?v=npjIIfN1f-M',
    lat: 31.954,
    long: 35.9354,
    translateTo: {
      en: {
        countryName: 'The Hashemite Kingdom of Jordan',
        capitalName: 'Amman',
        lang: 'Arabic',
        description: 'is an Arab country in the Levant region of Western Asia, on the East Bank of the Jordan River. Jordan is bordered by Saudi Arabia, Iraq, Syria, Israel and Palestine (West Bank). The Dead Sea is located along its western borders and the country has a 26-kilometre (16 mi) coastline on the Red Sea in its extreme south-west.[8] Jordan is strategically located at the crossroads of Asia, Africa and Europe.[9] The capital, Amman, is Jordans most populous city as well as the countrys economic, political and cultural centre.',
        sights: [
          {
            id: 1,
            picture: Petra,
            sightName: 'Petra',
            description: 'Prepare to be amazed by Petra. One of the New7Wonders of the World, this attraction has wowed modern-day visitors since the long-lost citys rediscovery by Swiss explorer Jean Louis Burckhardt more than 200 years ago.'
          },
          {
            id: 2,
            picture: DeadSea,
            sightName: 'Dead Sea',
            description: 'Floating in the Dead Sea is a quintessential thing to do in Jordan. The lowest point on Earth accessible by road, this body of water is located at 418 meters below sea level. It practically glows an intense shade of aquamarine — a particularly striking sight next to salt-encrusted rock ledges and barren red mountains in the background.'
          },
          {
            id: 3,
            picture: WadiRum,
            sightName: 'Wadi Rum',
            description: 'Head to the southern region of Jordan, and youll be treated to one of the most spectacular landscapes across the globe: Wadi Rum. Also known as the Valley of the Moon, this sandstone and granite rock valley is an otherworldly experience, with towering cliffs, massive dunes, swirling archways, and caverns. It served as the set for much of the 1962 film Lawrence of Arabia and was tagged a UNESCO World Heritage Site in 2011.'
          },
          {
            id: 4,
            picture: JerashRuins,
            sightName: 'Jerash Ruins',
            description: 'Nothing feels more like traveling back in time than visiting the Jerash ruins. Its one of the worlds best-preserved ancient Roman cities and features spectacular places to visit, from colonnaded avenues and temples to a massive sports arena that once had a seating capacity of 15,000 spectators.'
          },
          {
            id: 5,
            picture: RomanRuinsInAmman,
            sightName: 'Roman Ruins in Amman',
            description: 'You dont have to go all the way to Petra to see fantastic archeological sites in Jordan. In fact, the capital Amman (where youll probably arrive from abroad) is home to a variety of fascinating ruins, many of which are within short walking distance from one another.'
          },
          {
            id: 6,
            picture: WadiMujib,
            sightName: 'Wadi Mujib',
            description: 'Stretching from the Desert Highway around 70 kilometers to the Dead Sea, Wadi Mujib is Jordans answer to Americas Grand Canyon. The river canyon, which is four kilometers wide and one kilometer deep, offers nature lovers the chance to explore unique scenery and see a plethora of wildlife, including Egyptian vultures, Nubian ibex, striped hyena, and the Syrian wolf.'
          },
        ]
      },
      ru: {
        countryName: 'Иорданское Хашимитское Королевство',
        capitalName: 'Амман',
        lang: 'Арабский',
        description: 'Арабская страна в регионе Левант в Западной Азии, на восточном берегу реки Иордан. Иордания граничит с Саудовской Аравией, Ираком, Сирией, Израилем и Палестиной (Западный берег). Мертвое море расположено вдоль его западных границ, и страна имеет 26-километровую береговую линию на Красном море на крайнем юго-западе. [8] Иордания стратегически расположена на перекрестке дорог Азии, Африки и Европы [9]. Столица, Амман, является самым густонаселенным городом Иордании, а также экономическим, политическим и культурным центром страны.',
        sights: [
          {
            id: 1,
            picture: Petra,
            sightName: 'Петра',
            description: 'Приготовьтесь восхищаться Петрой. Одно из Новых 7 чудес света, эта достопримечательность поражает современных посетителей с момента повторного открытия давно потерянных городов швейцарским исследователем Жаном Луи Буркхардтом более 200 лет назад.'
          },
          {
            id: 2,
            picture: DeadSea,
            sightName: 'Мертвое море',
            description: 'Плавать в Мертвом море - это квинтэссенция занятий в Иордании. Самая низкая точка на Земле, доступная по дороге, этот водоем находится на высоте 418 метров ниже уровня моря. Он практически светится насыщенным оттенком аквамарина - особенно поразительное зрелище рядом с засыпанными солью уступами скал и бесплодными красными горами на заднем плане.'
          },
          {
            id: 3,
            picture: WadiRum,
            sightName: 'Вади Рам',
            description: 'Отправляйтесь в южный регион Иордании, и вы попадете в один из самых захватывающих пейзажей мира: Вади-Рам. Эта долина из песчаника и гранитных скал, также известная как Долина Луны, представляет собой потусторонний мир с высокими скалами, массивными дюнами, закрученными арками и пещерами. Он служил декорациями для большей части фильма 1962 года Лоуренс Аравийский, а в 2011 году был внесен в список Всемирного наследия ЮНЕСКО.'
          },
          {
            id: 4,
            picture: JerashRuins,
            sightName: 'Руины Джераша',
            description: 'Нет ничего более похожего на путешествие во времени, чем посещение руин Джераша. Это один из наиболее хорошо сохранившихся древнеримских городов в мире, в котором есть захватывающие места для посещения: от проспектов с колоннами и храмов до огромной спортивной арены, которая когда-то вмещала 15 000 зрителей.'
          },
          {
            id: 5,
            picture: RomanRuinsInAmman,
            sightName: 'Римские руины в Аммане',
            description: 'Необязательно ехать до Петры, чтобы увидеть фантастические археологические памятники Иордании. Фактически, столица Амман (куда вы, вероятно, приедете из-за границы) является домом для множества увлекательных руин, многие из которых находятся в нескольких минутах ходьбы друг от друга.'
          },
          {
            id: 6,
            picture: WadiMujib,
            sightName: 'Вади Муджиб',
            description: 'Вади Муджиб, протянувшийся от пустынного шоссе примерно на 70 километров до Мертвого моря, является ответом Иордании на Большой каньон Америки. Речной каньон шириной четыре километра и глубиной в один километр предлагает любителям природы возможность исследовать уникальные пейзажи и увидеть множество диких животных, в том числе египетских стервятников, нубийских горных козлов, полосатых гиен и сирийских волков.'
          },
        ]
      },
      es: {
        countryName: 'El Reino Hachemita de Jordania',
        capitalName: 'Amman',
        lang: 'Arábica',
        description: 'es un país árabe de la región de Levante de Asia occidental, en la ribera oriental del río Jordán. Jordania limita con Arabia Saudita, Irak, Siria, Israel y Palestina (Cisjordania). El Mar Muerto se encuentra a lo largo de sus fronteras occidentales y el país tiene una costa de 26 kilómetros (16 millas) en el Mar Rojo en su extremo suroeste. Jordania está estratégicamente ubicada en la encrucijada de Asia, África y Europa. [9] La capital, Amman, es la ciudad más poblada de Jordan, así como el centro económico, político y cultural del país.',
        sights: [
          {
            id: 1,
            picture: Petra,
            sightName: 'Petra',
            description: 'Prepárate para sorprenderte con Petra. Una de las Nuevas 7 Maravillas del Mundo, esta atracción ha cautivado a los visitantes modernos desde el redescubrimiento de ciudades perdidas por el explorador suizo Jean Louis Burckhardt hace más de 200 años.'
          },
          {
            id: 2,
            picture: DeadSea,
            sightName: 'Mar Muerto',
            description: 'Flotar en el Mar Muerto es algo esencial para hacer en Jordania. El punto más bajo de la Tierra accesible por carretera, este cuerpo de agua se encuentra a 418 metros bajo el nivel del mar. Prácticamente brilla con un tono intenso de aguamarina, una vista particularmente sorprendente junto a los salientes de rocas con incrustaciones de sal y las áridas montañas rojas en el fondo.'
          },
          {
            id: 3,
            picture: WadiRum,
            sightName: 'Wadi Rum',
            description: 'Dirígete a la región sur de Jordania y disfrutarás de uno de los paisajes más espectaculares del mundo: Wadi Rum. También conocido como el Valle de la Luna, este valle de arenisca y rocas de granito es una experiencia de otro mundo, con acantilados imponentes, dunas enormes, arcos arremolinados y cavernas. Sirvió como escenario para gran parte de la película de 1962 Lawrence de Arabia y fue declarada Patrimonio de la Humanidad por la UNESCO en 2011.'
          },
          {
            id: 4,
            picture: JerashRuins,
            sightName: 'Ruinas de Jerash',
            description: 'Nada se siente más como viajar en el tiempo que visitar las ruinas de Jerash. Es una de las ciudades romanas antiguas mejor conservadas del mundo y cuenta con lugares espectaculares para visitar, desde templos y avenidas con columnas hasta un enorme estadio deportivo que alguna vez tuvo una capacidad para 15.000 espectadores.'
          },
          {
            id: 5,
            picture: RomanRuinsInAmman,
            sightName: 'Ruinas romanas en Ammán',
            description: 'No tienes que ir hasta Petra para ver fantásticos sitios arqueológicos en Jordania. De hecho, la capital Ammán (donde probablemente llegará del extranjero) alberga una variedad de ruinas fascinantes, muchas de las cuales se encuentran a poca distancia a pie unas de otras.'
          },
          {
            id: 6,
            picture: WadiMujib,
            sightName: 'Wadi Mujib',
            description: 'Wadi Mujib, que se extiende desde la Carretera del Desierto a unos 70 kilómetros hasta el Mar Muerto, es la respuesta de Jordan al Gran Cañón de las Américas. El cañón del río, que tiene cuatro kilómetros de ancho y un kilómetro de profundidad, ofrece a los amantes de la naturaleza la oportunidad de explorar paisajes únicos y ver una gran cantidad de vida silvestre, incluidos los buitres egipcios, la cabra montés de Nubia, la hiena rayada y el lobo sirio.'
          },
        ]
      }
    }
  },
  {
    id: 8,
    picture: CostaRica,
    video: 'https://www.youtube.com/watch?v=Ci--UvWrsbk',
    lat: 9.9333,
    long: -84.0833,
    translateTo: {
      en: {
        countryName: 'The Republic of Costa Rica',
        capitalName: 'San Jose',
        lang: 'spanish',
        description: ' is a country in Central America, bordered by Nicaragua to the north, the Caribbean Sea to the northeast, Panama to the southeast, the Pacific Ocean to the southwest, and Ecuador to the south of Cocos Island. It has a population of around 5 million[5][6] in a land area of 51,060 square kilometers (19,714 square miles). An estimated 333,980 people live in the capital and largest city, San José, with around 2 million people in the surrounding metropolitan area.',
        sights: [
          {
            id: 1,
            picture: ArenalVolcanoNationalPark,
            sightName: 'Arenal Volcano National Park & La Fortuna',
            description: 'Used to be one of the most active volcanoes in Costa Rica, the beautiful Arenal is indeed a sight to behold.Visit La Fortuna, a tiny town near the base of the volcano and you will not regret the sheer beauty.'
          },
          {
            id: 2,
            picture: CorcovadoNationalPark,
            sightName: 'Corcovado National Park & Drake Bay',
            description: 'Located on the gorgeous Osa Peninsula, the Corcovado National Park has been called as one of the most biodiverse places on earth.Together with Drake Bay, this region has become an ecotourism hot spot for those who want to be one with nature.'
          },
          {
            id: 3,
            picture: TamarindoPlayaLangostaPlayaGrande,
            sightName: 'Tamarindo, Playa Langosta & Playa Grande',
            description: 'Located along the north Pacific Coast, Tamarindo and its surrounding beaches are some of the most easily accessible beach towns in the region.Boasting crystal clear turquoise water and pristine weather, Tamarindo is one of the most popular tourist destinations for good reason.'
          },
          {
            id: 4,
            picture: ManuelAntonioManuelAntonioNationalPark,
            sightName: 'Manuel Antonio & Manuel Antonio National Park',
            description: 'What this park lacks in size, it makes up for in the incredible wealth of attractions found here.Stunning tropical beaches, an amazing array of birds and wildlife, rich dense forestation, easy accessibility and a plethora of things to do, all make this park one of the most popular tourist attractions in the country.'
          },
          {
            id: 5,
            picture: MonteverdeCloudForestReserve,
            sightName: 'Monteverde Cloud Forest Reserve',
            description: 'Shrouded in clouds, the stunning Monteverde Cloud Forest Reserve has a unique air of mystery to it.A distinctive mountain rainforest where the humidity is usually 100%, Monteverde is home to more than 3,000 species of animals and plants.'
          },
          {
            id: 6,
            picture: Matapalo,
            sightName: 'Matapalo',
            description: 'Matapalo is a small, laid-back beach village located at the tip of the Osa Peninsula in the southern portion of Puntarenas, filled with small cabinas and eco friendly bungalows that prompts guests to enjoy an all-encompassing experience with nature.'
          },
        ]
      },
      ru: {
        countryName: 'Республика Коста-Рика',
        capitalName: 'Сан - Хосе',
        lang: 'Испанский',
        description: 'Cтрана в Центральной Америке, граничащая с Никарагуа на севере, Карибским морем на северо-востоке, Панамой на юго-востоке, Тихим океаном на юго-западе и Эквадором на юге от острова Кокос. Его население составляет около 5 миллионов [5] [6] на территории в 51 060 квадратных километров (19 714 квадратных миль). По оценкам, 333 980 человек проживают в столице и крупнейшем городе Сан-Хосе, а около 2 миллионов человек проживают в окрестностях мегаполиса.',
        sights: [
          {
            id: 1,
            picture: ArenalVolcanoNationalPark,
            sightName: 'Национальный парк вулкана Ареналь и Ла Фортуна',
            description: 'Когда-то один из самых активных вулканов Коста-Рики, красивый Ареналь действительно заслуживает внимания. Посетите Ла Фортуна, крошечный городок у подножия вулкана, и вы не пожалеете о его красоте.'
          },
          {
            id: 2,
            picture: CorcovadoNationalPark,
            sightName: 'Национальный парк Корковадо и залив Дрейк',
            description: 'Национальный парк Корковадо, расположенный на великолепном полуострове Оса, был назван одним из самых биоразнообразных мест на земле. Вместе с заливом Дрейк этот регион стал горячей точкой экотуризма для тех, кто хочет быть наедине с природой.'
          },
          {
            id: 3,
            picture: TamarindoPlayaLangostaPlayaGrande,
            sightName: 'Тамариндо, Плайя Лангоста и Плайя Гранде',
            description: 'Тамариндо и окружающие его пляжи, расположенный на северном побережье Тихого океана, являются одними из наиболее легко доступных пляжных городов в регионе. Тамариндо с кристально чистой бирюзовой водой и нетронутой погодой является одним из самых популярных туристических направлений не зря.'
          },
          {
            id: 4,
            picture: ManuelAntonioManuelAntonioNationalPark,
            sightName: 'Мануэль Антонио и национальный парк Мануэля Антонио',
            description: 'Недостаток в этом парке компенсируется невероятным количеством достопримечательностей: потрясающие тропические пляжи, удивительное множество птиц и дикой природы, густые лесные массивы, легкая доступность и множество развлечений - все это делает этот парк одна из самых популярных туристических достопримечательностей страны.'
          },
          {
            id: 5,
            picture: MonteverdeCloudForestReserve,
            sightName: 'Заповедник Монтеверде Облачный лес',
            description: 'Окутанный облаками потрясающий заповедник Монтеверде Облачный лес обладает уникальной таинственной атмосферой. В своеобразном горном тропическом лесу, где влажность обычно составляет 100%, Монтеверде является домом для более 3000 видов животных и растений.'
          },
          {
            id: 6,
            picture: Matapalo,
            sightName: 'Матапало',
            description: 'Матапало - это небольшая спокойная пляжная деревня, расположенная на оконечности полуострова Оса в южной части Пунтаренаса, наполненная небольшими домиками и экологически чистыми бунгало, которые побуждают гостей насладиться всеобъемлющим отдыхом на природе.'
          },
        ]
      },
      es: {
        countryName: 'República de Costa Rica',
        capitalName: 'San Jose',
        lang: 'Española',
        description: 'es un país de Centroamérica, limita con Nicaragua al norte, el Mar Caribe al noreste, Panamá al sureste, el Océano Pacífico al suroeste y Ecuador al sur de la Isla del Coco. Tiene una población de alrededor de 5 millones [5] [6] en una superficie de 51.060 kilómetros cuadrados (19.714 millas cuadradas). Se estima que 333,980 personas viven en la capital y ciudad más grande, San José, con alrededor de 2 millones de personas en el área metropolitana circundante.',
        sights: [
          {
            id: 1,
            picture: ArenalVolcanoNationalPark,
            sightName: 'Parque Nacional Volcán Arenal y La Fortuna',
            description: 'Solía ​​ser uno de los volcanes más activos de Costa Rica, el hermoso Arenal es de hecho un espectáculo para la vista. Visite La Fortuna, una pequeña ciudad cerca de la base del volcán y no se arrepentirá de la pura belleza.'
          },
          {
            id: 2,
            picture: CorcovadoNationalPark,
            sightName: 'Parque Nacional Corcovado y Bahía Drake',
            description: 'Ubicado en la hermosa Península de Osa, el Parque Nacional Corcovado ha sido llamado como uno de los lugares con mayor biodiversidad en la tierra. Junto con la Bahía Drake, esta región se ha convertido en un punto de ecoturismo para aquellos que quieren ser uno con la naturaleza.'
          },
          {
            id: 3,
            picture: TamarindoPlayaLangostaPlayaGrande,
            sightName: 'Tamarindo, Playa Langosta y Playa Grande',
            description: 'Ubicada a lo largo de la costa del Pacífico norte, Tamarindo y sus playas circundantes son algunas de las ciudades costeras de más fácil acceso en la región. Con aguas cristalinas de color turquesa y un clima prístino, Tamarindo es uno de los destinos turísticos más populares por una buena razón.'
          },
          {
            id: 4,
            picture: ManuelAntonioManuelAntonioNationalPark,
            sightName: 'Manuel Antonio y Parque Nacional Manuel Antonio',
            description: 'Lo que le falta a este parque en tamaño, lo compensa con la increíble riqueza de atracciones que se encuentran aquí: impresionantes playas tropicales, una increíble variedad de aves y vida silvestre, una rica y densa forestación, fácil acceso y una gran cantidad de cosas que hacer, todo lo hace parque una de las atracciones turísticas más populares del país.'
          },
          {
            id: 5,
            picture: MonteverdeCloudForestReserve,
            sightName: 'Reserva Bosque Nuboso Monteverde',
            description: 'Envuelta en nubes, la impresionante Reserva del Bosque Nuboso de Monteverde tiene un aire único de misterio. Monteverde, una selva tropical de montaña distintiva donde la humedad suele ser del 100%, es el hogar de más de 3,000 especies de animales y plantas.'
          },
          {
            id: 6,
            picture: Matapalo,
            sightName: 'Matapalo',
            description: 'Matapalo es un pequeño y tranquilo pueblo de playa ubicado en la punta de la Península de Osa en la parte sur de Puntarenas, lleno de pequeñas cabañas y bungalows ecológicos que impulsa a los huéspedes a disfrutar de una experiencia integral con la naturaleza.'
          },
        ]
      }
    }
  }
];
