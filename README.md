# React Native Developer Test (Estágio)
# Rick and Morty API

## Critérios mínimos:

- Consumir dados de alguma [API](https://github.com/Ploomes/JrReactNativeSkillTest/blob/master/README.md#sugestões-de-apis);
- Utilizar de ao menos um componente reutilizável(genérico);
- [Clean Code](https://becode.com.br/clean-code/);

## Diferenciais:

- Utilizar [Redux](https://redux.js.org/basics/usage-with-react/) para gerenciamento de estado;
- Possibilidade de utilização Online/Offline com algum tipo de persistência de dados Offline;
- TypeScript;
- Layout FODA!;
- Comentários;

## Entrega

Para a entrega, clonar esse repositório e indicar QUAL O PROBLEMA QUE A SUA APLICAÇÃO SE PROPÕE A RESOLVER;
Incluir também instruções de execução, limitações, bugs conhecidos e quais seriam os próximos passos para a evolução do sistema.

## Minha Entrega

### Problema

Minha aplicação se propõe a resolver o questionamento de pessoas que estão começando a assistir Rick and Morty e não sabem muito bem sobre o que a série animada é, não sabem quem são os personagens - se eles estão vivos, de que planeta são etc.
Como esse é um desenho complexo, que envolve muitos universos, muitos podem não entender muito bem o que está acontecendo, por isso essa API mostra detalhes de alguns personagens, explica sobre o piloto da série e envia o usuário para um site que possui informações detalhadas feito pelo próprio fandom.

### Instruções de Execução

Para usar esse aplicativo, é extremamente fácil.

- A primeira tela mostra a API com todos os personagens selecionados, ao descer o scroll é possível vê-los.

![](https://github.com/alicialopes/RickAndMortyAPI/blob/main/assets/gifs/gif1.gif)

- Ao apertar em cada personagem, irá abrir uma modal com informações mais específicas sobre ele.

![](https://github.com/alicialopes/RickAndMortyAPI/blob/main/assets/gifs/gif2.gif)

- A segunda tela mostra informações sobre o primeiro episódio (ou episódio piloto).

![](https://github.com/alicialopes/RickAndMortyAPI/blob/main/assets/gifs/gif3.gif)

- Ao clicar no ícone superior de informações, irá abrir outra modal com uma instrução de como utilizar a API, seguido de um link que leva o usuário para um site com informações mais específicas sobre a série Rick and Morty.

![](https://github.com/alicialopes/RickAndMortyAPI/blob/main/assets/gifs/gif4.gif)

### Layout

Esse aplicativo foi feito para as cores serem ajustadas de acordo com a preferência do usuário. Caso seu celular esteja no modo escuro, o aplicativo estará no tema dark; caso esteja no modo claro, o aplicativo estará no modo light.

![](https://github.com/alicialopes/RickAndMortyAPI/blob/main/assets/gifs/gif5.gif)

### Limitações

Escolhi não mostrar todos os personagens existentes, já que são mais de 400, então a limitação foi ter colocado somente alguns personagens, e não todos.

### Bugs conhecidos

Existe um bug na declaração do tipo do uri da imagem na tela da modal específica do personagem, é um bug que mesmo existindo, ainda deixa mostrar a imagem normalmente.

### Próximos passos

- Incluir todos os personagens;
- Deixar o usuário escolher qual episódio será descrito na segunda tela (ao invés de deixar fixo o episódio piloto).


