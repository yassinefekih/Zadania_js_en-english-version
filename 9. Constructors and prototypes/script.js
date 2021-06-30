function Person(name, surname, age, country,city,language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city=city;
    this.language=language;
  }
  function changePerson(person,newAge,newCity){
    person.age=newAge;
    person.city=newCity;
  } 
  const p1= new Person("jhon","ONE",25,"France","PARIS","FR");
  const p2= new Person("jhin","Two",28,"France2","PS2","DE");
  const p3= new Person("yacine","three",35,"France3","PRIS57","EN");
  const p4= new Person("yassine","Four",27,"France4","PARIS88","FR");
  const p5= new Person("fekih","ONFiveE",60,"France5","PARIS11","EN");

  changePerson(p2,22,"toulouse");
  //some 
  class Persona{
    constructor(name, surname,age,country,city,language){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.country = country;
        this.city=city;
        this.language=language;
    }}
    var p1 = new Persona("jhon","ONE",25,"France","PARIS","FR");
    console.log(p1.name);
////////

/////////
function num(number) {
    this.number = number;
}
var nbr1= new num(0);
function randomEverysecond(num){    
    num.number=Math.floor(Math.random() * 10);
    return console.log(num.number);
}
function stop(nbr1,timer){

    if(nbr1.number>5){
        clearInterval(timer);
        return console.log("End")
    }else {
        return console.log("still working on : "+nbr1.number);
    }
    
}
var timer= setInterval(() => {randomEverysecond(nbr1);stop(nbr1,timer)}, 1000);

 
