import React, { useState, useEffect } from 'react'
import AxiosApiService from '../AxiosApiService';
import './managerCss/managerDashboard.css';

function ManagerDashboad() {
    const [managerItems, setManagerItems] = useState({ items: [] });

    useEffect(() => {
        reloadCnt();
        console.log(managerItems);
    }, [])

    function reloadCnt() {
        AxiosApiService.itemsCnt()
            .then(res => {
                setManagerItems({ items: res.data });
            })
            .catch(err => {
                console.log("reloadCnt error", err);
            })
    }

    return (
        <>
            <h1 style={{marginTop:'30px'}}>Dash Board</h1>
            {managerItems.items.map(items =>
                <div className="dashboard_wapper">
                    <div className="dashboard_row">
                        <div className="Cnt" >
                            <h2>상품개수</h2><br />
                            <h1>{items.product_cnt}</h1>
                        </div>
                        <div className="Cnt" >
                            <h2>유저수</h2><br />
                            <h1>{items.user_cnt}</h1>
                        </div>
                    </div>
                    <div className="dashboard_row">
                        <div className="Cnt" >
                            <h2>주문개수</h2><br />
                            <h1>{items.order_cnt}</h1>
                        </div>
                        <div className="Cnt" >
                            <h2>취소요청</h2><br />
                            <h1>{items.cancel_order_cnt}</h1>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ManagerDashboad
