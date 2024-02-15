// Classe Livro que representa um livro.

export class Livro {
  // Classe Livro, recebe um código, código da editora, título, resumo e autores.
  constructor(
    public codigo: number,
    public codEditora: number,
    public titulo: string,
    public resumo: string,
    public autores: string[]
  ) {}
}
