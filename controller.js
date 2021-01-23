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
        .send({ message: '/start/:number  ruta para iniciar el juego',message2:'/play/:number  ruta para jugar' });
};
const playGame = async (req, res) => {
    let num = req.params.number;
    let correcto = process.env.CORRECTO;
    let respuesta = ""
    let correctoSplit = correcto.split("")
    let numeros = num.split("")

    for (let i = 0; i < 4; i++) {
        if (correcto.includes(numeros[i])) {
            if (correctoSplit[i] == numeros[i]) {
                respuesta = "X" + respuesta
            } else {
                respuesta = respuesta + "_"
            }
        }
    } return res
        .status(200)
        .send({ message: `el resultado con el numero ${num} es ${respuesta}` });


};

module.exports = {
    StartGame,
    playGame,
    view
};