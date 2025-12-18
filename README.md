O TESTE
 
Defina casos de testes para um fluxo de compras de um ecommerce público de sua preferência.
Utilize o Playwright para criar testes ponta a ponta baseado no item anterior (não precisa finalizar a compra). (Anexar o projeto e seus resultados)
Realize um teste de API utilizando o Postman com a seguinte api pública https://gorest.co.in 
 
(Anexar a collection do Postman e seus resultados)

Assim que terminar, só responder este e-mail com link do resultado!

Casos de tesst implementados:

Funcionalidade: Fluxo de compra no site Williams Sonoma
  Como um usuário do site Williams Sonoma
  Eu quero buscar e adicionar produtos ao carrinho
  Para poder realizar uma compra

  Cenário: Verificar que a home page é iniciada corretamente
    Dado que acesso o site "https://www.williams-sonoma.com/"
    Então o slider da home page deve ser exibido

  Cenário: Pesquisar por produtos usando a palavra "pan"
    Dado que estou na página inicial
    Quando aguardo a barra de pesquisa estar disponível
    E digito "pan" na barra de pesquisa
    E clico no botão de buscar
    Então os resultados da pesquisa devem ser exibidos

  Cenário: Selecionar um produto da lista de resultados
    Dado que visualizo os resultados da pesquisa
    Quando rolo a página até o item estar visível
    E clico no item
    Então o título do produto deve ser exibido

  Cenário: Adicionar produto ao carrinho e iniciar checkout
    Dado que estou visualizando a página do produto
    Quando clico no botão "Adicionar ao Carrinho"
    E clico no botão "Checkout"
    E clico no segundo botão "Checkout"
    Então a página de login deve ser exibida


 Funcionalidade: Validação de busca sem resultados no site Williams Sonoma
  Como um usuário do site Williams Sonoma
  Eu quero buscar por termos inválidos
  Para verificar que o sistema exibe mensagem apropriada quando não encontra resultados

  Cenário: Verificar que a home page é iniciada corretamente
    Dado que acesso o site "https://www.williams-sonoma.com/"
    Então o slider da home page deve ser exibido

  Cenário: Pesquisar por termo inválido e validar mensagem de não encontrado
    Dado que estou na página inicial
    Quando aguardo a barra de pesquisa estar disponível
    E digito "%%%%%%%%%%%%%%%%" na barra de pesquisa
    E clico no botão de buscar
    Então a mensagem de "pesquisa não encontrada" deve ser exibida