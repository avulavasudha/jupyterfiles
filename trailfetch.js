let todo = {
  "username": process.env.CHE_WORKSPACE_NAMESPACE,
  "password": "ibm"
};
const fs = require('fs')
const fetch = require('node-fetch');
fetch('http://169.60.204.172/hub/api/authorizations/token', {
  method: 'POST',
  body: JSON.stringify(todo),
}).then(res => res.json())
.then(json => {const a = `{"python.dataScience.jupyterServerURI": "http://169.60.204.172/user/${process.env.CHE_WORKSPACE_NAMESPACE}/?token=${json["token"]}"}`
fs.writeFile('/home/theia/.theia/settings.json', a, err => {
  if (err) {
    console.error(err)
    return
  }
  //console.log(x)
  console.log(process.env.CHE_WORKSPACE_NAMESPACE)
  const { exec} = require('child_process');
  const a = `curl -X POST -H "Authorization: token ${json["token"]}" "http://169.60.204.172/hub/api/users/${process.env.CHE_WORKSPACE_NAMESPACE}/server"`
  console.log(a);
  exec(`${a}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
})
})
