var $button = $('.event__right-img');
var $check = $('#check')
var $userNameInput = $("#userName")
var $userPhoneInput = $("#userPhone")
var $userInquiryInput = $("#userInquiry")


$button.click(function () {
  if($userNameInput.val().length >= 1){
    if($userPhoneInput.val().length >= 1){
      if($userInquiryInput.val().length >= 1){
        // 상품 종류 체크 여부 
        if( $("#check1").is(":checked") || $("#check2").is(":checked")) {
          
          if( $("input[name='is_agree']:checked").length < 1 ) {
            alert("[개인정보취급방침]에 동의하지 않았습니다.");
            $("input[name='is_agree']").focus();
            return false;
          }	
          emailjs.sendForm('gmail', 'template_t5W1kiSU', '#send', 'user_z41T5sTQoaaI9gRKKkEIK')
          .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
              console.log('FAILED…', error);
          });
        }else{
          alert("하나 이상의 옵션을 선택 해주셔야 합니다.");

        }
        // if( $("input[name='pp_data85[]']:checked").val().length < 1 ) {
        //   alert("하나 이상의 옵션을 선택 해주셔야 합니다.");
        //   $("input[name='pp_data85[]']").focus();
        //   return false;
        // }

        // 개인정보취급방침 동의 체크
        

      }else{
        alert("[문의내용] 필수입력사항입니다.")
      }
    }else{
      alert("[연락처] 필수입력사항입니다.")
    }
  }else{
    alert("[이름] 필수입력사항입니다.");
  }
  
})


var $layer = $('.layer')
var $close = $('.layer__btn')
var $detail = $('.event__center-information--color')


$detail.click(function(){
  $layer.fadeIn()
})

$close.click(function(){
  $layer.fadeOut()
})

