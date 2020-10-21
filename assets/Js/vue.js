const products = [
  {
    id: 1,
    description: "Burger",
    price: 7.55,
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
    price: 3.2,
    path: "assets/images/cookie.jpg",
  },
  {
    id: 7,
    description: "Africain",
    price: 12.0,
    path: "assets/images/meal_african.jpg",
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

  data: function () {
    return {
      products,
      searchKey: "",
      liked: [],
      cart: [],
    };
  },
  computed: {
    filteredSearch() {
      return this.products.filter((product) => {
        return product.description
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    getLikedItems() {
      let valueCookie = JSON.parse($cookies.get("like"));
      valueCookie = null ? (this.liked = []) : (this.liked = valueCookie);
    },
  },
  methods: {
    setLikedItems() {
      setTimeout(() => {
        document.addEventListener("input", () => {
          $cookies.set("like", JSON.stringify(this.liked));
        });
      }, 300);
    },
    addToCart(product) {
      this.cart.push({
        id: product.id,
        description: product.description,
        image: product.path,
        price: product.price,
        quantity: 1,
      });
    },
  },
  mounted: () => {
    this.getLikedItems;
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
  products: [],
}).$mount("#app");
vue.products = [];
