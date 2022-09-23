const jsonData = '{"team":[' + 
    '{"firstName":"Jhon ", "lastName": "Doe ", "age": 10 , "phone": "(49) 1234-1234 "},'+
    '{"firstName":"Anna ", "lastName": "Smith ", "age": 25 , "phone": "(49) 4321-4321 "},'+
    '{"firstName":"Peter ", "lastName": "Jhones ", "age": 75 , "phone": "(49) 1234-4321 "}]}';

    var jsonObj = JSON.parse(jsonData);

    console.log(jsonObj);

    /*document.getElementById("nome").innerHTML = jsonObj.team[0].firstName + jsonObj.team[0].lastName;*/
    document.getElementById("nome").innerHTML = "<h2>Nome: </h2> " + jsonObj.team[0].firstName + jsonObj.team[1].lastName;
    document.getElementById("idade").innerHTML = "<h2>Idade: </h2> " + jsonObj.team[1].age;
    document.getElementById("telefone").innerHTML = "<h2>Telefone: </h2> " + jsonObj.team[2].phone;