const fs = require("fs");
const marked = require('marked');
marked.setOptions({
  highlight: (code)=>require('highlight.js').highlightAuto(code).value
});

const compilar = (carpeta, estilo) => {
  const content = fs.readFileSync(carpeta + '/README.md', 'utf8');
  const style = fs.readFileSync('node_modules/highlight.js/styles/'+estilo+'.css');
  const htmlcontent = '<style>'+style+'</style>\n'+marked(content);
  const inline = htmlcontent.replace(/src=\"([\w/]+)\.(png|jpe?g|gif)\?.+\"/g, function(match, file, type){
    const fileName = carpeta + '/' + file + '.' + type;
    const base64 = fs.readFileSync(fileName).toString('base64');
    const string = 'src="data:image/' + (type === 'jpg' ? 'jpeg' : type) + ';base64,' + base64 + '"';
    return string;
  });
  fs.writeFileSync(carpeta+'/README.html', inline, 'utf8');
};

const estilo = 'github';

compilar('./tareas_unidades_1_2_3', estilo);