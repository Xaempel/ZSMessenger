function clearInputBox() {
  let InputBoxName = document.getElementsByClassName('InputBox').item(0);
  let InputBoxSurName = document.getElementsByClassName('InputBox').item(1);
  let InputBoxPassword = document.getElementsByClassName('InputBox').item(2);
  InputBoxName.value = '';
  InputBoxSurName.value = '';
  InputBoxPassword.value = '';
}
