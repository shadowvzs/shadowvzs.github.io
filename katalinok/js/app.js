const birds = [
/*
    {
        id: "1",
        description_hu: "fenntartva",
        description_en: "reserved",
        color_hu: "cremino",
        color_en: "cremino",
        sex_hu: "1 hím és 1 tojó",
        sex_en: "1 male and 1 female",
        price: 14000,
        dnaTest: true,
        family: 1,
        images: [
            "./img/1_1.jpg",
            "./img/1_2.jpg",
            "./img/1_3.jpg"
        ]
    },
	
    {
        id: "2",
        description_hu: "Egyfaktoros szürkeszárnyú",
        description_en: "Single factor, greywing",
        sex_hu: "1 hím",
        sex_en: "1 male",
        color_hu: "cremino",
        color_en: "cremino",
        price: 15000,
        dnaTest: true,
        family: 1,
        images: [
            "./img/2_1.jpg",
            "./img/2_2.jpg",
        ]
    },

    {
        id: "3",
        description_hu: "Türkiz hordozó",
        description_en: "Potential color mutation: turquoise",
        color_hu: "lutino",
        color_en: "lutino",
        sex_hu: "1 hím",
        sex_en: "1 male",
        price: 14000,
        dnaTest: true,
        family: 2,
        images: [
            "./img/3_1.jpg",
            "./img/3_2.jpg",
            "./img/3_3.jpg",
        ]
    },

    {
        id: "4",
        description_hu: "Szürkeszárnyú (lehetséges türkiz hordozó)",
        description_en: "greywing (potential color mutation: turquoise)",
        sex_hu: "1 hím",
        sex_en: "1 male",
        color_hu: "lutino",
        color_en: "lutino",
        price: 17000,
        dnaTest: true,
        family: 3,
        images: [
            "./img/4_1.jpg",
            "./img/4_2.jpg",
        ]
    },

    {
        id: "5",
        description_hu: "Fenntartva - Egyfaktoros szürkeszárnyú (inó hordozó és lehetséges türkiz hordozó)",
        description_en: "Reserved - Single factor, greywing (potential color mutation: ino and turquoise)",
        sex_hu: "1 hím",
        sex_en: "1 male",
        color_hu: "zöld",
        color_en: "green",
        price: 9000,
        family: 3,
        images: [
            "./img/5_1.jpg",
            "./img/5_2.jpg",
            "./img/5_3.jpg",
        ]
    },

    {
        id: "6",
        description_hu: "Fenntartva - Lehetséges türkiz hordozó",
        description_en: "Reserved - Turquoise parents",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "sötétzöld",
        color_en: "dark green",
        price: 8000,
        family: 3,
        images: [
            "./img/6_1.jpg",
            "./img/6_2.jpg",
        ]
    },

    {
        id: "7",
        description_hu: "Nem ivarvizsgált (öröklődés alapján tudható a neme).",
        description_en: "Doesn't have DNA test, but predictable.",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "cremino",
        color_en: "cremino",
        price: 12000,
        family: 4,
        images: [
            "./img/7_1.jpg",
        ]
    },

    {
        id: "8",
        description_hu: "Egyfaktoros szürkeszárnyú (türkiz és inó/pallid hordozók)",
        description_en: "Single factor, greywing, (potential color mutation: turquoise and ino/pallid)",
        sex_hu: "2 hím",
        sex_en: "2 male",
        color_hu: "zöld",
        color_en: "green",
        price: 10000,
        family: 5,
        images: [
            "./img/8_1.jpg",
            "./img/8_2.jpg",
            "./img/8_3.jpg",
            "./img/8_4.jpg",
        ]
    },
	
    {
        id: "9",
        description_hu: "",
        description_en: "(potential color mutation: ino/pallid)",
        sex_hu: "1 hím",
        sex_en: "1 male",
        color_hu: "zöld pallidinó",
        color_en: "green pallidino",
        dnaTest: true,
        price: 18000,
        family: 6,
        images: [
            "./img/9_1.jpg",
        ]
    },
	
    {
        id: "10",
        description_hu: "",
        description_en: "",
        sex_hu: "2 hím",
        sex_en: "2 male",
        color_hu: "zöld pallidinó",
        color_en: "green pallidino",
        price: 18000,
        family: 7,
        images: [
            "./img/10_1.jpg",
            "./img/10_2.jpg",
            "./img/10_3.jpg",
        ]
    },

    {
        id: "11",
        description_hu: "(kézzel nevelt)",
        description_en: "(hand raised)",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "lutino",
        color_en: "lutino",
        price: 18000,
        family: 6,
        images: [
            "./img/11_1.jpg",
            "./img/11_2.jpg",
        ]
    },
    {
        id: "12",
        description_hu: "(Pallid, türkiz hordozók)",
        description_en: "Greywing (potential color mutation: turquoise, pallid)",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "zöld",
        color_en: "green",
        price: 18000,
        family: 8,
        images: [
            "./img/12_1.jpg",
            "./img/12_2.jpg",
            "./img/12_3.jpg",
            "./img/12_4.jpg",
            "./img/12_5.jpg",
        ]
    },
	
    {
        id: "13",
        description_hu: "(türkiz hordozók)",
        description_en: "turquoise bearer (potential color mutation: pallid)",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "sötétzöld",
        color_en: "dark green",
        price: 9000,
        family: 8,
        images: [
            "./img/13_1.jpg",
            "./img/13_2.jpg",
        ]
    },
	
	{    
		id: "14",
        description_hu: "türkiz hordozó",
        description_en: "turquoise bearer",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "szürkeszárnyú lutino",
        color_en: "greywings lutino",
        price: 16000,
        family: 8,
        images: [
            "./img/14_1.jpg",
            "./img/14_2.jpg",
        ]
    },
	{
		id: "15",
        description_hu: "türkiz hordozó és lehetséges inó",
        description_en: "turquoise bearer and potentional ino bearer ",
        sex_hu: "1 hím",
        sex_en: "1 male",
        color_hu: "egyfaktoros szürkeszárnyú zöld",
        color_en: "single factor greywings green",
        price: 10000,
        family: 8,
        images: [
            "./img/15_1.jpg",
            "./img/15_2.jpg",            
        ]
    },
	{
		id: "16",
        description_hu: "lehetséges inó hordozó",
        description_en: "potentional ino bearer",
        sex_hu: "1 hím",
        sex_en: "1 male",
        color_hu: "egyfaktoros szürkeszárnyú kobalt",
        color_en: "single factor greywings cobalt",
        price: 12000,
        family: 8,
        images: [
            "./img/16_1.jpg",
            "./img/16_2.jpg",
        ]
    },

	{
		id: "17",
        description_hu: "türkiz hordozó - hobby madár",
        description_en: "turquoise bearer - hobby bird",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "szürkeszárnyú zöld",
        color_en: "greywings green",
        price: 5000,
        family: 9,
        images: [
            "./img/17_1.jpg",
            "./img/17_2.jpg",
        ]
    },
	
	{
		id: "18",
        description_hu: "",
        description_en: "",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "szürkeszárnyú türkiz",
        color_en: "greywings turquoise",
        price: 12000,
        family: 8,
        images: [
            "./img/18_1.jpg",
            "./img/18_2.jpg",
        ]
    },	
	
	{
		id: "19",
        description_hu: "",
        description_en: "",
        sex_hu: "2 tojó",
        sex_en: "2 female",
        color_hu: "lutino",
        color_en: "lution",
        price: 12000,
        family: 7,
        images: [
            "./img/19_1.jpg",
            "./img/19_2.jpg",
        ]
    },
	
	{
		id: "20",
        description_hu: "",
        description_en: "",
        sex_hu: "1 hím",
        sex_en: "1 male",
        color_hu: "szürkeszárnyú pallidinó",
        color_en: "greywings pallidino",
        price: 18000,
        family: 7,
        images: [
            "./img/20_1.jpg",
            "./img/20_2.jpg",
        ]
    },
	
	{
		id: "21",
        description_hu: "",
        description_en: "",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "szürkeszárnyú kobalt",
        color_en: "greywings cobalt",
        price: 12000,
        family: 8,
        images: [
            "./img/21_1.jpg",
            "./img/21_2.jpg",
        ]
    },
	*/
	{
		id: "22",
        description_hu: "",
        description_en: "",
        sex_hu: "1 hím",
        sex_en: "1 male",
        color_hu: "szürkeszárnyú türkiz pallidinó",
        color_en: "greywings turquoise pallidino",
        price: 999999,
        family: 1,
        images: [
            "./img/22_1.jpg",
        ]
    },
	{
		id: "23",
        description_hu: "",
        description_en: "",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "cremino",
        color_en: "cremino",
        price: 999999,
        family: 1,
        images: [
            "./img/23_1.jpg",
        ]
    },
	{
		id: "24",
        description_hu: "",
        description_en: "",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "olajzöld",
        color_en: "olive green",
        price: 999999,
        family: 1,
        images: [
            "./img/24_1.jpg",
        ]
    },
	{
		id: "25",
        description_hu: "türkiz hordozó",
        description_en: "turquoise bearer",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "lutino",
        color_en: "lutino ",
        price: 999999,
		dnaTest: true,
        family: 1,
        images: [
            "./img/25_1.jpg",
        ]
    },
	{
		id: "26",
        description_hu: "",
        description_en: "",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "lutino",
        color_en: "lutino ",
        price: 999999,
        family: 1,
        images: [
            "./img/26_1.jpg",
        ]
    },
	{
		id: "27",
        description_hu: "",
        description_en: "",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "lutino",
        color_en: "lutino ",
        price: 999999,
        family: 1,
        images: [
            "./img/27_1.jpg",
        ]
    },
]


class App {
    constructor() {
        this.language = 'hu';
        this.rootElem = document.querySelector('#root');

        this.switchLanguage = this.switchLanguage.bind(this);
        this.render = this.render.bind(this);

        Array.from(document.querySelectorAll('.language-toolbar img')).forEach(x => {
            const lang = x.dataset.lang;
            x.onclick = () => this.switchLanguage(lang);
        });

        this.render();
    }

    switchLanguage(language) {
        if (language === this.language) { return; }
        this.language = language;
        this.render();
    }

    render() {
        const txt = birds.map(x => itemTemplate(x, this.language)).join('');
        this.rootElem.innerHTML = txt;
    }
}

const tr = {
    hu: {
        color: 'Szin:',
        description: 'Megjegyzés:',
        family: 'Fészekalj:',
        forint: 'Ft',
        images: 'Képek:',
        price: 'Ár:',
        sex: 'Nem:',
        dna: "DNS teszt:"
    },
    en: {
        color: 'Color:',
        description: 'Note:',
        family: 'Brood:',
        forint: 'Huf',
        images: 'Images:',
        price: 'Price:',
        sex: 'Sex:',
        dna: "DNA teszt:"
    }
}

const renderImage = (url) => {
    return `<a href="${url}" target="_blank"><img src="${url}" height="128" /></a>`;
}

const itemTemplate = (item, language) => {
    return `
    <table>
        <tbody>
            <tr>
                <td>Id</td>
                <td>#${item.id}</td>
            </tr>
            <tr>
                <td>${tr[language].sex}</td>
                <td>${item['sex_'+language]}</td>
            </tr>
            <tr>
                <td>${tr[language].family}</td>
                <td>#${item.family}</td>
            </tr>
            <tr>
                <td>${tr[language].color}</td>
                <td>${item['color_'+language]}</td>
            </tr>
            ${item['description_'+language] ? `<tr>
                <td>${tr[language].dna}</td>
                <td>${item['description_'+language] || '-'}</td>
            </tr>` : ''}
            ${item['description_'+language] ? `<tr>
                <td>${tr[language].description}</td>
                <td>${item.dnaTest ? '&#x2713;' : '-'}</td>
            </tr>` : '' }
            <tr>
                <td>${tr[language].price}</td>
                <td>${item.price + ' ' + tr[language].forint}</td>
            </tr>
            <tr>               
                <td>${tr[language].images}</td>
                <td>${item.images.map(x => renderImage(x)).join('')}</td>
            </tr>
        </tbody>
    <table>
    `;
}

const app = new App();

// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }, false);

}, false);