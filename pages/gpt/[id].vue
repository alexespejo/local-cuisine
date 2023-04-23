<script setup>
const { chat } = useChatgpt();
const route = useRoute();
const destination_obj = ref({});
const data = ref("");
const response = await chat(
 `${route.params.id}  give me the name of the destination, include in local_cuisine 4 common and the 4 most unique dishes available, respond in a json format like this {"name":””,"local_cuisine": {"common": [{"name":””,"similar_dish":””,"description":””}],
Unique:["{name":””, "similar_dish":””,"description":””}]}`
);
destination_obj.value = JSON.parse(response);
data.value = response;
console.log(destination_obj.valuee);
// const destination_obj = ref({
//  name: "Westwood CA",
//  general: [
//   "Westwood CA is a small town located in the San Bernardino County of California. The area is known for its rich cultural heritage and its variety of cuisines. The food in Westwood CA is influenced by Mexican, Spanish, and Native American flavors.",
//  ],
//  local_cuisine: {
//   popularDishes: [
//    {
//     name: "Carne Asada",
//     similar_dish: "Carne Asada Tacos",
//     description:
//      "Carne Asada is a grilled beef dish that is popular in Mexican cuisine. It is usually served with tortillas, guacamole, and salsa.",
//    },
//    {
//     name: "Chile Relleno",
//     similar_dish: "Poblano Relleno",
//     description:
//      "Chile Relleno is a dish made of roasted poblano peppers filled with cheese and then fried. It is usually served with a tomato sauce.",
//    },
//    {
//     name: "Enchiladas",
//     similar_dish: "Enfrijoladas",
//     description:
//      "Enchiladas are a Mexican dish made of corn tortillas filled with cheese, chicken, or beef, and then topped with a spicy sauce.",
//    },
//    {
//     name: "Tamales",
//     similar_dish: "Zacahuil",
//     description:
//      "Tamales are a traditional Mexican dish made of corn dough filled with meat or vegetables, wrapped in a corn husk, and then steamed.",
//    },
//   ],
//   appetizers: [
//    {
//     name: "Queso Fundido",
//     similar_dish: "Choriqueso",
//     description:
//      "Queso Fundido is a Mexican dish made of melted cheese, chorizo, and vegetables, served with tortillas.",
//    },
//    {
//     name: "Elote",
//     similar_dish: "Esquite",
//     description:
//      "Elote is a Mexican dish made of grilled corn, usually served with mayonnaise, cheese, and chili powder.",
//    },
//    {
//     name: "Tostadas",
//     similar_dish: "Tostadas de Tinga",
//     description:
//      "Tostadas are a Mexican dish made of fried corn tortillas topped with various ingredients such as beans, cheese, and salsa.",
//    },
//    {
//     name: "Flautas",
//     similar_dish: "Taquitos",
//     description:
//      "Flautas are a Mexican dish made of rolled up corn tortillas filled with meat or cheese, and then fried.",
//    },
//   ],
//   beverages: [
//    {
//     name: "Agua Fresca",
//     similar_dish: "Horchata",
//     description:
//      "Agua Fresca is a Mexican beverage made of blended fruit, water, and sugar.",
//    },
//    {
//     name: "Tequila",
//     similar_dish: "Mezcal",
//     description:
//      "Tequila is a Mexican alcoholic beverage made from the blue agave plant.",
//    },
//    {
//     name: "Michelada",
//     similar_dish: "Chelada",
//     description:
//      "Michelada is a Mexican beverage made of beer, lime juice, and spices.",
//    },
//    {
//     name: "Margarita",
//     similar_dish: "Paloma",
//     description:
//      "Margarita is a Mexican cocktail made of tequila, lime juice, and orange liqueur.",
//    },
//   ],
//   desserts: [
//    {
//     name: "Churros",
//     similar_dish: "Buñuelos",
//     description:
//      "Churros are a Mexican dessert made of fried dough, usually served with cinnamon sugar and chocolate sauce.",
//    },
//    {
//     name: "Tres Leches Cake",
//     similar_dish: "Flan",
//     description:
//      "Tres Leches Cake is a Mexican cake made of three milks, usually served with whipped cream and fruit.",
//    },
//    {
//     name: "Arroz con Leche",
//     similar_dish: "Arroz con Dulce",
//     description:
//      "Arroz con Leche is a Mexican dessert made of rice pudding, usually served with cinnamon and raisins.",
//    },
//    {
//     name: "Flan",
//     similar_dish: "Creme Caramel",
//     description:
//      "Flan is a Mexican custard dessert made with eggs, sugar, and milk, usually served with caramel sauce.",
//    },
//   ],
//   history: [
//    "The food of Westwood CA is a reflection of its rich cultural heritage, which includes influences from Mexican, Spanish, and Native American cuisines.",
//   ],
//  },
// });
onMounted(() => {});
</script>

<template>
 <main class="flex flex-col items-center">
  {{ destination_obj }}
  <h1 class="text-5xl self-center my-10">{{ destination_obj.name }}</h1>
  <h2 class="text-4xl font-bold">Local Cuisine</h2>
  <div class="flex gap-3 justify-center">
   <div
    v-for="(i, index) in destination_obj.local_cuisine.popularDishes"
    :key="index"
   >
    <CardImage :description="i.description" :name="i.name" />
   </div>
  </div>
  <div class="divider"></div>
  <div class="flex gap-3 justify-center">
   <div
    v-for="(i, index) in destination_obj.local_cuisine.appetizers"
    :key="index"
   >
    <CardImage :description="i.description" :name="i.name" />
   </div>
  </div>
  <div class="divider"></div>
  <div class="flex gap-3 justify-center">
   <div
    v-for="(i, index) in destination_obj.local_cuisine.beverages"
    :key="index"
   >
    <CardImage :description="i.description" :name="i.name" />
   </div>
  </div>
  <div class="divider"></div>
  <div class="flex gap-3 justify-center">
   <div
    v-for="(i, index) in destination_obj.local_cuisine.desserts"
    :key="index"
   >
    <CardImage :description="i.description" :name="i.name" />
   </div>
  </div>
 </main>
 <!-- <main class="">
  <Navbar />

  <div
   v-if="Object.keys(destination_obj).length !== 0"
   class="flex flex-col p-5 px-28"
  >
   <h1 class="text-5xl py-10 self-center">{{ destination_obj.name }}</h1>
   <section class="flex flex-col">
    <h2 class="text-3xl">Destinations</h2>
    <div class="flex gap-5">
     <div
      class="rounded-lg p-3 w-1/4 h-full"
      v-for="(i, index) in destination_obj.destinations"
      :key="index"
     >
      <div
       class="bg-grey-500 w-full h-52 rounded-lg flex items-center justify-center"
      >
       image
      </div>
      <span class="text-lg font-bold py-5">
       {{ i.name }}
      </span>
      <div class="text-md indent-5">{{ i.description }}</div>
     </div>
    </div>
   </section>
   <section>
    <h2 class="text-3xl">Local Cuisine</h2>
    <div class="flex gap-5">
     <div
      class="rounded-lg p-3 w-1/4 h-full"
      v-for="(i, index) in destination_obj.local_cuisine.common"
      :key="index"
     >
      <div
       class="bg-orange-500 w-full h-52 rounded-lg flex items-center justify-center"
      >
       <CardImage :image_name="i.name" />
      </div>
      <span class="text-lg font-bold">
       {{ i.name }}
      </span>
      <div class="text-md">{{ i.description }}</div>
     </div>
    </div>
    <div class="flex gap-5">
     <div
      class="rounded-lg p-3 w-1/4 h-full"
      v-for="(i, index) in destination_obj.local_cuisine.unique"
      :key="index"
     >
      <div
       class="bg-gray-500 w-full h-52 rounded-lg flex items-center justify-center"
      >
       <CardImage :image_name="i.name" />
      </div>
      <span class="text-lg font-bold">
       {{ i.name }}
      </span>
      <div class="text-md">{{ i.description }}</div>
     </div>
    </div>
   </section>
  </div>
  <div v-else>Loading</div>
 </main> -->
</template>
