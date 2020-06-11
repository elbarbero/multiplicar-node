const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors/safe');

let listarTabla = (base, limite) => {
    if(!Number(base) || !Number(limite)){
        return 'Error. La Base y el límite deben de ser numeros';
    } else {
        let data = '';
        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }
        return data;
    }
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for(let i = 1; i <= 10; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
        if (err) {
            reject(err);
        } else {
            resolve(`tabla-${base}.txt`);
        }
        });
    });
}

let crearArchivo_ConLimite = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
        if (err) {
            reject(err);
        } else {
            resolve(colors.red.underline(`tabla-${base}.txt`));
        }
        });
    });
}

module.exports = {
    f_CrearArchivo: crearArchivo,
    f_listarTabla: listarTabla,
    f_crearArchivo_ConLimite: crearArchivo_ConLimite
}

