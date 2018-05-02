const fs = require('fs');


let contar = (n) => {

    return new Promise((resolve, reject) => {

        if (!Number(n)) {
            reject(`${n} no es un número`);
            return;
        }

        numeros = '';

        for (let i = 1; i <= n; i++) {
            numeros += i;
        }

        fs.writeFile(`./cuenta/cuenta-hasta-${n}.txt`, numeros, (err) => {
            if (err) reject(err);
            else resolve(`cuenta-hasta-${n}.txt`);
        });

    });

}


module.exports = {
    contar
}