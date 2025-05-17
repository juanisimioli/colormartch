const colors = [
  {
    name: "Blanco Maravilloso",
    hex: "#F1F1ED",
  },
  {
    name: "Alturas Polares",
    hex: "#F6F2E5",
  },
  {
    name: "Blanco Quirúrgico",
    hex: "#F1F0E8",
  },
  {
    name: "Tutú Blanco",
    hex: "#F5EFE5",
  },
  {
    name: "Fantasía de Algodón",
    hex: "#F2F1E5",
  },
  {
    name: "Lino Claro",
    hex: "#F4F0E4",
  },
  {
    name: "Toque de Malvavisco",
    hex: "#F5EEE5",
  },
  {
    name: "Blanco Crudo",
    hex: "#EEEFEA",
  },
  {
    name: "Blanco Crudo",
    hex: "#EEEFEA",
  },
  {
    name: "Dejo de Vainilla",
    hex: "#F7F0DF",
  },
  {
    name: "Alegría de Bebé",
    hex: "#F2EFE5",
  },
  {
    name: "Algodón Distinguido",
    hex: "#EEEFE8",
  },
  {
    name: "Nubes Etéreas",
    hex: "#F2ECE6",
  },
  {
    name: "Blanco Cal",
    hex: "#F2ECE5",
  },
  {
    name: "Sensación de Escarcha",
    hex: "#F0EEE5",
  },
  {
    name: "Blanco Glacis",
    hex: "#EEEEE7",
  },
  {
    name: "Boda Primaveral",
    hex: "#F2EDE3",
  },
  {
    name: "Blanco Polar",
    hex: "#F1ECE5",
  },
  {
    name: "Casamiento de Verano",
    hex: "#EDEAEB",
  },
  {
    name: "Brisa de Algodón",
    hex: "#F0EDE4",
  },
  {
    name: "Vallado de Madera",
    hex: "#F0EEE3",
  },
  {
    name: "Gris Rocío",
    hex: "#ECEDE7",
  },
  {
    name: "Gris Rocío",
    hex: "#ECEDE7",
  },
  {
    name: "Blanco Divino",
    hex: "#F0EDE2",
  },
  {
    name: "Chispazo de Marfil",
    hex: "#F7EBDC",
  },
  {
    name: "Blanco Floral",
    hex: "#F1EDE0",
  },
  {
    name: "Encaje Nordestino",
    hex: "#EFEDE2",
  },
  {
    name: "Toque de Humo",
    hex: "#EBEAE8",
  },
  {
    name: "Lino Voluptuoso",
    hex: "#F3EDDD",
  },
  {
    name: "Pieza de Cristal",
    hex: "#E9EAE9",
  },
  {
    name: "Soplo de Nieve",
    hex: "#E8EAE9",
  },
  {
    name: "Sonata Lunar",
    hex: "#E9E9E9",
  },
  {
    name: "Blanco Chantilly",
    hex: "#F0E8E2",
  },
  {
    name: "Blanco Correcto",
    hex: "#EEE9E3",
  },
  {
    name: "Brillo Suave",
    hex: "#EDE8E4",
  },
  {
    name: "Magnolia Cristalina",
    hex: "#E9E9E7",
  },
  {
    name: "Blanco Arizona",
    hex: "#F5EBD9",
  },
  {
    name: "Crema Chantilly",
    hex: "#F6EBD8",
  },
  {
    name: "Perla Natural",
    hex: "#EFE9E1",
  },
  {
    name: "Serenidad",
    hex: "#F1E8E0",
  },
  {
    name: "Toque Suave",
    hex: "#ECE9E4",
  },
  {
    name: "Efecto Luminoso",
    hex: "#F0E7E1",
  },
  {
    name: "Precioso Momento",
    hex: "#EFE9DF",
  },
  {
    name: "Blanco Artesano",
    hex: "#EDE8E2",
  },
  {
    name: "Colinas de Invierno",
    hex: "#E9E7E6",
  },
  {
    name: "Blanco Panadero",
    hex: "#F1E9DC",
  },
  {
    name: "Espacio Interno",
    hex: "#EEE6E2",
  },
  {
    name: "Blanco Susurro",
    hex: "#EEE9DE",
  },
  {
    name: "Blanco Casamiento",
    hex: "#ECE9E0",
  },
  {
    name: "Blanco Terraza",
    hex: "#F2EAD9",
  },
  {
    name: "Tempestad de Arena",
    hex: "#F4E9D7",
  },
  {
    name: "Tafetán",
    hex: "#EFE8DD",
  },
  {
    name: "Aria Suave",
    hex: "#EEE7DF",
  },
  {
    name: "Fantasía Marfil",
    hex: "#F4E9D6",
  },
  {
    name: "Leche con Vainilla",
    hex: "#F1E8DA",
  },
  {
    name: "Bouquet de Almendras",
    hex: "#F2E8D9",
  },
  {
    name: "Garza Real",
    hex: "#EDE8DD",
  },
  {
    name: "Café Suizo",
    hex: "#EFE8DA",
  },
  {
    name: "Sensación Urbana",
    hex: "#E6E7E4",
  },
  {
    name: "Bruma Mística",
    hex: "#EFE8D9",
  },
  {
    name: "Blanco Natural",
    hex: "#EBE7DE",
  },
  {
    name: "Glamour",
    hex: "#EFE5DC",
  },
  {
    name: "Toque de Durazno",
    hex: "#F0E5DB",
  },
  {
    name: "Polen",
    hex: "#F3E8D4",
  },
  {
    name: "Blanco Lino",
    hex: "#F1E8D4",
  },
  {
    name: "Perfume de Día",
    hex: "#EFE4DA",
  },
  {
    name: "Jardín Neutral",
    hex: "#F1E7D3",
  },
  {
    name: "Cielo Blanco",
    hex: "#EBE6DA",
  },
  {
    name: "Cisne Blanco",
    hex: "#ECE6D8",
  },
  {
    name: "Mañana Alucinante",
    hex: "#EAE4DB",
  },
  {
    name: "Blanco Estelar",
    hex: "#E8E3DC",
  },
  {
    name: "Leyenda de los Lobos",
    hex: "#EDE3D5",
  },
  {
    name: "Yogur Natural",
    hex: "#E7E4D9",
  },
  {
    name: "Ópalo",
    hex: "#EAE3D7",
  },
  {
    name: "Sensación Natural",
    hex: "#ECE2D1",
  },
  {
    name: "Neutro Permanente",
    hex: "#EAE0CD",
  },
  {
    name: "Aire Fresco",
    hex: "#ECEAED",
  },
  {
    name: "Suave Nieve",
    hex: "#EEEDE5",
  },
  {
    name: "Gota de Perla",
    hex: "#E8EAEB",
  },
  {
    name: "Inocencia",
    hex: "#EAE9E9",
  },
  {
    name: "Blanco Inspiración",
    hex: "#ECEAE6",
  },
  {
    name: "Brillo de Cristal",
    hex: "#E8E8EB",
  },
  {
    name: "Sereno",
    hex: "#E8E9EA",
  },
  {
    name: "Atmósfera",
    hex: "#E8EAE9",
  },
  {
    name: "Romance",
    hex: "#E6EAEA",
  },
  {
    name: "Simple Presencia",
    hex: "#E9E8E8",
  },
  {
    name: "Calma Matutina",
    hex: "#EFE8E2",
  },
  {
    name: "Caminata de Invierno",
    hex: "#E7EAE8",
  },
  {
    name: "Sendero de Pingüinos",
    hex: "#E9E8E8",
  },
  {
    name: "Perla Agrisada",
    hex: "#E9E9E7",
  },
  {
    name: "Sombra Pálida",
    hex: "#ECE8E5",
  },
  {
    name: "Ala Blanca",
    hex: "#E9EAE5",
  },
  {
    name: "Historia Secreta",
    hex: "#EDE8E3",
  },
  {
    name: "Estrella Nueva",
    hex: "#E6E9E9",
  },
  {
    name: "Gotas de Lluvia",
    hex: "#E8E9E7",
  },
  {
    name: "Estrella Nueva",
    hex: "#E6E9E9",
  },
  {
    name: "Domingo Nublado",
    hex: "#ECE9E2",
  },
  {
    name: "Sensación Diáfana",
    hex: "#EAE8E5",
  },
  {
    name: "Día de Invierno",
    hex: "#E7EAE6",
  },
  {
    name: "Toque de Invierno",
    hex: "#EAE8E5",
  },
  {
    name: "Jazmín Dorado",
    hex: "#EBE8E4",
  },
  {
    name: "Malvavisco",
    hex: "#EDE8E2",
  },
  {
    name: "Martini Seco",
    hex: "#EAE8E4",
  },
  {
    name: "Porcelana Antigua",
    hex: "#EFE8DF",
  },
  {
    name: "Caricia",
    hex: "#EEE7E1",
  },
  {
    name: "Vientos Calmos",
    hex: "#EFE7E0",
  },
  {
    name: "Vientos Calmos",
    hex: "#EFE7E0",
  },
  {
    name: "Erizo Blanco",
    hex: "#EDE7E1",
  },
  {
    name: "Porcelana",
    hex: "#E8E8E5",
  },
  {
    name: "Ventisca",
    hex: "#E6E9E6",
  },
  {
    name: "Porcelana",
    hex: "#E8E8E5",
  },
  {
    name: "Bruma Tranquila",
    hex: "#EDE8DF",
  },
  {
    name: "Lluvia de Barcelona",
    hex: "#E4E7E9",
  },
  {
    name: "Blanco Minimalista",
    hex: "#EBE8E1",
  },
  {
    name: "Luna de Seda",
    hex: "#E8E8E4",
  },
  {
    name: "Escondite Silencioso",
    hex: "#E8E7E3",
  },
  {
    name: "Blanco Estibador",
    hex: "#F0E8DA",
  },
  {
    name: "Escondite Silencioso",
    hex: "#E8E7E3",
  },
  {
    name: "Toque de Rosa",
    hex: "#EAE6E1",
  },
  {
    name: "Mañana Fría",
    hex: "#E2E7E7",
  },
  {
    name: "Taza de Té",
    hex: "#EDE4DE",
  },
  {
    name: "Lluvia de Terciopelo",
    hex: "#E2E5E6",
  },
  {
    name: "Papel Valioso",
    hex: "#E8E4E0",
  },
  {
    name: "Niebla del Pacífico",
    hex: "#EDE6D8",
  },
  {
    name: "Suspiro de Lavanda",
    hex: "#DFE2E7",
  },
  {
    name: "Blanco Antiguo",
    hex: "#EBE5D8",
  },
  {
    name: "Sabiduría Blanca",
    hex: "#E5E0DC",
  },
  {
    name: "Andino",
    hex: "#DDE2E2",
  },
  {
    name: "Horizonte Urbano",
    hex: "#DEE2E0",
  },
  {
    name: "Caminata Invernal",
    hex: "#E1E2DD",
  },
  {
    name: "Pájaro de Invierno",
    hex: "#E4E1DB",
  },
  {
    name: "Lana Suave",
    hex: "#E8E0D8",
  },
  {
    name: "Blanco Gatito",
    hex: "#E6E1D8",
  },
  {
    name: "Chiffon",
    hex: "#E0E1DC",
  },
  {
    name: "Gris Estupendo",
    hex: "#DAE0E2",
  },
  {
    name: "Gris Estupendo",
    hex: "#DAE0E2",
  },
  {
    name: "Beige Pálido",
    hex: "#E5DFD7",
  },
  {
    name: "Espejismo Vigoroso",
    hex: "#E7E0D3",
  },
  {
    name: "Velo Violeta",
    hex: "#DBDCE2",
  },
  {
    name: "Amatista Difusa",
    hex: "#DBDDE0",
  },
  {
    name: "Onda Acústica",
    hex: "#DCDCE0",
  },
  {
    name: "Gaviota en Reposo",
    hex: "#DEDEDA",
  },
  {
    name: "Semilla de Perla",
    hex: "#E8DECE",
  },
  {
    name: "Equinoccio de Otoño",
    hex: "#E3DCD4",
  },
  {
    name: "Carbón del Ártico",
    hex: "#DBDBDD",
  },
  {
    name: "Bizcocho de Leche",
    hex: "#E3DDD2",
  },
  {
    name: "Pantalla Gris",
    hex: "#DDDCD9",
  },
  {
    name: "Ballet Sobre Hielo",
    hex: "#DCDBDB",
  },
  {
    name: "Blanco Tul",
    hex: "#DBDCDA",
  },
  {
    name: "Glicina Blanca",
    hex: "#DADBDC",
  },
  {
    name: "Pelícano",
    hex: "#DEDCD7",
  },
  {
    name: "Conejo Blanco",
    hex: "#DDDAD8",
  },
  {
    name: "Bello Brezo",
    hex: "#E0DAD5",
  },
  {
    name: "Conejo Blanco",
    hex: "#DDDAD8",
  },
  {
    name: "Flauta de Madera",
    hex: "#E4DBD0",
  },
  {
    name: "Bello Brezo",
    hex: "#E0DAD5",
  },
  {
    name: "Cabras Blancas",
    hex: "#DFDAD5",
  },
  {
    name: "Cabras Blancas",
    hex: "#DFDAD5",
  },
  {
    name: "Toque de Gris",
    hex: "#DADAD9",
  },
  {
    name: "Nubes Grises",
    hex: "#D9DAD8",
  },
  {
    name: "Plaza",
    hex: "#DADBD6",
  },
  {
    name: "Campo Nevado",
    hex: "#D8D8D7",
  },
  {
    name: "Hielo Sombreado",
    hex: "#D7D9D6",
  },
  {
    name: "Momento de Promesa",
    hex: "#EEE9EB",
  },
  {
    name: "Rubor Neutro",
    hex: "#F7E7E3",
  },
  {
    name: "Lazo de Cinta",
    hex: "#EEE8EA",
  },
  {
    name: "Rosa Sombra",
    hex: "#F0E7E7",
  },
  {
    name: "Sensación Japonesa",
    hex: "#F3E7E4",
  },
  {
    name: "Flor de Saúco",
    hex: "#EFE7E7",
  },
  {
    name: "Rosa Tímido",
    hex: "#F2E7E3",
  },
  {
    name: "Rosa Puro",
    hex: "#F0E7E5",
  },
  {
    name: "Algodón de Azúcar",
    hex: "#EFE6E5",
  },
  {
    name: "Salmón Pálido",
    hex: "#F1E5E4",
  },
  {
    name: "Herencia",
    hex: "#F0E5E5",
  },
  {
    name: "Brisa Chic",
    hex: "#F3E7DE",
  },
  {
    name: "Sombra Suave",
    hex: "#ECE7E3",
  },
  {
    name: "Día de Ocio",
    hex: "#F2E6DE",
  },
  {
    name: "Rosa Gélido",
    hex: "#F4E0E1",
  },
  {
    name: "Delicia Rosa",
    hex: "#F1DEE6",
  },
  {
    name: "Mousse Rosado",
    hex: "#EAE2E6",
  },
  {
    name: "Dulce Bebé",
    hex: "#EFDDE6",
  },
  {
    name: "Rosa Perfecto",
    hex: "#F6DFDD",
  },
  {
    name: "Flor de Lis",
    hex: "#EBDEE8",
  },
  {
    name: "Porcelana Rosada",
    hex: "#F5DFDB",
  },
  {
    name: "Bombón de Frutilla",
    hex: "#F5D8E1",
  },
  {
    name: "Sensación de Rosas",
    hex: "#EFDFDF",
  },
  {
    name: "Jardín de Fulgores",
    hex: "#F3DEDA",
  },
  {
    name: "Toque de Cereza",
    hex: "#F2DCDC",
  },
  {
    name: "Moño Rosa",
    hex: "#F6D8DA",
  },
  {
    name: "Sensación Rosada",
    hex: "#E8DAE5",
  },
  {
    name: "Rosa Brumoso",
    hex: "#EEDCDA",
  },
  {
    name: "Escarcha Rosa",
    hex: "#F1D5DD",
  },
  {
    name: "Rosa Romántico",
    hex: "#ECDADD",
  },
  {
    name: "Rosa Sinfonía",
    hex: "#F2D6DA",
  },
  {
    name: "Niñita",
    hex: "#EBDCDB",
  },
  {
    name: "Malva Rosada",
    hex: "#EDD3DF",
  },
  {
    name: "Almendra Portuguesa",
    hex: "#E8DADD",
  },
  {
    name: "Helado",
    hex: "#EBD2E2",
  },
  {
    name: "Playa Rosa",
    hex: "#EBDAD9",
  },
  {
    name: "Ayer",
    hex: "#E4DBDF",
  },
  {
    name: "Ballerinas",
    hex: "#F1DAD2",
  },
  {
    name: "Belleza",
    hex: "#F6D6CF",
  },
  {
    name: "Violeta Discreto",
    hex: "#E4D2E2",
  },
  {
    name: "Frutilla Sensacional",
    hex: "#E5D1E0",
  },
  {
    name: "Crema de Papaya",
    hex: "#EFD8CF",
  },
  {
    name: "Piñón",
    hex: "#F5CED1",
  },
  {
    name: "Rosa Casa de Muñecas",
    hex: "#F9CECD",
  },
  {
    name: "Pink à la mode",
    hex: "#F4D3CB",
  },
  {
    name: "Rosa de Hadas",
    hex: "#F5D1C8",
  },
  {
    name: "Limonada Rosa",
    hex: "#ECD0CF",
  },
  {
    name: "Rosa Rosa",
    hex: "#E6C8DD",
  },
  {
    name: "Blanco Frambuesa",
    hex: "#E5CED4",
  },
  {
    name: "Helado de Cereza",
    hex: "#E8C4DB",
  },
  {
    name: "Dama de Honor",
    hex: "#EDC6D0",
  },
  {
    name: "Morado Suave",
    hex: "#EDC9CC",
  },
  {
    name: "Amor Eterno",
    hex: "#F3C4C9",
  },
  {
    name: "Rosa Inspirador",
    hex: "#F5CAC1",
  },
  {
    name: "Rosado Intenso",
    hex: "#E0C0DA",
  },
  {
    name: "Rosa Vivo",
    hex: "#E8BDD3",
  },
  {
    name: "Reflejo Vivaz",
    hex: "#EFBFC9",
  },
  {
    name: "Rosa Tudor",
    hex: "#EBC5C6",
  },
  {
    name: "Rosa Algodón Dulce",
    hex: "#F2BCC2",
  },
  {
    name: "Rosa Angora",
    hex: "#E4B6D6",
  },
  {
    name: "Rosa Nevada",
    hex: "#E6C4C5",
  },
  {
    name: "Rosa Inglesa",
    hex: "#E3C1C9",
  },
  {
    name: "Rosa Turco",
    hex: "#E9B9CA",
  },
  {
    name: "Rosa Fantástico",
    hex: "#ECB8BE",
  },
  {
    name: "Terciopelo Rosa",
    hex: "#EBBABB",
  },
  {
    name: "Pashmina Rosada",
    hex: "#E3B6C2",
  },
  {
    name: "Bailarina",
    hex: "#D6BBC9",
  },
  {
    name: "Rosa Retro",
    hex: "#D8B6C3",
  },
  {
    name: "Rosa Chispeante",
    hex: "#ECA8B9",
  },
  {
    name: "Estrella de Cine",
    hex: "#DDB5BA",
  },
  {
    name: "Muchacha",
    hex: "#EAB0B2",
  },
  {
    name: "Pastilla de Cereza",
    hex: "#E6A7BE",
  },
  {
    name: "Cactus Dalia",
    hex: "#F0A9B1",
  },
  {
    name: "Fiesta de Rosas",
    hex: "#E7A8BA",
  },
  {
    name: "Rosa Valentín",
    hex: "#E1A5C3",
  },
  {
    name: "Atmósfera Romántica",
    hex: "#E2B5B0",
  },
  {
    name: "Revelación Rosada",
    hex: "#F4A6A8",
  },
  {
    name: "Durazno Calmo",
    hex: "#F3A9A4",
  },
  {
    name: "Atardecer de París",
    hex: "#E0ADAE",
  },
  {
    name: "Rosa Pátina",
    hex: "#DBA9B6",
  },
  {
    name: "Peonías Frescas",
    hex: "#D9AAB0",
  },
  {
    name: "Rosa Tigre",
    hex: "#ED9AA3",
  },
  {
    name: "Lazo Rosado",
    hex: "#D699B9",
  },
  {
    name: "Bahía de Coral",
    hex: "#EEA197",
  },
  {
    name: "Rosa Confite",
    hex: "#DF93AF",
  },
  {
    name: "Rubor de Peonía",
    hex: "#DCA29E",
  },
  {
    name: "Mezcla de Frambuesas",
    hex: "#CB9DB0",
  },
  {
    name: "Rosa Florida",
    hex: "#E3979B",
  },
  {
    name: "Graciosa",
    hex: "#CB94B3",
  },
  {
    name: "Rosa Exótico",
    hex: "#D185B7",
  },
  {
    name: "Rosa Silvestre",
    hex: "#DD939C",
  },
  {
    name: "Toque de Frambuesa",
    hex: "#C29AAF",
  },
  {
    name: "Crema de Frutilla",
    hex: "#DB9A95",
  },
  {
    name: "Deseos del Corazón",
    hex: "#DB9599",
  },
  {
    name: "Frambuesa Suave",
    hex: "#D7919E",
  },
  {
    name: "Ciruela Japonesa",
    hex: "#D191A4",
  },
  {
    name: "Rosa Carnaval",
    hex: "#D486AC",
  },
  {
    name: "Destino",
    hex: "#E0899C",
  },
  {
    name: "Sandía Dulce",
    hex: "#E18D93",
  },
  {
    name: "Rosa India",
    hex: "#D0929C",
  },
  {
    name: "Playa de Coral",
    hex: "#DE8E89",
  },
  {
    name: "Vino Rosé",
    hex: "#D68C91",
  },
  {
    name: "Florecer Osado",
    hex: "#E88683",
  },
  {
    name: "Azalea Suave",
    hex: "#C787A2",
  },
  {
    name: "Baile de Máscaras",
    hex: "#D48594",
  },
  {
    name: "Rosa Chicle",
    hex: "#D97A99",
  },
  {
    name: "Princesa Sensacional",
    hex: "#E48286",
  },
  {
    name: "Ocaso del Pacífico",
    hex: "#DF8289",
  },
  {
    name: "Coral Rosa",
    hex: "#E57E87",
  },
  {
    name: "Rosa Flamenco",
    hex: "#D37998",
  },
  {
    name: "Rosa Bella",
    hex: "#C68597",
  },
  {
    name: "Clavel Intenso",
    hex: "#BF7AA4",
  },
  {
    name: "Rouge Rojo",
    hex: "#D8827E",
  },
  {
    name: "Jalea de Frambuesa",
    hex: "#B88599",
  },
  {
    name: "Flamenco Real",
    hex: "#DB7680",
  },
  {
    name: "Amor Perfecto",
    hex: "#BC739E",
  },
  {
    name: "Vanguardia de la Moda",
    hex: "#C77E83",
  },
  {
    name: "Licuado de Frutilla",
    hex: "#D86C80",
  },
  {
    name: "Vibrato",
    hex: "#C1669D",
  },
  {
    name: "Tutti Frutti",
    hex: "#C76892",
  },
  {
    name: "Pasionaria",
    hex: "#BB7191",
  },
  {
    name: "Lápiz Labial",
    hex: "#CD747C",
  },
  {
    name: "Té de Rosa Mosqueta",
    hex: "#AE7995",
  },
  {
    name: "Serenata Satinada",
    hex: "#AC7996",
  },
  {
    name: "Rosa Sabana",
    hex: "#CB6E81",
  },
  {
    name: "Tentación",
    hex: "#D57471",
  },
  {
    name: "Rosa Elegante",
    hex: "#D66B76",
  },
  {
    name: "Rosa Notorio",
    hex: "#CC6487",
  },
  {
    name: "Coral Rojo",
    hex: "#CA7571",
  },
  {
    name: "Rosado Embriagador",
    hex: "#DD646D",
  },
  {
    name: "Rosa Neón",
    hex: "#DC656C",
  },
  {
    name: "Rosa Arbórea",
    hex: "#C16D7E",
  },
  {
    name: "Rosa Beso",
    hex: "#C27179",
  },
  {
    name: "Rosa Carmín",
    hex: "#AE639A",
  },
  {
    name: "Rubí Suave",
    hex: "#B86D84",
  },
  {
    name: "Coqueteo",
    hex: "#D16965",
  },
  {
    name: "Tañido Cítrico",
    hex: "#D86165",
  },
  {
    name: "Dulce de Frambuesa",
    hex: "#A86D86",
  },
  {
    name: "Secreto",
    hex: "#C55F76",
  },
  {
    name: "Rosa Espléndido",
    hex: "#C95D73",
  },
  {
    name: "Joya Antigua",
    hex: "#AE6B80",
  },
  {
    name: "Fucsia Antiguo",
    hex: "#A8658C",
  },
  {
    name: "Batido Rosado",
    hex: "#BE5385",
  },
  {
    name: "Luz Deslumbrante",
    hex: "#AD588F",
  },
  {
    name: "Flor de Madroño",
    hex: "#CE586C",
  },
  {
    name: "Catarata Fucsia",
    hex: "#C05674",
  },
  {
    name: "Azalea Rosada",
    hex: "#B8537B",
  },
  {
    name: "Extravagante",
    hex: "#B34F83",
  },
  {
    name: "Magnificencia",
    hex: "#C25C67",
  },
  {
    name: "Rosa de Jardín",
    hex: "#A25A85",
  },
  {
    name: "Frutilla",
    hex: "#CA5A59",
  },
  {
    name: "Bella Rosa",
    hex: "#9A6182",
  },
  {
    name: "Arrecife de Coral",
    hex: "#BE5B59",
  },
  {
    name: "Té Danzante",
    hex: "#C15A57",
  },
  {
    name: "Té Danzante",
    hex: "#C15A57",
  },
  {
    name: "Frutos del Bosque",
    hex: "#B5506B",
  },
  {
    name: "Azalea",
    hex: "#9D4F84",
  },
  {
    name: "Estilo Románico",
    hex: "#AA516F",
  },
  {
    name: "Rosa Roja",
    hex: "#BF4F5C",
  },
  {
    name: "Cereza Intenso",
    hex: "#AE5367",
  },
  {
    name: "Cereza Intenso",
    hex: "#AE5367",
  },
  {
    name: "Mousse de Berenjena",
    hex: "#915D79",
  },
  {
    name: "Reflejo de Rosas",
    hex: "#AE486D",
  },
  {
    name: "Rojo Primoroso",
    hex: "#A14C72",
  },
  {
    name: "Pasión Coral",
    hex: "#C9464F",
  },
  {
    name: "Mousse de Granada",
    hex: "#B94657",
  },
  {
    name: "Cereza Brillante",
    hex: "#A54668",
  },
  {
    name: "Rojo Francia",
    hex: "#B94D4D",
  },
  {
    name: "Revolución Rosa",
    hex: "#AA5154",
  },
  {
    name: "Compota de Guayaba",
    hex: "#9E555C",
  },
  {
    name: "Brillo de París",
    hex: "#AC4B57",
  },
  {
    name: "Hibiscus Cálido",
    hex: "#C23F4B",
  },
  {
    name: "Gloria Antigua *",
    hex: "#C8403F",
  },
  {
    name: "Escarlata *",
    hex: "#A6445C",
  },
  {
    name: "Melodía Rosada",
    hex: "#92486C",
  },
  {
    name: "Rosa Osado",
    hex: "#AB4357",
  },
  {
    name: "Viñedo",
    hex: "#82516F",
  },
  {
    name: "Pitanga Helada *",
    hex: "#964561",
  },
  {
    name: "Hibisco Tierno *",
    hex: "#B83944",
  },
  {
    name: "Torero *",
    hex: "#C33A38",
  },
  {
    name: "Frambuesa Radical",
    hex: "#984356",
  },
  {
    name: "Día Feliz",
    hex: "#B33E3F",
  },
  {
    name: "Fucsia Real *",
    hex: "#983660",
  },
  {
    name: "Cereza *",
    hex: "#B23643",
  },
  {
    name: "Frambuesa",
    hex: "#834662",
  },
  {
    name: "Mimos de Frutos Rojos",
    hex: "#863B67",
  },
  {
    name: "Sorpresa Merlot",
    hex: "#8A3F59",
  },
  {
    name: "Rojo Picante *",
    hex: "#9D3352",
  },
  {
    name: "Fresca Remolacha",
    hex: "#744962",
  },
  {
    name: "Fiesta de la Cereza *",
    hex: "#A53248",
  },
  {
    name: "Latido *",
    hex: "#A03547",
  },
  {
    name: "Amor *",
    hex: "#BD2F2C",
  },
  {
    name: "Carmesí Intenso *",
    hex: "#9E3147",
  },
  {
    name: "Frambuesa Silvestre",
    hex: "#7D3761",
  },
  {
    name: "Morado Intenso",
    hex: "#963747",
  },
  {
    name: "Explosión de Pasión *",
    hex: "#942D52",
  },
  {
    name: "Terciopelo Ruso *",
    hex: "#7D395A",
  },
  {
    name: "Lápiz Labial Rojo",
    hex: "#AF332E",
  },
  {
    name: "Rojo Victoriano *",
    hex: "#9C333C",
  },
  {
    name: "Rojo Matiz",
    hex: "#A32E39",
  },
  {
    name: "Anillo de Rubí *",
    hex: "#9B3738",
  },
  {
    name: "Rojo Semáforo",
    hex: "#B02826",
  },
  {
    name: "Rubí Estridente",
    hex: "#A6272F",
  },
  {
    name: "Rojo Carmesí *",
    hex: "#A42B2C",
  },
  {
    name: "Oriental Increíble *",
    hex: "#A6252E",
  },
  {
    name: "Encanto *",
    hex: "#99282C",
  },
  {
    name: "Pitanga Madura *",
    hex: "#91302C",
  },
  {
    name: "Salsa Caliente",
    hex: "#7B2A2E",
  },
  {
    name: "Rubor Intenso",
    hex: "#7C2829",
  },
  {
    name: "Encaje Fino",
    hex: "#EEE8E8",
  },
  {
    name: "Siberia",
    hex: "#ECE9E7",
  },
  {
    name: "Primer Rubor",
    hex: "#EFE8E5",
  },
  {
    name: "Otoño Quemado",
    hex: "#F1E7E4",
  },
  {
    name: "Caracola Acústica",
    hex: "#EFE8E5",
  },
  {
    name: "Rubor Avellana",
    hex: "#EEE8E5",
  },
  {
    name: "Rosa Sospecha",
    hex: "#F2E6E2",
  },
  {
    name: "Encanto Discreto",
    hex: "#EEE7E5",
  },
  {
    name: "Hongo Silvestre",
    hex: "#ECE8E5",
  },
  {
    name: "Rosa Penélope",
    hex: "#EFE7E2",
  },
  {
    name: "Rubor Cocoa",
    hex: "#EBE8E5",
  },
  {
    name: "Vela Aromática",
    hex: "#EAE8E5",
  },
  {
    name: "Luna Creciente",
    hex: "#EDE6E2",
  },
  {
    name: "Espíritu Sereno",
    hex: "#EBE5E5",
  },
  {
    name: "Palacio de Budapest",
    hex: "#F6E3DB",
  },
  {
    name: "Licor de Durazno",
    hex: "#EDE4E2",
  },
  {
    name: "Exótica Sensación",
    hex: "#F0E0D9",
  },
  {
    name: "Pasión Secreta",
    hex: "#EAE1DE",
  },
  {
    name: "Susurro de Luz",
    hex: "#E5DFDE",
  },
  {
    name: "Toques Rosados",
    hex: "#EBDED4",
  },
  {
    name: "Rosa Sedosa",
    hex: "#E5DCDC",
  },
  {
    name: "Nube Rosa",
    hex: "#E7DADB",
  },
  {
    name: "Rubor Nocturno",
    hex: "#E9DAD9",
  },
  {
    name: "Soñador",
    hex: "#E3DDDB",
  },
  {
    name: "Flor de Miel",
    hex: "#ECD9D5",
  },
  {
    name: "Fragancia Dulce",
    hex: "#E2DCDC",
  },
  {
    name: "Polvo de Mármol",
    hex: "#E3DADB",
  },
  {
    name: "Después de la Lluvia",
    hex: "#E5DBD7",
  },
  {
    name: "Después de la Lluvia",
    hex: "#E5DBD7",
  },
  {
    name: "Toque de Lavanda",
    hex: "#E6DAD6",
  },
  {
    name: "Inercia",
    hex: "#E8DCD2",
  },
  {
    name: "Gris Exótico",
    hex: "#E3DAD8",
  },
  {
    name: "Adorable Dama",
    hex: "#E1D1D7",
  },
  {
    name: "Perla de Princesa",
    hex: "#EAD0CF",
  },
  {
    name: "Rosa Menta",
    hex: "#E7CED0",
  },
  {
    name: "Sensación Rojo Cereza",
    hex: "#E6CED0",
  },
  {
    name: "Malva Mineral",
    hex: "#DED1D5",
  },
  {
    name: "Rosa Ballet",
    hex: "#ECCCC8",
  },
  {
    name: "Penélope",
    hex: "#E2CECF",
  },
  {
    name: "Bollo de Pastelera",
    hex: "#E3CFCB",
  },
  {
    name: "Rosa Nuevo",
    hex: "#DECDD0",
  },
  {
    name: "Cielo Ardiente",
    hex: "#DBCFD0",
  },
  {
    name: "Bizcocho Encantado",
    hex: "#DFCFCC",
  },
  {
    name: "Guayaba Suave",
    hex: "#E9CCC5",
  },
  {
    name: "Cielo Ardiente",
    hex: "#DBCFD0",
  },
  {
    name: "Cuero Rosado",
    hex: "#E7CBC7",
  },
  {
    name: "Cuero Rosado",
    hex: "#E7CBC7",
  },
  {
    name: "Blanco Ilusorio",
    hex: "#DCCECE",
  },
  {
    name: "Susurro",
    hex: "#D9CED1",
  },
  {
    name: "Rosa Ceniza",
    hex: "#DFCECB",
  },
  {
    name: "Gaita Francesa",
    hex: "#DBCDCA",
  },
  {
    name: "Helado de Champagne",
    hex: "#DEC7CB",
  },
  {
    name: "Poesía",
    hex: "#DCCCC8",
  },
  {
    name: "Lugar de Afecto",
    hex: "#D6CCCA",
  },
  {
    name: "Lugar de Afecto",
    hex: "#D6CCCA",
  },
  {
    name: "Lugar de Afecto",
    hex: "#D6CCCA",
  },
  {
    name: "Helado Suave",
    hex: "#E4C5C1",
  },
  {
    name: "Mousse de Chocolate",
    hex: "#D8C5C1",
  },
  {
    name: "Rosa Puccini",
    hex: "#D6C0BE",
  },
  {
    name: "Malva de Invierno",
    hex: "#D3BFC1",
  },
  {
    name: "Lazo de Amor",
    hex: "#DDB8B8",
  },
  {
    name: "Malva Suave",
    hex: "#CDB9C3",
  },
  {
    name: "Rosa Restauración",
    hex: "#D6B5B8",
  },
  {
    name: "Bouquet de Rosas",
    hex: "#D0B5BB",
  },
  {
    name: "Inspiración Poética",
    hex: "#E3B3A8",
  },
  {
    name: "Jarrón de Cerámica",
    hex: "#DAB6AB",
  },
  {
    name: "Pabellón Rosa",
    hex: "#D8B2AE",
  },
  {
    name: "Tierra Rosa",
    hex: "#D9B3A6",
  },
  {
    name: "Rosa Marchita",
    hex: "#CEB2AF",
  },
  {
    name: "Vino Suave",
    hex: "#C3B3B8",
  },
  {
    name: "Escultura de Madera",
    hex: "#CBB3AD",
  },
  {
    name: "Escultura de Madera",
    hex: "#CBB3AD",
  },
  {
    name: "Crema de Café",
    hex: "#C8B2B0",
  },
  {
    name: "Porción de Moras",
    hex: "#C1A4A9",
  },
  {
    name: "Elementos Rústicos",
    hex: "#D49C9B",
  },
  {
    name: "Rosa Irlandesa",
    hex: "#C79CA3",
  },
  {
    name: "Flores Marchitas",
    hex: "#D59B96",
  },
  {
    name: "Malva Rosa",
    hex: "#C29CA6",
  },
  {
    name: "Beso Solar",
    hex: "#D99B8E",
  },
  {
    name: "Impresionista",
    hex: "#B6A5A6",
  },
  {
    name: "Fulgor Africano",
    hex: "#C49F9A",
  },
  {
    name: "Delicada Gamuza",
    hex: "#C199A3",
  },
  {
    name: "Fulgor Africano",
    hex: "#C49F9A",
  },
  {
    name: "Fulgor Africano",
    hex: "#C49F9A",
  },
  {
    name: "Rosa Río",
    hex: "#CF9597",
  },
  {
    name: "Sahara Soleado",
    hex: "#D89683",
  },
  {
    name: "Perfume de Higo",
    hex: "#B195A4",
  },
  {
    name: "Santa Rosa",
    hex: "#BC9795",
  },
  {
    name: "Santa Rosa",
    hex: "#BC9795",
  },
  {
    name: "Rosa Colonial",
    hex: "#B18E93",
  },
  {
    name: "Rosa Berberís",
    hex: "#BA838D",
  },
  {
    name: "Rosedal",
    hex: "#B38391",
  },
  {
    name: "Sonata",
    hex: "#A48C95",
  },
  {
    name: "Sombra Mística",
    hex: "#AC8B88",
  },
  {
    name: "Café Místico",
    hex: "#B18B83",
  },
  {
    name: "Rosa Renacentista",
    hex: "#B87C7E",
  },
  {
    name: "Rosa Renacentista",
    hex: "#B87C7E",
  },
  {
    name: "Poema",
    hex: "#9F7E91",
  },
  {
    name: "Rosa Rural",
    hex: "#B27782",
  },
  {
    name: "Romance Rústico",
    hex: "#B97A77",
  },
  {
    name: "Rosa Emoción",
    hex: "#A77987",
  },
  {
    name: "Rosa Madera",
    hex: "#C27470",
  },
  {
    name: "Abundante Rubor",
    hex: "#C57463",
  },
  {
    name: "Dulce Amor",
    hex: "#B9746F",
  },
  {
    name: "Abundante Rubor",
    hex: "#C57463",
  },
  {
    name: "Verano Indio",
    hex: "#BF7567",
  },
  {
    name: "Barroco",
    hex: "#977F82",
  },
  {
    name: "Vino Helado",
    hex: "#977287",
  },
  {
    name: "Tierra de Vino",
    hex: "#A4726D",
  },
  {
    name: "Rojo Envejecido",
    hex: "#AD6368",
  },
  {
    name: "Rojo Mentira",
    hex: "#AD6368",
  },
  {
    name: "Rosa Real",
    hex: "#976876",
  },
  {
    name: "Rosa Capri",
    hex: "#966870",
  },
  {
    name: "Rojo Místico",
    hex: "#856772",
  },
  {
    name: "Cereza Masticable",
    hex: "#A85958",
  },
  {
    name: "Rulo de Chocolate",
    hex: "#85686A",
  },
  {
    name: "Calle de Ladrillos",
    hex: "#93645B",
  },
  {
    name: "Meseta de Diamantes",
    hex: "#8F6360",
  },
  {
    name: "Raíz de Rosal",
    hex: "#816469",
  },
  {
    name: "Arcilla Quemada",
    hex: "#A65B4D",
  },
  {
    name: "Vasija de Terracota",
    hex: "#B05446",
  },
  {
    name: "Vasija de Terracota",
    hex: "#B05446",
  },
  {
    name: "Jalea de Ciruela Claro",
    hex: "#915165",
  },
  {
    name: "Del Monte",
    hex: "#7D596E",
  },
  {
    name: "Rosa Suave",
    hex: "#AA4D4C",
  },
  {
    name: "Salsa *",
    hex: "#9C4C49",
  },
  {
    name: "Pluma Roja",
    hex: "#864F5A",
  },
  {
    name: "Begonia Osada",
    hex: "#8A4B56",
  },
  {
    name: "Higo Suave",
    hex: "#715862",
  },
  {
    name: "Reina",
    hex: "#854459",
  },
  {
    name: "Rojo Henna",
    hex: "#9A4C3C",
  },
  {
    name: "Rojo Henna",
    hex: "#9A4C3C",
  },
  {
    name: "Baño Oriental",
    hex: "#9B3D3F",
  },
  {
    name: "Rojo Tribal",
    hex: "#84474B",
  },
  {
    name: "Rojo Tapiz",
    hex: "#7E434E",
  },
  {
    name: "Caoba Imponente",
    hex: "#973E34",
  },
  {
    name: "Carmín Aterciopelado",
    hex: "#944032",
  },
  {
    name: "Cabernet",
    hex: "#6B4A50",
  },
  {
    name: "Malbec",
    hex: "#734150",
  },
  {
    name: "Virola de Cobre",
    hex: "#79493F",
  },
  {
    name: "Borgoña Vibrante",
    hex: "#6A4253",
  },
  {
    name: "Aroma de Vino",
    hex: "#853643",
  },
  {
    name: "Sangre de Dragón",
    hex: "#6B3C50",
  },
  {
    name: "Chocolate y Pimienta",
    hex: "#823F33",
  },
  {
    name: "Jalea Sueca *",
    hex: "#80373A",
  },
  {
    name: "Terciopelo Escarlata",
    hex: "#743347",
  },
  {
    name: "Rojo Colonia",
    hex: "#783C3A",
  },
  {
    name: "Delicia de Café",
    hex: "#7E3C33",
  },
  {
    name: "Rojo Libertad",
    hex: "#7C3B31",
  },
  {
    name: "Ciruela Salvaje",
    hex: "#683748",
  },
  {
    name: "Sequoia Antigua",
    hex: "#713E34",
  },
  {
    name: "Toque de Ciruela",
    hex: "#603250",
  },
  {
    name: "Berenjena Profundo",
    hex: "#5E354C",
  },
  {
    name: "Pájaro de Fuego",
    hex: "#862A2E",
  },
  {
    name: "Borgoña",
    hex: "#6E3936",
  },
  {
    name: "Marrón Quemado",
    hex: "#6F3B33",
  },
  {
    name: "Orquídea Rubí",
    hex: "#832930",
  },
  {
    name: "Ciruela Osado",
    hex: "#5D3944",
  },
  {
    name: "Uva Francesa *",
    hex: "#752B3A",
  },
  {
    name: "Ciruela Osado",
    hex: "#5D3944",
  },
  {
    name: "Expreso de Oriente *",
    hex: "#782E34",
  },
  {
    name: "Sensación Española",
    hex: "#86252B",
  },
  {
    name: "Jalea de Ciruela Oscuro",
    hex: "#5F373D",
  },
  {
    name: "Vino Clásico",
    hex: "#6B3136",
  },
  {
    name: "Granate Vibrante",
    hex: "#68303A",
  },
  {
    name: "Marrón Intenso",
    hex: "#722F2E",
  },
  {
    name: "Clarete Californiano",
    hex: "#71312C",
  },
  {
    name: "Rojo Tierra",
    hex: "#6B2C31",
  },
  {
    name: "Caoba Envejecido",
    hex: "#623133",
  },
  {
    name: "Chocolate con Chili",
    hex: "#603231",
  },
  {
    name: "Granadero",
    hex: "#533236",
  },
  {
    name: "Vino de Mesa",
    hex: "#503137",
  },
  {
    name: "Casis Jugoso",
    hex: "#492D35",
  },
  {
    name: "Sinfonía Granate",
    hex: "#4E2A30",
  },
  {
    name: "Primer Amanecer",
    hex: "#F3EDE8",
  },
  {
    name: "Talco de Bebé",
    hex: "#F8E8DC",
  },
  {
    name: "Esencia de Rosa",
    hex: "#EFE7E3",
  },
  {
    name: "Mañana Exuberante",
    hex: "#F4E8DA",
  },
  {
    name: "Durazno Blanco",
    hex: "#F4E8DA",
  },
  {
    name: "Toque de Melaza",
    hex: "#FAE7D3",
  },
  {
    name: "Adorable Durazno",
    hex: "#F4E6DA",
  },
  {
    name: "Rosa Azúcar",
    hex: "#F0E5DE",
  },
  {
    name: "Campos de Algodón",
    hex: "#F4E5D9",
  },
  {
    name: "Susurro de Ángeles",
    hex: "#F3E6D9",
  },
  {
    name: "Aurora",
    hex: "#F4E5D7",
  },
  {
    name: "Rosa Alabastro",
    hex: "#F2E2D9",
  },
  {
    name: "Caracola del Mar",
    hex: "#F7E2D3",
  },
  {
    name: "Orquídea Durazno",
    hex: "#F4E4D2",
  },
  {
    name: "Rosa Mimosa",
    hex: "#F5DCD3",
  },
  {
    name: "Rubor Leve",
    hex: "#F5DCD0",
  },
  {
    name: "Crepe de Naranja",
    hex: "#FAE0C3",
  },
  {
    name: "Talco Rosado",
    hex: "#F4D9D0",
  },
  {
    name: "Toallas Mullidas",
    hex: "#EFDCD2",
  },
  {
    name: "Champagne Rosado",
    hex: "#F4D8CE",
  },
  {
    name: "Biscuit Durazno",
    hex: "#F3D9CD",
  },
  {
    name: "Goma de Mascar",
    hex: "#F5DFC4",
  },
  {
    name: "Durazno Intenso",
    hex: "#F8D7C3",
  },
  {
    name: "Polvo de Durazno",
    hex: "#F9DBBD",
  },
  {
    name: "Durazno Rosado",
    hex: "#F2D4C2",
  },
  {
    name: "Soplo de Durazno",
    hex: "#F4D4BF",
  },
  {
    name: "Durazno Pasión",
    hex: "#F8CEC0",
  },
  {
    name: "Juegos de Bebés",
    hex: "#F4D1C1",
  },
  {
    name: "Arena de Bali",
    hex: "#F3D4BD",
  },
  {
    name: "Papaya",
    hex: "#F8D6B3",
  },
  {
    name: "Luz de Durazno",
    hex: "#F1D6BA",
  },
  {
    name: "Gengibre Cristalizado",
    hex: "#FED6AB",
  },
  {
    name: "Luz de la Alborada",
    hex: "#F2CEBE",
  },
  {
    name: "Rosa Vino",
    hex: "#EECCC4",
  },
  {
    name: "Flor de Naranja",
    hex: "#F9D1AA",
  },
  {
    name: "Sol Poniente",
    hex: "#F4C4BA",
  },
  {
    name: "Durazno Especial",
    hex: "#FBCAAA",
  },
  {
    name: "Sidra de Naranja",
    hex: "#F3CCB0",
  },
  {
    name: "Granada Perfumada",
    hex: "#F3C7B3",
  },
  {
    name: "Bronce Antílope",
    hex: "#F0C8B0",
  },
  {
    name: "Salmón Sensacional",
    hex: "#F3C0A9",
  },
  {
    name: "Durazno Notorio",
    hex: "#EEC4A9",
  },
  {
    name: "Sensación Siena",
    hex: "#F1BCA9",
  },
  {
    name: "Rosa Salmón",
    hex: "#F1BCA4",
  },
  {
    name: "Néctar de Damasco",
    hex: "#FEC68D",
  },
  {
    name: "Flor de Coral",
    hex: "#F2B4A9",
  },
  {
    name: "Papaya Sabrosa",
    hex: "#FFBB93",
  },
  {
    name: "Frambuesa Americana",
    hex: "#F9C292",
  },
  {
    name: "Durazno Batido",
    hex: "#F6B99D",
  },
  {
    name: "Infusión Terracota",
    hex: "#FABC90",
  },
  {
    name: "Tinte de Flamenco",
    hex: "#F7ACA1",
  },
  {
    name: "Toque de Damasco",
    hex: "#F0BC94",
  },
  {
    name: "Torbellino de Durazno",
    hex: "#F2B895",
  },
  {
    name: "Ritual Rosado",
    hex: "#EFB499",
  },
  {
    name: "Villa Toscana",
    hex: "#FFBE7A",
  },
  {
    name: "Tierra del Durazno",
    hex: "#F0B195",
  },
  {
    name: "Reflejo de Salmón",
    hex: "#EDA798",
  },
  {
    name: "Durazno Delicioso",
    hex: "#F6B180",
  },
  {
    name: "Crema de Pitanga",
    hex: "#F6A58B",
  },
  {
    name: "Cactus Navideño",
    hex: "#F1A888",
  },
  {
    name: "Durazno Etéreo",
    hex: "#EEA986",
  },
  {
    name: "Jugo de Durazno",
    hex: "#F4A481",
  },
  {
    name: "Mamón Papaya",
    hex: "#EBA984",
  },
  {
    name: "Durazno Vital",
    hex: "#F8A476",
  },
  {
    name: "Melón Anaranjado",
    hex: "#F4AC71",
  },
  {
    name: "Citrus",
    hex: "#FFAE62",
  },
  {
    name: "Durazno Maduro",
    hex: "#ECA779",
  },
  {
    name: "Atardecer en Colorado",
    hex: "#EBAA76",
  },
  {
    name: "Ponche de Durazno",
    hex: "#F09D7C",
  },
  {
    name: "Rosa Adobe",
    hex: "#E19B8D",
  },
  {
    name: "Salmón Fresco",
    hex: "#EC9486",
  },
  {
    name: "Coral Naranja",
    hex: "#F39578",
  },
  {
    name: "Amante",
    hex: "#E99B78",
  },
  {
    name: "Abanico Marino",
    hex: "#F5A265",
  },
  {
    name: "Ola de Calor",
    hex: "#E79D75",
  },
  {
    name: "Naranja Folclore",
    hex: "#EC9F6C",
  },
  {
    name: "Fantasía de Júpiter",
    hex: "#E8A06C",
  },
  {
    name: "Rosa Durazno",
    hex: "#DE8F7F",
  },
  {
    name: "Jengibre Jamaiquino",
    hex: "#E09B6C",
  },
  {
    name: "Melodía de la Tierra",
    hex: "#E58A77",
  },
  {
    name: "Salmón Suave",
    hex: "#E5906A",
  },
  {
    name: "Pizca de Durazno",
    hex: "#E18479",
  },
  {
    name: "Mandarina",
    hex: "#F19754",
  },
  {
    name: "Valencia",
    hex: "#E29859",
  },
  {
    name: "Mandarina Deliciosa",
    hex: "#E68D5A",
  },
  {
    name: "Pleno Florecer",
    hex: "#E9855D",
  },
  {
    name: "Templo",
    hex: "#E3865D",
  },
  {
    name: "Celebración",
    hex: "#E47969",
  },
  {
    name: "Algodón de la India",
    hex: "#E18959",
  },
  {
    name: "Naranja del Desierto",
    hex: "#F08948",
  },
  {
    name: "Sol de Samoa",
    hex: "#E58C4F",
  },
  {
    name: "Naranja Efímero",
    hex: "#ED8B45",
  },
  {
    name: "Mandarín Exótico",
    hex: "#F37C4B",
  },
  {
    name: "Mamón Escarchado",
    hex: "#DA8953",
  },
  {
    name: "Cinabrio",
    hex: "#DD7B59",
  },
  {
    name: "Coral Oriental",
    hex: "#E16F5F",
  },
  {
    name: "Casa Bonita",
    hex: "#D47A5C",
  },
  {
    name: "Flamenco Antiguo",
    hex: "#D27563",
  },
  {
    name: "Amapola Oriental",
    hex: "#E0843F",
  },
  {
    name: "Gloria de la Cosecha",
    hex: "#DD883A",
  },
  {
    name: "Duelo Tanguero *",
    hex: "#F17831",
  },
  {
    name: "Jazz de Bongo",
    hex: "#E16553",
  },
  {
    name: "Aroma de Madera",
    hex: "#D77E44",
  },
  {
    name: "Rayas de Tigre",
    hex: "#D38043",
  },
  {
    name: "Cosecha de Especias",
    hex: "#DA783E",
  },
  {
    name: "Atardecer Caribeño",
    hex: "#DE6546",
  },
  {
    name: "Ave Exótica",
    hex: "#DC703D",
  },
  {
    name: "Tulipán Africano",
    hex: "#CD6555",
  },
  {
    name: "Cidro Hirviente",
    hex: "#CC6D4B",
  },
  {
    name: "Sabor a Tango",
    hex: "#CC6552",
  },
  {
    name: "Naranjal *",
    hex: "#E2712B",
  },
  {
    name: "Topacio Soleado *",
    hex: "#D77E29",
  },
  {
    name: "Naranja Fiesta *",
    hex: "#E56E27",
  },
  {
    name: "Caminatas Otoñales",
    hex: "#D06740",
  },
  {
    name: "Caminatas Otoñales",
    hex: "#D06740",
  },
  {
    name: "Caminatas Otoñales",
    hex: "#D06740",
  },
  {
    name: "Sol Ardiente *",
    hex: "#E16233",
  },
  {
    name: "Bronce Fundido",
    hex: "#CC7436",
  },
  {
    name: "Licor de Naranja *",
    hex: "#DC7525",
  },
  {
    name: "Mandarín",
    hex: "#D4623C",
  },
  {
    name: "Estallido de Azafrán",
    hex: "#C77338",
  },
  {
    name: "Caqui Naranja",
    hex: "#D96630",
  },
  {
    name: "Rojo Insignia",
    hex: "#CA5B4A",
  },
  {
    name: "Llama del Atardecer *",
    hex: "#D4692E",
  },
  {
    name: "Caleidoscopio",
    hex: "#D66B29",
  },
  {
    name: "Polen de Lila",
    hex: "#CD6F27",
  },
  {
    name: "Naranja en Llamas *",
    hex: "#D35338",
  },
  {
    name: "Naranja en Llamas *",
    hex: "#D35338",
  },
  {
    name: "Fuegos Artificiales *",
    hex: "#DA5D23",
  },
  {
    name: "Rojo Cardenal *",
    hex: "#CF4D3D",
  },
  {
    name: "Aderezo Caribeño",
    hex: "#C86C25",
  },
  {
    name: "Dulce de Zapallo",
    hex: "#C37120",
  },
  {
    name: "Tierra Egipcia",
    hex: "#C16130",
  },
  {
    name: "Shangai *",
    hex: "#CD4A38",
  },
  {
    name: "Naranja Chino *",
    hex: "#D04F27",
  },
  {
    name: "Caqui Maduro *",
    hex: "#BE5A2B",
  },
  {
    name: "Ralladura de Naranja *",
    hex: "#CA5322",
  },
  {
    name: "Rojo Routelle",
    hex: "#B9483C",
  },
  {
    name: "Lugar de Fiesta *",
    hex: "#C8402F",
  },
  {
    name: "Cobre Anaranjado",
    hex: "#B25431",
  },
  {
    name: "Horno Ardiente",
    hex: "#AE5138",
  },
  {
    name: "Sensación Cereza *",
    hex: "#C33F28",
  },
  {
    name: "Rojo Pekín",
    hex: "#B54131",
  },
  {
    name: "Llama Antigua *",
    hex: "#A34140",
  },
  {
    name: "Pimiento *",
    hex: "#AB392B",
  },
  {
    name: "Rojo Vesubio *",
    hex: "#A43E2D",
  },
  {
    name: "Teatro de Títeres",
    hex: "#A23530",
  },
  {
    name: "Seda Suculenta",
    hex: "#F2EBE3",
  },
  {
    name: "Beso Suave",
    hex: "#F2E7DF",
  },
  {
    name: "Nacarado",
    hex: "#F0E8E0",
  },
  {
    name: "Fractal",
    hex: "#F0E8DF",
  },
  {
    name: "Licor de Pitanga",
    hex: "#F3E3DA",
  },
  {
    name: "Momento Primaveral",
    hex: "#F0E4DB",
  },
  {
    name: "Durazno Real",
    hex: "#F1E4D7",
  },
  {
    name: "Marea Blanca",
    hex: "#EDE1D5",
  },
  {
    name: "Toque de Azúcar",
    hex: "#F1E1CF",
  },
  {
    name: "Seda Durazno",
    hex: "#F5DECE",
  },
  {
    name: "Yogur de Durazno",
    hex: "#F4DDCC",
  },
  {
    name: "Bizcocho de Castaña",
    hex: "#EFDDD1",
  },
  {
    name: "Blanco Anís",
    hex: "#EDDCD2",
  },
  {
    name: "Fantasía Calma",
    hex: "#EFDCCF",
  },
  {
    name: "Copos de Arroz",
    hex: "#EFDFCB",
  },
  {
    name: "Duraznero",
    hex: "#F3DDC9",
  },
  {
    name: "Rosa Bata",
    hex: "#EDDAD1",
  },
  {
    name: "Inspiración",
    hex: "#E7DCD5",
  },
  {
    name: "Polvo de Arroz",
    hex: "#E9DCD3",
  },
  {
    name: "Fuente de Juventud",
    hex: "#EBDCD0",
  },
  {
    name: "Mañana Luminosa",
    hex: "#F0DCC9",
  },
  {
    name: "Papel Reciclado",
    hex: "#ECDBCD",
  },
  {
    name: "Nube Angelical",
    hex: "#E5D9D4",
  },
  {
    name: "Pétalo de Rosa",
    hex: "#E7DBD0",
  },
  {
    name: "Gamuza Rosa",
    hex: "#E5DAD3",
  },
  {
    name: "Algodón Crudo",
    hex: "#E8DBCE",
  },
  {
    name: "Eternidad",
    hex: "#E6D8D1",
  },
  {
    name: "Durazno Matinal",
    hex: "#EED3C1",
  },
  {
    name: "Rosa Ópera",
    hex: "#EAD2C3",
  },
  {
    name: "Sensación de Arena",
    hex: "#E1D2CA",
  },
  {
    name: "Biscuit Naranja",
    hex: "#EBCFC2",
  },
  {
    name: "Secreto Oculto",
    hex: "#E7D0C3",
  },
  {
    name: "Rosa Poción",
    hex: "#EACDC2",
  },
  {
    name: "Dulce Rubor",
    hex: "#EACEC0",
  },
  {
    name: "Cuento Nostálgico",
    hex: "#E4D1C2",
  },
  {
    name: "Almendra Suave",
    hex: "#E1D0C3",
  },
  {
    name: "Rosa Pueblo",
    hex: "#E3CCC3",
  },
  {
    name: "Mousse de Galletita",
    hex: "#EDD0AE",
  },
  {
    name: "Arena de Canoa",
    hex: "#E1CBBE",
  },
  {
    name: "Vara de Mimbre",
    hex: "#EED0AC",
  },
  {
    name: "Mousse de Durazno",
    hex: "#EFCCAB",
  },
  {
    name: "Diosa del Durazno",
    hex: "#E9C9B2",
  },
  {
    name: "Travertino",
    hex: "#DFC6B0",
  },
  {
    name: "Terraplén",
    hex: "#E7C4A6",
  },
  {
    name: "Rosa del Desierto",
    hex: "#D6BFB7",
  },
  {
    name: "Coral Real",
    hex: "#E1BCA7",
  },
  {
    name: "Rubor Naranja",
    hex: "#E4B8A5",
  },
  {
    name: "Comino",
    hex: "#DCBEA4",
  },
  {
    name: "Piel Auténtica",
    hex: "#D8BCAA",
  },
  {
    name: "Flor de Loto",
    hex: "#E5B4A3",
  },
  {
    name: "Calor del Desierto",
    hex: "#E1B7A3",
  },
  {
    name: "Aguada de Siena",
    hex: "#DBB6A6",
  },
  {
    name: "Pera Silvestre",
    hex: "#EAB696",
  },
  {
    name: "Amarillo Dulce",
    hex: "#E7B794",
  },
  {
    name: "Siesta Relajante",
    hex: "#CCB19F",
  },
  {
    name: "Trigo Dorado",
    hex: "#E6B580",
  },
  {
    name: "Almendras a la Miel",
    hex: "#D6AD97",
  },
  {
    name: "Reflejo de Coral",
    hex: "#DCA896",
  },
  {
    name: "Dulce Nougat",
    hex: "#E3B383",
  },
  {
    name: "Trigo Suave",
    hex: "#D1B098",
  },
  {
    name: "Muffin",
    hex: "#D6A78A",
  },
  {
    name: "Melón Perfumado",
    hex: "#D9A387",
  },
  {
    name: "Mañana del Desierto",
    hex: "#DC9C86",
  },
  {
    name: "Pasta de Maní",
    hex: "#E0A678",
  },
  {
    name: "Trigo Integral",
    hex: "#D99F7A",
  },
  {
    name: "Otoño Cálido",
    hex: "#D8967B",
  },
  {
    name: "Tesoro de Córcega",
    hex: "#D2A074",
  },
  {
    name: "Miel de Crème Brûlée",
    hex: "#D09D6E",
  },
  {
    name: "Colinas Rodantes",
    hex: "#C49A7A",
  },
  {
    name: "Sombra de Cedro",
    hex: "#CC907B",
  },
  {
    name: "Sombra de Cedro",
    hex: "#CC907B",
  },
  {
    name: "Cáscara de Cebolla",
    hex: "#BE9B7C",
  },
  {
    name: "Polvo de Marte",
    hex: "#CF966E",
  },
  {
    name: "Sonora",
    hex: "#C1957D",
  },
  {
    name: "Coral del Mar",
    hex: "#CD8E6C",
  },
  {
    name: "Panal de Miel",
    hex: "#D8935B",
  },
  {
    name: "Camino de Arces",
    hex: "#D08E61",
  },
  {
    name: "Cuero Auténtico",
    hex: "#B48D7C",
  },
  {
    name: "Suela",
    hex: "#AF907B",
  },
  {
    name: "Moca Suave",
    hex: "#C2886B",
  },
  {
    name: "Moca Suave",
    hex: "#C2886B",
  },
  {
    name: "Árbol Otoñal",
    hex: "#BF8E63",
  },
  {
    name: "Árbol Otoñal",
    hex: "#BF8E63",
  },
  {
    name: "Tierra del Fuego",
    hex: "#CD8161",
  },
  {
    name: "Tierra del Fuego",
    hex: "#CD8161",
  },
  {
    name: "Bronce Montura",
    hex: "#C58961",
  },
  {
    name: "Bronceado Dorado",
    hex: "#D48B4C",
  },
  {
    name: "Néctar Dorado",
    hex: "#CD8555",
  },
  {
    name: "Muros de Arcilla",
    hex: "#AF7F6B",
  },
  {
    name: "Extremo Sur",
    hex: "#C2794F",
  },
  {
    name: "Extremo Sur",
    hex: "#C2794F",
  },
  {
    name: "Rubor de Otoño",
    hex: "#B37A54",
  },
  {
    name: "Floresta",
    hex: "#AD7A51",
  },
  {
    name: "Macchiato Matutino",
    hex: "#BB7546",
  },
  {
    name: "Macchiato Matutino",
    hex: "#BB7546",
  },
  {
    name: "Ambar Terroso",
    hex: "#B86C51",
  },
  {
    name: "Vasija de Arcilla",
    hex: "#AD6C55",
  },
  {
    name: "Vasija de Arcilla",
    hex: "#AD6C55",
  },
  {
    name: "Naranja Pekín",
    hex: "#BE6B44",
  },
  {
    name: "Relieve en Cobre",
    hex: "#A27653",
  },
  {
    name: "Teja Continental",
    hex: "#AE684A",
  },
  {
    name: "Teja Continental",
    hex: "#AE684A",
  },
  {
    name: "Deleite de Caramelo",
    hex: "#A17247",
  },
  {
    name: "Cobre Suave",
    hex: "#976856",
  },
  {
    name: "Cobre Suave",
    hex: "#976856",
  },
  {
    name: "Cappuccino",
    hex: "#9E7043",
  },
  {
    name: "Cappuccino",
    hex: "#9E7043",
  },
  {
    name: "Té de la India",
    hex: "#B4662F",
  },
  {
    name: "Licor de Chocolate",
    hex: "#A4673C",
  },
  {
    name: "Marrón Ardilla",
    hex: "#A55E43",
  },
  {
    name: "Moneda de Cobre",
    hex: "#AE6335",
  },
  {
    name: "Joya Barroca",
    hex: "#AE6830",
  },
  {
    name: "Caramelo Picante",
    hex: "#A75B34",
  },
  {
    name: "Herrumbre",
    hex: "#AE562D",
  },
  {
    name: "Cordobés",
    hex: "#8C5B48",
  },
  {
    name: "Danza en la Arena *",
    hex: "#9A5C38",
  },
  {
    name: "Sueño Sevillano",
    hex: "#A25D2C",
  },
  {
    name: "Tesoro Valioso *",
    hex: "#9F5E2E",
  },
  {
    name: "Rojo Alfarero",
    hex: "#9A5238",
  },
  {
    name: "Dorado Antiguo",
    hex: "#995F2C",
  },
  {
    name: "Bosque en Llamas",
    hex: "#8E5637",
  },
  {
    name: "Castaña Española",
    hex: "#8F5833",
  },
  {
    name: "Fogón de Leña",
    hex: "#994C33",
  },
  {
    name: "Casa de Jengibre",
    hex: "#84563C",
  },
  {
    name: "Verano Siciliano",
    hex: "#8B4C3F",
  },
  {
    name: "Rojizo Profundo *",
    hex: "#954F2E",
  },
  {
    name: "Bruma de Expresso",
    hex: "#8A5631",
  },
  {
    name: "Licor de Café",
    hex: "#70563E",
  },
  {
    name: "Tobogán de Lodo",
    hex: "#864833",
  },
  {
    name: "Caramelo de Chocolate",
    hex: "#7A4D3A",
  },
  {
    name: "Caramelo de Chocolate",
    hex: "#7A4D3A",
  },
  {
    name: "Especia Fuerte",
    hex: "#874531",
  },
  {
    name: "Castaña de Otoño",
    hex: "#7E4D32",
  },
  {
    name: "Fango del Missisippi",
    hex: "#735237",
  },
  {
    name: "Pimienta Ardiente",
    hex: "#794532",
  },
  {
    name: "Ladrillo Rojo",
    hex: "#724232",
  },
  {
    name: "Sensación Espacial",
    hex: "#FAEBD1",
  },
  {
    name: "Durazno Helado",
    hex: "#F6E9D5",
  },
  {
    name: "Fulgor de Luz",
    hex: "#FAE8D1",
  },
  {
    name: "Blanco Caracola",
    hex: "#F5E9D4",
  },
  {
    name: "Almendra Azucarada",
    hex: "#F4E9D4",
  },
  {
    name: "Pura Luz",
    hex: "#F4EAD1",
  },
  {
    name: "Crema Uniforme",
    hex: "#F5E8D2",
  },
  {
    name: "Blanco Pochoclo",
    hex: "#F9E9CB",
  },
  {
    name: "Marfil Palacio",
    hex: "#F6E8CF",
  },
  {
    name: "Trigo",
    hex: "#F5E6D1",
  },
  {
    name: "Insinuación Dorada",
    hex: "#F6E5D0",
  },
  {
    name: "Amarillo Bebé",
    hex: "#F6E7CD",
  },
  {
    name: "Leche de Coco",
    hex: "#F4E7CE",
  },
  {
    name: "Lirio de Pascua",
    hex: "#F3E7CE",
  },
  {
    name: "Marfil Fresco",
    hex: "#F3E5CE",
  },
  {
    name: "Caña de Azúcar",
    hex: "#F4E6C9",
  },
  {
    name: "Primera Luz",
    hex: "#F5E5C7",
  },
  {
    name: "Roma",
    hex: "#F5E2C9",
  },
  {
    name: "Joven Celebridad",
    hex: "#F8E5C2",
  },
  {
    name: "Toque de Crème Brûlée",
    hex: "#F6E0C9",
  },
  {
    name: "Amarillo Luminaria",
    hex: "#FBE3BD",
  },
  {
    name: "Dilución de Azafrán",
    hex: "#FEE1BC",
  },
  {
    name: "Burbuja de Champaña",
    hex: "#F6E4BF",
  },
  {
    name: "Durazno Cálido",
    hex: "#F3DEC8",
  },
  {
    name: "Crema de Vainilla",
    hex: "#F9E3BC",
  },
  {
    name: "Cera de Vela",
    hex: "#F4E1C0",
  },
  {
    name: "Crema de Maracuyá",
    hex: "#F5E1BE",
  },
  {
    name: "Dejo de Durazno",
    hex: "#F8DCBB",
  },
  {
    name: "Reflejo de Luz Solar",
    hex: "#F2DEBE",
  },
  {
    name: "Vainilla Almendrada",
    hex: "#FBDCB1",
  },
  {
    name: "Luna de Otoño",
    hex: "#F8DEB1",
  },
  {
    name: "Enaltecer",
    hex: "#FADEAE",
  },
  {
    name: "Panqueque",
    hex: "#F9DFAD",
  },
  {
    name: "Toque de Néctar",
    hex: "#FBDCAE",
  },
  {
    name: "Durazno con Chantilly",
    hex: "#FADBAF",
  },
  {
    name: "Amanecer Otoñal",
    hex: "#FAD9AF",
  },
  {
    name: "Renacer",
    hex: "#FADEAA",
  },
  {
    name: "Mandarina Blanca",
    hex: "#F5D6B5",
  },
  {
    name: "Sentimiento de Verano",
    hex: "#FEDFA1",
  },
  {
    name: "Estrella Fugaz",
    hex: "#FADAA1",
  },
  {
    name: "Amanecer Damasco",
    hex: "#FFD997",
  },
  {
    name: "Mousse de Naranja",
    hex: "#EFCFAD",
  },
  {
    name: "Amanecer Norteño",
    hex: "#FDD29B",
  },
  {
    name: "Arcilla Sabia",
    hex: "#F6CEA2",
  },
  {
    name: "Calabacín",
    hex: "#FFCF95",
  },
  {
    name: "Junquillo",
    hex: "#FED58F",
  },
  {
    name: "Jengibre Durazno",
    hex: "#FBD295",
  },
  {
    name: "Durazno Pálido",
    hex: "#FFD090",
  },
  {
    name: "Melón Persa",
    hex: "#FDD28D",
  },
  {
    name: "Sensación Estival",
    hex: "#FAD587",
  },
  {
    name: "Deleite de Resplandor",
    hex: "#FBD388",
  },
  {
    name: "Mousse de Mango",
    hex: "#F2C89B",
  },
  {
    name: "Esencia de Oriente",
    hex: "#EFC89B",
  },
  {
    name: "Desfile Anaranjado",
    hex: "#F3C49B",
  },
  {
    name: "Rayo de Luz",
    hex: "#F8D483",
  },
  {
    name: "Pera Madura",
    hex: "#FFCE7D",
  },
  {
    name: "Sensación de Azafrán",
    hex: "#FDC582",
  },
  {
    name: "Día Dorado",
    hex: "#FFCF73",
  },
  {
    name: "Naranja Pálido",
    hex: "#FAC681",
  },
  {
    name: "Puesta del Sol Dorada",
    hex: "#FDCB77",
  },
  {
    name: "Dunas Deslumbrantes",
    hex: "#FFCF6E",
  },
  {
    name: "Galleta de Caramelo",
    hex: "#EEBF8B",
  },
  {
    name: "Estrella Diurna",
    hex: "#F1C184",
  },
  {
    name: "Rayos de Sol",
    hex: "#FFCA69",
  },
  {
    name: "Nuez",
    hex: "#ECBA8B",
  },
  {
    name: "Fresco Romano",
    hex: "#FBBD71",
  },
  {
    name: "Popurrí Veraniego",
    hex: "#F4C272",
  },
  {
    name: "Plaza Soleada",
    hex: "#F9BF70",
  },
  {
    name: "Oro del Faraón",
    hex: "#FCC367",
  },
  {
    name: "Hierba de Pradera",
    hex: "#EFC076",
  },
  {
    name: "Onda Ambar",
    hex: "#EEBA7D",
  },
  {
    name: "Amarillo Glorioso",
    hex: "#F3BA6F",
  },
  {
    name: "Polvo Solar",
    hex: "#EABE73",
  },
  {
    name: "Mango Tropical",
    hex: "#FDBA61",
  },
  {
    name: "Pinza de Cangrejo",
    hex: "#EDB370",
  },
  {
    name: "Del Sol",
    hex: "#FCBB58",
  },
  {
    name: "Lirio",
    hex: "#F9B462",
  },
  {
    name: "Naranja Orgánica",
    hex: "#FCAE63",
  },
  {
    name: "Fervor Amarillo",
    hex: "#FFC04D",
  },
  {
    name: "Chispazo de Topacio",
    hex: "#FBB758",
  },
  {
    name: "Sensación de Mango",
    hex: "#F7B260",
  },
  {
    name: "Diente de León",
    hex: "#FFC247",
  },
  {
    name: "Dorado Caliente",
    hex: "#F1BC59",
  },
  {
    name: "Damasco",
    hex: "#E6A96F",
  },
  {
    name: "Cometa Harley",
    hex: "#FFB549",
  },
  {
    name: "Arena Seductora",
    hex: "#EAB45D",
  },
  {
    name: "Luna Agreste",
    hex: "#EBAE62",
  },
  {
    name: "Arenas de Barbados",
    hex: "#FBB847",
  },
  {
    name: "Asia",
    hex: "#FAB248",
  },
  {
    name: "Ave del Paraíso",
    hex: "#F8A850",
  },
  {
    name: "Amanecer Azteca *",
    hex: "#FFBA35",
  },
  {
    name: "Esplendor",
    hex: "#FFBE31",
  },
  {
    name: "Fiesta",
    hex: "#FFAF3E",
  },
  {
    name: "Brillo de Fuego",
    hex: "#F1AA4A",
  },
  {
    name: "Llama de Gas",
    hex: "#FEA93A",
  },
  {
    name: "Carnaval",
    hex: "#E8A553",
  },
  {
    name: "Tono Dorado",
    hex: "#E6AF47",
  },
  {
    name: "Oro Real *",
    hex: "#FFBA1F",
  },
  {
    name: "Dulce de Naranja",
    hex: "#F7A835",
  },
  {
    name: "Pez Naranja",
    hex: "#F79A38",
  },
  {
    name: "Gota de Miel",
    hex: "#E09851",
  },
  {
    name: "Zanahoria",
    hex: "#F49839",
  },
  {
    name: "Sol Dorado *",
    hex: "#F8AF1C",
  },
  {
    name: "Surfeando Dunas",
    hex: "#DCA440",
  },
  {
    name: "Explosión Estelar *",
    hex: "#FEAB13",
  },
  {
    name: "Aceite Vegetal",
    hex: "#E39931",
  },
  {
    name: "Pascua Glamorosa *",
    hex: "#F5B700",
  },
  {
    name: "Dios Sol *",
    hex: "#FFA405",
  },
  {
    name: "Caléndula *",
    hex: "#F3951B",
  },
  {
    name: "Amor de Manzana",
    hex: "#CB983B",
  },
  {
    name: "Amarillo Arizona *",
    hex: "#E09321",
  },
  {
    name: "Zapallo",
    hex: "#D88A30",
  },
  {
    name: "Arenas de Marruecos *",
    hex: "#EB8621",
  },
  {
    name: "Luces Teatrales *",
    hex: "#E2AE00",
  },
  {
    name: "Naranja Explosivo *",
    hex: "#F18517",
  },
  {
    name: "Efecto Melaza *",
    hex: "#E3901A",
  },
  {
    name: "Calabaza *",
    hex: "#D98C1D",
  },
  {
    name: "Mostaza Especiada *",
    hex: "#D79413",
  },
  {
    name: "Oro Holandés",
    hex: "#C88326",
  },
  {
    name: "Cálido Resplandor *",
    hex: "#E19000",
  },
  {
    name: "Ambar Dorado *",
    hex: "#CE8121",
  },
  {
    name: "Neblina de Verano",
    hex: "#F6EBD3",
  },
  {
    name: "Tonos de Arcilla",
    hex: "#F2E6DB",
  },
  {
    name: "Caracola de Ensenada",
    hex: "#F4E7D4",
  },
  {
    name: "Damasco Limpio",
    hex: "#F6E5D4",
  },
  {
    name: "Playa",
    hex: "#F0E3D2",
  },
  {
    name: "Naturaleza Viva",
    hex: "#EDE1D0",
  },
  {
    name: "Columnata Durazno",
    hex: "#F3DFC9",
  },
  {
    name: "Durazno de Porcelana",
    hex: "#F0DECC",
  },
  {
    name: "Melón",
    hex: "#F5DEC5",
  },
  {
    name: "Cielo Mostaza",
    hex: "#ECDFCA",
  },
  {
    name: "Desierto de Atacama",
    hex: "#ECDFCA",
  },
  {
    name: "Planicie Africana",
    hex: "#E8DECB",
  },
  {
    name: "Blanco Macadamia",
    hex: "#F0DEC2",
  },
  {
    name: "Hilo Crema",
    hex: "#F4DDBE",
  },
  {
    name: "Seda de Marfil",
    hex: "#E8DCC9",
  },
  {
    name: "Blanco Hueso",
    hex: "#E7DBCB",
  },
  {
    name: "Lana Alpina",
    hex: "#EBDBC5",
  },
  {
    name: "Cabello de Chala",
    hex: "#F8DFB2",
  },
  {
    name: "Leyenda Indígena",
    hex: "#E9DBC5",
  },
  {
    name: "Sisal",
    hex: "#E7D9C7",
  },
  {
    name: "Arena Fina",
    hex: "#F6D8B8",
  },
  {
    name: "Blanco Prisma",
    hex: "#E2D8C9",
  },
  {
    name: "Helado de Mango",
    hex: "#F4D8B6",
  },
  {
    name: "Lino Blanco",
    hex: "#E9D8BE",
  },
  {
    name: "Estopa",
    hex: "#E1D4C6",
  },
  {
    name: "Lino Americano",
    hex: "#E8D4BC",
  },
  {
    name: "Leche y Miel",
    hex: "#E8D3BD",
  },
  {
    name: "Crema de Bavaria",
    hex: "#EBD4B9",
  },
  {
    name: "Toque de Crema",
    hex: "#E7D4BC",
  },
  {
    name: "Amarillo Luminoso",
    hex: "#EFD5AE",
  },
  {
    name: "Nougat de Caramelo",
    hex: "#ECD5AF",
  },
  {
    name: "Fantasía Malva",
    hex: "#E1CFBE",
  },
  {
    name: "Marfil Crema",
    hex: "#E9D2B0",
  },
  {
    name: "Beige Lana",
    hex: "#E4CFB1",
  },
  {
    name: "Amarillo Dakota",
    hex: "#E5CDAF",
  },
  {
    name: "Neutro Maya",
    hex: "#E3CAAF",
  },
  {
    name: "Blanco Ostra",
    hex: "#DFCCB1",
  },
  {
    name: "Nuez Moscada Tenue",
    hex: "#E4CAA7",
  },
  {
    name: "Licor de Whisky",
    hex: "#E6CAA1",
  },
  {
    name: "Maíz Indio",
    hex: "#EFC898",
  },
  {
    name: "Junco",
    hex: "#EAC79C",
  },
  {
    name: "Dorado Suave",
    hex: "#F0CB90",
  },
  {
    name: "Licor de Crema",
    hex: "#E4C39F",
  },
  {
    name: "Tela Bordada",
    hex: "#D9C3A4",
  },
  {
    name: "Mostaza Tenue",
    hex: "#EBC68E",
  },
  {
    name: "Marfil Clásico",
    hex: "#D9C1A2",
  },
  {
    name: "Duna Arenosa",
    hex: "#EDC786",
  },
  {
    name: "Beige Tranquilo",
    hex: "#D4BEA8",
  },
  {
    name: "Topacio Claro",
    hex: "#E9BD8E",
  },
  {
    name: "Bronce Toscano",
    hex: "#DBBB93",
  },
  {
    name: "Melaza Oscura",
    hex: "#DDB694",
  },
  {
    name: "Valle del Desierto",
    hex: "#D2B994",
  },
  {
    name: "Cobertura Azucarada",
    hex: "#E4B87F",
  },
  {
    name: "Mantecado",
    hex: "#DCB481",
  },
  {
    name: "Alucinación",
    hex: "#EBB76F",
  },
  {
    name: "Cosecha de Heno",
    hex: "#DFB778",
  },
  {
    name: "Gengibre Amarronado",
    hex: "#D8B081",
  },
  {
    name: "Gran Cañón",
    hex: "#D2AF82",
  },
  {
    name: "Dulce Miel",
    hex: "#E2AD72",
  },
  {
    name: "Calma Natural",
    hex: "#C9A887",
  },
  {
    name: "Zorzal de la Floresta",
    hex: "#E0A767",
  },
  {
    name: "Tallo de Gengibre",
    hex: "#DDA667",
  },
  {
    name: "Yacimiento de Oro",
    hex: "#DBA963",
  },
  {
    name: "Azúcar Rubia",
    hex: "#C49F80",
  },
  {
    name: "Oro del Cairo",
    hex: "#E5AA53",
  },
  {
    name: "Hongo Aterciopelado",
    hex: "#C5A479",
  },
  {
    name: "Caramelo Crocante",
    hex: "#D7A762",
  },
  {
    name: "Fendi",
    hex: "#BD9F7B",
  },
  {
    name: "Brandy de Coñac",
    hex: "#C89E67",
  },
  {
    name: "Caramelo Cremoso",
    hex: "#BA9A77",
  },
  {
    name: "Brillo de Jengibre",
    hex: "#D89E55",
  },
  {
    name: "Suelo Luminoso",
    hex: "#BF9B6E",
  },
  {
    name: "Licor de Nuez",
    hex: "#C39E67",
  },
  {
    name: "Fantasía de Arce",
    hex: "#C59967",
  },
  {
    name: "Gamuza Color Miel",
    hex: "#D9974C",
  },
  {
    name: "Tesoro Descubierto",
    hex: "#C49B5D",
  },
  {
    name: "Suave Heno",
    hex: "#CA9A51",
  },
  {
    name: "Oro Monárquico",
    hex: "#C19659",
  },
  {
    name: "Oro Monárquico",
    hex: "#C19659",
  },
  {
    name: "Brocado Rico",
    hex: "#DD9C2C",
  },
  {
    name: "Oro Casino",
    hex: "#C79448",
  },
  {
    name: "Licor de Damasco",
    hex: "#D19038",
  },
  {
    name: "Brasa Dorada *",
    hex: "#CA972F",
  },
  {
    name: "Aroma a Chocolate",
    hex: "#A48561",
  },
  {
    name: "Colina del Faro",
    hex: "#A28662",
  },
  {
    name: "Tesoro Escondido",
    hex: "#C38D38",
  },
  {
    name: "Sendero de la Costa",
    hex: "#B5804C",
  },
  {
    name: "Osito de Peluche",
    hex: "#AA7E54",
  },
  {
    name: "Cosecha Dorada",
    hex: "#C88A28",
  },
  {
    name: "Almacén del Interior",
    hex: "#AB804F",
  },
  {
    name: "Distrito Majestuoso *",
    hex: "#C89319",
  },
  {
    name: "Hoja de Cobre",
    hex: "#C88626",
  },
  {
    name: "Oliva Osado",
    hex: "#AC833F",
  },
  {
    name: "Oliva Osado",
    hex: "#AC833F",
  },
  {
    name: "Durazno Frágil",
    hex: "#C27B2E",
  },
  {
    name: "Madera Curtida",
    hex: "#987B54",
  },
  {
    name: "Tono Ganador",
    hex: "#AF8136",
  },
  {
    name: "Yute Dorado",
    hex: "#9C7851",
  },
  {
    name: "Mostaza en Grano",
    hex: "#B5812E",
  },
  {
    name: "Henna",
    hex: "#B37F28",
  },
  {
    name: "Cobre Californiano",
    hex: "#C07722",
  },
  {
    name: "Mostaza Picante *",
    hex: "#B2792C",
  },
  {
    name: "Azteca",
    hex: "#B0752D",
  },
  {
    name: "Bazar Dorado",
    hex: "#AF7026",
  },
  {
    name: "Bronce Antiguo",
    hex: "#9E782E",
  },
  {
    name: "Capuccino Helado",
    hex: "#A96B2B",
  },
  {
    name: "Licor de Coñac",
    hex: "#896A46",
  },
  {
    name: "Ocre Profundo",
    hex: "#986735",
  },
  {
    name: "Tren del Desierto",
    hex: "#9C6F27",
  },
  {
    name: "Leña",
    hex: "#826544",
  },
  {
    name: "Caramelo",
    hex: "#956133",
  },
  {
    name: "Expedición Africana",
    hex: "#825E39",
  },
  {
    name: "Cigarro Cubano",
    hex: "#7F5832",
  },
  {
    name: "Fantasía Lunar",
    hex: "#F8EFD8",
  },
  {
    name: "Playa Blanca",
    hex: "#F3EEDC",
  },
  {
    name: "Seda Matinal",
    hex: "#F5EFD7",
  },
  {
    name: "Estrella del Norte",
    hex: "#F7EED4",
  },
  {
    name: "Luna de Miel",
    hex: "#F7ECD5",
  },
  {
    name: "Crema Chic",
    hex: "#F4ECD6",
  },
  {
    name: "Paisaje Lunar",
    hex: "#F6EDD1",
  },
  {
    name: "Luz de Velas",
    hex: "#F8EECC",
  },
  {
    name: "Pera Primaveral",
    hex: "#F5EDCF",
  },
  {
    name: "Litoral Marítimo",
    hex: "#EFEAD6",
  },
  {
    name: "Blanco Exaltación",
    hex: "#F6ECCC",
  },
  {
    name: "Flor de Algodón",
    hex: "#F3E8D0",
  },
  {
    name: "Dulce de Coco",
    hex: "#F7E6CA",
  },
  {
    name: "Sensación Cremosa",
    hex: "#F2E7CC",
  },
  {
    name: "Sala Blanca",
    hex: "#EEE6D1",
  },
  {
    name: "Amarillo Suave",
    hex: "#F7E9C5",
  },
  {
    name: "Blanco Limón",
    hex: "#F1E7CD",
  },
  {
    name: "Fin de Semana Estival",
    hex: "#F4EAC6",
  },
  {
    name: "Mariposa de Verano",
    hex: "#F4E7C8",
  },
  {
    name: "Flash Fotográfico",
    hex: "#FBEDBA",
  },
  {
    name: "Luna de Agosto",
    hex: "#F7EBBD",
  },
  {
    name: "Luz de Linterna",
    hex: "#F4E9C2",
  },
  {
    name: "Luz Costera",
    hex: "#F6E5C3",
  },
  {
    name: "Jugo de Limón",
    hex: "#F9E8BC",
  },
  {
    name: "Limón Hielo",
    hex: "#FBE8B8",
  },
  {
    name: "Amarillo Delicado",
    hex: "#F4E6C0",
  },
  {
    name: "Acacia",
    hex: "#F6E4BD",
  },
  {
    name: "Amarillo Margarita",
    hex: "#F6E6BB",
  },
  {
    name: "Mousse de Maracuyá",
    hex: "#FCE5B4",
  },
  {
    name: "Limón Pálido",
    hex: "#F8E6B5",
  },
  {
    name: "Sol Celestial",
    hex: "#FBE5AD",
  },
  {
    name: "Kiwi Amarillo",
    hex: "#F1E4B8",
  },
  {
    name: "Noche Agradable",
    hex: "#F4E0B8",
  },
  {
    name: "Linaza",
    hex: "#F8E1B2",
  },
  {
    name: "Almendra Blanca",
    hex: "#F0E2B7",
  },
  {
    name: "Sensación Matinal",
    hex: "#F7EAA5",
  },
  {
    name: "Orión",
    hex: "#F3DCB4",
  },
  {
    name: "Luz Astral",
    hex: "#FCE99C",
  },
  {
    name: "Amarillo Refinado",
    hex: "#F6E2A9",
  },
  {
    name: "Corriente Estival",
    hex: "#FEE39F",
  },
  {
    name: "Cidro Helado",
    hex: "#FDE39F",
  },
  {
    name: "Cremoso",
    hex: "#F6DDA6",
  },
  {
    name: "Margaritas Montañosas",
    hex: "#FFDF96",
  },
  {
    name: "Crucero del Sur",
    hex: "#F3DE9C",
  },
  {
    name: "Brisa de Primavera",
    hex: "#F7DF96",
  },
  {
    name: "Batido de Limón",
    hex: "#F7DA99",
  },
  {
    name: "Inyección de Sol",
    hex: "#FEE089",
  },
  {
    name: "Soleado",
    hex: "#FFDC8C",
  },
  {
    name: "Amarillo Arco Iris Claro",
    hex: "#FFE087",
  },
  {
    name: "Amarillo Neón",
    hex: "#FAD98E",
  },
  {
    name: "Junquillo Amarillo",
    hex: "#F4D497",
  },
  {
    name: "Bálsamo Amarillo",
    hex: "#F3D68E",
  },
  {
    name: "Brindar",
    hex: "#FFDD78",
  },
  {
    name: "Toque de Manzana",
    hex: "#ECDB8B",
  },
  {
    name: "Amarillo Vibrante",
    hex: "#EFD886",
  },
  {
    name: "Mousse de Limón",
    hex: "#F2D486",
  },
  {
    name: "Amarillo Peruano",
    hex: "#F4D088",
  },
  {
    name: "Rosa Amarilla",
    hex: "#FFD571",
  },
  {
    name: "Sabor Limón",
    hex: "#FCE462",
  },
  {
    name: "Amarillo Optimista",
    hex: "#F3D975",
  },
  {
    name: "Estallido Estelar",
    hex: "#FFD967",
  },
  {
    name: "Deleite Estelar",
    hex: "#FED56A",
  },
  {
    name: "Crema de Manzana",
    hex: "#F5CB7B",
  },
  {
    name: "Campana",
    hex: "#EFD077",
  },
  {
    name: "Yema de Huevo",
    hex: "#FFD562",
  },
  {
    name: "Mancha Solar",
    hex: "#FED362",
  },
  {
    name: "Amarillo Esencial",
    hex: "#F6CF6C",
  },
  {
    name: "Tulipán de Mayo",
    hex: "#F8CD6A",
  },
  {
    name: "Amarillo Rico *",
    hex: "#ECCE6C",
  },
  {
    name: "Amarillo Imprenta",
    hex: "#FFCF57",
  },
  {
    name: "Amarillo Arco Iris Vivo",
    hex: "#FDD84F",
  },
  {
    name: "Ananá Maduro",
    hex: "#EEC76E",
  },
  {
    name: "Amarillo Fantasía",
    hex: "#F3D15B",
  },
  {
    name: "Botón de Oro",
    hex: "#FFD04A",
  },
  {
    name: "Banana Madura",
    hex: "#FFCB4D",
  },
  {
    name: "Amarillo Real *",
    hex: "#FFD145",
  },
  {
    name: "Baño de Sol",
    hex: "#EFC25F",
  },
  {
    name: "Sol Matinal",
    hex: "#FCCD46",
  },
  {
    name: "Tesoro Arqueológico",
    hex: "#FBC94A",
  },
  {
    name: "Artilugio",
    hex: "#EBC65D",
  },
  {
    name: "Carambola",
    hex: "#EECF50",
  },
  {
    name: "Sol Brillante *",
    hex: "#FFCE38",
  },
  {
    name: "Limón Ardiente *",
    hex: "#FBCB3B",
  },
  {
    name: "Periquito",
    hex: "#EECD40",
  },
  {
    name: "Amarillo Festival",
    hex: "#FACA35",
  },
  {
    name: "Verde Sueco",
    hex: "#EBBD51",
  },
  {
    name: "Limón Verde *",
    hex: "#F8D02E",
  },
  {
    name: "Explosión Cítrica",
    hex: "#D9C15B",
  },
  {
    name: "Sublime Luz Solar *",
    hex: "#F9C13B",
  },
  {
    name: "Futurista",
    hex: "#DFCD45",
  },
  {
    name: "Pimienta Cítrica *",
    hex: "#F7C631",
  },
  {
    name: "Filete Dorado",
    hex: "#E2C347",
  },
  {
    name: "Amarillo Cítrico",
    hex: "#FACA22",
  },
  {
    name: "Curry Dorado",
    hex: "#DEB349",
  },
  {
    name: "Curry Dorado",
    hex: "#DEB349",
  },
  {
    name: "Sol de Primavera *",
    hex: "#ECC722",
  },
  {
    name: "Semilla de Mostaza",
    hex: "#DDB338",
  },
  {
    name: "Rescate del Rey",
    hex: "#E2AC39",
  },
  {
    name: "Estrella Ardiente *",
    hex: "#FFC700",
  },
  {
    name: "Capa de Lluvia *",
    hex: "#FFC600",
  },
  {
    name: "Sol Espléndido *",
    hex: "#FFC100",
  },
  {
    name: "Amarillo Omega *",
    hex: "#FFC100",
  },
  {
    name: "Juego de Abejorros *",
    hex: "#E7B523",
  },
  {
    name: "Estallido de Azufre *",
    hex: "#E0BA25",
  },
  {
    name: "Curry *",
    hex: "#F7C500",
  },
  {
    name: "Tiara",
    hex: "#DAA937",
  },
  {
    name: "Césped Mostaza *",
    hex: "#EFC900",
  },
  {
    name: "Bambú de Bali",
    hex: "#D0BB2A",
  },
  {
    name: "Kiwi Amarillento",
    hex: "#CBB132",
  },
  {
    name: "Banana Verde *",
    hex: "#D5BF19",
  },
  {
    name: "Verde Dorado *",
    hex: "#E5B600",
  },
  {
    name: "Oro Bizantino",
    hex: "#CEA127",
  },
  {
    name: "Drama Rústico *",
    hex: "#D9B500",
  },
  {
    name: "Capín *",
    hex: "#C4A91B",
  },
  {
    name: "Mañana en el Bosque",
    hex: "#C99C1D",
  },
  {
    name: "Azafrán Indio *",
    hex: "#DBA000",
  },
  {
    name: "Encaje Portugués *",
    hex: "#CA9D08",
  },
  {
    name: "Vapor",
    hex: "#EEE9D8",
  },
  {
    name: "Blanco Inocente",
    hex: "#ECE9D9",
  },
  {
    name: "Halo",
    hex: "#F0E9D2",
  },
  {
    name: "Perla Cultivada",
    hex: "#F8E8C9",
  },
  {
    name: "Blanco Maíz",
    hex: "#EBE4CC",
  },
  {
    name: "Crema de Limón",
    hex: "#F1E0C6",
  },
  {
    name: "Mañana Urbana",
    hex: "#E8E1CB",
  },
  {
    name: "Mañana Urbana",
    hex: "#E8E1CB",
  },
  {
    name: "Crema de Boston",
    hex: "#F0E1BF",
  },
  {
    name: "Papiro",
    hex: "#EEDEC1",
  },
  {
    name: "Beige Campestre",
    hex: "#E6DEC8",
  },
  {
    name: "Blanco Milhojas",
    hex: "#F1DFBC",
  },
  {
    name: "Luz Relajante",
    hex: "#E9DDC4",
  },
  {
    name: "Pétalo de Almendro",
    hex: "#E6DCC6",
  },
  {
    name: "Toque de Primavera",
    hex: "#E8DEC0",
  },
  {
    name: "Crema Musical",
    hex: "#EDDAB9",
  },
  {
    name: "Blanco Lana",
    hex: "#E4DABF",
  },
  {
    name: "Blanco Lana",
    hex: "#E4DABF",
  },
  {
    name: "Orégano de Campo",
    hex: "#EAD9BA",
  },
  {
    name: "Pergamino",
    hex: "#E6D7BD",
  },
  {
    name: "Amarillo de Mayo",
    hex: "#F2DCAA",
  },
  {
    name: "Sensación de Duna",
    hex: "#E6D9B7",
  },
  {
    name: "Desierto Deslumbrante",
    hex: "#E3D5BB",
  },
  {
    name: "Magnolia Primaveral",
    hex: "#EED8AC",
  },
  {
    name: "Valle Nublado",
    hex: "#D9D1B9",
  },
  {
    name: "Costa Soleada",
    hex: "#E4D0AB",
  },
  {
    name: "Costa de Marfil",
    hex: "#DECCAE",
  },
  {
    name: "Sahara Occidental",
    hex: "#E7CF9E",
  },
  {
    name: "Granero Amarillo",
    hex: "#E7CC9B",
  },
  {
    name: "Verde Italiano",
    hex: "#E2CD9E",
  },
  {
    name: "Efecto Pardo",
    hex: "#DBCAA4",
  },
  {
    name: "Soneto Portugués",
    hex: "#E8CC8D",
  },
  {
    name: "Verde Matinal",
    hex: "#E2CB8F",
  },
  {
    name: "Luz Oriental",
    hex: "#DBC399",
  },
  {
    name: "Amarillo Victoriano",
    hex: "#E6C780",
  },
  {
    name: "Kiwi Dorado",
    hex: "#D6C387",
  },
  {
    name: "Feriado Romano",
    hex: "#D1BB93",
  },
  {
    name: "Verde Toscana",
    hex: "#D1BE8E",
  },
  {
    name: "Verde Mañana",
    hex: "#D6BB82",
  },
  {
    name: "Arroz Dorado",
    hex: "#CDB288",
  },
  {
    name: "Verde Escocés",
    hex: "#D4B773",
  },
  {
    name: "Verde Escocés",
    hex: "#D4B773",
  },
  {
    name: "Verde Escocés",
    hex: "#D4B773",
  },
  {
    name: "Miel Silvestre",
    hex: "#CFAD78",
  },
  {
    name: "Triple Corona",
    hex: "#D7B468",
  },
  {
    name: "Brote De Caña",
    hex: "#DAB955",
  },
  {
    name: "Brote de Caña",
    hex: "#DAB955",
  },
  {
    name: "Brote de Caña",
    hex: "#DAB955",
  },
  {
    name: "Pera Deliciosa",
    hex: "#C4AE73",
  },
  {
    name: "Pimienta Del Reino",
    hex: "#BBA17B",
  },
  {
    name: "Pimienta del Reino",
    hex: "#BBA17B",
  },
  {
    name: "Fango Mostaza",
    hex: "#B6A379",
  },
  {
    name: "Caqui Dorado",
    hex: "#B4986D",
  },
  {
    name: "Corona Dorada",
    hex: "#C6A747",
  },
  {
    name: "Aceite De Mostaza",
    hex: "#C39E4B",
  },
  {
    name: "Aceite de Mostaza",
    hex: "#C39E4B",
  },
  {
    name: "Fuente Frutal",
    hex: "#BC9E36",
  },
  {
    name: "Guirnalda Dorada",
    hex: "#B89441",
  },
  {
    name: "Musgo Caqui",
    hex: "#9F8662",
  },
  {
    name: "Orilla del Lago Verde",
    hex: "#938564",
  },
  {
    name: "Palta",
    hex: "#918762",
  },
  {
    name: "Fantasía Oliva",
    hex: "#B68D2C",
  },
  {
    name: "Alga Verde",
    hex: "#968550",
  },
  {
    name: "Alga Verde",
    hex: "#968550",
  },
  {
    name: "Campo Polvoriento",
    hex: "#967D54",
  },
  {
    name: "Oliva Deliciosa",
    hex: "#937B3C",
  },
  {
    name: "Verde Tapenade",
    hex: "#665936",
  },
  {
    name: "Toque de Helechos",
    hex: "#F3F2DA",
  },
  {
    name: "Toque Eggshell",
    hex: "#ECF1E2",
  },
  {
    name: "Toque de Bosque",
    hex: "#EEEDD5",
  },
  {
    name: "Blanco Pino",
    hex: "#F2EDD1",
  },
  {
    name: "Verde Langosta Suave",
    hex: "#EAF0D3",
  },
  {
    name: "Luz de la Floresta",
    hex: "#E6EADD",
  },
  {
    name: "Menta Fresca",
    hex: "#F1EFCC",
  },
  {
    name: "Crema Sedosa",
    hex: "#EFEBD1",
  },
  {
    name: "Blanco Yuca",
    hex: "#EDE9D3",
  },
  {
    name: "Follaje de Primavera",
    hex: "#EDECCD",
  },
  {
    name: "Paraíso",
    hex: "#E8EAD0",
  },
  {
    name: "Adobo Limón",
    hex: "#F0EBC7",
  },
  {
    name: "Amanecer del Campo",
    hex: "#E7E9CF",
  },
  {
    name: "Bruma de la Pradera",
    hex: "#E6EACB",
  },
  {
    name: "Deshielo Primaveral",
    hex: "#EDE9C5",
  },
  {
    name: "Jalea de Hierbabuena",
    hex: "#F7EAB3",
  },
  {
    name: "Toque de Cardamomo",
    hex: "#EAE7C1",
  },
  {
    name: "Nuevo Rocío",
    hex: "#EAEBBA",
  },
  {
    name: "Lima Suave",
    hex: "#EBE9BA",
  },
  {
    name: "Mañana de Verano",
    hex: "#F7E9AD",
  },
  {
    name: "Praderas Brumosas",
    hex: "#DFEBC1",
  },
  {
    name: "Amarillo Junco",
    hex: "#EEE1B0",
  },
  {
    name: "Floresta del Norte",
    hex: "#DFE6B7",
  },
  {
    name: "Toque de Limón",
    hex: "#E8E5AE",
  },
  {
    name: "Jardín Paradisíaco",
    hex: "#DEECAA",
  },
  {
    name: "Césped Limón",
    hex: "#E8E3A8",
  },
  {
    name: "Florecer de Septiembre",
    hex: "#E6E7A3",
  },
  {
    name: "Brillo de Vela",
    hex: "#EDDDA2",
  },
  {
    name: "Flor Campestre",
    hex: "#F4E392",
  },
  {
    name: "Limón Siciliano",
    hex: "#F4E291",
  },
  {
    name: "Césped Soleado",
    hex: "#E8E38C",
  },
  {
    name: "Windsurf",
    hex: "#D6E0A0",
  },
  {
    name: "Verde Griego",
    hex: "#E0DD90",
  },
  {
    name: "Lechuga Romana",
    hex: "#E4E184",
  },
  {
    name: "Primavera",
    hex: "#DDDA87",
  },
  {
    name: "Creación Primaveral",
    hex: "#D7DC88",
  },
  {
    name: "Mordida de Cobra",
    hex: "#ECD96A",
  },
  {
    name: "Mordida de Cobra",
    hex: "#ECD96A",
  },
  {
    name: "Uva Verde",
    hex: "#D8D87C",
  },
  {
    name: "Condimentado",
    hex: "#E8D36D",
  },
  {
    name: "Foco de Luz",
    hex: "#ECD461",
  },
  {
    name: "Vértigo",
    hex: "#D2D36F",
  },
  {
    name: "Relleno de Torta",
    hex: "#D9C869",
  },
  {
    name: "Luz Oxídrica",
    hex: "#C9CC75",
  },
  {
    name: "Verde Neón",
    hex: "#CED06A",
  },
  {
    name: "Toque de Kiwi",
    hex: "#BDD176",
  },
  {
    name: "Aceite de Oliva",
    hex: "#DFCB5A",
  },
  {
    name: "Jugo de Melón",
    hex: "#C5CF5A",
  },
  {
    name: "Jardín de Fantasía",
    hex: "#CCC45A",
  },
  {
    name: "Lima Fresca",
    hex: "#C7CA56",
  },
  {
    name: "Fruta Cítrica",
    hex: "#CEBE53",
  },
  {
    name: "Frescor",
    hex: "#D4C346",
  },
  {
    name: "Manzana Inglesa",
    hex: "#B9BB58",
  },
  {
    name: "Verde Cítrico *",
    hex: "#CFBF3B",
  },
  {
    name: "Luz de Neón",
    hex: "#D8C52B",
  },
  {
    name: "Tallo de Apio",
    hex: "#BAC348",
  },
  {
    name: "Lima Exuberante",
    hex: "#B9C546",
  },
  {
    name: "Gelatina de Lima *",
    hex: "#C6C13B",
  },
  {
    name: "Pasto de Verano *",
    hex: "#CCBC37",
  },
  {
    name: "Campo de Golf",
    hex: "#A2CA48",
  },
  {
    name: "Manzana Verde",
    hex: "#B9BE35",
  },
  {
    name: "Verde Extremo *",
    hex: "#CBBA1F",
  },
  {
    name: "Verde Pastel",
    hex: "#AEBB39",
  },
  {
    name: "Locura de Mojito *",
    hex: "#AFBB34",
  },
  {
    name: "Plumaje de Loro *",
    hex: "#BCB928",
  },
  {
    name: "Pimienta Picante *",
    hex: "#C3B623",
  },
  {
    name: "Edén Vigoroso",
    hex: "#B3A236",
  },
  {
    name: "Campos Irlandeses",
    hex: "#98B33E",
  },
  {
    name: "Césped de Tenis",
    hex: "#A4A93A",
  },
  {
    name: "Verde Tecno",
    hex: "#B5A728",
  },
  {
    name: "Lima Adorable",
    hex: "#86AD3D",
  },
  {
    name: "Alma de la Naturaleza *",
    hex: "#A2AF1D",
  },
  {
    name: "Limón Gallego *",
    hex: "#A0A824",
  },
  {
    name: "Oruga *",
    hex: "#8CA23B",
  },
  {
    name: "Zucchini Sabroso *",
    hex: "#ACA90C",
  },
  {
    name: "Sensación de Palmeras",
    hex: "#9A8B30",
  },
  {
    name: "Dique de Nutrias",
    hex: "#908B2C",
  },
  {
    name: "Bruja Malvada",
    hex: "#749639",
  },
  {
    name: "Salto de Duende",
    hex: "#888C29",
  },
  {
    name: "Arboleda Sagrada",
    hex: "#7D8234",
  },
  {
    name: "Luna Resplandeciente",
    hex: "#F6F1DE",
  },
  {
    name: "Sensación Eggshell",
    hex: "#F0F0E0",
  },
  {
    name: "Luz Misteriosa",
    hex: "#ECEBDC",
  },
  {
    name: "Blanco Brillante",
    hex: "#ECEADA",
  },
  {
    name: "Niebla de Montaña",
    hex: "#E8E9DC",
  },
  {
    name: "Cidrera Suave",
    hex: "#E8EBDA",
  },
  {
    name: "Sauce Llorón",
    hex: "#E9EAD7",
  },
  {
    name: "Día Bendito",
    hex: "#EBE8D6",
  },
  {
    name: "Luna de Diciembre",
    hex: "#F2E8C9",
  },
  {
    name: "Agua de Manantial",
    hex: "#E7E7D1",
  },
  {
    name: "Langosta",
    hex: "#E2E3D2",
  },
  {
    name: "Manto Blanco",
    hex: "#E4E1C7",
  },
  {
    name: "Chardonnay",
    hex: "#E6DEC4",
  },
  {
    name: "Perfume de Pino",
    hex: "#DCDECD",
  },
  {
    name: "Marfil Matutino",
    hex: "#ECDFBB",
  },
  {
    name: "Inspiración Verdadera",
    hex: "#ECE1B6",
  },
  {
    name: "Fantasía Caqui",
    hex: "#DEDCC1",
  },
  {
    name: "Capín Limón",
    hex: "#D9DCB8",
  },
  {
    name: "Escarcha Dorada",
    hex: "#E8D8AC",
  },
  {
    name: "Vida de Campo",
    hex: "#E1DBAE",
  },
  {
    name: "Meditación Moderna",
    hex: "#E2D8AE",
  },
  {
    name: "Gotas de Mar",
    hex: "#D7D4BB",
  },
  {
    name: "Hábitat",
    hex: "#D9D2B8",
  },
  {
    name: "Pera Jugosa",
    hex: "#D5D6B5",
  },
  {
    name: "Sueño Primaveral",
    hex: "#E0D19E",
  },
  {
    name: "Sauce Joven",
    hex: "#DED29C",
  },
  {
    name: "Rana Silenciosa",
    hex: "#D0C9AC",
  },
  {
    name: "Madera de Sauce",
    hex: "#DCCE8D",
  },
  {
    name: "Paquete de Repollo",
    hex: "#D0CD98",
  },
  {
    name: "Hoja de Mate",
    hex: "#C1BEA2",
  },
  {
    name: "Liquen Suave",
    hex: "#CDC387",
  },
  {
    name: "Caminata de Montaña",
    hex: "#BEC198",
  },
  {
    name: "Chucrut",
    hex: "#C2C28F",
  },
  {
    name: "Tímido Florecer",
    hex: "#B7C292",
  },
  {
    name: "Silencio De Invierno",
    hex: "#C4B591",
  },
  {
    name: "Silencio de Invierno",
    hex: "#C4B591",
  },
  {
    name: "Silencio de Invierno",
    hex: "#C4B591",
  },
  {
    name: "Silencio de Invierno",
    hex: "#C4B591",
  },
  {
    name: "Silencio de Invierno",
    hex: "#C4B591",
  },
  {
    name: "Silencio de Invierno",
    hex: "#C4B591",
  },
  {
    name: "Tomillo",
    hex: "#B8B192",
  },
  {
    name: "Planicie del Serengueti",
    hex: "#BBB786",
  },
  {
    name: "Shakespeare",
    hex: "#C9B96D",
  },
  {
    name: "Pistacho Suave",
    hex: "#C3AF64",
  },
  {
    name: "Monzones",
    hex: "#9DA18F",
  },
  {
    name: "Jaspe Precioso",
    hex: "#A3AC74",
  },
  {
    name: "Pinos del Pacífico",
    hex: "#A29F7F",
  },
  {
    name: "Hoja de Olivo",
    hex: "#AEA26B",
  },
  {
    name: "Hoja de Alcaucil",
    hex: "#A49B7A",
  },
  {
    name: "Hoja de Alcaucil",
    hex: "#A49B7A",
  },
  {
    name: "Sensación de Pinos",
    hex: "#A4A967",
  },
  {
    name: "Verde Lima",
    hex: "#AFA159",
  },
  {
    name: "Verde Soja",
    hex: "#B7A44B",
  },
  {
    name: "Eucalipto",
    hex: "#929480",
  },
  {
    name: "Tallo de Rosa",
    hex: "#A09E64",
  },
  {
    name: "Prímula Cromo",
    hex: "#B0993F",
  },
  {
    name: "Verde Salón",
    hex: "#8D8964",
  },
  {
    name: "Ensalada de Palta",
    hex: "#978953",
  },
  {
    name: "Verde Vertiginoso",
    hex: "#8A8B54",
  },
  {
    name: "Araucaria",
    hex: "#7A7D67",
  },
  {
    name: "Verde Cidro",
    hex: "#9F8B33",
  },
  {
    name: "Jardín Colgante",
    hex: "#968A3B",
  },
  {
    name: "Bosque Encantado",
    hex: "#817D59",
  },
  {
    name: "Bonsai *",
    hex: "#8D9138",
  },
  {
    name: "Corona de Laureles",
    hex: "#7B8746",
  },
  {
    name: "Sol Caqui *",
    hex: "#91832F",
  },
  {
    name: "Musgo Seco",
    hex: "#867B3D",
  },
  {
    name: "Adorno",
    hex: "#7E7F3A",
  },
  {
    name: "Verde Calipso",
    hex: "#72813A",
  },
  {
    name: "Verde Salvaje *",
    hex: "#7E7535",
  },
  {
    name: "Oliva *",
    hex: "#8D7326",
  },
  {
    name: "Fantástico Follaje",
    hex: "#787336",
  },
  {
    name: "Árbol Glamoroso",
    hex: "#6F6845",
  },
  {
    name: "Hojas De Otoño",
    hex: "#6C6B3E",
  },
  {
    name: "Hojas de Otoño",
    hex: "#6C6B3E",
  },
  {
    name: "Verde Plantación",
    hex: "#636040",
  },
  {
    name: "Palmera",
    hex: "#646233",
  },
  {
    name: "Pino Verde",
    hex: "#615B3C",
  },
  {
    name: "Verde Liquen",
    hex: "#53594C",
  },
  {
    name: "Orilla de Río",
    hex: "#596138",
  },
  {
    name: "Sensación Camuflaje",
    hex: "#5D5D32",
  },
  {
    name: "Aguas Profundas",
    hex: "#465439",
  },
  {
    name: "Gota de Menta",
    hex: "#E3F0DD",
  },
  {
    name: "Rocío Invernal",
    hex: "#E9EED7",
  },
  {
    name: "Caramelo de Menta",
    hex: "#E3EBDD",
  },
  {
    name: "Toque de Hierbabuena",
    hex: "#E0ECDD",
  },
  {
    name: "Cielo Acuariano",
    hex: "#D9EDE3",
  },
  {
    name: "Dulce Exito",
    hex: "#E1EDDA",
  },
  {
    name: "Búzios",
    hex: "#E5EBD5",
  },
  {
    name: "Pináculo",
    hex: "#DEEDD9",
  },
  {
    name: "Helada Tropical",
    hex: "#D8EFDC",
  },
  {
    name: "Verde Camafeo",
    hex: "#DAEDDC",
  },
  {
    name: "Brisa Oceánica",
    hex: "#DAEED5",
  },
  {
    name: "Toque de Pistacho",
    hex: "#DDEED2",
  },
  {
    name: "Lago Espejado",
    hex: "#E3ECCE",
  },
  {
    name: "Verde Brisa",
    hex: "#D2EBDE",
  },
  {
    name: "Menta Suave",
    hex: "#D2EDDB",
  },
  {
    name: "Té de Cidrera",
    hex: "#DBEDCF",
  },
  {
    name: "Fresca Experiencia",
    hex: "#D6E8C6",
  },
  {
    name: "Orgánico",
    hex: "#D5E5CA",
  },
  {
    name: "Verde Acuático",
    hex: "#C7E8D4",
  },
  {
    name: "Bruma Natural",
    hex: "#D5E2CB",
  },
  {
    name: "Verde Casual",
    hex: "#C4E6D7",
  },
  {
    name: "Canción de Lluvia",
    hex: "#C4E3D6",
  },
  {
    name: "Mate",
    hex: "#D2E7C3",
  },
  {
    name: "Gorro del Elfo",
    hex: "#C8E6CE",
  },
  {
    name: "Brillo Marino",
    hex: "#CCE3C9",
  },
  {
    name: "Tierra de los Lagos",
    hex: "#C8E3C6",
  },
  {
    name: "Trufa de Hierbabuena",
    hex: "#D4E6B6",
  },
  {
    name: "Cristal de Venecia",
    hex: "#D2E0BB",
  },
  {
    name: "Aroma del Mar",
    hex: "#CADCBE",
  },
  {
    name: "Arboleda",
    hex: "#C7E6B7",
  },
  {
    name: "Verde Villorrio",
    hex: "#B4E5CA",
  },
  {
    name: "Gramínea",
    hex: "#C6DEBB",
  },
  {
    name: "Frescor Marítimo",
    hex: "#ACE3CD",
  },
  {
    name: "Verde Victoria",
    hex: "#BEDAC4",
  },
  {
    name: "Verde Gracioso",
    hex: "#B7E2C3",
  },
  {
    name: "Hierbabuena Dulce",
    hex: "#BAE0BD",
  },
  {
    name: "Flauta de Bambú",
    hex: "#C1E1B2",
  },
  {
    name: "Crema de Palta",
    hex: "#BDD7BB",
  },
  {
    name: "Verde Francia",
    hex: "#BAD9B8",
  },
  {
    name: "Jardinera",
    hex: "#BDE0A9",
  },
  {
    name: "Brote de Hierbabuena",
    hex: "#ABD5C5",
  },
  {
    name: "Sensación de Menta",
    hex: "#C5DE9E",
  },
  {
    name: "Crema de Menta",
    hex: "#A6DEB7",
  },
  {
    name: "Aruba",
    hex: "#B2D0B8",
  },
  {
    name: "Brote de Primavera",
    hex: "#ABDDAC",
  },
  {
    name: "Verde Arponero",
    hex: "#BFD1A3",
  },
  {
    name: "Té Verde",
    hex: "#B3CAA6",
  },
  {
    name: "Fiesta Primaveral",
    hex: "#B9D594",
  },
  {
    name: "Verde Fresco",
    hex: "#A7D1A7",
  },
  {
    name: "Carrusel",
    hex: "#95CFBA",
  },
  {
    name: "Sabor a Jardín",
    hex: "#97D5B1",
  },
  {
    name: "Sensación Jade",
    hex: "#A5CEA7",
  },
  {
    name: "Hoja de Trébol",
    hex: "#A1D3A2",
  },
  {
    name: "Isla Marítima",
    hex: "#8AD3AF",
  },
  {
    name: "Margarita",
    hex: "#B2CF89",
  },
  {
    name: "Verde Bermudas",
    hex: "#80D2B6",
  },
  {
    name: "Quarzo Verde",
    hex: "#A1C09F",
  },
  {
    name: "Arbusto",
    hex: "#9DC49C",
  },
  {
    name: "Coco Verde",
    hex: "#A5C295",
  },
  {
    name: "Verde Costero",
    hex: "#8BC2AE",
  },
  {
    name: "Hierbabuena Rugosa",
    hex: "#8BCEA0",
  },
  {
    name: "Castillo de Duendes",
    hex: "#93C1A1",
  },
  {
    name: "Verde Colina",
    hex: "#AAC089",
  },
  {
    name: "Delicia Tailandesa",
    hex: "#83C7A5",
  },
  {
    name: "Licor de Pistacho",
    hex: "#97CD87",
  },
  {
    name: "Bahía de Tampa",
    hex: "#70CBAD",
  },
  {
    name: "Dulce Hoja",
    hex: "#A1C777",
  },
  {
    name: "Picnic de Verano",
    hex: "#9BB68C",
  },
  {
    name: "Flores Silvestres",
    hex: "#93C87B",
  },
  {
    name: "Verde Molino",
    hex: "#80C194",
  },
  {
    name: "Hoja de Palmera",
    hex: "#AFC657",
  },
  {
    name: "Bosque Griego",
    hex: "#83C385",
  },
  {
    name: "Hierba Primaveral",
    hex: "#95C268",
  },
  {
    name: "Verde Extravagante",
    hex: "#72BA8A",
  },
  {
    name: "Folclore",
    hex: "#65B59A",
  },
  {
    name: "Hierbabuena",
    hex: "#5FC094",
  },
  {
    name: "Verde Angra",
    hex: "#7EB17E",
  },
  {
    name: "Fauna de Primavera",
    hex: "#63B990",
  },
  {
    name: "Verano Espacial",
    hex: "#7AA888",
  },
  {
    name: "Huerta Serena",
    hex: "#95A969",
  },
  {
    name: "Chalet de Hiedras",
    hex: "#87AC72",
  },
  {
    name: "Herbal",
    hex: "#8DAA65",
  },
  {
    name: "Fiesta del Jardín",
    hex: "#72B671",
  },
  {
    name: "Floresta del Sur",
    hex: "#5DA78F",
  },
  {
    name: "Prados",
    hex: "#8EAF54",
  },
  {
    name: "Verde Jardín",
    hex: "#83B455",
  },
  {
    name: "Verde Sintético",
    hex: "#86B34F",
  },
  {
    name: "Frescor de Otoño",
    hex: "#779B74",
  },
  {
    name: "Verde Danubio",
    hex: "#72A072",
  },
  {
    name: "Verde Helecho",
    hex: "#74B559",
  },
  {
    name: "Guirnalda Griega",
    hex: "#63AF68",
  },
  {
    name: "Isla Desierta",
    hex: "#31B592",
  },
  {
    name: "Verde Granada",
    hex: "#51B074",
  },
  {
    name: "Montañas de Escocia",
    hex: "#57A972",
  },
  {
    name: "Oasis",
    hex: "#41AA7D",
  },
  {
    name: "Verde Imponente",
    hex: "#6D9464",
  },
  {
    name: "Primavera Irlandesa",
    hex: "#5B9A70",
  },
  {
    name: "Fantasía de Elfo",
    hex: "#71A63F",
  },
  {
    name: "Verde Ogro",
    hex: "#46AC5F",
  },
  {
    name: "Vegetación Exuberante",
    hex: "#6C895B",
  },
  {
    name: "Verde Oruga *",
    hex: "#75AA31",
  },
  {
    name: "Cascadas del Bosque",
    hex: "#1CAD78",
  },
  {
    name: "Verde Acelga",
    hex: "#728C42",
  },
  {
    name: "Onda Escénica",
    hex: "#269D78",
  },
  {
    name: "Campos Escoceses",
    hex: "#6D9736",
  },
  {
    name: "Esmeralda Real",
    hex: "#5E7E5C",
  },
  {
    name: "Guisantes Frescos",
    hex: "#61894E",
  },
  {
    name: "Celos",
    hex: "#5B8359",
  },
  {
    name: "Malabar",
    hex: "#00AD85",
  },
  {
    name: "Verde Rana",
    hex: "#61933A",
  },
  {
    name: "Verde Calle",
    hex: "#2F955F",
  },
  {
    name: "Verde Hortaliza",
    hex: "#648637",
  },
  {
    name: "Verde Irlandés *",
    hex: "#569532",
  },
  {
    name: "Suave Diva",
    hex: "#52774D",
  },
  {
    name: "Hoja de Banano",
    hex: "#518439",
  },
  {
    name: "Explosión Solar",
    hex: "#527143",
  },
  {
    name: "Casa del Árbol",
    hex: "#238E52",
  },
  {
    name: "Menta Matinal",
    hex: "#517933",
  },
  {
    name: "Isla Esmeralda",
    hex: "#2E8F3D",
  },
  {
    name: "Verde Gráfico",
    hex: "#497839",
  },
  {
    name: "Selva Atlántica",
    hex: "#34794D",
  },
  {
    name: "Turmalina Verde",
    hex: "#008E6B",
  },
  {
    name: "Insensatez *",
    hex: "#328C37",
  },
  {
    name: "Isla del Tesoro",
    hex: "#009461",
  },
  {
    name: "Esmeralda",
    hex: "#207856",
  },
  {
    name: "Aventura Amazónica *",
    hex: "#368631",
  },
  {
    name: "Camino Verde",
    hex: "#008763",
  },
  {
    name: "Mar de Menta",
    hex: "#008466",
  },
  {
    name: "Cactus Silvestre",
    hex: "#466A39",
  },
  {
    name: "Amazonia",
    hex: "#008C5D",
  },
  {
    name: "Hoja de la Selva",
    hex: "#3C6E3E",
  },
  {
    name: "Lluvia en el Bosque",
    hex: "#3A5F42",
  },
  {
    name: "Gnomo Verde",
    hex: "#008356",
  },
  {
    name: "Salvia Victoriana",
    hex: "#007C5C",
  },
  {
    name: "Oliva Intenso",
    hex: "#33643E",
  },
  {
    name: "Manto de Césped",
    hex: "#1F7042",
  },
  {
    name: "Lluvia Tropical",
    hex: "#3B6035",
  },
  {
    name: "Guirnalda Verde",
    hex: "#346437",
  },
  {
    name: "Jardín Real",
    hex: "#286640",
  },
  {
    name: "Árbol Alpino",
    hex: "#23693B",
  },
  {
    name: "Canto del Delta",
    hex: "#32583D",
  },
  {
    name: "Trébol Irlandés",
    hex: "#266A34",
  },
  {
    name: "Verde Paraíso",
    hex: "#2B5C3D",
  },
  {
    name: "Floresta Amazónica *",
    hex: "#03664F",
  },
  {
    name: "Caudal Verdoso",
    hex: "#086845",
  },
  {
    name: "Casquete Polar",
    hex: "#EDF2E9",
  },
  {
    name: "Rayuela",
    hex: "#EAECE2",
  },
  {
    name: "Susurro Chino",
    hex: "#E5EEE4",
  },
  {
    name: "Perfume de Eucalipto",
    hex: "#E5EAE5",
  },
  {
    name: "Banco de Nieve",
    hex: "#E6EAE4",
  },
  {
    name: "Reflección",
    hex: "#E5EBE4",
  },
  {
    name: "Pedir un Deseo",
    hex: "#E6E9E3",
  },
  {
    name: "Silencio Matutino",
    hex: "#E7EAE0",
  },
  {
    name: "Pino",
    hex: "#E2ECE0",
  },
  {
    name: "Kiwi Escarchado",
    hex: "#E8EADC",
  },
  {
    name: "Retiro Tranquilo",
    hex: "#E5E9DF",
  },
  {
    name: "Lago Glacial",
    hex: "#E3E9E1",
  },
  {
    name: "Helado de Menta",
    hex: "#E6ECDA",
  },
  {
    name: "Caramelo de Manzana",
    hex: "#E9EAD9",
  },
  {
    name: "Verde Pacífico",
    hex: "#DDEBDF",
  },
  {
    name: "Césped Creciente",
    hex: "#E6E7D8",
  },
  {
    name: "Sutil Camuflaje",
    hex: "#DDE3CB",
  },
  {
    name: "Marfil Oriental",
    hex: "#D8DED4",
  },
  {
    name: "Lluvia China",
    hex: "#DBDDD2",
  },
  {
    name: "Perfume Matutino",
    hex: "#DBE4CA",
  },
  {
    name: "Helado de Limón",
    hex: "#D5DED6",
  },
  {
    name: "Villa Italiana",
    hex: "#D7DFD1",
  },
  {
    name: "Salto de Langosta",
    hex: "#D0E4D2",
  },
  {
    name: "Salvia",
    hex: "#D9E1CC",
  },
  {
    name: "Litoraleño",
    hex: "#CFE2D5",
  },
  {
    name: "Campo Nublado",
    hex: "#D4DBD6",
  },
  {
    name: "Brisa Marina",
    hex: "#D1DDD6",
  },
  {
    name: "Verde Galés",
    hex: "#D2DED4",
  },
  {
    name: "Rama de Sauce",
    hex: "#D3DECF",
  },
  {
    name: "Paraíso Tropical",
    hex: "#C9E1D5",
  },
  {
    name: "Nido Silencioso",
    hex: "#CFE2CD",
  },
  {
    name: "Escena de Almizcle",
    hex: "#CDD8CD",
  },
  {
    name: "Comienzo Primaveral",
    hex: "#D2DCBF",
  },
  {
    name: "Verde Parque",
    hex: "#D0D4C3",
  },
  {
    name: "Bruma Cristalina",
    hex: "#CFD0C2",
  },
  {
    name: "Pino de Noruega",
    hex: "#C5D4C8",
  },
  {
    name: "Caqui Pasional",
    hex: "#CED4BE",
  },
  {
    name: "Verde Tranquilo",
    hex: "#C8D6C1",
  },
  {
    name: "Río Támesis",
    hex: "#C9D3C3",
  },
  {
    name: "Verde Espuma de Mar",
    hex: "#C0D7C8",
  },
  {
    name: "Laguna de Lirios",
    hex: "#C4D2C0",
  },
  {
    name: "Suculenta",
    hex: "#C4CFB0",
  },
  {
    name: "Campiñas Inglesas",
    hex: "#C6C8B3",
  },
  {
    name: "Seda Ópalo",
    hex: "#B3CBC2",
  },
  {
    name: "Verde Lana",
    hex: "#A9D0C1",
  },
  {
    name: "Manzanar",
    hex: "#BCC7B5",
  },
  {
    name: "Tinte Botella",
    hex: "#B5CAB6",
  },
  {
    name: "Rubor del Bosque",
    hex: "#AFC3B9",
  },
  {
    name: "Brote de Trébol",
    hex: "#B9BFA7",
  },
  {
    name: "Verde Berilo",
    hex: "#A5C1B2",
  },
  {
    name: "Tarde Isleña",
    hex: "#A9B7B3",
  },
  {
    name: "Pueblo Costero",
    hex: "#ABB7AD",
  },
  {
    name: "Efecto Bambú",
    hex: "#AFBE9B",
  },
  {
    name: "Jardín Secreto",
    hex: "#A7B9A5",
  },
  {
    name: "Follaje",
    hex: "#AFBC97",
  },
  {
    name: "Verde Reptil",
    hex: "#A5B29C",
  },
  {
    name: "Praderas Tiernas",
    hex: "#8CBCAB",
  },
  {
    name: "Verde Relajante",
    hex: "#95B3A7",
  },
  {
    name: "Valle Lunar",
    hex: "#A3AD9E",
  },
  {
    name: "Musgo Brumoso",
    hex: "#9BAF9F",
  },
  {
    name: "Eucalipto Claro",
    hex: "#94ACA0",
  },
  {
    name: "Trébol Pálido",
    hex: "#A2AE8E",
  },
  {
    name: "Trébol Pálido",
    hex: "#A2AE8E",
  },
  {
    name: "Trébol Pálido",
    hex: "#A2AE8E",
  },
  {
    name: "Piedra Diáfana",
    hex: "#A3A793",
  },
  {
    name: "Mousse de Oliva",
    hex: "#A3A78D",
  },
  {
    name: "Trinidad",
    hex: "#8CAC9B",
  },
  {
    name: "Bosque de Helechos",
    hex: "#91A392",
  },
  {
    name: "Bosque Melancólico",
    hex: "#9AA07D",
  },
  {
    name: "Hoja de Cesped",
    hex: "#919F72",
  },
  {
    name: "Canto de Pavo Real",
    hex: "#7E9E84",
  },
  {
    name: "Campos de Otoño",
    hex: "#8C9381",
  },
  {
    name: "Sombra de Montaña",
    hex: "#7F9584",
  },
  {
    name: "Sendero de Jardín",
    hex: "#8B9973",
  },
  {
    name: "Floresta de Pinos",
    hex: "#8D9275",
  },
  {
    name: "Verde Campestre",
    hex: "#729884",
  },
  {
    name: "Jardín Botánico",
    hex: "#7C927A",
  },
  {
    name: "Fantasía del Bosque",
    hex: "#858A77",
  },
  {
    name: "Salvia Vigorosa",
    hex: "#669887",
  },
  {
    name: "Salvia de Verano",
    hex: "#7C8D74",
  },
  {
    name: "Mesa de Verduras",
    hex: "#6E8A7F",
  },
  {
    name: "Verde Cabaña",
    hex: "#838A65",
  },
  {
    name: "Muro de Arvejas",
    hex: "#64907A",
  },
  {
    name: "Bicentenario",
    hex: "#70837B",
  },
  {
    name: "Cerco de Primavera",
    hex: "#809158",
  },
  {
    name: "Verde Pasto",
    hex: "#75845D",
  },
  {
    name: "Verde Artesano",
    hex: "#777B5B",
  },
  {
    name: "Laguna Esmeralda",
    hex: "#4A8471",
  },
  {
    name: "Verde Repollo",
    hex: "#59796C",
  },
  {
    name: "Verde Haba",
    hex: "#6E8C43",
  },
  {
    name: "Hierbabuena Intensa",
    hex: "#65775B",
  },
  {
    name: "Pino Espinoso",
    hex: "#5D7861",
  },
  {
    name: "Selva Brasileña",
    hex: "#687152",
  },
  {
    name: "Fauna Suave",
    hex: "#517367",
  },
  {
    name: "Hiedra",
    hex: "#57725E",
  },
  {
    name: "Verde Pantanal",
    hex: "#647D43",
  },
  {
    name: "Caricia Amazónica",
    hex: "#41795F",
  },
  {
    name: "Hoja de Laurel",
    hex: "#63664F",
  },
  {
    name: "Hoja de Laurel",
    hex: "#63664F",
  },
  {
    name: "Verde Jade",
    hex: "#536C51",
  },
  {
    name: "Verde Terapéutico",
    hex: "#5B6C42",
  },
  {
    name: "Sierra del Mar",
    hex: "#5B7638",
  },
  {
    name: "Monstruo Verde",
    hex: "#496E51",
  },
  {
    name: "Verde Real",
    hex: "#57624D",
  },
  {
    name: "Verde Real",
    hex: "#57624D",
  },
  {
    name: "Hiedra Irlandesa",
    hex: "#397359",
  },
  {
    name: "Selva Magnífica",
    hex: "#565C43",
  },
  {
    name: "Herbolario",
    hex: "#3C6158",
  },
  {
    name: "Palta Intenso",
    hex: "#496343",
  },
  {
    name: "Verde Tribal",
    hex: "#4E5449",
  },
  {
    name: "Naturaleza Real",
    hex: "#495A47",
  },
  {
    name: "Verde Clorofila",
    hex: "#506436",
  },
  {
    name: "Bosque Gris",
    hex: "#4F5342",
  },
  {
    name: "Verde New England",
    hex: "#385248",
  },
  {
    name: "Selva del Congo",
    hex: "#435736",
  },
  {
    name: "Viejo Cazador",
    hex: "#385142",
  },
  {
    name: "Verde Agreste",
    hex: "#3E4E39",
  },
  {
    name: "Fortuna Finlandesa",
    hex: "#1C5C4A",
  },
  {
    name: "Jardin Tropical",
    hex: "#32523D",
  },
  {
    name: "Verde Elegante",
    hex: "#304B38",
  },
  {
    name: "Salvaje",
    hex: "#2A493F",
  },
  {
    name: "Cisne Negro",
    hex: "#384137",
  },
  {
    name: "Verde Trébol",
    hex: "#19563E",
  },
  {
    name: "Joya de Arcadia",
    hex: "#105444",
  },
  {
    name: "Sensación de Dragón",
    hex: "#1C4741",
  },
  {
    name: "Pino Suizo",
    hex: "#025E42",
  },
  {
    name: "Anochecer en el Bosque",
    hex: "#2D3D33",
  },
  {
    name: "Bálsamo",
    hex: "#164B3C",
  },
  {
    name: "Gran Conífera",
    hex: "#005345",
  },
  {
    name: "Hielo Sedoso",
    hex: "#E7F1EC",
  },
  {
    name: "Azul Diamante",
    hex: "#DCEDEC",
  },
  {
    name: "Rompiente",
    hex: "#E2ECE6",
  },
  {
    name: "Azul Escarcha",
    hex: "#DEECEA",
  },
  {
    name: "Claridad Suave",
    hex: "#DDEDEA",
  },
  {
    name: "Paisaje Polar",
    hex: "#DEEBE8",
  },
  {
    name: "Aire Alpino",
    hex: "#D9EDEA",
  },
  {
    name: "Sensación Acuática",
    hex: "#DEEBE5",
  },
  {
    name: "Boda Real",
    hex: "#DBEEE5",
  },
  {
    name: "Atmósfera del Ártico",
    hex: "#D8E7E9",
  },
  {
    name: "Divertido Verano",
    hex: "#D6E8E8",
  },
  {
    name: "Iceberg Icónico",
    hex: "#D7EBE3",
  },
  {
    name: "Fulgor Verdoso",
    hex: "#D8E8E3",
  },
  {
    name: "Hoja de Saúco",
    hex: "#D6EAE2",
  },
  {
    name: "Azul Limpio",
    hex: "#D2E4E8",
  },
  {
    name: "Chapuzón Refrescante",
    hex: "#CBEBE6",
  },
  {
    name: "Paisaje Invernal",
    hex: "#C8E6E9",
  },
  {
    name: "Reflejo de Cielo",
    hex: "#CADEE1",
  },
  {
    name: "Sublime Océano",
    hex: "#C1E6E2",
  },
  {
    name: "Brisa Cálida",
    hex: "#C4E1E4",
  },
  {
    name: "Verde Laguna",
    hex: "#C8E2DF",
  },
  {
    name: "Aroma a Hierbabuena",
    hex: "#CAE3DB",
  },
  {
    name: "Lluvias de Verano",
    hex: "#C6E1E1",
  },
  {
    name: "Azul Ibiza",
    hex: "#BEE2E7",
  },
  {
    name: "Agua Celestial",
    hex: "#BEE9DE",
  },
  {
    name: "Mar de Hawai",
    hex: "#C3E3DF",
  },
  {
    name: "Lazo Azul",
    hex: "#C9DDDD",
  },
  {
    name: "Mar Griego",
    hex: "#BEE1E2",
  },
  {
    name: "Azul Cielo",
    hex: "#B9E3E5",
  },
  {
    name: "Juguete Verde",
    hex: "#BDE8DA",
  },
  {
    name: "Baño Relajante",
    hex: "#BAE3DF",
  },
  {
    name: "Frescor Oceánico",
    hex: "#B2E5D8",
  },
  {
    name: "Espuma Cítrica",
    hex: "#B9DED3",
  },
  {
    name: "Popurrí Caribeño",
    hex: "#A8DEE2",
  },
  {
    name: "Cielo de Ángeles",
    hex: "#B3D6DC",
  },
  {
    name: "Vista del Lago",
    hex: "#B3D7DB",
  },
  {
    name: "Alga de Mar",
    hex: "#AEDCD9",
  },
  {
    name: "Verde Notorio",
    hex: "#B1DCCF",
  },
  {
    name: "Azul Lago",
    hex: "#ACD6D8",
  },
  {
    name: "Colina Ventosa",
    hex: "#9FD8DB",
  },
  {
    name: "Menta Magnífico",
    hex: "#A1D8D4",
  },
  {
    name: "Línea Costera",
    hex: "#96D6DD",
  },
  {
    name: "Verde Radiante",
    hex: "#AAD4C8",
  },
  {
    name: "Mareas Tropicales",
    hex: "#95D9D5",
  },
  {
    name: "Memorias Acuáticas",
    hex: "#8CD5DC",
  },
  {
    name: "Maravillas Griegas",
    hex: "#90DDCD",
  },
  {
    name: "Lago Cristalino",
    hex: "#8BD6D3",
  },
  {
    name: "Celeste Floreciente",
    hex: "#89D6D5",
  },
  {
    name: "Burbujas Flotantes",
    hex: "#8BD6CC",
  },
  {
    name: "Brillo de Luna",
    hex: "#89CED2",
  },
  {
    name: "Melón Jugoso",
    hex: "#8ED3C2",
  },
  {
    name: "Verde Asiático",
    hex: "#88C8C6",
  },
  {
    name: "Mares del Sur",
    hex: "#68CAC5",
  },
  {
    name: "Costa del Pacífico",
    hex: "#61C3CC",
  },
  {
    name: "Gracia",
    hex: "#69CAB7",
  },
  {
    name: "Jardín Ondulado",
    hex: "#78BEB1",
  },
  {
    name: "Pantalón Capri",
    hex: "#7CB8AA",
  },
  {
    name: "Tesoro de Ópalo",
    hex: "#53BFCB",
  },
  {
    name: "Azul Tahití",
    hex: "#6AB1B6",
  },
  {
    name: "Vista Marina",
    hex: "#63B3B9",
  },
  {
    name: "Verde Tailandés",
    hex: "#50C7B3",
  },
  {
    name: "Azul Movimiento",
    hex: "#44BFBE",
  },
  {
    name: "Joya de Neptuno",
    hex: "#55B7AC",
  },
  {
    name: "Sensación Esmeralda",
    hex: "#57B5A2",
  },
  {
    name: "Hierbabuena Mejicana",
    hex: "#42BEA7",
  },
  {
    name: "Mar Abierto",
    hex: "#49A7B5",
  },
  {
    name: "Azul Buceo",
    hex: "#20ADB8",
  },
  {
    name: "Verde Futuro",
    hex: "#4B9C8C",
  },
  {
    name: "Mar de Delfines",
    hex: "#3D9A99",
  },
  {
    name: "Azul Milán",
    hex: "#00A1AD",
  },
  {
    name: "Azul Marítimo Medio",
    hex: "#00A4A6",
  },
  {
    name: "Milagro Marino",
    hex: "#0098A4",
  },
  {
    name: "Rialto",
    hex: "#1C8C93",
  },
  {
    name: "Mar del Caribe",
    hex: "#00AA8F",
  },
  {
    name: "Azul Electrón",
    hex: "#0096A2",
  },
  {
    name: "Turquesa Intenso",
    hex: "#009C97",
  },
  {
    name: "Nilo Profundo",
    hex: "#00A58D",
  },
  {
    name: "Pluma de Pavo Real",
    hex: "#00939F",
  },
  {
    name: "Mar Turbulento",
    hex: "#009B96",
  },
  {
    name: "Deleite Caribeño",
    hex: "#00879E",
  },
  {
    name: "Desfile de Luz",
    hex: "#009E82",
  },
  {
    name: "Azul Cósmico",
    hex: "#008897",
  },
  {
    name: "Esencia de Jade",
    hex: "#2D8071",
  },
  {
    name: "Jade Miami",
    hex: "#00997E",
  },
  {
    name: "Laguna Profunda",
    hex: "#008C86",
  },
  {
    name: "Verde Perejil",
    hex: "#2F7769",
  },
  {
    name: "Momento Perfecto",
    hex: "#00837D",
  },
  {
    name: "Turquesa Veneciana",
    hex: "#007585",
  },
  {
    name: "Valle de Jade",
    hex: "#008571",
  },
  {
    name: "Adorno Navideño",
    hex: "#007A7A",
  },
  {
    name: "Mar Agitado",
    hex: "#007F74",
  },
  {
    name: "Sensación de Algas",
    hex: "#00836E",
  },
  {
    name: "Serpiente Real",
    hex: "#007F6E",
  },
  {
    name: "Marea Nocturna",
    hex: "#00737A",
  },
  {
    name: "Noche del Zodíaco",
    hex: "#007067",
  },
  {
    name: "Verde Tritón",
    hex: "#0D6456",
  },
  {
    name: "Esmeralda Intensa",
    hex: "#1F564C",
  },
  {
    name: "Arbusto Feliz",
    hex: "#006755",
  },
  {
    name: "Brillo de Luz",
    hex: "#EBEAE4",
  },
  {
    name: "Blanco Atrio",
    hex: "#E3ECE7",
  },
  {
    name: "Sueño Grandioso",
    hex: "#E4EBE7",
  },
  {
    name: "Diamante Pálido",
    hex: "#E7EAE4",
  },
  {
    name: "Perla Nublada",
    hex: "#E4EAE7",
  },
  {
    name: "Laguna Helada",
    hex: "#E5E9E4",
  },
  {
    name: "Luna Durmiente",
    hex: "#E0E6E1",
  },
  {
    name: "Verde Suave",
    hex: "#CFEDE3",
  },
  {
    name: "Cristalino",
    hex: "#D2E6E2",
  },
  {
    name: "Tierra de Escarcha",
    hex: "#D7E3E0",
  },
  {
    name: "Cuento de Hadas",
    hex: "#D4E4E1",
  },
  {
    name: "Silencio",
    hex: "#D5E0DE",
  },
  {
    name: "Té de Menta",
    hex: "#D2E1DB",
  },
  {
    name: "Escultura en Piedras",
    hex: "#D1DEDF",
  },
  {
    name: "Ópalo Claro",
    hex: "#D5DDD8",
  },
  {
    name: "Lago Vienés",
    hex: "#CEDFDD",
  },
  {
    name: "Bruma de Otoño",
    hex: "#D1DDD9",
  },
  {
    name: "Brisa de las Olas",
    hex: "#CDDFDB",
  },
  {
    name: "Fulgor Gris",
    hex: "#CBD5D3",
  },
  {
    name: "Suave Caudal",
    hex: "#BDD9D6",
  },
  {
    name: "Hoja Gris",
    hex: "#C6D1CD",
  },
  {
    name: "Quietud",
    hex: "#C1D2CF",
  },
  {
    name: "Navegación Tranquila",
    hex: "#BDD1D3",
  },
  {
    name: "Brisa Fresca",
    hex: "#B9D3D1",
  },
  {
    name: "Mirador",
    hex: "#B5D3D2",
  },
  {
    name: "Sensación de Lluvia",
    hex: "#BCCCC9",
  },
  {
    name: "Azul Lluvia",
    hex: "#ADC9CC",
  },
  {
    name: "Gris Marmota",
    hex: "#B8C6C2",
  },
  {
    name: "Azul Velero",
    hex: "#A0CCD3",
  },
  {
    name: "Agua Persa",
    hex: "#A1CCCA",
  },
  {
    name: "Aire",
    hex: "#A9C4BF",
  },
  {
    name: "Aguamarina Opaco",
    hex: "#90CCD0",
  },
  {
    name: "Aguamarina Medio",
    hex: "#A0C6C2",
  },
  {
    name: "Reposo en la Laguna",
    hex: "#83C5CE",
  },
  {
    name: "Nórdico",
    hex: "#98B9BB",
  },
  {
    name: "Jardín de Tortugas",
    hex: "#90B9B5",
  },
  {
    name: "Retiro Azul",
    hex: "#88B7BF",
  },
  {
    name: "Isla Bella",
    hex: "#81B5B4",
  },
  {
    name: "Archipiélago",
    hex: "#69B9C5",
  },
  {
    name: "Mar Caribeño",
    hex: "#6BB7C4",
  },
  {
    name: "Mina De Grava",
    hex: "#98A9A4",
  },
  {
    name: "Mina de Grava",
    hex: "#98A9A4",
  },
  {
    name: "Mina de Grava",
    hex: "#98A9A4",
  },
  {
    name: "Mina de Grava",
    hex: "#98A9A4",
  },
  {
    name: "Verde Atlantis",
    hex: "#8CADAC",
  },
  {
    name: "Azul Aspen",
    hex: "#88ABAD",
  },
  {
    name: "Vista de la Colina",
    hex: "#90A8A4",
  },
  {
    name: "Acantilado Marino",
    hex: "#85A6AB",
  },
  {
    name: "Sensación Cristal",
    hex: "#6DB0AC",
  },
  {
    name: "Rey del Mar",
    hex: "#64B1AF",
  },
  {
    name: "Crucero Fluvial",
    hex: "#62A3AD",
  },
  {
    name: "Siete Lagos",
    hex: "#609C9B",
  },
  {
    name: "Sensación de Truenos",
    hex: "#76908D",
  },
  {
    name: "Aguas Calmas",
    hex: "#6C9393",
  },
  {
    name: "Cumbre de Montaña",
    hex: "#73908B",
  },
  {
    name: "Talismán",
    hex: "#699093",
  },
  {
    name: "Turquesa Ahumado",
    hex: "#62868B",
  },
  {
    name: "Jardín Nocturno",
    hex: "#6D837D",
  },
  {
    name: "Jardín Nocturno",
    hex: "#6D837D",
  },
  {
    name: "Cataratas de Pasión",
    hex: "#37919D",
  },
  {
    name: "Cascada",
    hex: "#5A8487",
  },
  {
    name: "Gris Osado",
    hex: "#627775",
  },
  {
    name: "Gris Osado",
    hex: "#627775",
  },
  {
    name: "Gris Osado",
    hex: "#627775",
  },
  {
    name: "Gris Osado",
    hex: "#627775",
  },
  {
    name: "Alcaucil",
    hex: "#48877D",
  },
  {
    name: "Viaje Submarino",
    hex: "#308A91",
  },
  {
    name: "Verde Estampa",
    hex: "#3F8685",
  },
  {
    name: "Floresta Oculta",
    hex: "#567773",
  },
  {
    name: "Laguna Particular",
    hex: "#4D7A79",
  },
  {
    name: "Momentos Serenos",
    hex: "#4B7B78",
  },
  {
    name: "Azul Porcelana",
    hex: "#4B7278",
  },
  {
    name: "Cielo Tempestuoso",
    hex: "#536B66",
  },
  {
    name: "Verde Inquietante",
    hex: "#4E6C69",
  },
  {
    name: "Pavo Real",
    hex: "#2A7C79",
  },
  {
    name: "Tempestad",
    hex: "#386A6D",
  },
  {
    name: "Poseidón",
    hex: "#3B605C",
  },
  {
    name: "Verde Emperador",
    hex: "#246969",
  },
  {
    name: "Club Mónaco",
    hex: "#365E5E",
  },
  {
    name: "Azul de Bohemia",
    hex: "#39595F",
  },
  {
    name: "Azul de Bohemia",
    hex: "#39595F",
  },
  {
    name: "Artesano",
    hex: "#006E7B",
  },
  {
    name: "Popurrí de Algas",
    hex: "#22625F",
  },
  {
    name: "Caribe Intenso",
    hex: "#006872",
  },
  {
    name: "Turmalina Azul",
    hex: "#00656B",
  },
  {
    name: "Botánico",
    hex: "#006867",
  },
  {
    name: "Verde Noche Intenso",
    hex: "#2C4F4F",
  },
  {
    name: "Verde Libertad",
    hex: "#006663",
  },
  {
    name: "Azul Golfo",
    hex: "#005D67",
  },
  {
    name: "Laguna Artica",
    hex: "#1E4F56",
  },
  {
    name: "Trópicos Turbulentos",
    hex: "#005E63",
  },
  {
    name: "Abismo Profundo",
    hex: "#005765",
  },
  {
    name: "Precioso",
    hex: "#005B61",
  },
  {
    name: "Azul Petróleo",
    hex: "#00565F",
  },
  {
    name: "Montaña Majestuosa",
    hex: "#005D56",
  },
  {
    name: "Arbusto Oscuro",
    hex: "#10514E",
  },
  {
    name: "Sueños Persas",
    hex: "#0F4C4B",
  },
  {
    name: "Verde Profundo",
    hex: "#154946",
  },
  {
    name: "Algas Marinas",
    hex: "#004C52",
  },
  {
    name: "Esmeralda Vivaz",
    hex: "#004641",
  },
  {
    name: "Hielo Fluvial",
    hex: "#D7E5EA",
  },
  {
    name: "Mañana Junto al Mar",
    hex: "#D6E5EB",
  },
  {
    name: "Era del Hielo",
    hex: "#D3E5E9",
  },
  {
    name: "Viento en Popa",
    hex: "#D8E0E9",
  },
  {
    name: "Malva Brillante",
    hex: "#D4DEEE",
  },
  {
    name: "Aroma a Violeta",
    hex: "#DCDFE4",
  },
  {
    name: "Perla del Pacífico",
    hex: "#D0E4E8",
  },
  {
    name: "Visión Aérea",
    hex: "#CDE5EA",
  },
  {
    name: "Parada de Tren",
    hex: "#D8DCE0",
  },
  {
    name: "Fantasía Denim",
    hex: "#C5E4E9",
  },
  {
    name: "Sonata de Domingo",
    hex: "#CBDFE6",
  },
  {
    name: "Huella de Esquí",
    hex: "#C9DEE9",
  },
  {
    name: "Agua Mística",
    hex: "#C4E0EB",
  },
  {
    name: "Cielo de Verano",
    hex: "#C1E3EA",
  },
  {
    name: "Primera Edición",
    hex: "#C3E1E9",
  },
  {
    name: "Lavanda Matinal",
    hex: "#CFD7E3",
  },
  {
    name: "Lavanda Crepúsculo",
    hex: "#CBD8E6",
  },
  {
    name: "Estallido de Lavandas",
    hex: "#C7D8E6",
  },
  {
    name: "Cielo Californiano",
    hex: "#C1DDE7",
  },
  {
    name: "Azul Arcadia",
    hex: "#CED3E3",
  },
  {
    name: "Oceánico",
    hex: "#C7D9E3",
  },
  {
    name: "Bruma Naciente",
    hex: "#BBDDE9",
  },
  {
    name: "Azul Viento",
    hex: "#C1DAE6",
  },
  {
    name: "Suave Lavanda",
    hex: "#CBD3E2",
  },
  {
    name: "Azul Polo",
    hex: "#BDDDE4",
  },
  {
    name: "Azul Citrino",
    hex: "#C3D8E3",
  },
  {
    name: "Azul Salvaje",
    hex: "#B4DFE8",
  },
  {
    name: "Azul Niño",
    hex: "#B5DFE7",
  },
  {
    name: "Corriente Oceánica",
    hex: "#B4DCEA",
  },
  {
    name: "Escarabajo Azul",
    hex: "#BDD7E3",
  },
  {
    name: "Azul Discreto",
    hex: "#BFD1E4",
  },
  {
    name: "Azul Colgante",
    hex: "#C6CFDE",
  },
  {
    name: "Uva Magnífica",
    hex: "#C3CDE1",
  },
  {
    name: "Azul Seda",
    hex: "#C2D0DF",
  },
  {
    name: "Cielo Radiante",
    hex: "#B5D7E2",
  },
  {
    name: "Sensación Festiva",
    hex: "#B4CEEB",
  },
  {
    name: "Violeta Perla",
    hex: "#BBCEE3",
  },
  {
    name: "Fresco Matinal",
    hex: "#B6D4E0",
  },
  {
    name: "Agua Secreta",
    hex: "#B2D1E7",
  },
  {
    name: "Biquini",
    hex: "#B6D1E2",
  },
  {
    name: "Celestial Claro",
    hex: "#B1D2E6",
  },
  {
    name: "Azul Burbujeante",
    hex: "#A8DAE5",
  },
  {
    name: "Faceta Azul",
    hex: "#C1C8DC",
  },
  {
    name: "Mar Reluciente",
    hex: "#B0D3DB",
  },
  {
    name: "Azul Liláceo",
    hex: "#B3CADE",
  },
  {
    name: "Dejo de Ciruela",
    hex: "#A9CCE6",
  },
  {
    name: "Azul Remoto",
    hex: "#9FD3E7",
  },
  {
    name: "Navegante Aventurero",
    hex: "#A0D6E3",
  },
  {
    name: "Océano Bravo",
    hex: "#AACCE3",
  },
  {
    name: "Azul Harmonía",
    hex: "#9FD5E2",
  },
  {
    name: "Lila Moreno",
    hex: "#B2C5DF",
  },
  {
    name: "Azul Tranquilo",
    hex: "#A1C9E3",
  },
  {
    name: "Flor del Atardecer",
    hex: "#B2C1D7",
  },
  {
    name: "Mermelada de Ciruela",
    hex: "#ABBCDC",
  },
  {
    name: "Chiffon Azul",
    hex: "#8DCCE7",
  },
  {
    name: "Fresco Encuentro",
    hex: "#9AC2E2",
  },
  {
    name: "Vasto Océano",
    hex: "#A1C0DC",
  },
  {
    name: "Día de Spa",
    hex: "#87CEE2",
  },
  {
    name: "Azul Turquía",
    hex: "#A3BADA",
  },
  {
    name: "Danubio",
    hex: "#95C1E0",
  },
  {
    name: "Azul Atlántida",
    hex: "#9AC5D5",
  },
  {
    name: "Nobleza",
    hex: "#9CBFD7",
  },
  {
    name: "Curasao Azul",
    hex: "#85CCDE",
  },
  {
    name: "Jazmín Azul",
    hex: "#9CB2DF",
  },
  {
    name: "Azul Feriado",
    hex: "#82C8E3",
  },
  {
    name: "Cielo Limpio",
    hex: "#7FCADB",
  },
  {
    name: "Orquídea Sublime",
    hex: "#97B1DA",
  },
  {
    name: "Virtuoso",
    hex: "#9BB6D1",
  },
  {
    name: "Aguas de Lisboa",
    hex: "#91B5D8",
  },
  {
    name: "Dalia Azul",
    hex: "#8DBDCF",
  },
  {
    name: "Horizonte Azul",
    hex: "#87B1D5",
  },
  {
    name: "Azul Ópalo",
    hex: "#89B3D0",
  },
  {
    name: "Torrente de Agua",
    hex: "#7FB7D6",
  },
  {
    name: "Versalles",
    hex: "#8FA9D1",
  },
  {
    name: "Lagos de Michigan",
    hex: "#83B8C5",
  },
  {
    name: "Azul Toronto",
    hex: "#79B0D7",
  },
  {
    name: "Azul Ceremonial",
    hex: "#8FA6C6",
  },
  {
    name: "Sensación Francesa",
    hex: "#7CA4D3",
  },
  {
    name: "Flores de Mayo Azules",
    hex: "#7AB2C6",
  },
  {
    name: "Visión Atmosférica",
    hex: "#7DB0C2",
  },
  {
    name: "Aguas Ondulantes",
    hex: "#6CABD6",
  },
  {
    name: "Pelourinho",
    hex: "#57B7DD",
  },
  {
    name: "Costa Oceánica",
    hex: "#5DB2CF",
  },
  {
    name: "Azul Majestuoso",
    hex: "#8998BC",
  },
  {
    name: "Azul Pervinca",
    hex: "#769DC2",
  },
  {
    name: "Azul Portuario",
    hex: "#60A0CE",
  },
  {
    name: "Amsterdam",
    hex: "#49B6CE",
  },
  {
    name: "Hortensia Perfumada",
    hex: "#659DC9",
  },
  {
    name: "Fruto del Bosque Azul",
    hex: "#57A3D1",
  },
  {
    name: "Bouquet de Lavanda",
    hex: "#7090C9",
  },
  {
    name: "Azul Informal",
    hex: "#67A0C1",
  },
  {
    name: "Azul Informal",
    hex: "#67A0C1",
  },
  {
    name: "Azul Pim",
    hex: "#38B1DB",
  },
  {
    name: "Aguas Limpias",
    hex: "#5C9BCC",
  },
  {
    name: "Noche Estrellada",
    hex: "#629DC2",
  },
  {
    name: "Azul Seducción",
    hex: "#38B9CD",
  },
  {
    name: "Azul de la Tarde",
    hex: "#3BACD5",
  },
  {
    name: "Violeta Pervinca",
    hex: "#6D8DBE",
  },
  {
    name: "Eléctrico",
    hex: "#7C8BAE",
  },
  {
    name: "Arlequín",
    hex: "#718EB4",
  },
  {
    name: "Cielo Náutico",
    hex: "#5497C8",
  },
  {
    name: "Azul Olímpico",
    hex: "#39AFC9",
  },
  {
    name: "Puerto Oculto",
    hex: "#599FB7",
  },
  {
    name: "Lavanda Artístico",
    hex: "#628CC0",
  },
  {
    name: "Espiral Onírica",
    hex: "#6790B3",
  },
  {
    name: "Vuelo Espiritual",
    hex: "#4F98B9",
  },
  {
    name: "Violeta Tropical",
    hex: "#6D81AC",
  },
  {
    name: "Blues",
    hex: "#519BAD",
  },
  {
    name: "Efecto Amatista",
    hex: "#567EBE",
  },
  {
    name: "Olas de Hawaii",
    hex: "#20A1C3",
  },
  {
    name: "Azul Preludio",
    hex: "#3F87BC",
  },
  {
    name: "Canción del Ave",
    hex: "#10A1CF",
  },
  {
    name: "Playa Pasional",
    hex: "#4181BA",
  },
  {
    name: "Flor Oceánica",
    hex: "#4883B0",
  },
  {
    name: "Azul Portugués",
    hex: "#4280B6",
  },
  {
    name: "Mar de Marineros",
    hex: "#448CA7",
  },
  {
    name: "Festival de Ópera",
    hex: "#5270A7",
  },
  {
    name: "Cobalto Intenso",
    hex: "#2E86B2",
  },
  {
    name: "Azul Eclesiástico",
    hex: "#4D73A1",
  },
  {
    name: "Noche Tropical",
    hex: "#2D8CA8",
  },
  {
    name: "Ensenada",
    hex: "#009FBE",
  },
  {
    name: "Azul Zafiro",
    hex: "#0095C7",
  },
  {
    name: "Azul Dicha",
    hex: "#0097C4",
  },
  {
    name: "Azul Expreso",
    hex: "#526C9D",
  },
  {
    name: "Espuma Oceánica",
    hex: "#00A1B8",
  },
  {
    name: "Azul Cabalgata",
    hex: "#1B80B8",
  },
  {
    name: "Sirena de Policía",
    hex: "#3573AB",
  },
  {
    name: "Azul Campeón",
    hex: "#3078A8",
  },
  {
    name: "Azul Añil",
    hex: "#2676AD",
  },
  {
    name: "Rayo Azul",
    hex: "#008FB5",
  },
  {
    name: "Movimiento del Viento",
    hex: "#0087BD",
  },
  {
    name: "Mar Índigo",
    hex: "#1883A7",
  },
  {
    name: "Sensación Neptuno",
    hex: "#0095AC",
  },
  {
    name: "Calma Mediterránea",
    hex: "#0081B8",
  },
  {
    name: "Azul Pekín",
    hex: "#008DAC",
  },
  {
    name: "Azul Real",
    hex: "#007CB6",
  },
  {
    name: "Zafiro Intenso",
    hex: "#186BAA",
  },
  {
    name: "Azul Regata",
    hex: "#0078AF",
  },
  {
    name: "Ola de Poseidón",
    hex: "#1B7694",
  },
  {
    name: "Azul Celeste Fusión",
    hex: "#007DA6",
  },
  {
    name: "Dulce Zafiro",
    hex: "#00839D",
  },
  {
    name: "Sangre Real *",
    hex: "#18659D",
  },
  {
    name: "Azul Sideral",
    hex: "#007C9A",
  },
  {
    name: "Tormenta Eléctrica",
    hex: "#006AA8",
  },
  {
    name: "Aguas Caribeñas",
    hex: "#00779B",
  },
  {
    name: "Reino",
    hex: "#165F9C",
  },
  {
    name: "Sentimiento Fabuloso",
    hex: "#006B9F",
  },
  {
    name: "Navíos en el Mar",
    hex: "#006B9B",
  },
  {
    name: "Planetario",
    hex: "#007096",
  },
  {
    name: "Zafiro *",
    hex: "#1D598D",
  },
  {
    name: "Violeta Alegórico",
    hex: "#34507E",
  },
  {
    name: "Delirio de Moras",
    hex: "#3F4F72",
  },
  {
    name: "Boda Azul",
    hex: "#1C5789",
  },
  {
    name: "Orgullo Marcial",
    hex: "#0A6C84",
  },
  {
    name: "Deslumbrante Zafiro",
    hex: "#106086",
  },
  {
    name: "Navegantes",
    hex: "#006392",
  },
  {
    name: "Era de los Jets",
    hex: "#006B88",
  },
  {
    name: "Lapislázuli",
    hex: "#00638B",
  },
  {
    name: "Jazz",
    hex: "#005B8E",
  },
  {
    name: "Azul Bajo Cero",
    hex: "#1C4B75",
  },
  {
    name: "Azul Fantasma",
    hex: "#224373",
  },
  {
    name: "Alas de Colibrí",
    hex: "#005482",
  },
  {
    name: "Azul Blazer",
    hex: "#005184",
  },
  {
    name: "Fuerte Presencia",
    hex: "#17407D",
  },
  {
    name: "Azul Puro",
    hex: "#024A7F",
  },
  {
    name: "Gota Azul",
    hex: "#004E76",
  },
  {
    name: "Azul Imaginado",
    hex: "#0C4C62",
  },
  {
    name: "Cristales Marítimos",
    hex: "#E7E9EB",
  },
  {
    name: "Montaña Blanca",
    hex: "#E7E9EA",
  },
  {
    name: "Danza de Mariposa",
    hex: "#E0EAEF",
  },
  {
    name: "Bruma de Escarcha",
    hex: "#E0E4E8",
  },
  {
    name: "Blanco Dinastía Ming",
    hex: "#DDE1E4",
  },
  {
    name: "Espíritu Naciente",
    hex: "#DBDCE1",
  },
  {
    name: "Diente de León Claro",
    hex: "#D6DDE5",
  },
  {
    name: "Flor Alpina",
    hex: "#D6DEE3",
  },
  {
    name: "Azul Lunar",
    hex: "#D6DCE2",
  },
  {
    name: "Neblina",
    hex: "#D8DDDF",
  },
  {
    name: "Puesta del Sol",
    hex: "#D7DBE1",
  },
  {
    name: "Neblina Azul",
    hex: "#D8DCDF",
  },
  {
    name: "Brillo de Estrellas",
    hex: "#D7DCE0",
  },
  {
    name: "Azul Eterno",
    hex: "#CEDFE5",
  },
  {
    name: "Realidad Virtual",
    hex: "#D6DCE0",
  },
  {
    name: "Nube Suave",
    hex: "#CBDEE8",
  },
  {
    name: "Frío Súbito",
    hex: "#D1DDE3",
  },
  {
    name: "Frío Súbito",
    hex: "#D1DDE3",
  },
  {
    name: "Toque Matinal",
    hex: "#D0DDE3",
  },
  {
    name: "Vuelo de Palomas",
    hex: "#CFDBE5",
  },
  {
    name: "Sueño Eterno",
    hex: "#D4DBDE",
  },
  {
    name: "Línea del Horizonte",
    hex: "#CDD1DC",
  },
  {
    name: "Oasis Azul",
    hex: "#CED1D9",
  },
  {
    name: "Copos de Nube",
    hex: "#C2D2DE",
  },
  {
    name: "Encaje Lavanda",
    hex: "#C9CFD8",
  },
  {
    name: "Azul de Jarrón",
    hex: "#C8CFD9",
  },
  {
    name: "Alaska",
    hex: "#C8D1D7",
  },
  {
    name: "Velo Azul",
    hex: "#C3D2D9",
  },
  {
    name: "Blanco Ahumado",
    hex: "#CCCED3",
  },
  {
    name: "Sala de Lectura",
    hex: "#C3CFDA",
  },
  {
    name: "Mar Azul",
    hex: "#C5CED6",
  },
  {
    name: "Cielos Infinitos",
    hex: "#B0CFDD",
  },
  {
    name: "Sensación Feliz",
    hex: "#B4CBD9",
  },
  {
    name: "Hortensia Azul",
    hex: "#B0CED9",
  },
  {
    name: "Azul Finlandés",
    hex: "#B3C8D8",
  },
  {
    name: "Azul Danubio",
    hex: "#ADC8D7",
  },
  {
    name: "Sombra de Duda",
    hex: "#B4C7D1",
  },
  {
    name: "Viento Suave",
    hex: "#B8C7CC",
  },
  {
    name: "Viento Suave",
    hex: "#B8C7CC",
  },
  {
    name: "Brillo de Hadas",
    hex: "#B2C2D5",
  },
  {
    name: "Sombra Lunar",
    hex: "#BEC2C9",
  },
  {
    name: "Casual Jeans",
    hex: "#B8C4CC",
  },
  {
    name: "Azul Laqueado",
    hex: "#B9C1CD",
  },
  {
    name: "Coulis de Arándano",
    hex: "#B0C4D3",
  },
  {
    name: "Coulis de Arándano",
    hex: "#B0C4D3",
  },
  {
    name: "Cristalería",
    hex: "#B7C1CC",
  },
  {
    name: "Aguas Vaporosas",
    hex: "#AFC5D0",
  },
  {
    name: "Fascinación",
    hex: "#B1B6C4",
  },
  {
    name: "Fascinación",
    hex: "#B1B6C4",
  },
  {
    name: "Brillo Estelar",
    hex: "#A0BBCD",
  },
  {
    name: "Mediterráneo",
    hex: "#99BDD0",
  },
  {
    name: "Mediterráneo",
    hex: "#99BDD0",
  },
  {
    name: "Encantamiento",
    hex: "#9EB5CE",
  },
  {
    name: "Paz",
    hex: "#A5B3C8",
  },
  {
    name: "Azul Invernal",
    hex: "#A3B5C8",
  },
  {
    name: "Toque Florido",
    hex: "#9DB1D0",
  },
  {
    name: "Azul Otoñal",
    hex: "#A7B3C0",
  },
  {
    name: "Limpia Armonía",
    hex: "#98B6CB",
  },
  {
    name: "Azul Barroco",
    hex: "#94B5C2",
  },
  {
    name: "Azul Fénix",
    hex: "#9AB4BA",
  },
  {
    name: "Pico De Neblina",
    hex: "#99AFBC",
  },
  {
    name: "Pico de Neblina",
    hex: "#99AFBC",
  },
  {
    name: "Silueta",
    hex: "#A3A7B1",
  },
  {
    name: "Azul Oxford",
    hex: "#99AAB6",
  },
  {
    name: "Cielo Eléctrico",
    hex: "#9CA5B6",
  },
  {
    name: "Escollera",
    hex: "#9AA5B7",
  },
  {
    name: "Gris Cobayo",
    hex: "#95A7B4",
  },
  {
    name: "Caramelo de Arándano",
    hex: "#83A8C1",
  },
  {
    name: "Caramelo de Arándano",
    hex: "#83A8C1",
  },
  {
    name: "Caída de la Noche",
    hex: "#979FB2",
  },
  {
    name: "Azul Windsor",
    hex: "#7CA8BF",
  },
  {
    name: "Azul Camarote",
    hex: "#8599B4",
  },
  {
    name: "Azul Cashmere",
    hex: "#8698B4",
  },
  {
    name: "Tira de Lona",
    hex: "#799CBD",
  },
  {
    name: "Blueberry",
    hex: "#819BB4",
  },
  {
    name: "Blueberry",
    hex: "#819BB4",
  },
  {
    name: "Azul Florentino",
    hex: "#869AAF",
  },
  {
    name: "Campanilla Silvestre",
    hex: "#8699AD",
  },
  {
    name: "Mar Balcánico",
    hex: "#7F9DA5",
  },
  {
    name: "Orilla del Lago Azul",
    hex: "#7D98A6",
  },
  {
    name: "Azul Tibet",
    hex: "#6C97B3",
  },
  {
    name: "Más Allá del Azul",
    hex: "#898D9B",
  },
  {
    name: "Saturno Frío",
    hex: "#7B90A0",
  },
  {
    name: "Creciente Cósmico",
    hex: "#7F8A9C",
  },
  {
    name: "Invierno Azul",
    hex: "#6794A5",
  },
  {
    name: "Firmamento",
    hex: "#5E93AD",
  },
  {
    name: "Violeta de Praga",
    hex: "#677E9F",
  },
  {
    name: "Cielo Estrellado",
    hex: "#707992",
  },
  {
    name: "Deleite Denim",
    hex: "#5C7291",
  },
  {
    name: "Azul Noble",
    hex: "#567195",
  },
  {
    name: "Marea",
    hex: "#547C87",
  },
  {
    name: "Lluvia de Medianoche",
    hex: "#58748B",
  },
  {
    name: "Vía Láctea",
    hex: "#617482",
  },
  {
    name: "Azul Capitolio",
    hex: "#537390",
  },
  {
    name: "Claro de Luna",
    hex: "#626F83",
  },
  {
    name: "Aguas de Islandia",
    hex: "#457697",
  },
  {
    name: "Vals Azul",
    hex: "#57718A",
  },
  {
    name: "Azul Índigo",
    hex: "#3A7D9A",
  },
  {
    name: "Costa Salvaje",
    hex: "#537686",
  },
  {
    name: "Río de Piedra",
    hex: "#587381",
  },
  {
    name: "Río de Piedra",
    hex: "#587381",
  },
  {
    name: "Azul Oceánico",
    hex: "#338193",
  },
  {
    name: "Brillo de Zafiro",
    hex: "#32759A",
  },
  {
    name: "Satisfacción",
    hex: "#546386",
  },
  {
    name: "Azul Cóndor",
    hex: "#446A8B",
  },
  {
    name: "Gris Elemental",
    hex: "#606573",
  },
  {
    name: "Azul Niágara",
    hex: "#4C6B80",
  },
  {
    name: "Capa Real",
    hex: "#4E6185",
  },
  {
    name: "Llamas Azules",
    hex: "#347488",
  },
  {
    name: "Luz de Luna",
    hex: "#3A698D",
  },
  {
    name: "Límite Nocturno",
    hex: "#535B6F",
  },
  {
    name: "Joya Matutina",
    hex: "#385679",
  },
  {
    name: "Azul Gótico",
    hex: "#405A6B",
  },
  {
    name: "Tempestad Inminente",
    hex: "#445A66",
  },
  {
    name: "Tempestad Inminente",
    hex: "#445A66",
  },
  {
    name: "Aguas Oceánicas",
    hex: "#3A5E67",
  },
  {
    name: "Violeta Inspirado",
    hex: "#454C6C",
  },
  {
    name: "Trato Real",
    hex: "#455265",
  },
  {
    name: "Azul Firma",
    hex: "#425465",
  },
  {
    name: "Azul Noche",
    hex: "#354E76",
  },
  {
    name: "Neptuno Profundo",
    hex: "#3A5267",
  },
  {
    name: "Neptuno Profundo",
    hex: "#3A5267",
  },
  {
    name: "Azul Cadete",
    hex: "#136777",
  },
  {
    name: "Azul Reposera",
    hex: "#1D567C",
  },
  {
    name: "Azul Prusia",
    hex: "#315368",
  },
  {
    name: "Rendez-Vous Azul",
    hex: "#245D6A",
  },
  {
    name: "Oscuridad Profunda",
    hex: "#3B4966",
  },
  {
    name: "Azul Marino Vibrante*",
    hex: "#324965",
  },
  {
    name: "Azul Marino Vibrante",
    hex: "#324965",
  },
  {
    name: "Azul Marino Vibrante",
    hex: "#324965",
  },
  {
    name: "Azul Tempestad",
    hex: "#00647C",
  },
  {
    name: "Azul Marino Vibrante",
    hex: "#324965",
  },
  {
    name: "Mar Báltico",
    hex: "#005F7D",
  },
  {
    name: "Azul Mediterráneo",
    hex: "#274C68",
  },
  {
    name: "Noche Impenetrable",
    hex: "#37465C",
  },
  {
    name: "Ola Real",
    hex: "#1E5566",
  },
  {
    name: "Índigo Suave",
    hex: "#0C5C70",
  },
  {
    name: "Azul Neptuno",
    hex: "#1A4F6A",
  },
  {
    name: "Aguas Turbulentas",
    hex: "#184C6E",
  },
  {
    name: "Pozo Profundo",
    hex: "#314655",
  },
  {
    name: "Azul Relámpago",
    hex: "#005476",
  },
  {
    name: "Noches de Añil",
    hex: "#234760",
  },
  {
    name: "Índigo Profundo",
    hex: "#3B424C",
  },
  {
    name: "Índigo Profundo",
    hex: "#3B424C",
  },
  {
    name: "Noche Ártica",
    hex: "#25485C",
  },
  {
    name: "Índigo Profundo",
    hex: "#3B424C",
  },
  {
    name: "Luz Negra",
    hex: "#373F51",
  },
  {
    name: "Pacífico Profundo",
    hex: "#233F61",
  },
  {
    name: "Azul Formal",
    hex: "#00546E",
  },
  {
    name: "Azul Frontón",
    hex: "#2F454D",
  },
  {
    name: "Océano Tranquilo *",
    hex: "#1C3753",
  },
  {
    name: "Profundidad del Océano",
    hex: "#2C3241",
  },
  {
    name: "Lirio de Mar Rosa",
    hex: "#EEE9EB",
  },
  {
    name: "Espliego Apasionado",
    hex: "#ECE9EA",
  },
  {
    name: "Sales de Rosas",
    hex: "#EDE8EA",
  },
  {
    name: "Renovación",
    hex: "#ECE8EA",
  },
  {
    name: "Hilo de Seda",
    hex: "#E6E2E6",
  },
  {
    name: "Rosa Bebé",
    hex: "#EEDBE5",
  },
  {
    name: "Gota de Violeta",
    hex: "#E2E0E9",
  },
  {
    name: "Toque Vesperal",
    hex: "#E6DDE6",
  },
  {
    name: "Clavel",
    hex: "#EBD3E2",
  },
  {
    name: "Perfume Lila",
    hex: "#E5DBE0",
  },
  {
    name: "Nieve Lila",
    hex: "#E0DDE1",
  },
  {
    name: "Toque de Pensamiento",
    hex: "#DDDAE4",
  },
  {
    name: "Lluvia de Amatistas",
    hex: "#DBD8E7",
  },
  {
    name: "Sensación Violeta",
    hex: "#D6D9E7",
  },
  {
    name: "Sensación Violeta",
    hex: "#D6D9E7",
  },
  {
    name: "Popurrí",
    hex: "#E4D2DD",
  },
  {
    name: "Vergel Artístico",
    hex: "#DDD2DF",
  },
  {
    name: "Poesía Lírica",
    hex: "#E1D1DC",
  },
  {
    name: "Colinas de Brezos",
    hex: "#D8D5E0",
  },
  {
    name: "Nubes Púrpuras",
    hex: "#D8D2E0",
  },
  {
    name: "Sonrisa Púrpura",
    hex: "#D4CFE3",
  },
  {
    name: "Anochecer",
    hex: "#DCD1D9",
  },
  {
    name: "Toque de Violeta",
    hex: "#D4D1DF",
  },
  {
    name: "Lila Precioso",
    hex: "#D8D0D9",
  },
  {
    name: "Blanco Espliego",
    hex: "#D1D2DC",
  },
  {
    name: "Diamante Rosa",
    hex: "#DCC5DD",
  },
  {
    name: "Rosa Leyenda",
    hex: "#DEC7D8",
  },
  {
    name: "Violeta Clásico",
    hex: "#D6C8DE",
  },
  {
    name: "Rosado Fuerte",
    hex: "#E6BDD9",
  },
  {
    name: "Dedalera Violeta",
    hex: "#CDCCE1",
  },
  {
    name: "Toque de Lila",
    hex: "#C8CAE4",
  },
  {
    name: "Huevo de Pascua",
    hex: "#D8BEDB",
  },
  {
    name: "Violeta Veneciano",
    hex: "#D5BAD8",
  },
  {
    name: "Toque de Púrpura",
    hex: "#C7C7D9",
  },
  {
    name: "Sensación Lavanda",
    hex: "#C7C9D5",
  },
  {
    name: "Rosa Tecno",
    hex: "#DDB1D4",
  },
  {
    name: "Malva de Carnaval",
    hex: "#C6C0D9",
  },
  {
    name: "Lavanda Suave",
    hex: "#C5C6D2",
  },
  {
    name: "Toque de Amatista",
    hex: "#BEC1D6",
  },
  {
    name: "Lila Primaveral",
    hex: "#C8B7D6",
  },
  {
    name: "Sueño Rosado",
    hex: "#D2B6CC",
  },
  {
    name: "Bouquet de Lilas",
    hex: "#BDBBDA",
  },
  {
    name: "Notable",
    hex: "#BCBED5",
  },
  {
    name: "Campos de Espliegos",
    hex: "#C9B9C9",
  },
  {
    name: "Uva Suave",
    hex: "#C3BACE",
  },
  {
    name: "Campos de Espliegos",
    hex: "#C9B9C9",
  },
  {
    name: "Sensualidad",
    hex: "#C6B9CA",
  },
  {
    name: "Flor de Maracujá",
    hex: "#BCB7D5",
  },
  {
    name: "Espléndido Lila",
    hex: "#B8BCD4",
  },
  {
    name: "Lago Brumoso",
    hex: "#BEBACF",
  },
  {
    name: "Rosas Híbridas",
    hex: "#D6A4CC",
  },
  {
    name: "Brezo en Flor",
    hex: "#AEB5D4",
  },
  {
    name: "Primavera Lila",
    hex: "#BCA5CC",
  },
  {
    name: "Frambuesa Negra",
    hex: "#C3ADBD",
  },
  {
    name: "Varita Mágica",
    hex: "#AEB0C8",
  },
  {
    name: "Magia de Noche",
    hex: "#A9A7CE",
  },
  {
    name: "Magia de Hadas",
    hex: "#A6AFC8",
  },
  {
    name: "Lirio Rosa",
    hex: "#C98EBD",
  },
  {
    name: "Violeta Verona",
    hex: "#BC93C1",
  },
  {
    name: "Brezo",
    hex: "#A2A6C5",
  },
  {
    name: "Mezcla Púrpura",
    hex: "#A79DC8",
  },
  {
    name: "Lavanda Imperial",
    hex: "#97A1CF",
  },
  {
    name: "Dignidad",
    hex: "#AD94C2",
  },
  {
    name: "Tierra de Sueños",
    hex: "#B897AF",
  },
  {
    name: "Crepúsculo",
    hex: "#AF98B0",
  },
  {
    name: "Púrpura Parisino",
    hex: "#A599B9",
  },
  {
    name: "Flor de Ipé",
    hex: "#9895C3",
  },
  {
    name: "Manto Real",
    hex: "#A398B4",
  },
  {
    name: "Orquídea Pura",
    hex: "#969BBD",
  },
  {
    name: "Elevación",
    hex: "#9C98B6",
  },
  {
    name: "Princesa Púrpura",
    hex: "#9799B8",
  },
  {
    name: "Pasaje del Viñedo",
    hex: "#A493AC",
  },
  {
    name: "Púrpura Especial",
    hex: "#9390BE",
  },
  {
    name: "Ilusión",
    hex: "#A185B7",
  },
  {
    name: "Glicina en Flor",
    hex: "#9390B4",
  },
  {
    name: "Rosita",
    hex: "#B973A8",
  },
  {
    name: "Lavanda Salvaje",
    hex: "#8B90B5",
  },
  {
    name: "Ciruela Perfecta",
    hex: "#A676AB",
  },
  {
    name: "Pimpollo de Berenjena",
    hex: "#8D84B5",
  },
  {
    name: "Vívida Lavanda",
    hex: "#8B81BA",
  },
  {
    name: "Toque Violeta",
    hex: "#848DB5",
  },
  {
    name: "Rebelión Real",
    hex: "#7586C6",
  },
  {
    name: "Grandeza",
    hex: "#7C8DB5",
  },
  {
    name: "Púrpura Orgulloso",
    hex: "#9283A9",
  },
  {
    name: "Pasión Púrpura",
    hex: "#9477AC",
  },
  {
    name: "Lila Esplendoroso",
    hex: "#8085AE",
  },
  {
    name: "Confite",
    hex: "#9A729C",
  },
  {
    name: "Fábula",
    hex: "#9E7594",
  },
  {
    name: "Lila Profundo",
    hex: "#937693",
  },
  {
    name: "Frutas del Campo",
    hex: "#7E79A4",
  },
  {
    name: "Novillo",
    hex: "#757BA7",
  },
  {
    name: "Lila Claro",
    hex: "#83769B",
  },
  {
    name: "Lila Reluciente",
    hex: "#677DAD",
  },
  {
    name: "Arándano Jugoso",
    hex: "#6C7AAB",
  },
  {
    name: "Violeta Escocés",
    hex: "#7A779C",
  },
  {
    name: "Cinta Violeta",
    hex: "#85689E",
  },
  {
    name: "Delicias de Uva",
    hex: "#867091",
  },
  {
    name: "Deseo Púrpura",
    hex: "#71779E",
  },
  {
    name: "Uva Imperial",
    hex: "#7D6D99",
  },
  {
    name: "Ciruela Perfumada",
    hex: "#736F9C",
  },
  {
    name: "Amatista",
    hex: "#706CA2",
  },
  {
    name: "Sueño de Amatista",
    hex: "#6F68A4",
  },
  {
    name: "Drama Nocturno",
    hex: "#68709F",
  },
  {
    name: "Orquídea Violeta",
    hex: "#756A8B",
  },
  {
    name: "Merlot",
    hex: "#865C7D",
  },
  {
    name: "Púrpura Marroquina",
    hex: "#7D5F7F",
  },
  {
    name: "Fuego Violeta",
    hex: "#74568C",
  },
  {
    name: "Ciruela Intenso",
    hex: "#546894",
  },
  {
    name: "Palacio Persa",
    hex: "#625894",
  },
  {
    name: "Joya",
    hex: "#725A7F",
  },
  {
    name: "Retoño de Ciruela",
    hex: "#5A638D",
  },
  {
    name: "Torbellino de Mármol",
    hex: "#58618A",
  },
  {
    name: "Boutique Púrpura",
    hex: "#7C4E75",
  },
  {
    name: "Dulce Travesura",
    hex: "#655A7B",
  },
  {
    name: "Violeta Palacio",
    hex: "#605088",
  },
  {
    name: "Decreto Real",
    hex: "#4A5A88",
  },
  {
    name: "Fiesta de Brujas",
    hex: "#734D6C",
  },
  {
    name: "Brujita",
    hex: "#5F507A",
  },
  {
    name: "Xanadu",
    hex: "#57527E",
  },
  {
    name: "Nostalgia",
    hex: "#694E6B",
  },
  {
    name: "Pasas Californianas",
    hex: "#624B6E",
  },
  {
    name: "Violeta Victoriano *",
    hex: "#3F5189",
  },
  {
    name: "Fiesta de la Uva",
    hex: "#63406E",
  },
  {
    name: "Fruta Silvestre",
    hex: "#603960",
  },
  {
    name: "Victoria",
    hex: "#493F6C",
  },
  {
    name: "Violeta Natural",
    hex: "#523B64",
  },
  {
    name: "Licor de Mora",
    hex: "#573B55",
  },
  {
    name: "Púrpura de Windsor",
    hex: "#423B64",
  },
  {
    name: "Tulipán Negro",
    hex: "#484253",
  },
  {
    name: "Majestad *",
    hex: "#2E416E",
  },
  {
    name: "Noche de Truenos",
    hex: "#324169",
  },
  {
    name: "Zona del Crepúsculo",
    hex: "#333D6B",
  },
  {
    name: "Mirada de Ángel",
    hex: "#EBE8E9",
  },
  {
    name: "Temporada de Nieve",
    hex: "#E4E8EC",
  },
  {
    name: "Ciruela Especial",
    hex: "#E4E5EA",
  },
  {
    name: "Susurro de Brezos",
    hex: "#E1DFE4",
  },
  {
    name: "Malva Galáctico",
    hex: "#E3DEE2",
  },
  {
    name: "Toque Floral",
    hex: "#E7DDDE",
  },
  {
    name: "Púrpura Místico",
    hex: "#DFDDE2",
  },
  {
    name: "Castillo de Aire",
    hex: "#E0DDE0",
  },
  {
    name: "Rocío Matinal",
    hex: "#E3DBDC",
  },
  {
    name: "Belladona",
    hex: "#E0DBDE",
  },
  {
    name: "Sueño de Lilas",
    hex: "#DFDBDD",
  },
  {
    name: "Melodía Dulce",
    hex: "#DEDBDE",
  },
  {
    name: "Polvo de Diamantes",
    hex: "#DDDBDC",
  },
  {
    name: "Orquídea Vigorosa",
    hex: "#DAD2D8",
  },
  {
    name: "Violeta Perfumada",
    hex: "#D3D0D7",
  },
  {
    name: "Herencia de Dinastía",
    hex: "#D0D1D9",
  },
  {
    name: "Mañana Violeta",
    hex: "#D3D0D6",
  },
  {
    name: "Pico Sereno",
    hex: "#D5CFD4",
  },
  {
    name: "Violeta Vogue",
    hex: "#D1D1D6",
  },
  {
    name: "Digitalis",
    hex: "#D3CFD4",
  },
  {
    name: "Brisa de Invierno",
    hex: "#D1CFD3",
  },
  {
    name: "Lluvia Silenciosa",
    hex: "#D5CECF",
  },
  {
    name: "Poeta Invernal",
    hex: "#C2C7D6",
  },
  {
    name: "Toque de Armonía",
    hex: "#CDC2C4",
  },
  {
    name: "Hora del Diseño",
    hex: "#C8C1C4",
  },
  {
    name: "Por Siempre Tuya",
    hex: "#CCC0C0",
  },
  {
    name: "Bruma de Lilas",
    hex: "#C4C1C6",
  },
  {
    name: "Noche Plateada",
    hex: "#BEB9C5",
  },
  {
    name: "Canción de la Ciudad",
    hex: "#B8B9C8",
  },
  {
    name: "Malva Plateada",
    hex: "#BFB6BF",
  },
  {
    name: "Flor Salvaje",
    hex: "#B8B7C1",
  },
  {
    name: "Vergel Violeta",
    hex: "#BCB6BD",
  },
  {
    name: "Vergel Violeta",
    hex: "#BCB6BD",
  },
  {
    name: "Lila Agrisado",
    hex: "#B8B5BC",
  },
  {
    name: "Mar Cósmico",
    hex: "#B4B3B9",
  },
  {
    name: "Mar Cósmico",
    hex: "#B4B3B9",
  },
  {
    name: "Deleite Malva",
    hex: "#B2AFBB",
  },
  {
    name: "Otoño Brumoso",
    hex: "#B4AAAE",
  },
  {
    name: "Violeta Misteriosa",
    hex: "#B1A8AD",
  },
  {
    name: "Guante de Terciopelo",
    hex: "#A09DA7",
  },
  {
    name: "Reposo",
    hex: "#A29BA6",
  },
  {
    name: "Helado de Mora",
    hex: "#9C9BA9",
  },
  {
    name: "Crepúsculo Mágico",
    hex: "#9A95A6",
  },
  {
    name: "Violeta Antiguo",
    hex: "#9194AB",
  },
  {
    name: "Paz Nocturna",
    hex: "#9E919F",
  },
  {
    name: "Violeta Fantástica",
    hex: "#9693A1",
  },
  {
    name: "Dejo de Arcilla",
    hex: "#9A8B92",
  },
  {
    name: "Ópera",
    hex: "#8C8B95",
  },
  {
    name: "Lila Nocturno",
    hex: "#8A8692",
  },
  {
    name: "Mousse de Uva",
    hex: "#8C7F85",
  },
  {
    name: "Cerco de Lilas",
    hex: "#81808B",
  },
  {
    name: "Coulis de Ciruela",
    hex: "#7F7685",
  },
  {
    name: "Musgo Púrpura",
    hex: "#7E7584",
  },
  {
    name: "Arcilla Purpúrea",
    hex: "#84747C",
  },
  {
    name: "Piedra Exótica",
    hex: "#6E718E",
  },
  {
    name: "Reflejo de Amatista",
    hex: "#7D6D7E",
  },
  {
    name: "Helado de Ciruela",
    hex: "#7E6F75",
  },
  {
    name: "Secreto Violeta",
    hex: "#6C698D",
  },
  {
    name: "Pinot Noir",
    hex: "#6F6C81",
  },
  {
    name: "Serenata Española",
    hex: "#70677F",
  },
  {
    name: "Amatista Gris",
    hex: "#6A6372",
  },
  {
    name: "Art Deco",
    hex: "#66656D",
  },
  {
    name: "Berenjena Medio",
    hex: "#705F68",
  },
  {
    name: "Púrpura del Pacífico",
    hex: "#675F6D",
  },
  {
    name: "Pasa de Uva",
    hex: "#675C6D",
  },
  {
    name: "Lluvia de Mercurio",
    hex: "#695861",
  },
  {
    name: "Violeta Preciosa",
    hex: "#5A4D70",
  },
  {
    name: "Dramático",
    hex: "#534F74",
  },
  {
    name: "Fulgor de Medianoche",
    hex: "#585568",
  },
  {
    name: "Enmascarado",
    hex: "#595167",
  },
  {
    name: "Crucero Nocturno",
    hex: "#524F63",
  },
  {
    name: "Cóctel de Uva",
    hex: "#514961",
  },
  {
    name: "Púrpura Romano",
    hex: "#554C59",
  },
  {
    name: "Neblina Púrpura",
    hex: "#55455E",
  },
  {
    name: "Berenjena Intenso",
    hex: "#4E4653",
  },
  {
    name: "Tapiz Renacentista",
    hex: "#54414C",
  },
  {
    name: "Cardo Uva",
    hex: "#533F4F",
  },
  {
    name: "Meditación Púrpura",
    hex: "#444258",
  },
  {
    name: "Tesoro del Rey",
    hex: "#343E61",
  },
  {
    name: "Torta Selva Negra",
    hex: "#3C3A48",
  },
  {
    name: "Arcilla Relajante",
    hex: "#46383E",
  },
  {
    name: "Pasas al Ron",
    hex: "#45383B",
  },
  {
    name: "Violeta Galaxia",
    hex: "#3B343F",
  },
  {
    name: "Magia Negra",
    hex: "#3B343F",
  },
  {
    name: "Aventura en Esquí",
    hex: "#E1E7EA",
  },
  {
    name: "Azul Plata",
    hex: "#DBE1E1",
  },
  {
    name: "Himalaya",
    hex: "#DBE0E0",
  },
  {
    name: "Blanco Laguna",
    hex: "#D9E1E0",
  },
  {
    name: "Sombra de Gaviota",
    hex: "#D5E1E2",
  },
  {
    name: "Gris Ballena",
    hex: "#D9DEDF",
  },
  {
    name: "Horizonte",
    hex: "#D7DDE1",
  },
  {
    name: "Horizonte",
    hex: "#D7DDE1",
  },
  {
    name: "Sensación Primaveral",
    hex: "#D4DEE1",
  },
  {
    name: "Etéreo",
    hex: "#D5DDE0",
  },
  {
    name: "Euforia",
    hex: "#D5DEDE",
  },
  {
    name: "Luz Azul",
    hex: "#D3DDE0",
  },
  {
    name: "Alpes Suizos",
    hex: "#D6DAD7",
  },
  {
    name: "Azul Celestial",
    hex: "#CCD9DD",
  },
  {
    name: "Mar Silencioso",
    hex: "#CBD7DA",
  },
  {
    name: "Gris Fantasma",
    hex: "#D4D4D2",
  },
  {
    name: "Espíritu Osado",
    hex: "#CDD3D5",
  },
  {
    name: "Quarzo",
    hex: "#C9D1D2",
  },
  {
    name: "Sales de Lavanda",
    hex: "#C7D0D4",
  },
  {
    name: "Plata Aviador",
    hex: "#C8CED4",
  },
  {
    name: "Plata Aviador",
    hex: "#C8CED4",
  },
  {
    name: "Plata Fina",
    hex: "#CBCDCC",
  },
  {
    name: "Gris Alpino",
    hex: "#CCCCCB",
  },
  {
    name: "Carbonilla Claro",
    hex: "#CBCCCB",
  },
  {
    name: "Carbonilla Claro",
    hex: "#CBCCCB",
  },
  {
    name: "Pena Plateada",
    hex: "#C9CBC9",
  },
  {
    name: "Pena Plateada",
    hex: "#C9CBC9",
  },
  {
    name: "Melancolía",
    hex: "#BBC9D0",
  },
  {
    name: "Plata Azulado",
    hex: "#B9C4C9",
  },
  {
    name: "Azul Pálido",
    hex: "#B7C3C5",
  },
  {
    name: "Azul Pálido",
    hex: "#B7C3C5",
  },
  {
    name: "Azul Pálido",
    hex: "#B7C3C5",
  },
  {
    name: "Trofeo de Plata",
    hex: "#BDBFC0",
  },
  {
    name: "Piedra Sedosa",
    hex: "#BCBDBB",
  },
  {
    name: "Velo",
    hex: "#BABAB9",
  },
  {
    name: "Velo",
    hex: "#BABAB9",
  },
  {
    name: "Velo",
    hex: "#BABAB9",
  },
  {
    name: "Gris Escarcha",
    hex: "#B8BBB9",
  },
  {
    name: "Santuario",
    hex: "#ADB9BF",
  },
  {
    name: "Gris Plata",
    hex: "#B2B8BA",
  },
  {
    name: "Cielo Canadiense",
    hex: "#ADB9BB",
  },
  {
    name: "Esgrima",
    hex: "#AAB2B9",
  },
  {
    name: "Esgrima",
    hex: "#AAB2B9",
  },
  {
    name: "Azul Surrealista",
    hex: "#AFB1B3",
  },
  {
    name: "Toque de Aleación",
    hex: "#B0B0AF",
  },
  {
    name: "Gris Azulado",
    hex: "#A7B1B6",
  },
  {
    name: "Azul Chal",
    hex: "#A0A9AE",
  },
  {
    name: "Azul Chal",
    hex: "#A0A9AE",
  },
  {
    name: "Azul Balneario",
    hex: "#9DAAAE",
  },
  {
    name: "Día de Lluvia",
    hex: "#A2A5A5",
  },
  {
    name: "Costura Gris",
    hex: "#9E9F9E",
  },
  {
    name: "Adoquín",
    hex: "#9A9EA0",
  },
  {
    name: "Gris Granito",
    hex: "#9D9E9D",
  },
  {
    name: "Juego de Sombras",
    hex: "#8F9EA5",
  },
  {
    name: "Estilo Elegante",
    hex: "#90969C",
  },
  {
    name: "Gris Alambre",
    hex: "#8F9596",
  },
  {
    name: "Banderín Gris",
    hex: "#909396",
  },
  {
    name: "Sello Bruñido",
    hex: "#8F9391",
  },
  {
    name: "Gris Humo",
    hex: "#84939C",
  },
  {
    name: "Gris Icono",
    hex: "#8F908F",
  },
  {
    name: "Azul Burgués",
    hex: "#829096",
  },
  {
    name: "Marea Vigorosa",
    hex: "#7E8D99",
  },
  {
    name: "Tormenta Melancólica",
    hex: "#7C8D95",
  },
  {
    name: "Tormenta Melancólica",
    hex: "#7C8D95",
  },
  {
    name: "Tormenta Melancólica",
    hex: "#7C8D95",
  },
  {
    name: "Tormenta Melancólica",
    hex: "#7C8D95",
  },
  {
    name: "Gris Sofisticado",
    hex: "#878888",
  },
  {
    name: "Oscura Tormenta",
    hex: "#858585",
  },
  {
    name: "Cielo Iluminado",
    hex: "#778790",
  },
  {
    name: "Gris Titanio",
    hex: "#808080",
  },
  {
    name: "Suave Plateado",
    hex: "#767F84",
  },
  {
    name: "Hebilla de Plata",
    hex: "#7D7D7C",
  },
  {
    name: "Sombra de Noche",
    hex: "#737B84",
  },
  {
    name: "Pizarra Agrisada",
    hex: "#77797A",
  },
  {
    name: "Sonido Misterioso",
    hex: "#67767D",
  },
  {
    name: "Gris Urbano",
    hex: "#737372",
  },
  {
    name: "Noches Sombrías",
    hex: "#64727A",
  },
  {
    name: "Estación Tormentosa",
    hex: "#63707B",
  },
  {
    name: "Azul Astral",
    hex: "#5E717B",
  },
  {
    name: "Intercostero",
    hex: "#686D70",
  },
  {
    name: "Gris Nórdico",
    hex: "#626D74",
  },
  {
    name: "Gris Cable",
    hex: "#676A6B",
  },
  {
    name: "Luz de Sabiduría",
    hex: "#60666C",
  },
  {
    name: "Cosmos",
    hex: "#666665",
  },
  {
    name: "Mora Negra",
    hex: "#58626C",
  },
  {
    name: "Gris Maravilloso",
    hex: "#5B6466",
  },
  {
    name: "Peltre Aterciopelado",
    hex: "#616160",
  },
  {
    name: "Ballena Boreal",
    hex: "#4E5B66",
  },
  {
    name: "Campo Magnético",
    hex: "#555C5E",
  },
  {
    name: "Ballena Boreal",
    hex: "#4E5B66",
  },
  {
    name: "Anochecer en el Lago",
    hex: "#4E5A60",
  },
  {
    name: "Plomizo Intenso",
    hex: "#505354",
  },
  {
    name: "Negro Cibelina",
    hex: "#46545C",
  },
  {
    name: "Metal Forjado",
    hex: "#4F5050",
  },
  {
    name: "Gris Noble",
    hex: "#4D4F52",
  },
  {
    name: "Tormenta Nocturna",
    hex: "#494D52",
  },
  {
    name: "Tormenta Nocturna",
    hex: "#494D52",
  },
  {
    name: "Eclipse",
    hex: "#394A53",
  },
  {
    name: "Explosión de Gris",
    hex: "#364A55",
  },
  {
    name: "Toque de Recogimiento",
    hex: "#424748",
  },
  {
    name: "Gris Nocturno",
    hex: "#3D454D",
  },
  {
    name: "Gris Intenso",
    hex: "#3D4448",
  },
  {
    name: "Espacio de Fantasía",
    hex: "#3F3E3E",
  },
  {
    name: "Oscuridad Celeste",
    hex: "#3C3E3E",
  },
  {
    name: "Onix Profundo",
    hex: "#3A3A39",
  },
  {
    name: "Caudal Gris",
    hex: "#36393A",
  },
  {
    name: "Cristal de Turmalina",
    hex: "#343639",
  },
  {
    name: "Mica Negra",
    hex: "#343639",
  },
  {
    name: "Mica Negra",
    hex: "#343639",
  },
  {
    name: "Suave Hollín",
    hex: "#363635",
  },
  {
    name: "Plomo Profundo",
    hex: "#343333",
  },
  {
    name: "Secreto Oscuro",
    hex: "#2C2B2B",
  },
  {
    name: "Ártico Majestuoso",
    hex: "#ECEADF",
  },
  {
    name: "Blanco Estrella",
    hex: "#EBE9E0",
  },
  {
    name: "Copo de Nieve Eterno",
    hex: "#E7E6DD",
  },
  {
    name: "Reflejo de Lago",
    hex: "#DCDFD8",
  },
  {
    name: "Dunas Grises",
    hex: "#DEDDD3",
  },
  {
    name: "Telaraña",
    hex: "#DDDCD3",
  },
  {
    name: "Telaraña",
    hex: "#DDDCD3",
  },
  {
    name: "Plumas Rizadas",
    hex: "#DDDCD2",
  },
  {
    name: "Piedra Simple",
    hex: "#E0DBCB",
  },
  {
    name: "Corrida de Obstáculos",
    hex: "#D7DAD5",
  },
  {
    name: "Niebla de Campo",
    hex: "#D5DAD5",
  },
  {
    name: "Mañana de Setas",
    hex: "#DEDACB",
  },
  {
    name: "Mañana de Setas",
    hex: "#DEDACB",
  },
  {
    name: "Despertar",
    hex: "#D6D5CB",
  },
  {
    name: "Gris Chic",
    hex: "#D3D3CB",
  },
  {
    name: "Gris Borroso",
    hex: "#CDD4CE",
  },
  {
    name: "Gris Lechuza",
    hex: "#D0D0C6",
  },
  {
    name: "Luz Silenciosa",
    hex: "#D5D0BF",
  },
  {
    name: "Espejo de Agua",
    hex: "#C9CFCB",
  },
  {
    name: "Revolución Fluvial",
    hex: "#D3CDBE",
  },
  {
    name: "Marea Suave",
    hex: "#C6D0C8",
  },
  {
    name: "Gris Elefante",
    hex: "#C5C7C3",
  },
  {
    name: "Niebla",
    hex: "#C1C2BD",
  },
  {
    name: "Orégano",
    hex: "#C2C4B5",
  },
  {
    name: "Jeans Grises",
    hex: "#BDC3B9",
  },
  {
    name: "Jeans Grises",
    hex: "#BDC3B9",
  },
  {
    name: "Neblina Distante",
    hex: "#BDC4B8",
  },
  {
    name: "Jeans Grises",
    hex: "#BDC3B9",
  },
  {
    name: "Jeans Grises",
    hex: "#BDC3B9",
  },
  {
    name: "Escarcha de Jade",
    hex: "#BCC1BA",
  },
  {
    name: "Cria de Nutria",
    hex: "#C0C1B5",
  },
  {
    name: "Muro de Berlín",
    hex: "#BCBFBA",
  },
  {
    name: "Souvenir",
    hex: "#B8BFBA",
  },
  {
    name: "Sensación de Plata",
    hex: "#B5BBB5",
  },
  {
    name: "Té de Hierbabuena",
    hex: "#B7B8A7",
  },
  {
    name: "Estuco Envejecido",
    hex: "#B6B4A9",
  },
  {
    name: "Gris Bismuto",
    hex: "#B7B3A8",
  },
  {
    name: "Artemisa",
    hex: "#AFB4AC",
  },
  {
    name: "Sensación Romana",
    hex: "#B7B2A4",
  },
  {
    name: "Calma Gris",
    hex: "#B2B1A5",
  },
  {
    name: "Día Ventoso",
    hex: "#A9B4AB",
  },
  {
    name: "Caqui Luminoso",
    hex: "#AFB3A5",
  },
  {
    name: "Estaño",
    hex: "#A4A7A1",
  },
  {
    name: "Gris Hierba",
    hex: "#A7A89C",
  },
  {
    name: "Arbusto del Campo",
    hex: "#9DA5A0",
  },
  {
    name: "Guijarro Matinal",
    hex: "#9DA298",
  },
  {
    name: "Gris Brezo",
    hex: "#9C9B8E",
  },
  {
    name: "Pintura Rupestre",
    hex: "#9E998C",
  },
  {
    name: "Cola de Elefante",
    hex: "#9C968B",
  },
  {
    name: "Nivel del Mar",
    hex: "#93988F",
  },
  {
    name: "Sensación de Relax",
    hex: "#8F988F",
  },
  {
    name: "Mañana Brumosa",
    hex: "#94968A",
  },
  {
    name: "Momento de Gris",
    hex: "#949488",
  },
  {
    name: "Piedra Resbaladiza",
    hex: "#8E8E81",
  },
  {
    name: "Tormenta de Granizo",
    hex: "#838C86",
  },
  {
    name: "Piedra de Amolar",
    hex: "#878A83",
  },
  {
    name: "Gris Montaña",
    hex: "#8A8376",
  },
  {
    name: "Plata de Nutria",
    hex: "#7F847F",
  },
  {
    name: "Gris Icónico",
    hex: "#818278",
  },
  {
    name: "Gris Hamster",
    hex: "#7B8178",
  },
  {
    name: "Gris Hamster",
    hex: "#7B8178",
  },
  {
    name: "Pelaje Gris",
    hex: "#7F7B73",
  },
  {
    name: "Cemento Quemado",
    hex: "#757E78",
  },
  {
    name: "Gris Altiplano",
    hex: "#7D7668",
  },
  {
    name: "Gris Relajante",
    hex: "#717366",
  },
  {
    name: "Pino Inglés",
    hex: "#747264",
  },
  {
    name: "Matiz Musgo",
    hex: "#646E64",
  },
  {
    name: "Nube Invernal",
    hex: "#646967",
  },
  {
    name: "Tormenta de Noviembre",
    hex: "#68655D",
  },
  {
    name: "Toque de Pizarra",
    hex: "#616760",
  },
  {
    name: "Sensación Invernal",
    hex: "#63655D",
  },
  {
    name: "Gris Vigoroso",
    hex: "#5C615A",
  },
  {
    name: "Verde Granito",
    hex: "#5C6258",
  },
  {
    name: "Puente Cubierto",
    hex: "#55605B",
  },
  {
    name: "Oliva Magnífico",
    hex: "#575A4C",
  },
  {
    name: "Hierro Envejecido",
    hex: "#4F514D",
  },
  {
    name: "Péndulo",
    hex: "#4F5148",
  },
  {
    name: "Metrópolis",
    hex: "#47524D",
  },
  {
    name: "Sueño de Lajas",
    hex: "#4C4E48",
  },
  {
    name: "Marrón Camuflaje",
    hex: "#4E4A45",
  },
  {
    name: "Verde Noroeste",
    hex: "#404B40",
  },
  {
    name: "Musgo Español",
    hex: "#494538",
  },
  {
    name: "Gris Misterioso",
    hex: "#384340",
  },
  {
    name: "Verde Taberna",
    hex: "#2D3D39",
  },
  {
    name: "Escarcha Pura",
    hex: "#F3F2EC",
  },
  {
    name: "Blanco Maravilloso",
    hex: "#F1F1ED",
  },
  {
    name: "Alturas Polares",
    hex: "#F6F2E5",
  },
  {
    name: "Blanco Quirúrgico",
    hex: "#F1F0E8",
  },
  {
    name: "Tutú Blanco",
    hex: "#F5EFE5",
  },
  {
    name: "Fantasía de Algodón",
    hex: "#F2F1E5",
  },
  {
    name: "Lino Claro",
    hex: "#F4F0E4",
  },
  {
    name: "Toque de Malvavisco",
    hex: "#F5EEE5",
  },
  {
    name: "Blanco Crudo",
    hex: "#EEEFEA",
  },
  {
    name: "Blanco Crudo",
    hex: "#EEEFEA",
  },
  {
    name: "Dejo de Vainilla",
    hex: "#F7F0DF",
  },
  {
    name: "Alegría de Bebé",
    hex: "#F2EFE5",
  },
  {
    name: "Algodón Distinguido",
    hex: "#EEEFE8",
  },
  {
    name: "Nubes Etéreas",
    hex: "#F2ECE6",
  },
  {
    name: "Blanco Cal",
    hex: "#F2ECE5",
  },
  {
    name: "Sensación de Escarcha",
    hex: "#F0EEE5",
  },
  {
    name: "Blanco Glacis",
    hex: "#EEEEE7",
  },
  {
    name: "Boda Primaveral",
    hex: "#F2EDE3",
  },
  {
    name: "Blanco Polar",
    hex: "#F1ECE5",
  },
  {
    name: "Casamiento de Verano",
    hex: "#EDEAEB",
  },
  {
    name: "Brisa de Algodón",
    hex: "#F0EDE4",
  },
  {
    name: "Vallado de Madera",
    hex: "#F0EEE3",
  },
  {
    name: "Gris Rocío",
    hex: "#ECEDE7",
  },
  {
    name: "Gris Rocío",
    hex: "#ECEDE7",
  },
  {
    name: "Blanco Divino",
    hex: "#F0EDE2",
  },
  {
    name: "Chispazo de Marfil",
    hex: "#F7EBDC",
  },
  {
    name: "Blanco Floral",
    hex: "#F1EDE0",
  },
  {
    name: "Encaje Nordestino",
    hex: "#EFEDE2",
  },
  {
    name: "Toque de Humo",
    hex: "#EBEAE8",
  },
  {
    name: "Lino Voluptuoso",
    hex: "#F3EDDD",
  },
  {
    name: "Pieza de Cristal",
    hex: "#E9EAE9",
  },
  {
    name: "Soplo de Nieve",
    hex: "#E8EAE9",
  },
  {
    name: "Sonata Lunar",
    hex: "#E9E9E9",
  },
  {
    name: "Blanco Chantilly",
    hex: "#F0E8E2",
  },
  {
    name: "Blanco Correcto",
    hex: "#EEE9E3",
  },
  {
    name: "Brillo Suave",
    hex: "#EDE8E4",
  },
  {
    name: "Magnolia Cristalina",
    hex: "#E9E9E7",
  },
  {
    name: "Blanco Arizona",
    hex: "#F5EBD9",
  },
  {
    name: "Crema Chantilly",
    hex: "#F6EBD8",
  },
  {
    name: "Perla Natural",
    hex: "#EFE9E1",
  },
  {
    name: "Serenidad",
    hex: "#F1E8E0",
  },
  {
    name: "Toque Suave",
    hex: "#ECE9E4",
  },
  {
    name: "Efecto Luminoso",
    hex: "#F0E7E1",
  },
  {
    name: "Precioso Momento",
    hex: "#EFE9DF",
  },
  {
    name: "Blanco Artesano",
    hex: "#EDE8E2",
  },
  {
    name: "Colinas de Invierno",
    hex: "#E9E7E6",
  },
  {
    name: "Blanco Panadero",
    hex: "#F1E9DC",
  },
  {
    name: "Espacio Interno",
    hex: "#EEE6E2",
  },
  {
    name: "Blanco Susurro",
    hex: "#EEE9DE",
  },
  {
    name: "Blanco Casamiento",
    hex: "#ECE9E0",
  },
  {
    name: "Blanco Terraza",
    hex: "#F2EAD9",
  },
  {
    name: "Tempestad de Arena",
    hex: "#F4E9D7",
  },
  {
    name: "Tafetán",
    hex: "#EFE8DD",
  },
  {
    name: "Aria Suave",
    hex: "#EEE7DF",
  },
  {
    name: "Fantasía Marfil",
    hex: "#F4E9D6",
  },
  {
    name: "Leche con Vainilla",
    hex: "#F1E8DA",
  },
  {
    name: "Bouquet de Almendras",
    hex: "#F2E8D9",
  },
  {
    name: "Garza Real",
    hex: "#EDE8DD",
  },
  {
    name: "Café Suizo",
    hex: "#EFE8DA",
  },
  {
    name: "Sensación Urbana",
    hex: "#E6E7E4",
  },
  {
    name: "Bruma Mística",
    hex: "#EFE8D9",
  },
  {
    name: "Blanco Natural",
    hex: "#EBE7DE",
  },
  {
    name: "Glamour",
    hex: "#EFE5DC",
  },
  {
    name: "Toque de Durazno",
    hex: "#F0E5DB",
  },
  {
    name: "Polen",
    hex: "#F3E8D4",
  },
  {
    name: "Blanco Lino",
    hex: "#F1E8D4",
  },
  {
    name: "Perfume de Día",
    hex: "#EFE4DA",
  },
  {
    name: "Jardín Neutral",
    hex: "#F1E7D3",
  },
  {
    name: "Cielo Blanco",
    hex: "#EBE6DA",
  },
  {
    name: "Cisne Blanco",
    hex: "#ECE6D8",
  },
  {
    name: "Mañana Alucinante",
    hex: "#EAE4DB",
  },
  {
    name: "Blanco Estelar",
    hex: "#E8E3DC",
  },
  {
    name: "Leyenda de los Lobos",
    hex: "#EDE3D5",
  },
  {
    name: "Yogur Natural",
    hex: "#E7E4D9",
  },
  {
    name: "Ópalo",
    hex: "#EAE3D7",
  },
  {
    name: "Sensación Natural",
    hex: "#ECE2D1",
  },
  {
    name: "Neutro Permanente",
    hex: "#EAE0CD",
  },
  {
    name: "Aire Fresco",
    hex: "#ECEAED",
  },
  {
    name: "Suave Nieve",
    hex: "#EEEDE5",
  },
  {
    name: "Gota de Perla",
    hex: "#E8EAEB",
  },
  {
    name: "Inocencia",
    hex: "#EAE9E9",
  },
  {
    name: "Blanco Inspiración",
    hex: "#ECEAE6",
  },
  {
    name: "Brillo de Cristal",
    hex: "#E8E8EB",
  },
  {
    name: "Sereno",
    hex: "#E8E9EA",
  },
  {
    name: "Atmósfera",
    hex: "#E8EAE9",
  },
  {
    name: "Romance",
    hex: "#E6EAEA",
  },
  {
    name: "Simple Presencia",
    hex: "#E9E8E8",
  },
  {
    name: "Calma Matutina",
    hex: "#EFE8E2",
  },
  {
    name: "Caminata de Invierno",
    hex: "#E7EAE8",
  },
  {
    name: "Sendero de Pingüinos",
    hex: "#E9E8E8",
  },
  {
    name: "Perla Agrisada",
    hex: "#E9E9E7",
  },
  {
    name: "Sombra Pálida",
    hex: "#ECE8E5",
  },
  {
    name: "Ala Blanca",
    hex: "#E9EAE5",
  },
  {
    name: "Historia Secreta",
    hex: "#EDE8E3",
  },
  {
    name: "Estrella Nueva",
    hex: "#E6E9E9",
  },
  {
    name: "Gotas de Lluvia",
    hex: "#E8E9E7",
  },
  {
    name: "Estrella Nueva",
    hex: "#E6E9E9",
  },
  {
    name: "Domingo Nublado",
    hex: "#ECE9E2",
  },
  {
    name: "Sensación Diáfana",
    hex: "#EAE8E5",
  },
  {
    name: "Día de Invierno",
    hex: "#E7EAE6",
  },
  {
    name: "Toque de Invierno",
    hex: "#EAE8E5",
  },
  {
    name: "Jazmín Dorado",
    hex: "#EBE8E4",
  },
  {
    name: "Malvavisco",
    hex: "#EDE8E2",
  },
  {
    name: "Martini Seco",
    hex: "#EAE8E4",
  },
  {
    name: "Porcelana Antigua",
    hex: "#EFE8DF",
  },
  {
    name: "Caricia",
    hex: "#EEE7E1",
  },
  {
    name: "Vientos Calmos",
    hex: "#EFE7E0",
  },
  {
    name: "Vientos Calmos",
    hex: "#EFE7E0",
  },
  {
    name: "Erizo Blanco",
    hex: "#EDE7E1",
  },
  {
    name: "Porcelana",
    hex: "#E8E8E5",
  },
  {
    name: "Ventisca",
    hex: "#E6E9E6",
  },
  {
    name: "Porcelana",
    hex: "#E8E8E5",
  },
  {
    name: "Bruma Tranquila",
    hex: "#EDE8DF",
  },
  {
    name: "Lluvia de Barcelona",
    hex: "#E4E7E9",
  },
  {
    name: "Blanco Minimalista",
    hex: "#EBE8E1",
  },
  {
    name: "Luna de Seda",
    hex: "#E8E8E4",
  },
  {
    name: "Escondite Silencioso",
    hex: "#E8E7E3",
  },
  {
    name: "Blanco Estibador",
    hex: "#F0E8DA",
  },
  {
    name: "Escondite Silencioso",
    hex: "#E8E7E3",
  },
  {
    name: "Toque de Rosa",
    hex: "#EAE6E1",
  },
  {
    name: "Mañana Fría",
    hex: "#E2E7E7",
  },
  {
    name: "Taza de Té",
    hex: "#EDE4DE",
  },
  {
    name: "Lluvia de Terciopelo",
    hex: "#E2E5E6",
  },
  {
    name: "Papel Valioso",
    hex: "#E8E4E0",
  },
  {
    name: "Niebla del Pacífico",
    hex: "#EDE6D8",
  },
  {
    name: "Suspiro de Lavanda",
    hex: "#DFE2E7",
  },
  {
    name: "Blanco Antiguo",
    hex: "#EBE5D8",
  },
  {
    name: "Sabiduría Blanca",
    hex: "#E5E0DC",
  },
  {
    name: "Andino",
    hex: "#DDE2E2",
  },
  {
    name: "Horizonte Urbano",
    hex: "#DEE2E0",
  },
  {
    name: "Caminata Invernal",
    hex: "#E1E2DD",
  },
  {
    name: "Pájaro de Invierno",
    hex: "#E4E1DB",
  },
  {
    name: "Lana Suave",
    hex: "#E8E0D8",
  },
  {
    name: "Blanco Gatito",
    hex: "#E6E1D8",
  },
  {
    name: "Chiffon",
    hex: "#E0E1DC",
  },
  {
    name: "Gris Estupendo",
    hex: "#DAE0E2",
  },
  {
    name: "Gris Estupendo",
    hex: "#DAE0E2",
  },
  {
    name: "Beige Pálido",
    hex: "#E5DFD7",
  },
  {
    name: "Espejismo Vigoroso",
    hex: "#E7E0D3",
  },
  {
    name: "Velo Violeta",
    hex: "#DBDCE2",
  },
  {
    name: "Amatista Difusa",
    hex: "#DBDDE0",
  },
  {
    name: "Onda Acústica",
    hex: "#DCDCE0",
  },
  {
    name: "Gaviota en Reposo",
    hex: "#DEDEDA",
  },
  {
    name: "Semilla de Perla",
    hex: "#E8DECE",
  },
  {
    name: "Equinoccio de Otoño",
    hex: "#E3DCD4",
  },
  {
    name: "Carbón del Ártico",
    hex: "#DBDBDD",
  },
  {
    name: "Bizcocho de Leche",
    hex: "#E3DDD2",
  },
  {
    name: "Pantalla Gris",
    hex: "#DDDCD9",
  },
  {
    name: "Ballet Sobre Hielo",
    hex: "#DCDBDB",
  },
  {
    name: "Blanco Tul",
    hex: "#DBDCDA",
  },
  {
    name: "Glicina Blanca",
    hex: "#DADBDC",
  },
  {
    name: "Pelícano",
    hex: "#DEDCD7",
  },
  {
    name: "Conejo Blanco",
    hex: "#DDDAD8",
  },
  {
    name: "Bello Brezo",
    hex: "#E0DAD5",
  },
  {
    name: "Conejo Blanco",
    hex: "#DDDAD8",
  },
  {
    name: "Flauta de Madera",
    hex: "#E4DBD0",
  },
  {
    name: "Bello Brezo",
    hex: "#E0DAD5",
  },
  {
    name: "Cabras Blancas",
    hex: "#DFDAD5",
  },
  {
    name: "Cabras Blancas",
    hex: "#DFDAD5",
  },
  {
    name: "Toque de Gris",
    hex: "#DADAD9",
  },
  {
    name: "Nubes Grises",
    hex: "#D9DAD8",
  },
  {
    name: "Plaza",
    hex: "#DADBD6",
  },
  {
    name: "Campo Nevado",
    hex: "#D8D8D7",
  },
  {
    name: "Hielo Sombreado",
    hex: "#D7D9D6",
  },
];
