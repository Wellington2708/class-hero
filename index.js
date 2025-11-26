class Hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

        attack(){
        if(this.type === "Mago"){
            console.log(`O ${this.type} atacou usando magia!`);
        }else if(this.type === "Guerreiro"){
            console.log(`O ${this.type} atacou usando Espada!`);
        } else if(this.type === "Monge"){
            console.log(`O ${this.type} atacou usando Artes Marciais!`);
        } else if(this.type === "Ninja"){
            console.log(`O ${this.type} atacou usando Shuriken!`);
        } else {
            console.log(`Esse ${this.type} nem herói é!`);
        }

        }
     }


    const hero1 = new Hero("Doutor Estranho" , "45000" , "Mago");
    console.log(hero1);
    const hero2 = new Hero("Thor" , "+100000000" , "Guerreiro");
    console.log(hero2);
    const hero3 = new Hero("Dhalsim" , "98" , "Monge");
    console.log(hero3);
    const hero4 = new Hero("Donatello" , "+100" , "Ninja");
    console.log(hero4);
    const hero5 = new Hero("Mocorongo" , "18" , "Zé Ruela");
    console.log(hero5);

    hero1.attack();
    hero2.attack();
    hero3.attack();
    hero4.attack();
    hero5.attack();