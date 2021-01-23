const { breaker } = require('./codebreaker');


const StartGame = async (req, res) => {
    let num = req.params.number;
    process.env.CORRECTO = num;
    return res
        .status(200)
        .send({ message: 'Valor inicial actualizado' });
};

const view = async (req, res) => {

    return res
        .status(200)
        .send({ message: '/start/:number  ruta para iniciar el juego', message2: '/play/:number  ruta para jugar' });
};
const playGame = async (req, res) => {
    let num = req.params.number;
    let respuesta = breaker(num);
    return res
        .status(200)
        .send({ response: respuesta });

};

module.exports = {
    StartGame,
    playGame,
    view
};