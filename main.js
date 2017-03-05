const fs = require("fs");
const marked = require('marked');
marked.setOptions({
  highlight: (code)=>require('highlight.js').highlightAuto(code).value
});

const htmlToPdf = require('html5-to-pdf');


const compilar = (carpeta) => {
  const content = fs.readFileSync(carpeta + '/README.md', 'utf8');
  const style = fs.readFileSync('./markdown.css');
  const htmlcontent = '<style>'+style+'</style>\n'+marked(content);
  fs.writeFileSync(carpeta+'/README.html', htmlcontent, 'utf8');
  const converter = new htmlToPdf({
    inputPath: carpeta+'/README.html',
    outputPath: carpeta+'/README.pdf'
  });
  converter.build(error => console.log(error));
};


const carpeta = './tareas_unidades_1_2_3';

compilar('test');