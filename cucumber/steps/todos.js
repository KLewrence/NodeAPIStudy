const {Given, Then} =  require ('cucumber');
const axios = require('axios');
const assert = require('assert');

Given ('get all ep is requested', async function(){
    const url = 'http://localhost:3000/api/todo'
    try {
        const response = await axios.get(url);
         const data = response.data;
         this.responseData = data;
         console.log(data);
    }
    catch(err){
        throw err;
    }
})

    Then ('I should return 2 todos', async function (){
        console.log(this.responseData);
        assert.equal(this.responseData.length, 2, 'the GET All response did not return 2 elements')

    })
    

