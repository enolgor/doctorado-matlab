const fs = require("fs");

/*const compilar = (carpeta) =>
markdownpdf()
.from('./'+carpeta+'/README.md')
.to('./output/'+carpeta+'.pdf',()=>console.log("Done: "+carpeta+".pdf"));
*/
//compilar('tareas_unidades_1_2_3');

const marked = require('marked');
const carpeta = 'tareas_unidades_1_2_3';
const content = fs.readFileSync('./' + carpeta + '/README.md', 'utf8');
marked.setOptions({
  highlight: (code)=>require('highlight.js').highlightAuto(code).value
});
const htmlcontent = '<link rel="stylesheet" href="../markdown.css">\n'+marked(content);

fs.writeFileSync(carpeta+'/README.html', htmlcontent, 'utf8');
