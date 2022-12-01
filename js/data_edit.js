const userData = {
    email: "",
    lastName: "",
    password: "",
    firstName: "",
    midleName: "",
    passwordRepeat: "",
  };
  const form1 = document.formOne;
  const form2 = document.formTwo;
  const changetBtn = document.querySelector(".demd2_3_button");
  form1[0].addEventListener("change", (event) => {
    if ((userData.email = event.target.value)) {
      form1[0].className = "demd2_1_input success";
      form1[0].previousElementSibling.innerHTML = "";
    } else {
      form1[0].classList.add("error");
      form1[0].previousElementSibling.innerHTML = " правильный адрес эл. почты";
    }
  });
  
  form1[1].addEventListener("change", (event) => {
    if (
      event.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
    ) {
      userData.password = event.target.value;
      form1[1].className = "demd2_1_input success";
      form1[1].previousElementSibling.innerHTML = "";
    } else {
      form1[1].classList.add("error");
      form1[1].previousElementSibling.innerHTML =
        "Минимум восемь символов, одна заглавная буква, строчная буква,цифра:Повторите пароль";
    }
  });
  
  form1[2].addEventListener("change", (event) => {
    if (userData.password == event.target.value) {
      userData.passwordRepeat = event.target.value;
      form1[2].className = "demd2_1_input success";
      form1[2].previousElementSibling.innerHTML = "";
    } else {
      form1[2].classList.add("error");
      form1[2].previousElementSibling.innerHTML = "Повторите пароль";
    }
  });
  
  form2[0].addEventListener("change", (event) => {
    if (event.target.value.match(/^[A-Z]{1}/)) {
      userData.lastName = event.target.value;
      form2[0].className = "demd2_1_input success";
      form2[0].previousElementSibling.innerHTML = "";
    } else {
      form2[0].classList.add("error");
      form2[0].previousElementSibling.innerHTML =
        "должен начинаться с заглавной буквы";
    }
  });
  
  form2[1].addEventListener("change", (event) => {
    if (event.target.value.match(/^[A-Z]{1}/)) {
      userData.firstName = event.target.value;
      form2[1].className = "demd2_1_input success";
      form2[1].previousElementSibling.innerHTML = "";
    } else {
      form2[1].classList.add("error");
      form2[1].previousElementSibling.innerHTML =
        "должен начинаться с заглавной буквы";
    }
  });
  form2[2].addEventListener("change", (event) => {
    if (event.target.value.match(/^[A-Z]{1}/)) {
      userData.midleName = event.target.value;
      form2[2].className = "demd2_1_input success";
      form2[2].previousElementSibling.innerHTML = "";
    } else {
      form2[2].classList.add("error");
      form2[2].previousElementSibling.innerHTML =
        "должен начинаться с заглавной буквы";
    }
  });
  
  form1.addEventListener("submit", (e) => e.preventDefault());
  form2.addEventListener("submit", (e) => e.preventDefault());
  changetBtn.addEventListener("click", () => {
    const id = JSON.parse(localStorage.getItem('user')).id ?? null;
    if (
      userData?.email &&
      userData?.firstName &&
      userData?.lastName &&
      userData?.midleName &&
      userData?.password
    ) {
      fetch(`https://retoolapi.dev/AznfKA/data/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
      .then(receivedData => receivedData.json())
      .then(data => localStorage.setItem('user',JSON.stringify(data)))
        .then(() => (window.location.pathname = "home%20page/index.html"))
        .catch((er) => console.error("errorrrr"));
    }
  });
//   form[6].addEventListener("click", function (){
//     const id=JSON.parse(localStorage.getItem('user')).id ?? null;
//      if(registor?.email && registor?.firstName && registor?.lastName && registor?.middleName && registor?.password){
//        fetch(`https://api-generator.retool.com/78mo0Y/registor/${id}`,{   
//          method:'PUT',
//          headers: {
//            "Accept":"application/json",
//            "Content-Type":"application/json"
//          },
//          body: JSON.stringify(registor)
//        })
//      .then(response =>response.json())
//      .then(res => localStorage.setItem('user',JSON.stringify(res)))
//      .catch(er => console.error(er))     
//    }
//    })