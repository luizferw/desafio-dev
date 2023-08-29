# Instruções para rodar o projeto localmente

Clonar o repositório
`git clone https://github.com/luizfer/desafio-dev.git`

Acessar a pasta
`cd desafio-dev`

Instalar as dependências
`yarn`

Rodar local
`yarn dev`

Abrir o navegador em http://localhost:5173/

# Desafio de programação para vaga de desenvolvedor

Por favor leiam este documento do começo ao fim, com muita atenção.
O intuito deste teste é avaliar seus conhecimentos técnicos em programação.
O teste consiste em importar um arquivo EXCEL, apresentar suas informações (transações financeiras), permitir sua edição e download após finalização.
Este desafio deve ser feito por você em sua casa. Gaste o tempo que você quiser, porém normalmente você não deve precisar de mais do que algumas horas.

# Instruções de entrega do desafio

1. Primeiro, faça um fork deste projeto para sua conta no Github (crie uma se você não possuir).
2. Em seguida, implemente o projeto tal qual descrito abaixo, em seu clone local.
3. Por fim, envie via email o projeto ou o fork/link do projeto para seu contato Manchester Investimentos com cópia para rh@manchesterinvest.com.br.

# Descrição do projeto

Você recebeu um arquivo EXCEL com os dados das movimentações financeiras de uma loja.
Precisamos criar uma maneira para que estes dados sejam visualizados e editados em uma interface web.

Sua tarefa é criar uma interface web que aceite o upload do arquivo, normalize os dados, exiba essas informações em tela e permita a sua edição, e por fim, permita o download das informações com a mesma formatação inicial.

**Sua aplicação web DEVE:**

1. Ter uma tela (via um formulário) para fazer o upload do arquivo. Pontos extras se a implementação não utilizar bibliotecas para a função de importação.
2. Interpretar o arquivo recebido, normalizar os dados, e apresentar em tela os dados recebidos.
3. Exibir uma lista das vendas realizadas da loja, e nesta lista deve conter um totalizador das vendas por mês e por categoria de produto.
4. Permitir a edição dos dados em tela, e o download dos dados após as edições terem sido concluídas, na mesma formatação utilizada pelo arquivo .xlsx de entrada.
5. Utilizar React, junto com Material UI ou Chakra UI.
6. Utilizar apenas bibliotecas livres ou gratuitas, e deve ser implementada apenas com Javascript e Typescript.
7. Conter o arquivo Readme descrevendo bem o projeto e seu setup. O arquivo deve identificar todas as etapas e dependências para a instância da aplicação.

**Sua aplicação web não precisa:**

1. Lidar com autenticação ou autorização (pontos extras se ela fizer, mais pontos extras se a autenticação for feita via OAuth).

# Referência

Este desafio foi baseado neste outro desafio: https://github.com/ByCodersTec/desafio-dev
