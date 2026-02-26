import { createBrowserRouter } from "react-router-dom"
import Home from "./src/pages/Home.jsx"
import Products from "./src/pages/Products.jsx"
import Cart from "./src/pages/Cart.jsx"
import AdminHome from "./src/pages/admin/AdminHome.jsx"
import RootLayout from "./src/pages/RootLayout.jsx"
import Product from "./src/pages/product.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "products/:productId",
                element: <Product />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },

    {
        path: "/admin",
        element: <AdminHome />,
    },
])

export default router
