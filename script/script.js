function validation(form) {
    return form.value.length > 0? true: false;
};

const name = document.getElementById("name");
const email = document.getElementById("email");
const title = document.getElementById("title");
const text = document.getElementById("text");

document.getElementById('form_btn').addEventListener('click', function(event) {
    event.preventDefault()

    if (validation(name) && validation(email) && validation(title) && validation(text)){
        window.location.href = "index.html";
    }
    else {
        alert('поля не заполнены')
    }
})