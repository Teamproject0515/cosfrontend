첫번째 쇼핑몰 프론트 커밋 입니다

메인페이지 베너 사이드바 제작

사이드바에서 원하는 페이지로 넘어가고자 할때
App.js의 <Route path="/"/>에서 path부분에 추가 하시면 됩니다.

SidebarData.js 에서 path부분이 설정 되어있습니다 원하는 path명으로 변경 후 App.js에 추가하시면 됩니다.
{
        title:"Kids & Baby",
        path:"/kids",
        cName:"nav-text"
}