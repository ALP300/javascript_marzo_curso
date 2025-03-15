class Libro {
    constructor(titulo, autor, codigo) {
        this._titulo = titulo; // Propiedades privadas con _
        this.autor = autor;
        this.codigo = codigo;
        this._disponible = true;
    }

    get titulo() {
        return this._titulo;
    }

    get disponible() {
        return this._disponible;
    }

    prestar() {
        if (this._disponible) {
            this._disponible = false;
            console.log(`El libro "${this._titulo}" ha sido prestado.`);
        } else {
            console.log(`El libro "${this._titulo}" no está disponible.`);
        }
    }

    devolver() {
        if (!this._disponible) {
            this._disponible = true;
            console.log(`El libro "${this._titulo}" ha sido devuelto.`);
        } else {
            console.log(`El libro "${this._titulo}" ya está en la biblioteca.`);
        }
    }

    mostrarInfo() {
        return `Título: ${this._titulo}, Autor: ${this.autor}, Código: ${this.codigo}, Disponible: ${this._disponible}`;
    }
}

class Usuario {
    constructor(nombre, idUsuario) {
        this.nombre = nombre;
        this.idUsuario = idUsuario;
        this.librosPrestados = [];
    }

    tomarPrestado(libro) {
        if (libro.disponible) {
            libro.prestar();
            this.librosPrestados.push(libro);
            console.log(`${this.nombre} ha tomado prestado "${libro.titulo}".`);
        } else {
            console.log(`${this.nombre} no puede tomar el libro "${libro.titulo}", porque no está disponible.`);
        }
    }

    devolverLibro(libro) {
        const index = this.librosPrestados.indexOf(libro);
        if (index !== -1) {
            libro.devolver();
            this.librosPrestados.splice(index, 1);
            console.log(`${this.nombre} ha devuelto "${libro.titulo}".`);
        } else {
            console.log(`${this.nombre} no tiene prestado el libro "${libro.titulo}".`);
        }
    }
}

// Crear un libro
const libro1 = new Libro("El Quijote", "Cervantes", "12345");
console.log(libro1.mostrarInfo());

// Crear un usuario
const usuario1 = new Usuario("Leonardo", "U001");

// Usuario toma prestado un libro
usuario1.tomarPrestado(libro1);

// Intentar tomarlo nuevamente (debería decir que no está disponible)
usuario1.tomarPrestado(libro1);

// Devolver el libro
usuario1.devolverLibro(libro1);

// Mostrar estado final del libro
console.log(libro1.mostrarInfo());
