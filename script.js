function handleSubmit() {
  //lay gia tri cua input email va chuyen sang in thuong
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  //lay element cua the p hien thi loi
  const errorEmail = document.getElementById("error-email");
  //dieu kien de la 1 email
  const checkEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //dung match de kiem tra doi voi email vua nhap
  const check = emailValue.match(checkEmail);
  //lay phan chua thong tin user
  const sectionContent = document.querySelector(
    "#personal-info .section-content"
  );
  //lay element de kiem soat submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}
const handleOnMouseOver = function (element) {
  element.querySelector(".view-more").style.display = "inline-block";
  element.querySelector(".less-more").style.display = "inline-block";
};
const handleOnMouseOut = function (element) {
  element.querySelector(".view-more").style.display = "none";
  element.querySelector(".less-more").style.display = "none";
};
const handleViewMore = function (element) {
  const parentElement = element.closest(".parent");
  const sectionContent = parentElement.querySelector(".section-content");
  sectionContent.style.display = "grid";
};
const handleLessMore = function (element) {
  const parentElement = element.closest(".parent");
  const sectionContent = parentElement.querySelector(".section-content");
  sectionContent.style.display = "none";
};
