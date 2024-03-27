const password = "123123"; 

describe('Valida que el password no esté vacio', ()=> {
    test('Que el password tenga 6 caracteres', ()=> {
        expect(password).toHaveLength(6); 
    }); 
    test('Que el passwor no esté vacio', ()=> {
        expect(password).not.toHaveLength(0); 
    })
}); 