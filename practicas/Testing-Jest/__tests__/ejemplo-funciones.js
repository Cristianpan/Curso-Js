function sumar(a,b){
    return a + b; 
}

function restar(a, b){
    return b - a; 
}

describe('Testing a las funciones de suma y resta', ()=> {
    test('Suma de 20 y 30', ()=> {
        expect(sumar(20, 30)).toBe(50);
    })

    test('Resta de 40 y 15', ()=> {
        expect(restar(15, 40)).toBe(25); 
    })
}); 