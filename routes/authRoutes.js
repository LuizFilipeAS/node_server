const passport = require('passport');

module.exports = app => {
    /* 
        Route Handler de permissao de acesso   
    */
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email'] //oque esta sendo acessado
        })
    ); 

    /*
        Route Handler de obtencao dos dados
    */    
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })

    app.get(
        '/api/current_user', (req, res) => {
            //res.send(req.session); serve para verificar o dado 
            //                       extraído do cookie
        res.send(req.user);
    });
};