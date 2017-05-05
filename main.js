const fs = require("fs");
const marked = require('marked');
marked.setOptions({
  highlight: (code)=>require('highlight.js').highlightAuto(code).value
});

const compilar = (carpeta, estilo) => {
  const content = fs.readFileSync(carpeta + '/README.md', 'utf8');
  const style = fs.readFileSync('node_modules/highlight.js/styles/'+estilo+'.css');
  const htmlcontent = '<html>\n<head>\n<meta charset="UTF-8">\n<style>'+style+'</style>\n</head>\n<body>\n'+marked(content)+'\n</body>\n</html>';
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

compilar('./tareas_unidades_4_5_6', estilo);