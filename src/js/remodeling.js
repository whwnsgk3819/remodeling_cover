



var $button = $('.event__right-img');
// var $check = $('#check')
var templateParams = {
  name: 'Cho',
  notes: 'Check this out!'
};

$button.click(function () {
  // if( $("check").length < 1 ) {
  //   alert("[이름] 필수입력사항입니다.");
  //   $("check").focus();
  //   return false;
  // }
  // if( $("check").length < 1 ) {
  //   alert("[연락처] 필수입력사항입니다.");
  //   $("check").focus();
  //   return false;
  // }
  
  
  emailjs.sendForm('gmail', 'template_t5W1kiSU', '#test', 'user_z41T5sTQoaaI9gRKKkEIK')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
})









