import { createBrowserRouter } from "react-router-dom"

import RootLayout from "./pages/RootLayout.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import ItemsList from "./pages/ItemsList.jsx"
import CreateItem from "./pages/CreateItem.jsx"
import ItemDetails from "./pages/ItemDetails.jsx"
import UpdateItem from "./pages/UpdateItem.jsx"

import { loadItem } from "./loaders/items.js"
import ItemBoundary from "./Error-boundaries/ItemBoundary.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Dashboard /> },

            { path: "items", element: <ItemsList /> },

            {
                path: "items/:itemId",
                element: <ItemDetails />,
                loader: loadItem,
                errorElement: <ItemBoundary />,
            },

            { path: "items/new", element: <CreateItem /> },

            {
                path: "items/:itemId/edit",
                element: <UpdateItem />,
                loader: loadItem,
            },
        ],
    },
])

export default router
