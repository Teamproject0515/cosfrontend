import React from 'react'
import {Route, Switch} from 'react-router-dom';
import ProductListCategoryComponent from "./ProductListcomponent/product/ProductListCategoryComponent";
import ProductListSearchComponent from "./ProductListcomponent/product/ProductListSearchComponent";
import ProductDetailComponent from "./ProductListcomponent/product/ProductInfoComponet";
import MainComponent from "./Maincomponent/Main";
import LoginFromCompoment from './Login/LoginFromCompoment';
import FindIDComponent from "./Login/FindIDComponent";
import FindPWComponent from "./Login/FindPWComponent";
import ShowEmail from "./Login/ShowEmail";
import ShowPW from "./Login/ShowPassword";

const AppRouter = () => {
    return(
        <div style={style}>
           
                    <Switch>
                        <Route exact path="/" component={MainComponent} />
                        <Route path="/product-list" component={ProductListCategoryComponent} />
                        <Route path="/product-detail" component={ProductDetailComponent} />
                        <Route path="/search-keyword" component={ProductListSearchComponent} />

                        {/* 로그인 및 아이디 비밀번호 찾기 */}
                        <Route path="/signIn" component={LoginFromCompoment}/>
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