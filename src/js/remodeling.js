"use strict";
var $button = $(".event__right-img"),
    $check = $("#check"),
    $userNameInput = $("#userName"),
    $userPhoneInput = $("#userPhone"),
    $userInquiryInput = $("#userInquiry");
$button.click(function() {
    if (1 <= $userNameInput.val().length)
        if (1 <= $userPhoneInput.val().length)
            if (1 <= $userInquiryInput.val().length)
                if ($("#check1").is(":checked") || $("#check2").is(":checked") || $("#check3").is(":checked")) {
                    if ($("input[name='is_agree']:checked").length < 1) return alert("[개인정보취급방침]에 동의하지 않았습니다."), $("input[name='is_agree']").focus(), !1;
                        emailjs.sendForm("gmail", "template_ZeHVkggk", "#send", "user_PkdCJ31w0qOCLFqpTdJHB").then(function(e) {
                            console.log("SUCCESS!", e.status, e.text), alert("신청완료되었습니다."), location.reload();
                        }, function(e) {
                            console.log("FAILED…", e)
                        })
                } else alert("하나 이상의 옵션을 선택 해주셔야 합니다.");
            else alert("[문의내용] 필수입력사항입니다.");
        else alert("[연락처] 필수입력사항입니다.");
    else alert("[이름] 필수입력사항입니다.")
});
var $layer = $(".layer"),
    $close = $(".layer__btn"),
    $detail = $(".event__center-information--color");
$detail.click(function() {
    $layer.fadeIn()
}), $close.click(function() {
    $layer.fadeOut()
});