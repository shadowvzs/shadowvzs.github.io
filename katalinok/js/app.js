const birds = [
	{
		id: "1",
        description_hu: "meg nins kep - lehetséges türkiz hordozó",
        description_en: "still no image - potentional turq. bearer",
        sex_hu: "1 tojó",
        sex_en: "1 female",
		parents_hu: "Sötétzöld/türkiz+ino hím + szürkeszárnyú pallid/türkiz tojó",
		parents_en: "Dark green (turq.+ino bearer) male + greywings pallid/turq. female",		
        color_hu: "lutino",
        color_en: "lutino",
        price: 12000,
        family: 1,
        images: [
             "./img/1_4.jpg",
        ]
    },
	{
		id: "2",
        description_hu: "foto: az egyik cremino a szulokkel",
        description_en: "photo: one of the creminos with her parents",
        sex_hu: "1 tojó",
        sex_en: "1 female",
        color_hu: "cremino",
        color_en: "cremino",
		parents_hu: "Sötétzöld/türkiz+ino hím + szürkeszárnyú pallid/türkiz tojó",
		parents_en: "Dark green (turq.+ino bearer) male + greywings pallid/turq. female",
        price: 12000,
        family: 1,
        images: [
            "./img/29_1.jpg",
        ]
    },
	{
		id: "3",
        description_hu: "szurkeszarnyu (lehetséges türkiz hordozó)",
        description_en: "greywings (potentional turquoise brearer)",
        sex_hu: "1 him",
        sex_en: "1 male",
        color_hu: "lutino",
        color_en: "lutino",
		parents_hu: "Sötétzöld/türkiz+ino hím + szürkeszárnyú pallid/türkiz tojó",
		parents_en: "Dark green (turq.+ino bearer) male + greywings pallid/turq. female",
        price: 16000,
        family: 1,
        images: [
            "./img/31_1.jpg",
        ]
    },
	{
		id: "4",
        description_hu: "foglalva - szürkeszárnyú (lehetséges türkiz hordozó)",
        description_en: "reserverd - greywings (potentional turquoise brearer)",
        sex_hu: "1 him",
        sex_en: "1 male",
        color_hu: "Sötétzöld",
        color_en: "Dark green",
		parents_hu: "Sötétzöld/türkiz+ino hím + szürkeszárnyú pallid/türkiz tojó",
		parents_en: "Dark green (turq.+ino bearer) male + greywings pallid/turq. female",
        price: 10000,
        family: 1,
        images: [
            "./img/32_1.jpg",
			"./img/32_2.jpg"
        ]
    },
	{
		id: "5",
        description_hu: "foglalva szürkeszárnyú - 1f viola (ino hordozó)",
        description_en: "reserved greywings - 1f viola (ino bearer)",
        sex_hu: "1 him",
        sex_en: "1 male",
        color_hu: "Kobalt",
        color_en: "Cobalt",
		parents_hu: "Szürkeszárnyú cremino (1f) hím + kobalt tojó (1f viola)",
		parents_en: "Greywings cremino (1f) male + cobalt female (1f viola)",
        price: 13000,
        family: 2,
        images: [
            "./img/33_1.jpg",
            "./img/33_2.jpg",
            "./img/33_3.jpg"
        ]
    },
	{
		id: "6",
        description_hu: "foglalva - szürkeszárnyú (ino hordozó)",
        description_en: "reserved - greywings (ino bearer)",
        sex_hu: "1 him",
        sex_en: "1 male",
        color_hu: "Kobalt",
        color_en: "Cobalt",
		parents_hu: "Szürkeszárnyú cremino (1f) hím + kobalt tojó (1f viola)",
		parents_en: "Greywings cremino (1f) male + cobalt female (1f viola)",
        price: 13000,
        family: 2,
        images: [
            "./img/34_1.jpg",
            "./img/34_2.jpg",
        ]
    },	
	{
		id: "17",
        description_hu: "",
        description_en: "",
        sex_hu: "2 tojo",
        sex_en: "2 female",
        color_hu: "Kobalt",
        color_en: "Cobalt",
		parents_hu: "Szürkeszárnyú cremino (1f) hím + kobalt tojó (1f viola)",
		parents_en: "Greywings cremino (1f) male + cobalt female (1f viola)",
        price: 12000,
        family: 2,
        images: [
            "./img/37_1.jpg",
            "./img/37_2.jpg",
        ]
    },
/*	
	{
		id: "7",
        description_hu: "szürkeszárnyú",
        description_en: "greywings",
        sex_hu: "1 him",
        sex_en: "1 male",
        color_hu: "cremino",
        color_en: "cremino",
		parents_hu: "cremino (1f) tojo + szürkeszárnyú türkiz/ino him",
		parents_en: "cremino (1f) female + greywings turquoise/ino male",
        price: 16000,
        family: 2,
        images: [
            "./img/35_1.jpg",
			"./img/7_2.jpg"
        ]
    },
	*/
	{
		id: "8",
        description_hu: "foglalva",
        description_en: "reserved",
        sex_hu: "1 tojo",
        sex_en: "1 female",
        color_hu: "türkiz",
        color_en: "turquoise",
		parents_hu: "Szürkeszárnyú türkiz (ino hordozó) hím + cremino tojó",
		parents_en: "Greywings turquoise (ino bearer) male + cremino female",
        price: 13000,
        family: 3,
        images: [
            "./img/36_1.jpg"
        ]
    },
	
	{
		id: "9",
        description_hu: "",
        description_en: "",
        sex_hu: "1 tojo",
        sex_en: "1 female",
        color_hu: "cremino",
        color_en: "cremino",
		parents_hu: "Szürkeszárnyú türkiz (ino hordozó) hím + cremino tojó",
		parents_en: "Greywings turquoise (ino bearer) male + cremino female",
        price: 15000,
        family: 3,
        images: [
             "./img/35_1.jpg",
			 "./img/7_2.jpg"
        ]
    },	
	{
		id: "10",
        description_hu: "foglalva ha him",
        description_en: "reserved if male",
        sex_hu: "1 - dns tesztre eredmenyre var",
        sex_en: "1 - waiting for dna test",
        color_hu: "türkiz",
        color_en: "turquoise",
		parents_hu: "Szürkeszárnyú türkiz (ino hordozó) hím + cremino tojó",
		parents_en: "Greywings turquoise (ino bearer) male + cremino female",
        price: 13000,
        family: 3,
        images: [
            ""
        ]
    },
	{
		id: "11",
        description_hu: "",
        description_en: "",
        sex_hu: "1 - tojo",
        sex_en: "1 - female",
        color_hu: "lutino",
        color_en: "lutino",
		parents_hu: "Lutino him + zöld pallid tojó (1f szürkeszárnyú)",
		parents_en: "Lutino male + green pallid female (1f greywings)",
        price: 12000,
        family: 4,
        images: [
            "./img/42_1.jpg"
        ]
    },
	{
		id: "12",
        description_hu: "türkiz hordozó",
        description_en: "turquoise brearer",
        sex_hu: "1 tojo + 1 him",
        sex_en: "1 female + 1 male",
        color_hu: "lutino",
        color_en: "lutino",
		parents_hu: "Cremino him + lutino tojó",
		parents_en: "Cremino male + lutino female",
        price: 15000,
        family: 5,
        images: [
            "./img/39_1.jpg"
        ]
    },
	{
		id: "13",
        description_hu: "greywing",
        description_en: "greywings",
        sex_hu: "1 tojo + 1 him",
        sex_en: "1 female + 1 male",
        color_hu: "zöld",
        color_en: "green",
		parents_hu: "zöld (Szürkeszárnyú türkiz hordozó) him + pallid tojó",
		parents_en: "green (greywings, turquoise bearer) male + pallid female",
        price: 10000,
        family: 6,
        images: [
            "./img/43_1.jpg",
			"./img/43_2.jpg",
        ]
    },
	
	{
		id: "14",
        description_hu: "foglalva - türkiz hordozó",
        description_en: "reserved - turquoise brearer",
        sex_hu: "1 tojo",
        sex_en: "1 female",
        color_hu: "olajzöld",
        color_en: "olive green",
		parents_hu: "Olaj zöld (Szürkeszárnyú ino/türkiz hordozó) him + D. türkiz pallid tojó",
		parents_en: "Olive (greywings, ino/turquoise bearer) male + D. turquoise pallid female",
        price: 10000,
        family: 7,
        images: [
            "./img/44_1.jpg",
        ]
    },
	
	{
		id: "15",
        description_hu: "",
        description_en: "",
        sex_hu: "1 tojo",
        sex_en: "1 female",
        color_hu: "cremino",
        color_en: "cremino",
        price: 12000,
        family: 7,
        images: [
            "./img/45_1.jpg",
        ]
    },
	{
		id: "16",
        description_hu: "",
        description_en: "",
        sex_hu: "1 him",
        sex_en: "1 male",
        color_hu: "türkiz pallid",
        color_en: "turquoise pallid",
        price: 18000,
        family: 7,
        images: [
            "./img/22_1.jpg",
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
		
		try {
			const urlParams = new URLSearchParams(window.location.search);
			const lang = urlParams.get('lang');
			if (['en','hu'].includes(lang)) {
				this.switchLanguage(lang);
			}
		} catch (e) {
			// nothin
		}
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
        dna: "DNS teszt:",
		parents: "Szülők",
		multiplier: 1
    },
    en: {
        color: 'Color:',
        description: 'Note:',
        family: 'Brood:',
        forint: 'Ron',
        images: 'Images:',
        price: 'Price:',
        sex: 'Sex:',
        dna: "DNA teszt:",
		parents: "Parents: ",
		multiplier: 0.014
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
                <td>${tr[language].description}</td>
                <td>${item['description_'+language] || '-'}</td>
            </tr>` : ''}
            ${item['dna_'+language] ? `<tr>
                <td>${tr[language].dna}</td>
                <td>${item.dnaTest ? '&#x2713;' : '-'}</td>
            </tr>` : '' }
			<tr>
                <td>${tr[language].parents}</td>
                <td style="color: #777;font-style:italic">${item['parents_'+language] || '-'}</td>
            </tr>
            <tr>
                <td>${tr[language].price}</td>
                <td>${item.price * tr[language].multiplier + ' ' + tr[language].forint}</td>
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