# Fluig com ES6+ e Mocha.js tests
Utilizando o Babel para transpilar o JS do ES6+ para ES5 nos códigos back-end (Datasets, Eventos de Formulário e Eventos de Workflow).

# Como funciona?
Criando o padrão do Projeto Fluig, é necessário adicionar os folders /src (src_datasets, src_scripts) e copiar os fontes para o src.
E criar o Script de Build na package.json
    "build": "babel fluig-experimental-babel/workflow/src_scripts --out-dir fluig-experimental-babel/workflow/scripts && find fluig-experimental-babel/workflow/scripts -type f -name \"*.js\" -exec sed -i '/module\\.exports/,/};/d' {} +"

## babel fluig-experimental-babel/workflow/src_scripts --out-dir fluig-experimental-babel/workflow/scripts
Configurando o build para transpilar os arquivos de projeto/workflow/src_scripts para projeto/workflow/scripts

## find fluig-experimental-babel/workflow/scripts -type f -name \"*.js\" -exec sed -i '/module\\.exports/,/};/d' {} +
Script para remover o module.exports do fonte, o Fluig não compilara o Script se conter o module.exports