import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductListCategoryComponent from "../product/ProductListCategoryComponent";
import ProductListSearchComponent from "../product/ProductListSearchComponent";
import ProductDetailComponent from "../product/ProductInfoComponet";
import MainComponent from "../../Maincomponent/Main";
import ProductListAccessoryComponent from "../product/ProductListAccessoryComponent";
import ProductNewArrivalsComponent from "../product/ProductNewArrivalsComponent";
import MyCosMemberComponent from "../product/MyCosMemberComponent";
import MYCOSPage from '../../MYCOSComponent/MYCOSPage';

const AppRouter = () => {
    return(
        <div style={style} >
            <BrowserRouter >
                    <Switch >
                        {/* 메인 페이지 */}
                        <Route exact path="/" component={MainComponent} />

                        {/* 상품 리스트 페이지 */}
                        <Route path="/product-list" component={ProductListCategoryComponent} />
                        <Route path="/product-detail" component={ProductDetailComponent} />
                        <Route path="/search-keyword" component={ProductListSearchComponent} />
                        <Route path="/accessories-list" component={ProductListAccessoryComponent} />
                        <Route path="/new-arrivals" component={ProductNewArrivalsComponent} />
                        {/* <Route path="/mycos-member" component={MyCosMemberComponent} /> */}

                        {/* MYCOS 페이지 */}
                        <Route path="/mycos-member" component={MYCOSPage} />
                    </Switch>
            </BrowserRouter>
        </div>
    );
}

const style = {
    marginTop: '20px'
}

export default AppRouter;