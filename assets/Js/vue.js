const data = [
  {
    id: 1,
    description: "Burger",
    price: 7.8,
    path: "assets/images/burger.jpg",
  },
  { id: 2, description: "Pizza", price: 13.5, path: "assets/images/pizza.jpg" },
  {
    id: 3,
    description: "Poulet panné",
    price: 15.0,
    path: "assets/images/poulet.jpg",
  },
  {
    id: 4,
    description: "Sandwich",
    price: 4.7,
    path: "assets/images/sandwich.jpg",
  },
  { id: 5, description: "Steak", price: 5.7, path: "assets/images/steak.jpg" },
  {
    id: 6,
    description: "Petit dejeuner",
    price: 9.2,
    path: "assets/images/petit_dejeuner.jpg",
  },
  {
    id: 7,
    description: "Africain",
    price: 12.0,
    path: "assets/images/meal_africain.jpg",
  },
  {
    id: 8,
    description: "Pates aux olives",
    price: 7.5,
    path: "assets/images/pates_olives.jpg",
  },
  {
    id: 9,
    description: "Vegan avec rice et avocats",
    price: 13.8,
    path: "assets/images/plat1.jpg",
  },
];

const Home = {
  template: "#home",
  name: "Home",
  fetchData: () => {
    return {
      data,
    };
  },
};
const Account = {
  template: "<h1>Account</h1>",
  name: "Account",
};
const Favorite = {
  template: "<h1>Favorite</h1>",
  name: "Favorite",
};
const Cart = {
  template: "<h1>Cart</h1>",
  name: "Cart",
};

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/account", component: Account },
    { path: "/favorites", component: Favorite },
    { path: "/cart", component: Cart },
  ],
});

const vue = new Vue({
  router,
}).$mount("#app");
