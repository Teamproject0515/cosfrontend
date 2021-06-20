import React, {useState,useEffect} from 'react';
import AxiosApiService from '../../AxiosApiService'
import CancleOrderBox from './component/CancleOrderBox';
import { useHistory } from "react-router-dom";

function CancleOrder({deliveryStatus}) {
    //서버에서 받아올 유저 저장소
    const [orders,setOrders] = useState({order:[]});
    const [pageNums,setPageNums] = useState(0);
    let history = useHistory();
    //새로고침시에만 실행
    useEffect(()=>{
        getCancleOrder(0);
        getCancleOrderCount();
    },[])

    //서버 상품주문목록 가져옴
    const getCancleOrder=(pageNum)=>{
        AxiosApiService.cancleOrder(pageNum)
        .then(res=>{
            setOrders({order:res.data});
        })
        .catch(err => {
            history.push('/managerDefaultErr');
            console.log('getUserState() Error!', err);
        })
        //스크롤 맨위로
        window.scrollTo(0,0);
    }
    //취소요청 페이지개수
    function getCancleOrderCount(){
        AxiosApiService.cancleOrderCount()
        .then(res=>{
            setPageNums(res.data);
        })
        .catch(err => {
            history.push('/managerDefaultErr');
            console.log('getOrderCount() Error!', err);
        })
    }
    return (
        <>
            <div className="pageTitle" style={{justifyContent:'center'}}>
                <h1>취소 요청</h1>
                </div>
                <CancleOrderBox orders={orders} deliveryStatus={deliveryStatus}/>
                <div style={{display:'flex',marginTop:'10px'}}>
                {[...new Array(pageNums)].map((page,index)=>
                    <div style={{marginRight:'5px'}}>
                   <button style={{border:'none',padding:'5px',cursor:'pointer'}} onClick={()=>getCancleOrder(index+1)}>{index+1}</button>
                   </div>
                )}
                </div>
        </>
    )
}

export default CancleOrder
