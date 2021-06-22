import {Button, Grid} from '@material-ui/core';
import ApiService from "../ApiServiceChu";
import React, { useEffect,useState } from 'react'
import "./css/CartList.css";
import { Link,RouteComponentProps } from 'react-router-dom';

const CartList = ()=>{
    const [carts,setCarts] = useState([]);
    const [sumMoneys,setSumMoneys] = useState(0);
    const [x,setX] = useState(0);

    const imgUrl = "/imgs/";
    
    useEffect(()=>{
        reloadBoardList();
        reloadSumMoney();
    },[x]);

    
    const reloadBoardList = () =>{
        
    ApiService.showCartList()
        .then(res => {
            setCarts(res.data);
        })
        .catch(err => {
            console.log('reloadBoardList() Error!',err);
        })
    }
    const deleteCart = (cartId) =>{
        ApiService.deleteCart(cartId)
        .then(res=>{
            setCarts(carts.filter(cart=>cart.cartId!==cartId));
            setX(x+1);
        })
        .catch(err=>{
            console.log("지우기 에러");
        })
    }
    const plusChange = (name,index)=>{
        let newArr = carts.map((item,i)=>{
            if(index==i&&item.amount<item.productStock){
                return {...item,[name]:item.amount+1};
            }else{
                return item;
            }
        });
        ApiService.updateCart(newArr[index]);
        setX(x+1);
    }
    const minusChange = (name,index)=>{
        let newArr = carts.map((item,i)=>{
            if(index==i&&item.amount>1){
                return {...item,[name]:item.amount-1};
            }else{
                return item;
            }
        });
        ApiService.updateCart(newArr[index]);
        setX(x-1);
    }
    const reloadSumMoney = () =>{
        ApiService.showSumMoney()
            .then(res => {
                setSumMoneys(res.data);
            })
            .catch(err => {
                console.log('reloadSumMoney() Error!',err);
            })
        }
    
    return (
        <div style={{marginTop:'80px', display:'flex', justifyContent:'center',fontSize:'13px', color:'gray', minHeight:'800px'}}>
            <Grid item xs={12} style={{width:'100%', maxWidth:'1560px', minWidth:'800px'}}> 
                <b>장바구니</b>
                <hr style={{border:'0px', height:'1px', backgroundColor:'lightgray'}}/>
                <div style={{display:'flex'}}>
                <Grid item xs={6} sm={7}>            
                <div className="cartlistget">
                    {carts.map((cart,index) =>
                    <div key={cart.cartId}>

                        <div style={{display:'flex', justifyContent:'space-between'}}>
                        
                            <div>
                                <img src={imgUrl+(cart.productImagePath).split(',')[0]}/>
                            </div>

                            <div style={{marginLeft:'15px', width:'100%'}}>
                                <p>{cart.productName}</p>
                                <p>{cart.productPrice}</p>
                                <div style={{marginTop:'20px', display:'flex'}}>
                                    <div style={{width:'80px'}}>사이즈</div><div>{cart.productSize}</div>
                                </div>

                                <div style={{marginTop:'5px',display:'flex'}}>
                                    <div style={{width:'80px'}}>색상</div><div>{cart.productColor}</div>
                                </div>

                                <div style={{marginTop:'5px', display:'flex', alignItems:'center'}}>
                                    <div style={{width:'80px'}}>수량</div>
                                    <p> 
                                    <button style={{width:'40px', backgroundColor:'white', border:'0px'}} onClick={()=>minusChange("amount",index)}>-</button>
                                    {cart.amount}
                                    <button style={{width:'40px', backgroundColor:'white', border:'0px'}} onClick={()=>plusChange("amount",index)}>+</button>
                                    </p>
                                </div>
                            </div>
                            <div style={{fontSize:'14px', position:'relative'}}>
                                <Button style={{fontSize:'12px'}}onClick={()=>deleteCart(cart.cartId)}>✖</Button>
                                <div style={{position:'absolute', bottom:'0px'}}><b>{cart.money}</b></div>
                            </div>
                        </div>
                        <hr style={{border:'0px', height:'1px', backgroundColor:'lightgray'}}/> 
                    </div>
                    )}
                </div>
                <div className="nullcart" style={carts.length?{display:"none"}:{textAlign:"center",marginTop:"100px",marginBottom:'500px'}}>
                <div style={{marginBottom:"20px"}}>장바구니가 비어있습니다.</div>
                    <Link to="/" style={{textDecoration: 'none',fontSize:'13px'}}>
                        <Button >홈으로 되돌아가기</Button>
                    </Link>
                </div>
            </Grid>
            <Grid item xs={6} sm={1}>
            </Grid>

            <Grid item xs={6} sm={4}>
                <p>주문 요약</p>
                <hr style={{border:'0px', height:'1px', backgroundColor:'lightgray'}}/>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'15px', color:'black'}}>
                    <p>총 상품 금액</p>
                    <p>{sumMoneys}</p>
                </div>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'15px', color:'black'}}>
                    <p>배송비</p>
                    <p>3000</p>
                </div>
                <hr style={{border:'0px', height:'1px', backgroundColor:'lightgray'}}/>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'30px', color:'black'}}>
                    <p>총 결제 예정 금액</p>
                    <p>{sumMoneys+3000}</p>
                </div>
                <Link to="/order" style={{textDecoration: 'none'}}>
                <Button variant="contained" style={{backgroundColor:'#444', width:'100%', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px', color:'white'}}>주문하기</Button>
                </Link>
                <div style={{fontSize:'12px'}}>
                    <div style={{marginTop:'30px', color:'rgb(193,166,137)'}}><b>무료배송, 무료반품 혜택과 함께 새로운 상품을 찾아보세요.</b></div>

                    <div style={{marginTop:'30px', color:'rgb(193,166,137)'}}><b>세일 기간 중에는 배송 및 반품이 지연될 수 있습니다.</b></div>

                    <div style={{marginTop:'30px'}}>배송완료 후 14일 이내 청약철회(반품)가 가능합니다. 단, 위생상의 이유로 속옷, 피어싱류 보석은 반품 불가합니다. 자세한 내용은 반품 및 환불을 확인해주세요.</div>

                    <div style={{marginTop:'30px'}}>배송정보 안내
                    - 3일 내에 발송됩니다. (주말 및 공휴일 제외) 주문 상품 품절/배송지연 예상 시 유선/SMS안내
                    - 일부 군사지역은 배송이 불가능할 수 있습니다.
                    </div>

                    <div style={{marginTop:'30px'}}>채무지급 보증안내
                    고객님의 안전거래를 위해 현금결제시 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.
                    </div>

                    <div style={{marginTop:'30px'}}>도움이 필요하신가요?
                    더 궁금하신 사항이 있다면 COS 고객센터 [1800-2765]로 문의하여 주십시오.
                    </div>
                </div>

            </Grid>
                </div>
            </Grid>
        </div>
    );
}
export default CartList;