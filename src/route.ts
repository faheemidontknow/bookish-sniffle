import { createBrowserRouter } from "react-router";
import HomePage from "./pages/home/index.jsx";
import AboutPage from "./pages/about/index.jsx";
import ShopPage from "./pages/shop/index.jsx";
import contactPage from "./pages/contact/index.jsx";
import BlogPage from "./pages/blog/index.jsx";
import WishLIst from "./pages/wishlist/index.jsx";
import CartPage from "./pages/cart/index.jsx";
import NotFound from "./pages/not-found/index.jsx";
// import FindPage from "./findastore/index.jsx";  
import ChechOutPage from "./pages/checkout/index.jsx";
import FindPage from "./pages/findastore/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: HomePage  },
      { path: "home", Component: HomePage  },
      { path: "about", Component: AboutPage  },
      { path: "shop", Component: ShopPage  },
      { path: "contact", Component: contactPage  },
      { path: "blog", Component: BlogPage  },
      { path: "wishlist", Component: WishLIst  },
      { path: "cart", Component: CartPage  },
      { path: "findastore", Component: FindPage  },
      {path:"PROCEED TO CHECKOUT",Component:ChechOutPage}

    ],
  },
  { path: "*", Component: NotFound  },
]);

