const data = [
    {
        id: 1,
        name: 'Kazi Nazrul Islam',
        born: 'May 24, 1899',
        district: 'Churulia',
        books: 'Agnibeena, Sanchita',
        property: 78000,
        img: 'https://images.prothomalo.com/prothomalo-english%2Fimport%2Fmedia%2F2014%2F05%2F29%2F5387333c00b6c-Nazrul-Islam.jpg?auto=format&fit=fill&bg=000000&q=35&w=1200'
    },
    {
        id: 2,
        name: 'Humayun Ahmed',
        born: 'November 13, 1948',
        district: 'Netrokona',
        books: 'Deyal, Opekkha',
        property: 150000,
        img: 'https://m.media-amazon.com/images/M/MV5BNTM5YmQ5ZGYtMzRiMC00ZmVkLWIzMGItYjkwMTRkZWIyMTk1XkEyXkFqcGdeQXVyNDI3NjcxMDA@._V1_.jpg'
    },
    {
        id: 3,
        name: 'Zahir Raihan',
        born: ' August 19, 1935',
        district: 'Feni',
        books: 'Ekushe February, Different Spring',
        property: 98000,
        img: 'https://m.media-amazon.com/images/M/MV5BMWJjNzUwNDEtMjU2ZS00ZDgzLWI5YTAtNjVlNTI0NDdiY2Q0XkEyXkFqcGdeQXVyNDI3NjcxMDA@._V1_UY1200_CR129,0,630,1200_AL_.jpg'
    }, {
        id: 4,
        name: 'Begum Rokeya',
        born: 'December 9, 1932',
        district: 'Rangpur',
        books: 'Sultana\'s Dream, Abarodh Basini',
        property: 87000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Begum_Rokeya.jpg'
    },
    {
        id: 5,
        name: 'Shamsur Rahman',
        born: 'October 23, 1929',
        district: 'Dhaka',
        books: 'The devotee, Shrestha Kabita',
        property: 80000,
        img: 'https://en.banglapedia.org/images/a/a1/RahmanShamsur.jpg'
    },
    {
        id: 6,
        name: 'Sufia Kamal',
        born: 'June 20, 1911',
        district: 'Barishal',
        books: 'Ekatturer Diary, Mrittikar Ghran',
        property: 72000,
        img: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Sufia_Kamal.jpg'
    },
    {
        id: 7,
        name: 'Nirmalendu Goon',
        born: 'June 21, 1945',
        district: 'Barhatta Upazila',
        books: 'Gadyasamagra, Racana',
        property: 79000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAEx5ZbSZhZ2vTEZ5xp-Byi3q3O9BpQTEqMdyx6X33IBwfOdjjuFspXz46y_jZNfvCWs&usqp=CAU'
    }, {
        id: 8,
        name: 'Jibanananda Das',
        born: ' February 17, 1899',
        district: 'Barishal',
        books: 'Rupasi Bangla, Jhara Palok',
        property: 92000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Jibanananda_Das_%281899%E2%80%931954%29.jpg/220px-Jibanananda_Das_%281899%E2%80%931954%29.jpg'
    },
    {
        id: 9,
        name: 'Jahanara Imam',
        born: 'May 3, 1929',
        district: 'Murshidabad',
        books: 'Anya Jiban, Ekattorer Dingulee',
        property: 89000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Jahanara_Imam_1957.jpg/330px-Jahanara_Imam_1957.jpg'
    },
    {
        id: 10,
        name: 'Humayun Azad',
        born: 'April 28, 1947',
        district: ' Munshiganj',
        books: 'Naree, Alukik Istimar',
        property: 110000,
        img: 'https://upload.wikimedia.org/wikipedia/bn/thumb/a/ac/%E0%A6%B9%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A7%81%E0%A6%A8_%E0%A6%86%E0%A6%9C%E0%A6%BE%E0%A6%A6_%28%E0%A7%A7%E0%A7%AF%E0%A7%AA%E0%A7%AD-%E0%A7%A8%E0%A7%A6%E0%A7%A6%E0%A7%AA%29.jpg/220px-%E0%A6%B9%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A7%81%E0%A6%A8_%E0%A6%86%E0%A6%9C%E0%A6%BE%E0%A6%A6_%28%E0%A7%A7%E0%A7%AF%E0%A7%AA%E0%A7%AD-%E0%A7%A8%E0%A7%A6%E0%A7%A6%E0%A7%AA%29.jpg'
    }, {
        id: 11,
        name: 'Jasimuddin',
        born: 'January 1, 1951',
        district: 'Faridpur',
        books: 'Rakhali, Baluchor',
        property: 94000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Jasimuddin_Lomax_1951_%282%29.jpg/330px-Jasimuddin_Lomax_1951_%282%29.jpg'
    },
    {
        id: 12,
        name: 'Muhammed Zafar Iqbal',
        born: ' December 23, 1952',
        district: 'Sylhet',
        books: 'Ami Topu, Tuknujil',
        property: 180000,
        img: 'https://www.sust.edu/uploads/profile-images/1513593908.jpg'
    },
]