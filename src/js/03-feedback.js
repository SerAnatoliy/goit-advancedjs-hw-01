import throttle from 'lodash.throttle';

const rec = {
    form: document.querySelector('.js-feedback-form'),
    input: document.querySelector('.js-feedback-form input'),
    message: document.querySelector('.js-feedback-form textarea')
};

let formData = {}
const STOR_KEY = 'feedback-form-state'

getSaveData()

rec.form.addEventListener('input', throttle(handlerInput, 500))
rec.form.addEventListener('submit', handlerSubmit)

function handlerInput() {
    formData = {
        email: rec.input.value,
        message: rec.message.value,

    }
    localStorage.setItem(STOR_KEY, JSON.stringify(formData))
}

function handlerSubmit(def) {
    def.preventDefault();

    console.log(formData)

    if (rec.input.value.length !== 0 && rec.message.value.length !== 0) {
        def.currentTarget.reset()
        localStorage.removeItem(STOR_KEY)
    }
    else {
        alert('All fields must be filled')
    }
}

function getSaveData() {
    const lsData = JSON.parse(localStorage.getItem(STOR_KEY))
    if (!lsData) {
        return
    }
    rec.input.value = lsData.email ?? ''
    rec.message.value = lsData.message ?? ''
}

