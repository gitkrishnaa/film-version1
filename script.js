let content_div=document.getElementById("content");
const data = [];
for (let i = 0; i < 50; i++) {
  data[i] = i;
}
// data.map((a, i) => {
//   //note- i have used to save image location in same object so i can handle backed ,beacause i just have to handle only data /////object
 

//   data[i] = {
//     name: 'item' + i,
//     price: Math.round(1000 * Math.random() + 10),
//     rate: Math.round(Math.random() * 10) + '/' + '10',
    
//   };
// });

localStorage.setItem("link123","https://www.youtube.com/embed/YkVaEuo4Dps")
let videolink=localStorage.getItem("link123")
let render_data = (link1,name) => {
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
   content_div.appendChild(div1)
   div1.appendChild(div2)
  //  div2.style.width="100%"
  //  div2.style.height="100%"
  let link = document.createElement('img');
  div2.appendChild(link)
  link.setAttribute("src",link1);
  link.setAttribute("alter",name);
  link.style.width="100%"
  link.style.height="80%"

  let heading=document.createElement("p")
  div2.appendChild(heading)
  heading.innerText=name;
  //on hover size increase
  // div2.addEventListener("mouseover",()=>{
  //   div2.style.height="120%"
  //   div2.style.width="120%"

  // })

  
  
 
};

// const options1 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '79e65432edmsh75f75f9f858b1b9p133fdajsnde87bc38d3b3',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	}
// };

// fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
let arr=[
  [
    "tt1630029",
    "tt11564570",
    "tt0499549",
    "tt10640346",
    "tt15398776",
    "tt12003946",
    "tt11813216",
    "tt6443346",
    "tt1517268",
    "tt1488589",
    "tt12593682",
    "tt0314331",
    "tt0097958",
    "tt8946378",
    "tt10999120",
    "tt0099785",
    "tt0085334",
    "tt13833688",
    "tt1745960",
    "tt14208870",
    "tt0170016",
    "tt17220704",
    "tt13560574",
    "tt10304142",
    "tt0319343",
    "tt9764362",
    "tt0038650",
    "tt0047673",
    "tt6710474",
    "tt7322224",
    "tt0095016",
    "tt10168670",
    "tt9114286",
    "tt10298840",
    "tt3915174",
    "tt2709692",
    "tt0104431",
    "tt12530246",
    "tt0338348",
    "tt0111070",
    "tt0092099",
    "tt0096061",
    "tt23722792",
    "tt12193804",
    "tt0059742",
    "tt0457939",
    "tt1877830",
    "tt15791034",
    "tt0101272",
    "tt0096446",
    "tt1392214",
    "tt10731256",
    "tt4729430",
    "tt15474916",
    "tt14369780",
    "tt0110527",
    "tt11847410",
    "tt15528292",
    "tt10931784",
    "tt14176542",
    "tt0196229",
    "tt12261776",
    "tt14715170",
    "tt8623904",
    "tt11116912",
    "tt10954984",
    "tt8760708",
    "tt17663992",
    "tt19770238",
    "tt13007592",
    "tt11138512",
    "tt1067106",
    "tt1757678",
    "tt15255876",
    "tt14444726",
    "tt1016150",
    "tt0304669",
    "tt14147224",
    "tt3850590",
    "tt14456350",
    "tt0039628",
    "tt0104940",
    "tt0120338",
    "tt13229894",
    "tt20917338",
    "tt4593060",
    "tt14109724",
    "tt16233952",
    "tt0241527",
    "tt4589218",
    "tt11112808",
    "tt0369436",
    "tt0068646",
    "tt0388419",
    "tt9411972",
    "tt0106220",
    "tt7405458",
    "tt6359956",
    "tt3704428",
    
  ]

];



  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '79e65432edmsh75f75f9f858b1b9p133fdajsnde87bc38d3b3',
  //     'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  //   }
  // };
  
  // fetch('https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies?currentCountry=US&purchaseCountry=US&homeCountry=US', options)
  //   .then(response => response.json())
    
   
  //   .then(response => {console.log(response)
  //   arr=[...response];

    
 





    
 
  //   const options1 = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '79e65432edmsh75f75f9f858b1b9p133fdajsnde87bc38d3b3',
  //       'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  //     }
  //   };
    
  //   fetch('https://online-movie-database.p.rapidapi.com/title/tt12593682', options1)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  // //     .catch(err => console.error(err));


  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '79e65432edmsh75f75f9f858b1b9p133fdajsnde87bc38d3b3',
  //     'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  //   }
  // };
  
  // fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${"tt3704428"}`, options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
  let a1=[
    {
        "id": "/title/tt2025709/",
        "title": "Top 100 Number Ones",
        "titleType": "tvMovie",
        "year": 2011,
        "principals": [
            {
                "disambiguation": "I",
                "id": "/name/nm0134244/",
                "legacyNameText": "Cannon, Nick (I)",
                "name": "Nick Cannon",
                "category": "self",
                "characters": [
                    "Self"
                ],
                "roles": [
                    {
                        "character": "Self"
                    }
                ]
            },
            {
                "id": "/name/nm1484270/",
                "legacyNameText": "Shum Jr., Harry",
                "name": "Harry Shum Jr.",
                "category": "self",
                "characters": [
                    "Self"
                ],
                "roles": [
                    {
                        "character": "Self"
                    }
                ]
            },
            {
                "id": "/name/nm2179180/",
                "legacyNameText": "Wesley, Rutina",
                "name": "Rutina Wesley",
                "category": "self",
                "characters": [
                    "Self"
                ],
                "roles": [
                    {
                        "character": "Self"
                    }
                ]
            }
        ]
    },
    {
        "id": "/title/tt2237978/",
        "title": "Top 100 Video Games of All Time",
        "titleType": "tvMovie",
        "year": 2012,
        "principals": [
            {
                "disambiguation": "I",
                "id": "/name/nm0085312/",
                "legacyNameText": "Black, Jack (I)",
                "name": "Jack Black",
                "category": "self",
                "characters": [
                    "Self"
                ],
                "roles": [
                    {
                        "character": "Self"
                    }
                ]
            },
            {
                "disambiguation": "I",
                "id": "/name/nm1837691/",
                "legacyNameText": "Boyd, Michele (I)",
                "name": "Michele Boyd",
                "category": "self",
                "characters": [
                    "Self"
                ],
                "roles": [
                    {
                        "character": "Self"
                    }
                ]
            },
            {
                "id": "/name/nm3740082/",
                "legacyNameText": "Chobot, Jessica",
                "name": "Jessica Chobot",
                "category": "self",
                "characters": [
                    "Self"
                ],
                "roles": [
                    {
                        "character": "Self"
                    }
                ]
            }
        ]
    },
    {
        "id": "/title/tt14862082/",
        "image": {
            "height": 629,
            "id": "/title/tt14862082/images/rm2949315073",
            "url": "https://m.media-amazon.com/images/M/MV5BNWRkNjBhMDgtMTFiMC00YjFjLThlYjctYWM3ZDU3NjNlOWM1XkEyXkFqcGdeQXVyMzIyNjQxODE@._V1_.jpg",
            "width": 1167
        },
        "runningTimeInMinutes": 50,
        "nextEpisode": "/title/tt14872946/",
        "numberOfEpisodes": 5,
        "seriesStartYear": 2020,
        "title": "Top 100 Weather Moments",
        "titleType": "tvSeries",
        "year": 2020,
        "principals": [
            {
                "id": "/name/nm1101507/",
                "legacyNameText": "Cantore, Jim",
                "name": "Jim Cantore",
                "category": "self",
                "characters": [
                    "Self - Storm Tracker"
                ],
                "endYear": 2020,
                "episodeCount": 5,
                "roles": [
                    {
                        "character": "Self - Storm Tracker"
                    }
                ],
                "startYear": 2020
            },
            {
                "id": "/name/nm0197405/",
                "legacyNameText": "Daingerfield, Michael",
                "name": "Michael Daingerfield",
                "category": "self",
                "characters": [
                    "Self - Narrator"
                ],
                "endYear": 2020,
                "episodeCount": 5,
                "roles": [
                    {
                        "character": "Self - Narrator"
                    }
                ],
                "startYear": 2020
            },
            {
                "id": "/name/nm3372586/",
                "legacyNameText": "Knabb, Rick",
                "name": "Rick Knabb",
                "category": "self",
                "characters": [
                    "Self - Hurricane Expert"
                ],
                "endYear": 2020,
                "episodeCount": 5,
                "roles": [
                    {
                        "character": "Self - Hurricane Expert"
                    }
                ],
                "startYear": 2020
            }
        ]
    },
    {
        "id": "/title/tt15235314/",
        "image": {
            "height": 720,
            "id": "/title/tt15235314/images/rm852163841",
            "url": "https://m.media-amazon.com/images/M/MV5BY2Q3OTRkYjAtZmVhOS00MTljLWFhNjgtOGMyNzg4NjdjYmM0XkEyXkFqcGdeQXVyNDkwMzY5NjQ@._V1_.jpg",
            "width": 1280
        },
        "title": "TOP 100 MOMENTS OF THE 2018 19 NBA SEASON",
        "titleType": "video",
        "year": 2019
    },
    {
        "id": "/title/tt12416932/",
        "runningTimeInMinutes": 20,
        "title": "Top 100 Goals of the Season 2017/18",
        "titleType": "short",
        "year": 2018
    },
    {
        "id": "/title/tt4705444/",
        "numberOfEpisodes": 0,
        "seriesStartYear": 2014,
        "title": "TOP 100: Anna Selezneva VF Models",
        "titleType": "tvSeries",
        "year": 2014,
        "principals": [
            {
                "id": "/name/nm7346328/",
                "legacyNameText": "Selezneva, Anna",
                "name": "Anna Selezneva",
                "billing": 1,
                "category": "self",
                "characters": [
                    "Self"
                ],
                "roles": [
                    {
                        "character": "Self"
                    }
                ]
            }
        ]
    },
    {
        "id": "/title/tt8252874/",
        "image": {
            "height": 900,
            "id": "/title/tt8252874/images/rm3225830144",
            "url": "https://m.media-amazon.com/images/M/MV5BY2ViYTdlY2QtYWU3NC00Mjc5LThlZjUtYzM2MTg2YzZkYmYzXkEyXkFqcGdeQXVyNjk1NzUxMDQ@._V1_.jpg",
            "width": 900
        },
        "nextEpisode": "/title/tt14959258/",
        "numberOfEpisodes": 20,
        "seriesStartYear": 2014,
        "title": "Top15s",
        "titleType": "tvSeries",
        "year": 2014,
        "principals": [
            {
                "id": "/name/nm9733263/",
                "legacyNameText": "Chills",
                "name": "Chills",
                "category": "actor",
                "endYear": 2015,
                "episodeCount": 1,
                "startYear": 2015
            }
        ]
    },
    {
        "id": "/title/tt14993080/",
        "title": "IGN's Top 100 TV Shows of All-Time",
        "titleType": "tvSpecial",
        "year": 2017
    },
    {
        "id": "/title/tt2099456/",
        "numberOfEpisodes": 0,
        "seriesStartYear": 2011,
        "title": "Top 100 Hip Hop Hits",
        "titleType": "tvSeries",
        "year": 2011,
        "principals": [
            {
                "id": "/name/nm1722577/",
                "legacyNameText": "DJ Khaled",
                "name": "DJ Khaled",
                "category": "self",
                "characters": [
                    "Self - Host"
                ],
                "roles": [
                    {
                        "character": "Self - Host"
                    }
                ]
            },
            {
                "id": "/name/nm1950811/",
                "legacyNameText": "Royce Da 5'9''",
                "name": "Royce Da 5'9''",
                "as": "Royce Da 59",
                "category": "self",
                "characters": [
                    "Self - Host"
                ],
                "roles": [
                    {
                        "character": "Self - Host"
                    }
                ]
            }
        ]
    },
    {
        "id": "/title/tt17732494/",
        "nextEpisode": "/title/tt17734206/",
        "parentTitle": {
            "id": "/title/tt17497914/",
            "title": "Locked on Chiefs - Daily Podcast on the Kansas City Chiefs",
            "titleType": "podcastSeries",
            "year": 2016
        },
        "previousEpisode": "/title/tt21680832/",
        "seriesStartYear": 2016,
        "title": "Top100 Chiefs and Justin Houston's 2018 season - 6/6",
        "titleType": "podcastEpisode",
        "year": 2018
    },
    {
        "id": "/title/tt8934918/",
        "image": {
            "height": 883,
            "id": "/title/tt8934918/images/rm272459776",
            "url": "https://m.media-amazon.com/images/M/MV5BNDdlZDBmNjUtNWIwOS00YmUzLWEyMmQtNDIzNWQzYWFjN2QwXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
            "width": 600
        },
        "runningTimeInMinutes": 135,
        "title": "Kakshi: Amminippilla",
        "titleType": "movie",
        "year": 2019,
        "principals": [
            {
                "disambiguation": "II",
                "id": "/name/nm3981484/",
                "legacyNameText": "Ali, Asif (II)",
                "name": "Asif Ali",
                "billing": 1,
                "category": "actor",
                "characters": [
                    "Adv. Pradeepan Manjodi"
                ],
                "roles": [
                    {
                        "character": "Adv. Pradeepan Manjodi"
                    }
                ]
            },
            {
                "id": "/name/nm3843863/",
                "legacyNameText": "Siddique, Ahamed",
                "name": "Ahamed Siddique",
                "billing": 2,
                "category": "actor",
                "characters": [
                    "Shajith Kumar Amminippilla"
                ],
                "roles": [
                    {
                        "character": "Shajith Kumar Amminippilla"
                    }
                ]
            },
            {
                "id": "/name/nm10683291/",
                "legacyNameText": "Shibla, Fara",
                "name": "Fara Shibla",
                "billing": 3,
                "category": "actress",
                "characters": [
                    "Kanthi Sivadasan"
                ],
                "roles": [
                    {
                        "character": "Kanthi Sivadasan"
                    }
                ]
            }
        ]
    },
    {
        "id": "/title/tt12331988/",
        "image": {
            "height": 900,
            "id": "/title/tt12331988/images/rm1781773825",
            "url": "https://m.media-amazon.com/images/M/MV5BNjIzMDU3MTMtNWI3Zi00N2VjLTljMDUtYTljZTc2NDMxNzRmXkEyXkFqcGdeQXVyNDUwOTEwMTY@._V1_.jpg",
            "width": 1599
        },
        "title": "Top 10 Adult Anime",
        "titleType": "tvSpecial",
        "year": 2018,
        "principals": [
            {
                "id": "/name/nm11485313/",
                "legacyNameText": "Gracie, John",
                "name": "John Gracie",
                "attr": [
                    "voice"
                ],
                "category": "actor",
                "characters": [
                    "Fade Dragontear"
                ],
                "roles": [
                    {
                        "character": "Fade Dragontear"
                    }
                ]
            }
        ]
    },
    {
        "id": "/title/tt12340148/",
        "image": {
            "height": 1080,
            "id": "/title/tt12340148/images/rm1093907969",
            "url": "https://m.media-amazon.com/images/M/MV5BMjhiOTM5ZWEtYmNhZi00ZDY1LThhOWItMWFiOGM2MDFiNDVhXkEyXkFqcGdeQXVyNDUwOTEwMTY@._V1_.jpg",
            "width": 1920
        },
        "title": "Top 10 Adult Cartoons (Uncensored Cut)",
        "titleType": "tvSpecial",
        "year": 2015,
        "principals": [
            {
                "id": "/name/nm11485313/",
                "legacyNameText": "Gracie, John",
                "name": "John Gracie",
                "attr": [
                    "voice"
                ],
                "category": "actor",
                "characters": [
                    "Fade Dragontear"
                ],
                "roles": [
                    {
                        "character": "Fade Dragontear"
                    }
                ]
            }
        ]
    },
    {
        "id": "/title/tt0350384/",
        "image": {
            "height": 1440,
            "id": "/title/tt0350384/images/rm3088899585",
            "url": "https://m.media-amazon.com/images/M/MV5BYTQxZWM4NTYtMWNlNC00MDk1LThkNjctYTBjZWI1OWY0NWU2XkEyXkFqcGdeQXVyMjE5MTc4Mjk@._V1_.jpg",
            "width": 960
        },
        "runningTimeInMinutes": 90,
        "nextEpisode": "/title/tt4172814/",
        "numberOfEpisodes": 258,
        "seriesStartYear": 2000,
        "title": "106 & Park",
        "titleType": "tvSeries",
        "year": 2000,
        "principals": [
            {
                "disambiguation": "I",
                "id": "/name/nm2789018/",
                "legacyNameText": "Forester, Joseph (I)",
                "name": "Joseph Forester",
                "category": "actor",
                "endYear": 2005,
                "episodeCount": 69,
                "startYear": 2005
            },
            {
                "id": "/name/nm2298507/",
                "legacyNameText": "Diaz, Rocsi",
                "name": "Rocsi Diaz",
                "category": "self",
                "characters": [
                    "Self - Hostess",
                    "Self - Host"
                ],
                "endYear": 2013,
                "episodeCount": 66,
                "roles": [
                    {
                        "character": "Self - Hostess"
                    },
                    {
                        "character": "Self - Host"
                    }
                ],
                "startYear": 2006
            },
            {
                "id": "/name/nm2413125/",
                "legacyNameText": "Jenkins, Terrence",
                "name": "Terrence Jenkins",
                "category": "self",
                "characters": [
                    "Self - Host"
                ],
                "endYear": 2013,
                "episodeCount": 48,
                "roles": [
                    {
                        "character": "Self - Host"
                    }
                ],
                "startYear": 2006
            }
        ]
    },
    {
        "id": "/title/tt14833800/",
        "image": {
            "height": 1080,
            "id": "/title/tt14833800/images/rm2505491713",
            "url": "https://m.media-amazon.com/images/M/MV5BYjQ5YmY0NDQtMjYyNS00ZDY4LWEwYjUtYWQzY2VjNGI1NDQ1XkEyXkFqcGdeQXVyNzExMzc0MDg@._V1_.jpg",
            "width": 1920
        },
        "nextEpisode": "/title/tt16612812/",
        "numberOfEpisodes": 235,
        "seriesStartYear": 2015,
        "title": "MostAmazingTop10",
        "titleType": "tvSeries",
        "year": 2015,
        "principals": [
            {
                "id": "/name/nm10195097/",
                "legacyNameText": "Ivan, Lindsay",
                "name": "Lindsay Ivan",
                "category": "self",
                "characters": [
                    "Self - Host"
                ],
                "endYear": 2022,
                "episodeCount": 74,
                "roles": [
                    {
                        "character": "Self - Host"
                    }
                ],
                "startYear": 2020
            },
            {
                "disambiguation": "II",
                "id": "/name/nm12658264/",
                "legacyNameText": "Kosolofski, Olivia (II)",
                "name": "Olivia Kosolofski",
                "category": "self",
                "characters": [
                    "Self - Host",
                    "Self - Co-Host"
                ],
                "endYear": 2022,
                "episodeCount": 50,
                "roles": [
                    {
                        "character": "Self - Host"
                    },
                    {
                        "character": "Self - Co-Host"
                    }
                ],
                "startYear": 2020
            },
            {
                "id": "/name/nm9010203/",
                "legacyNameText": "Felgate, Rebecca",
                "name": "Rebecca Felgate",
                "category": "self",
                "characters": [
                    "Self - Host"
                ],
                "endYear": 2021,
                "episodeCount": 30,
                "roles": [
                    {
                        "character": "Self - Host"
                    }
                ],
                "startYear": 2015
            }
        ]
    },
    {
        "id": "/title/tt17718786/",
        "nextEpisode": "/title/tt20379278/",
        "numberOfEpisodes": 418,
        "seriesStartYear": 2015,
        "title": "The Top 10",
        "titleType": "podcastSeries",
        "year": 2015
    },
    {
        "id": "/title/tt1159866/",
        "image": {
            "height": 900,
            "id": "/title/tt1159866/images/rm1563929089",
            "url": "https://m.media-amazon.com/images/M/MV5BNmUxYTEzODItMGI3ZS00NjU5LThiMzMtNTliZjQ4ZjBjMjg1XkEyXkFqcGdeQXVyODQ1NTk5OQ@@._V1_.jpg",
            "width": 600
        },
        "runningTimeInMinutes": 47,
        "nextEpisode": "/title/tt12686814/",
        "numberOfEpisodes": 101,
        "seriesStartYear": 2007,
        "title": "NFL Top 10",
        "titleType": "tvSeries",
        "year": 2007,
        "principals": [
            {
                "id": "/name/nm1556085/",
                "legacyNameText": "Didinger, Ray",
                "name": "Ray Didinger",
                "category": "self",
                "characters": [
                    "Self",
                    "Self - Broadcaster"
                ],
                "endYear": 2018,
                "episodeCount": 10,
                "roles": [
                    {
                        "character": "Self"
                    },
                    {
                        "character": "Self - Broadcaster"
                    }
                ],
                "startYear": 2009
            },
            {
                "id": "/name/nm9557640/",
                "legacyNameText": "Benoit, Andy",
                "name": "Andy Benoit",
                "category": "self",
                "characters": [
                    "Self"
                ],
                "endYear": 2018,
                "episodeCount": 8,
                "roles": [
                    {
                        "character": "Self"
                    }
                ],
                "startYear": 2010
            },
            {
                "id": "/name/nm9195504/",
                "legacyNameText": "Schatz, Aaron",
                "name": "Aaron Schatz",
                "category": "self",
                "characters": [
                    "Self",
                    "Self - Broadcaster"
                ],
                "endYear": 2018,
                "episodeCount": 7,
                "roles": [
                    {
                        "character": "Self"
                    },
                    {
                        "character": "Self - Broadcaster"
                    }
                ],
                "startYear": 2009
            }
        ]
    },
    {
        "id": "/title/tt6954882/",
        "image": {
            "height": 1200,
            "id": "/title/tt6954882/images/rm2811659265",
            "url": "https://m.media-amazon.com/images/M/MV5BOWYzM2I0MTQtOWY3MS00MjRlLTg5YjMtOWNkMDk0MGEyZWZlXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
            "width": 800
        },
        "nextEpisode": "/title/tt7161576/",
        "numberOfEpisodes": 10,
        "seriesStartYear": 2016,
        "title": "Ancient Top 10",
        "titleType": "tvMiniSeries",
        "year": 2016,
        "principals": [
            {
                "disambiguation": "II",
                "id": "/name/nm3484875/",
                "legacyNameText": "Gough, Andrew (II)",
                "name": "Andrew Gough",
                "category": "self",
                "characters": [
                    "Self"
                ],
                "endYear": 2016,
                "episodeCount": 9,
                "roles": [
                    {
                        "character": "Self"
                    }
                ],
                "startYear": 2016
            },
            {
                "disambiguation": "I",
                "id": "/name/nm5193805/",
                "legacyNameText": "Arya, Darius (I)",
                "name": "Darius Arya",
                "category": "self",
                "characters": [
                    "Self"
                ],
                "endYear": 2016,
                "episodeCount": 7,
                "roles": [
                    {
                        "character": "Self"
                    }
                ],
                "startYear": 2016
            },
            {
                "disambiguation": "LI",
                "id": "/name/nm10790841/",
                "legacyNameText": "Campbell, Peter (LI)",
                "name": "Peter Campbell",
                "category": "self",
                "characters": [
                    "Self"
                ],
                "endYear": 2016,
                "episodeCount": 4,
                "roles": [
                    {
                        "character": "Self"
                    }
                ],
                "startYear": 2016
            }
        ]
    },
    {
        "id": "/title/tt23353710/",
        "nextEpisode": "/title/tt25362112/",
        "parentTitle": {
            "id": "/title/tt23314732/",
            "title": "Beyond the Melody Podcast with Brian Melo",
            "titleType": "podcastSeries",
            "year": 2021
        },
        "previousEpisode": "/title/tt23353942/",
        "seriesStartYear": 2021,
        "title": "9 Tommy Jackson: Forbes Top100 Financial Advisors in America",
        "titleType": "podcastEpisode",
        "year": 2021
    },
    {
        "id": "/name/nm7738931/",
        "legacyNameText": "Top10, Teennick",
        "name": "Teennick Top10",
        "knownFor": [
            {
                "crew": [
                    {
                        "category": "producer",
                        "endYear": 2017,
                        "episodeCount": 11,
                        "job": "co-executive producer",
                        "startYear": 2015
                    }
                ],
                "summary": {
                    "category": "producer",
                    "displayYear": "2015-2017"
                },
                "id": "/title/tt5171344/",
                "title": "TeenNick Top 10",
                "titleType": "tvSeries",
                "year": 2012
            }
        ]
    }
]
let a2=[
  {
      "id": "/title/tt1068660/",
      "runningTimeInMinutes": 125,
      "title": "Pyar Pyar",
      "titleType": "movie",
      "year": 1993,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0066455/",
              "legacyNameText": "Banerjee, Beena (I)",
              "name": "Beena Banerjee",
              "category": "actress",
              "characters": [
                  "Dhansukh's sister"
              ],
              "roles": [
                  {
                      "character": "Dhansukh's sister"
                  }
              ]
          },
          {
              "id": "/name/nm2603838/",
              "legacyNameText": "Bhanushali, Kishore",
              "name": "Kishore Bhanushali",
              "as": "Kishore Anand Bhanushali",
              "category": "actor",
              "characters": [
                  "Raju - Guide"
              ],
              "roles": [
                  {
                      "character": "Raju - Guide"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm1024439/",
              "legacyNameText": "Gupta, Isha (I)",
              "name": "Isha Gupta",
              "category": "actress",
              "characters": [
                  "Neelima"
              ],
              "roles": [
                  {
                      "character": "Neelima"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt0100095/",
      "image": {
          "height": 549,
          "id": "/title/tt0100095/images/rm572175361",
          "url": "https://m.media-amazon.com/images/M/MV5BZjFjM2I0YWMtYzY0Yi00ODgyLWJjNzgtN2NlZTBkNGY1NTBiXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_.jpg",
          "width": 422
      },
      "runningTimeInMinutes": 192,
      "title": "Maine Pyar Kiya",
      "titleType": "movie",
      "year": 1989,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0006795/",
              "legacyNameText": "Khan, Salman (I)",
              "name": "Salman Khan",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Prem Choudhary"
              ],
              "roles": [
                  {
                      "character": "Prem Choudhary"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0080181/",
              "legacyNameText": "Patwardhan, Bhagyashree (I)",
              "name": "Bhagyashree Patwardhan",
              "as": "Bhagyashree",
              "billing": 2,
              "category": "actress",
              "characters": [
                  "Suman"
              ],
              "roles": [
                  {
                      "character": "Suman",
                      "characterId": "/character/ch0494964/"
                  }
              ]
          },
          {
              "id": "/name/nm0622186/",
              "legacyNameText": "Nath, Alok",
              "name": "Alok Nath",
              "as": "Aloknath",
              "billing": 4,
              "category": "actor",
              "characters": [
                  "Karan"
              ],
              "roles": [
                  {
                      "character": "Karan"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt0064857/",
      "image": {
          "height": 1415,
          "id": "/title/tt0064857/images/rm3043818753",
          "url": "https://m.media-amazon.com/images/M/MV5BNzU3ZjdiZTUtNzE2MS00MDhkLWFhYmYtM2QxYzYwMmUwNjJkXkEyXkFqcGdeQXVyNDQwOTAzNw@@._V1_.jpg",
          "width": 994
      },
      "runningTimeInMinutes": 135,
      "title": "Pyar Hi Pyar",
      "titleType": "movie",
      "year": 1969,
      "principals": [
          {
              "id": "/name/nm0904537/",
              "legacyNameText": "Vyjayanthimala",
              "name": "Vyjayanthimala",
              "as": "Vyjayantimala",
              "billing": 1,
              "category": "actress",
              "characters": [
                  "Kavita"
              ],
              "roles": [
                  {
                      "character": "Kavita"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0004429/",
              "legacyNameText": "Dharmendra (I)",
              "name": "Dharmendra",
              "billing": 2,
              "category": "actor",
              "characters": [
                  "Vijay Gupta"
              ],
              "roles": [
                  {
                      "character": "Vijay Gupta"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0695199/",
              "legacyNameText": "Sikand, Pran (I)",
              "name": "Pran Sikand",
              "as": "Pran",
              "billing": 3,
              "category": "actor",
              "characters": [
                  "Satish Raj 'Ashok'"
              ],
              "roles": [
                  {
                      "character": "Satish Raj 'Ashok'"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt0100441/",
      "image": {
          "height": 720,
          "id": "/title/tt0100441/images/rm1665083904",
          "url": "https://m.media-amazon.com/images/M/MV5BOTRjZjU0NDktODMyMC00M2MzLTkwNjYtYTAxN2VmNzE1NDA0XkEyXkFqcGdeQXVyNzY1NDUwMTg@._V1_.jpg",
          "width": 1280
      },
      "runningTimeInMinutes": 148,
      "title": "Pyar Ka Devta",
      "titleType": "movie",
      "year": 1990,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0149822/",
              "legacyNameText": "Chakraborty, Mithun (I)",
              "name": "Mithun Chakraborty",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Vijay Kumar"
              ],
              "roles": [
                  {
                      "character": "Vijay Kumar"
                  }
              ]
          },
          {
              "id": "/name/nm0002043/",
              "legacyNameText": "Dixit, Madhuri",
              "name": "Madhuri Dixit",
              "billing": 2,
              "category": "actress",
              "characters": [
                  "Radha"
              ],
              "roles": [
                  {
                      "character": "Radha"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0080445/",
              "legacyNameText": "Bhushan, Bharat (I)",
              "name": "Bharat Bhushan",
              "billing": 3,
              "category": "actor",
              "characters": [
                  "Doctor"
              ],
              "roles": [
                  {
                      "character": "Doctor"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt8491220/",
      "image": {
          "height": 3300,
          "id": "/title/tt8491220/images/rm1340045824",
          "url": "https://m.media-amazon.com/images/M/MV5BYmZkZjg3NjktZjk5NS00MzQwLWJiYWEtZTEwMmIwNWM5MWE1XkEyXkFqcGdeQXVyOTA3Njg4NzM@._V1_.jpg",
          "width": 2550
      },
      "runningTimeInMinutes": 104,
      "title": "Kuch Pal Pyar Ke",
      "titleType": "movie",
      "year": 2018,
      "principals": [
          {
              "disambiguation": "III",
              "id": "/name/nm9876621/",
              "legacyNameText": "Aamir (III)",
              "name": "Aamir",
              "category": "actor"
          },
          {
              "id": "/name/nm10057251/",
              "legacyNameText": "Gadhvi, Tejas",
              "name": "Tejas Gadhvi",
              "category": "actor",
              "characters": [
                  "Tushar"
              ],
              "roles": [
                  {
                      "character": "Tushar"
                  }
              ]
          },
          {
              "disambiguation": "II",
              "id": "/name/nm10023253/",
              "legacyNameText": "Ghani, Aamir (II)",
              "name": "Aamir Ghani",
              "category": "actor",
              "characters": [
                  "Sameer"
              ],
              "roles": [
                  {
                      "character": "Sameer"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt0087958/",
      "image": {
          "height": 1500,
          "id": "/title/tt0087958/images/rm2813517057",
          "url": "https://m.media-amazon.com/images/M/MV5BN2E5NmVkYTEtNzIzMi00MGM4LTkwMmItMjk2OTYwNGQyYzA2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
          "width": 1283
      },
      "runningTimeInMinutes": 135,
      "title": "Pyar Jhukta Nahin",
      "titleType": "movie",
      "year": 1985,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0149822/",
              "legacyNameText": "Chakraborty, Mithun (I)",
              "name": "Mithun Chakraborty",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Ajay Khanna"
              ],
              "roles": [
                  {
                      "character": "Ajay Khanna"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0464075/",
              "legacyNameText": "Kolhapure, Padmini (I)",
              "name": "Padmini Kolhapure",
              "billing": 2,
              "category": "actress",
              "characters": [
                  "Preeti B. Pratap",
                  "Preeti A. Khanna"
              ],
              "roles": [
                  {
                      "character": "Preeti B. Pratap"
                  },
                  {
                      "character": "Preeti A. Khanna"
                  }
              ]
          },
          {
              "id": "/name/nm0219939/",
              "legacyNameText": "Denzongpa, Danny",
              "name": "Danny Denzongpa",
              "billing": 3,
              "category": "actor",
              "characters": [
                  "Bhanu Pratap"
              ],
              "roles": [
                  {
                      "character": "Bhanu Pratap"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt23830616/",
      "image": {
          "height": 1080,
          "id": "/title/tt23830616/images/rm3452254977",
          "url": "https://m.media-amazon.com/images/M/MV5BZmIwZWZmYmUtNjRhZS00ZGY0LWE3YmEtNjQ5OWE1YzQ3NjI0XkEyXkFqcGdeQXVyNzM4MjU3NzY@._V1_.jpg",
          "width": 810
      },
      "runningTimeInMinutes": 20,
      "nextEpisode": "/title/tt23830918/",
      "numberOfEpisodes": 4,
      "seriesStartYear": 2022,
      "title": "Pyar Ke Saat Vachan Dharampatnii",
      "titleType": "tvSeries",
      "year": 2022,
      "principals": [
          {
              "id": "/name/nm10387510/",
              "legacyNameText": "Khan, Fahmaan",
              "name": "Fahmaan Khan",
              "category": "actor",
              "characters": [
                  "Ravi Randhawa"
              ],
              "episodeCount": 1,
              "roles": [
                  {
                      "character": "Ravi Randhawa"
                  }
              ]
          },
          {
              "id": "/name/nm8026853/",
              "legacyNameText": "Shetty, Aditi",
              "name": "Aditi Shetty",
              "category": "actress",
              "characters": [
                  "Kavya Sachdev"
              ],
              "episodeCount": 1,
              "roles": [
                  {
                      "character": "Kavya Sachdev"
                  }
              ]
          },
          {
              "id": "/name/nm5047733/",
              "legacyNameText": "Mirza, Shireen",
              "name": "Shireen Mirza",
              "category": "actress",
              "episodeCount": 1
          }
      ]
  },
  {
      "id": "/title/tt0250415/",
      "image": {
          "height": 1500,
          "id": "/title/tt0250415/images/rm691369728",
          "url": "https://m.media-amazon.com/images/M/MV5BZjc4NzEwNTAtZjg3OS00NmYwLTg3YjQtOWQ3ZGRjZmI4MTQ4XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
          "width": 1020
      },
      "runningTimeInMinutes": 173,
      "title": "Har Dil Jo Pyar Karega...",
      "titleType": "movie",
      "year": 2000,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0006795/",
              "legacyNameText": "Khan, Salman (I)",
              "name": "Salman Khan",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Raj (Raju)",
                  "Romi"
              ],
              "roles": [
                  {
                      "character": "Raj (Raju)"
                  },
                  {
                      "character": "Romi"
                  }
              ]
          },
          {
              "id": "/name/nm0006689/",
              "legacyNameText": "Zinta, Preity",
              "name": "Preity Zinta",
              "as": "Priety Zinta",
              "billing": 2,
              "category": "actress",
              "characters": [
                  "Jahnvi Goverdhan"
              ],
              "roles": [
                  {
                      "character": "Jahnvi Goverdhan"
                  }
              ]
          },
          {
              "id": "/name/nm0611552/",
              "legacyNameText": "Mukerji, Rani",
              "name": "Rani Mukerji",
              "billing": 3,
              "category": "actress",
              "characters": [
                  "Pooja Oberoi"
              ],
              "roles": [
                  {
                      "character": "Pooja Oberoi",
                      "characterId": "/character/ch0572313/"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt8620634/",
      "image": {
          "height": 500,
          "id": "/title/tt8620634/images/rm2445166080",
          "url": "https://m.media-amazon.com/images/M/MV5BYjFiNzlmOGYtMWQyMy00YTE1LTk5NTAtNTNkZjEyOGIxN2QzXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg",
          "width": 500
      },
      "runningTimeInMinutes": 20,
      "nextEpisode": "/title/tt10078300/",
      "numberOfEpisodes": 707,
      "seriesEndYear": 2017,
      "seriesStartYear": 2015,
      "title": "Thapki Pyar Ki",
      "titleType": "tvSeries",
      "year": 2015,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm9933694/",
              "legacyNameText": "Singh, Jigyasa (I)",
              "name": "Jigyasa Singh",
              "category": "actress",
              "characters": [
                  "Thapki"
              ],
              "endYear": 2017,
              "episodeCount": 704,
              "roles": [
                  {
                      "character": "Thapki"
                  }
              ],
              "startYear": 2015
          },
          {
              "id": "/name/nm9806119/",
              "legacyNameText": "Goplani, Manish",
              "name": "Manish Goplani",
              "category": "actor",
              "characters": [
                  "Bihaan"
              ],
              "endYear": 2017,
              "episodeCount": 704,
              "roles": [
                  {
                      "character": "Bihaan"
                  }
              ],
              "startYear": 2015
          },
          {
              "id": "/name/nm9638245/",
              "legacyNameText": "Maheshwari, Shrashti",
              "name": "Shrashti Maheshwari",
              "category": "actress",
              "characters": [
                  "Shakshi"
              ],
              "endYear": 2015,
              "episodeCount": 40,
              "roles": [
                  {
                      "character": "Shakshi"
                  }
              ],
              "startYear": 2015
          }
      ]
  },
  {
      "id": "/title/tt0155074/",
      "image": {
          "height": 1500,
          "id": "/title/tt0155074/images/rm671669249",
          "url": "https://m.media-amazon.com/images/M/MV5BZGQ3NTgxZTEtYThkNi00YjNiLWFjMjItYTk2NTNkZTZlZDI3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
          "width": 1133
      },
      "runningTimeInMinutes": 148,
      "title": "Pyar Ka Mandir",
      "titleType": "movie",
      "year": 1988,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0149822/",
              "legacyNameText": "Chakraborty, Mithun (I)",
              "name": "Mithun Chakraborty",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Vijay Kumar"
              ],
              "roles": [
                  {
                      "character": "Vijay Kumar"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0534863/",
              "legacyNameText": "Madhavi (I)",
              "name": "Madhavi",
              "billing": 2,
              "category": "actress",
              "characters": [
                  "Radha Bhooljanewala"
              ],
              "roles": [
                  {
                      "character": "Radha Bhooljanewala"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0080445/",
              "legacyNameText": "Bhushan, Bharat (I)",
              "name": "Bharat Bhushan",
              "billing": 3,
              "category": "actor",
              "characters": [
                  "Satish's dad"
              ],
              "roles": [
                  {
                      "character": "Satish's dad"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt0176075/",
      "image": {
          "height": 1495,
          "id": "/title/tt0176075/images/rm1702353665",
          "url": "https://m.media-amazon.com/images/M/MV5BYzYwZDZlOTQtNGEyZS00YmUzLTkyZmQtMTc1NGI2NzJjZjhiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
          "width": 1106
      },
      "runningTimeInMinutes": 129,
      "title": "Pyar Kiye Jaa",
      "titleType": "movie",
      "year": 1966,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0474822/",
              "legacyNameText": "Kumar, Kishore (I)",
              "name": "Kishore Kumar",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Shyam",
                  "Rai Bahadur Ganga Prasad"
              ],
              "roles": [
                  {
                      "character": "Shyam"
                  },
                  {
                      "character": "Rai Bahadur Ganga Prasad"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0004434/",
              "legacyNameText": "Kapoor, Shashi (I)",
              "name": "Shashi Kapoor",
              "billing": 2,
              "category": "actor",
              "characters": [
                  "Ashok Verma"
              ],
              "roles": [
                  {
                      "character": "Ashok Verma"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0576454/",
              "legacyNameText": "Mehmood (I)",
              "name": "Mehmood",
              "billing": 3,
              "category": "actor",
              "characters": [
                  "Atma"
              ],
              "roles": [
                  {
                      "character": "Atma"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt0327403/",
      "image": {
          "height": 1477,
          "id": "/title/tt0327403/images/rm362171904",
          "url": "https://m.media-amazon.com/images/M/MV5BOTIxM2NkNGYtNGU4Zi00M2ZlLTg5NDYtYzA2NzU0MWM1MGVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
          "width": 1024
      },
      "runningTimeInMinutes": 145,
      "title": "Afsana Pyar Ka",
      "titleType": "movie",
      "year": 1991,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0451148/",
              "legacyNameText": "Khan, Aamir (I)",
              "name": "Aamir Khan",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Raj"
              ],
              "roles": [
                  {
                      "character": "Raj"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0624174/",
              "legacyNameText": "Kothari, Neelam (I)",
              "name": "Neelam Kothari",
              "as": "Neelam",
              "billing": 2,
              "category": "actress",
              "characters": [
                  "Nikita"
              ],
              "roles": [
                  {
                      "character": "Nikita"
                  }
              ]
          },
          {
              "id": "/name/nm0863120/",
              "legacyNameText": "Tijori, Deepak",
              "name": "Deepak Tijori",
              "as": "Depak Tijori",
              "billing": 3,
              "category": "actor",
              "characters": [
                  "Depak"
              ],
              "roles": [
                  {
                      "character": "Depak"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt0107166/",
      "image": {
          "height": 1500,
          "id": "/title/tt0107166/images/rm1587897088",
          "url": "https://m.media-amazon.com/images/M/MV5BNTk5NmU0ZDgtODU5Zi00MTExLTk2MDgtYTg1MDhlMTkwN2Q1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
          "width": 1136
      },
      "runningTimeInMinutes": 163,
      "title": "Hum Hain Rahi Pyar Ke",
      "titleType": "movie",
      "year": 1993,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0451148/",
              "legacyNameText": "Khan, Aamir (I)",
              "name": "Aamir Khan",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Rahul Malhotra"
              ],
              "roles": [
                  {
                      "character": "Rahul Malhotra"
                  }
              ]
          },
          {
              "id": "/name/nm0004487/",
              "legacyNameText": "Chawla, Juhi",
              "name": "Juhi Chawla",
              "billing": 2,
              "category": "actress",
              "characters": [
                  "Vaijanti Iyer"
              ],
              "roles": [
                  {
                      "character": "Vaijanti Iyer"
                  }
              ]
          },
          {
              "id": "/name/nm0788953/",
              "legacyNameText": "Bharucha, Sharokh",
              "name": "Sharokh Bharucha",
              "as": "Master Sharokh",
              "billing": 3,
              "category": "actor",
              "characters": [
                  "Vicky"
              ],
              "roles": [
                  {
                      "character": "Vicky"
                  }
              ]
          }
      ]
  },
  {
      "id": "/name/nm1217308/",
      "legacyNameText": "Mirasol, Pyar",
      "name": "Pyar Mirasol",
      "knownFor": [
          {
              "cast": [
                  {
                      "billing": 5,
                      "category": "actress",
                      "characters": [
                          "Jinky"
                      ],
                      "roles": [
                          {
                              "character": "Jinky"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Jinky"
                  ],
                  "displayYear": "2002"
              },
              "id": "/title/tt0350302/",
              "title": "Walang iwanan... Peksman!",
              "titleType": "movie",
              "year": 2002
          },
          {
              "cast": [
                  {
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Salome"
                      ],
                      "roles": [
                          {
                              "character": "Salome"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Salome"
                  ],
                  "displayYear": "2002"
              },
              "id": "/title/tt0328117/",
              "title": "Masarap ba ang bawal",
              "titleType": "movie",
              "year": 2002
          },
          {
              "cast": [
                  {
                      "billing": 6,
                      "category": "actress",
                      "characters": [
                          "Lourdes"
                      ],
                      "roles": [
                          {
                              "character": "Lourdes"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Lourdes"
                  ],
                  "displayYear": "2001"
              },
              "id": "/title/tt0350078/",
              "title": "Sa iyong mga haplos",
              "titleType": "movie",
              "year": 2001
          },
          {
              "cast": [
                  {
                      "billing": 4,
                      "category": "actress",
                      "characters": [
                          "Sandra"
                      ],
                      "roles": [
                          {
                              "character": "Sandra"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Sandra"
                  ],
                  "displayYear": "2004"
              },
              "id": "/title/tt0408494/",
              "title": "Animal",
              "titleType": "movie",
              "year": 2004
          }
      ]
  },
  {
      "id": "/title/tt0091806/",
      "image": {
          "height": 1500,
          "id": "/title/tt0091806/images/rm3777396737",
          "url": "https://m.media-amazon.com/images/M/MV5BN2FhMzVmZDctZWJkNy00NTM2LThmMjgtNTFkOWViMGIwZWU3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
          "width": 1293
      },
      "runningTimeInMinutes": 133,
      "title": "Pyar Kiya Hai Pyar Karenge",
      "titleType": "movie",
      "year": 1986,
      "principals": [
          {
              "disambiguation": "IV",
              "id": "/name/nm0438463/",
              "legacyNameText": "Kapoor, Anil (IV)",
              "name": "Anil Kapoor",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Anand"
              ],
              "roles": [
                  {
                      "character": "Anand"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0464075/",
              "legacyNameText": "Kolhapure, Padmini (I)",
              "name": "Padmini Kolhapure",
              "billing": 2,
              "category": "actress",
              "characters": [
                  "Usha"
              ],
              "roles": [
                  {
                      "character": "Usha",
                      "characterId": "/character/ch0480127/"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0707268/",
              "legacyNameText": "Raj, Anita (I)",
              "name": "Anita Raj",
              "billing": 3,
              "category": "actress",
              "characters": [
                  "Shobha"
              ],
              "roles": [
                  {
                      "character": "Shobha"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt0230670/",
      "image": {
          "height": 1495,
          "id": "/title/tt0230670/images/rm2465913345",
          "url": "https://m.media-amazon.com/images/M/MV5BMDhjOWJmY2MtMjBmZS00NjczLWIwYzctOWIxMGYxNTRiNzg1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
          "width": 1086
      },
      "runningTimeInMinutes": 153,
      "title": "Pyar Ka Mausam",
      "titleType": "movie",
      "year": 1969,
      "principals": [
          {
              "id": "/name/nm0661239/",
              "legacyNameText": "Parekh, Asha",
              "name": "Asha Parekh",
              "billing": 1,
              "category": "actress",
              "characters": [
                  "Seema"
              ],
              "roles": [
                  {
                      "character": "Seema"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0004434/",
              "legacyNameText": "Kapoor, Shashi (I)",
              "name": "Shashi Kapoor",
              "billing": 2,
              "category": "actor",
              "characters": [
                  "Sunder",
                  "Sunil",
                  "Pyarelal"
              ],
              "roles": [
                  {
                      "character": "Sunder"
                  },
                  {
                      "character": "Sunil"
                  },
                  {
                      "character": "Pyarelal",
                      "characterId": "/character/ch0488458/"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0080445/",
              "legacyNameText": "Bhushan, Bharat (I)",
              "name": "Bharat Bhushan",
              "billing": 3,
              "category": "actor",
              "characters": [
                  "Gopal"
              ],
              "roles": [
                  {
                      "character": "Gopal"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt13678234/",
      "image": {
          "height": 979,
          "id": "/title/tt13678234/images/rm2185627649",
          "url": "https://m.media-amazon.com/images/M/MV5BODBlM2U3NjItN2M4Yy00NGU0LTk3NzEtNDhmNDBiMzdkODkyXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg",
          "width": 720
      },
      "runningTimeInMinutes": 5,
      "title": "Kaka: Temporary Pyar",
      "titleType": "musicVideo",
      "year": 2020,
      "principals": [
          {
              "disambiguation": "III",
              "id": "/name/nm11949230/",
              "legacyNameText": "Angad (III)",
              "name": "Angad",
              "category": "actor",
              "characters": [
                  "Angad"
              ],
              "roles": [
                  {
                      "character": "Angad"
                  }
              ]
          },
          {
              "disambiguation": "III",
              "id": "/name/nm12063825/",
              "legacyNameText": "Arora, Anjali (III)",
              "name": "Anjali Arora",
              "category": "actress",
              "characters": [
                  "Anjali Arora"
              ],
              "roles": [
                  {
                      "character": "Anjali Arora"
                  }
              ]
          },
          {
              "disambiguation": "VI",
              "id": "/name/nm12027008/",
              "legacyNameText": "Kaka (VI)",
              "name": "Kaka",
              "category": "actor",
              "characters": [
                  "Kaka"
              ],
              "roles": [
                  {
                      "character": "Kaka"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt0335044/",
      "image": {
          "height": 1500,
          "id": "/title/tt0335044/images/rm92562432",
          "url": "https://m.media-amazon.com/images/M/MV5BZmQyZTI5NmYtMzFiOC00NzQ0LWExMWYtY2U0YmU3NTUxMDZkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
          "width": 1046
      },
      "runningTimeInMinutes": 150,
      "title": "Dil Vil Pyar Vyar",
      "titleType": "movie",
      "year": 2002,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0534856/",
              "legacyNameText": "Madhavan (I)",
              "name": "Madhavan",
              "as": "R. Madhavan",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Krish Kumar"
              ],
              "roles": [
                  {
                      "character": "Krish Kumar"
                  }
              ]
          },
          {
              "id": "/name/nm0792116/",
              "legacyNameText": "Shergill, Jimmy",
              "name": "Jimmy Shergill",
              "billing": 2,
              "category": "actor",
              "characters": [
                  "Hrithik Mittal"
              ],
              "roles": [
                  {
                      "character": "Hrithik Mittal"
                  }
              ]
          },
          {
              "id": "/name/nm0839634/",
              "legacyNameText": "Suri, Sanjay",
              "name": "Sanjay Suri",
              "billing": 3,
              "category": "actor",
              "characters": [
                  "Devdarshan 'Dev' Suri"
              ],
              "roles": [
                  {
                      "character": "Devdarshan 'Dev' Suri"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt0378614/",
      "image": {
          "height": 1500,
          "id": "/title/tt0378614/images/rm2185416961",
          "url": "https://m.media-amazon.com/images/M/MV5BOWY2M2IzYWEtYWVhNi00YzlhLWIzNzItYTE0MmI3ZmFhMTUwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
          "width": 1029
      },
      "title": "Pyar",
      "titleType": "movie",
      "year": 1950,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0004292/",
              "legacyNameText": "Kapoor, Raj (I)",
              "name": "Raj Kapoor",
              "category": "actor"
          },
          {
              "id": "/name/nm0451338/",
              "legacyNameText": "Khan, W.M.",
              "name": "W.M. Khan",
              "category": "actor"
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0004291/",
              "legacyNameText": "Nargis (I)",
              "name": "Nargis",
              "category": "actress"
          }
      ]
  },
  {
      "disambiguation": "I",
      "id": "/name/nm7145725/",
      "image": {
          "height": 6720,
          "id": "/name/nm7145725/images/rm3128059648",
          "url": "https://m.media-amazon.com/images/M/MV5BYzMyYzA5ZTYtNjNiZi00ZWRhLWI3Y2QtMzA2ODYwMmE1NTBiXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
          "width": 4480
      },
      "legacyNameText": "Anderson, Pyar (I)",
      "name": "Pyar Anderson",
      "knownFor": [
          {
              "crew": [
                  {
                      "category": "casting_department",
                      "job": "extras casting"
                  }
              ],
              "summary": {
                  "category": "casting_department",
                  "displayYear": "2020"
              },
              "disambiguation": "I",
              "id": "/title/tt10079448/",
              "title": "In a Silent Way",
              "titleType": "movie",
              "year": 2020
          },
          {
              "cast": [
                  {
                      "category": "actor",
                      "characters": [
                          "Arregh"
                      ],
                      "endYear": 2017,
                      "episodeCount": 1,
                      "roles": [
                          {
                              "character": "Arregh"
                          }
                      ],
                      "startYear": 2017
                  }
              ],
              "summary": {
                  "category": "actor",
                  "characters": [
                      "Arregh"
                  ],
                  "displayYear": "2017"
              },
              "id": "/title/tt4503366/",
              "title": "Blade of Honor",
              "titleType": "tvSeries",
              "year": 2017
          },
          {
              "cast": [
                  {
                      "billing": 4,
                      "category": "actor",
                      "characters": [
                          "Boyfriend"
                      ],
                      "roles": [
                          {
                              "character": "Boyfriend"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actor",
                  "characters": [
                      "Boyfriend"
                  ]
              },
              "id": "/title/tt3344532/",
              "title": "The Whisperers",
              "titleType": "movie"
          },
          {
              "cast": [
                  {
                      "category": "actor",
                      "characters": [
                          "Synth",
                          "Synthetic"
                      ],
                      "episodeCount": 2,
                      "roles": [
                          {
                              "character": "Synth"
                          },
                          {
                              "character": "Synthetic"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actor",
                  "characters": [
                      "Synth",
                      "Synthetic"
                  ],
                  "displayYear": "2020"
              },
              "id": "/title/tt2404379/",
              "title": "Space Command",
              "titleType": "tvSeries",
              "year": 2020
          }
      ]
  }
]
let a3=[
  {
      "akas": [
          "India Beau",
          "India De Beaufort",
          "India Beaufort Lloyd"
      ],
      "id": "/name/nm2459822/",
      "image": {
          "height": 4320,
          "id": "/name/nm2459822/images/rm1737566976",
          "url": "https://m.media-amazon.com/images/M/MV5BZDgwMzU5NjgtYTk4OC00NzU1LTk1ZDgtMDQxYmI5OWIwZmI1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
          "width": 3318
      },
      "legacyNameText": "de Beaufort, India",
      "name": "India de Beaufort",
      "knownFor": [
          {
              "cast": [
                  {
                      "billing": 6,
                      "category": "actress",
                      "characters": [
                          "Maya Goshdashtidar"
                      ],
                      "roles": [
                          {
                              "character": "Maya Goshdashtidar",
                              "characterId": "/character/ch0184386/"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Maya Goshdashtidar"
                  ],
                  "displayYear": "2007"
              },
              "id": "/title/tt0425413/",
              "title": "Run Fatboy Run",
              "titleType": "movie",
              "year": 2007
          },
          {
              "cast": [
                  {
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Sharon"
                      ],
                      "roles": [
                          {
                              "character": "Sharon"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Sharon"
                  ],
                  "displayYear": "2022"
              },
              "id": "/title/tt14128670/",
              "title": "Kimi",
              "titleType": "movie",
              "year": 2022
          },
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Clover",
                          "Crimson",
                          "Grandma Rose",
                          "Love Bot"
                      ],
                      "endYear": 2017,
                      "episodeCount": 65,
                      "roles": [
                          {
                              "character": "Clover",
                              "characterId": "/character/ch0583956/"
                          },
                          {
                              "character": "Crimson"
                          },
                          {
                              "character": "Grandma Rose"
                          },
                          {
                              "character": "Love Bot"
                          }
                      ],
                      "startYear": 2014
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Clover",
                      "Crimson",
                      "Grandma Rose",
                      "Love Bot"
                  ],
                  "displayYear": "2014-2017"
              },
              "id": "/title/tt3807022/",
              "title": "All Hail King Julien",
              "titleType": "tvSeries",
              "year": 2014
          },
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Aneka"
                      ],
                      "endYear": 2009,
                      "episodeCount": 6,
                      "roles": [
                          {
                              "character": "Aneka",
                              "characterId": "/character/ch0140942/"
                          }
                      ],
                      "startYear": 2009
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Aneka"
                  ],
                  "displayYear": "2009"
              },
              "id": "/title/tt1299897/",
              "title": "Kröd Mändoon and the Flaming Sword of Fire",
              "titleType": "tvSeries",
              "year": 2009
          }
      ]
  },
  {
      "id": "/title/tt13885320/",
      "image": {
          "height": 1350,
          "id": "/title/tt13885320/images/rm936196097",
          "url": "https://m.media-amazon.com/images/M/MV5BOTcwYmY0NTktNzI5OC00MGEwLWFjN2EtMDc5ZDA0ZDVkMTMwXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_.jpg",
          "width": 1080
      },
      "runningTimeInMinutes": 117,
      "title": "India Lockdown",
      "titleType": "movie",
      "year": 2022,
      "principals": [
          {
              "id": "/name/nm3070408/",
              "legacyNameText": "Babbar, Prateik",
              "name": "Prateik Babbar",
              "as": "Prateik",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Maadhav"
              ],
              "roles": [
                  {
                      "character": "Maadhav"
                  }
              ]
          },
          {
              "id": "/name/nm3256907/",
              "legacyNameText": "Tamhankar, Sai",
              "name": "Sai Tamhankar",
              "billing": 2,
              "category": "actress",
              "characters": [
                  "Phoolmati"
              ],
              "roles": [
                  {
                      "character": "Phoolmati"
                  }
              ]
          },
          {
              "id": "/name/nm3933547/",
              "legacyNameText": "Kumra, Aahana",
              "name": "Aahana Kumra",
              "billing": 3,
              "category": "actress",
              "characters": [
                  "Moon Alvez"
              ],
              "roles": [
                  {
                      "character": "Moon Alvez"
                  }
              ]
          }
      ]
  },
  {
      "id": "/name/nm2086223/",
      "image": {
          "height": 846,
          "id": "/name/nm2086223/images/rm57262593",
          "url": "https://m.media-amazon.com/images/M/MV5BMDNjYzBlM2MtNmUzNS00NDc1LWEwMDQtNTU4MjdiODBjMWMxXkEyXkFqcGdeQXVyMTMxNDEyMDYx._V1_.jpg",
          "width": 828
      },
      "legacyNameText": "Eisley, India",
      "name": "India Eisley",
      "knownFor": [
          {
              "cast": [
                  {
                      "billing": 5,
                      "category": "actress",
                      "characters": [
                          "Eve"
                      ],
                      "roles": [
                          {
                              "character": "Eve",
                              "characterId": "/character/ch0283633/"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Eve"
                  ],
                  "displayYear": "2012"
              },
              "id": "/title/tt1496025/",
              "title": "Underworld: Awakening",
              "titleType": "movie",
              "year": 2012
          },
          {
              "cast": [
                  {
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Sawa"
                      ],
                      "roles": [
                          {
                              "character": "Sawa",
                              "characterId": "/character/ch0322048/"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Sawa"
                  ],
                  "displayYear": "2014"
              },
              "id": "/title/tt2044801/",
              "title": "Kite",
              "titleType": "movie",
              "year": 2014
          },
          {
              "cast": [
                  {
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Briar Rose"
                      ],
                      "roles": [
                          {
                              "character": "Briar Rose",
                              "characterId": "/character/ch0028156/"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Briar Rose"
                  ],
                  "displayYear": "2016"
              },
              "id": "/title/tt4118606/",
              "title": "The Curse of Sleeping Beauty",
              "titleType": "movie",
              "year": 2016
          },
          {
              "cast": [
                  {
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Audrina Adare"
                      ],
                      "roles": [
                          {
                              "character": "Audrina Adare",
                              "characterId": "/character/ch0534366/"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Audrina Adare"
                  ],
                  "displayYear": "2016"
              },
              "id": "/title/tt4698792/",
              "title": "My Sweet Audrina",
              "titleType": "tvMovie",
              "year": 2016
          }
      ]
  },
  {
      "id": "/name/nm6911859/",
      "image": {
          "height": 5651,
          "id": "/name/nm6911859/images/rm3560687873",
          "url": "https://m.media-amazon.com/images/M/MV5BZDJjMGUyMzEtMTI4My00MTZjLTk2NzEtNGY0YzdjZTAwNGNhXkEyXkFqcGdeQXVyNjExNDMyNjQ@._V1_.jpg",
          "width": 3768
      },
      "legacyNameText": "Mullen, India",
      "name": "India Mullen",
      "knownFor": [
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Peggy"
                      ],
                      "endYear": 2020,
                      "episodeCount": 6,
                      "roles": [
                          {
                              "character": "Peggy"
                          }
                      ],
                      "startYear": 2020
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Peggy"
                  ],
                  "displayYear": "2020"
              },
              "id": "/title/tt9059760/",
              "title": "Normal People",
              "titleType": "tvMiniSeries",
              "year": 2020
          }
      ]
  },
  {
      "id": "/title/tt1462764/",
      "image": {
          "height": 2500,
          "id": "/title/tt1462764/images/rm1914256129",
          "url": "https://m.media-amazon.com/images/M/MV5BYTYyY2JkOWMtMDNjZC00ZTgzLWJhNDAtM2YzMWY3MjM2N2VjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
          "width": 1688
      },
      "title": "Indiana Jones and the Dial of Destiny",
      "titleType": "movie",
      "year": 2023,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0000148/",
              "legacyNameText": "Ford, Harrison (I)",
              "name": "Harrison Ford",
              "category": "actor",
              "characters": [
                  "Indiana Jones"
              ],
              "roles": [
                  {
                      "character": "Indiana Jones",
                      "characterId": "/character/ch0001063/"
                  }
              ]
          },
          {
              "id": "/name/nm3564817/",
              "legacyNameText": "Waller-Bridge, Phoebe",
              "name": "Phoebe Waller-Bridge",
              "category": "actress",
              "characters": [
                  "Helena"
              ],
              "roles": [
                  {
                      "character": "Helena"
                  }
              ]
          },
          {
              "id": "/name/nm0586568/",
              "legacyNameText": "Mikkelsen, Mads",
              "name": "Mads Mikkelsen",
              "category": "actor",
              "characters": [
                  "Jürgen Voller"
              ],
              "roles": [
                  {
                      "character": "Jürgen Voller"
                  }
              ]
          }
      ]
  },
  {
      "id": "/name/nm2061375/",
      "image": {
          "height": 1446,
          "id": "/name/nm2061375/images/rm2669579009",
          "url": "https://m.media-amazon.com/images/M/MV5BYjFhNGY1NWQtNDFhOC00NGFmLTgwMWYtZTgwMTI1NjVhYzdiXkEyXkFqcGdeQXVyMTIxNDc5MTQ@._V1_.jpg",
          "width": 1010
      },
      "legacyNameText": "Ennenga, India",
      "name": "India Ennenga",
      "knownFor": [
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Sofia Bernette"
                      ],
                      "endYear": 2013,
                      "episodeCount": 33,
                      "roles": [
                          {
                              "character": "Sofia Bernette",
                              "characterId": "/character/ch0214912/"
                          }
                      ],
                      "startYear": 2010
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Sofia Bernette"
                  ],
                  "displayYear": "2010-2013"
              },
              "id": "/title/tt1279972/",
              "title": "Treme",
              "titleType": "tvSeries",
              "year": 2010
          },
          {
              "cast": [
                  {
                      "billing": 54,
                      "category": "actress",
                      "characters": [
                          "Young Dolores"
                      ],
                      "roles": [
                          {
                              "character": "Young Dolores"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Young Dolores"
                  ],
                  "displayYear": "2019"
              },
              "id": "/title/tt1302006/",
              "title": "The Irishman",
              "titleType": "movie",
              "year": 2019
          },
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Camille Winship",
                          "Young Lena"
                      ],
                      "endYear": 2015,
                      "episodeCount": 10,
                      "roles": [
                          {
                              "character": "Camille Winship",
                              "characterId": "/character/ch0508838/"
                          },
                          {
                              "character": "Young Lena",
                              "characterId": "/character/ch0508839/"
                          }
                      ],
                      "startYear": 2015
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Camille Winship",
                      "Young Lena"
                  ],
                  "displayYear": "2015"
              },
              "id": "/title/tt3230780/",
              "title": "The Returned",
              "titleType": "tvSeries",
              "year": 2015
          },
          {
              "cast": [
                  {
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Scout Havers"
                      ],
                      "roles": [
                          {
                              "character": "Scout Havers"
                          }
                      ]
                  }
              ],
              "crew": [
                  {
                      "category": "writer",
                      "job": "story"
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Scout Havers"
                  ],
                  "displayYear": "2015"
              },
              "id": "/title/tt3252998/",
              "title": "About Scout",
              "titleType": "movie",
              "year": 2015
          }
      ]
  },
  {
      "akas": [
          "India Hemsworth"
      ],
      "id": "/name/nm13831724/",
      "legacyNameText": "Hemsworth, India Rose",
      "name": "India Rose Hemsworth",
      "knownFor": [
          {
              "cast": [
                  {
                      "billing": 30,
                      "category": "actress",
                      "characters": [
                          "Gorr's Daughter",
                          "Love"
                      ],
                      "roles": [
                          {
                              "character": "Gorr's Daughter"
                          },
                          {
                              "character": "Love"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Gorr's Daughter",
                      "Love"
                  ],
                  "displayYear": "2022"
              },
              "id": "/title/tt10648342/",
              "title": "Thor: Love and Thunder",
              "titleType": "movie",
              "year": 2022
          },
          {
              "cast": [
                  {
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "endYear": 2022,
                      "episodeCount": 1,
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ],
                      "startYear": 2022
                  }
              ],
              "summary": {
                  "category": "self",
                  "characters": [
                      "Self"
                  ],
                  "displayYear": "2022"
              },
              "id": "/title/tt11714334/",
              "title": "Limitless",
              "titleType": "tvSeries",
              "year": 2022
          },
          {
              "cast": [
                  {
                      "category": "self",
                      "characters": [
                          "Self - Gorr's Daughter"
                      ],
                      "endYear": 2022,
                      "episodeCount": 1,
                      "roles": [
                          {
                              "character": "Self - Gorr's Daughter"
                          }
                      ],
                      "startYear": 2022
                  }
              ],
              "summary": {
                  "category": "self",
                  "characters": [
                      "Self - Gorr's Daughter"
                  ],
                  "displayYear": "2022"
              },
              "id": "/title/tt14094206/",
              "title": "Marvel Studios: Assembled",
              "titleType": "tvSeries",
              "year": 2021
          }
      ]
  },
  {
      "id": "/name/nm8192698/",
      "image": {
          "height": 2076,
          "id": "/name/nm8192698/images/rm2596672513",
          "url": "https://m.media-amazon.com/images/M/MV5BYmNhMTM2MjgtYTY4OC00MWIwLTk3NDEtYTkzYTZkOGVkNDllXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
          "width": 3840
      },
      "legacyNameText": "Fowler, India",
      "name": "India Fowler",
      "knownFor": [
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Young Zoe Walker"
                      ],
                      "endYear": 2020,
                      "episodeCount": 5,
                      "roles": [
                          {
                              "character": "Young Zoe Walker"
                          }
                      ],
                      "startYear": 2020
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Young Zoe Walker"
                  ],
                  "displayYear": "2020"
              },
              "id": "/title/tt9073958/",
              "title": "White Lines",
              "titleType": "tvSeries",
              "year": 2020
          },
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Sophie"
                      ],
                      "roles": [
                          {
                              "character": "Sophie"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Sophie"
                  ],
                  "displayYear": "2017"
              },
              "id": "/title/tt5200368/",
              "title": "Retaliation",
              "titleType": "movie",
              "year": 2017
          },
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Ellen Mason"
                      ],
                      "endYear": 2018,
                      "episodeCount": 8,
                      "roles": [
                          {
                              "character": "Ellen Mason"
                          }
                      ],
                      "startYear": 2018
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Ellen Mason"
                  ],
                  "displayYear": "2018"
              },
              "id": "/title/tt7902072/",
              "title": "Safe",
              "titleType": "tvMiniSeries",
              "year": 2018
          },
          {
              "cast": [
                  {
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Mattie"
                      ],
                      "roles": [
                          {
                              "character": "Mattie"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Mattie"
                  ],
                  "displayYear": "2021"
              },
              "id": "/title/tt15223526/",
              "title": "Know the Grass",
              "titleType": "short",
              "year": 2021
          }
      ]
  },
  {
      "id": "/title/tt0087892/",
      "image": {
          "height": 750,
          "id": "/title/tt0087892/images/rm3798407424",
          "url": "https://m.media-amazon.com/images/M/MV5BNzc0M2EwNWMtZDc1Zi00OGE2LThmMDItNTY5MDQ5ZDQ3ZTBmXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_.jpg",
          "width": 500
      },
      "runningTimeInMinutes": 164,
      "title": "A Passage to India",
      "titleType": "movie",
      "year": 1984,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0001114/",
              "legacyNameText": "Davis, Judy (I)",
              "name": "Judy Davis",
              "billing": 1,
              "category": "actress",
              "characters": [
                  "Adela Quested"
              ],
              "roles": [
                  {
                      "character": "Adela Quested",
                      "characterId": "/character/ch0023990/"
                  }
              ]
          },
          {
              "id": "/name/nm0051856/",
              "legacyNameText": "Banerjee, Victor",
              "name": "Victor Banerjee",
              "billing": 2,
              "category": "actor",
              "characters": [
                  "Dr. Aziz"
              ],
              "roles": [
                  {
                      "character": "Dr. Aziz",
                      "characterId": "/character/ch0023997/"
                  }
              ]
          },
          {
              "id": "/name/nm0001919/",
              "legacyNameText": "Ashcroft, Peggy",
              "name": "Peggy Ashcroft",
              "billing": 3,
              "category": "actress",
              "characters": [
                  "Mrs. Moore"
              ],
              "roles": [
                  {
                      "character": "Mrs. Moore",
                      "characterId": "/character/ch0023995/"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt0082971/",
      "image": {
          "height": 1386,
          "id": "/title/tt0082971/images/rm2091520257",
          "url": "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg",
          "width": 942
      },
      "runningTimeInMinutes": 115,
      "title": "Indiana Jones and the Raiders of the Lost Ark",
      "titleType": "movie",
      "year": 1981,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0000148/",
              "legacyNameText": "Ford, Harrison (I)",
              "name": "Harrison Ford",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Indy"
              ],
              "roles": [
                  {
                      "character": "Indy",
                      "characterId": "/character/ch0001063/"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0000261/",
              "legacyNameText": "Allen, Karen (I)",
              "name": "Karen Allen",
              "billing": 2,
              "category": "actress",
              "characters": [
                  "Marion"
              ],
              "roles": [
                  {
                      "character": "Marion",
                      "characterId": "/character/ch0001065/"
                  }
              ]
          },
          {
              "disambiguation": "I",
              "id": "/name/nm0293550/",
              "legacyNameText": "Freeman, Paul (I)",
              "name": "Paul Freeman",
              "billing": 3,
              "category": "actor",
              "characters": [
                  "Belloq"
              ],
              "roles": [
                  {
                      "character": "Belloq",
                      "characterId": "/character/ch0185892/"
                  }
              ]
          }
      ]
  },
  {
      "akas": [
          "India Amareifio",
          "India Ria Amarteifio"
      ],
      "id": "/name/nm6042130/",
      "image": {
          "height": 2000,
          "id": "/name/nm6042130/images/rm2375135489",
          "url": "https://m.media-amazon.com/images/M/MV5BYTJjMGQwMWMtOTViNS00ZmJlLTg5MjYtNzMwODA0NDAzMGYwXkEyXkFqcGdeQXVyNjU2NjQxMDY@._V1_.jpg",
          "width": 1600
      },
      "legacyNameText": "Amarteifio, India",
      "name": "India Amarteifio",
      "knownFor": [
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Lizzie"
                      ],
                      "endYear": 2019,
                      "episodeCount": 1,
                      "roles": [
                          {
                              "character": "Lizzie"
                          }
                      ],
                      "startYear": 2019
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Lizzie"
                  ],
                  "displayYear": "2019"
              },
              "id": "/title/tt7767422/",
              "title": "Sex Education",
              "titleType": "tvSeries",
              "year": 2019
          },
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Sophie"
                      ],
                      "endYear": 2017,
                      "episodeCount": 3,
                      "roles": [
                          {
                              "character": "Sophie",
                              "characterId": "/character/ch0585380/"
                          }
                      ],
                      "startYear": 2017
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Sophie"
                  ],
                  "displayYear": "2017"
              },
              "id": "/title/tt2303687/",
              "title": "Line of Duty",
              "titleType": "tvSeries",
              "year": 2012
          },
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Alison"
                      ],
                      "endYear": 2015,
                      "episodeCount": 1,
                      "roles": [
                          {
                              "character": "Alison"
                          }
                      ],
                      "startYear": 2015
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Alison"
                  ],
                  "displayYear": "2015"
              },
              "id": "/title/tt0436992/",
              "title": "Doctor Who",
              "titleType": "tvSeries",
              "year": 2005
          },
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Maya Roebuck"
                      ],
                      "endYear": 2018,
                      "episodeCount": 6,
                      "roles": [
                          {
                              "character": "Maya Roebuck"
                          }
                      ],
                      "startYear": 2017
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Maya Roebuck"
                  ],
                  "displayYear": "2017-2018"
              },
              "id": "/title/tt2711738/",
              "title": "The Tunnel",
              "titleType": "tvSeries",
              "year": 2013
          }
      ]
  },
  {
      "akas": [
          "India",
          "India Van Dien"
      ],
      "id": "/name/nm1172949/",
      "image": {
          "height": 690,
          "id": "/name/nm1172949/images/rm3379928320",
          "url": "https://m.media-amazon.com/images/M/MV5BMTY0OTc2MTMyNl5BMl5BanBnXkFtZTcwNTA3MTkyMQ@@._V1_.jpg",
          "width": 450
      },
      "legacyNameText": "Oxenberg, India",
      "name": "India Oxenberg",
      "knownFor": [
          {
              "crew": [
                  {
                      "category": "miscellaneous",
                      "job": "assistant: Mr Brosnan"
                  }
              ],
              "summary": {
                  "category": "miscellaneous",
                  "displayYear": "2014"
              },
              "id": "/title/tt2402157/",
              "title": "The November Man",
              "titleType": "movie",
              "year": 2014
          },
          {
              "cast": [
                  {
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Mattie"
                      ],
                      "roles": [
                          {
                              "character": "Mattie"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Mattie"
                  ],
                  "displayYear": "2002"
              },
              "id": "/title/tt0281334/",
              "title": "The Vector File",
              "titleType": "tvMovie",
              "year": 2002
          },
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Pixie Teammate"
                      ],
                      "roles": [
                          {
                              "character": "Pixie Teammate"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Pixie Teammate"
                  ],
                  "displayYear": "2012"
              },
              "id": "/title/tt1884369/",
              "title": "Noobz",
              "titleType": "movie",
              "year": 2012
          },
          {
              "cast": [
                  {
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "endYear": 2020,
                      "episodeCount": 4,
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ],
                      "startYear": 2020
                  }
              ],
              "crew": [
                  {
                      "category": "producer",
                      "endYear": 2020,
                      "episodeCount": 4,
                      "job": "executive producer",
                      "startYear": 2020
                  }
              ],
              "summary": {
                  "category": "producer",
                  "displayYear": "2020"
              },
              "id": "/title/tt13269706/",
              "title": "Seduced: Inside the NXIVM Cult",
              "titleType": "tvMiniSeries",
              "year": 2020
          }
      ]
  },
  {
      "disambiguation": "I",
      "id": "/name/nm7014833/",
      "legacyNameText": "Brown, India (I)",
      "name": "India Brown",
      "knownFor": [
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Jamila Huston"
                      ],
                      "endYear": 2021,
                      "episodeCount": 8,
                      "roles": [
                          {
                              "character": "Jamila Huston"
                          }
                      ],
                      "startYear": 2021
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Jamila Huston"
                  ],
                  "displayYear": "2021"
              },
              "id": "/title/tt9737326/",
              "title": "Invasion",
              "titleType": "tvSeries",
              "year": 2021
          },
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Ella Hoy"
                      ],
                      "endYear": 2020,
                      "episodeCount": 3,
                      "roles": [
                          {
                              "character": "Ella Hoy"
                          }
                      ],
                      "startYear": 2020
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Ella Hoy"
                  ],
                  "displayYear": "2020"
              },
              "disambiguation": "I",
              "id": "/title/tt9698480/",
              "title": "The Stranger",
              "titleType": "tvMiniSeries",
              "year": 2020
          },
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Peggy Nan"
                      ],
                      "endYear": 2017,
                      "episodeCount": 1,
                      "roles": [
                          {
                              "character": "Peggy Nan"
                          }
                      ],
                      "startYear": 2017
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Peggy Nan"
                  ],
                  "displayYear": "2017"
              },
              "id": "/title/tt3498622/",
              "title": "Fortitude",
              "titleType": "tvSeries",
              "year": 2015
          },
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Susan"
                      ],
                      "endYear": 2021,
                      "episodeCount": 6,
                      "roles": [
                          {
                              "character": "Susan"
                          }
                      ],
                      "startYear": 2019
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Susan"
                  ],
                  "displayYear": "2019-2021"
              },
              "id": "/title/tt10516874/",
              "title": "Worzel Gummidge",
              "titleType": "tvSeries",
              "year": 2019
          }
      ]
  },
  {
      "id": "/name/nm0874086/",
      "image": {
          "height": 416,
          "id": "/name/nm0874086/images/rm2999030272",
          "url": "https://m.media-amazon.com/images/M/MV5BMjAxMTU5OTc3NV5BMl5BanBnXkFtZTcwNzA1OTIzMQ@@._V1_.jpg",
          "width": 350
      },
      "legacyNameText": "True, Rachel",
      "name": "Rachel True",
      "knownFor": [
          {
              "cast": [
                  {
                      "billing": 4,
                      "category": "actress",
                      "characters": [
                          "Rochelle"
                      ],
                      "roles": [
                          {
                              "character": "Rochelle",
                              "characterId": "/character/ch0014044/"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Rochelle"
                  ],
                  "displayYear": "1996"
              },
              "id": "/title/tt0115963/",
              "title": "The Craft",
              "titleType": "movie",
              "year": 1996
          },
          {
              "cast": [
                  {
                      "billing": 5,
                      "category": "actress",
                      "characters": [
                          "Mary Jane Potman"
                      ],
                      "roles": [
                          {
                              "character": "Mary Jane Potman"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Mary Jane Potman"
                  ],
                  "displayYear": "1998"
              },
              "id": "/title/tt0120693/",
              "title": "Half Baked",
              "titleType": "movie",
              "year": 1998
          },
          {
              "cast": [
                  {
                      "billing": 10,
                      "category": "actress",
                      "characters": [
                          "Beth"
                      ],
                      "roles": [
                          {
                              "character": "Beth",
                              "characterId": "/character/ch0259692/"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Beth"
                  ],
                  "displayYear": "2000"
              },
              "id": "/title/tt0212974/",
              "title": "Groove",
              "titleType": "movie",
              "year": 2000
          },
          {
              "cast": [
                  {
                      "category": "actress",
                      "characters": [
                          "Mona Thorne"
                      ],
                      "endYear": 2006,
                      "episodeCount": 91,
                      "roles": [
                          {
                              "character": "Mona Thorne"
                          }
                      ],
                      "startYear": 2002
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Mona Thorne"
                  ],
                  "displayYear": "2002-2006"
              },
              "id": "/title/tt0320024/",
              "title": "Half & Half",
              "titleType": "tvSeries",
              "year": 2002
          }
      ]
  },
  {
      "id": "/title/tt0871510/",
      "image": {
          "height": 400,
          "id": "/title/tt0871510/images/rm4257369600",
          "url": "https://m.media-amazon.com/images/M/MV5BMTUzODMyNzk4NV5BMl5BanBnXkFtZTgwNTk1NTYyNTM@._V1_.jpg",
          "width": 300
      },
      "runningTimeInMinutes": 153,
      "title": "Let's Go! India",
      "titleType": "movie",
      "year": 2007,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0451321/",
              "legacyNameText": "Khan, Shah Rukh (I)",
              "name": "Shah Rukh Khan",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Kabir Khan"
              ],
              "roles": [
                  {
                      "character": "Kabir Khan",
                      "characterId": "/character/ch0037689/"
                  }
              ]
          },
          {
              "id": "/name/nm1540244/",
              "legacyNameText": "Malvade, Vidya",
              "name": "Vidya Malvade",
              "billing": 2,
              "category": "actress",
              "characters": [
                  "Vidya Sharma"
              ],
              "roles": [
                  {
                      "character": "Vidya Sharma"
                  }
              ]
          },
          {
              "id": "/name/nm2469366/",
              "legacyNameText": "Ghatge, Sagarika",
              "name": "Sagarika Ghatge",
              "billing": 3,
              "category": "actress",
              "characters": [
                  "Preety Sabharwal"
              ],
              "roles": [
                  {
                      "character": "Preety Sabharwal"
                  }
              ]
          }
      ]
  },
  {
      "akas": [
          "Persis Khambata",
          "Poonam"
      ],
      "id": "/name/nm0001422/",
      "image": {
          "height": 2048,
          "id": "/name/nm0001422/images/rm2114890496",
          "url": "https://m.media-amazon.com/images/M/MV5BMzEzNjUzNzY5OV5BMl5BanBnXkFtZTcwOTAxOTkxOA@@._V1_.jpg",
          "width": 1583
      },
      "legacyNameText": "Khambatta, Persis",
      "name": "Persis Khambatta",
      "knownFor": [
          {
              "cast": [
                  {
                      "billing": 9,
                      "category": "actress",
                      "characters": [
                          "Ilia"
                      ],
                      "roles": [
                          {
                              "character": "Ilia",
                              "characterId": "/character/ch0001591/"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Ilia"
                  ],
                  "displayYear": "1979"
              },
              "id": "/title/tt0079945/",
              "title": "Star Trek: The Motion Picture",
              "titleType": "movie",
              "year": 1979
          },
          {
              "cast": [
                  {
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Nastasia"
                      ],
                      "roles": [
                          {
                              "character": "Nastasia",
                              "characterId": "/character/ch0052163/"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Nastasia"
                  ],
                  "displayYear": "1984"
              },
              "id": "/title/tt0088380/",
              "title": "Warrior of the Lost World",
              "titleType": "movie",
              "year": 1984
          },
          {
              "cast": [
                  {
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Cobalt"
                      ],
                      "roles": [
                          {
                              "character": "Cobalt"
                          }
                      ]
                  }
              ],
              "crew": [
                  {
                      "category": "producer",
                      "job": "associate producer"
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Cobalt"
                  ],
                  "displayYear": "1988"
              },
              "id": "/title/tt0093731/",
              "title": "Phoenix the Warrior",
              "titleType": "movie",
              "year": 1988
          },
          {
              "cast": [
                  {
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Zara"
                      ],
                      "roles": [
                          {
                              "character": "Zara"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Zara"
                  ],
                  "displayYear": "1982"
              },
              "id": "/title/tt0084316/",
              "title": "Megaforce",
              "titleType": "movie",
              "year": 1982
          }
      ]
  },
  {
      "id": "/title/tt0097576/",
      "image": {
          "height": 1500,
          "id": "/title/tt0097576/images/rm3869839617",
          "url": "https://m.media-amazon.com/images/M/MV5BY2Q0ODg4ZmItNDZiYi00ZWY5LTg2NzctNmYwZjA5OThmNzE1XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg",
          "width": 1009
      },
      "runningTimeInMinutes": 127,
      "title": "Indiana Jones and the Last Crusade",
      "titleType": "movie",
      "year": 1989,
      "principals": [
          {
              "disambiguation": "I",
              "id": "/name/nm0000148/",
              "legacyNameText": "Ford, Harrison (I)",
              "name": "Harrison Ford",
              "billing": 1,
              "category": "actor",
              "characters": [
                  "Indiana Jones"
              ],
              "roles": [
                  {
                      "character": "Indiana Jones",
                      "characterId": "/character/ch0001063/"
                  }
              ]
          },
          {
              "id": "/name/nm0000125/",
              "legacyNameText": "Connery, Sean",
              "name": "Sean Connery",
              "billing": 2,
              "category": "actor",
              "characters": [
                  "Professor Henry Jones"
              ],
              "roles": [
                  {
                      "character": "Professor Henry Jones",
                      "characterId": "/character/ch0001064/"
                  }
              ]
          },
          {
              "id": "/name/nm0233145/",
              "legacyNameText": "Doody, Alison",
              "name": "Alison Doody",
              "billing": 4,
              "category": "actress",
              "characters": [
                  "Elsa"
              ],
              "roles": [
                  {
                      "character": "Elsa",
                      "characterId": "/character/ch0001070/"
                  }
              ]
          }
      ]
  },
  {
      "id": "/title/tt2792284/",
      "image": {
          "height": 750,
          "id": "/title/tt2792284/images/rm3408584704",
          "url": "https://m.media-amazon.com/images/M/MV5BNzhiZjY3YTUtZWQxMS00ZTQ5LWEzNWQtY2UxYWQ0YTE3NGYxXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg",
          "width": 600
      },
      "runningTimeInMinutes": 60,
      "nextEpisode": "/title/tt2934212/",
      "numberOfEpisodes": 48,
      "seriesEndYear": 2016,
      "seriesStartYear": 2013,
      "title": "24: India",
      "titleType": "tvSeries",
      "year": 2013,
      "principals": [
          {
              "disambiguation": "IV",
              "id": "/name/nm0438463/",
              "legacyNameText": "Kapoor, Anil (IV)",
              "name": "Anil Kapoor",
              "category": "actor",
              "characters": [
                  "Jai Singh Rathod"
              ],
              "endYear": 2016,
              "episodeCount": 48,
              "roles": [
                  {
                      "character": "Jai Singh Rathod",
                      "characterId": "/character/ch0009881/"
                  }
              ],
              "startYear": 2013
          },
          {
              "id": "/name/nm2161624/",
              "legacyNameText": "Bhoopalam, Neil",
              "name": "Neil Bhoopalam",
              "category": "actor",
              "characters": [
                  "Aditya Singhania"
              ],
              "endYear": 2016,
              "episodeCount": 47,
              "roles": [
                  {
                      "character": "Aditya Singhania",
                      "characterId": "/character/ch0009890/"
                  }
              ],
              "startYear": 2013
          },
          {
              "id": "/name/nm4392215/",
              "legacyNameText": "Chanana, Raaghavv",
              "name": "Raaghavv Chanana",
              "category": "actor",
              "characters": [
                  "Prithvi Singhania"
              ],
              "endYear": 2016,
              "episodeCount": 42,
              "roles": [
                  {
                      "character": "Prithvi Singhania",
                      "characterId": "/character/ch0009929/"
                  }
              ],
              "startYear": 2013
          }
      ]
  },
  {
      "akas": [
          "India Salvor Menuez",
          "India Menuez"
      ],
      "id": "/name/nm4186055/",
      "image": {
          "height": 1000,
          "id": "/name/nm4186055/images/rm2260155648",
          "url": "https://m.media-amazon.com/images/M/MV5BZmU5MGU4N2QtNWNiZC00NDBiLWE0YzAtYjZjNjg3ZTViNmQxXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg",
          "width": 749
      },
      "legacyNameText": "Menuez, Bobbi Salvör",
      "name": "Bobbi Salvör Menuez",
      "knownFor": [
          {
              "cast": [
                  {
                      "as": "India Menuez",
                      "billing": 44,
                      "category": "actress",
                      "characters": [
                          "Shooting Star #1"
                      ],
                      "roles": [
                          {
                              "character": "Shooting Star #1"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Shooting Star #1"
                  ],
                  "displayYear": "2018"
              },
              "id": "/title/tt5691670/",
              "title": "Under the Silver Lake",
              "titleType": "movie",
              "year": 2018
          },
          {
              "cast": [
                  {
                      "as": "India Menuez",
                      "billing": 13,
                      "category": "actress",
                      "characters": [
                          "Samantha Morrow"
                      ],
                      "roles": [
                          {
                              "character": "Samantha Morrow"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Samantha Morrow"
                  ],
                  "displayYear": "2016"
              },
              "id": "/title/tt4550098/",
              "title": "Nocturnal Animals",
              "titleType": "movie",
              "year": 2016
          },
          {
              "cast": [
                  {
                      "as": "India Menuez",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Kendra Baker"
                      ],
                      "roles": [
                          {
                              "character": "Kendra Baker",
                              "characterId": "/character/ch0367519/"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Kendra Baker"
                  ],
                  "displayYear": "2015"
              },
              "id": "/title/tt2282737/",
              "title": "The Breakup Girl",
              "titleType": "movie",
              "year": 2015
          },
          {
              "cast": [
                  {
                      "as": "India Menuez",
                      "billing": 10,
                      "category": "actress",
                      "characters": [
                          "Sophie"
                      ],
                      "roles": [
                          {
                              "character": "Sophie",
                              "characterId": "/character/ch0578983/"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Sophie"
                  ],
                  "displayYear": "2017"
              },
              "disambiguation": "I",
              "id": "/title/tt5737862/",
              "title": "Landline",
              "titleType": "movie",
              "year": 2017
          }
      ]
  },
  {
      "id": "/name/nm4280460/",
      "legacyNameText": "Hair, India",
      "name": "India Hair",
      "knownFor": [
          {
              "cast": [
                  {
                      "billing": 4,
                      "category": "actress",
                      "characters": [
                          "Alice"
                      ],
                      "roles": [
                          {
                              "character": "Alice"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Alice"
                  ],
                  "displayYear": "2012"
              },
              "id": "/title/tt2253939/",
              "title": "Camille Rewinds",
              "titleType": "movie",
              "year": 2012
          },
          {
              "cast": [
                  {
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Signe",
                          "Florence"
                      ],
                      "roles": [
                          {
                              "character": "Signe"
                          },
                          {
                              "character": "Florence"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Signe",
                      "Florence"
                  ],
                  "displayYear": "2019"
              },
              "id": "/title/tt10270800/",
              "title": "The Tears Thing",
              "titleType": "short",
              "year": 2019
          },
          {
              "cast": [
                  {
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Lucie"
                      ],
                      "roles": [
                          {
                              "character": "Lucie"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Lucie"
                  ],
                  "displayYear": "2019"
              },
              "id": "/title/tt9164788/",
              "title": "Sexfish",
              "titleType": "movie",
              "year": 2019
          },
          {
              "cast": [
                  {
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Marie"
                      ],
                      "roles": [
                          {
                              "character": "Marie",
                              "characterId": "/character/ch0557954/"
                          }
                      ]
                  }
              ],
              "summary": {
                  "category": "actress",
                  "characters": [
                      "Marie"
                  ],
                  "displayYear": "2016"
              },
              "id": "/title/tt5231812/",
              "title": "Staying Vertical",
              "titleType": "movie",
              "year": 2016
          }
      ]
  }
]
// let fianl_data=[...a1,...a2,...a3]
let fianl_data=[
  {
      "@meta": {
          "operation": "Search",
          "requestId": "e0fe6d34-3b06-45fc-9d2e-8e6ff8bca5dc",
          "serviceTimeMs": 3.15204
      },
      "@type": "imdb.api.find.response",
      "query": "tt0499549",
      "results": [
          {
              "id": "/title/tt0499549/",
              "image": {
                  "height": 2902,
                  "id": "/title/tt0499549/images/rm2864126209",
                  "url": "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
                  "width": 1965
              },
              "runningTimeInMinutes": 162,
              "title": "Avatar",
              "titleType": "movie",
              "year": 2009,
              "principals": [
                  {
                      "id": "/name/nm0941777/",
                      "legacyNameText": "Worthington, Sam",
                      "name": "Sam Worthington",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Jake Sully"
                      ],
                      "roles": [
                          {
                              "character": "Jake Sully",
                              "characterId": "/character/ch0098390/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0757855/",
                      "legacyNameText": "Saldana, Zoe (I)",
                      "name": "Zoe Saldana",
                      "as": "Zoë Saldana",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Neytiri"
                      ],
                      "roles": [
                          {
                              "character": "Neytiri",
                              "characterId": "/character/ch0098391/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000244/",
                      "legacyNameText": "Weaver, Sigourney (I)",
                      "name": "Sigourney Weaver",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Dr. Grace Augustine"
                      ],
                      "roles": [
                          {
                              "character": "Dr. Grace Augustine",
                              "characterId": "/character/ch0062576/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "3c18f6ab-9a6e-4966-8819-2c050a6a1b8a",
          "serviceTimeMs": 2.367636
      },
      "@type": "imdb.api.find.response",
      "query": "tt10640346",
      "results": [
          {
              "disambiguation": "I",
              "id": "/title/tt10640346/",
              "image": {
                  "height": 3000,
                  "id": "/title/tt10640346/images/rm865155841",
                  "url": "https://m.media-amazon.com/images/M/MV5BNjlkYjc4NGMtZjc3MS00NjQ3LTk4MmUtMTkwZGZjODE1ZDVlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
                  "width": 2025
              },
              "runningTimeInMinutes": 189,
              "title": "Babylon",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000093/",
                      "legacyNameText": "Pitt, Brad",
                      "name": "Brad Pitt",
                      "billing": 16,
                      "category": "actor",
                      "characters": [
                          "Jack Conrad"
                      ],
                      "roles": [
                          {
                              "character": "Jack Conrad"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3053338/",
                      "legacyNameText": "Robbie, Margot",
                      "name": "Margot Robbie",
                      "billing": 14,
                      "category": "actress",
                      "characters": [
                          "Nellie LaRoy"
                      ],
                      "roles": [
                          {
                              "character": "Nellie LaRoy"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0005443/",
                      "legacyNameText": "Smart, Jean",
                      "name": "Jean Smart",
                      "billing": 11,
                      "category": "actress",
                      "characters": [
                          "Elinor St. John"
                      ],
                      "roles": [
                          {
                              "character": "Elinor St. John"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "a263cf3c-0fe7-4083-b9ca-2caf87500925",
          "serviceTimeMs": 3.088205
      },
      "@type": "imdb.api.find.response",
      "query": "tt11564570",
      "results": [
          {
              "id": "/title/tt11564570/",
              "image": {
                  "height": 2222,
                  "id": "/title/tt11564570/images/rm3932489473",
                  "url": "https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
                  "width": 1482
              },
              "runningTimeInMinutes": 139,
              "title": "Glass Onion: A Knives Out Mystery",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0185819/",
                      "legacyNameText": "Craig, Daniel (I)",
                      "name": "Daniel Craig",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Benoit Blanc"
                      ],
                      "roles": [
                          {
                              "character": "Benoit Blanc"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0001570/",
                      "legacyNameText": "Norton, Edward (I)",
                      "name": "Edward Norton",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Miles Bron"
                      ],
                      "roles": [
                          {
                              "character": "Miles Bron"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0005028/",
                      "legacyNameText": "Hudson, Kate (I)",
                      "name": "Kate Hudson",
                      "billing": 6,
                      "category": "actress",
                      "characters": [
                          "Birdie Jay"
                      ],
                      "roles": [
                          {
                              "character": "Birdie Jay"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "c9da30af-80ae-4596-86a5-1cdf8719ede6",
          "serviceTimeMs": 3.225377
      },
      "@type": "imdb.api.find.response",
      "query": "tt15398776",
      "results": [
          {
              "id": "/title/tt15398776/",
              "image": {
                  "height": 2048,
                  "id": "/title/tt15398776/images/rm3846114049",
                  "url": "https://m.media-amazon.com/images/M/MV5BMDI5ZTVmMmMtZjg1Ny00NzNkLWFkMDctZDlmMzQ4MDcyODZlXkEyXkFqcGdeQXVyMzM1NDY1MDE@._V1_.jpg",
                  "width": 1294
              },
              "title": "Oppenheimer",
              "titleType": "movie",
              "year": 2023,
              "principals": [
                  {
                      "id": "/name/nm0614165/",
                      "legacyNameText": "Murphy, Cillian",
                      "name": "Cillian Murphy",
                      "category": "actor",
                      "characters": [
                          "J. Robert Oppenheimer"
                      ],
                      "roles": [
                          {
                              "character": "J. Robert Oppenheimer"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1289434/",
                      "legacyNameText": "Blunt, Emily",
                      "name": "Emily Blunt",
                      "category": "actress",
                      "characters": [
                          "Kitty Oppenheimer"
                      ],
                      "roles": [
                          {
                              "character": "Kitty Oppenheimer"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000354/",
                      "legacyNameText": "Damon, Matt",
                      "name": "Matt Damon",
                      "category": "actor",
                      "characters": [
                          "Leslie Groves Jr."
                      ],
                      "roles": [
                          {
                              "character": "Leslie Groves Jr."
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "c17236e5-9dfc-42f6-a564-1d8296d57996",
          "serviceTimeMs": 2.997875
      },
      "@type": "imdb.api.find.response",
      "query": "tt12003946",
      "results": [
          {
              "id": "/title/tt12003946/",
              "image": {
                  "height": 1350,
                  "id": "/title/tt12003946/images/rm1186005505",
                  "url": "https://m.media-amazon.com/images/M/MV5BYzg2NWNhOWItYjA3Yi00MzhhLTg4ZmItYzM3ZTIwN2U0ZGQ5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_.jpg",
                  "width": 1080
              },
              "runningTimeInMinutes": 112,
              "title": "Violent Night",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm1092086/",
                      "legacyNameText": "Harbour, David (I)",
                      "name": "David Harbour",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Santa"
                      ],
                      "roles": [
                          {
                              "character": "Santa"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000491/",
                      "legacyNameText": "Leguizamo, John",
                      "name": "John Leguizamo",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Scrooge"
                      ],
                      "roles": [
                          {
                              "character": "Scrooge"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000350/",
                      "legacyNameText": "D'Angelo, Beverly (I)",
                      "name": "Beverly D'Angelo",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Gertrude"
                      ],
                      "roles": [
                          {
                              "character": "Gertrude"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "86454e96-652c-438c-b135-a9373133761f",
          "serviceTimeMs": 148.875329
      },
      "@type": "imdb.api.find.response",
      "query": "tt6443346",
      "results": [
          {
              "id": "/title/tt6443346/",
              "image": {
                  "height": 4096,
                  "id": "/title/tt6443346/images/rm2091778049",
                  "url": "https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
                  "width": 2764
              },
              "runningTimeInMinutes": 125,
              "title": "Black Adam",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0425005/",
                      "legacyNameText": "Johnson, Dwayne (I)",
                      "name": "Dwayne Johnson",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Black Adam",
                          "Teth Adam"
                      ],
                      "roles": [
                          {
                              "character": "Black Adam",
                              "characterId": "/character/ch0062706/"
                          },
                          {
                              "character": "Teth Adam"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0388038/",
                      "legacyNameText": "Hodge, Aldis",
                      "name": "Aldis Hodge",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Hawkman",
                          "Carter Hall"
                      ],
                      "roles": [
                          {
                              "character": "Hawkman"
                          },
                          {
                              "character": "Carter Hall"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000112/",
                      "legacyNameText": "Brosnan, Pierce",
                      "name": "Pierce Brosnan",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Dr. Fate",
                          "Kent Nelson"
                      ],
                      "roles": [
                          {
                              "character": "Dr. Fate"
                          },
                          {
                              "character": "Kent Nelson"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "1bc3b357-adad-4e29-b2d3-256dd0905d9d",
          "serviceTimeMs": 2.776262
      },
      "@type": "imdb.api.find.response",
      "query": "tt11813216",
      "results": [
          {
              "id": "/title/tt11813216/",
              "image": {
                  "height": 5625,
                  "id": "/title/tt11813216/images/rm1356926465",
                  "url": "https://m.media-amazon.com/images/M/MV5BM2NlZDI0ZDktNTg5OS00ZjQ1LWI4MDEtN2I0MDE5NWRiNzA4XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
                  "width": 3695
              },
              "runningTimeInMinutes": 114,
              "title": "The Banshees of Inisherin",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0268199/",
                      "legacyNameText": "Farrell, Colin (I)",
                      "name": "Colin Farrell",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Pádraic Súilleabháin"
                      ],
                      "roles": [
                          {
                              "character": "Pádraic Súilleabháin"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0322407/",
                      "legacyNameText": "Gleeson, Brendan",
                      "name": "Brendan Gleeson",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Colm Doherty"
                      ],
                      "roles": [
                          {
                              "character": "Colm Doherty"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0174403/",
                      "legacyNameText": "Condon, Kerry",
                      "name": "Kerry Condon",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Siobhán Súilleabháin"
                      ],
                      "roles": [
                          {
                              "character": "Siobhán Súilleabháin"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "c1b494fd-0f82-4676-a28d-dcbb30a93540",
          "serviceTimeMs": 174.946007
      },
      "@type": "imdb.api.find.response",
      "query": "tt1517268",
      "results": [
          {
              "id": "/title/tt1517268/",
              "image": {
                  "height": 4096,
                  "id": "/title/tt1517268/images/rm418135553",
                  "url": "https://m.media-amazon.com/images/M/MV5BMzQ3NTRjZDUtNGVhYS00OWQ0LTljMjEtYzJkOGJhYWViNjIxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
                  "width": 2764
              },
              "title": "Barbie",
              "titleType": "movie",
              "year": 2023,
              "principals": [
                  {
                      "id": "/name/nm3053338/",
                      "legacyNameText": "Robbie, Margot",
                      "name": "Margot Robbie",
                      "category": "actress",
                      "characters": [
                          "Barbie"
                      ],
                      "roles": [
                          {
                              "character": "Barbie"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0002071/",
                      "legacyNameText": "Ferrell, Will (I)",
                      "name": "Will Ferrell",
                      "category": "actor"
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000545/",
                      "legacyNameText": "Mirren, Helen (I)",
                      "name": "Helen Mirren",
                      "category": "actress"
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "a6612a60-2420-4822-b8f8-c951bdb97d60",
          "serviceTimeMs": 151.162018
      },
      "@type": "imdb.api.find.response",
      "query": "tt1488589",
      "results": [
          {
              "id": "/title/tt1488589/",
              "image": {
                  "height": 1778,
                  "id": "/title/tt1488589/images/rm2421293313",
                  "url": "https://m.media-amazon.com/images/M/MV5BNjBhZjNkNDItODcxMS00ZGNmLTk3ODUtOGU1NWI3N2Q3YmM1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
                  "width": 1200
              },
              "runningTimeInMinutes": 117,
              "title": "Guillermo del Toro's Pinocchio",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000191/",
                      "legacyNameText": "McGregor, Ewan",
                      "name": "Ewan McGregor",
                      "attr": [
                          "voice"
                      ],
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Cricket"
                      ],
                      "roles": [
                          {
                              "character": "Cricket"
                          }
                      ]
                  },
                  {
                      "disambiguation": "IV",
                      "id": "/name/nm0103195/",
                      "legacyNameText": "Bradley, David (IV)",
                      "name": "David Bradley",
                      "attr": [
                          "voice"
                      ],
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Geppetto"
                      ],
                      "roles": [
                          {
                              "character": "Geppetto"
                          }
                      ]
                  },
                  {
                      "disambiguation": "V",
                      "id": "/name/nm9640481/",
                      "legacyNameText": "Mann, Gregory (V)",
                      "name": "Gregory Mann",
                      "attr": [
                          "voice"
                      ],
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Pinocchio",
                          "Carlo"
                      ],
                      "roles": [
                          {
                              "character": "Pinocchio"
                          },
                          {
                              "character": "Carlo"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "b0d7afcc-fc40-4129-abb9-0701c709b1bf",
          "serviceTimeMs": 153.3212
      },
      "@type": "imdb.api.find.response",
      "query": "tt12593682",
      "results": [
          {
              "id": "/title/tt12593682/",
              "image": {
                  "height": 1500,
                  "id": "/title/tt12593682/images/rm36704513",
                  "url": "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                  "width": 1012
              },
              "runningTimeInMinutes": 127,
              "title": "Bullet Train",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000093/",
                      "legacyNameText": "Pitt, Brad",
                      "name": "Brad Pitt",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Ladybug"
                      ],
                      "roles": [
                          {
                              "character": "Ladybug"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1428821/",
                      "legacyNameText": "King, Joey",
                      "name": "Joey King",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Prince"
                      ],
                      "roles": [
                          {
                              "character": "Prince"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1093951/",
                      "legacyNameText": "Taylor-Johnson, Aaron",
                      "name": "Aaron Taylor-Johnson",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Tangerine"
                      ],
                      "roles": [
                          {
                              "character": "Tangerine"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "764c673e-7168-4ee9-aee1-54c336f50651",
          "serviceTimeMs": 155.139979
      },
      "@type": "imdb.api.find.response",
      "query": "tt0314331",
      "results": [
          {
              "id": "/title/tt0314331/",
              "image": {
                  "height": 600,
                  "id": "/title/tt0314331/images/rm3436419328",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
                  "width": 405
              },
              "runningTimeInMinutes": 135,
              "title": "Love Actually",
              "titleType": "movie",
              "year": 2003,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000424/",
                      "legacyNameText": "Grant, Hugh (I)",
                      "name": "Hugh Grant",
                      "billing": 16,
                      "category": "actor",
                      "characters": [
                          "The Prime Minister"
                      ],
                      "roles": [
                          {
                              "character": "The Prime Minister",
                              "characterId": "/character/ch0005813/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0567356/",
                      "legacyNameText": "McCutcheon, Martine",
                      "name": "Martine McCutcheon",
                      "billing": 20,
                      "category": "actress",
                      "characters": [
                          "Natalie"
                      ],
                      "roles": [
                          {
                              "character": "Natalie",
                              "characterId": "/character/ch0005822/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000553/",
                      "legacyNameText": "Neeson, Liam",
                      "name": "Liam Neeson",
                      "billing": 6,
                      "category": "actor",
                      "characters": [
                          "Daniel"
                      ],
                      "roles": [
                          {
                              "character": "Daniel",
                              "characterId": "/character/ch0005811/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "7c7565a7-6003-46c2-8b17-7d42f948f80a",
          "serviceTimeMs": 277.575576
      },
      "@type": "imdb.api.find.response",
      "query": "tt0097958",
      "results": [
          {
              "id": "/title/tt0097958/",
              "image": {
                  "height": 770,
                  "id": "/title/tt0097958/images/rm1330124800",
                  "url": "https://m.media-amazon.com/images/M/MV5BMGZkMWQ2MzMtYTkxYS00OThmLWI0ZTQtNmY0ZTkyY2E4MjliXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                  "width": 520
              },
              "runningTimeInMinutes": 97,
              "title": "National Lampoon's Christmas Vacation",
              "titleType": "movie",
              "year": 1989,
              "principals": [
                  {
                      "id": "/name/nm0000331/",
                      "legacyNameText": "Chase, Chevy",
                      "name": "Chevy Chase",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Clark Griswold"
                      ],
                      "roles": [
                          {
                              "character": "Clark Griswold",
                              "characterId": "/character/ch0005918/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000350/",
                      "legacyNameText": "D'Angelo, Beverly (I)",
                      "name": "Beverly D'Angelo",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Ellen Griswold"
                      ],
                      "roles": [
                          {
                              "character": "Ellen Griswold",
                              "characterId": "/character/ch0005920/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000496/",
                      "legacyNameText": "Lewis, Juliette (I)",
                      "name": "Juliette Lewis",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Audrey Griswold"
                      ],
                      "roles": [
                          {
                              "character": "Audrey Griswold",
                              "characterId": "/character/ch0005916/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "b98c6162-da98-4ddf-ba91-a8229fa5ef0c",
          "serviceTimeMs": 154.564673
      },
      "@type": "imdb.api.find.response",
      "query": "tt8946378",
      "results": [
          {
              "id": "/title/tt8946378/",
              "image": {
                  "height": 2880,
                  "id": "/title/tt8946378/images/rm2569376769",
                  "url": "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg",
                  "width": 1944
              },
              "runningTimeInMinutes": 130,
              "title": "Knives Out",
              "titleType": "movie",
              "year": 2019,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0185819/",
                      "legacyNameText": "Craig, Daniel (I)",
                      "name": "Daniel Craig",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Benoit Blanc"
                      ],
                      "roles": [
                          {
                              "character": "Benoit Blanc"
                          }
                      ]
                  },
                  {
                      "disambiguation": "V",
                      "id": "/name/nm0262635/",
                      "legacyNameText": "Evans, Chris (V)",
                      "name": "Chris Evans",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Ransom Drysdale"
                      ],
                      "roles": [
                          {
                              "character": "Ransom Drysdale"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1869101/",
                      "legacyNameText": "de Armas, Ana",
                      "name": "Ana de Armas",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Marta Cabrera"
                      ],
                      "roles": [
                          {
                              "character": "Marta Cabrera"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "68868ea1-e324-41dc-859d-200fb27c6d25",
          "serviceTimeMs": 151.088317
      },
      "@type": "imdb.api.find.response",
      "query": "tt10999120",
      "results": [
          {
              "id": "/title/tt10999120/",
              "image": {
                  "height": 1000,
                  "id": "/title/tt10999120/images/rm1715405825",
                  "url": "https://m.media-amazon.com/images/M/MV5BY2RlZGFmYjAtNGZiMi00YjQ5LWE0ZmQtZmIyM2VmMjRhMTJlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
                  "width": 675
              },
              "runningTimeInMinutes": 127,
              "title": "Spirited",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0002071/",
                      "legacyNameText": "Ferrell, Will (I)",
                      "name": "Will Ferrell",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Present"
                      ],
                      "roles": [
                          {
                              "character": "Present"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0005351/",
                      "legacyNameText": "Reynolds, Ryan (I)",
                      "name": "Ryan Reynolds",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Clint Briggs"
                      ],
                      "roles": [
                          {
                              "character": "Clint Briggs"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0818055/",
                      "legacyNameText": "Spencer, Octavia",
                      "name": "Octavia Spencer",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Kimberly"
                      ],
                      "roles": [
                          {
                              "character": "Kimberly"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "2def5dd7-bedb-4a2e-b14a-49b63ce97cf8",
          "serviceTimeMs": 250.294811
      },
      "@type": "imdb.api.find.response",
      "query": "tt0099785",
      "results": [
          {
              "id": "/title/tt0099785/",
              "image": {
                  "height": 1985,
                  "id": "/title/tt0099785/images/rm3804584704",
                  "url": "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                  "width": 1335
              },
              "runningTimeInMinutes": 103,
              "title": "Home Alone",
              "titleType": "movie",
              "year": 1990,
              "principals": [
                  {
                      "id": "/name/nm0000346/",
                      "legacyNameText": "Culkin, Macaulay",
                      "name": "Macaulay Culkin",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Kevin"
                      ],
                      "roles": [
                          {
                              "character": "Kevin",
                              "characterId": "/character/ch0004114/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000582/",
                      "legacyNameText": "Pesci, Joe",
                      "name": "Joe Pesci",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Harry"
                      ],
                      "roles": [
                          {
                              "character": "Harry",
                              "characterId": "/character/ch0004115/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0827663/",
                      "legacyNameText": "Stern, Daniel (I)",
                      "name": "Daniel Stern",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Marv"
                      ],
                      "roles": [
                          {
                              "character": "Marv",
                              "characterId": "/character/ch0004118/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "fcbac972-fd54-456f-9781-0e35ac2f00dd",
          "serviceTimeMs": 162.224192
      },
      "@type": "imdb.api.find.response",
      "query": "tt0085334",
      "results": [
          {
              "id": "/title/tt0085334/",
              "image": {
                  "height": 1500,
                  "id": "/title/tt0085334/images/rm1202469120",
                  "url": "https://m.media-amazon.com/images/M/MV5BOWMyNjE0MzEtMzVjNy00NjIxLTg0ZjMtMWJhNGI1YmVjYTczL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_.jpg",
                  "width": 985
              },
              "runningTimeInMinutes": 93,
              "title": "A Christmas Story",
              "titleType": "movie",
              "year": 1983,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0082526/",
                      "legacyNameText": "Billingsley, Peter (I)",
                      "name": "Peter Billingsley",
                      "billing": 11,
                      "category": "actor",
                      "characters": [
                          "Ralphie Parker"
                      ],
                      "roles": [
                          {
                              "character": "Ralphie Parker",
                              "characterId": "/character/ch0008479/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0227039/",
                      "legacyNameText": "Dillon, Melinda",
                      "name": "Melinda Dillon",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Mother Parker"
                      ],
                      "roles": [
                          {
                              "character": "Mother Parker",
                              "characterId": "/character/ch0391779/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0569000/",
                      "legacyNameText": "McGavin, Darren",
                      "name": "Darren McGavin",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "The Old Man Parker"
                      ],
                      "roles": [
                          {
                              "character": "The Old Man Parker",
                              "characterId": "/character/ch0008481/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "79eef828-f1aa-421b-a0a2-fdbc115aecc7",
          "serviceTimeMs": 186.694472
      },
      "@type": "imdb.api.find.response",
      "query": "tt13833688",
      "results": [
          {
              "id": "/title/tt13833688/",
              "image": {
                  "height": 2863,
                  "id": "/title/tt13833688/images/rm752499201",
                  "url": "https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
                  "width": 2013
              },
              "runningTimeInMinutes": 117,
              "title": "The Whale",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000409/",
                      "legacyNameText": "Fraser, Brendan",
                      "name": "Brendan Fraser",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Charlie"
                      ],
                      "roles": [
                          {
                              "character": "Charlie"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm5584750/",
                      "legacyNameText": "Sink, Sadie",
                      "name": "Sadie Sink",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Ellie"
                      ],
                      "roles": [
                          {
                              "character": "Ellie"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1339223/",
                      "legacyNameText": "Simpkins, Ty",
                      "name": "Ty Simpkins",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Thomas"
                      ],
                      "roles": [
                          {
                              "character": "Thomas"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "440bf040-176f-4e78-b9a7-f19ef2ee3768",
          "serviceTimeMs": 160.175654
      },
      "@type": "imdb.api.find.response",
      "query": "tt1745960",
      "results": [
          {
              "id": "/title/tt1745960/",
              "image": {
                  "height": 3750,
                  "id": "/title/tt1745960/images/rm3294367489",
                  "url": "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
                  "width": 2531
              },
              "runningTimeInMinutes": 130,
              "title": "Top Gun: Maverick",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000129/",
                      "legacyNameText": "Cruise, Tom",
                      "name": "Tom Cruise",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Capt. Pete 'Maverick' Mitchell"
                      ],
                      "roles": [
                          {
                              "character": "Capt. Pete 'Maverick' Mitchell"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000124/",
                      "legacyNameText": "Connelly, Jennifer (I)",
                      "name": "Jennifer Connelly",
                      "billing": 4,
                      "category": "actress",
                      "characters": [
                          "Penny Benjamin"
                      ],
                      "roles": [
                          {
                              "character": "Penny Benjamin"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1886602/",
                      "legacyNameText": "Teller, Miles",
                      "name": "Miles Teller",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Lt. Bradley 'Rooster' Bradshaw"
                      ],
                      "roles": [
                          {
                              "character": "Lt. Bradley 'Rooster' Bradshaw"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "ad0f298c-2596-40c3-a43f-5727a09b2506",
          "serviceTimeMs": 190.832551
      },
      "@type": "imdb.api.find.response",
      "query": "tt14208870",
      "results": [
          {
              "id": "/title/tt14208870/",
              "image": {
                  "height": 864,
                  "id": "/title/tt14208870/images/rm1742340097",
                  "url": "https://m.media-amazon.com/images/M/MV5BZGM1MzczNmQtMjBmYS00NTRhLWI0MzctNTFkZDc4OGUyODdjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
                  "width": 546
              },
              "runningTimeInMinutes": 151,
              "title": "The Fabelmans",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0931329/",
                      "legacyNameText": "Williams, Michelle (I)",
                      "name": "Michelle Williams",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Mitzi Fabelman"
                      ],
                      "roles": [
                          {
                              "character": "Mitzi Fabelman"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm5450413/",
                      "legacyNameText": "LaBelle, Gabriel",
                      "name": "Gabriel LaBelle",
                      "billing": 4,
                      "category": "actor",
                      "characters": [
                          "Sammy Fabelman"
                      ],
                      "roles": [
                          {
                              "character": "Sammy Fabelman"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0200452/",
                      "legacyNameText": "Dano, Paul",
                      "name": "Paul Dano",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Burt Fabelman"
                      ],
                      "roles": [
                          {
                              "character": "Burt Fabelman"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "5006b60e-2c82-452e-b1dc-08f99e0c976f",
          "serviceTimeMs": 278.307233
      },
      "@type": "imdb.api.find.response",
      "query": "tt0170016",
      "results": [
          {
              "id": "/title/tt0170016/",
              "image": {
                  "height": 1000,
                  "id": "/title/tt0170016/images/rm1102798080",
                  "url": "https://m.media-amazon.com/images/M/MV5BNWNiNTczNzEtMjQyZC00MjFmLTkzMDMtODk4ZGMyZmE0N2E4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                  "width": 675
              },
              "runningTimeInMinutes": 104,
              "title": "How the Grinch Stole Christmas",
              "titleType": "movie",
              "year": 2000,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000120/",
                      "legacyNameText": "Carrey, Jim (I)",
                      "name": "Jim Carrey",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Grinch"
                      ],
                      "roles": [
                          {
                              "character": "Grinch",
                              "characterId": "/character/ch0007931/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0597410/",
                      "legacyNameText": "Momsen, Taylor",
                      "name": "Taylor Momsen",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Cindy Lou Who"
                      ],
                      "roles": [
                          {
                              "character": "Cindy Lou Who",
                              "characterId": "/character/ch0007930/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm3679189/",
                      "legacyNameText": "Kelley (I)",
                      "name": "Kelley",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Max"
                      ],
                      "roles": [
                          {
                              "character": "Max",
                              "characterId": "/character/ch0119450/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "cefe857e-fe8e-4a99-a0f8-ccedbf7c9309",
          "serviceTimeMs": 163.645086
      },
      "@type": "imdb.api.find.response",
      "query": "tt13560574",
      "results": [
          {
              "disambiguation": "II",
              "id": "/title/tt13560574/",
              "image": {
                  "height": 1350,
                  "id": "/title/tt13560574/images/rm701700609",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTJiMmE5YWItOWZjYS00YTg0LWE0MTYtMzg2ZTY4YjNkNDEzXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
                  "width": 1080
              },
              "runningTimeInMinutes": 105,
              "title": "X",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm5301405/",
                      "legacyNameText": "Goth, Mia",
                      "name": "Mia Goth",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Maxine",
                          "Pearl"
                      ],
                      "roles": [
                          {
                              "character": "Maxine"
                          },
                          {
                              "character": "Pearl"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4911194/",
                      "legacyNameText": "Ortega, Jenna",
                      "name": "Jenna Ortega",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Lorraine"
                      ],
                      "roles": [
                          {
                              "character": "Lorraine"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0811242/",
                      "legacyNameText": "Snow, Brittany (I)",
                      "name": "Brittany Snow",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Bobby-Lynne"
                      ],
                      "roles": [
                          {
                              "character": "Bobby-Lynne"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "5aec5b4a-8fa2-4ba3-9977-bc20985a35d9",
          "serviceTimeMs": 161.192031
      },
      "@type": "imdb.api.find.response",
      "query": "tt17220704",
      "results": [
          {
              "id": "/title/tt17220704/",
              "image": {
                  "height": 4096,
                  "id": "/title/tt17220704/images/rm4243850241",
                  "url": "https://m.media-amazon.com/images/M/MV5BMjliZjM5MWMtMzcyYi00Y2ZiLTliOGMtNGNjMjE1YWIwZTkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                  "width": 2764
              },
              "runningTimeInMinutes": 98,
              "title": "A Christmas Story Christmas",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0082526/",
                      "legacyNameText": "Billingsley, Peter (I)",
                      "name": "Peter Billingsley",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Ralphie Parker"
                      ],
                      "roles": [
                          {
                              "character": "Ralphie Parker"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0141613/",
                      "legacyNameText": "Hayes, Erinn",
                      "name": "Erinn Hayes",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Sandy Parker"
                      ],
                      "roles": [
                          {
                              "character": "Sandy Parker"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm9906668/",
                      "legacyNameText": "Drosche, River",
                      "name": "River Drosche",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Mark"
                      ],
                      "roles": [
                          {
                              "character": "Mark"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "17c105dc-6ec5-4fe8-961e-171472e5922c",
          "serviceTimeMs": 263.498146
      },
      "@type": "imdb.api.find.response",
      "query": "tt0319343",
      "results": [
          {
              "id": "/title/tt0319343/",
              "image": {
                  "height": 921,
                  "id": "/title/tt0319343/images/rm129645056",
                  "url": "https://m.media-amazon.com/images/M/MV5BMzUxNzkzMzQtYjIxZC00NzU0LThkYTQtZjNhNTljMTA1MDA1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                  "width": 620
              },
              "runningTimeInMinutes": 97,
              "title": "Elf",
              "titleType": "movie",
              "year": 2003,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0002071/",
                      "legacyNameText": "Ferrell, Will (I)",
                      "name": "Will Ferrell",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Buddy"
                      ],
                      "roles": [
                          {
                              "character": "Buddy",
                              "characterId": "/character/ch0011305/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0001001/",
                      "legacyNameText": "Caan, James (I)",
                      "name": "James Caan",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Walter"
                      ],
                      "roles": [
                          {
                              "character": "Walter",
                              "characterId": "/character/ch0042043/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0627878/",
                      "legacyNameText": "Newhart, Bob",
                      "name": "Bob Newhart",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Papa Elf"
                      ],
                      "roles": [
                          {
                              "character": "Papa Elf",
                              "characterId": "/character/ch0011311/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "7df6c8f7-526f-4fce-b886-d8c5a8c1d0d7",
          "serviceTimeMs": 249.591093
      },
      "@type": "imdb.api.find.response",
      "query": "tt10304142",
      "results": [
          {
              "id": "/title/tt10304142/",
              "image": {
                  "height": 1500,
                  "id": "/title/tt10304142/images/rm1407255297",
                  "url": "https://m.media-amazon.com/images/M/MV5BNDQwNzE0ZTItYmZjMC00NjI3LWFlNzctNTExZDY2NWE0Zjc0XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
                  "width": 1000
              },
              "runningTimeInMinutes": 134,
              "title": "Amsterdam",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000288/",
                      "legacyNameText": "Bale, Christian",
                      "name": "Christian Bale",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Burt Berendsen"
                      ],
                      "roles": [
                          {
                              "character": "Burt Berendsen"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3053338/",
                      "legacyNameText": "Robbie, Margot",
                      "name": "Margot Robbie",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Valerie Voze"
                      ],
                      "roles": [
                          {
                              "character": "Valerie Voze"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0913475/",
                      "legacyNameText": "Washington, John David",
                      "name": "John David Washington",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Harold Woodman"
                      ],
                      "roles": [
                          {
                              "character": "Harold Woodman"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "7535df3d-43fa-45db-8e7d-2ad7c6f9edba",
          "serviceTimeMs": 156.500472
      },
      "@type": "imdb.api.find.response",
      "query": "tt9764362",
      "results": [
          {
              "id": "/title/tt9764362/",
              "image": {
                  "height": 2000,
                  "id": "/title/tt9764362/images/rm1001914881",
                  "url": "https://m.media-amazon.com/images/M/MV5BMzdjNjI5MmYtODhiNS00NTcyLWEzZmUtYzVmODM5YzExNDE3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg",
                  "width": 1334
              },
              "runningTimeInMinutes": 107,
              "title": "The Menu",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000146/",
                      "legacyNameText": "Fiennes, Ralph",
                      "name": "Ralph Fiennes",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Chef Slowik"
                      ],
                      "roles": [
                          {
                              "character": "Chef Slowik"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm5896355/",
                      "legacyNameText": "Taylor-Joy, Anya",
                      "name": "Anya Taylor-Joy",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Margot"
                      ],
                      "roles": [
                          {
                              "character": "Margot"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0396558/",
                      "legacyNameText": "Hoult, Nicholas",
                      "name": "Nicholas Hoult",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Tyler"
                      ],
                      "roles": [
                          {
                              "character": "Tyler"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "f1119c0b-3eac-49f7-83fb-53eda9bf6398",
          "serviceTimeMs": 260.360998
      },
      "@type": "imdb.api.find.response",
      "query": "tt0038650",
      "results": [
          {
              "id": "/title/tt0038650/",
              "image": {
                  "height": 1890,
                  "id": "/title/tt0038650/images/rm3862243328",
                  "url": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_.jpg",
                  "width": 1299
              },
              "runningTimeInMinutes": 130,
              "title": "It's a Wonderful Life",
              "titleType": "movie",
              "year": 1946,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000071/",
                      "legacyNameText": "Stewart, James (I)",
                      "name": "James Stewart",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "George Bailey"
                      ],
                      "roles": [
                          {
                              "character": "George Bailey",
                              "characterId": "/character/ch0004658/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0001656/",
                      "legacyNameText": "Reed, Donna (I)",
                      "name": "Donna Reed",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Mary Hatch"
                      ],
                      "roles": [
                          {
                              "character": "Mary Hatch",
                              "characterId": "/character/ch0004663/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000859/",
                      "legacyNameText": "Barrymore, Lionel",
                      "name": "Lionel Barrymore",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Mr. Potter"
                      ],
                      "roles": [
                          {
                              "character": "Mr. Potter",
                              "characterId": "/character/ch0004662/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "a0a7da49-146a-4552-a4cc-00bdbfa6bec3",
          "serviceTimeMs": 167.44106
      },
      "@type": "imdb.api.find.response",
      "query": "tt0047673",
      "results": [
          {
              "id": "/title/tt0047673/",
              "image": {
                  "height": 3600,
                  "id": "/title/tt0047673/images/rm580861184",
                  "url": "https://m.media-amazon.com/images/M/MV5BYjI0ZTk0ZjQtZTMzOS00NDdmLTk0YzUtZTQ4NGRkNWFhZTkxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
                  "width": 2378
              },
              "runningTimeInMinutes": 120,
              "title": "White Christmas",
              "titleType": "movie",
              "year": 1954,
              "principals": [
                  {
                      "id": "/name/nm0001078/",
                      "legacyNameText": "Crosby, Bing",
                      "name": "Bing Crosby",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Bob Wallace"
                      ],
                      "roles": [
                          {
                              "character": "Bob Wallace",
                              "characterId": "/character/ch0022248/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0001414/",
                      "legacyNameText": "Kaye, Danny",
                      "name": "Danny Kaye",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Phil Davis"
                      ],
                      "roles": [
                          {
                              "character": "Phil Davis",
                              "characterId": "/character/ch0022249/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0167041/",
                      "legacyNameText": "Clooney, Rosemary",
                      "name": "Rosemary Clooney",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Betty Haynes"
                      ],
                      "roles": [
                          {
                              "character": "Betty Haynes",
                              "characterId": "/character/ch0022250/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "5aad2933-eb9c-4ee8-9bc8-cd0f1c799252",
          "serviceTimeMs": 239.271668
      },
      "@type": "imdb.api.find.response",
      "query": "tt7322224",
      "results": [
          {
              "id": "/title/tt7322224/",
              "image": {
                  "height": 2160,
                  "id": "/title/tt7322224/images/rm366349825",
                  "url": "https://m.media-amazon.com/images/M/MV5BNDRiZjc0ZDMtMjhlYi00ZjAzLTg0MDQtZDI2NGEyYTBlN2M2XkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_.jpg",
                  "width": 1456
              },
              "runningTimeInMinutes": 147,
              "title": "Triangle of Sadness",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm7312850/",
                      "legacyNameText": "Thorwid, Thobias",
                      "name": "Thobias Thorwid",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Lewis"
                      ],
                      "roles": [
                          {
                              "character": "Lewis"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm6170168/",
                      "legacyNameText": "Dickinson, Harris (I)",
                      "name": "Harris Dickinson",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Carl"
                      ],
                      "roles": [
                          {
                              "character": "Carl"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4528025/",
                      "legacyNameText": "Dean, Charlbi",
                      "name": "Charlbi Dean",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Yaya"
                      ],
                      "roles": [
                          {
                              "character": "Yaya"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "e018e459-2791-492b-9b87-86d6bf974df1",
          "serviceTimeMs": 158.695485
      },
      "@type": "imdb.api.find.response",
      "query": "tt6710474",
      "results": [
          {
              "id": "/title/tt6710474/",
              "image": {
                  "height": 12599,
                  "id": "/title/tt6710474/images/rm316021249",
                  "url": "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
                  "width": 8699
              },
              "runningTimeInMinutes": 139,
              "title": "Everything Everywhere All at Once",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000706/",
                      "legacyNameText": "Yeoh, Michelle",
                      "name": "Michelle Yeoh",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Evelyn Wang"
                      ],
                      "roles": [
                          {
                              "character": "Evelyn Wang"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3513533/",
                      "legacyNameText": "Hsu, Stephanie",
                      "name": "Stephanie Hsu",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Joy Wang",
                          "Jobu Tupaki"
                      ],
                      "roles": [
                          {
                              "character": "Joy Wang"
                          },
                          {
                              "character": "Jobu Tupaki"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000130/",
                      "legacyNameText": "Curtis, Jamie Lee",
                      "name": "Jamie Lee Curtis",
                      "billing": 5,
                      "category": "actress",
                      "characters": [
                          "Deirdre Beaubeirdre"
                      ],
                      "roles": [
                          {
                              "character": "Deirdre Beaubeirdre"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "f62fc7b7-2cf9-4883-a47c-89445ded234a",
          "serviceTimeMs": 147.06568
      },
      "@type": "imdb.api.find.response",
      "query": "tt0095016",
      "results": [
          {
              "id": "/title/tt0095016/",
              "image": {
                  "height": 1600,
                  "id": "/title/tt0095016/images/rm270892032",
                  "url": "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
                  "width": 1066
              },
              "runningTimeInMinutes": 132,
              "title": "Die Hard",
              "titleType": "movie",
              "year": 1988,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000246/",
                      "legacyNameText": "Willis, Bruce (I)",
                      "name": "Bruce Willis",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "John McClane"
                      ],
                      "roles": [
                          {
                              "character": "John McClane",
                              "characterId": "/character/ch0001752/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000614/",
                      "legacyNameText": "Rickman, Alan (I)",
                      "name": "Alan Rickman",
                      "billing": 9,
                      "category": "actor",
                      "characters": [
                          "Hans Gruber"
                      ],
                      "roles": [
                          {
                              "character": "Hans Gruber",
                              "characterId": "/character/ch0001757/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000889/",
                      "legacyNameText": "Bedelia, Bonnie",
                      "name": "Bonnie Bedelia",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Holly Gennaro McClane"
                      ],
                      "roles": [
                          {
                              "character": "Holly Gennaro McClane",
                              "characterId": "/character/ch0001763/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "57707bbe-43dd-44f6-9c4d-1173dab08d5c",
          "serviceTimeMs": 169.566029
      },
      "@type": "imdb.api.find.response",
      "query": "tt10168670",
      "results": [
          {
              "id": "/title/tt10168670/",
              "image": {
                  "height": 4096,
                  "id": "/title/tt10168670/images/rm4123852801",
                  "url": "https://m.media-amazon.com/images/M/MV5BMDY0ZjUyYTItZmFlYS00MjI5LTljNmItODliMDkwMmY4ZTVkXkEyXkFqcGdeQXVyMTU0ODA5OTE2._V1_.jpg",
                  "width": 2765
              },
              "runningTimeInMinutes": 131,
              "title": "Bones and All",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm3154303/",
                      "legacyNameText": "Chalamet, Timothée",
                      "name": "Timothée Chalamet",
                      "billing": 8,
                      "category": "actor",
                      "characters": [
                          "Lee"
                      ],
                      "roles": [
                          {
                              "character": "Lee"
                          }
                      ]
                  },
                  {
                      "disambiguation": "III",
                      "id": "/name/nm5347988/",
                      "legacyNameText": "Russell, Taylor (III)",
                      "name": "Taylor Russell",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Maren"
                      ],
                      "roles": [
                          {
                              "character": "Maren"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0753314/",
                      "legacyNameText": "Rylance, Mark",
                      "name": "Mark Rylance",
                      "billing": 7,
                      "category": "actor",
                      "characters": [
                          "Sully"
                      ],
                      "roles": [
                          {
                              "character": "Sully"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "19771757-4fc3-4e02-ba9f-70ba81e29f45",
          "serviceTimeMs": 254.162576
      },
      "@type": "imdb.api.find.response",
      "query": "tt9114286",
      "results": [
          {
              "id": "/title/tt9114286/",
              "image": {
                  "height": 2500,
                  "id": "/title/tt9114286/images/rm2876833793",
                  "url": "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
                  "width": 1688
              },
              "runningTimeInMinutes": 161,
              "title": "Black Panther: Wakanda Forever",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm4004793/",
                      "legacyNameText": "Wright, Letitia",
                      "name": "Letitia Wright",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Shuri"
                      ],
                      "roles": [
                          {
                              "character": "Shuri"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2143282/",
                      "legacyNameText": "Nyong'o, Lupita",
                      "name": "Lupita Nyong'o",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Nakia"
                      ],
                      "roles": [
                          {
                              "character": "Nakia"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1775091/",
                      "legacyNameText": "Gurira, Danai",
                      "name": "Danai Gurira",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Okoye"
                      ],
                      "roles": [
                          {
                              "character": "Okoye"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "ee179dc8-80d8-425c-be44-ccf9a8bb6857",
          "serviceTimeMs": 152.905481
      },
      "@type": "imdb.api.find.response",
      "query": "tt10298840",
      "results": [
          {
              "id": "/title/tt10298840/",
              "image": {
                  "height": 6000,
                  "id": "/title/tt10298840/images/rm3567785473",
                  "url": "https://m.media-amazon.com/images/M/MV5BZTk1NzQwMWQtNzVmNS00MDc4LWE1MTktMmQyYzExYWMwZDQ4XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
                  "width": 4050
              },
              "runningTimeInMinutes": 102,
              "title": "Strange World",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0350453/",
                      "legacyNameText": "Gyllenhaal, Jake",
                      "name": "Jake Gyllenhaal",
                      "attr": [
                          "voice"
                      ],
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Searcher Clade"
                      ],
                      "roles": [
                          {
                              "character": "Searcher Clade"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm7187850/",
                      "legacyNameText": "Young-White, Jaboukie",
                      "name": "Jaboukie Young-White",
                      "attr": [
                          "voice"
                      ],
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Ethan Clade"
                      ],
                      "roles": [
                          {
                              "character": "Ethan Clade"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0005517/",
                      "legacyNameText": "Union, Gabrielle",
                      "name": "Gabrielle Union",
                      "attr": [
                          "voice"
                      ],
                      "billing": 4,
                      "category": "actress",
                      "characters": [
                          "Meridian Clade"
                      ],
                      "roles": [
                          {
                              "character": "Meridian Clade"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "591fd00f-7079-47b8-9f7e-a08df9132f43",
          "serviceTimeMs": 253.938456
      },
      "@type": "imdb.api.find.response",
      "query": "tt3915174",
      "results": [
          {
              "id": "/title/tt3915174/",
              "image": {
                  "height": 1154,
                  "id": "/title/tt3915174/images/rm342562561",
                  "url": "https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_.jpg",
                  "width": 760
              },
              "runningTimeInMinutes": 102,
              "title": "Puss in Boots: The Last Wish",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000104/",
                      "legacyNameText": "Banderas, Antonio",
                      "name": "Antonio Banderas",
                      "attr": [
                          "voice"
                      ],
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Puss in Boots"
                      ],
                      "roles": [
                          {
                              "character": "Puss in Boots"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000161/",
                      "legacyNameText": "Hayek, Salma",
                      "name": "Salma Hayek",
                      "attr": [
                          "voice"
                      ],
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Kitty Softpaws"
                      ],
                      "roles": [
                          {
                              "character": "Kitty Softpaws"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2957490/",
                      "legacyNameText": "Guillén, Harvey",
                      "name": "Harvey Guillén",
                      "attr": [
                          "voice"
                      ],
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Perrito"
                      ],
                      "roles": [
                          {
                              "character": "Perrito"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "7c5b4d3a-0a0a-413b-b16a-a3468afed572",
          "serviceTimeMs": 175.804594
      },
      "@type": "imdb.api.find.response",
      "query": "tt2709692",
      "results": [
          {
              "id": "/title/tt2709692/",
              "image": {
                  "height": 4000,
                  "id": "/title/tt2709692/images/rm2635169280",
                  "url": "https://m.media-amazon.com/images/M/MV5BYmE5Yjg0MzktYzgzMi00YTFiLWJjYTItY2M5MmI1ODI4MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                  "width": 2526
              },
              "runningTimeInMinutes": 85,
              "title": "The Grinch",
              "titleType": "movie",
              "year": 2018,
              "principals": [
                  {
                      "id": "/name/nm1212722/",
                      "legacyNameText": "Cumberbatch, Benedict",
                      "name": "Benedict Cumberbatch",
                      "attr": [
                          "voice"
                      ],
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "The Grinch"
                      ],
                      "roles": [
                          {
                              "character": "The Grinch",
                              "characterId": "/character/ch0007931/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm7372981/",
                      "legacyNameText": "Seely, Cameron",
                      "name": "Cameron Seely",
                      "attr": [
                          "voice"
                      ],
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Cindy-Lou Who"
                      ],
                      "roles": [
                          {
                              "character": "Cindy-Lou Who"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0429069/",
                      "legacyNameText": "Jones, Rashida (I)",
                      "name": "Rashida Jones",
                      "attr": [
                          "voice"
                      ],
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Donna Who"
                      ],
                      "roles": [
                          {
                              "character": "Donna Who"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "e12386f6-0558-4d2b-9de7-4f7d2f5340e1",
          "serviceTimeMs": 265.639201
      },
      "@type": "imdb.api.find.response",
      "query": "tt0104431",
      "results": [
          {
              "id": "/title/tt0104431/",
              "image": {
                  "height": 770,
                  "id": "/title/tt0104431/images/rm1832589056",
                  "url": "https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                  "width": 520
              },
              "runningTimeInMinutes": 120,
              "title": "Home Alone 2: Lost in New York",
              "titleType": "movie",
              "year": 1992,
              "principals": [
                  {
                      "id": "/name/nm0000346/",
                      "legacyNameText": "Culkin, Macaulay",
                      "name": "Macaulay Culkin",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Kevin"
                      ],
                      "roles": [
                          {
                              "character": "Kevin",
                              "characterId": "/character/ch0004114/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000582/",
                      "legacyNameText": "Pesci, Joe",
                      "name": "Joe Pesci",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Harry"
                      ],
                      "roles": [
                          {
                              "character": "Harry",
                              "characterId": "/character/ch0004115/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0827663/",
                      "legacyNameText": "Stern, Daniel (I)",
                      "name": "Daniel Stern",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Marv"
                      ],
                      "roles": [
                          {
                              "character": "Marv",
                              "characterId": "/character/ch0004118/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "f129fb4f-8df3-42d8-8b79-f82d30c95b46",
          "serviceTimeMs": 176.94115
      },
      "@type": "imdb.api.find.response",
      "query": "tt12530246",
      "results": [
          {
              "id": "/title/tt12530246/",
              "image": {
                  "height": 3000,
                  "id": "/title/tt12530246/images/rm3028025345",
                  "url": "https://m.media-amazon.com/images/M/MV5BN2RiY2RmMjItMDc1My00ZmViLWJkM2YtZjExNDI5MGM2ZWNiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
                  "width": 2000
              },
              "runningTimeInMinutes": 132,
              "title": "Emancipation",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000226/",
                      "legacyNameText": "Smith, Will (I)",
                      "name": "Will Smith",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Peter"
                      ],
                      "roles": [
                          {
                              "character": "Peter"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0004936/",
                      "legacyNameText": "Foster, Ben (I)",
                      "name": "Ben Foster",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Jim Fassel"
                      ],
                      "roles": [
                          {
                              "character": "Jim Fassel"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm6192439/",
                      "legacyNameText": "Bingwa, Charmaine",
                      "name": "Charmaine Bingwa",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Dodienne"
                      ],
                      "roles": [
                          {
                              "character": "Dodienne"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "af18bd5a-f88a-4c06-9ca6-feee43f4fee5",
          "serviceTimeMs": 177.436042
      },
      "@type": "imdb.api.find.response",
      "query": "tt0111070",
      "results": [
          {
              "id": "/title/tt0111070/",
              "image": {
                  "height": 1500,
                  "id": "/title/tt0111070/images/rm2596019200",
                  "url": "https://m.media-amazon.com/images/M/MV5BYzI0ZGRiYTEtNGExYi00ZDI2LWExMjMtODMzNDZjMTVjOWMxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
                  "width": 1013
              },
              "runningTimeInMinutes": 97,
              "title": "The Santa Clause",
              "titleType": "movie",
              "year": 1994,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000741/",
                      "legacyNameText": "Allen, Tim (I)",
                      "name": "Tim Allen",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Scott Calvin"
                      ],
                      "roles": [
                          {
                              "character": "Scott Calvin",
                              "characterId": "/character/ch0039626/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0001662/",
                      "legacyNameText": "Reinhold, Judge",
                      "name": "Judge Reinhold",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Neal"
                      ],
                      "roles": [
                          {
                              "character": "Neal"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0187724/",
                      "legacyNameText": "Crewson, Wendy",
                      "name": "Wendy Crewson",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Laura"
                      ],
                      "roles": [
                          {
                              "character": "Laura"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "d6f69c32-f9fa-4f73-958a-433a4399944d",
          "serviceTimeMs": 148.17976
      },
      "@type": "imdb.api.find.response",
      "query": "tt0338348",
      "results": [
          {
              "id": "/title/tt0338348/",
              "image": {
                  "height": 2048,
                  "id": "/title/tt0338348/images/rm4147153920",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTM1NTU0NTE4MV5BMl5BanBnXkFtZTcwMTQ0MjEzMw@@._V1_.jpg",
                  "width": 1386
              },
              "runningTimeInMinutes": 100,
              "title": "The Polar Express",
              "titleType": "movie",
              "year": 2004,
              "principals": [
                  {
                      "id": "/name/nm0000158/",
                      "legacyNameText": "Hanks, Tom",
                      "name": "Tom Hanks",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Hero Boy",
                          "Father",
                          "Conductor"
                      ],
                      "roles": [
                          {
                              "character": "Hero Boy",
                              "characterId": "/character/ch0014124/"
                          },
                          {
                              "character": "Father",
                              "characterId": "/character/ch0423390/"
                          },
                          {
                              "character": "Conductor",
                              "characterId": "/character/ch0151699/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0178875/",
                      "legacyNameText": "Coppola, Chris (I)",
                      "name": "Chris Coppola",
                      "attr": [
                          "voice"
                      ],
                      "billing": 17,
                      "category": "actor",
                      "characters": [
                          "Toothless Boy",
                          "Elf"
                      ],
                      "roles": [
                          {
                              "character": "Toothless Boy",
                              "characterId": "/character/ch0423395/"
                          },
                          {
                              "character": "Elf"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0005052/",
                      "legacyNameText": "Jeter, Michael",
                      "name": "Michael Jeter",
                      "attr": [
                          "voice"
                      ],
                      "billing": 16,
                      "category": "actor",
                      "characters": [
                          "Smokey",
                          "Steamer"
                      ],
                      "roles": [
                          {
                              "character": "Smokey",
                              "characterId": "/character/ch0423392/"
                          },
                          {
                              "character": "Steamer",
                              "characterId": "/character/ch0423394/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "cddc0fa3-2079-4c35-845f-73ca85ce2b5d",
          "serviceTimeMs": 221.340168
      },
      "@type": "imdb.api.find.response",
      "query": "tt0092099",
      "results": [
          {
              "id": "/title/tt0092099/",
              "image": {
                  "height": 1600,
                  "id": "/title/tt0092099/images/rm2145457920",
                  "url": "https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
                  "width": 1035
              },
              "runningTimeInMinutes": 109,
              "title": "Top Gun",
              "titleType": "movie",
              "year": 1986,
              "principals": [
                  {
                      "id": "/name/nm0000129/",
                      "legacyNameText": "Cruise, Tom",
                      "name": "Tom Cruise",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Maverick"
                      ],
                      "roles": [
                          {
                              "character": "Maverick",
                              "characterId": "/character/ch0005702/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000209/",
                      "legacyNameText": "Robbins, Tim (I)",
                      "name": "Tim Robbins",
                      "billing": 10,
                      "category": "actor",
                      "characters": [
                          "Merlin"
                      ],
                      "roles": [
                          {
                              "character": "Merlin",
                              "characterId": "/character/ch0054490/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000534/",
                      "legacyNameText": "McGillis, Kelly",
                      "name": "Kelly McGillis",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Charlie"
                      ],
                      "roles": [
                          {
                              "character": "Charlie",
                              "characterId": "/character/ch0005707/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "ca8eb81e-6653-4a52-9c6e-4018068f393e",
          "serviceTimeMs": 152.026461
      },
      "@type": "imdb.api.find.response",
      "query": "tt23722792",
      "results": [
          {
              "id": "/title/tt23722792/",
              "image": {
                  "height": 1350,
                  "id": "/title/tt23722792/images/rm4075042817",
                  "url": "https://m.media-amazon.com/images/M/MV5BMjIzYzBkNDMtZTliOC00YmQ4LWE5YjctMWRiZTAzYjNiOTM1XkEyXkFqcGdeQXVyNjk0MTExOQ@@._V1_.jpg",
                  "width": 1080
              },
              "runningTimeInMinutes": 89,
              "title": "I Believe in Santa",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "II",
                      "id": "/name/nm0601041/",
                      "legacyNameText": "Moore, Christina (II)",
                      "name": "Christina Moore",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Lisa"
                      ],
                      "roles": [
                          {
                              "character": "Lisa"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0239768/",
                      "legacyNameText": "Ducey, John",
                      "name": "John Ducey",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Tom"
                      ],
                      "roles": [
                          {
                              "character": "Tom"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm8627157/",
                      "legacyNameText": "McGraw, Violet",
                      "name": "Violet McGraw",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Ella"
                      ],
                      "roles": [
                          {
                              "character": "Ella"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "a115dd5a-7681-4a98-8024-b73f266dd66d",
          "serviceTimeMs": 173.799203
      },
      "@type": "imdb.api.find.response",
      "query": "tt0096061",
      "results": [
          {
              "id": "/title/tt0096061/",
              "image": {
                  "height": 755,
                  "id": "/title/tt0096061/images/rm4273799424",
                  "url": "https://m.media-amazon.com/images/M/MV5BM2NlMDQzMDktNTMyZS00MjBjLWI0MmEtMzgzZDM2ZTVkNzE1XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_.jpg",
                  "width": 510
              },
              "runningTimeInMinutes": 101,
              "title": "Scrooged",
              "titleType": "movie",
              "year": 1988,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000195/",
                      "legacyNameText": "Murray, Bill (I)",
                      "name": "Bill Murray",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Frank Cross"
                      ],
                      "roles": [
                          {
                              "character": "Frank Cross",
                              "characterId": "/character/ch0000500/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000261/",
                      "legacyNameText": "Allen, Karen (I)",
                      "name": "Karen Allen",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Claire Phillips"
                      ],
                      "roles": [
                          {
                              "character": "Claire Phillips",
                              "characterId": "/character/ch0000498/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0001234/",
                      "legacyNameText": "Forsythe, John (I)",
                      "name": "John Forsythe",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Lew Hayward"
                      ],
                      "roles": [
                          {
                              "character": "Lew Hayward",
                              "characterId": "/character/ch0000492/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "247d4cf9-cb42-4fd8-8aa5-05b270f3de6b",
          "serviceTimeMs": 160.342101
      },
      "@type": "imdb.api.find.response",
      "query": "tt12193804",
      "results": [
          {
              "id": "/title/tt12193804/",
              "image": {
                  "height": 9000,
                  "id": "/title/tt12193804/images/rm1325865985",
                  "url": "https://m.media-amazon.com/images/M/MV5BODY5OGI0MzYtZTdkMi00NjU1LTkzYjAtNDA5M2ZlYjFlODgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
                  "width": 6072
              },
              "runningTimeInMinutes": 144,
              "title": "Whitney Houston: I Wanna Dance with Somebody",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm7609875/",
                      "legacyNameText": "Ackie, Naomi",
                      "name": "Naomi Ackie",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Whitney Houston"
                      ],
                      "roles": [
                          {
                              "character": "Whitney Houston"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0001804/",
                      "legacyNameText": "Tucci, Stanley (I)",
                      "name": "Stanley Tucci",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Clive Davis"
                      ],
                      "roles": [
                          {
                              "character": "Clive Davis"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm5480894/",
                      "legacyNameText": "Sanders, Ashton",
                      "name": "Ashton Sanders",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Bobby Brown"
                      ],
                      "roles": [
                          {
                              "character": "Bobby Brown"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "a6a9814e-0f16-4708-af50-ea899c56f359",
          "serviceTimeMs": 253.441268
      },
      "@type": "imdb.api.find.response",
      "query": "tt0059742",
      "results": [
          {
              "id": "/title/tt0059742/",
              "image": {
                  "height": 2782,
                  "id": "/title/tt0059742/images/rm2814392832",
                  "url": "https://m.media-amazon.com/images/M/MV5BODIxNjhkYjEtYzUyMi00YTNjLWE1YjktNjAyY2I2MWNkNmNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                  "width": 1963
              },
              "runningTimeInMinutes": 172,
              "title": "The Sound of Music",
              "titleType": "movie",
              "year": 1965,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000267/",
                      "legacyNameText": "Andrews, Julie (I)",
                      "name": "Julie Andrews",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Maria"
                      ],
                      "roles": [
                          {
                              "character": "Maria",
                              "characterId": "/character/ch0008778/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0001626/",
                      "legacyNameText": "Plummer, Christopher (I)",
                      "name": "Christopher Plummer",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Captain Georg von Trapp"
                      ],
                      "roles": [
                          {
                              "character": "Captain Georg von Trapp",
                              "characterId": "/character/ch0008779/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0662223/",
                      "legacyNameText": "Parker, Eleanor (I)",
                      "name": "Eleanor Parker",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "The Baroness"
                      ],
                      "roles": [
                          {
                              "character": "The Baroness",
                              "characterId": "/character/ch0071791/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "3657f581-262b-4c44-ac78-55432e6ed122",
          "serviceTimeMs": 279.812879
      },
      "@type": "imdb.api.find.response",
      "query": "tt0457939",
      "results": [
          {
              "id": "/title/tt0457939/",
              "image": {
                  "height": 667,
                  "id": "/title/tt0457939/images/rm3712915712",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg",
                  "width": 450
              },
              "runningTimeInMinutes": 136,
              "title": "The Holiday",
              "titleType": "movie",
              "year": 2006,
              "principals": [
                  {
                      "id": "/name/nm0000701/",
                      "legacyNameText": "Winslet, Kate",
                      "name": "Kate Winslet",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Iris"
                      ],
                      "roles": [
                          {
                              "character": "Iris",
                              "characterId": "/character/ch0053668/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000139/",
                      "legacyNameText": "Diaz, Cameron",
                      "name": "Cameron Diaz",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Amanda"
                      ],
                      "roles": [
                          {
                              "character": "Amanda",
                              "characterId": "/character/ch0053670/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000179/",
                      "legacyNameText": "Law, Jude",
                      "name": "Jude Law",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Graham"
                      ],
                      "roles": [
                          {
                              "character": "Graham",
                              "characterId": "/character/ch0011879/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "e68229ca-eee2-4560-a33c-b9988133423c",
          "serviceTimeMs": 164.94702
      },
      "@type": "imdb.api.find.response",
      "query": "tt1877830",
      "results": [
          {
              "id": "/title/tt1877830/",
              "image": {
                  "height": 2048,
                  "id": "/title/tt1877830/images/rm2474894849",
                  "url": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
                  "width": 1382
              },
              "runningTimeInMinutes": 176,
              "title": "The Batman",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm1500155/",
                      "legacyNameText": "Pattinson, Robert",
                      "name": "Robert Pattinson",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Bruce Wayne",
                          "The Batman"
                      ],
                      "roles": [
                          {
                              "character": "Bruce Wayne",
                              "characterId": "/character/ch0188699/"
                          },
                          {
                              "character": "The Batman"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2368789/",
                      "legacyNameText": "Kravitz, Zoë",
                      "name": "Zoë Kravitz",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Selina Kyle"
                      ],
                      "roles": [
                          {
                              "character": "Selina Kyle"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0942482/",
                      "legacyNameText": "Wright, Jeffrey (I)",
                      "name": "Jeffrey Wright",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Lt. James Gordon"
                      ],
                      "roles": [
                          {
                              "character": "Lt. James Gordon"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "6f5468b4-63eb-4cc8-9d11-d11ff1b3a531",
          "serviceTimeMs": 161.102577
      },
      "@type": "imdb.api.find.response",
      "query": "tt15791034",
      "results": [
          {
              "id": "/title/tt15791034/",
              "image": {
                  "height": 3000,
                  "id": "/title/tt15791034/images/rm3095860225",
                  "url": "https://m.media-amazon.com/images/M/MV5BN2M3Y2NhMGYtYjUxOS00M2UwLTlmMGUtYzY4MzFlNjZkYzY2XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
                  "width": 2025
              },
              "runningTimeInMinutes": 102,
              "title": "Barbarian",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "II",
                      "id": "/name/nm3569284/",
                      "legacyNameText": "Campbell, Georgina (II)",
                      "name": "Georgina Campbell",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Tess"
                      ],
                      "roles": [
                          {
                              "character": "Tess"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0803889/",
                      "legacyNameText": "Skarsgård, Bill",
                      "name": "Bill Skarsgård",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Keith"
                      ],
                      "roles": [
                          {
                              "character": "Keith"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0519043/",
                      "legacyNameText": "Long, Justin (I)",
                      "name": "Justin Long",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "AJ"
                      ],
                      "roles": [
                          {
                              "character": "AJ"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "c3584b40-b03b-46a4-aa89-dc063754da5e",
          "serviceTimeMs": 251.208702
      },
      "@type": "imdb.api.find.response",
      "query": "tt0101272",
      "results": [
          {
              "id": "/title/tt0101272/",
              "image": {
                  "height": 2931,
                  "id": "/title/tt0101272/images/rm3994245376",
                  "url": "https://m.media-amazon.com/images/M/MV5BMmJhZTlhNzUtNzAwZC00YjQ2LTkxOGEtNzBmOWVkMmUxNTBiXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg",
                  "width": 1979
              },
              "runningTimeInMinutes": 99,
              "title": "The Addams Family",
              "titleType": "movie",
              "year": 1991,
              "principals": [
                  {
                      "id": "/name/nm0001378/",
                      "legacyNameText": "Huston, Anjelica",
                      "name": "Anjelica Huston",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Morticia Addams"
                      ],
                      "roles": [
                          {
                              "character": "Morticia Addams",
                              "characterId": "/character/ch0008925/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000471/",
                      "legacyNameText": "Julia, Raul",
                      "name": "Raul Julia",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Gomez Addams"
                      ],
                      "roles": [
                          {
                              "character": "Gomez Addams",
                              "characterId": "/character/ch0008923/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000502/",
                      "legacyNameText": "Lloyd, Christopher (I)",
                      "name": "Christopher Lloyd",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Uncle Fester Addams"
                      ],
                      "roles": [
                          {
                              "character": "Uncle Fester Addams",
                              "characterId": "/character/ch0008920/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "92e121c2-4de4-4e4b-9402-02456b9c98ca",
          "serviceTimeMs": 145.34835
      },
      "@type": "imdb.api.find.response",
      "query": "tt0096446",
      "results": [
          {
              "id": "/title/tt0096446/",
              "image": {
                  "height": 1080,
                  "id": "/title/tt0096446/images/rm3353624064",
                  "url": "https://m.media-amazon.com/images/M/MV5BZWIyMTA2M2ItOGI5MC00OTY0LWFmZTItN2NkOWQ0MGQ5NDkyL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                  "width": 719
              },
              "runningTimeInMinutes": 126,
              "title": "Willow",
              "titleType": "movie",
              "year": 1988,
              "principals": [
                  {
                      "id": "/name/nm0000174/",
                      "legacyNameText": "Kilmer, Val",
                      "name": "Val Kilmer",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Madmartigan"
                      ],
                      "roles": [
                          {
                              "character": "Madmartigan",
                              "characterId": "/character/ch0011994/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000695/",
                      "legacyNameText": "Whalley, Joanne (I)",
                      "name": "Joanne Whalley",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Sorsha"
                      ],
                      "roles": [
                          {
                              "character": "Sorsha",
                              "characterId": "/character/ch0011997/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0001116/",
                      "legacyNameText": "Davis, Warwick (I)",
                      "name": "Warwick Davis",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Willow"
                      ],
                      "roles": [
                          {
                              "character": "Willow"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "8cab5b0b-5bbe-4da5-9ce9-289836d11186",
          "serviceTimeMs": 155.657278
      },
      "@type": "imdb.api.find.response",
      "query": "tt1392214",
      "results": [
          {
              "id": "/title/tt1392214/",
              "image": {
                  "height": 2048,
                  "id": "/title/tt1392214/images/rm1033886464",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg",
                  "width": 1384
              },
              "runningTimeInMinutes": 153,
              "title": "Prisoners",
              "titleType": "movie",
              "year": 2013,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0413168/",
                      "legacyNameText": "Jackman, Hugh (I)",
                      "name": "Hugh Jackman",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Keller Dover"
                      ],
                      "roles": [
                          {
                              "character": "Keller Dover",
                              "characterId": "/character/ch0144530/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0350453/",
                      "legacyNameText": "Gyllenhaal, Jake",
                      "name": "Jake Gyllenhaal",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Detective Loki"
                      ],
                      "roles": [
                          {
                              "character": "Detective Loki",
                              "characterId": "/character/ch0353786/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0205626/",
                      "legacyNameText": "Davis, Viola (I)",
                      "name": "Viola Davis",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Nancy Birch"
                      ],
                      "roles": [
                          {
                              "character": "Nancy Birch",
                              "characterId": "/character/ch0398316/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "c7c6af60-c940-412b-9c93-cb3ed9fd6ab0",
          "serviceTimeMs": 169.865286
      },
      "@type": "imdb.api.find.response",
      "query": "tt10731256",
      "results": [
          {
              "disambiguation": "I",
              "id": "/title/tt10731256/",
              "image": {
                  "height": 1443,
                  "id": "/title/tt10731256/images/rm2558594561",
                  "url": "https://m.media-amazon.com/images/M/MV5BMzFkMWUzM2ItZWFjMi00NDY0LTk2MDMtZDhkMDE2MjRlYmZlXkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg",
                  "width": 975
              },
              "runningTimeInMinutes": 123,
              "title": "Don't Worry Darling",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm6073955/",
                      "legacyNameText": "Pugh, Florence",
                      "name": "Florence Pugh",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Alice"
                      ],
                      "roles": [
                          {
                              "character": "Alice"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4089170/",
                      "legacyNameText": "Styles, Harry",
                      "name": "Harry Styles",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Jack"
                      ],
                      "roles": [
                          {
                              "character": "Jack"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm1517976/",
                      "legacyNameText": "Pine, Chris (I)",
                      "name": "Chris Pine",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Frank"
                      ],
                      "roles": [
                          {
                              "character": "Frank"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "44aeb02c-9a32-45be-813d-319c214820cf",
          "serviceTimeMs": 282.44746
      },
      "@type": "imdb.api.find.response",
      "query": "tt15474916",
      "results": [
          {
              "disambiguation": "V",
              "id": "/title/tt15474916/",
              "image": {
                  "height": 3000,
                  "id": "/title/tt15474916/images/rm3357216257",
                  "url": "https://m.media-amazon.com/images/M/MV5BZjE2ZWIwMWEtNGFlMy00ZjYzLWEzOWEtYzQ0MDAwZDRhYzNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
                  "width": 2025
              },
              "runningTimeInMinutes": 115,
              "title": "Smile",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm1788739/",
                      "legacyNameText": "Bacon, Sosie",
                      "name": "Sosie Bacon",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Rose Cotter"
                      ],
                      "roles": [
                          {
                              "character": "Rose Cotter"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1900772/",
                      "legacyNameText": "Usher, Jessie T.",
                      "name": "Jessie T. Usher",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Trevor"
                      ],
                      "roles": [
                          {
                              "character": "Trevor"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0973177/",
                      "legacyNameText": "Gallner, Kyle",
                      "name": "Kyle Gallner",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Joel"
                      ],
                      "roles": [
                          {
                              "character": "Joel"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "12356fe6-9a74-4c62-919a-3e1850d9002c",
          "serviceTimeMs": 246.195994
      },
      "@type": "imdb.api.find.response",
      "query": "tt4729430",
      "results": [
          {
              "id": "/title/tt4729430/",
              "image": {
                  "height": 2222,
                  "id": "/title/tt4729430/images/rm1843825409",
                  "url": "https://m.media-amazon.com/images/M/MV5BMWYwOThjM2ItZGYxNy00NTQwLWFlZWEtM2MzM2Q5MmY3NDU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                  "width": 1500
              },
              "runningTimeInMinutes": 96,
              "title": "Klaus",
              "titleType": "movie",
              "year": 2019,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0005403/",
                      "legacyNameText": "Schwartzman, Jason (I)",
                      "name": "Jason Schwartzman",
                      "attr": [
                          "voice"
                      ],
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Jesper"
                      ],
                      "roles": [
                          {
                              "character": "Jesper"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0799777/",
                      "legacyNameText": "Simmons, J.K.",
                      "name": "J.K. Simmons",
                      "attr": [
                          "voice"
                      ],
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Klaus"
                      ],
                      "roles": [
                          {
                              "character": "Klaus"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0429069/",
                      "legacyNameText": "Jones, Rashida (I)",
                      "name": "Rashida Jones",
                      "attr": [
                          "voice"
                      ],
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Alva"
                      ],
                      "roles": [
                          {
                              "character": "Alva"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "6cb1d25c-a5fa-4e1d-96b3-3cecd43cdb97",
          "serviceTimeMs": 311.507178
      },
      "@type": "imdb.api.find.response",
      "query": "tt0110527",
      "results": [
          {
              "id": "/title/tt0110527/",
              "image": {
                  "height": 889,
                  "id": "/title/tt0110527/images/rm1549403648",
                  "url": "https://m.media-amazon.com/images/M/MV5BZjk3M2UyN2YtNmQ1MS00MWI3LWEzNGMtYTRkM2E5MWNjOWJjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                  "width": 600
              },
              "runningTimeInMinutes": 114,
              "title": "Miracle on 34th Street",
              "titleType": "movie",
              "year": 1994,
              "principals": [
                  {
                      "id": "/name/nm0000277/",
                      "legacyNameText": "Attenborough, Richard",
                      "name": "Richard Attenborough",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Kriss Kringle"
                      ],
                      "roles": [
                          {
                              "character": "Kriss Kringle"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0001610/",
                      "legacyNameText": "Perkins, Elizabeth (I)",
                      "name": "Elizabeth Perkins",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Dorey Walker"
                      ],
                      "roles": [
                          {
                              "character": "Dorey Walker",
                              "characterId": "/character/ch0014883/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0001518/",
                      "legacyNameText": "McDermott, Dylan",
                      "name": "Dylan McDermott",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Bryan Bedford"
                      ],
                      "roles": [
                          {
                              "character": "Bryan Bedford",
                              "characterId": "/character/ch0014884/"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt20514408/",
              "nextEpisode": "/title/tt20514644/",
              "parentTitle": {
                  "id": "/title/tt20453678/",
                  "title": "The 'Radical' Russ Belville Show",
                  "titleType": "podcastSeries",
                  "year": 2006
              },
              "previousEpisode": "/title/tt20515528/",
              "seriesStartYear": 2006,
              "title": "NORML Daily Audio Stash 2011-05-27",
              "titleType": "podcastEpisode",
              "year": 2011
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "74670519-40d0-42b8-8564-fd827a8962a2",
          "serviceTimeMs": 178.876012
      },
      "@type": "imdb.api.find.response",
      "query": "tt14369780",
      "results": [
          {
              "id": "/title/tt14369780/",
              "image": {
                  "height": 1080,
                  "id": "/title/tt14369780/images/rm478872577",
                  "url": "https://m.media-amazon.com/images/M/MV5BMGQwYjY1YWUtN2FjMS00MzYxLWEyNDYtYzdlZWJhZTI5M2NhXkEyXkFqcGdeQXVyMTQ4NjQyMzE@._V1_.jpg",
                  "width": 729
              },
              "runningTimeInMinutes": 126,
              "title": "Lady Chatterley's Lover",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm10128408/",
                      "legacyNameText": "Corrin, Emma",
                      "name": "Emma Corrin",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Connie",
                          "Clifford's wife"
                      ],
                      "roles": [
                          {
                              "character": "Connie"
                          },
                          {
                              "character": "Clifford's wife"
                          }
                      ]
                  },
                  {
                      "disambiguation": "IV",
                      "id": "/name/nm1925239/",
                      "legacyNameText": "O'Connell, Jack (IV)",
                      "name": "Jack O'Connell",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Oliver"
                      ],
                      "roles": [
                          {
                              "character": "Oliver"
                          }
                      ]
                  },
                  {
                      "disambiguation": "II",
                      "id": "/name/nm9714167/",
                      "legacyNameText": "Duckett, Matthew (II)",
                      "name": "Matthew Duckett",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Clifford Chatterley",
                          "Connie's husband"
                      ],
                      "roles": [
                          {
                              "character": "Clifford Chatterley"
                          },
                          {
                              "character": "Connie's husband"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "7ae0a63f-fc61-45a9-b045-5e0780d8797a",
          "serviceTimeMs": 158.872178
      },
      "@type": "imdb.api.find.response",
      "query": "tt15528292",
      "results": [
          {
              "id": "/title/tt15528292/",
              "image": {
                  "height": 900,
                  "id": "/title/tt15528292/images/rm1418134785",
                  "url": "https://m.media-amazon.com/images/M/MV5BNDM0Y2VhZTYtNzMxOC00ZjgxLWI0NWQtNDRlOThmMDFiZTc5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
                  "width": 627
              },
              "runningTimeInMinutes": 141,
              "title": "The Big Four",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm2693765/",
                      "legacyNameText": "Aryasatya, Abimana",
                      "name": "Abimana Aryasatya",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Topan"
                      ],
                      "roles": [
                          {
                              "character": "Topan"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm9363168/",
                      "legacyNameText": "Marino, Putri",
                      "name": "Putri Marino",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Dina"
                      ],
                      "roles": [
                          {
                              "character": "Dina"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm9413210/",
                      "legacyNameText": "Lutesha",
                      "name": "Lutesha",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Alpha"
                      ],
                      "roles": [
                          {
                              "character": "Alpha"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "fb8846e2-2dc5-4038-a369-8828c6dd672b",
          "serviceTimeMs": 181.781151
      },
      "@type": "imdb.api.find.response",
      "query": "tt11847410",
      "results": [
          {
              "id": "/title/tt11847410/",
              "image": {
                  "height": 6000,
                  "id": "/title/tt11847410/images/rm3123240961",
                  "url": "https://m.media-amazon.com/images/M/MV5BMjM2MTg0MDUtZTMwOS00MTk3LTkzZWQtOTQ0ODY4MTI3MTMxXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
                  "width": 4050
              },
              "runningTimeInMinutes": 96,
              "title": "The Fallout",
              "titleType": "movie",
              "year": 2021,
              "principals": [
                  {
                      "id": "/name/nm4911194/",
                      "legacyNameText": "Ortega, Jenna",
                      "name": "Jenna Ortega",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Vada Cavell"
                      ],
                      "roles": [
                          {
                              "character": "Vada Cavell"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4675650/",
                      "legacyNameText": "Ziegler, Maddie",
                      "name": "Maddie Ziegler",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Mia Reed"
                      ],
                      "roles": [
                          {
                              "character": "Mia Reed"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2964567/",
                      "legacyNameText": "Fitch, Niles",
                      "name": "Niles Fitch",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Quinton Hasland"
                      ],
                      "roles": [
                          {
                              "character": "Quinton Hasland"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "8c888cc7-cd06-46c5-aa1f-999e5b371b5a",
          "serviceTimeMs": 181.02411
      },
      "@type": "imdb.api.find.response",
      "query": "tt10931784",
      "results": [
          {
              "id": "/title/tt10931784/",
              "image": {
                  "height": 1350,
                  "id": "/title/tt10931784/images/rm3866692609",
                  "url": "https://m.media-amazon.com/images/M/MV5BZGNhYWU2NzEtODVmMi00MmUyLWFjYzEtNmIyNWUzMmViY2RmXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg",
                  "width": 1080
              },
              "runningTimeInMinutes": 99,
              "title": "Nanny",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm2993012/",
                      "legacyNameText": "Diop, Anna",
                      "name": "Anna Diop",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Aisha"
                      ],
                      "roles": [
                          {
                              "character": "Aisha"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1157358/",
                      "legacyNameText": "Monaghan, Michelle",
                      "name": "Michelle Monaghan",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Amy"
                      ],
                      "roles": [
                          {
                              "character": "Amy"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2344310/",
                      "legacyNameText": "Walls, Sinqua",
                      "name": "Sinqua Walls",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Malik"
                      ],
                      "roles": [
                          {
                              "character": "Malik"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "a4fed475-9e5e-42d2-aa9c-fba3875981e9",
          "serviceTimeMs": 153.748396
      },
      "@type": "imdb.api.find.response",
      "query": "tt14176542",
      "results": [
          {
              "id": "/title/tt14176542/",
              "image": {
                  "height": 1350,
                  "id": "/title/tt14176542/images/rm4009101057",
                  "url": "https://m.media-amazon.com/images/M/MV5BNGE3ZDlhNmEtYzEzNy00ZWZhLThkM2ItZmY1NTViZGFjZTVkXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg",
                  "width": 1080
              },
              "runningTimeInMinutes": 159,
              "title": "Bardo: False Chronicle of a Handful of Truths",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0319843/",
                      "legacyNameText": "Giménez Cacho, Daniel",
                      "name": "Daniel Giménez Cacho",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Silverio"
                      ],
                      "roles": [
                          {
                              "character": "Silverio"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2155527/",
                      "legacyNameText": "Siciliani, Griselda",
                      "name": "Griselda Siciliani",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Lucia"
                      ],
                      "roles": [
                          {
                              "character": "Lucia"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm9428690/",
                      "legacyNameText": "Lamadrid, Ximena",
                      "name": "Ximena Lamadrid",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Camila"
                      ],
                      "roles": [
                          {
                              "character": "Camila"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "7056a7ed-1214-4269-a2d4-5a350e9c8b95",
          "serviceTimeMs": 166.046016
      },
      "@type": "imdb.api.find.response",
      "query": "tt14715170",
      "results": [
          {
              "id": "/title/tt14715170/",
              "image": {
                  "height": 2222,
                  "id": "/title/tt14715170/images/rm980680705",
                  "url": "https://m.media-amazon.com/images/M/MV5BMDNhMWUxMjctZWFhNy00MjUzLWE3NjYtNTE4ZjVhYjRkZThmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                  "width": 1500
              },
              "runningTimeInMinutes": 93,
              "title": "Falling for Christmas",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0517820/",
                      "legacyNameText": "Lohan, Lindsay",
                      "name": "Lindsay Lohan",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Sierra Belmont"
                      ],
                      "roles": [
                          {
                              "character": "Sierra Belmont"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3432881/",
                      "legacyNameText": "Overstreet, Chord",
                      "name": "Chord Overstreet",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Jake Russell"
                      ],
                      "roles": [
                          {
                              "character": "Jake Russell"
                          }
                      ]
                  },
                  {
                      "disambiguation": "XIII",
                      "id": "/name/nm2965226/",
                      "legacyNameText": "Young, George (XIII)",
                      "name": "George Young",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Tad Fairchild"
                      ],
                      "roles": [
                          {
                              "character": "Tad Fairchild"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "a8853707-9070-4c4f-bdfa-bffd2a39905c",
          "serviceTimeMs": 190.404679
      },
      "@type": "imdb.api.find.response",
      "query": "tt12261776",
      "results": [
          {
              "id": "/title/tt12261776/",
              "image": {
                  "height": 1350,
                  "id": "/title/tt12261776/images/rm911489281",
                  "url": "https://m.media-amazon.com/images/M/MV5BYzFhM2M1MDUtNDhmNC00YzEzLThiMzctYWYxZTc0MGJhNWYyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
                  "width": 1080
              },
              "title": "65",
              "titleType": "movie",
              "year": 2023,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm3485845/",
                      "legacyNameText": "Driver, Adam (I)",
                      "name": "Adam Driver",
                      "category": "actor",
                      "characters": [
                          "Mills"
                      ],
                      "roles": [
                          {
                              "character": "Mills"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm7567556/",
                      "legacyNameText": "Greenblatt, Ariana",
                      "name": "Ariana Greenblatt",
                      "category": "actress"
                  },
                  {
                      "id": "/name/nm5668548/",
                      "legacyNameText": "Coleman, Chloe",
                      "name": "Chloe Coleman",
                      "category": "actress"
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "fb9d1d4b-ab35-4bbc-a897-55b64fa3c0c7",
          "serviceTimeMs": 243.419172
      },
      "@type": "imdb.api.find.response",
      "query": "tt0196229",
      "results": [
          {
              "id": "/title/tt0196229/",
              "image": {
                  "height": 1000,
                  "id": "/title/tt0196229/images/rm2303908096",
                  "url": "https://m.media-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_.jpg",
                  "width": 675
              },
              "runningTimeInMinutes": 90,
              "title": "Zoolander",
              "titleType": "movie",
              "year": 2001,
              "principals": [
                  {
                      "id": "/name/nm0001774/",
                      "legacyNameText": "Stiller, Ben",
                      "name": "Ben Stiller",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Derek Zoolander"
                      ],
                      "roles": [
                          {
                              "character": "Derek Zoolander",
                              "characterId": "/character/ch0007758/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0005562/",
                      "legacyNameText": "Wilson, Owen (I)",
                      "name": "Owen Wilson",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Hansel"
                      ],
                      "roles": [
                          {
                              "character": "Hansel",
                              "characterId": "/character/ch0007760/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0852132/",
                      "legacyNameText": "Taylor, Christine (I)",
                      "name": "Christine Taylor",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Matilda Jeffries"
                      ],
                      "roles": [
                          {
                              "character": "Matilda Jeffries",
                              "characterId": "/character/ch0007761/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "a31b2d0c-56b8-45fa-a45b-30e7f5949a91",
          "serviceTimeMs": 176.85413
      },
      "@type": "imdb.api.find.response",
      "query": "tt11116912",
      "results": [
          {
              "id": "/title/tt11116912/",
              "image": {
                  "height": 2222,
                  "id": "/title/tt11116912/images/rm2345864449",
                  "url": "https://m.media-amazon.com/images/M/MV5BOWQzMDc5OTMtMjFiMy00M2I3LWIyZWMtODM4NTRhMGI2ZTRkXkEyXkFqcGdeQXVyNDAxNzcyNw@@._V1_.jpg",
                  "width": 1500
              },
              "runningTimeInMinutes": 101,
              "title": "Troll",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm3462742/",
                      "legacyNameText": "Wilmann, Ine Marie",
                      "name": "Ine Marie Wilmann",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Nora Tidemann"
                      ],
                      "roles": [
                          {
                              "character": "Nora Tidemann"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1504755/",
                      "legacyNameText": "Falck, Kim",
                      "name": "Kim Falck",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Andreas Isaksen"
                      ],
                      "roles": [
                          {
                              "character": "Andreas Isaksen"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3162723/",
                      "legacyNameText": "Pettersen, Mads Sjøgård",
                      "name": "Mads Sjøgård Pettersen",
                      "as": "Mads Pettersen",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Kaptein Kristoffer Holm"
                      ],
                      "roles": [
                          {
                              "character": "Kaptein Kristoffer Holm"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "20fe2f09-1d81-412c-a691-cdc2355511c0",
          "serviceTimeMs": 264.275838
      },
      "@type": "imdb.api.find.response",
      "query": "tt8623904",
      "results": [
          {
              "id": "/title/tt8623904/",
              "image": {
                  "height": 1500,
                  "id": "/title/tt8623904/images/rm1963759361",
                  "url": "https://m.media-amazon.com/images/M/MV5BNTQ4ZmY0NjgtYzVhNy00NzhiLTk3YTYtNzM1MTdjM2VhZDA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                  "width": 1012
              },
              "runningTimeInMinutes": 103,
              "title": "Last Christmas",
              "titleType": "movie",
              "year": 2019,
              "principals": [
                  {
                      "id": "/name/nm10916154/",
                      "legacyNameText": "Ingoldsby, Madison",
                      "name": "Madison Ingoldsby",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Young Kate"
                      ],
                      "roles": [
                          {
                              "character": "Young Kate"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000668/",
                      "legacyNameText": "Thompson, Emma (I)",
                      "name": "Emma Thompson",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Petra"
                      ],
                      "roles": [
                          {
                              "character": "Petra"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0410667/",
                      "legacyNameText": "Isakovic, Boris",
                      "name": "Boris Isakovic",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Ivan"
                      ],
                      "roles": [
                          {
                              "character": "Ivan"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "847ee218-220a-4cc8-b295-6368d1243505",
          "serviceTimeMs": 260.208192
      },
      "@type": "imdb.api.find.response",
      "query": "tt10954984",
      "results": [
          {
              "id": "/title/tt10954984/",
              "image": {
                  "height": 1152,
                  "id": "/title/tt10954984/images/rm1742011905",
                  "url": "https://m.media-amazon.com/images/M/MV5BMGIyNTI3NWItNTJkOS00MGYyLWE4NjgtZDhjMWQ4Y2JkZTU5XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
                  "width": 648
              },
              "runningTimeInMinutes": 130,
              "title": "Nope",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm2257207/",
                      "legacyNameText": "Kaluuya, Daniel",
                      "name": "Daniel Kaluuya",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "OJ Haywood"
                      ],
                      "roles": [
                          {
                              "character": "OJ Haywood"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1551130/",
                      "legacyNameText": "Palmer, Keke",
                      "name": "Keke Palmer",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Emerald Haywood"
                      ],
                      "roles": [
                          {
                              "character": "Emerald Haywood"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3081796/",
                      "legacyNameText": "Yeun, Steven",
                      "name": "Steven Yeun",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Ricky 'Jupe' Park"
                      ],
                      "roles": [
                          {
                              "character": "Ricky 'Jupe' Park"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "627a0eea-82d9-40e4-b7d4-4700a19555a2",
          "serviceTimeMs": 162.553261
      },
      "@type": "imdb.api.find.response",
      "query": "tt8760708",
      "results": [
          {
              "id": "/title/tt8760708/",
              "image": {
                  "height": 2500,
                  "id": "/title/tt8760708/images/rm4216980993",
                  "url": "https://m.media-amazon.com/images/M/MV5BMDk4MTdhYzEtODk3OS00ZDBjLWFhNTQtMDI2ODdjNzQzZTA3XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
                  "width": 1579
              },
              "runningTimeInMinutes": 102,
              "title": "M3gan",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm8627157/",
                      "legacyNameText": "McGraw, Violet",
                      "name": "Violet McGraw",
                      "category": "actress",
                      "characters": [
                          "Cady"
                      ],
                      "roles": [
                          {
                              "character": "Cady"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm13143634/",
                      "legacyNameText": "Donald, Amie",
                      "name": "Amie Donald",
                      "category": "actress",
                      "characters": [
                          "M3gan"
                      ],
                      "roles": [
                          {
                              "character": "M3gan"
                          }
                      ]
                  },
                  {
                      "disambiguation": "V",
                      "id": "/name/nm6761813/",
                      "legacyNameText": "Davis, Jenna (V)",
                      "name": "Jenna Davis",
                      "attr": [
                          "voice"
                      ],
                      "category": "actress",
                      "characters": [
                          "M3gan"
                      ],
                      "roles": [
                          {
                              "character": "M3gan"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "b30d55c8-f8d0-4d09-b7d5-1859177a1a24",
          "serviceTimeMs": 165.797748
      },
      "@type": "imdb.api.find.response",
      "query": "tt17663992",
      "results": [
          {
              "id": "/title/tt17663992/",
              "image": {
                  "height": 1350,
                  "id": "/title/tt17663992/images/rm2320644353",
                  "url": "https://m.media-amazon.com/images/M/MV5BZGU1ZTYzYTgtZjk2Mi00MzdmLWFmNmUtM2Q2MDk5ZjcwNWE4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
                  "width": 1080
              },
              "title": "Scream 6",
              "titleType": "movie",
              "year": 2023,
              "principals": [
                  {
                      "disambiguation": "III",
                      "id": "/name/nm4574440/",
                      "legacyNameText": "Barrera, Melissa (III)",
                      "name": "Melissa Barrera",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Sam Carpenter"
                      ],
                      "roles": [
                          {
                              "character": "Sam Carpenter"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4911194/",
                      "legacyNameText": "Ortega, Jenna",
                      "name": "Jenna Ortega",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Tara Carpenter"
                      ],
                      "roles": [
                          {
                              "character": "Tara Carpenter"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0001073/",
                      "legacyNameText": "Cox, Courteney",
                      "name": "Courteney Cox",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Gale Weathers"
                      ],
                      "roles": [
                          {
                              "character": "Gale Weathers"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "7d8d66bb-7037-49fa-8f15-53c4e349f9ca",
          "serviceTimeMs": 264.653992
      },
      "@type": "imdb.api.find.response",
      "query": "tt19770238",
      "results": [
          {
              "disambiguation": "II",
              "id": "/title/tt19770238/",
              "image": {
                  "height": 2047,
                  "id": "/title/tt19770238/images/rm1496056577",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTM3OTU0ZGUtNzYwYy00ODU3LWI3YjgtOWZlODliMmRiMWEzXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg",
                  "width": 1382
              },
              "runningTimeInMinutes": 102,
              "title": "Aftersun",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm8958770/",
                      "legacyNameText": "Mescal, Paul",
                      "name": "Paul Mescal",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Calum"
                      ],
                      "roles": [
                          {
                              "character": "Calum"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm13592008/",
                      "legacyNameText": "Corio, Frankie",
                      "name": "Frankie Corio",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Sophie"
                      ],
                      "roles": [
                          {
                              "character": "Sophie"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3278700/",
                      "legacyNameText": "Rowlson-Hall, Celia",
                      "name": "Celia Rowlson-Hall",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Adult Sophie"
                      ],
                      "roles": [
                          {
                              "character": "Adult Sophie"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "af7e0cfd-1902-4b6c-9e55-a979d18696f0",
          "serviceTimeMs": 282.516722
      },
      "@type": "imdb.api.find.response",
      "query": "tt13007592",
      "results": [
          {
              "id": "/title/tt13007592/",
              "image": {
                  "height": 630,
                  "id": "/title/tt13007592/images/rm303039745",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTA5YzcwNmYtY2E2OC00MzE5LTlkMWUtMmVhYTg1NGM5Nzk5XkEyXkFqcGdeQXVyMTUzNzc3NDAz._V1_.jpg",
                  "width": 450
              },
              "runningTimeInMinutes": 99,
              "title": "The Noel Diary",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000889/",
                      "legacyNameText": "Bedelia, Bonnie",
                      "name": "Bonnie Bedelia",
                      "category": "actress",
                      "characters": [
                          "Ellie Foster"
                      ],
                      "roles": [
                          {
                              "character": "Ellie Foster"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm1261997/",
                      "legacyNameText": "Hartley, Justin (I)",
                      "name": "Justin Hartley",
                      "category": "actor",
                      "characters": [
                          "Jake Turner"
                      ],
                      "roles": [
                          {
                              "character": "Jake Turner"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0001664/",
                      "legacyNameText": "Remar, James",
                      "name": "James Remar",
                      "category": "actor",
                      "characters": [
                          "Scott Turner"
                      ],
                      "roles": [
                          {
                              "character": "Scott Turner"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "c43ae5a8-7bf1-4a4c-a070-be5a518dc02f",
          "serviceTimeMs": 271.760502
      },
      "@type": "imdb.api.find.response",
      "query": "tt1067106",
      "results": [
          {
              "id": "/title/tt1067106/",
              "image": {
                  "height": 2048,
                  "id": "/title/tt1067106/images/rm2890238208",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTM1MTI5ODU4MV5BMl5BanBnXkFtZTcwNTYyNTU4Mg@@._V1_.jpg",
                  "width": 1386
              },
              "runningTimeInMinutes": 96,
              "title": "A Christmas Carol",
              "titleType": "movie",
              "year": 2009,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000120/",
                      "legacyNameText": "Carrey, Jim (I)",
                      "name": "Jim Carrey",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Scrooge",
                          "Ghost of Christmas Past",
                          "Scrooge as a Young Boy"
                      ],
                      "roles": [
                          {
                              "character": "Scrooge",
                              "characterId": "/character/ch0000500/"
                          },
                          {
                              "character": "Ghost of Christmas Past",
                              "characterId": "/character/ch0029511/"
                          },
                          {
                              "character": "Scrooge as a Young Boy",
                              "characterId": "/character/ch0000500/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000198/",
                      "legacyNameText": "Oldman, Gary",
                      "name": "Gary Oldman",
                      "billing": 11,
                      "category": "actor",
                      "characters": [
                          "Bob Cratchit",
                          "Marley",
                          "Tiny Tim"
                      ],
                      "roles": [
                          {
                              "character": "Bob Cratchit",
                              "characterId": "/character/ch0000542/"
                          },
                          {
                              "character": "Marley",
                              "characterId": "/character/ch0000492/"
                          },
                          {
                              "character": "Tiny Tim",
                              "characterId": "/character/ch0000569/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000147/",
                      "legacyNameText": "Firth, Colin",
                      "name": "Colin Firth",
                      "billing": 12,
                      "category": "actor",
                      "characters": [
                          "Fred"
                      ],
                      "roles": [
                          {
                              "character": "Fred",
                              "characterId": "/character/ch0159761/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "27ff8b44-1df1-49d7-ba1a-9e33f6b9c694",
          "serviceTimeMs": 187.811593
      },
      "@type": "imdb.api.find.response",
      "query": "tt1757678",
      "results": [
          {
              "id": "/title/tt1757678/",
              "image": {
                  "height": 720,
                  "id": "/title/tt1757678/images/rm1197290240",
                  "url": "https://m.media-amazon.com/images/M/MV5BNmM1NmY4N2QtNmVkOS00MjMyLWI5ZGUtYWYxMDRjY2MzNDdiXkEyXkFqcGdeQXVyMTAwMDAwMA@@._V1_.jpg",
                  "width": 720
              },
              "title": "Avatar 3",
              "titleType": "movie",
              "year": 2024,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm5607823/",
                      "legacyNameText": "Champion, Jack (I)",
                      "name": "Jack Champion",
                      "category": "actor",
                      "characters": [
                          "Javier 'Spider' Socorro"
                      ],
                      "roles": [
                          {
                              "character": "Javier 'Spider' Socorro"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0941777/",
                      "legacyNameText": "Worthington, Sam",
                      "name": "Sam Worthington",
                      "category": "actor",
                      "characters": [
                          "Jake Sully"
                      ],
                      "roles": [
                          {
                              "character": "Jake Sully",
                              "characterId": "/character/ch0098390/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0757855/",
                      "legacyNameText": "Saldana, Zoe (I)",
                      "name": "Zoe Saldana",
                      "category": "actress",
                      "characters": [
                          "Neytiri"
                      ],
                      "roles": [
                          {
                              "character": "Neytiri",
                              "characterId": "/character/ch0098391/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "654008f1-bd2e-4258-bdec-d7b509e1fa8b",
          "serviceTimeMs": 161.668132
      },
      "@type": "imdb.api.find.response",
      "query": "tt11138512",
      "results": [
          {
              "id": "/title/tt11138512/",
              "image": {
                  "height": 2048,
                  "id": "/title/tt11138512/images/rm2924419329",
                  "url": "https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg",
                  "width": 1382
              },
              "runningTimeInMinutes": 137,
              "title": "The Northman",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0002907/",
                      "legacyNameText": "Skarsgård, Alexander",
                      "name": "Alexander Skarsgård",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Amleth"
                      ],
                      "roles": [
                          {
                              "character": "Amleth"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000173/",
                      "legacyNameText": "Kidman, Nicole",
                      "name": "Nicole Kidman",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Queen Gudrún"
                      ],
                      "roles": [
                          {
                              "character": "Queen Gudrún"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0051903/",
                      "legacyNameText": "Bang, Claes",
                      "name": "Claes Bang",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Fjölnir the Brotherless"
                      ],
                      "roles": [
                          {
                              "character": "Fjölnir the Brotherless"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "be95b1fa-825d-4b29-876a-b9c5d40b83b7",
          "serviceTimeMs": 247.430705
      },
      "@type": "imdb.api.find.response",
      "query": "tt15255876",
      "results": [
          {
              "id": "/title/tt15255876/",
              "image": {
                  "height": 8000,
                  "id": "/title/tt15255876/images/rm2314734081",
                  "url": "https://m.media-amazon.com/images/M/MV5BOGI4ODQwYjUtZTA4Mi00YTljLWE4MzItM2M4OGJiNTFkZjIyXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
                  "width": 5400
              },
              "runningTimeInMinutes": 97,
              "title": "Emily the Criminal",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm2201555/",
                      "legacyNameText": "Plaza, Aubrey (I)",
                      "name": "Aubrey Plaza",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Emily"
                      ],
                      "roles": [
                          {
                              "character": "Emily"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0744331/",
                      "legacyNameText": "Rossi, Theo",
                      "name": "Theo Rossi",
                      "billing": 17,
                      "category": "actor",
                      "characters": [
                          "Youcef"
                      ],
                      "roles": [
                          {
                              "character": "Youcef"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2224519/",
                      "legacyNameText": "Badillo, Bernardo",
                      "name": "Bernardo Badillo",
                      "billing": 4,
                      "category": "actor",
                      "characters": [
                          "Javier"
                      ],
                      "roles": [
                          {
                              "character": "Javier"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "b824be4d-bb96-438d-8e59-83cd40b4eedf",
          "serviceTimeMs": 163.332252
      },
      "@type": "imdb.api.find.response",
      "query": "tt14444726",
      "results": [
          {
              "id": "/title/tt14444726/",
              "image": {
                  "height": 1600,
                  "id": "/title/tt14444726/images/rm1105529857",
                  "url": "https://m.media-amazon.com/images/M/MV5BM2I0ZDcyYzItMGEyNi00YWVhLTlmNTQtOWVlYjE1ZGVhNWM0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                  "width": 1080
              },
              "runningTimeInMinutes": 158,
              "title": "Tár",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000949/",
                      "legacyNameText": "Blanchett, Cate",
                      "name": "Cate Blanchett",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Lydia Tár"
                      ],
                      "roles": [
                          {
                              "character": "Lydia Tár"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4374524/",
                      "legacyNameText": "Merlant, Noémie",
                      "name": "Noémie Merlant",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Francesca Lentini"
                      ],
                      "roles": [
                          {
                              "character": "Francesca Lentini"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0396125/",
                      "legacyNameText": "Hoss, Nina",
                      "name": "Nina Hoss",
                      "billing": 16,
                      "category": "actress",
                      "characters": [
                          "Sharon Goodnow"
                      ],
                      "roles": [
                          {
                              "character": "Sharon Goodnow"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "308bc76f-788b-4ccb-9ed3-d26cde29abc3",
          "serviceTimeMs": 269.603589
      },
      "@type": "imdb.api.find.response",
      "query": "tt1016150",
      "results": [
          {
              "id": "/title/tt1016150/",
              "image": {
                  "height": 1350,
                  "id": "/title/tt1016150/images/rm448662785",
                  "url": "https://m.media-amazon.com/images/M/MV5BYTE1MmZiMWYtYTFmZi00YjA3LWI2ODgtMWFlNWYxZjdmNGE3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg",
                  "width": 1080
              },
              "runningTimeInMinutes": 148,
              "title": "All Quiet on the Western Front",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0436835/",
                      "legacyNameText": "Kammerer, Felix (I)",
                      "name": "Felix Kammerer",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Paul Bäumer"
                      ],
                      "roles": [
                          {
                              "character": "Paul Bäumer"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm3477129/",
                      "legacyNameText": "Schuch, Albrecht (I)",
                      "name": "Albrecht Schuch",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Stanislaus Katczinsky"
                      ],
                      "roles": [
                          {
                              "character": "Stanislaus Katczinsky"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm6037256/",
                      "legacyNameText": "Hilmer, Aaron",
                      "name": "Aaron Hilmer",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Albert Kropp"
                      ],
                      "roles": [
                          {
                              "character": "Albert Kropp"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "893e51a9-d0ee-4b59-a323-bedfcb86eb7a",
          "serviceTimeMs": 181.524598
      },
      "@type": "imdb.api.find.response",
      "query": "tt0304669",
      "results": [
          {
              "id": "/title/tt0304669/",
              "image": {
                  "height": 593,
                  "id": "/title/tt0304669/images/rm1673173248",
                  "url": "https://m.media-amazon.com/images/M/MV5BNjU0Njk5MTA2Nl5BMl5BanBnXkFtZTYwODkzMzQ3._V1_.jpg",
                  "width": 400
              },
              "runningTimeInMinutes": 104,
              "title": "The Santa Clause 2",
              "titleType": "movie",
              "year": 2002,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000741/",
                      "legacyNameText": "Allen, Tim (I)",
                      "name": "Tim Allen",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Scott Calvin",
                          "Santa",
                          "Toy Santa"
                      ],
                      "roles": [
                          {
                              "character": "Scott Calvin",
                              "characterId": "/character/ch0039626/"
                          },
                          {
                              "character": "Santa",
                              "characterId": "/character/ch0004985/"
                          },
                          {
                              "character": "Toy Santa"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0107748/",
                      "legacyNameText": "Breslin, Spencer",
                      "name": "Spencer Breslin",
                      "billing": 7,
                      "category": "actor",
                      "characters": [
                          "Curtis"
                      ],
                      "roles": [
                          {
                              "character": "Curtis",
                              "characterId": "/character/ch0151439/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0593310/",
                      "legacyNameText": "Mitchell, Elizabeth (I)",
                      "name": "Elizabeth Mitchell",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Carol"
                      ],
                      "roles": [
                          {
                              "character": "Carol",
                              "characterId": "/character/ch0261174/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "416816c0-9435-4d24-94e5-459d866f89e8",
          "serviceTimeMs": 148.504024
      },
      "@type": "imdb.api.find.response",
      "query": "tt14147224",
      "results": [
          {
              "id": "/title/tt14147224/",
              "image": {
                  "height": 3974,
                  "id": "/title/tt14147224/images/rm2506884097",
                  "url": "https://m.media-amazon.com/images/M/MV5BYWY4ZWRmNjItZGNjNC00NjM1LWFmZDctYWVhZDRkMmUxM2FiXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
                  "width": 2657
              },
              "runningTimeInMinutes": 96,
              "title": "Mindcage",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000518/",
                      "legacyNameText": "Malkovich, John",
                      "name": "John Malkovich",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "The Artist"
                      ],
                      "roles": [
                          {
                              "character": "The Artist"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0001454/",
                      "legacyNameText": "Lawrence, Martin (I)",
                      "name": "Martin Lawrence",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Jake Doyle"
                      ],
                      "roles": [
                          {
                              "character": "Jake Doyle"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4612692/",
                      "legacyNameText": "Roxburgh, Melissa",
                      "name": "Melissa Roxburgh",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Mary Kelly"
                      ],
                      "roles": [
                          {
                              "character": "Mary Kelly"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "5a2a0f6c-9a19-4c94-92a1-cba3ce700eda",
          "serviceTimeMs": 254.250371
      },
      "@type": "imdb.api.find.response",
      "query": "tt3850590",
      "results": [
          {
              "disambiguation": "I",
              "id": "/title/tt3850590/",
              "image": {
                  "height": 1500,
                  "id": "/title/tt3850590/images/rm3673088768",
                  "url": "https://m.media-amazon.com/images/M/MV5BMjk0MjMzMTI3NV5BMl5BanBnXkFtZTgwODEyODkxNzE@._V1_.jpg",
                  "width": 938
              },
              "runningTimeInMinutes": 98,
              "title": "Krampus",
              "titleType": "movie",
              "year": 2015,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0004395/",
                      "legacyNameText": "Scott, Adam (I)",
                      "name": "Adam Scott",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Tom"
                      ],
                      "roles": [
                          {
                              "character": "Tom",
                              "characterId": "/character/ch0538584/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0001057/",
                      "legacyNameText": "Collette, Toni",
                      "name": "Toni Collette",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Sarah"
                      ],
                      "roles": [
                          {
                              "character": "Sarah",
                              "characterId": "/character/ch0538585/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0462712/",
                      "legacyNameText": "Koechner, David",
                      "name": "David Koechner",
                      "billing": 8,
                      "category": "actor",
                      "characters": [
                          "Howard"
                      ],
                      "roles": [
                          {
                              "character": "Howard",
                              "characterId": "/character/ch0538587/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "fe259656-67db-4c8c-8c5e-b85d59272f21",
          "serviceTimeMs": 161.897173
      },
      "@type": "imdb.api.find.response",
      "query": "tt0039628",
      "results": [
          {
              "id": "/title/tt0039628/",
              "image": {
                  "height": 3000,
                  "id": "/title/tt0039628/images/rm3132168704",
                  "url": "https://m.media-amazon.com/images/M/MV5BNjRkOGEwYTUtY2E5Yy00ODg4LTk2ZWItY2IyMzUxOGVhMTM1XkEyXkFqcGdeQXVyNDk0MDg4NDk@._V1_.jpg",
                  "width": 1996
              },
              "runningTimeInMinutes": 96,
              "title": "Miracle on 34th Street",
              "titleType": "movie",
              "year": 1947,
              "principals": [
                  {
                      "id": "/name/nm0350324/",
                      "legacyNameText": "Gwenn, Edmund",
                      "name": "Edmund Gwenn",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Kris Kringle"
                      ],
                      "roles": [
                          {
                              "character": "Kris Kringle",
                              "characterId": "/character/ch0004985/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000058/",
                      "legacyNameText": "O'Hara, Maureen (I)",
                      "name": "Maureen O'Hara",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Doris Walker"
                      ],
                      "roles": [
                          {
                              "character": "Doris Walker",
                              "characterId": "/character/ch0014887/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0668361/",
                      "legacyNameText": "Payne, John (I)",
                      "name": "John Payne",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Fred Gailey"
                      ],
                      "roles": [
                          {
                              "character": "Fred Gailey",
                              "characterId": "/character/ch0014890/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "6546e49b-dfb7-451f-bf30-645894231662",
          "serviceTimeMs": 158.43869
      },
      "@type": "imdb.api.find.response",
      "query": "tt14456350",
      "results": [
          {
              "id": "/title/tt14456350/",
              "image": {
                  "height": 1200,
                  "id": "/title/tt14456350/images/rm1707216641",
                  "url": "https://m.media-amazon.com/images/M/MV5BYTQxNzJjNmEtOTk4NC00MTVlLTg2YTktYmQ2NmM2NjAxNzkwXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg",
                  "width": 816
              },
              "runningTimeInMinutes": 103,
              "title": "About Fate",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "II",
                      "id": "/name/nm0731075/",
                      "legacyNameText": "Roberts, Emma (II)",
                      "name": "Emma Roberts",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Margot"
                      ],
                      "roles": [
                          {
                              "character": "Margot"
                          }
                      ]
                  },
                  {
                      "disambiguation": "V",
                      "id": "/name/nm3287038/",
                      "legacyNameText": "Mann, Thomas (V)",
                      "name": "Thomas Mann",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Griffin"
                      ],
                      "roles": [
                          {
                              "character": "Griffin"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm6663708/",
                      "legacyNameText": "Petsch, Madelaine",
                      "name": "Madelaine Petsch",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Clementine"
                      ],
                      "roles": [
                          {
                              "character": "Clementine"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "0e84868d-80c4-44ae-a79e-c49d4d29eae8",
          "serviceTimeMs": 178.471753
      },
      "@type": "imdb.api.find.response",
      "query": "tt0104940",
      "results": [
          {
              "id": "/title/tt0104940/",
              "image": {
                  "height": 2958,
                  "id": "/title/tt0104940/images/rm2948226048",
                  "url": "https://m.media-amazon.com/images/M/MV5BN2Y0NWRkNWItZWEwNi00MDNlLWJmZDYtNTkwYzI5Nzg4MjVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                  "width": 2002
              },
              "runningTimeInMinutes": 85,
              "title": "The Muppet Christmas Carol",
              "titleType": "movie",
              "year": 1992,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000323/",
                      "legacyNameText": "Caine, Michael (I)",
                      "name": "Michael Caine",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Scrooge"
                      ],
                      "roles": [
                          {
                              "character": "Scrooge",
                              "characterId": "/character/ch0000500/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0324397/",
                      "legacyNameText": "Goelz, Dave",
                      "name": "Dave Goelz",
                      "attr": [
                          "voice"
                      ],
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "The Great Gonzo",
                          "Robert Marley",
                          "Bunsen Honeydew"
                      ],
                      "roles": [
                          {
                              "character": "The Great Gonzo",
                              "characterId": "/character/ch0040025/"
                          },
                          {
                              "character": "Robert Marley"
                          },
                          {
                              "character": "Bunsen Honeydew",
                              "characterId": "/character/ch0000708/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0926209/",
                      "legacyNameText": "Whitmire, Steve",
                      "name": "Steve Whitmire",
                      "attr": [
                          "voice"
                      ],
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Rizzo the Rat",
                          "Bean Bunny",
                          "Kermit the Frog"
                      ],
                      "roles": [
                          {
                              "character": "Rizzo the Rat",
                              "characterId": "/character/ch0000703/"
                          },
                          {
                              "character": "Bean Bunny",
                              "characterId": "/character/ch0029223/"
                          },
                          {
                              "character": "Kermit the Frog",
                              "characterId": "/character/ch0000604/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "7c591687-88f9-4f76-a61e-1deb3e81975d",
          "serviceTimeMs": 175.511817
      },
      "@type": "imdb.api.find.response",
      "query": "tt0120338",
      "results": [
          {
              "id": "/title/tt0120338/",
              "image": {
                  "height": 3000,
                  "id": "/title/tt0120338/images/rm2647458304",
                  "url": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
                  "width": 2015
              },
              "runningTimeInMinutes": 194,
              "title": "Titanic",
              "titleType": "movie",
              "year": 1997,
              "principals": [
                  {
                      "id": "/name/nm0000138/",
                      "legacyNameText": "DiCaprio, Leonardo",
                      "name": "Leonardo DiCaprio",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Jack Dawson"
                      ],
                      "roles": [
                          {
                              "character": "Jack Dawson",
                              "characterId": "/character/ch0002338/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000701/",
                      "legacyNameText": "Winslet, Kate",
                      "name": "Kate Winslet",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Rose Dewitt Bukater"
                      ],
                      "roles": [
                          {
                              "character": "Rose Dewitt Bukater",
                              "characterId": "/character/ch0002339/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000708/",
                      "legacyNameText": "Zane, Billy (I)",
                      "name": "Billy Zane",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Cal Hockley"
                      ],
                      "roles": [
                          {
                              "character": "Cal Hockley",
                              "characterId": "/character/ch0002341/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "83dccd4d-ddb6-4876-aa5a-1f53cc71b2c7",
          "serviceTimeMs": 164.283145
      },
      "@type": "imdb.api.find.response",
      "query": "tt13229894",
      "results": [
          {
              "id": "/title/tt13229894/",
              "image": {
                  "height": 2792,
                  "id": "/title/tt13229894/images/rm2636123649",
                  "url": "https://m.media-amazon.com/images/M/MV5BNDhhNjFiZGYtM2NhZC00MWRlLWI4ZjctYzgwNzhkODhlMTkxXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
                  "width": 1942
              },
              "runningTimeInMinutes": 154,
              "title": "God's Crooked Lines",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm1036659/",
                      "legacyNameText": "Lennie, Bárbara",
                      "name": "Bárbara Lennie",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Alice"
                      ],
                      "roles": [
                          {
                              "character": "Alice"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0273464/",
                      "legacyNameText": "Fernández, Eduard (I)",
                      "name": "Eduard Fernández",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Samuel Alvar"
                      ],
                      "roles": [
                          {
                              "character": "Samuel Alvar"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3084972/",
                      "legacyNameText": "Mauleón, Loreto",
                      "name": "Loreto Mauleón",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Montserrat Castell"
                      ],
                      "roles": [
                          {
                              "character": "Montserrat Castell"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "ceab4ff9-65aa-48eb-abb4-8660495245ab",
          "serviceTimeMs": 192.478989
      },
      "@type": "imdb.api.find.response",
      "query": "tt4593060",
      "results": [
          {
              "id": "/title/tt4593060/",
              "image": {
                  "height": 2500,
                  "id": "/title/tt4593060/images/rm3137408769",
                  "url": "https://m.media-amazon.com/images/M/MV5BZDIyYjM3N2EtOTU1MC00YTA4LTgzNjctMTNjODcxZTZhODU2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
                  "width": 1688
              },
              "runningTimeInMinutes": 105,
              "title": "Pinocchio",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0330687/",
                      "legacyNameText": "Gordon-Levitt, Joseph",
                      "name": "Joseph Gordon-Levitt",
                      "attr": [
                          "voice"
                      ],
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Jiminy Cricket"
                      ],
                      "roles": [
                          {
                              "character": "Jiminy Cricket"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000158/",
                      "legacyNameText": "Hanks, Tom",
                      "name": "Tom Hanks",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Geppetto"
                      ],
                      "roles": [
                          {
                              "character": "Geppetto"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm9974256/",
                      "legacyNameText": "Ainsworth, Benjamin Evan",
                      "name": "Benjamin Evan Ainsworth",
                      "attr": [
                          "voice"
                      ],
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Pinocchio"
                      ],
                      "roles": [
                          {
                              "character": "Pinocchio"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "a4a4e004-ce70-441b-b29b-1d324e4271c0",
          "serviceTimeMs": 266.694553
      },
      "@type": "imdb.api.find.response",
      "query": "tt20917338",
      "results": [
          {
              "id": "/title/tt20917338/",
              "image": {
                  "height": 1200,
                  "id": "/title/tt20917338/images/rm2226783489",
                  "url": "https://m.media-amazon.com/images/M/MV5BNDJmMzc1NzItNDQzYi00Nzk3LTg2NWYtMGRkNTM4MWIyMmU5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
                  "width": 960
              },
              "runningTimeInMinutes": 96,
              "title": "Scrooge: A Christmas Carol",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm1812656/",
                      "legacyNameText": "Evans, Luke (I)",
                      "name": "Luke Evans",
                      "attr": [
                          "voice"
                      ],
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Scrooge"
                      ],
                      "roles": [
                          {
                              "character": "Scrooge"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1469236/",
                      "legacyNameText": "Colman, Olivia",
                      "name": "Olivia Colman",
                      "attr": [
                          "voice"
                      ],
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Past"
                      ],
                      "roles": [
                          {
                              "character": "Past"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2976580/",
                      "legacyNameText": "Buckley, Jessie",
                      "name": "Jessie Buckley",
                      "attr": [
                          "voice"
                      ],
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Isabel Fezziwig"
                      ],
                      "roles": [
                          {
                              "character": "Isabel Fezziwig"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "edeadd0e-95dd-4c70-8503-44b6b6f49972",
          "serviceTimeMs": 163.011868
      },
      "@type": "imdb.api.find.response",
      "query": "tt14109724",
      "results": [
          {
              "id": "/title/tt14109724/",
              "image": {
                  "height": 5000,
                  "id": "/title/tt14109724/images/rm379193601",
                  "url": "https://m.media-amazon.com/images/M/MV5BMWE0MmEwMWUtZjRjOC00YzE3LWI2MjctNjc3NWQ0YTVmNDQ4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
                  "width": 3157
              },
              "runningTimeInMinutes": 104,
              "title": "Ticket to Paradise",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000123/",
                      "legacyNameText": "Clooney, George",
                      "name": "George Clooney",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "David Cotton"
                      ],
                      "roles": [
                          {
                              "character": "David Cotton"
                          }
                      ]
                  },
                  {
                      "disambiguation": "IV",
                      "id": "/name/nm1116918/",
                      "legacyNameText": "Lynch, Sean (IV)",
                      "name": "Sean Lynch",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Rob"
                      ],
                      "roles": [
                          {
                              "character": "Rob"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000210/",
                      "legacyNameText": "Roberts, Julia (I)",
                      "name": "Julia Roberts",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Georgia Cotton"
                      ],
                      "roles": [
                          {
                              "character": "Georgia Cotton"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "6498a7f1-8a21-44db-9def-e4dda02f1b97",
          "serviceTimeMs": 174.820959
      },
      "@type": "imdb.api.find.response",
      "query": "tt0241527",
      "results": [
          {
              "id": "/title/tt0241527/",
              "image": {
                  "height": 2902,
                  "id": "/title/tt0241527/images/rm2105413120",
                  "url": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
                  "width": 1972
              },
              "runningTimeInMinutes": 152,
              "title": "Harry Potter and the Sorcerer's Stone",
              "titleType": "movie",
              "year": 2001,
              "principals": [
                  {
                      "id": "/name/nm0705356/",
                      "legacyNameText": "Radcliffe, Daniel",
                      "name": "Daniel Radcliffe",
                      "billing": 5,
                      "category": "actor",
                      "characters": [
                          "Harry Potter"
                      ],
                      "roles": [
                          {
                              "character": "Harry Potter",
                              "characterId": "/character/ch0000985/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0342488/",
                      "legacyNameText": "Grint, Rupert",
                      "name": "Rupert Grint",
                      "billing": 23,
                      "category": "actor",
                      "characters": [
                          "Ron Weasley"
                      ],
                      "roles": [
                          {
                              "character": "Ron Weasley",
                              "characterId": "/character/ch0000991/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0001321/",
                      "legacyNameText": "Harris, Richard (I)",
                      "name": "Richard Harris",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Albus Dumbledore"
                      ],
                      "roles": [
                          {
                              "character": "Albus Dumbledore",
                              "characterId": "/character/ch0000998/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "d66140ac-747f-49f0-ab4e-1f7f71bb2745",
          "serviceTimeMs": 277.89215
      },
      "@type": "imdb.api.find.response",
      "query": "tt16233952",
      "results": [
          {
              "id": "/title/tt16233952/",
              "image": {
                  "height": 2880,
                  "id": "/title/tt16233952/images/rm2453013761",
                  "url": "https://m.media-amazon.com/images/M/MV5BZWU0MjkyM2ItOGRiOC00ZGIzLWIyZTQtZWE0ZTk3ZWJhMTVhXkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_.jpg",
                  "width": 1944
              },
              "runningTimeInMinutes": 87,
              "title": "Something from Tiffany's",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm3614913/",
                      "legacyNameText": "Deutch, Zoey",
                      "name": "Zoey Deutch",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Rachel Meyer"
                      ],
                      "roles": [
                          {
                              "character": "Rachel Meyer"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3069604/",
                      "legacyNameText": "Sampson, Kendrick",
                      "name": "Kendrick Sampson",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Ethan Greene"
                      ],
                      "roles": [
                          {
                              "character": "Ethan Greene"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm2200658/",
                      "legacyNameText": "Nicholson, Ray (I)",
                      "name": "Ray Nicholson",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Gary Wilson"
                      ],
                      "roles": [
                          {
                              "character": "Gary Wilson"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "fd4d6ce7-2638-46f4-9ee8-5e9556cbb4cc",
          "serviceTimeMs": 179.252855
      },
      "@type": "imdb.api.find.response",
      "query": "tt4589218",
      "results": [
          {
              "id": "/title/tt4589218/",
              "title": "Five Nights at Freddy's",
              "titleType": "movie",
              "principals": [
                  {
                      "id": "/name/nm1242688/",
                      "legacyNameText": "Hutcherson, Josh",
                      "name": "Josh Hutcherson",
                      "category": "actor",
                      "characters": [
                          "Mike Schmidt"
                      ],
                      "roles": [
                          {
                              "character": "Mike Schmidt"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000498/",
                      "legacyNameText": "Lillard, Matthew",
                      "name": "Matthew Lillard",
                      "category": "actor",
                      "characters": [
                          "William Afton"
                      ],
                      "roles": [
                          {
                              "character": "William Afton"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000524/",
                      "legacyNameText": "Masterson, Mary Stuart",
                      "name": "Mary Stuart Masterson",
                      "category": "actress",
                      "characters": [
                          "Female Villain"
                      ],
                      "roles": [
                          {
                              "character": "Female Villain"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "d9312af4-6225-4ed0-a18d-cd92a4faaedc",
          "serviceTimeMs": 165.765502
      },
      "@type": "imdb.api.find.response",
      "query": "tt11112808",
      "results": [
          {
              "id": "/title/tt11112808/",
              "image": {
                  "height": 963,
                  "id": "/title/tt11112808/images/rm1344541185",
                  "url": "https://m.media-amazon.com/images/M/MV5BZGUwMzFiNDktNGI2Yy00ZjYwLWFjY2YtYmUzMWYwNWY4Zjg5XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
                  "width": 720
              },
              "runningTimeInMinutes": 139,
              "title": "Cirkus",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "disambiguation": "II",
                      "id": "/name/nm3828984/",
                      "legacyNameText": "Singh, Ranveer (II)",
                      "name": "Ranveer Singh",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Roy"
                      ],
                      "roles": [
                          {
                              "character": "Roy"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm5249562/",
                      "legacyNameText": "Hegde, Pooja",
                      "name": "Pooja Hegde",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Mala"
                      ],
                      "roles": [
                          {
                              "character": "Mala"
                          }
                      ]
                  },
                  {
                      "disambiguation": "IV",
                      "id": "/name/nm2596365/",
                      "legacyNameText": "Fernandez, Jacqueline (IV)",
                      "name": "Jacqueline Fernandez",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Bindu"
                      ],
                      "roles": [
                          {
                              "character": "Bindu"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "0d0614b0-9478-4d73-9958-5bccb9124f6f",
          "serviceTimeMs": 213.902422
      },
      "@type": "imdb.api.find.response",
      "query": "tt0369436",
      "results": [
          {
              "id": "/title/tt0369436/",
              "image": {
                  "height": 1200,
                  "id": "/title/tt0369436/images/rm1672778752",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTQ2MjA0NDAwNF5BMl5BanBnXkFtZTcwOTU4MTM5MQ@@._V1_.jpg",
                  "width": 810
              },
              "runningTimeInMinutes": 88,
              "title": "Four Christmases",
              "titleType": "movie",
              "year": 2008,
              "principals": [
                  {
                      "id": "/name/nm0000702/",
                      "legacyNameText": "Witherspoon, Reese",
                      "name": "Reese Witherspoon",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Kate"
                      ],
                      "roles": [
                          {
                              "character": "Kate"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000681/",
                      "legacyNameText": "Vaughn, Vince (I)",
                      "name": "Vince Vaughn",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Brad"
                      ],
                      "roles": [
                          {
                              "character": "Brad",
                              "characterId": "/character/ch0093390/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0005460/",
                      "legacyNameText": "Steenburgen, Mary",
                      "name": "Mary Steenburgen",
                      "billing": 7,
                      "category": "actress",
                      "characters": [
                          "Marilyn"
                      ],
                      "roles": [
                          {
                              "character": "Marilyn",
                              "characterId": "/character/ch0150939/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "284e1038-7fe3-49ad-b709-d12b6b678c3f",
          "serviceTimeMs": 304.777832
      },
      "@type": "imdb.api.find.response",
      "query": "tt0068646",
      "results": [
          {
              "id": "/title/tt0068646/",
              "image": {
                  "height": 1982,
                  "id": "/title/tt0068646/images/rm746868224",
                  "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
                  "width": 1396
              },
              "runningTimeInMinutes": 175,
              "title": "The Godfather",
              "titleType": "movie",
              "year": 1972,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000008/",
                      "legacyNameText": "Brando, Marlon (I)",
                      "name": "Marlon Brando",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Don Vito Corleone"
                      ],
                      "roles": [
                          {
                              "character": "Don Vito Corleone",
                              "characterId": "/character/ch0000791/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000199/",
                      "legacyNameText": "Pacino, Al (I)",
                      "name": "Al Pacino",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Michael Corleone"
                      ],
                      "roles": [
                          {
                              "character": "Michael Corleone",
                              "characterId": "/character/ch0000790/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0001001/",
                      "legacyNameText": "Caan, James (I)",
                      "name": "James Caan",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Sonny Corleone"
                      ],
                      "roles": [
                          {
                              "character": "Sonny Corleone",
                              "characterId": "/character/ch0262983/"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/name/nm0610273/",
              "image": {
                  "height": 470,
                  "id": "/name/nm0610273/images/rm3133145344",
                  "url": "https://m.media-amazon.com/images/M/MV5BNjcyYTA4ZGMtM2JmZi00ZGE1LTkwNGUtNDI0ODhjYTQ1OWNhXkEyXkFqcGdeQXVyMTQxMjk0Mg@@._V1_.jpg",
                  "width": 698
              },
              "legacyNameText": "Mower, Patrick",
              "name": "Patrick Mower",
              "knownFor": [
                  {
                      "cast": [
                          {
                              "billing": 4,
                              "category": "actor",
                              "characters": [
                                  "Sergeant Len Able"
                              ],
                              "roles": [
                                  {
                                      "character": "Sergeant Len Able",
                                      "characterId": "/character/ch0290691/"
                                  }
                              ]
                          }
                      ],
                      "summary": {
                          "category": "actor",
                          "characters": [
                              "Sergeant Len Able"
                          ],
                          "displayYear": "1976"
                      },
                      "id": "/title/tt0074286/",
                      "title": "Carry on England",
                      "titleType": "movie",
                      "year": 1976
                  },
                  {
                      "cast": [
                          {
                              "category": "actor",
                              "characters": [
                                  "Rodney Blackstock"
                              ],
                              "endYear": 2022,
                              "episodeCount": 1289,
                              "roles": [
                                  {
                                      "character": "Rodney Blackstock",
                                      "characterId": "/character/ch0097970/"
                                  }
                              ],
                              "startYear": 2000
                          }
                      ],
                      "summary": {
                          "category": "actor",
                          "characters": [
                              "Rodney Blackstock"
                          ],
                          "displayYear": "2000-2022"
                      },
                      "id": "/title/tt0068069/",
                      "title": "Emmerdale Farm",
                      "titleType": "tvSeries",
                      "year": 1972
                  },
                  {
                      "cast": [
                          {
                              "category": "actor",
                              "characters": [
                                  "Brother Damian"
                              ],
                              "endYear": 1983,
                              "episodeCount": 6,
                              "roles": [
                                  {
                                      "character": "Brother Damian",
                                      "characterId": "/character/ch0210865/"
                                  }
                              ],
                              "startYear": 1982
                          }
                      ],
                      "summary": {
                          "category": "actor",
                          "characters": [
                              "Brother Damian"
                          ],
                          "displayYear": "1982-1983"
                      },
                      "id": "/title/tt0083446/",
                      "title": "Marco Polo",
                      "titleType": "tvMiniSeries",
                      "year": 1982
                  },
                  {
                      "cast": [
                          {
                              "category": "actor",
                              "characters": [
                                  "Detective Chief Inspector Tom Haggerty",
                                  "Det. Insp. Tom Haggerty"
                              ],
                              "endYear": 1974,
                              "episodeCount": 16,
                              "roles": [
                                  {
                                      "character": "Detective Chief Inspector Tom Haggerty"
                                  },
                                  {
                                      "character": "Det. Insp. Tom Haggerty",
                                      "characterId": "/character/ch0030012/"
                                  }
                              ],
                              "startYear": 1973
                          }
                      ],
                      "summary": {
                          "category": "actor",
                          "characters": [
                              "Detective Chief Inspector Tom Haggerty",
                              "Det. Insp. Tom Haggerty"
                          ],
                          "displayYear": "1973-1974"
                      },
                      "id": "/title/tt0063953/",
                      "title": "Special Branch",
                      "titleType": "tvSeries",
                      "year": 1969
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "dcc27642-90a4-498f-9679-a6b95d420884",
          "serviceTimeMs": 159.378826
      },
      "@type": "imdb.api.find.response",
      "query": "tt0388419",
      "results": [
          {
              "id": "/title/tt0388419/",
              "image": {
                  "height": 721,
                  "id": "/title/tt0388419/images/rm3527186432",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTQxMDMxODEwNF5BMl5BanBnXkFtZTYwNzM4OTc2._V1_.jpg",
                  "width": 485
              },
              "runningTimeInMinutes": 99,
              "title": "Christmas with the Kranks",
              "titleType": "movie",
              "year": 2004,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000741/",
                      "legacyNameText": "Allen, Tim (I)",
                      "name": "Tim Allen",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Luther Krank"
                      ],
                      "roles": [
                          {
                              "character": "Luther Krank",
                              "characterId": "/character/ch0021813/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000130/",
                      "legacyNameText": "Curtis, Jamie Lee",
                      "name": "Jamie Lee Curtis",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Nora Krank"
                      ],
                      "roles": [
                          {
                              "character": "Nora Krank",
                              "characterId": "/character/ch0021812/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000101/",
                      "legacyNameText": "Aykroyd, Dan",
                      "name": "Dan Aykroyd",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Vic Frohmeyer"
                      ],
                      "roles": [
                          {
                              "character": "Vic Frohmeyer",
                              "characterId": "/character/ch0021814/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "f1bbc453-8ee5-4e84-afe2-03759cbc6141",
          "serviceTimeMs": 277.343139
      },
      "@type": "imdb.api.find.response",
      "query": "tt9411972",
      "results": [
          {
              "id": "/title/tt9411972/",
              "image": {
                  "height": 750,
                  "id": "/title/tt9411972/images/rm2552633345",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTJmNGJmYTgtYjAxNy00YmMzLTk2YTYtMGIzMmUwNDMyMTY1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
                  "width": 600
              },
              "runningTimeInMinutes": 125,
              "title": "Where the Crawdads Sing",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm8402992/",
                      "legacyNameText": "Edgar-Jones, Daisy",
                      "name": "Daisy Edgar-Jones",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Kya Clark"
                      ],
                      "roles": [
                          {
                              "character": "Kya Clark"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4973896/",
                      "legacyNameText": "Smith, Taylor John",
                      "name": "Taylor John Smith",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Tate Walker"
                      ],
                      "roles": [
                          {
                              "character": "Tate Walker"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm6170168/",
                      "legacyNameText": "Dickinson, Harris (I)",
                      "name": "Harris Dickinson",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Chase Andrews"
                      ],
                      "roles": [
                          {
                              "character": "Chase Andrews"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt0331439/",
              "image": {
                  "height": 955,
                  "id": "/title/tt0331439/images/rm2013084672",
                  "url": "https://m.media-amazon.com/images/M/MV5BODZhNDllOWItYTg2Ny00NTQ3LWFkMDUtMDNjYzIzMjEyODAxL2ltYWdlXkEyXkFqcGdeQXVyMjcyMDU4NA@@._V1_.jpg",
                  "width": 652
              },
              "title": "Bob Hope's Overseas Christmas Tours: Around the World with the Troops - 1941-1972",
              "titleType": "tvMovie",
              "year": 1980,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0001362/",
                      "legacyNameText": "Hope, Bob (I)",
                      "name": "Bob Hope",
                      "billing": 1,
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0016402/",
                      "legacyNameText": "Alberghetti, Anna Maria",
                      "name": "Anna Maria Alberghetti",
                      "attr": [
                          "archiveFootage"
                      ],
                      "category": "archive_footage",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000266/",
                      "legacyNameText": "Andress, Ursula",
                      "name": "Ursula Andress",
                      "attr": [
                          "archiveFootage"
                      ],
                      "category": "archive_footage",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "e965533f-9733-4f49-8fed-9723c8f762c7",
          "serviceTimeMs": 309.213591
      },
      "@type": "imdb.api.find.response",
      "query": "tt7405458",
      "results": [
          {
              "id": "/title/tt7405458/",
              "image": {
                  "height": 1350,
                  "id": "/title/tt7405458/images/rm3746498049",
                  "url": "https://m.media-amazon.com/images/M/MV5BNzg3OTEzMTgtYWU0OC00YTI0LWIxOTAtNmRkNTc0Nzg2YWU1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
                  "width": 1080
              },
              "runningTimeInMinutes": 126,
              "title": "A Man Called Otto",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000158/",
                      "legacyNameText": "Hanks, Tom",
                      "name": "Tom Hanks",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Otto Anderson"
                      ],
                      "roles": [
                          {
                              "character": "Otto Anderson"
                          }
                      ]
                  },
                  {
                      "disambiguation": "XV",
                      "id": "/name/nm3769182/",
                      "legacyNameText": "Higgins, John (XV)",
                      "name": "John Higgins",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Hardware Store Clerk"
                      ],
                      "roles": [
                          {
                              "character": "Hardware Store Clerk"
                          }
                      ]
                  },
                  {
                      "disambiguation": "III",
                      "id": "/name/nm2733631/",
                      "legacyNameText": "Bingham, Tony (III)",
                      "name": "Tony Bingham",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Hardware Store Customer"
                      ],
                      "roles": [
                          {
                              "character": "Hardware Store Customer"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "398e0e19-e283-46e0-b1dd-5fd52c5ef202",
          "serviceTimeMs": 282.053067
      },
      "@type": "imdb.api.find.response",
      "query": "tt0106220",
      "results": [
          {
              "id": "/title/tt0106220/",
              "image": {
                  "height": 867,
                  "id": "/title/tt0106220/images/rm3988199424",
                  "url": "https://m.media-amazon.com/images/M/MV5BZWFhNjY0YjItNjM5NC00NzAwLWI3ZWUtMTlkNTA0ZWVkNjBkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                  "width": 580
              },
              "runningTimeInMinutes": 94,
              "title": "Addams Family Values",
              "titleType": "movie",
              "year": 1993,
              "principals": [
                  {
                      "id": "/name/nm0001378/",
                      "legacyNameText": "Huston, Anjelica",
                      "name": "Anjelica Huston",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Morticia Addams"
                      ],
                      "roles": [
                          {
                              "character": "Morticia Addams",
                              "characterId": "/character/ch0008925/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0000471/",
                      "legacyNameText": "Julia, Raul",
                      "name": "Raul Julia",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Gomez Addams"
                      ],
                      "roles": [
                          {
                              "character": "Gomez Addams",
                              "characterId": "/character/ch0008923/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0000502/",
                      "legacyNameText": "Lloyd, Christopher (I)",
                      "name": "Christopher Lloyd",
                      "billing": 3,
                      "category": "actor",
                      "characters": [
                          "Uncle Fester Addams"
                      ],
                      "roles": [
                          {
                              "character": "Uncle Fester Addams",
                              "characterId": "/character/ch0008920/"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt20328534/",
              "nextEpisode": "/title/tt20330472/",
              "parentTitle": {
                  "id": "/title/tt11433988/",
                  "image": {
                      "height": 432,
                      "id": "/title/tt11433988/images/rm751544833",
                      "url": "https://m.media-amazon.com/images/M/MV5BMWQ4NDkwYTgtYzhjOC00OTgwLWE2Y2YtZWMyNmYzODdhZjYwXkEyXkFqcGdeQXVyNzExMzc0MDg@._V1_.jpg",
                      "width": 768
                  },
                  "title": "Crime Stories with Nancy Grace",
                  "titleType": "podcastSeries",
                  "year": 2017
              },
              "previousEpisode": "/title/tt20330254/",
              "seriesStartYear": 2017,
              "title": "Crime Alert 01.06.22",
              "titleType": "podcastEpisode",
              "year": 2022
          },
          {
              "id": "/title/tt19702644/",
              "nextEpisode": "/title/tt19702932/",
              "parentTitle": {
                  "id": "/title/tt18182368/",
                  "title": "iWork4Him PowerThought",
                  "titleType": "podcastSeries",
                  "year": 2019
              },
              "previousEpisode": "/title/tt19702944/",
              "seriesStartYear": 2019,
              "title": "iWork4Him PowerThought 01-06-22",
              "titleType": "podcastEpisode",
              "year": 2022
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "dc4e37d4-f0e2-439a-85df-3d0d3addf73e",
          "serviceTimeMs": 163.232803
      },
      "@type": "imdb.api.find.response",
      "query": "tt6359956",
      "results": [
          {
              "id": "/title/tt6359956/",
              "image": {
                  "height": 1500,
                  "id": "/title/tt6359956/images/rm1621565696",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTUwNTA4MDMxNl5BMl5BanBnXkFtZTgwMjE4NjQ0MzI@._V1_.jpg",
                  "width": 1012
              },
              "runningTimeInMinutes": 104,
              "title": "A Bad Moms Christmas",
              "titleType": "movie",
              "year": 2017,
              "principals": [
                  {
                      "id": "/name/nm0005109/",
                      "legacyNameText": "Kunis, Mila",
                      "name": "Mila Kunis",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Amy"
                      ],
                      "roles": [
                          {
                              "character": "Amy",
                              "characterId": "/character/ch0551257/"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0068338/",
                      "legacyNameText": "Bell, Kristen (I)",
                      "name": "Kristen Bell",
                      "billing": 2,
                      "category": "actress",
                      "characters": [
                          "Kiki"
                      ],
                      "roles": [
                          {
                              "character": "Kiki",
                              "characterId": "/character/ch0569870/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1063517/",
                      "legacyNameText": "Hahn, Kathryn",
                      "name": "Kathryn Hahn",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Carla"
                      ],
                      "roles": [
                          {
                              "character": "Carla",
                              "characterId": "/character/ch0552402/"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "b8907206-e6ed-4027-bf99-faf55950d613",
          "serviceTimeMs": 161.494117
      },
      "@type": "imdb.api.find.response",
      "query": "tt3704428",
      "results": [
          {
              "id": "/title/tt3704428/",
              "image": {
                  "height": 4096,
                  "id": "/title/tt3704428/images/rm2773619457",
                  "url": "https://m.media-amazon.com/images/M/MV5BYzMzNTJjYmMtZTkxNS00MjI4LWI3YmQtOTQ4MDZjZDJlZjQyXkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_.jpg",
                  "width": 2764
              },
              "runningTimeInMinutes": 159,
              "title": "Elvis",
              "titleType": "movie",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm0000158/",
                      "legacyNameText": "Hanks, Tom",
                      "name": "Tom Hanks",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Colonel Tom Parker"
                      ],
                      "roles": [
                          {
                              "character": "Colonel Tom Parker"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm2581521/",
                      "legacyNameText": "Butler, Austin (I)",
                      "name": "Austin Butler",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Elvis"
                      ],
                      "roles": [
                          {
                              "character": "Elvis"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4609822/",
                      "legacyNameText": "DeJonge, Olivia",
                      "name": "Olivia DeJonge",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Priscilla"
                      ],
                      "roles": [
                          {
                              "character": "Priscilla"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "a7f80923-8c78-4a70-aacb-232aab20e4b2",
          "serviceTimeMs": 463.287334
      },
      "@type": "imdb.api.find.response",
      "query": "undefined",
      "results": [
          {
              "id": "/title/tt1436480/",
              "image": {
                  "height": 500,
                  "id": "/title/tt1436480/images/rm2421019136",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_.jpg",
                  "width": 375
              },
              "runningTimeInMinutes": 63,
              "title": "Undefined",
              "titleType": "video",
              "year": 2006,
              "principals": [
                  {
                      "disambiguation": "II",
                      "id": "/name/nm3458162/",
                      "legacyNameText": "Cooley, Ralph (II)",
                      "name": "Ralph Cooley",
                      "category": "actor",
                      "characters": [
                          "Bob Calhoon"
                      ],
                      "roles": [
                          {
                              "character": "Bob Calhoon"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3432507/",
                      "legacyNameText": "Enriquez, Phillip",
                      "name": "Phillip Enriquez",
                      "category": "actor",
                      "characters": [
                          "The Hero"
                      ],
                      "roles": [
                          {
                              "character": "The Hero",
                              "characterId": "/character/ch0492945/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2156818/",
                      "legacyNameText": "Labenz, Gregory",
                      "name": "Gregory Labenz",
                      "category": "actor",
                      "characters": [
                          "Henry Calhoon"
                      ],
                      "roles": [
                          {
                              "character": "Henry Calhoon"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt5581814/",
              "image": {
                  "height": 668,
                  "id": "/title/tt5581814/images/rm1299279616",
                  "url": "https://m.media-amazon.com/images/M/MV5BYTk1OTcwYTQtMmEyNS00OWFiLTlmOWYtZGQ1ZDczNjc3MWFkXkEyXkFqcGdeQXVyMTAwMjMyOTE@._V1_.jpg",
                  "width": 1270
              },
              "title": "Undefined",
              "titleType": "short",
              "year": 2014,
              "principals": [
                  {
                      "id": "/name/nm0159354/",
                      "legacyNameText": "Choueiri, Christine",
                      "name": "Christine Choueiri",
                      "category": "actress",
                      "characters": [
                          "Sister"
                      ],
                      "roles": [
                          {
                              "character": "Sister"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4463524/",
                      "legacyNameText": "Farhat, Julian",
                      "name": "Julian Farhat",
                      "category": "actor",
                      "characters": [
                          "The Business Man"
                      ],
                      "roles": [
                          {
                              "character": "The Business Man"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2741710/",
                      "legacyNameText": "Halawi, Wafa'a Celine",
                      "name": "Wafa'a Celine Halawi",
                      "as": "Wafa Celine Halawi",
                      "category": "actress",
                      "characters": [
                          "the Lover"
                      ],
                      "roles": [
                          {
                              "character": "the Lover"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt16757246/",
              "title": "Undefined",
              "titleType": "tvSeries"
          },
          {
              "id": "/title/tt20117552/",
              "image": {
                  "height": 1350,
                  "id": "/title/tt20117552/images/rm2400456961",
                  "url": "https://m.media-amazon.com/images/M/MV5BY2M2YzE5NzctY2NiNS00YTUxLTk4YjUtYjIzMzk3NmNmODlkXkEyXkFqcGdeQXVyMTA2Mzc5Njc0._V1_.jpg",
                  "width": 1080
              },
              "title": "Chai - a bond undefined",
              "titleType": "movie",
              "principals": [
                  {
                      "disambiguation": "IX",
                      "id": "/name/nm10252799/",
                      "legacyNameText": "Verma, Vikas (IX)",
                      "name": "Vikas Verma",
                      "billing": 4,
                      "category": "actor",
                      "characters": [
                          "Nishant"
                      ],
                      "roles": [
                          {
                              "character": "Nishant"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm10135681/",
                      "legacyNameText": "Alugh, Gaurav",
                      "name": "Gaurav Alugh",
                      "billing": 6,
                      "category": "actor",
                      "characters": [
                          "Producer"
                      ],
                      "roles": [
                          {
                              "character": "Producer"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm7786673/",
                      "legacyNameText": "Pithawalla, Sanaya",
                      "name": "Sanaya Pithawalla",
                      "billing": 7,
                      "category": "actress",
                      "characters": [
                          "Chaaru"
                      ],
                      "roles": [
                          {
                              "character": "Chaaru"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt12132584/",
              "image": {
                  "height": 960,
                  "id": "/title/tt12132584/images/rm3642735873",
                  "url": "https://m.media-amazon.com/images/M/MV5BZmEwMGE4ZWMtNzg2ZC00MDBkLTgyZjYtMzZkZTIzYTg3YjZjXkEyXkFqcGdeQXVyMzI2MDEwNA@@._V1_.jpg",
                  "width": 640
              },
              "runningTimeInMinutes": 8,
              "title": "The Road to Hell is Still Undefined",
              "titleType": "short",
              "year": 2018,
              "principals": [
                  {
                      "disambiguation": "II",
                      "id": "/name/nm8084129/",
                      "legacyNameText": "Black, David (II)",
                      "name": "David Black",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Preacher"
                      ],
                      "roles": [
                          {
                              "character": "Preacher"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm11493195/",
                      "legacyNameText": "Rideaux, Sebastian",
                      "name": "Sebastian Rideaux",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Sebastian Shmegoogle"
                      ],
                      "roles": [
                          {
                              "character": "Sebastian Shmegoogle"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm7609060/",
                      "legacyNameText": "Teh, Vixey",
                      "name": "Vixey Teh",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Victoria, the mother"
                      ],
                      "roles": [
                          {
                              "character": "Victoria, the mother"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt5190590/",
              "runningTimeInMinutes": 5,
              "title": "Artist Undefined",
              "titleType": "short",
              "year": 2015,
              "principals": [
                  {
                      "id": "/name/nm7719709/",
                      "legacyNameText": "Wornham, Daniel",
                      "name": "Daniel Wornham",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Jack Jones"
                      ],
                      "roles": [
                          {
                              "character": "Jack Jones"
                          }
                      ]
                  },
                  {
                      "disambiguation": "VIII",
                      "id": "/name/nm7736866/",
                      "legacyNameText": "Jackson, Jake (VIII)",
                      "name": "Jake Jackson",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Janitor"
                      ],
                      "roles": [
                          {
                              "character": "Janitor"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm7736867/",
                      "legacyNameText": "Redgrave, Lucie",
                      "name": "Lucie Redgrave",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Member of Public #1"
                      ],
                      "roles": [
                          {
                              "character": "Member of Public #1"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt7178924/",
              "image": {
                  "height": 2160,
                  "id": "/title/tt7178924/images/rm1820401920",
                  "url": "https://m.media-amazon.com/images/M/MV5BODMwYTE1ZGMtMDk5Zi00ZTExLTk3MjUtMDk1NTk5Njk0ZmZhXkEyXkFqcGdeQXVyNzI4NTUyNjE@._V1_.jpg",
                  "width": 3840
              },
              "runningTimeInMinutes": 26,
              "title": "Undefined: A Muslim-American Musical",
              "titleType": "short",
              "year": 2017,
              "principals": [
                  {
                      "id": "/name/nm9158606/",
                      "legacyNameText": "Burks, Jenny",
                      "name": "Jenny Burks",
                      "category": "actress",
                      "characters": [
                          "Azin"
                      ],
                      "roles": [
                          {
                              "character": "Azin"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm6003213/",
                      "legacyNameText": "Cardenas, Jared",
                      "name": "Jared Cardenas",
                      "category": "actor",
                      "characters": [
                          "Daniel"
                      ],
                      "roles": [
                          {
                              "character": "Daniel"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm9158607/",
                      "legacyNameText": "Gilgeous, Ari A.",
                      "name": "Ari A. Gilgeous",
                      "category": "actress",
                      "characters": [
                          "Aya"
                      ],
                      "roles": [
                          {
                              "character": "Aya"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt3271334/",
              "runningTimeInMinutes": 17,
              "title": "The Undefined",
              "titleType": "short",
              "year": 2013,
              "principals": [
                  {
                      "id": "/name/nm4142620/",
                      "legacyNameText": "Balthazar, Tina",
                      "name": "Tina Balthazar",
                      "category": "actress",
                      "characters": [
                          "Odessa"
                      ],
                      "roles": [
                          {
                              "character": "Odessa"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4381763/",
                      "legacyNameText": "Carli, Graci",
                      "name": "Graci Carli",
                      "category": "actress",
                      "characters": [
                          "Becky"
                      ],
                      "roles": [
                          {
                              "character": "Becky"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4483968/",
                      "legacyNameText": "Lessard, Valéry",
                      "name": "Valéry Lessard",
                      "category": "actress",
                      "characters": [
                          "Rose"
                      ],
                      "roles": [
                          {
                              "character": "Rose"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt7639764/",
              "image": {
                  "height": 640,
                  "id": "/title/tt7639764/images/rm554522880",
                  "url": "https://m.media-amazon.com/images/M/MV5BOWIwNDMzZDQtYTg1OC00ODBjLTkxZWItMzgzMzZiNjIzZGI0XkEyXkFqcGdeQXVyODIwODk5Njc@._V1_.jpg",
                  "width": 960
              },
              "title": "Beautiful UnDefined",
              "titleType": "movie",
              "year": 2017,
              "principals": [
                  {
                      "id": "/name/nm9423247/",
                      "legacyNameText": "Castelhano, Anne Cavanaugh",
                      "name": "Anne Cavanaugh Castelhano",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "disambiguation": "XI",
                      "id": "/name/nm9423245/",
                      "legacyNameText": "Clark, Grace (XI)",
                      "name": "Grace Clark",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm9423250/",
                      "legacyNameText": "Gladu, Karen",
                      "name": "Karen Gladu",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt9343638/",
              "runningTimeInMinutes": 4,
              "title": "Destiny Undefined",
              "titleType": "short",
              "year": 2009,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm10285549/",
                      "legacyNameText": "Rangaswamy, Gagan (I)",
                      "name": "Gagan Rangaswamy",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Classmate 4"
                      ],
                      "roles": [
                          {
                              "character": "Classmate 4"
                          }
                      ]
                  },
                  {
                      "disambiguation": "XI",
                      "id": "/name/nm10285550/",
                      "legacyNameText": "Li, Qian (XI)",
                      "name": "Qian Li",
                      "category": "actress",
                      "characters": [
                          "Betty"
                      ],
                      "roles": [
                          {
                              "character": "Betty"
                          }
                      ]
                  },
                  {
                      "disambiguation": "IV",
                      "id": "/name/nm10285553/",
                      "legacyNameText": "Peng, Peng (IV)",
                      "name": "Peng Peng",
                      "category": "actor",
                      "characters": [
                          "Classmate 3"
                      ],
                      "roles": [
                          {
                              "character": "Classmate 3"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt10229024/",
              "image": {
                  "height": 10800,
                  "id": "/title/tt10229024/images/rm2057820417",
                  "url": "https://m.media-amazon.com/images/M/MV5BMWZmMzY5MjctMWVmMS00OTljLTgxYjgtZDhlNjYwNWJhNzRjXkEyXkFqcGdeQXVyNjExMDY4NTE@._V1_.jpg",
                  "width": 7200
              },
              "runningTimeInMinutes": 13,
              "title": "Life Undefined",
              "titleType": "short",
              "year": 2020,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm6979517/",
                      "legacyNameText": "Anderson, Michael David (I)",
                      "name": "Michael David Anderson",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Thomas Michael Mitchell"
                      ],
                      "roles": [
                          {
                              "character": "Thomas Michael Mitchell"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1676618/",
                      "legacyNameText": "Marshall, Robert Neal",
                      "name": "Robert Neal Marshall",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Mr. Mitchell"
                      ],
                      "roles": [
                          {
                              "character": "Mr. Mitchell"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm8120923/",
                      "legacyNameText": "Arnold, Athena",
                      "name": "Athena Arnold",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Passenger 1"
                      ],
                      "roles": [
                          {
                              "character": "Passenger 1"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt13362386/",
              "image": {
                  "height": 1080,
                  "id": "/title/tt13362386/images/rm1923602433",
                  "url": "https://m.media-amazon.com/images/M/MV5BYjQ4NDJmOWYtNDI2YS00NWM0LWE0NjktODg1NjFmNTNhZTg1XkEyXkFqcGdeQXVyMTA2MjcwOTI0._V1_.jpg",
                  "width": 1920
              },
              "title": "Darro: Undefined",
              "titleType": "short",
              "year": 2020,
              "principals": [
                  {
                      "id": "/name/nm10889128/",
                      "legacyNameText": "Chronister, Tyler",
                      "name": "Tyler Chronister",
                      "category": "self",
                      "characters": [
                          "Self - Bass"
                      ],
                      "roles": [
                          {
                              "character": "Self - Bass"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0201658/",
                      "legacyNameText": "Darro (I)",
                      "name": "Darro",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm12019790/",
                      "legacyNameText": "Faddis, Meghan",
                      "name": "Meghan Faddis",
                      "category": "actress",
                      "characters": [
                          "Dancer 1"
                      ],
                      "roles": [
                          {
                              "character": "Dancer 1"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt4955578/",
              "image": {
                  "height": 720,
                  "id": "/title/tt4955578/images/rm1220041472",
                  "url": "https://m.media-amazon.com/images/M/MV5BMDNmNDUwZGEtYmMxZS00NzU5LWEyMGMtOTRhNjBkNWNjNjMwXkEyXkFqcGdeQXVyNzA5MzMzNjk@._V1_.jpg",
                  "width": 1280
              },
              "runningTimeInMinutes": 13,
              "title": "A Love Undefined",
              "titleType": "short",
              "year": 2016,
              "principals": [
                  {
                      "id": "/name/nm6033603/",
                      "legacyNameText": "Hawkins, Jakeem",
                      "name": "Jakeem Hawkins",
                      "category": "actor",
                      "characters": [
                          "Devin Porter"
                      ],
                      "roles": [
                          {
                              "character": "Devin Porter"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4907541/",
                      "legacyNameText": "Jones-Strickland, Shema",
                      "name": "Shema Jones-Strickland",
                      "as": "Shema Jones",
                      "category": "actress",
                      "characters": [
                          "Tione Sky"
                      ],
                      "roles": [
                          {
                              "character": "Tione Sky"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2734785/",
                      "legacyNameText": "Spencer, Tekquiree",
                      "name": "Tekquiree Spencer",
                      "category": "actress",
                      "characters": [
                          "Stephanie Peters"
                      ],
                      "roles": [
                          {
                              "character": "Stephanie Peters"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt11758836/",
              "title": "Girl Undefined",
              "titleType": "short",
              "year": 2019,
              "principals": [
                  {
                      "id": "/name/nm11105734/",
                      "legacyNameText": "GreenWarren, Loretta M",
                      "name": "Loretta M GreenWarren",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Oteka"
                      ],
                      "roles": [
                          {
                              "character": "Oteka"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm11338689/",
                      "legacyNameText": "Smalls, Brandi",
                      "name": "Brandi Smalls",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Jelani"
                      ],
                      "roles": [
                          {
                              "character": "Jelani"
                          }
                      ]
                  },
                  {
                      "disambiguation": "II",
                      "id": "/name/nm11338160/",
                      "legacyNameText": "Williams, Markeya (II)",
                      "name": "Markeya Williams",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Jules"
                      ],
                      "roles": [
                          {
                              "character": "Jules"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt3838986/",
              "image": {
                  "height": 481,
                  "id": "/title/tt3838986/images/rm2652686337",
                  "url": "https://m.media-amazon.com/images/M/MV5BY2NhNzEzZDctZDkxYy00MmZhLWIyN2UtNWEzOTA0Y2VhYWY5XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg",
                  "width": 340
              },
              "runningTimeInMinutes": 88,
              "title": "Viet Costas - Citizenship: Undefined",
              "titleType": "movie",
              "year": 2014,
              "principals": [
                  {
                      "id": "/name/nm4303433/",
                      "legacyNameText": "Kontogiannis, Foivos",
                      "name": "Foivos Kontogiannis",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm6605536/",
                      "legacyNameText": "van Lap, Nguen",
                      "name": "Nguen van Lap",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt21811116/",
              "image": {
                  "height": 1600,
                  "id": "/title/tt21811116/images/rm218172929",
                  "url": "https://m.media-amazon.com/images/M/MV5BM2Y0OGEyMWQtNDIxNi00Y2Y0LWE0NjgtYjMzNmUyZmNjYTYwXkEyXkFqcGdeQXVyODI1MTQ5ODY@._V1_.jpg",
                  "width": 1131
              },
              "title": "Raagankanaa - An Undefined Sketch of Love",
              "titleType": "musicVideo",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm13363847/",
                      "legacyNameText": "Khan, Shahen",
                      "name": "Shahen Khan",
                      "category": "actress"
                  },
                  {
                      "id": "/name/nm13947838/",
                      "legacyNameText": "Indu, Sananda",
                      "name": "Sananda Indu",
                      "category": "actress"
                  },
                  {
                      "id": "/name/nm13947837/",
                      "legacyNameText": "Howladar, Sourav",
                      "name": "Sourav Howladar",
                      "category": "actor"
                  }
              ]
          },
          {
              "id": "/name/nm6808524/",
              "legacyNameText": "Undefined, Undefined",
              "name": "Undefined Undefined",
              "knownFor": [
                  {
                      "crew": [
                          {
                              "category": "writer",
                              "job": "writer"
                          }
                      ],
                      "summary": {
                          "category": "writer",
                          "displayYear": "2005"
                      },
                      "id": "/title/tt4076888/",
                      "title": "Spam Letter + Google Image Search = Video Entertainment",
                      "titleType": "short",
                      "year": 2005
                  }
              ]
          },
          {
              "id": "/title/tt10843324/",
              "image": {
                  "height": 6000,
                  "id": "/title/tt10843324/images/rm1797659905",
                  "url": "https://m.media-amazon.com/images/M/MV5BM2UxNjU2YmYtZjYzMi00MzgzLTk2MWEtMTBjNjdkNzQyMzZjXkEyXkFqcGdeQXVyODEzOTkyOTg@._V1_.jpg",
                  "width": 4050
              },
              "title": "Undefiled",
              "titleType": "movie",
              "principals": [
                  {
                      "id": "/name/nm1352774/",
                      "legacyNameText": "Rosete, Jose",
                      "name": "Jose Rosete",
                      "category": "actor",
                      "characters": [
                          "Trafficker"
                      ],
                      "roles": [
                          {
                              "character": "Trafficker"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0767445/",
                      "legacyNameText": "Savante, Stelio",
                      "name": "Stelio Savante",
                      "category": "actor",
                      "characters": [
                          "Manager Joe Baines"
                      ],
                      "roles": [
                          {
                              "character": "Manager Joe Baines"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3591377/",
                      "legacyNameText": "Lanier, Sharonne",
                      "name": "Sharonne Lanier",
                      "category": "actress",
                      "characters": [
                          "Illean Jennings"
                      ],
                      "roles": [
                          {
                              "character": "Illean Jennings"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt9185816/",
              "image": {
                  "height": 1179,
                  "id": "/title/tt9185816/images/rm2775161345",
                  "url": "https://m.media-amazon.com/images/M/MV5BYWNlMDY1MGUtYWMyZC00YmEwLWFmMjQtZjg4MDVhYTVhZDAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                  "width": 800
              },
              "runningTimeInMinutes": 106,
              "title": "Woodstock: Three Days That Defined a Generation",
              "titleType": "movie",
              "year": 2019,
              "principals": [
                  {
                      "disambiguation": "XIV",
                      "id": "/name/nm1072488/",
                      "legacyNameText": "Roberts, John (XIV)",
                      "name": "John Roberts",
                      "attr": [
                          "archiveFootage",
                          "voice"
                      ],
                      "billing": 1,
                      "category": "archive_footage",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1046603/",
                      "legacyNameText": "Rosenman, Joel",
                      "name": "Joel Rosenman",
                      "attr": [
                          "voice"
                      ],
                      "billing": 2,
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4213593/",
                      "legacyNameText": "Makower, Joel",
                      "name": "Joel Makower",
                      "attr": [
                          "voice"
                      ],
                      "billing": 3,
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt6193054/",
              "image": {
                  "height": 2700,
                  "id": "/title/tt6193054/images/rm3754680321",
                  "url": "https://m.media-amazon.com/images/M/MV5BNjViMTJlODMtZjI4Ny00Nzk2LWI1MjEtNWUwOGViNzg4YjU0XkEyXkFqcGdeQXVyNzMzODMwNQ@@._V1_.jpg",
                  "width": 1800
              },
              "title": "Not Defined",
              "titleType": "short",
              "principals": [
                  {
                      "id": "/name/nm8542699/",
                      "legacyNameText": "Saro, Van",
                      "name": "Van Saro",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "f2d39e3c-bc67-4ca8-a2cb-a85e9b58f798",
          "serviceTimeMs": 24.611185
      },
      "@type": "imdb.api.find.response",
      "query": "undefined",
      "results": [
          {
              "id": "/title/tt1436480/",
              "image": {
                  "height": 500,
                  "id": "/title/tt1436480/images/rm2421019136",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_.jpg",
                  "width": 375
              },
              "runningTimeInMinutes": 63,
              "title": "Undefined",
              "titleType": "video",
              "year": 2006,
              "principals": [
                  {
                      "disambiguation": "II",
                      "id": "/name/nm3458162/",
                      "legacyNameText": "Cooley, Ralph (II)",
                      "name": "Ralph Cooley",
                      "category": "actor",
                      "characters": [
                          "Bob Calhoon"
                      ],
                      "roles": [
                          {
                              "character": "Bob Calhoon"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3432507/",
                      "legacyNameText": "Enriquez, Phillip",
                      "name": "Phillip Enriquez",
                      "category": "actor",
                      "characters": [
                          "The Hero"
                      ],
                      "roles": [
                          {
                              "character": "The Hero",
                              "characterId": "/character/ch0492945/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2156818/",
                      "legacyNameText": "Labenz, Gregory",
                      "name": "Gregory Labenz",
                      "category": "actor",
                      "characters": [
                          "Henry Calhoon"
                      ],
                      "roles": [
                          {
                              "character": "Henry Calhoon"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt5581814/",
              "image": {
                  "height": 668,
                  "id": "/title/tt5581814/images/rm1299279616",
                  "url": "https://m.media-amazon.com/images/M/MV5BYTk1OTcwYTQtMmEyNS00OWFiLTlmOWYtZGQ1ZDczNjc3MWFkXkEyXkFqcGdeQXVyMTAwMjMyOTE@._V1_.jpg",
                  "width": 1270
              },
              "title": "Undefined",
              "titleType": "short",
              "year": 2014,
              "principals": [
                  {
                      "id": "/name/nm0159354/",
                      "legacyNameText": "Choueiri, Christine",
                      "name": "Christine Choueiri",
                      "category": "actress",
                      "characters": [
                          "Sister"
                      ],
                      "roles": [
                          {
                              "character": "Sister"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4463524/",
                      "legacyNameText": "Farhat, Julian",
                      "name": "Julian Farhat",
                      "category": "actor",
                      "characters": [
                          "The Business Man"
                      ],
                      "roles": [
                          {
                              "character": "The Business Man"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2741710/",
                      "legacyNameText": "Halawi, Wafa'a Celine",
                      "name": "Wafa'a Celine Halawi",
                      "as": "Wafa Celine Halawi",
                      "category": "actress",
                      "characters": [
                          "the Lover"
                      ],
                      "roles": [
                          {
                              "character": "the Lover"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt16757246/",
              "title": "Undefined",
              "titleType": "tvSeries"
          },
          {
              "id": "/title/tt20117552/",
              "image": {
                  "height": 1350,
                  "id": "/title/tt20117552/images/rm2400456961",
                  "url": "https://m.media-amazon.com/images/M/MV5BY2M2YzE5NzctY2NiNS00YTUxLTk4YjUtYjIzMzk3NmNmODlkXkEyXkFqcGdeQXVyMTA2Mzc5Njc0._V1_.jpg",
                  "width": 1080
              },
              "title": "Chai - a bond undefined",
              "titleType": "movie",
              "principals": [
                  {
                      "disambiguation": "IX",
                      "id": "/name/nm10252799/",
                      "legacyNameText": "Verma, Vikas (IX)",
                      "name": "Vikas Verma",
                      "billing": 4,
                      "category": "actor",
                      "characters": [
                          "Nishant"
                      ],
                      "roles": [
                          {
                              "character": "Nishant"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm10135681/",
                      "legacyNameText": "Alugh, Gaurav",
                      "name": "Gaurav Alugh",
                      "billing": 6,
                      "category": "actor",
                      "characters": [
                          "Producer"
                      ],
                      "roles": [
                          {
                              "character": "Producer"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm7786673/",
                      "legacyNameText": "Pithawalla, Sanaya",
                      "name": "Sanaya Pithawalla",
                      "billing": 7,
                      "category": "actress",
                      "characters": [
                          "Chaaru"
                      ],
                      "roles": [
                          {
                              "character": "Chaaru"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt12132584/",
              "image": {
                  "height": 960,
                  "id": "/title/tt12132584/images/rm3642735873",
                  "url": "https://m.media-amazon.com/images/M/MV5BZmEwMGE4ZWMtNzg2ZC00MDBkLTgyZjYtMzZkZTIzYTg3YjZjXkEyXkFqcGdeQXVyMzI2MDEwNA@@._V1_.jpg",
                  "width": 640
              },
              "runningTimeInMinutes": 8,
              "title": "The Road to Hell is Still Undefined",
              "titleType": "short",
              "year": 2018,
              "principals": [
                  {
                      "disambiguation": "II",
                      "id": "/name/nm8084129/",
                      "legacyNameText": "Black, David (II)",
                      "name": "David Black",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Preacher"
                      ],
                      "roles": [
                          {
                              "character": "Preacher"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm11493195/",
                      "legacyNameText": "Rideaux, Sebastian",
                      "name": "Sebastian Rideaux",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Sebastian Shmegoogle"
                      ],
                      "roles": [
                          {
                              "character": "Sebastian Shmegoogle"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm7609060/",
                      "legacyNameText": "Teh, Vixey",
                      "name": "Vixey Teh",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Victoria, the mother"
                      ],
                      "roles": [
                          {
                              "character": "Victoria, the mother"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt5190590/",
              "runningTimeInMinutes": 5,
              "title": "Artist Undefined",
              "titleType": "short",
              "year": 2015,
              "principals": [
                  {
                      "id": "/name/nm7719709/",
                      "legacyNameText": "Wornham, Daniel",
                      "name": "Daniel Wornham",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Jack Jones"
                      ],
                      "roles": [
                          {
                              "character": "Jack Jones"
                          }
                      ]
                  },
                  {
                      "disambiguation": "VIII",
                      "id": "/name/nm7736866/",
                      "legacyNameText": "Jackson, Jake (VIII)",
                      "name": "Jake Jackson",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Janitor"
                      ],
                      "roles": [
                          {
                              "character": "Janitor"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm7736867/",
                      "legacyNameText": "Redgrave, Lucie",
                      "name": "Lucie Redgrave",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Member of Public #1"
                      ],
                      "roles": [
                          {
                              "character": "Member of Public #1"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt7178924/",
              "image": {
                  "height": 2160,
                  "id": "/title/tt7178924/images/rm1820401920",
                  "url": "https://m.media-amazon.com/images/M/MV5BODMwYTE1ZGMtMDk5Zi00ZTExLTk3MjUtMDk1NTk5Njk0ZmZhXkEyXkFqcGdeQXVyNzI4NTUyNjE@._V1_.jpg",
                  "width": 3840
              },
              "runningTimeInMinutes": 26,
              "title": "Undefined: A Muslim-American Musical",
              "titleType": "short",
              "year": 2017,
              "principals": [
                  {
                      "id": "/name/nm9158606/",
                      "legacyNameText": "Burks, Jenny",
                      "name": "Jenny Burks",
                      "category": "actress",
                      "characters": [
                          "Azin"
                      ],
                      "roles": [
                          {
                              "character": "Azin"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm6003213/",
                      "legacyNameText": "Cardenas, Jared",
                      "name": "Jared Cardenas",
                      "category": "actor",
                      "characters": [
                          "Daniel"
                      ],
                      "roles": [
                          {
                              "character": "Daniel"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm9158607/",
                      "legacyNameText": "Gilgeous, Ari A.",
                      "name": "Ari A. Gilgeous",
                      "category": "actress",
                      "characters": [
                          "Aya"
                      ],
                      "roles": [
                          {
                              "character": "Aya"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt3271334/",
              "runningTimeInMinutes": 17,
              "title": "The Undefined",
              "titleType": "short",
              "year": 2013,
              "principals": [
                  {
                      "id": "/name/nm4142620/",
                      "legacyNameText": "Balthazar, Tina",
                      "name": "Tina Balthazar",
                      "category": "actress",
                      "characters": [
                          "Odessa"
                      ],
                      "roles": [
                          {
                              "character": "Odessa"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4381763/",
                      "legacyNameText": "Carli, Graci",
                      "name": "Graci Carli",
                      "category": "actress",
                      "characters": [
                          "Becky"
                      ],
                      "roles": [
                          {
                              "character": "Becky"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4483968/",
                      "legacyNameText": "Lessard, Valéry",
                      "name": "Valéry Lessard",
                      "category": "actress",
                      "characters": [
                          "Rose"
                      ],
                      "roles": [
                          {
                              "character": "Rose"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt7639764/",
              "image": {
                  "height": 640,
                  "id": "/title/tt7639764/images/rm554522880",
                  "url": "https://m.media-amazon.com/images/M/MV5BOWIwNDMzZDQtYTg1OC00ODBjLTkxZWItMzgzMzZiNjIzZGI0XkEyXkFqcGdeQXVyODIwODk5Njc@._V1_.jpg",
                  "width": 960
              },
              "title": "Beautiful UnDefined",
              "titleType": "movie",
              "year": 2017,
              "principals": [
                  {
                      "id": "/name/nm9423247/",
                      "legacyNameText": "Castelhano, Anne Cavanaugh",
                      "name": "Anne Cavanaugh Castelhano",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "disambiguation": "XI",
                      "id": "/name/nm9423245/",
                      "legacyNameText": "Clark, Grace (XI)",
                      "name": "Grace Clark",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm9423250/",
                      "legacyNameText": "Gladu, Karen",
                      "name": "Karen Gladu",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt9343638/",
              "runningTimeInMinutes": 4,
              "title": "Destiny Undefined",
              "titleType": "short",
              "year": 2009,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm10285549/",
                      "legacyNameText": "Rangaswamy, Gagan (I)",
                      "name": "Gagan Rangaswamy",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Classmate 4"
                      ],
                      "roles": [
                          {
                              "character": "Classmate 4"
                          }
                      ]
                  },
                  {
                      "disambiguation": "XI",
                      "id": "/name/nm10285550/",
                      "legacyNameText": "Li, Qian (XI)",
                      "name": "Qian Li",
                      "category": "actress",
                      "characters": [
                          "Betty"
                      ],
                      "roles": [
                          {
                              "character": "Betty"
                          }
                      ]
                  },
                  {
                      "disambiguation": "IV",
                      "id": "/name/nm10285553/",
                      "legacyNameText": "Peng, Peng (IV)",
                      "name": "Peng Peng",
                      "category": "actor",
                      "characters": [
                          "Classmate 3"
                      ],
                      "roles": [
                          {
                              "character": "Classmate 3"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt10229024/",
              "image": {
                  "height": 10800,
                  "id": "/title/tt10229024/images/rm2057820417",
                  "url": "https://m.media-amazon.com/images/M/MV5BMWZmMzY5MjctMWVmMS00OTljLTgxYjgtZDhlNjYwNWJhNzRjXkEyXkFqcGdeQXVyNjExMDY4NTE@._V1_.jpg",
                  "width": 7200
              },
              "runningTimeInMinutes": 13,
              "title": "Life Undefined",
              "titleType": "short",
              "year": 2020,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm6979517/",
                      "legacyNameText": "Anderson, Michael David (I)",
                      "name": "Michael David Anderson",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Thomas Michael Mitchell"
                      ],
                      "roles": [
                          {
                              "character": "Thomas Michael Mitchell"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1676618/",
                      "legacyNameText": "Marshall, Robert Neal",
                      "name": "Robert Neal Marshall",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Mr. Mitchell"
                      ],
                      "roles": [
                          {
                              "character": "Mr. Mitchell"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm8120923/",
                      "legacyNameText": "Arnold, Athena",
                      "name": "Athena Arnold",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Passenger 1"
                      ],
                      "roles": [
                          {
                              "character": "Passenger 1"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt13362386/",
              "image": {
                  "height": 1080,
                  "id": "/title/tt13362386/images/rm1923602433",
                  "url": "https://m.media-amazon.com/images/M/MV5BYjQ4NDJmOWYtNDI2YS00NWM0LWE0NjktODg1NjFmNTNhZTg1XkEyXkFqcGdeQXVyMTA2MjcwOTI0._V1_.jpg",
                  "width": 1920
              },
              "title": "Darro: Undefined",
              "titleType": "short",
              "year": 2020,
              "principals": [
                  {
                      "id": "/name/nm10889128/",
                      "legacyNameText": "Chronister, Tyler",
                      "name": "Tyler Chronister",
                      "category": "self",
                      "characters": [
                          "Self - Bass"
                      ],
                      "roles": [
                          {
                              "character": "Self - Bass"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0201658/",
                      "legacyNameText": "Darro (I)",
                      "name": "Darro",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm12019790/",
                      "legacyNameText": "Faddis, Meghan",
                      "name": "Meghan Faddis",
                      "category": "actress",
                      "characters": [
                          "Dancer 1"
                      ],
                      "roles": [
                          {
                              "character": "Dancer 1"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt4955578/",
              "image": {
                  "height": 720,
                  "id": "/title/tt4955578/images/rm1220041472",
                  "url": "https://m.media-amazon.com/images/M/MV5BMDNmNDUwZGEtYmMxZS00NzU5LWEyMGMtOTRhNjBkNWNjNjMwXkEyXkFqcGdeQXVyNzA5MzMzNjk@._V1_.jpg",
                  "width": 1280
              },
              "runningTimeInMinutes": 13,
              "title": "A Love Undefined",
              "titleType": "short",
              "year": 2016,
              "principals": [
                  {
                      "id": "/name/nm6033603/",
                      "legacyNameText": "Hawkins, Jakeem",
                      "name": "Jakeem Hawkins",
                      "category": "actor",
                      "characters": [
                          "Devin Porter"
                      ],
                      "roles": [
                          {
                              "character": "Devin Porter"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4907541/",
                      "legacyNameText": "Jones-Strickland, Shema",
                      "name": "Shema Jones-Strickland",
                      "as": "Shema Jones",
                      "category": "actress",
                      "characters": [
                          "Tione Sky"
                      ],
                      "roles": [
                          {
                              "character": "Tione Sky"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2734785/",
                      "legacyNameText": "Spencer, Tekquiree",
                      "name": "Tekquiree Spencer",
                      "category": "actress",
                      "characters": [
                          "Stephanie Peters"
                      ],
                      "roles": [
                          {
                              "character": "Stephanie Peters"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt11758836/",
              "title": "Girl Undefined",
              "titleType": "short",
              "year": 2019,
              "principals": [
                  {
                      "id": "/name/nm11105734/",
                      "legacyNameText": "GreenWarren, Loretta M",
                      "name": "Loretta M GreenWarren",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Oteka"
                      ],
                      "roles": [
                          {
                              "character": "Oteka"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm11338689/",
                      "legacyNameText": "Smalls, Brandi",
                      "name": "Brandi Smalls",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Jelani"
                      ],
                      "roles": [
                          {
                              "character": "Jelani"
                          }
                      ]
                  },
                  {
                      "disambiguation": "II",
                      "id": "/name/nm11338160/",
                      "legacyNameText": "Williams, Markeya (II)",
                      "name": "Markeya Williams",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Jules"
                      ],
                      "roles": [
                          {
                              "character": "Jules"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt3838986/",
              "image": {
                  "height": 481,
                  "id": "/title/tt3838986/images/rm2652686337",
                  "url": "https://m.media-amazon.com/images/M/MV5BY2NhNzEzZDctZDkxYy00MmZhLWIyN2UtNWEzOTA0Y2VhYWY5XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg",
                  "width": 340
              },
              "runningTimeInMinutes": 88,
              "title": "Viet Costas - Citizenship: Undefined",
              "titleType": "movie",
              "year": 2014,
              "principals": [
                  {
                      "id": "/name/nm4303433/",
                      "legacyNameText": "Kontogiannis, Foivos",
                      "name": "Foivos Kontogiannis",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm6605536/",
                      "legacyNameText": "van Lap, Nguen",
                      "name": "Nguen van Lap",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt21811116/",
              "image": {
                  "height": 1600,
                  "id": "/title/tt21811116/images/rm218172929",
                  "url": "https://m.media-amazon.com/images/M/MV5BM2Y0OGEyMWQtNDIxNi00Y2Y0LWE0NjgtYjMzNmUyZmNjYTYwXkEyXkFqcGdeQXVyODI1MTQ5ODY@._V1_.jpg",
                  "width": 1131
              },
              "title": "Raagankanaa - An Undefined Sketch of Love",
              "titleType": "musicVideo",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm13363847/",
                      "legacyNameText": "Khan, Shahen",
                      "name": "Shahen Khan",
                      "category": "actress"
                  },
                  {
                      "id": "/name/nm13947838/",
                      "legacyNameText": "Indu, Sananda",
                      "name": "Sananda Indu",
                      "category": "actress"
                  },
                  {
                      "id": "/name/nm13947837/",
                      "legacyNameText": "Howladar, Sourav",
                      "name": "Sourav Howladar",
                      "category": "actor"
                  }
              ]
          },
          {
              "id": "/name/nm6808524/",
              "legacyNameText": "Undefined, Undefined",
              "name": "Undefined Undefined",
              "knownFor": [
                  {
                      "crew": [
                          {
                              "category": "writer",
                              "job": "writer"
                          }
                      ],
                      "summary": {
                          "category": "writer",
                          "displayYear": "2005"
                      },
                      "id": "/title/tt4076888/",
                      "title": "Spam Letter + Google Image Search = Video Entertainment",
                      "titleType": "short",
                      "year": 2005
                  }
              ]
          },
          {
              "id": "/title/tt10843324/",
              "image": {
                  "height": 6000,
                  "id": "/title/tt10843324/images/rm1797659905",
                  "url": "https://m.media-amazon.com/images/M/MV5BM2UxNjU2YmYtZjYzMi00MzgzLTk2MWEtMTBjNjdkNzQyMzZjXkEyXkFqcGdeQXVyODEzOTkyOTg@._V1_.jpg",
                  "width": 4050
              },
              "title": "Undefiled",
              "titleType": "movie",
              "principals": [
                  {
                      "id": "/name/nm1352774/",
                      "legacyNameText": "Rosete, Jose",
                      "name": "Jose Rosete",
                      "category": "actor",
                      "characters": [
                          "Trafficker"
                      ],
                      "roles": [
                          {
                              "character": "Trafficker"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0767445/",
                      "legacyNameText": "Savante, Stelio",
                      "name": "Stelio Savante",
                      "category": "actor",
                      "characters": [
                          "Manager Joe Baines"
                      ],
                      "roles": [
                          {
                              "character": "Manager Joe Baines"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3591377/",
                      "legacyNameText": "Lanier, Sharonne",
                      "name": "Sharonne Lanier",
                      "category": "actress",
                      "characters": [
                          "Illean Jennings"
                      ],
                      "roles": [
                          {
                              "character": "Illean Jennings"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt9185816/",
              "image": {
                  "height": 1179,
                  "id": "/title/tt9185816/images/rm2775161345",
                  "url": "https://m.media-amazon.com/images/M/MV5BYWNlMDY1MGUtYWMyZC00YmEwLWFmMjQtZjg4MDVhYTVhZDAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                  "width": 800
              },
              "runningTimeInMinutes": 106,
              "title": "Woodstock: Three Days That Defined a Generation",
              "titleType": "movie",
              "year": 2019,
              "principals": [
                  {
                      "disambiguation": "XIV",
                      "id": "/name/nm1072488/",
                      "legacyNameText": "Roberts, John (XIV)",
                      "name": "John Roberts",
                      "attr": [
                          "archiveFootage",
                          "voice"
                      ],
                      "billing": 1,
                      "category": "archive_footage",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1046603/",
                      "legacyNameText": "Rosenman, Joel",
                      "name": "Joel Rosenman",
                      "attr": [
                          "voice"
                      ],
                      "billing": 2,
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4213593/",
                      "legacyNameText": "Makower, Joel",
                      "name": "Joel Makower",
                      "attr": [
                          "voice"
                      ],
                      "billing": 3,
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt6193054/",
              "image": {
                  "height": 2700,
                  "id": "/title/tt6193054/images/rm3754680321",
                  "url": "https://m.media-amazon.com/images/M/MV5BNjViMTJlODMtZjI4Ny00Nzk2LWI1MjEtNWUwOGViNzg4YjU0XkEyXkFqcGdeQXVyNzMzODMwNQ@@._V1_.jpg",
                  "width": 1800
              },
              "title": "Not Defined",
              "titleType": "short",
              "principals": [
                  {
                      "id": "/name/nm8542699/",
                      "legacyNameText": "Saro, Van",
                      "name": "Van Saro",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  },
  {
      "@meta": {
          "operation": "Search",
          "requestId": "9fbaff2f-2850-444a-b94a-1f4e0099732a",
          "serviceTimeMs": 26.070983
      },
      "@type": "imdb.api.find.response",
      "query": "undefined",
      "results": [
          {
              "id": "/title/tt1436480/",
              "image": {
                  "height": 500,
                  "id": "/title/tt1436480/images/rm2421019136",
                  "url": "https://m.media-amazon.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_.jpg",
                  "width": 375
              },
              "runningTimeInMinutes": 63,
              "title": "Undefined",
              "titleType": "video",
              "year": 2006,
              "principals": [
                  {
                      "disambiguation": "II",
                      "id": "/name/nm3458162/",
                      "legacyNameText": "Cooley, Ralph (II)",
                      "name": "Ralph Cooley",
                      "category": "actor",
                      "characters": [
                          "Bob Calhoon"
                      ],
                      "roles": [
                          {
                              "character": "Bob Calhoon"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3432507/",
                      "legacyNameText": "Enriquez, Phillip",
                      "name": "Phillip Enriquez",
                      "category": "actor",
                      "characters": [
                          "The Hero"
                      ],
                      "roles": [
                          {
                              "character": "The Hero",
                              "characterId": "/character/ch0492945/"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2156818/",
                      "legacyNameText": "Labenz, Gregory",
                      "name": "Gregory Labenz",
                      "category": "actor",
                      "characters": [
                          "Henry Calhoon"
                      ],
                      "roles": [
                          {
                              "character": "Henry Calhoon"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt5581814/",
              "image": {
                  "height": 668,
                  "id": "/title/tt5581814/images/rm1299279616",
                  "url": "https://m.media-amazon.com/images/M/MV5BYTk1OTcwYTQtMmEyNS00OWFiLTlmOWYtZGQ1ZDczNjc3MWFkXkEyXkFqcGdeQXVyMTAwMjMyOTE@._V1_.jpg",
                  "width": 1270
              },
              "title": "Undefined",
              "titleType": "short",
              "year": 2014,
              "principals": [
                  {
                      "id": "/name/nm0159354/",
                      "legacyNameText": "Choueiri, Christine",
                      "name": "Christine Choueiri",
                      "category": "actress",
                      "characters": [
                          "Sister"
                      ],
                      "roles": [
                          {
                              "character": "Sister"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4463524/",
                      "legacyNameText": "Farhat, Julian",
                      "name": "Julian Farhat",
                      "category": "actor",
                      "characters": [
                          "The Business Man"
                      ],
                      "roles": [
                          {
                              "character": "The Business Man"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2741710/",
                      "legacyNameText": "Halawi, Wafa'a Celine",
                      "name": "Wafa'a Celine Halawi",
                      "as": "Wafa Celine Halawi",
                      "category": "actress",
                      "characters": [
                          "the Lover"
                      ],
                      "roles": [
                          {
                              "character": "the Lover"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt16757246/",
              "title": "Undefined",
              "titleType": "tvSeries"
          },
          {
              "id": "/title/tt20117552/",
              "image": {
                  "height": 1350,
                  "id": "/title/tt20117552/images/rm2400456961",
                  "url": "https://m.media-amazon.com/images/M/MV5BY2M2YzE5NzctY2NiNS00YTUxLTk4YjUtYjIzMzk3NmNmODlkXkEyXkFqcGdeQXVyMTA2Mzc5Njc0._V1_.jpg",
                  "width": 1080
              },
              "title": "Chai - a bond undefined",
              "titleType": "movie",
              "principals": [
                  {
                      "disambiguation": "IX",
                      "id": "/name/nm10252799/",
                      "legacyNameText": "Verma, Vikas (IX)",
                      "name": "Vikas Verma",
                      "billing": 4,
                      "category": "actor",
                      "characters": [
                          "Nishant"
                      ],
                      "roles": [
                          {
                              "character": "Nishant"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm10135681/",
                      "legacyNameText": "Alugh, Gaurav",
                      "name": "Gaurav Alugh",
                      "billing": 6,
                      "category": "actor",
                      "characters": [
                          "Producer"
                      ],
                      "roles": [
                          {
                              "character": "Producer"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm7786673/",
                      "legacyNameText": "Pithawalla, Sanaya",
                      "name": "Sanaya Pithawalla",
                      "billing": 7,
                      "category": "actress",
                      "characters": [
                          "Chaaru"
                      ],
                      "roles": [
                          {
                              "character": "Chaaru"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt12132584/",
              "image": {
                  "height": 960,
                  "id": "/title/tt12132584/images/rm3642735873",
                  "url": "https://m.media-amazon.com/images/M/MV5BZmEwMGE4ZWMtNzg2ZC00MDBkLTgyZjYtMzZkZTIzYTg3YjZjXkEyXkFqcGdeQXVyMzI2MDEwNA@@._V1_.jpg",
                  "width": 640
              },
              "runningTimeInMinutes": 8,
              "title": "The Road to Hell is Still Undefined",
              "titleType": "short",
              "year": 2018,
              "principals": [
                  {
                      "disambiguation": "II",
                      "id": "/name/nm8084129/",
                      "legacyNameText": "Black, David (II)",
                      "name": "David Black",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Preacher"
                      ],
                      "roles": [
                          {
                              "character": "Preacher"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm11493195/",
                      "legacyNameText": "Rideaux, Sebastian",
                      "name": "Sebastian Rideaux",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Sebastian Shmegoogle"
                      ],
                      "roles": [
                          {
                              "character": "Sebastian Shmegoogle"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm7609060/",
                      "legacyNameText": "Teh, Vixey",
                      "name": "Vixey Teh",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Victoria, the mother"
                      ],
                      "roles": [
                          {
                              "character": "Victoria, the mother"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt5190590/",
              "runningTimeInMinutes": 5,
              "title": "Artist Undefined",
              "titleType": "short",
              "year": 2015,
              "principals": [
                  {
                      "id": "/name/nm7719709/",
                      "legacyNameText": "Wornham, Daniel",
                      "name": "Daniel Wornham",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Jack Jones"
                      ],
                      "roles": [
                          {
                              "character": "Jack Jones"
                          }
                      ]
                  },
                  {
                      "disambiguation": "VIII",
                      "id": "/name/nm7736866/",
                      "legacyNameText": "Jackson, Jake (VIII)",
                      "name": "Jake Jackson",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Janitor"
                      ],
                      "roles": [
                          {
                              "character": "Janitor"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm7736867/",
                      "legacyNameText": "Redgrave, Lucie",
                      "name": "Lucie Redgrave",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Member of Public #1"
                      ],
                      "roles": [
                          {
                              "character": "Member of Public #1"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt7178924/",
              "image": {
                  "height": 2160,
                  "id": "/title/tt7178924/images/rm1820401920",
                  "url": "https://m.media-amazon.com/images/M/MV5BODMwYTE1ZGMtMDk5Zi00ZTExLTk3MjUtMDk1NTk5Njk0ZmZhXkEyXkFqcGdeQXVyNzI4NTUyNjE@._V1_.jpg",
                  "width": 3840
              },
              "runningTimeInMinutes": 26,
              "title": "Undefined: A Muslim-American Musical",
              "titleType": "short",
              "year": 2017,
              "principals": [
                  {
                      "id": "/name/nm9158606/",
                      "legacyNameText": "Burks, Jenny",
                      "name": "Jenny Burks",
                      "category": "actress",
                      "characters": [
                          "Azin"
                      ],
                      "roles": [
                          {
                              "character": "Azin"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm6003213/",
                      "legacyNameText": "Cardenas, Jared",
                      "name": "Jared Cardenas",
                      "category": "actor",
                      "characters": [
                          "Daniel"
                      ],
                      "roles": [
                          {
                              "character": "Daniel"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm9158607/",
                      "legacyNameText": "Gilgeous, Ari A.",
                      "name": "Ari A. Gilgeous",
                      "category": "actress",
                      "characters": [
                          "Aya"
                      ],
                      "roles": [
                          {
                              "character": "Aya"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt3271334/",
              "runningTimeInMinutes": 17,
              "title": "The Undefined",
              "titleType": "short",
              "year": 2013,
              "principals": [
                  {
                      "id": "/name/nm4142620/",
                      "legacyNameText": "Balthazar, Tina",
                      "name": "Tina Balthazar",
                      "category": "actress",
                      "characters": [
                          "Odessa"
                      ],
                      "roles": [
                          {
                              "character": "Odessa"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4381763/",
                      "legacyNameText": "Carli, Graci",
                      "name": "Graci Carli",
                      "category": "actress",
                      "characters": [
                          "Becky"
                      ],
                      "roles": [
                          {
                              "character": "Becky"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4483968/",
                      "legacyNameText": "Lessard, Valéry",
                      "name": "Valéry Lessard",
                      "category": "actress",
                      "characters": [
                          "Rose"
                      ],
                      "roles": [
                          {
                              "character": "Rose"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt7639764/",
              "image": {
                  "height": 640,
                  "id": "/title/tt7639764/images/rm554522880",
                  "url": "https://m.media-amazon.com/images/M/MV5BOWIwNDMzZDQtYTg1OC00ODBjLTkxZWItMzgzMzZiNjIzZGI0XkEyXkFqcGdeQXVyODIwODk5Njc@._V1_.jpg",
                  "width": 960
              },
              "title": "Beautiful UnDefined",
              "titleType": "movie",
              "year": 2017,
              "principals": [
                  {
                      "id": "/name/nm9423247/",
                      "legacyNameText": "Castelhano, Anne Cavanaugh",
                      "name": "Anne Cavanaugh Castelhano",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "disambiguation": "XI",
                      "id": "/name/nm9423245/",
                      "legacyNameText": "Clark, Grace (XI)",
                      "name": "Grace Clark",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm9423250/",
                      "legacyNameText": "Gladu, Karen",
                      "name": "Karen Gladu",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt9343638/",
              "runningTimeInMinutes": 4,
              "title": "Destiny Undefined",
              "titleType": "short",
              "year": 2009,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm10285549/",
                      "legacyNameText": "Rangaswamy, Gagan (I)",
                      "name": "Gagan Rangaswamy",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Classmate 4"
                      ],
                      "roles": [
                          {
                              "character": "Classmate 4"
                          }
                      ]
                  },
                  {
                      "disambiguation": "XI",
                      "id": "/name/nm10285550/",
                      "legacyNameText": "Li, Qian (XI)",
                      "name": "Qian Li",
                      "category": "actress",
                      "characters": [
                          "Betty"
                      ],
                      "roles": [
                          {
                              "character": "Betty"
                          }
                      ]
                  },
                  {
                      "disambiguation": "IV",
                      "id": "/name/nm10285553/",
                      "legacyNameText": "Peng, Peng (IV)",
                      "name": "Peng Peng",
                      "category": "actor",
                      "characters": [
                          "Classmate 3"
                      ],
                      "roles": [
                          {
                              "character": "Classmate 3"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt10229024/",
              "image": {
                  "height": 10800,
                  "id": "/title/tt10229024/images/rm2057820417",
                  "url": "https://m.media-amazon.com/images/M/MV5BMWZmMzY5MjctMWVmMS00OTljLTgxYjgtZDhlNjYwNWJhNzRjXkEyXkFqcGdeQXVyNjExMDY4NTE@._V1_.jpg",
                  "width": 7200
              },
              "runningTimeInMinutes": 13,
              "title": "Life Undefined",
              "titleType": "short",
              "year": 2020,
              "principals": [
                  {
                      "disambiguation": "I",
                      "id": "/name/nm6979517/",
                      "legacyNameText": "Anderson, Michael David (I)",
                      "name": "Michael David Anderson",
                      "billing": 1,
                      "category": "actor",
                      "characters": [
                          "Thomas Michael Mitchell"
                      ],
                      "roles": [
                          {
                              "character": "Thomas Michael Mitchell"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1676618/",
                      "legacyNameText": "Marshall, Robert Neal",
                      "name": "Robert Neal Marshall",
                      "billing": 2,
                      "category": "actor",
                      "characters": [
                          "Mr. Mitchell"
                      ],
                      "roles": [
                          {
                              "character": "Mr. Mitchell"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm8120923/",
                      "legacyNameText": "Arnold, Athena",
                      "name": "Athena Arnold",
                      "billing": 3,
                      "category": "actress",
                      "characters": [
                          "Passenger 1"
                      ],
                      "roles": [
                          {
                              "character": "Passenger 1"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt13362386/",
              "image": {
                  "height": 1080,
                  "id": "/title/tt13362386/images/rm1923602433",
                  "url": "https://m.media-amazon.com/images/M/MV5BYjQ4NDJmOWYtNDI2YS00NWM0LWE0NjktODg1NjFmNTNhZTg1XkEyXkFqcGdeQXVyMTA2MjcwOTI0._V1_.jpg",
                  "width": 1920
              },
              "title": "Darro: Undefined",
              "titleType": "short",
              "year": 2020,
              "principals": [
                  {
                      "id": "/name/nm10889128/",
                      "legacyNameText": "Chronister, Tyler",
                      "name": "Tyler Chronister",
                      "category": "self",
                      "characters": [
                          "Self - Bass"
                      ],
                      "roles": [
                          {
                              "character": "Self - Bass"
                          }
                      ]
                  },
                  {
                      "disambiguation": "I",
                      "id": "/name/nm0201658/",
                      "legacyNameText": "Darro (I)",
                      "name": "Darro",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm12019790/",
                      "legacyNameText": "Faddis, Meghan",
                      "name": "Meghan Faddis",
                      "category": "actress",
                      "characters": [
                          "Dancer 1"
                      ],
                      "roles": [
                          {
                              "character": "Dancer 1"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt4955578/",
              "image": {
                  "height": 720,
                  "id": "/title/tt4955578/images/rm1220041472",
                  "url": "https://m.media-amazon.com/images/M/MV5BMDNmNDUwZGEtYmMxZS00NzU5LWEyMGMtOTRhNjBkNWNjNjMwXkEyXkFqcGdeQXVyNzA5MzMzNjk@._V1_.jpg",
                  "width": 1280
              },
              "runningTimeInMinutes": 13,
              "title": "A Love Undefined",
              "titleType": "short",
              "year": 2016,
              "principals": [
                  {
                      "id": "/name/nm6033603/",
                      "legacyNameText": "Hawkins, Jakeem",
                      "name": "Jakeem Hawkins",
                      "category": "actor",
                      "characters": [
                          "Devin Porter"
                      ],
                      "roles": [
                          {
                              "character": "Devin Porter"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4907541/",
                      "legacyNameText": "Jones-Strickland, Shema",
                      "name": "Shema Jones-Strickland",
                      "as": "Shema Jones",
                      "category": "actress",
                      "characters": [
                          "Tione Sky"
                      ],
                      "roles": [
                          {
                              "character": "Tione Sky"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm2734785/",
                      "legacyNameText": "Spencer, Tekquiree",
                      "name": "Tekquiree Spencer",
                      "category": "actress",
                      "characters": [
                          "Stephanie Peters"
                      ],
                      "roles": [
                          {
                              "character": "Stephanie Peters"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt11758836/",
              "title": "Girl Undefined",
              "titleType": "short",
              "year": 2019,
              "principals": [
                  {
                      "id": "/name/nm11105734/",
                      "legacyNameText": "GreenWarren, Loretta M",
                      "name": "Loretta M GreenWarren",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Oteka"
                      ],
                      "roles": [
                          {
                              "character": "Oteka"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm11338689/",
                      "legacyNameText": "Smalls, Brandi",
                      "name": "Brandi Smalls",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Jelani"
                      ],
                      "roles": [
                          {
                              "character": "Jelani"
                          }
                      ]
                  },
                  {
                      "disambiguation": "II",
                      "id": "/name/nm11338160/",
                      "legacyNameText": "Williams, Markeya (II)",
                      "name": "Markeya Williams",
                      "billing": 1,
                      "category": "actress",
                      "characters": [
                          "Jules"
                      ],
                      "roles": [
                          {
                              "character": "Jules"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt3838986/",
              "image": {
                  "height": 481,
                  "id": "/title/tt3838986/images/rm2652686337",
                  "url": "https://m.media-amazon.com/images/M/MV5BY2NhNzEzZDctZDkxYy00MmZhLWIyN2UtNWEzOTA0Y2VhYWY5XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg",
                  "width": 340
              },
              "runningTimeInMinutes": 88,
              "title": "Viet Costas - Citizenship: Undefined",
              "titleType": "movie",
              "year": 2014,
              "principals": [
                  {
                      "id": "/name/nm4303433/",
                      "legacyNameText": "Kontogiannis, Foivos",
                      "name": "Foivos Kontogiannis",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm6605536/",
                      "legacyNameText": "van Lap, Nguen",
                      "name": "Nguen van Lap",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt21811116/",
              "image": {
                  "height": 1600,
                  "id": "/title/tt21811116/images/rm218172929",
                  "url": "https://m.media-amazon.com/images/M/MV5BM2Y0OGEyMWQtNDIxNi00Y2Y0LWE0NjgtYjMzNmUyZmNjYTYwXkEyXkFqcGdeQXVyODI1MTQ5ODY@._V1_.jpg",
                  "width": 1131
              },
              "title": "Raagankanaa - An Undefined Sketch of Love",
              "titleType": "musicVideo",
              "year": 2022,
              "principals": [
                  {
                      "id": "/name/nm13363847/",
                      "legacyNameText": "Khan, Shahen",
                      "name": "Shahen Khan",
                      "category": "actress"
                  },
                  {
                      "id": "/name/nm13947838/",
                      "legacyNameText": "Indu, Sananda",
                      "name": "Sananda Indu",
                      "category": "actress"
                  },
                  {
                      "id": "/name/nm13947837/",
                      "legacyNameText": "Howladar, Sourav",
                      "name": "Sourav Howladar",
                      "category": "actor"
                  }
              ]
          },
          {
              "id": "/name/nm6808524/",
              "legacyNameText": "Undefined, Undefined",
              "name": "Undefined Undefined",
              "knownFor": [
                  {
                      "crew": [
                          {
                              "category": "writer",
                              "job": "writer"
                          }
                      ],
                      "summary": {
                          "category": "writer",
                          "displayYear": "2005"
                      },
                      "id": "/title/tt4076888/",
                      "title": "Spam Letter + Google Image Search = Video Entertainment",
                      "titleType": "short",
                      "year": 2005
                  }
              ]
          },
          {
              "id": "/title/tt10843324/",
              "image": {
                  "height": 6000,
                  "id": "/title/tt10843324/images/rm1797659905",
                  "url": "https://m.media-amazon.com/images/M/MV5BM2UxNjU2YmYtZjYzMi00MzgzLTk2MWEtMTBjNjdkNzQyMzZjXkEyXkFqcGdeQXVyODEzOTkyOTg@._V1_.jpg",
                  "width": 4050
              },
              "title": "Undefiled",
              "titleType": "movie",
              "principals": [
                  {
                      "id": "/name/nm1352774/",
                      "legacyNameText": "Rosete, Jose",
                      "name": "Jose Rosete",
                      "category": "actor",
                      "characters": [
                          "Trafficker"
                      ],
                      "roles": [
                          {
                              "character": "Trafficker"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm0767445/",
                      "legacyNameText": "Savante, Stelio",
                      "name": "Stelio Savante",
                      "category": "actor",
                      "characters": [
                          "Manager Joe Baines"
                      ],
                      "roles": [
                          {
                              "character": "Manager Joe Baines"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm3591377/",
                      "legacyNameText": "Lanier, Sharonne",
                      "name": "Sharonne Lanier",
                      "category": "actress",
                      "characters": [
                          "Illean Jennings"
                      ],
                      "roles": [
                          {
                              "character": "Illean Jennings"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt9185816/",
              "image": {
                  "height": 1179,
                  "id": "/title/tt9185816/images/rm2775161345",
                  "url": "https://m.media-amazon.com/images/M/MV5BYWNlMDY1MGUtYWMyZC00YmEwLWFmMjQtZjg4MDVhYTVhZDAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                  "width": 800
              },
              "runningTimeInMinutes": 106,
              "title": "Woodstock: Three Days That Defined a Generation",
              "titleType": "movie",
              "year": 2019,
              "principals": [
                  {
                      "disambiguation": "XIV",
                      "id": "/name/nm1072488/",
                      "legacyNameText": "Roberts, John (XIV)",
                      "name": "John Roberts",
                      "attr": [
                          "archiveFootage",
                          "voice"
                      ],
                      "billing": 1,
                      "category": "archive_footage",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm1046603/",
                      "legacyNameText": "Rosenman, Joel",
                      "name": "Joel Rosenman",
                      "attr": [
                          "voice"
                      ],
                      "billing": 2,
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  },
                  {
                      "id": "/name/nm4213593/",
                      "legacyNameText": "Makower, Joel",
                      "name": "Joel Makower",
                      "attr": [
                          "voice"
                      ],
                      "billing": 3,
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  }
              ]
          },
          {
              "id": "/title/tt6193054/",
              "image": {
                  "height": 2700,
                  "id": "/title/tt6193054/images/rm3754680321",
                  "url": "https://m.media-amazon.com/images/M/MV5BNjViMTJlODMtZjI4Ny00Nzk2LWI1MjEtNWUwOGViNzg4YjU0XkEyXkFqcGdeQXVyNzMzODMwNQ@@._V1_.jpg",
                  "width": 1800
              },
              "title": "Not Defined",
              "titleType": "short",
              "principals": [
                  {
                      "id": "/name/nm8542699/",
                      "legacyNameText": "Saro, Van",
                      "name": "Van Saro",
                      "category": "self",
                      "characters": [
                          "Self"
                      ],
                      "roles": [
                          {
                              "character": "Self"
                          }
                      ]
                  }
              ]
          }
      ],
      "types": [
          "title",
          "name"
      ]
  }
]
let xyz1=fianl_data[0];
console.log(xyz1)

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '79e65432edmsh75f75f9f858b1b9p133fdajsnde87bc38d3b3',
  //     'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  //   }
  // };
  
  // fetch('https://online-movie-database.p.rapidapi.com/title/find?q=india', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
console.log(fianl_data[0].results[0].image.url)
let xyz2=setTimeout(()=>{
data.map((a, i) => {
  try {
    // console.log(fianl_data[i].results[0].image.url)
    render_data(
      fianl_data[i].results[0].image.url,
      fianl_data[i].results[0].title
    );
  }
  catch(err) {
    
  }

  // if( fianl_data[2].image.url==true){
  //   a.image.url
  // }
  
 
});


},1000)
// // fianl_data.map((a, i) => {
//   try {
//     console.log(fianl_data[i].results[0].image.url)
//     render_data(
//       fianl_data[i].results[0].image.url
      
//     );
//   }
//   catch(err) {
    
//   }

//   // if( fianl_data[2].image.url==true){
//   //   a.image.url
//   // }
  
 
// });

