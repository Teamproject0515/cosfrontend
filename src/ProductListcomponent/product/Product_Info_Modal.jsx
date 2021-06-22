import React from 'react';
import "../css/Product_Info_Modal.css";
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Modal( props ){
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    function order(){
        props.history.push("/cart/list");

    }

    function continueshop(){
        props.history.push("/product-list");
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                        <Button variant="contained" className="close" onClick={continueshop}> continue </Button>
                        <Button variant="contained" className="close" onClick={order}> pay </Button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default withRouter(Modal)