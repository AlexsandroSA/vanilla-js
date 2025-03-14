---
isDraft: false
title: "Algoritmos e estruturas de dados: Fila"
description: "Fila uma estrutura de dados do tipo LIFO (last-in first-out), onde o último elemento a ser inserido, será o primeiro a ser retirado"
tags: ["Javascript", "Algoritmos", "Estruturas de Dados"]
pubDate: 2025-03-09
image:
  src: "/assets/posts/algoritmos-e-estrutura-de-dados-fila.webp"
  alt: "Uma pilha de pratos fazendo referência a estrutura de dados do tipo FIFO (First-In-First-Out)"
---

São estruturas de dados do tipo FIFO (first-in first-out), onde o primeiro elemento a ser inserido, será o primeiro a ser retirado, ou seja, adiciona-se itens no fim e remove-se do início.

### Operações básicas

- **enqueue(elemento):** Adiciona um elemento ao final da fila.
- **dequeue():** Remove e retorna o elemento do início da fila.
- **peek():** Retorna o elemento do início da fila sem removê-lo.
- **isEmpty():** Verifica se a fila está vazia.
- **size():** Retorna o número de elementos na fila.

### Implementando fila em JavaScript

Existem diversas maneiras de implementar uma fila em JavaScript. Uma das formas mais comuns é utilizar um array para armazenar os elementos e aproveitar os métodos `push()` e `shift()` do array.

```js
class Fila {
  constructor() {
    this.itens = [];
  }

  enqueue(elemento) {
    this.itens.push(elemento);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Fila vazia";
    }
    return this.itens.shift();
  }

  peek() {
    return this.itens[0];
  }

  isEmpty() {
    return this.itens.length === 0;
  }

  size() {
    return this.itens.length;
  }
}
```

#### Um exemplo prático

Usando fila para simular uma "fila de atendimento"

```js
const filaAtendimento = new Fila();

filaAtendimento.enqueue("Cliente 1");
filaAtendimento.enqueue("Cliente 2");
filaAtendimento.enqueue("Cliente 3");

console.log(filaAtendimento.dequeue()); // Cliente 1
console.log(filaAtendimento.peek()); // Cliente 2
console.log(filaAtendimento.size()); // 2
```

### Conclusão

Use uma fila quando a ordem de processamento exigir que o primeiro elemento adicionado seja o primeiro a ser acessado.

Por último, e não menos importante deixo aqui um vídeo do canal [Programação Dinâmica](https://www.youtube.com/@pgdinamica) no youtube sobre Filas | Estruturas de Dados

<div class="aspect-2/1"> 
<iframe width="100%" height="400px" src="https://www.youtube.com/embed/tiee9D54tE0?si=Efd2t8KG-L8dm8x_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
