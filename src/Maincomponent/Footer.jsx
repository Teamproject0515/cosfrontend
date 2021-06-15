import React from "react";
import "./css/Footer.css"

function Footer(){
    return(
        <div className="footer_container">
            <hr/>
            <div className="footerfirst">
                <ul>
                    <li>고객서비스</li>
                    <li>배송 정보</li>
                    <li>반품 및 환불</li>
                    <li>지속가능성</li>
                    <li>제품 관리</li>
                    <li>결제 정보</li>
                </ul>
                <ul>
                    <li>매장찾기</li>
                    <li>채용 정보</li>
                    <li>프레스 문의</li>
                    <li>고객 문의</li>
                </ul>
                <ul>
                    <li>Kakaotalk</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Pinterest</li>
                </ul>
            </div>
            <div className="footersecond">
                <ul>
                    <li>이용약관</li>
                    <li>개인정보처리방침</li>
                    <li>현대백화점 그룹</li>
                </ul>
                <p>cos 온라인 스토어는</p>
                <p>더현대닷컴을 이용하고 있습니다.</p>
                <br></br>
                <p>주식회사 중앙정보원 대표이사:코스모스외5인 서울시 영등포구 여의도</p>
                <p>사업자등록번호:211-234-34145 통신판매업신고:20213023-231932</p>
            </div>
        </div>

    );

}
export default Footer;