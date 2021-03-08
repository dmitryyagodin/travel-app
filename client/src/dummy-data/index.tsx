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

export const Countries: Array<CountryItem> = [
  {
    id: 1,
    picture: Cuba,
    countryName: 'The Republic of Cuba',
    capitalName: 'Havana',
    lang: 'Spanish',
    description: 'This is a country comprising the island of Cuba, as well as Isla de la Juventud and several minor archipelagos. Cuba is located in the northern Caribbean where the Caribbean Sea, Gulf of Mexico and Atlantic Ocean meet. It is east of the Yucatán Peninsula (Mexico), south of both the U.S. state of Florida and the Bahamas, west of Hispaniola, and north of both Jamaica and the Cayman Islands. Havana is the largest city and capital; other major cities include Santiago de Cuba and Camagüey. The official area of the Republic of Cuba is 109,884 km2 (42,426 sq mi) (without the territorial waters). The main island of Cuba is the largest island in Cuba and in the Caribbean, with an area of 104,556 km2 (40,369 sq mi). Cuba is the second-most populous country in the Caribbean after Haiti, with over 11 million inhabitants.',
    video: 'https://www.youtube.com/watch?v=exfjK7rvLUY',
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
        sightName: 'BayOfPigs',
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
  {
    id: 2,
    picture: Albania,
    countryName: 'The Republic of Albania',
    capitalName: 'Tirana',
    lang: 'Albanian',
    description: 'is a country in Southeastern Europe. It is located on the Adriatic and Ionian Sea within the Mediterranean Sea, and shares land borders with Montenegro to the northwest, Kosovo[c] to the northeast, North Macedonia to the east, Greece to the south; and maritime borders with Greece, Montenegro and Italy to the west. Tirana is its capital and largest city, followed by Durrës, Vlorë and Shkodër.',
    video: 'https://www.youtube.com/watch?v=TcggfMkWgpg',
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
  {
    id: 3,
    picture: Peru,
    countryName: 'The Republic of Peru',
    capitalName: 'Lima',
    lang: 'Spanish',
    description: 'This is a country in western South America. It is bordered in the north by Ecuador and Colombia, in the east by Brazil, in the southeast by Bolivia, in the south by Chile, and in the south and west by the Pacific Ocean. Peru is a megadiverse country with habitats ranging from the arid plains of the Pacific coastal region in the west to the peaks of the Andes mountains extending from the north to the southeast of the country to the tropical Amazon Basin rainforest in the east with the Amazon river.[9] At 1.28 million km2 (0.5 million mi2), Peru is the 19th largest country in the world, and the third largest in South America.',
    video: 'https://www.youtube.com/watch?v=wvdc8S1WoE8',
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
  {
    id: 4,
    picture: Canada,
    countryName: 'Canada',
    capitalName: 'Ottawa',
    lang: 'English, French',
    description: 'This is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres (3.85 million square miles), making it the worlds second-largest country by total area. Its southern and western border with the United States, stretching 8,891 kilometres (5,525 mi), is the worlds longest bi-national land border. Canadas capital is Ottawa, and its three largest metropolitan areas are Toronto, Montreal, and Vancouver.',
    video: 'https://www.youtube.com/watch?v=FqrcRmGPWQc',
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
  {
    id: 5,
    picture: Iceland,
    countryName: 'Iceland',
    capitalName: 'Reykjavik',
    lang: 'Icelandic',
    description: 'Iceland is volcanically and geologically active. The interior consists of a plateau characterised by sand and lava fields, mountains, and glaciers, and many glacial rivers flow to the sea through the lowlands. Iceland is warmed by the Gulf Stream and has a temperate climate, despite a high latitude just outside the Arctic Circle. Its high latitude and marine influence keep summers chilly, with most of its islands having a polar climate.',
    video: 'https://www.youtube.com/watch?v=wwVoA_s60JQ',
    sights: [
      {
        id: 1,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 2,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 3,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 4,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 5,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 6,
        picture: '',
        sightName: '',
        description: ''
      },
    ]
  },
  {
    id: 6,
    picture: Portugal,
    countryName: 'The Portuguese Republic',
    capitalName: 'Lisbon',
    lang: 'Portuguese',
    description: 'is a country located on the Iberian Peninsula, in southwestern Europe. It is the westernmost sovereign state in mainland Europe, being bordered to the west and south by the Atlantic Ocean and to the north and east by Spain. Its territory also includes the Atlantic archipelagos of the Azores and Madeira, both autonomous regions with their own regional governments. The official and national language is Portuguese.',
    video: 'https://www.youtube.com/watch?v=KCgtPL1D6vM',
    sights: [
      {
        id: 1,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 2,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 3,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 4,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 5,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 6,
        picture: '',
        sightName: '',
        description: ''
      },
    ]
  },
  {
    id: 7,
    picture: Jordan,
    countryName: 'The Hashemite Kingdom of Jordan',
    capitalName: 'Amman',
    lang: 'Arabic',
    description: 'is an Arab country in the Levant region of Western Asia, on the East Bank of the Jordan River. Jordan is bordered by Saudi Arabia, Iraq, Syria, Israel and Palestine (West Bank). The Dead Sea is located along its western borders and the country has a 26-kilometre (16 mi) coastline on the Red Sea in its extreme south-west.[8] Jordan is strategically located at the crossroads of Asia, Africa and Europe.[9] The capital, Amman, is Jordans most populous city as well as the countrys economic, political and cultural centre.',
    video: 'https://www.youtube.com/watch?v=npjIIfN1f-M',
    sights: [
      {
        id: 1,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 2,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 3,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 4,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 5,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 6,
        picture: '',
        sightName: '',
        description: ''
      },
    ]
  },
  {
    id: 8,
    picture: CostaRica,
    countryName: 'The Republic of Costa Rica',
    capitalName: 'San Jose',
    lang: 'spanish',
    description: ' is a country in Central America, bordered by Nicaragua to the north, the Caribbean Sea to the northeast, Panama to the southeast, the Pacific Ocean to the southwest, and Ecuador to the south of Cocos Island. It has a population of around 5 million[5][6] in a land area of 51,060 square kilometers (19,714 square miles). An estimated 333,980 people live in the capital and largest city, San José, with around 2 million people in the surrounding metropolitan area.',
    video: 'https://www.youtube.com/watch?v=Ci--UvWrsbk',
    sights: [
      {
        id: 1,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 2,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 3,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 4,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 5,
        picture: '',
        sightName: '',
        description: ''
      },
      {
        id: 6,
        picture: '',
        sightName: '',
        description: ''
      },
    ]
  }
];
