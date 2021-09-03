//  logica responsavel por escolher qual tipo de variavel usar (prod ou dev)

if(process.env.NODE_ENV === 'production') {
    //area de producao - retorna chaves de producao
    module.exports = require('./prod');
} else {
    //area de desenvolvimento - retorna chaves de desenvolvimento
    module.exports = require('./dev');
}