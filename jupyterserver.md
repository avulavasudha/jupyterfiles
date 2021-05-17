<html>
<style>
html,div,body{
    background-color:#1a1a1a;
    font-family: 'IBM Plex Sans', sans-serif;
}
.content h2,h3,h4
{
    font-family: 'IBM Plex Sans', sans-serif;
    background-color:#1a1a1a;
}
.content h2,p{
    color:#fff;
    font-family: 'IBM Plex Sans', sans-serif;
}
.content p{
  font-family: 'IBM Plex Sans', sans-serif;
  font:15px;
  color: #fff;
}
pre{
    background-color:#d9dbde;
    color:#000;
    font-family: 'IBM Plex Sans', sans-serif;
    font:12px;
}
.content h4{
    color:#fff;
}
.content h6{
    font-family: 'IBM Plex Sans', sans-serif;
    background-color:#1a1a1a;
    color:#fff;
}
.content h3{
    font-family: 'IBM Plex Sans', sans-serif;
    color: #2A67F5;
    background-color:#1a1a1a;
}
ul, ol,b{
    font-family: 'IBM Plex Sans', sans-serif;
    color: #fff;
}
#ul1{
  font-family: 'IBM Plex Sans', sans-serif;
    color: #fff;
}
.button.is-dark.is-medium {
  font-family: 'IBM Plex Sans', sans-serif;
  background-color: #1A1A1A;
  border-color: white;
  color: #fff;
}
.button.is-dark.is-medium:hover {
  font-family: 'IBM Plex Sans', sans-serif;
  background-color: #2A67F5;
  border-color: white;
  color: #fff;
}
.title.is-3{
  font-family: 'IBM Plex Sans', sans-serif;
  color:#fff;
}
.subtitle.is-4{
    font-family: 'IBM Plex Sans', sans-serif;
    color:#fff;
}
</style>
<body style="font-family: 'IBM Plex Sans', sans-serif;background-color:#1a1a1a;">
<div style="font-family: 'IBM Plex Sans', sans-serif;background-color:#1a1a1a;">
<h2 class="title is-3 ">Jupyter Integration  Sample Application</h2>
<h3>Jupyter Notebook enriches experience by providing a workspace that will allow the developers to run the complex  apps and that requires support for various notebooks.</h3>
<br/><li> Get the Code.</li><br/>
<a class="button is-dark is-medium" title="Get the Code" href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=n%20terminal%201$$cd%20${CHE_PROJECTS_ROOT}%20%26%26%20git%20clone%20https://github.com/avulavasudha/jupyterfiles.git">Get the Code</a>
<br/>
<br/><li> Get API token</li><br/>
<a class="button is-dark is-medium" title="Get API token" href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=Theia$$cd%20/projects/jupyterfiles;npm%20install%20node-fetch;node%20trailfetch.js&completion=The%20Server%20has%20started%20launched.">Get API token</a>
<br>
<br/><li> Open Jupyter Notebook</li><br/>
<a class="button is-dark is-medium" title="Open Jupyter Notebook" href="didact://?commandId=python.datascience.createnewnotebook&completion=The%20application%20has%20been%20launched.">Open Jupyter Notebook</a><br>
<p>You will see a dialog box saying " The application has been launched." </p>
<br>
</div>
</body>
</html>
