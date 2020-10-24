const {Given, Then} =  require ('cucumber');
const axios = require('axios');
const assert = require('assert');
const yargs = require ('yargs/yargs')(process.argv).argv;
//const API_URL = process.env.API_URL || 'http://localhost:3001'//'http://3.22.186.4:3000'
console.log(process.argv);
console.log(yargs);
let API_URL = yargs.API_URL || 'http://localhost:3001'

Given ('get all ep is requested', async function(){
    const url = `${API_URL}/api/todo`
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
    

