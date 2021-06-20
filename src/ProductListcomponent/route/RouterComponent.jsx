import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductListCategoryComponent from "../product/ProductListCategoryComponent";
import ProductListSearchComponent from "../product/ProductListSearchComponent";
import ProductDetailComponent from "../product/ProductInfoComponet";
import MainComponent from "../../Maincomponent/Main";
import LoginTextComponent from "../../Login/LoginTextComponent";
import FindIDComponent from "../../Login/FindIDComponent";
import FindPWComponent from "../../Login/FindPWComponent";
import ShowEmail from "../../Login/ShowEmail";
import ShowPW from "../../Login/ShowPassword";
import ProductListAccessoryComponent from "../product/ProductListAccessoryComponent";
import ProductNewArrivalsComponent from "../product/ProductNewArrivalsComponent";
import MyCosMemberComponent from "../product/MyCosMemberComponent";
import MYCOSPage from '../../MYCOSComponent/MYCOSPage';

const AppRouter = () => {
    return(
        <div style={style}>
           
                    <Switch>
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

                        {/* 로그인 및 아이디 비밀번호 찾기 */}
                        <Route path="/signIn" component={LoginTextComponent}/>
                        <Route path="/findEmail" component={FindIDComponent} />
                        <Route path="/findPW" component={FindPWComponent} />
                        <Route path="/Email" component={ShowEmail}/>
                        <Route path="/PW" component={ShowPW}/>
                    </Switch>
        </div>
    );
}

const style = {
    marginTop: '20px'
}

export default AppRouter;