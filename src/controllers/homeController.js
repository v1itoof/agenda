exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'titulo teste',
        numeros: [0,1,2,3]
    });
    
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};