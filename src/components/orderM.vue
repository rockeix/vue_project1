<template>
  <div class="app-container">
    <div class="app-header">
      <div class="app-header-left">
        <a href="#" onclick="location.href='../main/main.html'" style="text-decoration: none;">
          <p class="app-name">YACJANGSU</p>
        </a>
        <div class="search-wrapper">
          <input class="search-input" type="text" placeholder="Search">
          <a href="#" onclick="location.href='main.html'" style="text-decoration: none;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search"
              viewBox="0 0 24 24">
              <defs></defs>
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg></a>
        </div>
      </div>
      <div class="app-header-right">
        <button class="admin-btn" onclick="location.href='userInfo.html'">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
              </path>
              <path
                d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                stroke="#000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
              </path>
            </g>
          </svg>
        </button>
        <button class="join-btn" onClick="location.href='../main/login.html'">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <circle cx="12" cy="6" r="4" stroke="#000000" stroke-width="1.5"></circle>
              <path
                d="M15 13.3271C14.0736 13.1162 13.0609 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.6874 22 19.3315 20.9817 19.8068 19.5"
                stroke="#000000" stroke-width="1.5"></path>
              <circle cx="18" cy="16" r="4" stroke="#000000" stroke-width="1.5"></circle>
              <path d="M18 14.6667V17.3333" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path d="M16.6665 16L19.3332 16" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </g>
          </svg>
        </button>
        <button class="cart-btn" onClick="location.href='../main/cart.html'">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                stroke="#000000" stroke-width="1.5"></path>
              <path
                d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                stroke="#000000" stroke-width="1.5"></path>
              <path
                d="M2.26121 3.09184L2.50997 2.38429H2.50997L2.26121 3.09184ZM2.24876 2.29246C1.85799 2.15507 1.42984 2.36048 1.29246 2.75124C1.15507 3.14201 1.36048 3.57016 1.75124 3.70754L2.24876 2.29246ZM4.58584 4.32298L5.20507
            3.89983V3.89983L4.58584 4.32298ZM5.88772 14.5862L5.34345 15.1022H5.34345L5.88772 14.5862ZM20.6578 9.88275L21.3923 10.0342L21.3933 10.0296L20.6578 9.88275ZM20.158 12.3075L20.8926 12.4589L20.158 12.3075ZM20.7345 6.69708L20.1401
            7.15439L20.7345 6.69708ZM19.1336 15.0504L18.6598 14.469L19.1336 15.0504ZM5.70808 9.76V7.03836H4.20808V9.76H5.70808ZM2.50997 2.38429L2.24876 2.29246L1.75124 3.70754L2.01245 3.79938L2.50997 2.38429ZM10.9375 16.25H16.2404V14.75H10.9375V16.25ZM5.70808
            7.03836C5.70808 6.3312 5.7091 5.7411 5.65719 5.26157C5.60346 4.76519 5.48705 4.31247 5.20507 3.89983L3.96661 4.74613C4.05687 4.87822 4.12657 5.05964 4.1659 5.42299C4.20706 5.8032 4.20808 6.29841 4.20808 7.03836H5.70808ZM2.01245 3.79938C2.68006 4.0341
            3.11881 4.18965 3.44166 4.34806C3.74488 4.49684 3.87855 4.61727 3.96661 4.74613L5.20507 3.89983C4.92089 3.48397 4.54304 3.21763 4.10241 3.00143C3.68139 2.79485 3.14395 2.60719 2.50997 2.38429L2.01245 3.79938ZM4.20808 9.76C4.20808 11.2125 4.22171 12.2599
            4.35876 13.0601C4.50508 13.9144 4.79722 14.5261 5.34345 15.1022L6.43198 14.0702C6.11182 13.7325 5.93913 13.4018 5.83723 12.8069C5.72607 12.1578 5.70808 11.249 5.70808 9.76H4.20808ZM10.9375 14.75C9.52069 14.75 8.53763 14.7482 7.79696 14.6432C7.08215 14.5418
            6.70452 14.3576 6.43198 14.0702L5.34345 15.1022C5.93731 15.7286 6.69012 16.0013 7.58636 16.1283C8.45674 16.2518 9.56535 16.25 10.9375 16.25V14.75ZM4.95808 6.87H17.0888V5.37H4.95808V6.87ZM19.9232 9.73135L19.4235 12.1561L20.8926 12.4589L21.3923 10.0342L19.9232
            9.73135ZM17.0888 6.87C17.9452 6.87 18.6989 6.871 19.2937 6.93749C19.5893 6.97053 19.8105 7.01643 19.9659 7.07105C20.1273 7.12776 20.153 7.17127 20.1401 7.15439L21.329 6.23978C21.094 5.93436 20.7636 5.76145 20.4632 5.65587C20.1567 5.54818 19.8101 5.48587 19.4604
            5.44678C18.7646 5.369 17.9174 5.37 17.0888 5.37V6.87ZM21.3933 10.0296C21.5625 9.18167 21.7062 8.47024 21.7414 7.90038C21.7775 7.31418 21.7108 6.73617 21.329 6.23978L20.1401 7.15439C20.2021 7.23508 20.2706 7.38037 20.2442 7.80797C20.2168 8.25191 20.1002 8.84478 19.9223
            9.73595L21.3933 10.0296ZM16.2404 16.25C17.0021 16.25 17.6413 16.2513 18.1566 16.1882C18.6923 16.1227 19.1809 15.9794 19.6074 15.6318L18.6598 14.469C18.5346 14.571 18.3571 14.6525 17.9744 14.6994C17.5712 14.7487 17.0397 14.75 16.2404 14.75V16.25ZM19.4235 12.1561C19.2621
            12.9389 19.1535 13.4593 19.0238 13.8442C18.9007 14.2095 18.785 14.367 18.6598 14.469L19.6074 15.6318C20.0339 15.2842 20.2729 14.8346 20.4453 14.3232C20.6111 13.8312 20.7388 13.2049 20.8926 12.4589L19.4235 12.1561Z"
                fill="#000000"></path>
            </g>
          </svg>
        </button>
        <button class="profile_btn" onClick="location.href='../mypage/mypage.html'">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <circle cx="12" cy="9" r="3" stroke="#000000" stroke-width="1.5"></circle>
              <circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="1.5"></circle>
              <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
            </g>
          </svg>
        </button>
        <button class="logout_btn" onClick="location.href='../main/main.html'">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17"
                stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
              <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div class="app-middle">
      <button onclick="location.href='../main/productlist.html'">유산균</button>
      <button>비타민</button>
      <button>오메가</button>
      <button>홍삼</button>
      <button onclick="location.href='../main/event.html'">이벤트</button>
    </div>
    <div class="con">
      <div class="info">
        <div class="cat2">
          <div style="margin-left: 30px;">
            <h2 style="color: #fff;">somin 관리자님</h2>
            <h2 style="color: #fff;">환영합니다.</h2>
          </div>

          <div style="width: 100px;">
          </div>
        </div>
      </div>


        <div class="container">
          <nav>
            <div class="sidebar">
              <div class="icon-bar adminpage-bar">

                <div>
                  <button onclick="location.href='userInfo.html'"
                    style="background-color: #fff; border-color: #fff; border-style: none;">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <circle cx="9" cy="9" r="2" stroke="#9c0410" stroke-width="1.5"></circle>
                        <path d="M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086
            13 9 13C11.2091 13 13 13.8954 13 15Z" stroke="#9c0410" stroke-width="1.5"></path>
                        <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10
            4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22
            15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876
            20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#9c0410" stroke-width="1.5">
                        </path>
                        <path d="M19 12H15" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                        </path>
                        <path d="M19 9H14" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                        </path>
                        <path d="M19 15H16" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                        </path>
                      </g>
                    </svg>
                    <p>회원 관리</p>
                  </button>
                </div>
                <div>
                  <button onclick="location.href='goodsList.html'"
                    style="background-color: #fff; border-color: #fff; border-style: none;">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M16 4.00195C18.175 4.01406 19.3529 4.11051 20.1213 4.87889C21 5.75757 21 7.17179 21 10.0002V16.0002C21 18.8286 21 20.2429 20.1213 21.1215C19.2426 22.0002 17.8284 22.0002 15 22.0002H9C6.17157 22.0002 4.75736 22.0002 3.87868 21.1215C3 20.2429 3 18.8286 3 16.0002V10.0002C3 7.17179 3 5.75757 3.87868 4.87889C4.64706 4.11051 5.82497 4.01406 8 4.00195"
                          stroke="#9c0410" stroke-width="1.5"></path>
                        <path d="M10.5 14L17 14" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round"></path>
                        <path d="M7 14H7.5" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                        </path>
                        <path d="M7 10.5H7.5" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round"></path>
                        <path d="M7 17.5H7.5" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round"></path>
                        <path d="M10.5 10.5H17" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round"></path>
                        <path d="M10.5 17.5H17" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round"></path>
                        <path
                          d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z"
                          stroke="#9c0410" stroke-width="1.5"></path>
                      </g>
                    </svg>
                    <p>상품 목록</p>
                  </button>
                </div>
                <div>
                  <button onclick="location.href='goodsAdd.html'"
                    style="background-color: #fff; border-color: #fff; border-style: none;">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M22 10.5V12C22 16.714 22 19.0711 20.5355
            20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2
            19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5" stroke="#9c0410"
                          stroke-width="1.5" stroke-linecap="round"></path>
                        <path d="M16.652 3.45506L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938
            2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.5449 7.34795M16.652
            3.45506C16.652 3.45506 16.7331 4.83379 17.9497 6.05032C19.1662 7.26685 20.5449
            7.34795 20.5449 7.34795M16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812
            10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191
            11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9M20.5449 7.34795L14.5801
            13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043
            14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L10.1 15.5876M10.1
            15.5876L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837
            7.9492 15.2897 8.03811 15.0229L8.41242 13.9M10.1 15.5876L8.41242 13.9" stroke="#9c0410" stroke-width="1.5">
                        </path>
                      </g>
                    </svg>
                    <p>상품 등록</p>
                  </button>
                </div>

                <div>
                  <button onclick="location.href='orderM.html'"
                    style="background-color: #fff; border-color: #fff; border-style: none;">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M3.86376 16.4552C3.00581 13.0234 2.57684 11.3075 3.47767 10.1538C4.3785 9 6.14721 9 9.68462 9H14.3153C17.8527 9 19.6214 9 20.5222 10.1538C21.4231 11.3075 20.9941 13.0234 20.1362 16.4552C19.5905 18.6379 19.3176 19.7292 18.5039 20.3646C17.6901 21 16.5652 21 14.3153 21H9.68462C7.43476 21 6.30983 21 5.49605 20.3646C4.68227 19.7292 4.40943 18.6379 3.86376 16.4552Z"
                          stroke="#9c0410" stroke-width="1.5"></path>
                        <path
                          d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4"
                          stroke="#9c0410" stroke-width="1.5"></path>
                        <path
                          d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z"
                          stroke="#9c0410" stroke-width="1.5"></path>
                        <path d="M8 13V17" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                        <path d="M16 13V17" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                        <path d="M12 13V17" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      </g>
                    </svg>
                    <p>배송 관리</p>
                  </button>
                </div>

                <div>
                  <button onclick="location.href='qnalist.html'"
                    style="background-color: #fff; border-color: #fff; border-style: none;">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M2 12C2 7.28595 2 4.92893 3.46447
        3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22
        16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2
        19.0711 2 16.714 2 12Z" stroke="#9c0410" stroke-width="1.5"></path>
                        <path d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875
        8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13" stroke="#9c0410"
                          stroke-width="1.5" stroke-linecap="round"></path>
                        <circle cx="12" cy="16" r="1" fill="#9c0410"></circle>
                      </g>
                    </svg>
                    <p>문의 내역</p>
                  </button>
                </div>

              </div>


            </div>
          </nav>
          <section>
            <div class="admininfo">
              <div class="admin">
                <table class="goodslist-table">
                  <caption>
                      <div class="list-title">
                          <h2>배송 관리</h2>
                          <div class="list-title2">
                          <div class="search_bar">
                              <input class="form-control" type="text" placeholder="검색">
                              <button class="search-btn" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                      width="20" height="20" fill="none" stroke="currentColor"
                                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      class="feather feather-search" viewBox="0 0 24 24">
                                      <defs></defs>
                                      <circle cx="11" cy="11" r="8"></circle>
                                      <path d="M21 21l-4.35-4.35"></path>
                                  </svg></button>
                                  
                          </div>

                          <div class="btn-area">
                            <button class="orderbtn">배송중 처리</button>
                            <button class="orderbtn">배송완료 처리</button>
                        </div>
                      </div>
                          <div class="list-title2">

                            <div class="dropdown">
                              <select name="languages" id="lang" class="pl">
                                <option>전체</option>
                                <option>결제완료</option>
                                <option>배송중</option>
                                <option>배송완료</option>
                                <option>구매확정</option>
                                <option>취소</option>
                              </select>
                            </div>
                          </div>
                      </div>
                  </caption>
                  <thead class="table-light">
                      <tr>
                          <th scope="col">결제일</th>
                          <th scope="col">주문번호</th>
                          <th scope="col">주문자</th>
                          <th scope="col">상품명</th>
                          <th scope="col">총 상품 금액</th>
                          <th scope="col">총 결제 금액</th>
                          <th scope="col">결제 상태</th>
                          <th scope="col">전체선택<input type="checkbox" style="margin-left: 5px;"></th>
                          <th scope="col">취소여부</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th scope="row">2023.12.27</th>
                          <td>01</td>
                          <td>이모닉하</td>
                          <td>나만의 비타민</td>
                          <td>120,000원</td>
                          <td>115,000원</td>
                          <td>결제완료</td>
                          <td><input type="checkbox"></td>
                          <td>O</td>
                      </tr>
                      <tr></tr>
                      <tr>
                        <th scope="row">2023.12.27</th>
                        <td>02</td>
                        <td>광산준석</td>
                        <td>오메가3</td>
                        <td>54,000원</td>
                        <td>57,000원</td>
                        <td>결제완료</td>
                        <td><input type="checkbox"></td>
                        <td>O</td>
                    </tr>
                    <tr></tr>
                    <tr>
                      <th scope="row">2023.12.27</th>
                      <td>03</td>
                      <td>이김태연</td>
                      <td>메이킨</td>
                      <td>460,000원</td>
                      <td>415,000원</td>
                      <td>결제대기</td>
                      <td><input type="checkbox"></td>
                      <td>O</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th scope="row">2023.12.27</th>
                    <td>04</td>
                    <td>전소중대건</td>
                    <td>하트파이</td>
                    <td>20,000원</td>
                    <td>15,000원</td>
                    <td>결제대기</td>
                    <td><input type="checkbox"></td>
                    <td>X</td>
                </tr>
                <tr></tr>
                <tr>
                  <th scope="row">2023.12.27</th>
                  <td>05</td>
                  <td>정내미진서</td>
                  <td>유민이</td>
                  <td>123,456원</td>
                  <td>123,000원</td>
                  <td>결제완료</td>
                  <td><input type="checkbox"></td>
                  <td>X</td>
              </tr>
                  </tbody>
              </table>

              <nav class="page">
                <ul>
                  <ul>
                    <a href="#">
                      <li class="page-item">1</li>
                    </a>
                  </ul>
                </ul>
              </nav>
              </div>
            </div>
        </section>
        </div>
    </div>
    </div>
</template>
<script>

</script>
<style>

</style>