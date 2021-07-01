function Person(FirstName=String, Name=String, Age=Number, Country=String,City=String) {
    this.FirstName = FirstName;
    this.Name = Name;
    this.Age = Age;
    this.Country = Country;
    this.City=City;
  }
  var person = new Person("yacine","fekih said",28,"France","Paris");
  var person2 = new Person("yacine2","fekih said2",38,"Fr","Toulouse");

  function showPerson(obj){
      for(i=0;i<Object.values(obj).length;i++){
          console.log(Object.keys(obj)[i]+" : "+Object.values(obj)[i]);
      }
  }
  function addOneYear(obj){
      obj.Age ++;
  }
  /////////
  function PersonFavore(FirstName=String, Name=String, Age=Number, Country=String,City=String,favorite=Array) {
    Person.call(this, FirstName, Name, Age, Country,City);
    this.favorite=favorite;
}
var person3 = new PersonFavore("yacine","fekih said",28,"France","Paris",["pizza"]);
function printFavoriteFood(obj){
    for(i=0;i<obj.favorite.length;i++){
        console.log("Food "+i+" : "+ obj.favorite[i]);
    }
}
function addFood(obj,food){
    obj.favorite.push(food);
}
/////////
//#### Zadanie 3
/////////
//#### Zadanie 4
