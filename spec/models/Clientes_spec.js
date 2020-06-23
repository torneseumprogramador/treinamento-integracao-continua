 const Cliente = require('../../models/Cliente')
 
describe('Clientes', ()=> {
    beforeEach(async ()=> {
    })
    
    it('Retorna todos', async () => {
        let clientes = Cliente.todos();
     expect(clientes.length).toEqual(10)
    });
   })