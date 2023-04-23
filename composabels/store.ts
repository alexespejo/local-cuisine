export const useDestinationsStore = defineStore("destination", () => {
 const westwood = reactive({
  name: "Westwood",
  general: [
   "Westwood is a city in Los Angeles County, California, United States. It is the home of the University of California, Los Angeles (UCLA).",
  ],
  local_cuisine: {
   popularDishes: [
    {
     name: "Carne Asada",
     img: "../assets/carneAsada.png",
     similar_dish: "Carne Asada Tacos",
     description:
      "Carne Asada is a Mexican dish of grilled beef. It is typically served with tacos or burritos.",
    },
    {
     name: "California Burrito",
     similar_dish: "Breakfast Burrito",
     img: "../assets/californiaBurrito.png",
     description:
      "The California Burrito is a large burrito filled with carne asada, cheese, guacamole, and french fries.",
    },
    {
     name: "Tostada",
     similar_dish: "Taco Salad",
     img: "../assets/tostada.png",
     description:
      "A tostada is a flat, deep-fried corn tortilla topped with a variety of ingredients such as beans, lettuce, tomatoes, cheese, and sour cream.",
    },
    {
     name: "Fish Tacos",
     similar_dish: "Shrimp Tacos",
     description:
      "Fish tacos are a traditional Mexican dish made with fried or grilled fish, usually served with a variety of toppings such as lettuce, salsa, and cheese.",
    },
   ],
   appetizers: [
    {
     name: "Ceviche",
     similar_dish: "Cocktail de Camaron",
     description:
      "Ceviche is a traditional Latin American dish made with raw fish marinated in citrus juices, onions, and spices.",
    },
    {
     name: "Guacamole",
     similar_dish: "Avocado Dip",
     description:
      "Guacamole is a Mexican dip made with mashed avocados, onions, tomatoes, and spices.",
    },
    {
     name: "Quesadillas",
     similar_dish: "Taquitos",
     description:
      "Quesadillas are a Mexican dish consisting of a tortilla filled with cheese and other ingredients, then grilled or fried.",
    },
    {
     name: "Empanadas",
     similar_dish: "Pies",
     description:
      "Empanadas are a type of pastry filled with various fillings, such as meat, cheese, vegetables, and fruits.",
    },
   ],
   beverages: [
    {
     name: "Horchata",
     similar_dish: "Agua Fresca",
     description:
      "Horchata is a traditional Mexican drink made with rice, cinnamon, and sugar.",
    },
    {
     name: "Agua Fresca",
     similar_dish: "Horchata",
     description:
      "Agua Fresca is a traditional Mexican drink made with fruit, water, and sugar.",
    },
    {
     name: "Agua de Jamaica",
     similar_dish: "Agua de Tamarindo",
     description:
      "Agua de Jamaica is a traditional Mexican drink made with hibiscus flowers, water, and sugar.",
    },
    {
     name: "Michelada",
     similar_dish: "Clamato",
     description:
      "Michelada is a Mexican beer-based cocktail made with beer, lime juice, and various spices and sauces.",
    },
   ],
   desserts: [
    {
     name: "Churros",
     similar_dish: "Buñuelos",
     description:
      "Churros are a traditional Mexican dessert made from fried dough and topped with cinnamon and sugar.",
    },
    {
     name: "Flan",
     similar_dish: "Creme Caramel",
     description:
      "Flan is a traditional Mexican custard dessert made with eggs, milk, and sugar.",
    },
    {
     name: "Tres Leches Cake",
     similar_dish: "Pastel de Tres Leches",
     description:
      "Tres Leches Cake is a traditional Mexican cake made with three types of milk, eggs, and sugar.",
    },
    {
     name: "Arroz con Leche",
     similar_dish: "Rice Pudding",
     description:
      "Arroz con Leche is a traditional Mexican dessert made with rice, milk, and cinnamon.",
    },
   ],
   history: [
    "The cuisine of Westwood is a mix of Mexican, American, and international flavors, influenced by the many cultures that have made the city their home.",
   ],
  },
 });
 const lbc = reactive({
  name: "Long Beach",
  general: [
   "Long Beach is located in the Los Angeles metropolitan area, and is home to a diverse range of cuisines from around the world. The local cuisine is heavily influenced by Mexican, Latin American, and Asian flavors. Seafood is also popular in the region, as the city is located near the ocean.",
  ],
  local_cuisine: {
   popularDishes: [
    {
     name: "Ceviche",
     similar_dish: "Tiradito",
     description:
      "Ceviche is a dish made with fresh raw fish marinated in citrus juice, usually with onions, tomatoes, cilantro, and other spices. It is a popular dish in Latin American cuisine.",
    },
    {
     name: "Tostada",
     similar_dish: "Taco",
     description:
      "Tostadas are a popular Mexican dish made with a fried corn tortilla topped with various ingredients such as refried beans, lettuce, cheese, and salsa. They are often served as an appetizer or snack.",
    },
    {
     name: "Pho",
     similar_dish: "Ramen",
     description:
      "Pho is a Vietnamese soup made with rice noodles, herbs, and a variety of meats. It is a popular dish in the region and can be found in many restaurants in Long Beach.",
    },
    {
     name: "Churros",
     similar_dish: "Donuts",
     description:
      "Churros are a popular Mexican dessert made with deep-fried dough and rolled in sugar and cinnamon. They are often served with hot chocolate or coffee.",
    },
   ],
   appetizers: [
    {
     name: "Guacamole",
     similar_dish: "Avocado Toast",
     description:
      "Guacamole is a popular Mexican dish made with mashed avocados, tomatoes, onions, cilantro, and other spices. It is often served as a dip or spread.",
    },
    {
     name: "Empanadas",
     similar_dish: "Samosas",
     description:
      "Empanadas are a popular Latin American dish made with a pastry dough filled with various ingredients such as beef, chicken, or cheese. They are often served as an appetizer or snack.",
    },
    {
     name: "Taquitos",
     similar_dish: "Flautas",
     description:
      "Taquitos are a popular Mexican dish made with small rolled corn tortillas filled with various ingredients such as beef, chicken, or cheese. They are often served as an appetizer or snack.",
    },
    {
     name: "Quesadillas",
     similar_dish: "Tacos",
     description:
      "Quesadillas are a popular Mexican dish made with a flour or corn tortilla filled with cheese and other ingredients such as beef, chicken, or vegetables. They are often served as an appetizer or snack.",
    },
   ],
   beverages: [
    {
     name: "Horchata",
     similar_dish: "Agua Fresca",
     description:
      "Horchata is a popular Mexican beverage made with rice, milk, sugar, and cinnamon. It is often served cold as a refreshing drink.",
    },
    {
     name: "Agua de Jamaica",
     similar_dish: "Hibiscus Tea",
     description:
      "Agua de Jamaica is a popular Mexican beverage made with hibiscus flowers, sugar, and water. It is often served cold as a refreshing drink.",
    },
    {
     name: "Atole",
     similar_dish: "Champurrado",
     description:
      "Atole is a popular Mexican beverage made with masa, water, and various spices. It is often served hot as a comforting drink.",
    },
    {
     name: "Tepache",
     similar_dish: "Jamaica Water",
     description:
      "Tepache is a popular Mexican beverage made with fermented pineapple, sugar, and spices. It is often served cold as a refreshing drink.",
    },
   ],
   desserts: [
    {
     name: "Flan",
     similar_dish: "Creme Brulee",
     description:
      "Flan is a popular Mexican dessert made with eggs, milk, and sugar. It is often served cold as a sweet and creamy treat.",
    },
    {
     name: "Tres Leches Cake",
     similar_dish: "Baked Alaska",
     description:
      "Tres Leches Cake is a popular Mexican dessert made with three kinds of milk, eggs, and sugar. It is often served cold as a sweet and creamy treat.",
    },
    {
     name: "Churros con Chocolate",
     similar_dish: "Fried Dough",
     description:
      "Churros con Chocolate is a popular Mexican dessert made with deep-fried dough and served with a hot chocolate sauce. It is often served as a sweet and indulgent treat.",
    },
    {
     name: "Arroz con Leche",
     similar_dish: "Rice Pudding",
     description:
      "Arroz con Leche is a popular Mexican dessert made with rice, milk, and sugar. It is often served cold as a sweet and creamy treat.",
    },
   ],
   history: [
    "The cuisine of Long Beach has been heavily influenced by its proximity to Mexico and Latin America, as well as its large Asian population. Seafood has also been a popular part of the local cuisine due to its coastal location.",
   ],
  },
 });
 const france = reactive({
  name: "France",
  general: [
   "France is known for its rich culinary heritage, with regional specialties that vary from one region to the next. French cuisine is considered one of the finest in the world, with a focus on fresh ingredients, classic techniques, and complex flavors.",
  ],
  local_cuisine: {
   popularDishes: [
    {
     name: "Coq au Vin",
     similar_dish: "Chicken in Red Wine",
     description:
      "Coq au vin is a classic French dish of chicken braised in red wine, lardons, mushrooms, and garlic.",
    },
    {
     name: "Bouillabaisse",
     similar_dish: "Seafood Stew",
     description:
      "Bouillabaisse is a traditional Provençal fish stew made with various types of fish, shellfish, potatoes, and aromatic herbs and spices.",
    },
    {
     name: "Cassoulet",
     similar_dish: "Bean stew",
     description:
      "Cassoulet is a French dish of white beans cooked with pork, sausage, and other meats.",
    },
    {
     name: "Tarte Tatin",
     similar_dish: "Upside-down Apple Pie",
     description:
      "Tarte Tatin is an upside-down apple tart made with butter, sugar, and apples cooked in a pastry crust.",
    },
   ],
   appetizers: [
    {
     name: "Escargots",
     similar_dish: "Snails",
     description:
      "Escargots are snails cooked in a garlic-butter sauce and served in their shells.",
    },
    {
     name: "Foie Gras",
     similar_dish: "Goose Liver Pâté",
     description: "Foie gras is a rich and creamy pâté made from goose liver.",
    },
    {
     name: "Croque Monsieur",
     similar_dish: "Grilled Ham and Cheese Sandwich",
     description:
      "Croque monsieur is a grilled ham and cheese sandwich topped with a béchamel sauce.",
    },
    {
     name: "Gougères",
     similar_dish: "Cheese Puffs",
     description:
      "Gougères are cheese puffs made with choux pastry and Gruyère cheese.",
    },
   ],
   beverges: [
    {
     name: "Wine",
     similar_dish: "",
     description:
      "France is known for its vast selection of wines, from reds to whites, sparkling, and fortified wines.",
    },
    {
     name: "Cider",
     similar_dish: "",
     description:
      "Cider is a popular beverage in France made from apples or other fruits.",
    },
    {
     name: "Calvados",
     similar_dish: "",
     description:
      "Calvados is an apple brandy made in Normandy and is often served as an after-dinner drink.",
    },
    {
     name: "Kir",
     similar_dish: "",
     description:
      "Kir is a French cocktail made with white wine and crème de cassis (blackcurrant liqueur).",
    },
   ],
   desserts: [
    {
     name: "Crème Brûlée",
     similar_dish: "Burnt Cream",
     description:
      "Crème brûlée is a classic French dessert of custard topped with a caramelized sugar crust.",
    },
    {
     name: "Éclair",
     similar_dish: "Choux Pastry",
     description:
      "Éclairs are choux pastries filled with cream and topped with a chocolate glaze.",
    },
    {
     name: "Macarons",
     similar_dish: "Meringue Cookies",
     description:
      "Macarons are meringue cookies made with almond flour and filled with flavored ganache or buttercream.",
    },
    {
     name: "Tarte aux Pommes",
     similar_dish: "Apple Pie",
     description:
      "Tarte aux pommes is a French apple pie made with a sweet pastry crust and apple slices.",
    },
   ],
   history: [
    "French cuisine has evolved over the centuries, with regional variations and influences from other cultures, such as Italian and Spanish, as well as North African and Middle Eastern cuisines.",
   ],
  },
 });
 const singapore = reactive({
  name: "Singapore",
  general: [
   "Singapore is a small island nation with a diverse population and a rich history of food. The cuisine of Singapore is a reflection of the country’s history, with influences from Chinese, Malay, Indian, and Peranakan cultures. Singaporean cuisine is known for its unique flavors, spices, and ingredients.",
  ],
  local_cuisine: {
   popularDishes: [
    {
     name: "Hainanese Chicken Rice",
     similar_dish:
      "Hainanese Chicken Rice is similar to Chinese-style steamed chicken with rice.",
     description:
      "Hainanese Chicken Rice is a popular dish in Singapore, made with poached chicken served with fragrant rice cooked in chicken fat and stock. The dish is usually served with a spicy chili sauce, ginger-garlic sauce, and cucumber slices.",
    },
    {
     name: "Laksa",
     similar_dish: "Laksa is similar to Malaysian and Indonesian curries.",
     description:
      "Laksa is a popular noodle dish in Singapore, made with a spicy coconut-based curry broth, rice noodles, and a variety of toppings such as shrimp, fish cake, tofu, and eggs. It is usually served with a dollop of sambal, a spicy chili sauce.",
    },
    {
     name: "Satay",
     similar_dish: "Satay is similar to kebabs.",
     description:
      "Satay is a popular snack in Singapore, made with marinated meat (usually chicken, beef, or pork) that is grilled on skewers and served with a spicy peanut sauce. It is usually served with cucumber slices and ketupat, a type of compressed rice cake.",
    },
    {
     name: "Chili Crab",
     similar_dish:
      "Chili Crab is similar to other types of seafood stir-fry dishes.",
     description:
      "Chili Crab is a popular dish in Singapore, made with mud crabs cooked in a sweet and spicy tomato and chili sauce. The dish is usually served with mantou, a type of steamed bun, to soak up the sauce.",
    },
   ],
   appetizers: [
    {
     name: "Popiah",
     similar_dish: "Popiah is similar to spring rolls.",
     description:
      "Popiah is a popular appetizer in Singapore, made with thin crepes filled with a mixture of cooked vegetables and prawns. It is usually served with a sweet and spicy sauce.",
    },
    {
     name: "Kueh Pie Tee",
     similar_dish: "Kueh Pie Tee is similar to Chinese-style fried wontons.",
     description:
      "Kueh Pie Tee is a popular snack in Singapore, made with a thin pastry cup filled with a mixture of cooked vegetables and prawns. It is usually served with a sweet and spicy sauce.",
    },
    {
     name: "Otak-Otak",
     similar_dish: "Otak-Otak is similar to fish cakes.",
     description:
      "Otak-Otak is a popular snack in Singapore, made with a paste of fish, spices, and coconut milk wrapped in banana leaves and grilled. It is usually served with a sweet and spicy sauce.",
    },
    {
     name: "Nasi Lemak",
     similar_dish:
      "Nasi Lemak is similar to other types of coconut rice dishes.",
     description:
      "Nasi Lemak is a popular dish in Singapore, made with fragrant coconut rice served with a variety of toppings such as fried anchovies, boiled egg, peanuts, and sambal, a spicy chili sauce. It is usually served with a side of curry or other types of sauces.",
    },
   ],
   beverages: [
    {
     name: "Teh Tarik",
     similar_dish: "Teh Tarik is similar to other types of milky tea.",
     description:
      "Teh Tarik is a popular beverage in Singapore, made with black tea mixed with condensed milk and poured back and forth between two cups to create a frothy texture. It is usually served hot or cold.",
    },
    {
     name: "Kopi",
     similar_dish: "Kopi is similar to other types of coffee.",
     description:
      "Kopi is a popular beverage in Singapore, made with strong, black coffee mixed with condensed milk and sugar. It is usually served hot or cold.",
    },
    {
     name: "Bandung",
     similar_dish: "Bandung is similar to other types of rose-flavored drinks.",
     description:
      "Bandung is a popular beverage in Singapore, made with rose syrup mixed with condensed milk and served over ice. It is usually served cold.",
    },
    {
     name: "Milo",
     similar_dish:
      "Milo is similar to other types of chocolate-flavored drinks.",
     description:
      "Milo is a popular beverage in Singapore, made with a chocolate-flavored powder mixed with hot or cold milk. It is usually served hot or cold.",
    },
   ],
   desserts: [
    {
     name: "Pulut Hitam",
     similar_dish:
      "Pulut Hitam is similar to other types of glutinous rice desserts.",
     description:
      "Pulut Hitam is a popular dessert in Singapore, made with black glutinous rice cooked in coconut milk and served with a dollop of palm sugar syrup. It is usually served warm.",
    },
    {
     name: "Kueh Lapis",
     similar_dish: "Kueh Lapis is similar to other types of layered cakes.",
     description:
      "Kueh Lapis is a popular cake in Singapore, made with layers of steamed rice flour and coconut milk, and topped with a variety of sweet ingredients such as nuts, raisins, and pandan leaves. It is usually served cold.",
    },
    {
     name: "Cendol",
     similar_dish: "Cendol is similar to other types of shaved ice desserts.",
     description:
      "Cendol is a popular dessert in Singapore, made with shaved ice, coconut milk, and a variety of sweet ingredients such as pandan jelly, red bean paste, and palm sugar syrup. It is usually served cold.",
    },
    {
     name: "Ondeh Ondeh",
     similar_dish:
      "Ondeh Ondeh is similar to other types of glutinous rice balls.",
     description:
      "Ondeh Ondeh is a popular dessert in Singapore, made with glutinous rice balls filled with a mixture of palm sugar and coconut, and rolled in grated coconut. It is usually served warm.",
    },
   ],
   history: [
    "Singaporean cuisine has evolved over the centuries, with influences from Chinese, Malay, Indian, and Peranakan cultures.",
   ],
  },
 });

 const spain = reactive({
  name: "Spain",
  general: [
   "Spain has a rich and varied cuisine that is heavily influenced by the country's geography and climate. The cuisine of Spain is heavily based on fresh, seasonal ingredients, with dishes that are both simple and flavorful. Local dishes often feature a variety of seafood, rice, and vegetables. Spanish cuisine also includes a wide variety of regional specialties and dishes from other countries.",
  ],
  local_cuisine: {
   popularDishes: [
    {
     name: "Paella",
     similar_dish: "Arroz a la cubana",
     description:
      "Paella is a traditional Spanish dish made with rice, vegetables, and either seafood or meat. It is usually served with a side of aioli, a garlic mayonnaise sauce. Paella is a popular dish in Spain and is often served at festivals and special occasions.",
    },
    {
     name: "Gazpacho",
     similar_dish: "Salmorejo",
     description:
      "Gazpacho is a cold soup made from tomatoes, garlic, olive oil, and other vegetables. It is usually served chilled and can be topped with diced vegetables or croutons. Gazpacho is a popular summer dish in Spain and is often served as an appetizer.",
    },
    {
     name: "Tortilla de patatas",
     similar_dish: "Tortilla española",
     description:
      "Tortilla de patatas is a traditional Spanish omelette made with potatoes, onions, and eggs. It is usually served as a tapa or snack and can be served hot or cold. Tortilla de patatas is a popular dish in Spain and is often served at family meals or parties.",
    },
    {
     name: "Churros",
     similar_dish: "Buñuelos",
     description:
      "Churros are a traditional Spanish dessert made from deep-fried dough. They are usually served with a cup of hot chocolate or coffee and can be topped with sugar or cinnamon. Churros are a popular dessert in Spain and are often served at festivals or special occasions.",
    },
   ],
   appetizers: [
    {
     name: "Croquetas",
     similar_dish: "Croquettes",
     description:
      "Croquetas are a popular Spanish appetizer made from a mixture of mashed potatoes, ham, and cheese. They are usually deep-fried and served with aioli or other dipping sauces. Croquetas are a popular tapa in Spain and are often served at bars and restaurants.",
    },
    {
     name: "Empanadas",
     similar_dish: "Pasteles",
     description:
      "Empanadas are a popular Spanish appetizer made from dough filled with vegetables, meat, or seafood. They are usually deep-fried or baked and served with a variety of sauces. Empanadas are a popular tapa in Spain and are often served at bars and restaurants.",
    },
    {
     name: "Tortilla de camarones",
     similar_dish: "Tortilla de gambas",
     description:
      "Tortilla de camarones is a traditional Spanish omelette made with shrimp, onions, and eggs. It is usually served as a tapa or snack and can be served hot or cold. Tortilla de camarones is a popular dish in Spain and is often served at family meals or parties.",
    },
    {
     name: "Pimientos de Padrón",
     similar_dish: "Padrón peppers",
     description:
      "Pimientos de Padrón are a popular Spanish appetizer made from small green peppers. They are usually fried in olive oil and served with a sprinkle of sea salt. Pimientos de Padrón are a popular tapa in Spain and are often served at bars and restaurants.",
    },
   ],
   beverages: [
    {
     name: "Sangria",
     similar_dish: "Tinto de verano",
     description:
      "Sangria is a popular Spanish beverage made from red wine, fruit juice, and brandy. It is usually served over ice and can be topped with fruit or other garnishes. Sangria is a popular drink in Spain and is often served at festivals or special occasions.",
    },
    {
     name: "Tinto de Verano",
     similar_dish: "Sangria",
     description:
      "Tinto de Verano is a popular Spanish beverage made from red wine and lemon-lime soda. It is usually served over ice and can be topped with fruit or other garnishes. Tinto de Verano is a popular drink in Spain and is often served at festivals or special occasions.",
    },
    {
     name: "Kalimotxo",
     similar_dish: "Vino tinto con refresco",
     description:
      "Kalimotxo is a popular Spanish beverage made from red wine and cola. It is usually served over ice and can be topped with fruit or other garnishes. Kalimotxo is a popular drink in Spain and is often served at festivals or special occasions.",
    },
    {
     name: "Horchata",
     similar_dish: "Agua de horchata",
     description:
      "Horchata is a popular Spanish beverage made from ground almonds, rice, and sugar. It is usually served cold and can be topped with cinnamon or other spices. Horchata is a popular drink in Spain and is often served at festivals or special occasions.",
    },
   ],
   desserts: [
    {
     name: "Flan",
     similar_dish: "Crème caramel",
     description:
      "Flan is a traditional Spanish dessert made from eggs, milk, and sugar. It is usually served chilled and can be topped with caramel or other sauces. Flan is a popular dessert in Spain and is often served at festivals or special occasions.",
    },
    {
     name: "Tarta de Santiago",
     similar_dish: "Tarta de Santiago",
     description:
      "Tarta de Santiago is a traditional Spanish cake made from ground almonds, eggs, and sugar. It is usually served chilled and can be topped with powdered sugar or other garnishes. Tarta de Santiago is a popular dessert in Spain and is often served at festivals or special occasions.",
    },
    {
     name: "Arroz con leche",
     similar_dish: "Rice pudding",
     description:
      "Arroz con leche is a traditional Spanish dessert made from rice, milk, and sugar. It is usually served chilled and can be topped with cinnamon or other spices. Arroz con leche is a popular dessert in Spain and is often served at festivals or special occasions.",
    },
    {
     name: "Churros con chocolate",
     similar_dish: "Buñuelos con chocolate",
     description:
      "Churros con chocolate is a traditional Spanish dessert made from deep-fried dough and served with a cup of hot chocolate. It is usually served with a sprinkle of sugar or cinnamon. Churros con chocolate is a popular dessert in Spain and is often served at festivals or special occasions.",
    },
   ],
   history: [
    "Spanish cuisine has been influenced by the country's geography and climate, as well as by its long history of cultural exchange with other countries.",
   ],
  },
 });
 const shanghai = reactive({
  name: "Shanghai, China",
  general: [
   "Shanghai is located in the Yangtze River Delta in Eastern China and is one of the country's most populous cities. The city is known for its rich culinary culture that has been shaped by its diverse population and geography. The cuisine of Shanghai is a combination of elements from other regions of China and influences from foreign countries such as Japan and France.",
  ],
  local_cuisine: {
   popularDishes: [
    {
     name: "Xiaolongbao",
     similar_dish: "Soup Dumplings",
     description:
      "Xiaolongbao are steamed dumplings filled with pork and a broth made from pork or chicken. They are served in a bamboo steamer and are typically eaten with a spoon and a dipping sauce.",
    },
    {
     name: "Shanghai Fried Noodles",
     similar_dish: "Chow Mein",
     description:
      "Shanghai Fried Noodles are a popular dish in the city. The noodles are stir-fried with vegetables and meat and served with a savory sauce. The dish is often served with a side of rice.",
    },
    {
     name: "Shanghai Fried Rice",
     similar_dish: "Yangzhou Fried Rice",
     description:
      "Shanghai Fried Rice is a classic dish in the city. The rice is stir-fried with vegetables, eggs, and meat. The dish is typically served with a side of soup or a dipping sauce.",
    },
    {
     name: "Lion's Head Meatballs",
     similar_dish: "Pork Meatballs",
     description:
      "Lion's Head Meatballs are a traditional dish in Shanghai. The meatballs are made of pork, mushrooms, and vegetables and are often served with a savory sauce or a side of soup.",
    },
   ],
   appetizers: [
    {
     name: "Spring Rolls",
     similar_dish: "Egg Rolls",
     description:
      "Spring Rolls are a popular appetizer in Shanghai. The rolls are filled with vegetables and meat and are deep-fried and served with a dipping sauce.",
    },
    {
     name: "Crab Rangoon",
     similar_dish: "Crab Wontons",
     description:
      "Crab Rangoon is a popular appetizer in Shanghai. The wontons are filled with a mixture of crabmeat and cream cheese and are deep-fried and served with a sweet and sour sauce.",
    },
    {
     name: "Scallion Pancakes",
     similar_dish: "Green Onion Pancakes",
     description:
      "Scallion Pancakes are a popular appetizer in Shanghai. The pancakes are made with scallions and are pan-fried and served with a dipping sauce.",
    },
    {
     name: "Steamed Buns",
     similar_dish: "Baozi",
     description:
      "Steamed Buns are a popular appetizer in Shanghai. The buns are filled with pork, vegetables, and mushrooms and are steamed and served with a savory sauce.",
    },
   ],
   beverages: [
    {
     name: "Jasmine Tea",
     similar_dish: "Green Tea",
     description:
      "Jasmine Tea is a popular beverage in Shanghai. The tea is made from green tea leaves and is often infused with jasmine flowers. The tea is served hot or cold and is said to have calming effects.",
    },
    {
     name: "Mao Tai",
     similar_dish: "Chinese Liquor",
     description:
      "Mao Tai is a popular alcoholic beverage in Shanghai. The liquor is made from fermented sorghum and is said to have a strong, sweet flavor. The liquor is often served at banquets and special occasions.",
    },
    {
     name: "Ginger Tea",
     similar_dish: "Ginger Ale",
     description:
      "Ginger Tea is a popular beverage in Shanghai. The tea is made from freshly grated ginger and is said to have a spicy and sweet taste. The tea is served hot or cold and is said to have calming effects.",
    },
    {
     name: "Chrysanthemum Tea",
     similar_dish: "Chamomile Tea",
     description:
      "Chrysanthemum Tea is a popular beverage in Shanghai. The tea is made from chrysanthemum flowers and is said to have a sweet and floral flavor. The tea is served hot or cold and is said to have calming effects.",
    },
   ],
   desserts: [
    {
     name: "Red Bean Soup",
     similar_dish: "Mung Bean Soup",
     description:
      "Red Bean Soup is a popular dessert in Shanghai. The soup is made from red beans and is typically served hot or cold and is often topped with coconut milk and sugar.",
    },
    {
     name: "Sweet Rice Balls",
     similar_dish: "Tangyuan",
     description:
      "Sweet Rice Balls are a popular dessert in Shanghai. The balls are made from glutinous rice and are filled with sweet fillings such as red bean paste or sesame paste. The balls are served hot or cold and are often topped with sugar or syrup.",
    },
    {
     name: "Egg Tarts",
     similar_dish: "Portuguese Egg Tarts",
     description:
      "Egg Tarts are a popular dessert in Shanghai. The tarts are made from a custard filling and are usually served hot or cold. The tarts are often topped with sugar or syrup.",
    },
    {
     name: "Mooncakes",
     similar_dish: "Moon Pies",
     description:
      "Mooncakes are a popular dessert in Shanghai. The cakes are made from a sweet dough and are filled with a variety of fillings such as red bean paste, lotus seed paste, or nuts. The cakes are often served with tea and are eaten during the Mid-Autumn Festival.",
    },
   ],
   history: [
    "Shanghai's cuisine has been shaped by its diverse population and geography, with influences from other regions of China and foreign countries such as Japan and France.",
   ],
  },
 });
 //  const nyc = reactive();
 return { westwood, france, singapore, lbc, spain, shanghai };
});
