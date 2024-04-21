function validate(input) {
    return input.value.length > 0 ? true : false;
  }
  
  function ageCheck(input) {
    return Number(input.value) >= 18 ? true : false;
  }
  
  const phoneRegEx =
    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  
  function testPhone(phone) {
    if (phoneRegEx.test(phone.value)) {
      return true;
    } else {
      return false;
    }
  }
  
  function generateCard() {
    return Math.floor(Math.random() * 9e15) + 1e15;
  }
  
  function purc() {
    Swal.fire({
      title: `Успешно ваша номер карточки: <br> ${generateCard()}`,
      icon: "success",
      confirmButtonText: "Ок",
    });
  }
  
  function cancel() {
    Swal.fire({
      title: "Ошибка",
      icon: "error",
      confirmButtonText: "Ок",
    });
  }
  
  const lastname = document.getElementById("last_n"),
    firstname = document.getElementById("first_n"),
    tel = document.getElementById("number"),
    age = document.getElementById("age"),
    regBtn = document.getElementById("registr"),
    clearBtn = document.getElementById("clear");
  
  regBtn.addEventListener("click", function (event) {
    event.preventDefault();
  
    if (
      validate(lastname) &&
      validate(firstname) &&
      validate(tel) &&
      validate(age) &&
      ageCheck(age) &&
      testPhone(tel)
    ) {
      purc();
    } else {
      cancel();
    }
  });

  clearBtn.addEventListener("click", function (event) {
    event.preventDefault();
    lastname.value = "";
    firstname.value = "";
    tel = "";
    age = "";
  });

  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      this.value = this.value.toUpperCase();
    });
  });