import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const senhaInput = el.querySelector('input[name="senha"]');
        let error = false;

        if(!validator.isEmail(emailInput.value)){
            alert('Email inválido!');
            error = true;
        }
        
        if(senhaInput.value.length < 3 || senhaInput.value.length > 9){
            alert('Senha deve ter no minimo 3 a 9 caracteres!');
            error = true;
        }

        if(!error) el.submit();
    }
}