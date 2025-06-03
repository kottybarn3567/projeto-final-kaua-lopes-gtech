import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import HomePage from "../pages/HomePage";
import ProductViewPage from "../pages/ProductViewPage";
import ProductListingPage from "../pages/ProductListingPage"
import NotFound404 from "../pages/NotFoun404"

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout/>}>
                        <Route index element={<HomePage/>}/>    
                        <Route path="/product-viewPage" element={<ProductViewPage/>}/>
                        <Route path="/product-listing-page" element={<ProductListingPage/>}/>
                    </Route>
                    <Route path="*" element={<NotFound404/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;