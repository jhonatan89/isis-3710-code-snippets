
const axios = require('axios');

async function getDatafromAnotherServer() {
  const resp = await axios.get('http://webcode.me');
  console.log(resp.data);
}

getDatafromAnotherServer();

/* axios.get('http://webcode.me').then((resp) => {
  console.log(resp.data);
}); */
