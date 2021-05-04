let todo = {
  "username": "vasudha",
  "password": "123"
};
const fs = require('fs')
const fetch = require('node-fetch');
fetch('http://169.60.204.172/hub/api/authorizations/token', {
  method: 'POST',
  body: JSON.stringify(todo),
}).then(res => res.json())
.then(json => {const a = `{"python.dataScience.jupyterServerURI": "http://169.60.204.172/user/vasudha/?token=${json["token"]}"}`
fs.writeFile('/home/theia/.theia/settings.json', a, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
});