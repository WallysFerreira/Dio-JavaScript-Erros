"use strict";
function lengthChecker(arr, l) {
    try {
        if (!arr || !l)
            throw new ReferenceError('Faltando parametro');
        if (typeof arr !== 'object')
            throw new TypeError('Array não é do tipo objeto');
        if (typeof l !== 'number')
            throw new TypeError('Length não é do tipo numero');
        if (l !== arr.length)
            throw new RangeError('Tamanho do array é diferente do length');
        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Isso é um ReferenceError");
            console.log(e.name);
            console.log(e.stack);
            throw e;
        }
        else if (e instanceof TypeError) {
            console.log("Isso é um TypeError");
            console.log(e.name);
            console.log(e.stack);
            throw e;
        }
        else if (e instanceof RangeError) {
            console.log("Isso é um RangeError");
            console.log(e.name);
            console.log(e.stack);
            throw e;
        }
        else {
            console.log(`Erro não esperado: ${e}`);
        }
    }
}
