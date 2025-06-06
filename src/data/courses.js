// Import teacher profile images
import filiusFlitwickImg from '../assets/proffesors_img/filius_flitwick.jpeg';
import minervaMcGonagallImg from '../assets/proffesors_img/minerva_mcgonagall.jpeg';
import alastorMoodyImg from '../assets/proffesors_img/alastor_moody.jpg';
import pomonaSproutImg from '../assets/proffesors_img/pomona_sprout.jpg';
import severusSnapeImg from '../assets/proffesors_img/severus_snape.jpg';
import auroraSinistraImg from '../assets/proffesors_img/aurora_sinistra.jpg';
import cuthbertBinnsImg from '../assets/proffesors_img/cuthbert_binns.jpeg';
import rubeusHagridImg from '../assets/proffesors_img/rubeus_hagrid.jpg';
import sybillTrelawneyImg from '../assets/proffesors_img/sybill_trelawney.jpg';
import rolandaHoochImg from '../assets/proffesors_img/rolanda_hooch.jpg';
import albusDumbledoreImg from '../assets/proffesors_img/albus_dumbledore.jpg';

const courses = [
  {
    id: '1',
    name: 'Trollformellära: Grunderna i Förtrollning',
    description: 'En introduktion till grundläggande trollformler och deras korrekta utförande.',
    longDescription: 'Denna kurs täcker de mest fundamentala trollformlerna, inklusive levitationsförtrollningar och ljusformler. Fokus ligger på stavrörelse, korrekt uttal och mental koncentration för att uppnå önskat resultat. Perfekt för förstaårsstudenter som vill bemästra magins grunder.',
    credits: 8,
    duration: '30 veckor',
    teacher: 'Professor Filius Flitwick',
    teacher_img: filiusFlitwickImg
  },
  {
    id: '2',
    name: 'Förvandlingskonst: Från Tändstickor till Nålar',
    description: 'Lär dig att förändra föremåls form och natur.',
    longDescription: 'I denna kurs utforskas principerna för förvandling, från enkla objektförvandlingar till mer komplexa transfigurationer. Studenterna kommer att öva på att förvandla icke-levande ting och förstå de etiska implikationerna av denna kraftfulla magi.',
    credits: 12,
    duration: '30 veckor',
    teacher: 'Professor Minerva McGonagall',
    teacher_img: minervaMcGonagallImg
  },
  {
    id: '3',
    name: 'Mörka Krafternas Försvar: Självskydd',
    description: 'Praktiska lektioner i att försvara sig mot mörk magi och varelser.',
    longDescription: 'Denna kurs är avgörande för varje ung häxa och trollkarl. Den fokuserar på defensiva trollformler, motförbannelser och strategier för att hantera hot från mörka varelser. Praktiska dueller och simuleringar ingår för att bygga upp studenternas självförtroende och förmåga att skydda sig själva och andra.',
    credits: 10,
    duration: '30 veckor',
    teacher: 'Professor Alastor "Galet Öga" Moody',
    teacher_img: alastorMoodyImg
  },
  {
    id: '4',
    name: 'Örtlära: Magiska Växter och Deras Användning',
    description: 'Studiet av magiska växter, deras egenskaper och hur de används i magi.',
    longDescription: 'Studenterna kommer att lära sig att identifiera, odla och vårda en mängd olika magiska växter, från skrikande Mandragor till livgivande Mimbulus Mimbletonia. Kursen innefattar praktiskt arbete i växthusen och undervisar om växternas användning i trolldrycker och medicin.',
    credits: 7.5,
    duration: '25 veckor',
    teacher: 'Professor Pomona Sprout',
    teacher_img: pomonaSproutImg
  },
  {
    id: '5',
    name: 'Trolldryckskonst: Brygdens Hemligheter',
    description: 'Konsten att blanda magiska drycker med precision och kunskap.',
    longDescription: 'Denna kurs kräver noggrannhet och tålamod. Studenterna kommer att studera de exakta proportionerna av ingredienser, rätt tillagningstemperaturer och de subtila effekterna av olika brygder. Från enkla sömnmedel till komplexa Polyjuice-drycker, kommer studenterna att utforska trolldryckskonstens djup.',
    credits: 11,
    duration: '28 veckor',
    teacher: 'Professor Severus Snape',
    teacher_img: severusSnapeImg
  },
  {
    id: '6',
    name: 'Astronomi: Himlens Magiska Kartor',
    description: 'Studiet av stjärnor, planeter och deras inflytande på magin.',
    longDescription: 'Lektionerna hålls i Astronomitornet under nattens mörker. Studenterna kommer att lära sig om himlakropparnas rörelser, stjärnbildernas betydelse och hur astrologiska händelser kan påverka magiska fenomen och trolldrycker.',
    credits: 6,
    duration: '20 veckor',
    teacher: 'Professor Aurora Sinistra',
    teacher_img: auroraSinistraImg
  },
  {
    id: '7',
    name: 'Magins Historia: Från Forntid till Nutid',
    description: 'En resa genom trollkarlsvärldens rika och komplexa historia.',
    longDescription: 'Denna kurs utforskar de stora magiska upptäckterna, de viktigaste trollkarlskrigen, de mest inflytelserika häxorna och trollkarlarna, samt utvecklingen av magiska lagar och samhällen. Studenterna kommer att lära sig av det förflutna för att förstå nuet.',
    credits: 5,
    duration: '22 veckor',
    teacher: 'Professor Cuthbert Binns (Spöke)',
    teacher_img: cuthbertBinnsImg
  },
  {
    id: '8',
    name: 'Vård av Magiska Varelser: Förståelse och Hantering',
    description: 'Lär dig om olika magiska varelsers beteende, vård och säkra hantering.',
    longDescription: 'Denna praktiska kurs äger rum utanför slottet, i den Förbjudna Skogen och dess omgivningar. Studenterna kommer att interagera med och lära sig om varelser som hippogriffer, thestraler och nifflare, och förstå vikten av att respektera och skydda den magiska faunan.',
    credits: 9.5,
    duration: '26 veckor',
    teacher: 'Professor Rubeus Hagrid',
    teacher_img: rubeusHagridImg
  },
  {
    id: '9',
    name: 'Spådomskonst: Att Tyda Framtiden',
    description: 'Utforska olika metoder för att förutsäga framtiden, inklusive teblad och kristallkulor.',
    longDescription: 'Denna kurs äger rum i det dimmiga och rökfyllda norra tornet. Studenterna introduceras till de mystiska konsterna att tyda tecken och symboler för att få insikt i framtiden. Kursen uppmuntrar intuition och öppenhet för det okända.',
    credits: 7,
    duration: '18 veckor',
    teacher: 'Professor Sybill Trelawney',
    teacher_img: sybillTrelawneyImg
  },
  {
    id: '10',
    name: 'Flygkonst: Grunderna i Kvastflygning',
    description: 'Praktisk undervisning i att flyga kvast och grundläggande manövrar.',
    longDescription: 'Förstaårsstudenter kommer att lära sig de grundläggande principerna för kvastflygning, inklusive att lyfta, sväva och landa säkert. Kursen är en introduktion till den spännande världen av flygmagi och är en förutsättning för Quidditch.',
    credits: 4,
    duration: '15 veckor',
    teacher: 'Madam Rolanda Hooch',
    teacher_img: rolandaHoochImg
  },
  {
    id: '11',
    name: 'Alkemins Mysterier: De Vises Sten',
    description: 'En fördjupning i alkemiska principer och sökandet efter de vises sten.',
    longDescription: 'Denna avancerade kurs är endast öppen för de mest begåvade studenterna. Den utforskar de komplexa teorierna och praktiska experimenten inom alkemi, med särskilt fokus på transmutationsprocessen och legenden om de vises sten. Etisk övervägande och djupgående forskning är centrala delar av kursen.',
    credits: 15,
    duration: '35 veckor',
    teacher: 'Albus Dumbledore',
    teacher_img: albusDumbledoreImg
  }
];

export default courses;