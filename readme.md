# Fluig com ES6+ e Mocha.js tests
Utilizando o Babel para transpilar o JS do ES6+ para ES5 nos códigos back-end (Datasets, Eventos de Formulário e Eventos de Workflow).

# Como funciona?
Criando o padrão do Projeto Fluig, é necessário adicionar os folders /src (src_datasets, src_scripts) e copiar os fontes para o src.
Criar o arquivo .babelrc e usar o preset
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "ie": "11"  // Ensures compatibility with Internet Explorer 11
                }
            }
        ]
    ]
}

Criar o Script de Build na package.json
    "build": "babel fluig-experimental-babel/workflow/src_scripts --out-dir fluig-experimental-babel/workflow/scripts && find fluig-experimental-babel/workflow/scripts -type f -name \"*.js\" -exec sed -i '/module\\.exports/,/};/d' {} +"

## babel fluig-experimental-babel/workflow/src_scripts --out-dir fluig-experimental-babel/workflow/scripts
Configurando o build para transpilar os arquivos de projeto/workflow/src_scripts para projeto/workflow/scripts

## find fluig-experimental-babel/workflow/scripts -type f -name \"*.js\" -exec sed -i '/module\\.exports/,/};/d' {} +
Script para remover o module.exports do fonte, o Fluig não compilara o Script se conter o module.exports, necessário executar o npm run build com o Git Bash, o cmd ou powershell não irão remover o module.exports


# Mocha.js
Após rodar o comando npm install mocha, criar a arquivo /test/test.js e alterar o package.json o scripts/test para "mocha", após descrever os testes executar o npm run test e aguardar o resultado.