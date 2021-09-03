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
        passport.authenticate('google')
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })

    app.get(
        '/api/current_user', (req, res) => {
        res.send(req.user);
    });
};