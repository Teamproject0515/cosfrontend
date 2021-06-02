import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductListCategoryComponent from "../product/ProductListCategoryComponent";
import ProductListSearchComponent from "../product/ProductListSearchComponent";
import ProductDetailComponent from "../product/ProductInfoComponet";
import MainComponent from "../../Maincomponent/Main";

const AppRouter = () => {
    return(
        <div style={style}>
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MainComponent} />
                        <Route path="/product-list" component={ProductListCategoryComponent} />
                        <Route path="/product-detail" component={ProductDetailComponent} />
                        <Route path="/search-keyword" component={ProductListSearchComponent} />
                    </Switch>
            </BrowserRouter>
        </div>
    );
}

const style = {
    marginTop: '20px'
}

export default AppRouter;