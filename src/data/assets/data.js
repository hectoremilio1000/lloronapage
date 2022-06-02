const menu = [
  {
    id: 1,
    title: "SOTOL ONO",
    category: "Destilados Mexicanos",
    price: 120,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/destiladosMexicanos/SotolOno.jpg",
    desc: `estilo: SOTOL, 
    sabores: "SUAVE Y PERSISTENTE", porcentaje: 45%`,
  },
  {
    id: 2,
    title: "SOTOL SIERRA",
    category: "Destilados Mexicanos",
    price: 175,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/destiladosMexicanos/sotolSierra.jpg",
    desc: `estilo: "SOTOL, ",
    sabores: "PIMIENTA, CÍTRICOS Y MEMBRILLO", porcentaje: 48%`,
  },
  {
    id: 3,
    title: "SOTOL VENENO",
    category: "Destilados Mexicanos",
    price: 175,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/destiladosMexicanos/sotolVeneno.jpg",
    desc: `origen: "CHIHUAHUA",
    estilo: "SOTOL",
    sabores: "PIMIENTA, CÍTRICOS Y MEMBRILLO", porcentaje: 48%`,
  },
  {
    id: 4,
    title: "SOTOL DESIERTO",
    category: "Destilados Mexicanos",
    price: 175,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/destiladosMexicanos/sotolDesierto.jpg",
    desc: `origen: "CHIHUAHUA",
    estilo: "SOTOL",
    sabores: "TOQUE AHUMADO Y UN FINAL MINERAL Y ESPECIADO", porcentaje: 45% `,
  },

  {
    id: 5,
    title: "SOTOL DESIERTO",
    category: "Destilados Mexicanos",
    price: 175,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/destiladosMexicanos/sotolCarnei.jpg",
    desc: `origen: "CHIHUAHUA",
    estilo: "SOTOL",
    sabores: "PIMIENTA, CÍTRICOS Y MEMBRILLO", porcentaje: 48`,
  },

  {
    id: 6,
    title: "8 vívoras",
    category: "Destilados Mexicanos",
    price: 175,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/destiladosMexicanos/8vivoras.jpg",
    desc: `origen: "OAXACA",
    estilo: "MEZCAL",
    sabores: "AGAVE AHUMADO, CON UN TOQUE CITRICO", reconocimiento:
    "SAN FRANCISCO WORD SPIRITS - MEJOR DESTILADO SIN AÑEJAR DEL MUNDO (2013)",
  porcentaje: 51`,
  },

  {
    id: 7,
    title: "8 vívoras",
    category: "Destilados Mexicanos",
    price: 120,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/destiladosMexicanos/lloronamezcalEspadin.png",
    desc: `origen: "OAXACA",
    estilo: "MEZCAL",
    sabores: "PIEDRA, CON LEÑA DE MESQUITE Y ENCINO",
    porcentaje: 48`,
  },

  {
    id: 8,
    title: "8 vívoras",
    category: "Destilados Mexicanos",
    price: 175,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/destiladosMexicanos/madreCuishellorona.jpg",
    desc: `origen: "OAXACA",
    estilo: "MEZCAL",
    sabores: "TONOS DE HIERBAS Y ESPECIAS", reconocimiento:
    "GANADOR DE MEDALLA DE ORO FERIA DE MEZCAL OAXACA 2019",
  porcentaje: 52`,
  },

  {
    id: 9,
    title: "LLORONA ARROQUEÑO",
    category: "Destilados Mexicanos",
    price: 175,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/destiladosMexicanos/lloronaArroqueno.jpg",
    desc: `origen: "OAXACA",
    estilo: "MEZCAL",
    sabores: "PIEDRA Y MADERA",
    porcentaje: 53`,
  },

  {
    id: 10,
    title: "ENSAMBLE ARTESANAL",
    category: "Destilados Mexicanos",
    price: 150,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/destiladosMexicanos/lloronaArroqueno.jpg",
    desc: `origen: "OAXACA",
    estilo: "MEZCAL",
    sabores: "PIEDRA Y MADERA",
    porcentaje: 52`,
  },

  {
    id: 11,
    title: "ENSAMBLE ARTESANAL",
    category: "Destilados Mexicanos",
    price: 175,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/destiladosMexicanos/agaveroLicorTequila.jpg",
    desc: `origen: "MÉXICO",
    estilo: "LICOR DE TEQUILA",
    sabores:
      "DULCE Y LIGERO, TOQUE DE PIMIENTA VERDE Y NOTAS DE HIERBAS SUAVES",
      porcentaje: 32`,
  },

  {
    id: 12,
    title: "allende GOLDEN ALE",
    category: "cerveza Artesanal",
    price: 110,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cervezaArtesanal/allendeClara.jpg",
    desc: `origen: "San Miguel de Allende, Guanajuato",
    estilo: "GOLDEN ALE",
    sabores: "CÍTRICOS, MIEL", porcentaje: 4.4%`,
  },
  {
    id: 13,
    title: "delirium Red",
    category: "cerveza Artesanal",
    price: 200,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cervezaArtesanal/deliriumRed.png",
    desc: `origen: "BÉLGICA",
    estilo: "FRUIT BEER",
    sabores: "CEREZA" porcentaje: 8%`,
  },
  {
    id: 14,
    title: "Abk Pills",
    category: "cerveza Artesanal",
    price: 120,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cervezaArtesanal/abkpils1.jpg",
    desc: `origen: "Alemania",
    estilo: "PILS",
    sabores: "CÍTRICOS MIEL" reconocimiento:
    "ABK GANA 7 PREMIOS DE PLATA EN EL LONDON BEER COMPETITION 2021"
    porcentaje: 5`,
  },
  {
    id: 15,
    title: "Allende Agave",
    category: "cerveza Artesanal",
    price: 110,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cervezaArtesanal/allendeAgave.jpg",
    desc: `origen: "San Miguel de Allende, Guanajuato",
    estilo: "AGAVE LAGER",
    sabores: "AGAVE",
    porcentaje: 4.2`,
  },
  {
    id: 16,
    title: "Colimita Lagger",
    category: "cerveza Artesanal",
    price: 110,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cervezaArtesanal/colimitaLagger.jpg",
    desc: `origen: "COLIMA",
    estilo: "LAGER",
    sabores: "MALTAS FLORALES", porcentaje: 4.4`,
  },
  {
    id: 17,
    title: "Irreverente Conciencia",
    category: "cerveza Artesanal",
    price: 149,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cervezaArtesanal/iireverenteConciencia.jpg",
    desc: `origen: "Ciudad de México",
    estilo: "WHITE STOUT",
    sabores: "CHOCOLATE CAFÉ", porcentaje: 8`,
  },
  {
    id: 18,
    title: "jabali HelesBock",
    category: "cerveza Artesanal",
    price: 149,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cervezaArtesanal/jabaliHelesBock.jpeg",
    desc: `origen: "Querétaro",
    estilo: "HELLESBOCK",
    sabores: "FLORAL ESPECIADAS", porcentaje: 8.1`,
  },
  {
    id: 19,
    title: "jabali Rock",
    category: "cerveza Artesanal",
    price: 110,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cervezaArtesanal/jabaliRock.jpeg",
    desc: `origen: "Querétaro",
    estilo: "BOCK",
    sabores: "DULCE TOSTADO", porcentaje: 6.3`,
  },

  {
    id: 20,
    title: "minerva Lagger",
    category: "cerveza Artesanal",
    price: 110,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cervezaArtesanal/minervaLagger.png",
    desc: `origen: "COLIMA",
    estilo: "AMERICAN LIGHT",
    sabores: "CÍTRICOS", porcentaje: 3.5`,
  },
  {
    id: 21,
    title: "mounstruo de Agua Stout",
    category: "cerveza Artesanal",
    price: 120,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cervezaArtesanal/mounstruoStout1.jpg",
    desc: `origen: "Ciudad de México",
    estilo: "STOUT",
    sabores: "DÁTIL, FRUTOS SECOS", porcentaje: 6.2`,
  },
  {
    id: 22,
    title: "mounstruo IPA ALE",
    category: "cerveza Artesanal",
    price: 120,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cervezaArtesanal/mounstruoSugoi.jpg",
    desc: `origen: "Ciudad de México",
    estilo: "LAGER",
    sabores: "AFRUTADO TROPICAL", porcentaje: 7,`,
  },
  {
    id: 23,
    title: "Piedra Lisa",
    category: "cerveza Artesanal",
    price: 110,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cervezaArtesanal/piedraLisa.png",
    desc: `origen: "COLIMA",
    estilo: "IPA",
    sabores: "MARACUYA", porcentaje: 4.7`,
  },

  {
    id: 24,
    title: "Don Huevo",
    category: "Hamburguesas",
    price: 139,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/hamburguesas/hamburguesaDonHuevo+copy.jpg",
    desc: `Carne 100% sirloin importada con Huevo`,
  },
  {
    id: 25,
    title: "Hamburguesa con Camarón",
    category: "Hamburguesas",
    price: 179,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/hamburguesas/hamburguesaCamaron.jpg",
    desc: `Carne 100% sirloin importada con Camarón Rebozado`,
  },
  {
    id: 26,
    title: "Hamburguesa Jack - Aros de cebolla y queso Suizo",
    category: "Hamburguesas",
    price: 219,
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/hamburguesas/HAMBURGUESA_jack_suizo.jpg",
    desc: `Carne 100% sirloin importada con Camarón Rebozado con Aros de Queso Suizo y Fondue de Queso Suizo`,
  },
  {
    id: 27,
    title: "Hogareña",
    category: "Hamburguesas",
    price: 219,
    img: "https://image.freepik.com/foto-gratis/hamburguesa-vista-frontal-verduras-carne_23-2148868238.jpg",
    desc: `Carne 100% sirloin importada con Tomate Bola y Lechuga`,
  },

  {
    id: 100,
    title: "Pizza camarón",
    category: "Pizzas",
    price: 249,
    img: "https://image.freepik.com/foto-gratis/sabrosa-pizza-fresca-mariscos-mesa_1205-7737.jpg",
    desc: `pepperoni, t. cherry, aceituna negra masa artesanal`,
  },
  {
    id: 101,
    title: "Pizza pepperoni",
    category: "Pizzas",
    price: 199,
    img: "https://image.freepik.com/foto-gratis/primer-plano-pizza-pepperoni-sobre-tabla-madera-luces_181624-16625.jpg",
    desc: `pepperoni, t. cherry, aceituna negra masa artesanal`,
  },
  {
    id: 102,
    title: "Pizza hawaina",
    category: "Pizzas",
    price: 199,
    img: "https://image.freepik.com/foto-gratis/pizza-hawaiana_1203-2455.jpg",
    desc: `piña, jamón artesanal italiano y extra queso`,
  },
  {
    id: 103,
    title: "Pizza veggie",
    category: "Pizzas",
    price: 209,
    img: "https://image.freepik.com/foto-gratis/deliciosa-pizza-champinones-cerca_23-2148516973.jpg",
    desc: `Jitomate, Chile morrón, Champiñones y masa artesanal`,
  },
  {
    id: 104,
    title: "Pizza margarita",
    category: "Pizzas",
    price: 209,
    img: "https://image.freepik.com/foto-gratis/hora-pizza-sabrosa-pizza-tradicional-casera-receta-italiana_144627-42546.jpg",
    desc: `Auténtica salsa pesto, Jitomate, masa artesanal`,
  },
  {
    id: 200,
    title: "Tacos Camarón",
    category: "Tacos",
    price: 109,
    img: "https://i0.wp.com/hornomx.com/wp-content/uploads/2021/08/beer-battered-shrimp-and-fish-tacos-recipe-hornomx-side.jpg?ssl=1",
    desc: `Camarón rebosado, Cebolla morada`,
  },
  {
    id: 201,
    title: "Tacos Chicharrón",
    category: "Tacos",
    price: 99,
    img: "https://cdn7.kiwilimon.com/recetaimagen/35601/640x426/th5-640x426-42907.jpg.webp",
    desc: `Chorizo Oaxaqueño, Chicharrón de cerdo`,
  },
  {
    id: 202,
    title: "Taco Vegano",
    category: "Tacos",
    price: 99,
    img: "https://media.istockphoto.com/photos/woman-wraping-fried-chicken-with-vegetable-in-pita-bread-picture-id1200032444?k=20&m=1200032444&s=612x612&w=0&h=hTrt5kyZR8VaBQPWAnZ6iiFkdyUDaWFX0iOzV6k3BzU=",
    desc: `Zanahoria, Ajo, Cebolla, Tortilla Nopal`,
  },
  {
    id: 203,
    title: "Tacos de Pollo",
    category: "Tacos",
    price: 99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgU4lS2d7VfrWc1Pq1M3m1m3LxluzKs4wcw&usqp=CAU",
    desc: `Pechuga de Pollo Orgánica, Cilantro, Cebolla`,
  },
];
export default menu;
