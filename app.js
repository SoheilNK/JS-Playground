function adding(x,y) {
    console.log("adding: ", x + y);

    const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

    document.getElementById("demo2").innerHTML = person.fullName();
    
    return x + y;
}

adding(5, 6);

document.getElementById("demo3").innerHTML = adding(1, 6);


