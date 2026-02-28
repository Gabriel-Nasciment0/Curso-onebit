import { createBrowserRouter } from "react-router-dom"

import CreateItem from "./src/pages/CreateItem"
import Dashboard from "./src/pages/Dashboard"
import ItemDetails from "./src/pages/ItemDetails"
import ItemList from "./src/pages/ItemsList"
import RootLayout from "./src/pages/RootLayout"
import UpdateItem from "./src/pages/UpdateItem"

import { loadItem } from "./src/loaders/item"
import ItemBoundary from "./src/Error-boundaries/ItemBoundary"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Dashboard /> },

            { path: "items", element: <ItemList /> },

            {
                path: "items/:itemId",
                element: <ItemDetails />,
                loader: loadItem,
                errorElement: <ItemBoundary />,
            },

            { path: "item/new", element: <CreateItem /> },

            {
                path: "items/:itemId/edit",
                element: <UpdateItem />,
                loader: loadItem,
            },
        ],
    },
])

export default router
