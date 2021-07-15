console.clear();
gsap.registerPlugin(Flip, ScrollToPlugin, ScrollTrigger);

//Coleção de matrizes de dados relevantes.
const movieData = {
  pictures: [
    "https://res.cloudinary.com/dugd5fjqo/image/upload/v1607347772/johnwick-3_xfbrny.jpg",
    "https://i.redd.it/7ftviduqdla21.jpg",
    "https://i.redd.it/2brgvjmaewu31.jpg",
    "https://preview.redd.it/s9biogtbp9x31.jpg?auto=webp&s=d5c81f12d940c18ae578709fabff1163474697cc",
    "https://i.redd.it/i49dvm44py121.jpg",
    "https://i.redd.it/dqcvbm8rlfi31.png"
  ],
  gradeArr: ["7.4", "7.5", "8.4", "8.5", "6.9", "6.6"],
  titles: [
    "John Wick Capítulo 3 - Parabellum",
    "Homem-Aranha: Longe de casa",
    "Vingadores Ultimato",
    "Joker",
    "Capitã Marvel",
    "Star Wars: Episódio IX - A Ascensão Skywalker"
  ],
  tagArr: [
    "Ação, crime, suspense",
    "Ação, aventura, ficção científica",
    "Ação, aventura, drama",
    "Crime, Drama, Thriller",
    "Ação, aventura, ficção científica",
    "Ação, aventura, fantasia"
  ],
  secInfos: [
    "USA, 2019 / 2h 10min / R",
    "USA, 2019 / 2h 9min / PG-13",
    "USA, 2019 / 3h 1min / PG-13",
    "USA, 2019 / 2h 2min / R",
    "USA, 2019 / 2h 3min / PG-13",
    "USA, 2019 / 2h 21min / PG-13"
  ],
  synopses: [
    "Neste terceiro episódio da franquia de ação movida a adrenalina, o habilidoso assassino John Wick (Keanu Reeves) retorna com um preço de US $ 14 milhões em sua cabeça e um exército de assassinos caçadores de recompensas em seu encalço. Depois de matar um membro da sombria guilda de assassinos internacionais, a Mesa Principal, John Wick é excomungado, mas os assassinos e assassinos mais implacáveis ​​do mundo aguardam cada vez que ele o faça.",
    "Nosso simpático super-herói da vizinhança decide se juntar a seus melhores amigos Ned, MJ e o resto da turma nas férias pela Europa. No entanto, o plano de Peter de deixar o super heroísmo para trás por algumas semanas é rapidamente descartado quando ele relutantemente concorda em ajudar Nick Fury a descobrir o mistério de vários ataques de criaturas elementais, criando estragos por todo o continente.",
    "Após os eventos devastadores de Avengers: Infinity War (2018), o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda dos aliados restantes, os Vingadores devem se reunir mais uma vez para desfazer as ações de Thanos e desfazer o caos para o universo, não importa quais consequências possam estar reservadas, e não importa quem eles enfrentem ...",
    "Arthur Fleck trabalha como palhaço e é um aspirante a comediante de stand-up. Ele tem problemas de saúde mental, parte dos quais envolve risos incontroláveis. Os tempos estão difíceis e, devido a seus problemas e ocupação, Arthur passa por momentos ainda piores do que a maioria. Com o tempo, essas questões pesam sobre ele, moldando suas ações, fazendo-o finalmente assumir a persona que ele é mais conhecido como ... Joker.",
    "Depois de colidir com uma aeronave experimental, a piloto da Força Aérea Carol Danvers é descoberta pelos Kree e treinada como membro da Força Estelar de elite sob o comando de seu mentor Yon-Rogg. Seis anos depois, após escapar para a Terra enquanto estava sob o ataque dos Skrulls, Danvers começa a descobrir que há mais em seu passado. Com a ajuda de S.H.I.E.L.D. agente Nick Fury, eles decidiram desvendar a verdade.",
    "Enquanto a Primeira Ordem continua a devastar a galáxia, Rey finaliza seu treinamento como Jedi. Mas o perigo surge repentinamente das cinzas enquanto o malvado Imperador Palpatine retorna misteriosamente dos mortos. Enquanto trabalhava com Finn e Poe Dameron para cumprir uma nova missão, Rey não só enfrentará Kylo Ren mais uma vez, mas também finalmente descobrirá a verdade sobre seus pais, bem como um segredo mortal que pode determinar seu futuro e o destino dos derradeiro confronto final que está por vir."
  ],
  castArr: [
    [
      {
        name: "Keanu Reeves",
        role: "John Wick",
        src:
          "https://m.media-amazon.com/images/M/MV5BNjUxNDcwMTg4Ml5BMl5BanBnXkFtZTcwMjU4NDYyOA@@._V1_UY317_CR15,0,214,317_AL_.jpg"
      },
      {
        name: "Halle Berry",
        role: "Sofia",
        src:
          "https://m.media-amazon.com/images/M/MV5BMjIxNzc5MDAzOV5BMl5BanBnXkFtZTcwMDUxMjMxMw@@._V1_UY1200_CR130,0,630,1200_AL_.jpg"
      },
      {
        name: "Ian McShane",
        role: "Winston",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWNrxVV2dune3FuGJGKoa74vrbeymvCApPQ&usqp=CAU"
      },
      {
        name: "Laurence Fishburne",
        role: "Bowery King",
        src:
          "https://m.media-amazon.com/images/M/MV5BMTc0NjczNDc1MV5BMl5BanBnXkFtZTYwMDU0Mjg1._V1_UY1200_CR85,0,630,1200_AL_.jpg"
      },
      {
        name: "Mark Dacascos",
        role: "Zero",
        src:
          "https://m.media-amazon.com/images/M/MV5BN2YwN2Q5YWQtN2ZhMS00ZWZjLWE3YmMtNjNhYmMzZTFmYjE4XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY1200_CR77,0,630,1200_AL_.jpg"
      }
    ],
    [
      {
        name: "Tom Holland",
        role: "Peter Parker / Spiderman",
        src:
          "https://m.media-amazon.com/images/M/MV5BNTAzMzA3NjQwOF5BMl5BanBnXkFtZTgwMDUzODQ5MTI@._V1_UY317_CR23,0,214,317_AL_.jpg"
      },
      {
        name: "Samuel L. Jackson",
        role: "Nick Fury",
        src:
          "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY1200_CR84,0,630,1200_AL_.jpg"
      },
      {
        name: "Jake Gyllenhaal",
        role: "Quentin Beck / Mysterio",
        src:
          "https://m.media-amazon.com/images/M/MV5BNjA0MTU2NDY3MF5BMl5BanBnXkFtZTgwNDU4ODkzMzE@._V1_.jpg"
      },
      {
        name: "Marisa Tomei",
        role: "May Parker",
        src:
          "https://m.media-amazon.com/images/M/MV5BMTUwMjA3OTc3N15BMl5BanBnXkFtZTcwNTA1MzY1Mw@@._V1_UY317_CR12,0,214,317_AL_.jpg"
      },
      {
        name: "Jon Favreau",
        role: "Happy Hogan",
        src:
          "https://m.media-amazon.com/images/M/MV5BNjcwNzg4MjktNDNlMC00M2U1LWJmMjgtZTVkMmI4MDI2MTVmXkEyXkFqcGdeQXVyMjI4MDI0NTM@._V1_UY1200_CR135,0,630,1200_AL_.jpg"
      }
    ],
    [
      {
        name: "Robert Downey Jr.",
        role: "Tony Stark / Iron Man",
        src:
          "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UY1200_CR83,0,630,1200_AL_.jpg"
      },
      {
        name: "Chris Evans",
        role: "Steve Rogers / Captain America",
        src:
          "https://m.media-amazon.com/images/M/MV5BMTU2NTg1OTQzMF5BMl5BanBnXkFtZTcwNjIyMjkyMg@@._V1_UY1200_CR112,0,630,1200_AL_.jpg"
      },
      {
        name: "Mark Ruffalo",
        role: "Bruce Banner / Hulk",
        src:
          "https://m.media-amazon.com/images/M/MV5BNWIzZTI1ODUtZTUzMC00NTdiLWFlOTYtZTg4MGZkYmU4YzNlXkEyXkFqcGdeQXVyNTExOTk5Nzg@._V1_UY1200_CR85,0,630,1200_AL_.jpg"
      },
      {
        name: "Chris Hemsworth",
        role: "Thor",
        src:
          "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_UY1200_CR85,0,630,1200_AL_.jpg"
      },
      {
        name: "Scarlett Johansson",
        role: "Natasha Romanoff / Black Widow",
        src:
          "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg"
      }
    ],
    [
      {
        name: "Joaquin Phoenix",
        role: "Arthur Fleck",
        src:
          "https://m.media-amazon.com/images/M/MV5BZGMyY2Q4NTEtMWVkZS00NzcwLTkzNmQtYzBlMWZhZGNhMDhkXkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_UY1200_CR86,0,630,1200_AL_.jpg"
      },
      {
        name: "Robert De Niro",
        role: "Murray Franklin",
        src:
          "https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY1200_CR139,0,630,1200_AL_.jpg"
      },
      {
        name: "Zazie Beetz",
        role: "Sophie Dumond",
        src:
          "https://m.media-amazon.com/images/M/MV5BMGEwYjU2NDgtZTQwZi00MmI3LWIwNjQtYmRmM2M3MThkMzM4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
      },
      {
        name: "Frances Conroy",
        role: "Penny Fleck",
        src:
          "https://m.media-amazon.com/images/M/MV5BMTM4OTIzMTg5MF5BMl5BanBnXkFtZTYwNjA5OTIz._V1_UY1200_CR93,0,630,1200_AL_.jpg"
      },
      {
        name: "Brett Cullen",
        role: "Thomas Wayne",
        src:
          "https://m.media-amazon.com/images/M/MV5BMTI0NzI0MzU1M15BMl5BanBnXkFtZTcwMjM0Mjg3MQ@@._V1_.jpg"
      }
    ],
    [
      {
        name: "Brie Larsson",
        role: "Carol Danvers / Captain Marvel",
        src:
          "https://m.media-amazon.com/images/M/MV5BMjExODkxODU3NF5BMl5BanBnXkFtZTgwNTM0MTk3NjE@._V1_.jpg"
      },
      {
        name: "Samuel L. Jackson",
        role: "Nick Fury",
        src:
          "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY1200_CR84,0,630,1200_AL_.jpg"
      },
      {
        name: "Ben Mendelsohn",
        role: "Talos / Keller",
        src:
          "https://m.media-amazon.com/images/M/MV5BMjA3NzcyMDcyMF5BMl5BanBnXkFtZTcwNjQwMTczMQ@@._V1_UY1200_CR107,0,630,1200_AL_.jpg"
      },
      {
        name: "Jude Law",
        role: "Yon-Rogg",
        src:
          "https://m.media-amazon.com/images/M/MV5BMTMwOTg5NTQ3NV5BMl5BanBnXkFtZTcwNzM3MDAzNQ@@._V1_.jpg"
      },
      {
        name: "Annette Bening",
        role: "Supreme Intelligence / Dr. Wendy Lawson",
        src:
          "https://m.media-amazon.com/images/M/MV5BMTc4ODQ1ODM5Ml5BMl5BanBnXkFtZTcwOTU2NDk3OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg"
      }
    ],
    [
      {
        name: "Carrie Fisher",
        role: "Leia Organa (archive footage)",
        src:
          "https://m.media-amazon.com/images/M/MV5BMjRkZDU2NWUtZDZmZC00YzI0LTgxZGItYWUxZTZlMjVmOWMwXkEyXkFqcGdeQWpnYW1i._V1_SY351_SX624_AL_.jpg"
      },
      {
        name: "Mark Hamill",
        role: "Luke Skywalker / Boolio (voice)",
        src:
          "https://m.media-amazon.com/images/M/MV5BOGY2MjI5MDQtOThmMC00ZGIwLWFmYjgtYWU4MzcxOGEwMGVkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY1200_CR753,0,630,1200_AL_.jpg"
      },
      {
        name: "Adam Driver",
        role: "Kylo Ren",
        src:
          "https://m.media-amazon.com/images/M/MV5BOWViYjUzOWMtMzRkZi00MjNkLTk4M2ItMTVkMDg5MzE2ZDYyXkEyXkFqcGdeQXVyODQwNjM3NDA@._V1_UY1200_CR256,0,630,1200_AL_.jpg"
      },
      {
        name: "Daisy Ridley",
        role: "Rey",
        src:
          "https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_.jpg"
      },
      {
        name: "John Boyega",
        role: "Finn",
        src:
          "https://m.media-amazon.com/images/M/MV5BMDg4NWZjNmEtZWVmNC00MzdhLTlhOTEtZmViYjdmMzhjMTAyXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY1200_CR165,0,630,1200_AL_.jpg"
      }
    ]
  ],
  trailPics: [
    [
      "https://media.newyorker.com/photos/5cdf1ad7339acf8247bfc768/4:3/w_1888,h_1416,c_limit/Richard-JohnWick.jpg",
      "https://www.wienerzeitung.at/_em_daten/_cache/image/1xRDqOdlZgE4T2ymGcPwVCCsKl0e8SfsO4Lztc7R02FG89eZbOT5KHPjkcf-Pg7D3US2Vbu_wWGD_Mrgiw86pPbz6A8QXcHHor/191025-1309-jw3-d61-19326-r-a4.jpg"
    ],
    [
      "https://static01.nyt.com/images/2019/07/08/arts/08spider-spoilers-1/merlin_157155882_1b06740b-940a-4a63-99e1-31122006d72a-superJumbo.jpg",
      "https://img.cinemablend.com/filter:scale/quill/d/e/e/3/1/6/dee316df8703d16fee2fcec746b4d625a21c49a3.jpg"
    ],
    [
      "https://www.bosshunting.com.au/wp-content/uploads/2020/09/CHT.jpg",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F06%2Favengersendgame5ce30b0b72b43-2000.jpg"
    ],
    [
      "https://cdn.vox-cdn.com/thumbor/L_zeHuClx96XeJYHGpRi02cJpOE=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19282421/JOKER_MOVIE_REVIEW.jpg",
      "https://www.clydefitchreport.com/wp-content/uploads/2019/10/IMG_5530-e1573333927499.jpg"
    ],
    [
      "https://m.media-amazon.com/images/M/MV5BODlhOGM4MGMtYjBjMi00MWQ2LTk4OWUtYzQ2YzE0NWZkODlkXkEyXkFqcGdeQW1yb3NzZXI@._V1_CR251,0,1419,798_AL_UY268_CR84,0,477,268_AL_.jpg",
      "https://www.indiewire.com/wp-content/uploads/2018/12/CaptainMarvel_06.png"
    ],
    [
      "https://www.denofgeek.com/wp-content/uploads/2020/01/star-wars-the-rise-of-skywalker-rey-kylo-ren.png",
      "https://www.indiewire.com/wp-content/uploads/2019/12/rise-skywalker-ending.jpg"
    ]
  ],
  trailArr: [
    [
      "https://smoothdev35.github.io/trailer-vids/JW3-1.mp4",
      "https://smoothdev35.github.io/trailer-vids/JW3-2.mp4"
    ],
    [
      "https://smoothdev35.github.io/trailer-vids/SPFFH-1.mp4",
      "https://smoothdev35.github.io/trailer-vids/SPFFH-2.mp4"
    ],
    [
      "https://smoothdev35.github.io/trailer-vids/AVGEG-1.mp4",
      "https://smoothdev35.github.io/trailer-vids/AVGEG-2.mp4"
    ],
    [
      "https://smoothdev35.github.io/trailer-vids/JK-1.mp4",
      "https://smoothdev35.github.io/trailer-vids/JK-2.mp4"
    ],
    [
      "https://smoothdev35.github.io/trailer-vids/CPM-1.mp4",
      "https://smoothdev35.github.io/trailer-vids/CPM-2.mp4"
    ],
    [
      "https://smoothdev35.github.io/trailer-vids/SWTROS-1.mp4",
      "https://smoothdev35.github.io/trailer-vids/SWTROS-2.mp4"
    ]
  ]
};

//Objeto de relógio para controlar a exibição do tempo. //
const dynamicClock = {
  wrap: document.querySelector("#clock"),
  parseTime: function () {
    const baseDate = new Date();
    const baseHours = baseDate.getHours();
    const baseMins = baseDate.getMinutes();
    let cleanHours, cleanMins;
    let hourArr = baseHours.toString().split("");
    let minArr = baseMins.toString().split("");
    hourArr.length < 2
      ? (hourArr.unshift("0"), (cleanHours = hourArr.join("")))
      : (cleanHours = baseHours);
    minArr.length < 2
      ? (minArr.unshift("0"), (cleanMins = minArr.join("")))
      : (cleanMins = baseMins);
    this.wrap.innerText = `${cleanHours}:${cleanMins}`;
  },
  init: function () {
    this.parseTime();
    //Parse time every second to update.
    setInterval(() => {
      this.parseTime();
    }, 1000);
  }
};

//Objeto de navegação para lidar com a navegação "superior" do rodapé.//
const footerNav = {
  block: document.querySelector("footer"),
  wrap: document.querySelector("footer nav ul"),
  links: Array.from(document.querySelectorAll("footer nav ul li a")),
  activateLink: function (pos) {
    this.links.forEach((item, i) => {
      i !== pos
        ? item.classList.remove("active")
        : item.classList.add("active");
    });
  },
  init: function () {
    // O item ativo padrão é o primeiro.//
    this.activateLink(0);
    document.addEventListener("click", (e) => {
      if (e.target.matches("footer nav ul li a")) {
        let index = this.links.indexOf(e.target);
        switch (index) {
          case 0:
            this.activateLink(0);
            break;
          case 1:
            this.activateLink(1);
            break;
          case 2:
            this.activateLink(2);
            break;
          case 3:
            this.activateLink(3);
            break;
        }
      }
    });
  }
};

//Objeto controlador principal da IU para lidar com rolagem dinâmica, animação para visualização detalhada e injeção de dados.
const dynamicScroll = {
  cssBody: document.body.style,
  fixedLayer: document.querySelector("#fixed-layer"),
  dataList: document.querySelector("#movies"),
  searchField: document.querySelector("#searchbar > input"),
  searchButton: document.querySelector("#search-icon"),
  scroller: document.querySelector("#card-gallery"),
  bigInfo: document.querySelector(".big-movie-info"),
  movieCopy: document.querySelector("#movie-copy p"),
  backArrow: document.querySelector("#fixed-layer > .back-arrow"),
  cards: Array.from(document.querySelectorAll(".movie-card")),
  posters: Array.from(document.querySelectorAll(".movie-card .poster")),
  links: Array.from(document.querySelectorAll(".movie-card a")),
  infos: Array.from(document.querySelectorAll(".movie-info")),
  midNavLinks: Array.from(document.querySelectorAll("#mid-nav a")),
  castItems: Array.from(document.querySelectorAll(".reel.cast .item")),
  trailerItems: Array.from(document.querySelectorAll(".reel.trailer .item")),
  activeIndex: null,
  trailerIndex: null,
  labels: ["start", "two", "three", "four", "five", "end"],
  //Crie e pause a linha do tempo para a animação dos cartões de filme.//
  scrollTl: gsap
    .timeline({
      defaults: {
        ease: "none"
      }
    })
    .pause(),
  //Função abreviada para rolar para um cartão de filme específico. //
  scrollFunc: function (pos, off, dur) {
    gsap.to("#card-gallery", {
      scrollTo: {
        x: pos,
        offsetX: off
      },
      ease: "none",
      duration: dur
    });
  },
  //Função abreviada para esmaecer elementos irrelevantes durante as transições de esmaecimento. Usa propriedades customizadas css. //
  fadeAll: function (prop, val) {
    this.cssBody.setProperty(prop, val);
  },
  //Função abreviada para rolar para o filme selecionado com a entrada de pesquisa. //
  inputNav: function (tar) {
    let target = tar;
    // Índice do cartão de filme ativo. //
    let activeIndex = this.cards.indexOf(
      document.querySelector(".movie-card.active")
    );
    //Índice do cartão de filme selecionado //
    let movieIndex = movieData.titles.indexOf(target);
    let diff;
    if (movieIndex > activeIndex) {
      //Verifique a diferença de índice na direção para frente (rolagem para a direita).//
      diff = movieIndex - activeIndex;
      //Adapte a velocidade de rolagem e deslocamento para navegar entre um ou vários cartões de filme.//
      switch (diff) {
        case 1:
          movieIndex === this.cards.length - 1
            ? this.scrollFunc(this.cards[movieIndex], 0, 0.16)
            : this.scrollFunc(this.cards[movieIndex], 54, 0.2);
          break;
        case 2:
          movieIndex === this.cards.length - 1
            ? this.scrollFunc(this.cards[movieIndex], 0, 0.36)
            : this.scrollFunc(this.cards[movieIndex], 72, 0.4);
          break;
        case 3:
          movieIndex === this.cards.length - 1
            ? this.scrollFunc(this.cards[movieIndex], 0, 0.56)
            : this.scrollFunc(this.cards[movieIndex], 90, 0.6);
          break;
        case 4:
          movieIndex === this.cards.length - 1
            ? this.scrollFunc(this.cards[movieIndex], 0, 0.76)
            : this.scrollFunc(this.cards[movieIndex], 108, 0.8);
          break;
        case 5:
          movieIndex === this.cards.length - 1
            ? this.scrollFunc(this.cards[movieIndex], 0, 0.96)
            : this.scrollFunc(this.cards[movieIndex], 126, 1);
          break;
      }
    } else if (movieIndex < activeIndex) {
      // Verifique a diferença de índice na direção para trás (rolagem para a esquerda).//
      diff = activeIndex - movieIndex;
      // Adapte a velocidade de rolagem e deslocamento para navegar entre um ou vários cartões de filme.
      switch (diff) {
        case 1:
          activeIndex === this.cards.length - 1
            ? this.scrollFunc(this.cards[movieIndex], 18, 0.16)
            : this.scrollFunc(this.cards[movieIndex], 16, 0.2);
          break;
        case 2:
          activeIndex === this.cards.length - 1
            ? this.scrollFunc(this.cards[movieIndex], 0, 0.36)
            : this.scrollFunc(this.cards[movieIndex], -2, 0.4);
          break;
        case 3:
          activeIndex === this.cards.length - 1
            ? this.scrollFunc(this.cards[movieIndex], -18, 0.56)
            : this.scrollFunc(this.cards[movieIndex], -20, 0.6);
          break;
        case 4:
          activeIndex === this.cards.length - 1
            ? this.scrollFunc(this.cards[movieIndex], -36, 0.76)
            : this.scrollFunc(this.cards[movieIndex], -38, 0.8);
          break;
        case 5:
          activeIndex === this.cards.length - 1
            ? this.scrollFunc(this.cards[movieIndex], -54, 0.96)
            : this.scrollFunc(this.cards[movieIndex], -56, 1);
          break;
      }
    }
  },
  // Adicione ouvintes de eventos não clicáveis (e estilos) específicos para a pesquisa de entrada (foco, tecla enter) para chamar a função abreviada de entrada para rolar até o filme selecionado.//
  inputFunc: function () {
    this.searchField.addEventListener("focus", () => {
      gsap.set("#searchbar", { boxShadow: "0 0 0 1px var(--brand-c)" });
    });
    this.searchField.addEventListener("blur", () => {
      gsap.set("#searchbar", { boxShadow: "" });
    });

    this.searchField.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        let target = this.searchField.value;
        this.inputNav(target);
      }
    });
  },
  // Função abreviada para preencher a linha do tempo de rolagem. //
  passCardTween: function (el, el2, el3, el4, label, duration) {
    this.scrollTl
      .addLabel(label)
      .to(el, {
        scale: 0.85,
        duration: duration
      })
      .to(
        el2,
        {
          scale: 1,
          duration: duration
        },
        `>-${duration}`
      )
      .to(el3, { opacity: 0, duration: duration }, `>-${duration}`)
      .to(el4, { opacity: 1, duration: duration }, `>-${duration}`);
  },
  // Função abreviada para navegar para uma guia / seção na navegação intermediária (horários de exibição / detalhes).//
  dualTween: function (tl, off, off2, off3) {
    tl.to("#nav-layer", { x: off })
      .to(
        "#text-bg",
        {
          attr: {
            x: off2
          }
        },
        ">-.3"
      )
      .to(".dual-screen", { x: off3 }, ">-.3");
  },
  // Função para navegar até a guia escolhida na navegação intermediária.//
  toggleMidNav: function (pos) {
    let tl = gsap.timeline({
      defaults: {
        ease: "Power3.in",
        duration: 0.3
      }
    });

    pos === 0
      ? this.dualTween(tl, "0%", "0%", "-100%")
      : this.dualTween(tl, "105%", "50%", "0%");
  },
  loadTrailers: function (el, pos) {
    let trailer = `<video src=${
      movieData.trailArr[this.activeIndex][pos]
    } controls></video>`;
    el.insertAdjacentHTML("beforeend", trailer);
  },
  // Função para preencher os elementos visíveis após selecionar um cartão de filme ativo. Usa o índice do cartão ativo para selecionar os dados relevantes a serem exibidos.//
  fetchInfo: function (pos) {
    const setInnerText = (el, arr, pos) => {
      el.innerText = arr[pos];
    };
    const resizeShot = (el, size, pos) => {
      gsap.set(el, {
        backgroundSize: size,
        backgroundPosition: pos
      });
    };
    setInnerText(this.bigInfo.querySelector(".grade"), movieData.gradeArr, pos);
    setInnerText(
      this.bigInfo.querySelector(".movie-title"),
      movieData.titles,
      pos
    );
    setInnerText(this.bigInfo.querySelector(".tags"), movieData.tagArr, pos);
    setInnerText(
      this.bigInfo.querySelector(".info-last"),
      movieData.secInfos,
      pos
    );
    setInnerText(this.movieCopy, movieData.synopses, pos);

    this.castItems.forEach((item, i) => {
      gsap.set(item.querySelector(".shot"), {
        backgroundImage: `url(${movieData.castArr[this.activeIndex][i].src})`
      });

      item.querySelector("h5").innerText =
        movieData.castArr[this.activeIndex][i].name;
      item.querySelector("p").innerText =
        movieData.castArr[this.activeIndex][i].role;

      //Resize and position actor thumbnails in the cast section.
      switch (this.activeIndex) {
        case 0:
          i === 2
            ? resizeShot(item.querySelector(".shot"), "125%", "75% 0")
            : i === 3
            ? resizeShot(item.querySelector(".shot"), "cover", "50% 20%")
            : i === 4
            ? resizeShot(item.querySelector(".shot"), "195%", "40% 5%")
            : null;
          break;
        case 1:
          i === 0
            ? resizeShot(item.querySelector(".shot"), "120%", "50% 22.5%")
            : i === 1
            ? resizeShot(item.querySelector(".shot"), "cover", "50% 25%")
            : i === 2
            ? resizeShot(item.querySelector(".shot"), "120%", "60% 15%")
            : i === 3
            ? resizeShot(item.querySelector(".shot"), "cover", "50% 20%")
            : i === 4
            ? resizeShot(item.querySelector(".shot"), "cover", "50% 15%")
            : null;
          break;
        case 2:
          i === 0
            ? resizeShot(item.querySelector(".shot"), "125%", "40% 7.5%")
            : i === 1
            ? resizeShot(item.querySelector(".shot"), "cover", "50% 25%")
            : i === 2
            ? resizeShot(item.querySelector(".shot"), "cover", "60% 40%")
            : i === 3
            ? resizeShot(item.querySelector(".shot"), "150%", "64% 10%")
            : i === 4
            ? resizeShot(item.querySelector(".shot"), "110%", "40% 15%")
            : null;
          break;
        case 3:
          i === 0
            ? resizeShot(item.querySelector(".shot"), "cover", "50% 30%")
            : i === 1
            ? resizeShot(item.querySelector(".shot"), "cover", "50% 25%")
            : i === 2
            ? resizeShot(item.querySelector(".shot"), "375%", "48% 12.5%")
            : i === 3
            ? resizeShot(item.querySelector(".shot"), "cover", "50% 10%")
            : i === 4
            ? resizeShot(item.querySelector(".shot"), "110%", "100% 7.5%")
            : null;
          break;
        case 4:
          i === 0
            ? resizeShot(item.querySelector(".shot"), "150%", "60% 17.5%")
            : i === 1
            ? resizeShot(item.querySelector(".shot"), "cover", "50% 25%")
            : i === 2
            ? resizeShot(item.querySelector(".shot"), "cover", "50% 5%")
            : i === 3
            ? resizeShot(item.querySelector(".shot"), "120%", "90% 17.5%")
            : i === 4
            ? resizeShot(item.querySelector(".shot"), "110%", "0 7.5%")
            : null;
          break;
        case 5:
          i === 0
            ? resizeShot(item.querySelector(".shot"), "350%", "7.5%  0")
            : i === 1
            ? resizeShot(item.querySelector(".shot"), "cover", "50% 10%")
            : i === 2
            ? resizeShot(item.querySelector(".shot"), "cover", "50% 5%")
            : i === 3
            ? resizeShot(item.querySelector(".shot"), "150%", "50% 25%")
            : i === 4
            ? resizeShot(item.querySelector(".shot"), "cover", "50% 20%")
            : null;
          break;
      }
    });

    this.trailerItems.forEach((item, i) => {
      gsap.set(item.children[0], {
        backgroundImage: `url(${movieData.trailPics[this.activeIndex][i]})`
      });
    });
  },
  switchOp: function (el, val) {
    gsap.set(el, { opacity: val });
  },
  fadeEl: function (el, val, dur) {
    gsap.to(el, { opacity: val, duration: dur, ease: "none" });
  },
  //Function to execute shared element transition to the vertical section with movie details.
  flipCard: function (el, el2, pos) {
    //Parse data with the active index and display relevant information inside the hidden elements.
    this.fetchInfo(pos);

    //Set the hidden big movie picture right on top of the active movie card.
    Flip.fit(".big-poster", el, {
      absolute: true,
      props: "borderRadius,boxShadow"
    });
    //Set the hidden primary info right on top of the equivalent element from the active card.
    Flip.fit(".big-movie-info", el2, { absolute: true });

    //Hide original elements and show entering elements to see the transition to the next view (big).
    this.cards.forEach((card, i) => {
      i === pos ? this.switchOp(card, 0) : this.fadeEl(card, 0, 0.2);
    });
    this.fadeAll("--layer-zero-opacity", "0");
    this.fadeAll("--layer-one-opacity", "1");

    //Get states from both hidden elements.
    let bigState = Flip.getState(".big-poster", {
      props: "borderRadius,boxShadow",
      absolute: true
    });
    let infoState = Flip.getState(".big-movie-info", {
      absolute: true
    });
    //Set the hidden elements back to their original state(bigger).
    gsap.set(".big-poster", { clearProps: true });
    gsap.set(".big-movie-info", { clearProps: true });
    //Show previously hidden big picture and set relevant background image with the active index.
    gsap.set(".big-poster", {
      backgroundImage: `url(${movieData.pictures[pos]})`
    });
    //Animate now visible elements from 'small' state to 'big' state.
    Flip.from(bigState, {
      duration: 0.4,
      ease: "power3.in",
      absolute: true,
      onComplete: () => {
        //Enable vertical scrolling.
        //gsap.set("#screen", { overflowY: "scroll" });
        //Enable pointer.
        gsap.set("#screen > #first-layer", { pointerEvents: "all" });
        //Show close button to go back to the gallery view.
        this.fadeEl(".close-card svg", 1, 0.1);
      }
    });

    Flip.from(infoState, {
      duration: 0.4,
      absolute: true,
      ease: "power3.in"
    });
    //Reveal last line of primary info.
    setTimeout(() => {
      this.fadeEl(".info-last", 1, 0.1);
    }, 0.2);
  },
  flipBack: function () {
    //Reverse order of operations to apply the FLIP technique to go back to the first view.
    this.fadeEl(".close-card svg", 0, 0.1);

    let picState = Flip.getState(".big-poster", {
      absolute: true,
      props: "borderRadius,boxShadow"
    });

    let subState = Flip.getState(".big-movie-info", { absolute: true });

    setTimeout(() => {
      Flip.fit(".big-poster", this.posters[this.activeIndex], {
        absolute: true,
        props: "borderRadius,boxShadow"
      });
      Flip.fit(".big-movie-info", this.infos[this.activeIndex], {
        absolute: true
      });

      Flip.from(picState, {
        duration: 0.4,
        ease: "power3.in",
        absolute: true,
        onComplete: () => {
          //Hide previous (big) elements (poster,info and bottom content) and show original elements.
          this.cards.forEach((card, i) => {
            i === this.activeIndex
              ? this.switchOp(card, 1)
              : this.fadeEl(card, 1, 0.2);
          });
          this.switchOp(".big-poster", 0);
          this.switchOp(".big-movie-info", 0);
          this.fadeAll("--layer-zero-opacity", "1");
          this.fadeAll("--layer-one-opacity", "0");
          //Disable pointer events.
          gsap.set("#screen > #first-layer", { pointerEvents: "none" });
          //Reset scroll position of cast and trailer galleries.
          gsap.to(".dual-screen.left .reel", 0, {
            scrollTo: {
              x: 0
            }
          });
        }
      });
      Flip.from(subState, {
        duration: 0.4,
        ease: "power3.in"
      });
      //Hide last line of primary info.
      setTimeout(() => {
        this.fadeEl(".info-last", 0, 0.1);
      }, 200);
    }, 100);
  },
  //Expand trailer thumbnail to full-screen loaded video on click
  expandTrailer: function (el, pos) {
    let thumbState = Flip.getState(el, {
      absolute: true,
      props: "backgroundImage, borderRadius"
    });

    el.classList.toggle("open");

    setTimeout(() => {
      document.querySelector("#fixed-layer").appendChild(el);
      this.fadeEl(".big-poster", 0, 0.2);
      this.fadeEl(".big-movie-info", 0, 0.2);
      this.fadeEl("#mid-nav", 0, 0.2);
      this.fadeEl("#movie-copy", 0, 0.2);
      this.fadeEl("#cast-wrap", 0, 0.2);
      this.fadeEl("#trailer-wrap > h4", 0, 0.2);
      this.trailerItems.forEach((item, i) => {
        if (i !== pos) {
          this.fadeEl(item, 0, 0.2);
        }
      });
      this.fadeAll("--layer-two-opacity", 1);
      gsap.set(el, {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundImage: `url(${movieData.trailPics[this.activeIndex][pos]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "25px"
      });

      Flip.from(thumbState, {
        duration: 0.4,
        ease: "power3.in",
        absolute: true,
        onComplete: () => {
          el.classList.toggle("active");
          gsap.set("#fixed-layer", {
            pointerEvents: "all"
          });

          setTimeout(() => {
            let videoClip = `<video disablePictureInPicture controls controlslist='nodownload nofullscreen' src=${
              movieData.trailArr[this.activeIndex][pos]
            } type='video/mp4'></video>`;
            el.insertAdjacentHTML("beforeend", videoClip);
            setTimeout(() => {
              el.classList.toggle("active");
              gsap.to(this.backArrow, {
                opacity: 1,
                x: "0",
                duration: 0.2,
                ease: "none"
              });
            }, 30);
          }, 150);
        }
      });
    }, 100);
  },
  closeTrailer: function (el, pos) {
    //Reverse and adjust FLIP animation back to first thumbnail view.
    const clip = this.fixedLayer.querySelector(".video-thumb");
    const vid = this.fixedLayer.querySelector("video");
    let target = this.trailerItems[pos];
    let clipState = Flip.getState(clip, { absolute: true });

    gsap.to(this.backArrow, {
      opacity: 0,
      x: "-10%",
      duration: 0.2,
      ease: "none"
    });
    clip.classList.toggle("active");

    setTimeout(() => {
      clip.removeChild(vid);
      clip.classList.toggle("active");

      setTimeout(() => {
        Flip.fit(clip, target, {
          absolute: true,
          props: "borderRadius"
        });

        Flip.from(clipState, {
          duration: 0.4,
          ease: "Power3.in",
          absolute: true,
          onComplete: () => {
            this.fadeEl(".big-poster", 1, 0.2);
            this.fadeEl(".big-movie-info", 1, 0.2);
            this.fadeEl("#mid-nav", 1, 0.2);
            this.fadeEl("#movie-copy", 1, 0.2);
            this.fadeEl("#cast-wrap", 1, 0.2);
            this.fadeEl("#trailer-wrap > h4", 1, 0.2);
            this.trailerItems.forEach((item, i) => {
              if (i !== pos) {
                this.fadeEl(item, 1, 0.2);
              }
            });
            this.fadeAll("--layer-two-opacity", 0);
            gsap.set("#fixed-layer", {
              pointerEvents: "none"
            });
            target.appendChild(clip);
            gsap.set(clip, { clearProps: true });
            gsap.set(clip, {
              backgroundImage: `url(${
                movieData.trailPics[this.activeIndex][pos]
              })`
            });

            target.querySelector(".video-thumb").classList.toggle("open");
          }
        });
      }, 150);
    }, 200);
  },
  //Handle all click interactions.
  handleClicks: function () {
    document.addEventListener(
      "click",
      (e) => {
        //Handles click of search input button.
        if (e.target.matches("#search-icon")) {
          let target = this.searchField.value;
          this.inputNav(target);
        }
        //Handles click of close button (detailed view).
        else if (e.target.matches(".close-card")) {
          if (document.querySelector("#first-layer").scrollTop !== 0) {
            gsap.to("#first-layer", 0.2, {
              scrollTo: {
                y: 0
              },
              onComplete: () => {
                dynamicScroll.flipBack();
              }
            });
          } else {
            dynamicScroll.flipBack();
          }
        }
        //Handles click on middle navigation tab buttons.
        else if (e.target.matches("#mid-nav a")) {
          let index = this.midNavLinks.indexOf(e.target);
          this.toggleMidNav(index);
        }
        //Handles click on movie cards (links).
        else if (e.target.matches(".movie-card a")) {
          //Disable hash redirection.
          e.preventDefault();
          //Get index of active movie card inside its respective array.
          let activeIndex = this.cards.indexOf(
            document.querySelector(".movie-card.active")
          );
          //Get index of selected movie card.
          let currentIndex = this.links.indexOf(e.target);
          //Handle forward navigation between movie cards (only one card every time).
          if (currentIndex > activeIndex) {
            currentIndex === this.cards.length - 1
              ? this.scrollFunc(this.cards[currentIndex], 0, 0.16)
              : this.scrollFunc(this.cards[currentIndex], 54, 0.2);
          } else if (currentIndex < activeIndex) {
            this.scrollFunc(this.cards[currentIndex], 18, 0.2);
          }
          //Handle click on active movie card.
          else if (currentIndex === activeIndex) {
            this.activeIndex = activeIndex;
            this.flipCard(
              this.posters[activeIndex],
              this.infos[activeIndex],
              activeIndex
            );
          }
        } else if (e.target.matches(".video-thumb")) {
          this.trailerIndex = this.trailerItems.indexOf(e.target.parentElement);
          this.expandTrailer(e.target, this.trailerIndex);
        } else if (e.target.matches("#fixed-layer .back-arrow")) {
          this.closeTrailer(e.target, this.trailerIndex);
        }
      },
      false
    );
  },

  init: function () {
    const setInnerText = (els, arr) => {
      document.querySelectorAll(els).forEach((item, i) => {
        item.innerText = `${arr[i]}`;
      });
    };

    //Populate datalist for the search input suggestion with movie titles from our data.
    movieData.titles.forEach((title, i) => {
      let option = `<option value="${title}">${title}</option>`;
      this.dataList.insertAdjacentHTML("beforeend", option);
    });

    //Scale up the first movie card and hide all primary infos but the one of the active first card.

    gsap.set(".movie-card", { scale: 0.85 });
    gsap.set(".movie-card.one", { scale: 1 });
    gsap.set(".movie-info", { opacity: 0 });
    gsap.set(".movie-card.one .movie-info", { opacity: 1 });

    //Set primary data elements (pictures, text)

    document.querySelectorAll(".poster").forEach((item, i) => {
      gsap.set(item, { backgroundImage: `url(${movieData.pictures[i]})` });
    });

    setInnerText(".movie-card .grade", movieData.gradeArr);
    setInnerText(".movie-card .movie-title", movieData.titles);
    setInnerText(".movie-card .tags", movieData.tagArr);

    gsap.set(this.backArrow, {
      opacity: 0,
      x: "-10%",
      rotate: 180
    });

    //Populate scroll timeline wih the movie cards animation.

    for (let i = 0; i < this.cards.length - 1; i++) {
      if (i !== this.cards.length - 2) {
        this.passCardTween(
          this.cards[i],
          this.cards[i + 1],
          this.infos[i],
          this.infos[i + 1],
          this.labels[i],
          0.85
        );
      } else if (i === 0) {
        this.passCardTween(
          this.cards[i],
          this.cards[i + 1],
          this.infos[i],
          this.infos[i + 1],
          this.labels[i],
          0.85
        );
      } else if (i === 3) {
        this.passCardTween(
          this.cards[i],
          this.cards[i + 1],
          this.infos[i],
          this.infos[i + 1],
          this.labels[i],
          0.875
        );
      } else {
        this.passCardTween(
          this.cards[i],
          this.cards[i + 1],
          this.infos[i],
          this.infos[i + 1],
          this.labels[i],
          0.775
        );
        this.scrollTl.addLabel("end");
      }
    }

    //Create trigger to link the scroll timeline directly to the scrollbar (scrub).
    const trigger = ScrollTrigger.create({
      horizontal: true,
      scroller: this.scroller,
      animation: this.scrollTl,
      scrub: true,
      start: 0,
      end: () => `+=${ScrollTrigger.maxScroll(this.scroller, true)}`,
      snap: {
        snapTo: "labels",
        duration: 0.2
      }
    });
    //Handles synchronisation of scrolling animation on resize.
    let progress = 0;
    ScrollTrigger.addEventListener(
      "refreshInit",
      () => (progress = trigger.progress)
    );
    ScrollTrigger.addEventListener("refresh", () => {
      trigger.scroll(progress * ScrollTrigger.maxScroll(this.scroller, true));
    });

    //Create a trigger for every movie card to handle active state.
    this.cards.forEach((card, i) => {
      let index = this.cards.indexOf(card);
      let st = ScrollTrigger.create({
        horizontal: true,
        scroller: "#card-gallery",
        start: "0 80%",
        end: "0 0",
        trigger: card,
        toggleClass: "active"
      });
    });
    //Set middle tab navigation to the second option (details).
    gsap.set("#nav-layer", { x: "105%" });

    //Call event handler functions.
    this.inputFunc();
    this.handleClicks();
  }
};

//Initiate clock, bottom navigation and scroll animation.
dynamicClock.init();
footerNav.init();
dynamicScroll.init();
