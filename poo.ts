class Usuarios {
  nome: string;
  age: number;

  constructor(nome: string, age: number) {
    this.nome = nome;
    this.age = age;
  }

  showName() {
    console.log(this.nome);
  }
}

const usuario1 = new Usuarios("Wagner", 28);
const usuario2 = new Usuarios("Pedro", 12);
usuario1.showName();
usuario2.showName();
