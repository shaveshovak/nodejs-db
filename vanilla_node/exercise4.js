// const axios = require('axios');

import axios from 'axios';

axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => { 
        console.log(response);
    })
    .catch((err) => {
        console.log(err)
    })
