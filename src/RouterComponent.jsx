import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductListCategoryComponent from "./ProductListcomponent/product/ProductListCategoryComponent";
import ProductListSearchComponent from "./ProductListcomponent/product/ProductListSearchComponent";
import ProductDetailComponent from "./ProductListcomponent/product/Product_Info_Component";

import MainComponent from "./Maincomponent/Main";

import ProductListAccessoryComponent from "./ProductListcomponent/product/ProductListAccessoryComponent";
import ProductNewArrivalsComponent from "./ProductListcomponent/product/ProductNewArrivalsComponent";

import MYCOSPage from './MYCOSComponent/MYCOSPage';
import ManagerPage from './manager_component/ManagerPage';

import SignUp from './signUp_component/component/SignUp';
import SignUpError from "./errComponent/SignUpError"
import ProductInsertError from "./errComponent/ProductInsertError"
import DeliveryStatusError from "./errComponent/DeliveryStatusError"
import ManagerDefaultErr from "./errComponent/ManagerDefaultErr"
import AccessErr from "./errComponent/AccessErr"

import LoginFromCompoment from "./Login/LoginFromCompoment";
import FindIDComponent from "./Login/FindIDComponent";
import FindPWComponent from "./Login/FindPWComponent";
import ShowEmail from "./Login/ShowEmail";
import ShowPW from "./Login/ShowPassword";

import CartList from "./Cartcomponent/CartList";

import OrderMain from "./Ordercomponent/OrderMain";
import KakaoPaySuccess from './Ordercomponent/KakaoPaySuccess';

import ChatComponent from './Chatcomponent/ChatMain';

const AppRouter = () => {
    return(
        <div style={style} >
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
                        {/*회원가입페이지*/}
                        <Route path="/signUp" component={SignUp} />
                        
                        {/* 로그인 및 아이디 비밀번호 찾기 */}
                        <Route path="/signIn" component={LoginFromCompoment}/>
                        <Route path="/findEmail" component={FindIDComponent} />
                        <Route path="/findPW" component={FindPWComponent} />
                        <Route path="/Email" component={ShowEmail}/>
                        <Route path="/PW" component={ShowPW}/>

                        {/*관리자페이지*/}
                        <Route path="/manager" component={ManagerPage} />

                        {/*장바구니페이지*/}
                        <Route exact path="/cart/list" component={CartList}/>
                        
                        {/*결제*/}
                        <Route exact path="/order" component={OrderMain}/>
                        <Route path="/order/kakaoPaySuccess" component={KakaoPaySuccess}/>

                        <Route path="/chat" component={ChatComponent} />

                        
                        {/*오류페이지*/}
                        <Route path="/signUpError" component={SignUpError} />
                        <Route path="/productInsertError" component={ProductInsertError} />
                        <Route path="/deliveryStatusError" component={DeliveryStatusError} />
                        <Route path="/managerDefaultErr" component={ManagerDefaultErr} />
                        <Route path="/accessErr" component={AccessErr} />
                    </Switch>
        </div>
    );
}

const style = {
    marginTop: '20px'
}

export default AppRouter;