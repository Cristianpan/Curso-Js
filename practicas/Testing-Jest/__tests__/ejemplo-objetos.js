const cliente = {
    nombre: 'Cristian Pan',
    balance: 500,  
}

describe('Test de cliente', ()=> {
    test('El cliente es premium', ()=> {
        expect(cliente.balance).toBeGreaterThan(400); 
    })

    test('El cliente es igual', ()=> {
        expect(cliente).toEqual({nombre: 'Cristian Pan', balance:500}); 
    })
})