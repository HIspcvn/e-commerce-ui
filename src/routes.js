import { createBrowserRouter } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import Shop from "./Shop"
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ShopApplicationWrapper />,
        children: [
            {
                path: "/",
                element: <Shop />
            },
            {
                path: "/women",
                element: <ProductListPage categoryType={'WOMEN'} />
            },
            {
                path: "/men",
                element: <ProductListPage categoryType={'MEN'} />
            },
            {
                path: "/kids",
                element: <ProductListPage categoryType={'KIDS'} />
            }
        ]
    },

]);