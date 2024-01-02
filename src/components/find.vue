<template>
  <div class="app-container">
        
<div class="container" id="container">
   <div class="form-container find-pw-container">
      <form>
         <h1>비밀번호 찾기</h1>
         <input type="name" v-model="user_name" placeholder="이름" />
            <input type="id"  v-model="user_id" placeholder="아이디"/>
         <input type="email"  v-model="user_email" placeholder="이메일" />
            <input type="phone"  v-model="user_phone" placeholder="휴대폰번호"/>
         <button @click="findPW()">비밀번호 찾기</button>
      </form>
   </div>
   <div class="form-container find-id-container">
      <form>
         <h1>아이디 찾기</h1>
         <input type="name" v-model="user_name" placeholder="이름" />
         <input type="email" v-model="user_email" placeholder="이메일" />
         <input type="phone" v-model="user_phone" placeholder="휴대폰번호"/>
         <button @click="findID()">아이디 찾기</button>
         <div v-if="response_id_check" class="response">
                    <p>아이디는 {{ search_user_id }}입니다. </p>
                </div>
      </form>
   </div>
   <div class="overlay-container">
      <div class="overlay">
         <div class="overlay-panel overlay-left">
            <h1>아이디를 잊어버리셨나요?</h1>
            <p>아래 버튼을 클릭하여 찾아주세요.</p>
            <button id="signIn" @click="removeActive" class="ghost" >아이디 찾기</button>
         </div>
         <div class="overlay-panel overlay-right">
            <h1>비밀번호를 잊어버리셨나요?</h1>
            <p>아래 버튼을 클릭하여 찾아주세요.</p>
            <button id="signUp" @click="addActive" class="ghost" >비밀번호 찾기</button>
            <div v-if="response_pw_check" class="response">
                    <p>임시 비밀번호는 {{ user_pw }} 입니다.</p><br>
                        <p>로그인 후 꼭 변경해주세요.</p>
                </div>
         </div>
      </div>
   </div>
</div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
        return {
            user_email: '',
            user_name: '',
            user_phone: '',
            user_id: '',            // password 변경 용 입력한 아이디 -- 아이디가 비밀번호로
            user_pw: '',
            search_user_id: '',     // id 찾기로 받은 아이디
            response_id_check: false,
            response_pw_check: false,
        };
    },
  methods: {
    addActive() {
      const container = document.getElementById('container');
      container.classList.add("right-panel-active");
    },
    removeActive() {
      const container = document.getElementById('container');
      container.classList.remove("right-panel-active");
    },
    findID() {
            if (this.user_name === '') {
              alert('이름을 입력해주세요')
              return;
            } if (this.user_email === '') {
              alert('이메일을 입력해주세요');
              return;
            } if (this.user_phone === '') {
              alert('전화번호를 입력해주세요');
              return;
            } else if (!this.isValidEmail(this.user_email)) {
              alert('유효한 이메일을 입력해주세요');
            } else {
                axios.post('http://localhost:8080/find/', //이건 후에 백단에서 응답할 주소 입력!
                    { user_email: this.user_email,
                      user_phone: this.user_phone,
                      user_name: this.user_name }
                ).then((res) => {
                    if (res.data.message === 'user_email') {
                        this.search_user_id = res.data.user_id;
                        this.response_id_check = true;
                    } else {
                        alert('알 수 없는 오류가 발생했습니다.');
                    }
                })
                    .catch((error) => {
                        console.log(error);
                        alert('해당 정보에 대한 아이디가 없습니다.');
                        // 이메일 전송 실패 시 처리할 작업 수행
                    });
            }
        },
        findPW() {
            if (this.user_name === '') {
              alert('이름을 입력해주세요')
              return;
            } if (this.user_id === '') {
              alert('아이디를 입력해주세요')
              return;
            } if (this.user_email === '') {
              alert('이메일을 입력해주세요');
              return;
            } if (this.user_phone === '') {
              alert('전화번호를 입력해주세요');
              return;
            } else if (!this.isValidEmail(this.user_email)) {
                alert('유효한 이메일을 입력해주세요');
            } else {
                axios
                    .post('http://localhost:8080/find/', {  //이건 후에 백단에서 응답할 주소 입력!2
                        user_id: this.user_id,
                        user_email: this.user_email,
                        user_phone: this.user_phone,
                        user_name: this.user_name
                    })
                    .then((res) => {
                        this.user_pw = res.data.message;
                        this.response_pw_check = true;
                    })
                    .catch((error) => {
                        console.log(error);
                        alert('정보 확인에 실패했습니다.');
                    });
            }
        },
        isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(./css/find.css);
</style>