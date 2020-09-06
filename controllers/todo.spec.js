const todoController = require ('./todo');

describe('todoController', () => {


 it ( 'should return todos when calling getTodos', () =>{
    const resMock = {
        send: jest.fn()

     }
    todoController.getToDos(null, resMock );
     expect (resMock.send).toHaveBeenCalled();
     expect (resMock.send).toHaveBeenCalledWith([{"description": "brush Haru", "done": false, "id": 1}, {"description": "dress up Haru", "done": false, "id": 2}]);
     expect(resMock.send.mock.calls[0][0][0].id).toEqual(1);
    })

    it ('should not update todo if not found', ()=>{
        const reqMock = {
            params: {
                id: 5
            },
            body: {
                description:'fake object',
                done: false
            }
        }
        const sendSpy = jest.fn(); 
        const statusSpy = jest.fn().mockReturnValue({
            send: sendSpy
        }); 

        const resMock = {
            status: statusSpy
        }

        todoController.putToDos(reqMock, resMock);
        expect (statusSpy).toHaveBeenCalled();
        expect (sendSpy).toHaveBeenCalled();
        expect (statusSpy).toHaveBeenCalledWith(404);


    })

    it ('should update todo if founded', ()=>{
        const reqMock = {
            params: {
                id: 1
            },
            body: {
                description:'mock object',
                done: false
            }
        }
        const sendSpy = jest.fn(); 

        const resMock = {
            send: sendSpy
        }

        todoController.putToDos(reqMock, resMock);
        expect (sendSpy).toHaveBeenCalled();
        expect (sendSpy).toHaveBeenCalledWith({"description": "mock object", "done": false, "id": 1});


    })




});