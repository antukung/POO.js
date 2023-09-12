class Raton {
    #nombre = "def nombre";
    #estado= "def estado";
   
    setNombre(nombre){
        this.#nombre=nombre;
    }
    getNombre(){
        return this.#nombre;
    }
    setEstado(estado){
        this.#estado=estado;
    }
    getEstado(){
        return this.#estado;
    }
    pelear(cualquiera){
        console.log("pelea con")
    }
    
}

class Ladron {
    #nombre = "def nombre";
    #estado= "def estado";
    
    setNombre(nombre){
        this.#nombre=nombre;
    }
    getNombre(){
        return this.#nombre;
    }
    setEstado(estado){
        this.#estado=estado;
    }
    getEstado(){
        return this.#estado;
    }
    apunialar(alguien){
        console.log("apuñalando")
    }
}

const rataotui= new Raton();

const jeronimo= new Raton();

const jorgue= new Ladron();

const pablo= new Ladron();

rataotui.setNombre("rataotui");

jeronimo.setNombre("jeronimo");

jorgue.setNombre("jorgue");

pablo.setNombre("pablo");

rataotui.setEstado("perezoso");

jeronimo.setEstado("torpe");

jorgue.setEstado("gloton");

pablo.setEstado("chichudo");

console.log(rataotui.setNombre());
console.log(jeronimo.setNombre());
console.log(jorgue.setNombre());
console.log(pablo.setNombre());
console.log(rataotui.setEstado());
console.log(jeronimo.setEstado());
console.log(jorgue.setEstado());
console.log(pablo.setEstado());
console.log(rataotui);
console.log(jeronimo);
console.log(jorgue);
console.log(pablo);

