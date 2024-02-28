const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-autenticado');
    res.render('login');
};

exports.autenticacao = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.autenticacao();
     
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
               return res.redirect('/login/index');
            });
            return;
        }
     
        req.flash('success', 'Autenticado com sucesso!');
        req.session.user = login.user;
        req.session.save(function () {
            return res.redirect('/login/index');
        });
        
    }  catch(e) {
        console.log(e);
        return res.render('404');
        }
};

exports.register = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.register();
        
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('/login/index');
            });
            return;
        }
        
        req.flash('success', 'Seu usuário foi cadastrado com sucesso!');
        req.session.save(function () {
            return res.redirect('/login/index');
        });
    }  catch(e) {
        console.log(e);
        // return res.render('404');
        return res.send(e);
    }
};

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
}