---
isDraft: false
title: "Algoritmos e estruturas de dados: Pilha"
description: ""
tags: ["Javascript", "Algoritmos", "Estruturas de Dados"]
pubDate: 2025-03-10
image:
  src: "/assets/posts/algoritmos-e-estrutura-de-dados-pilha.webp"
  alt: "Uma fila de pessoas fazendo referência a estruturas de dados do tipo LIFO (last-in first-out)"
---

São estruturas de dados do tipo LIFO (last-in first-out), onde o último elemento a ser inserido, será o primeiro a ser retirado. Assim, uma pilha permite acesso a apenas um item de dados - o último inserido. Para processar o penúltimo item inserido, deve-se remover o último.

### Operações básicas de uma pilha

- **push(elemento):** Adiciona um elemento ao topo da pilha.
- **pop():** Remove e retorna o elemento do topo da pilha.
- **peek():** Retorna o elemento do topo da pilha sem removê-lo.
- **isEmpty():** Verifica se a pilha está vazia.
- **size():** Retorna o número1 de elementos na pilha.

### Implementando pilha em JavaScript

Existem diversas maneiras de implementar uma pilha em JavaScript. Uma das formas mais comuns é utilizar um array para armazenar os elementos e aproveitar os métodos push() e pop() do array.

```js
class Pilha {
  constructor() {
    this.itens = [];
  }

  push(elemento) {
    this.itens.push(elemento);
  }

  pop() {
    if (this.isEmpty()) {
      return "Pilha vazia";
    }
    return this.itens.pop();
  }

  peek() {
    return this.itens[this.itens.length - 1];
  }

  isEmpty() {
    return this.itens.length === 0;
  }

  size() {
    return this.itens.length;
  }
}
```

### Um exemplo prático

Usando pilha para converter um número decimal para binário

```js
function decimalParaBinario(numero) {
  const pilha = new Pilha();

  while (numero > 0) {
    pilha.push(numero % 2);
    numero = Math.floor(numero / 2);
  }

  let binario = "";
  while (!pilha.isEmpty()) {
    binario += pilha.pop();
  }

  return binario;
}

console.log(decimalParaBinario(10)); // 1010
console.log(decimalParaBinario(7)); // 111
```

### Conclusão

Use uma pilha quando a ordem de processamento exigir que o último elemento adicionado seja o primeiro a ser acessado.

Por último, e não menos importante deixo aqui um vídeo do canal [Programação Dinâmica](https://www.youtube.com/@pgdinamica) no youtube sobre Pilha | Estruturas de Dados

<div class="aspect-2/1"> 
<iframe width="100%" height="400px" src="https://www.youtube.com/embed/YETRHzwrrvo?si=74cabwTzFv1Ljskb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
