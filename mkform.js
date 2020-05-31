//--input(count<=0)の時、赤字で「※入力されていません。」と表示したい
if (form(count<=0)){
    alert("※入力されていません。")
    alert.style.color ="red";
}

//checkboxがclickされたらsubmitのdisabledを解除したい
function submitActive(checkbox,onclick) {
    let btn = disabled.parentElement
    btn.removeChild(disabled);
}
