/* 
    ---------------------------------------- BIBLIOTECA MATH ------------------------------------------------

    // Math = objeto embutido (built-in) do JavaScript
    // Ele fornece uma coleção de propriedades e métodos matemáticos
    // Ou seja: tudo que envolve conta, arredondamento, trigonometria, etc.

    let x = 3;               -> declara a variável x com valor 3
    let y = 2;               -> declara a variável y com valor 2
    let z = 1;               -> declara a variável z com valor 1

    // z = Math.round(x);     -> arredonda x para o inteiro mais próximo
                            // 3.4 -> 3 | 3.5 -> 4

    // z = Math.floor(x);     -> arredonda x PARA BAIXO
                            // 3.9 -> 3

    // z = Math.ceil(x);      -> arredonda x PARA CIMA
                            // 3.1 -> 4

    // z = Math.trunc(x);     -> remove a parte decimal sem arredondar
                            // 3.9 -> 3 | -3.9 -> -3

    // z = Math.pow(x, y);    -> x elevado à potência y
                            // 3^2 = 9

    // z = Math.sqrt(x);      -> raiz quadrada de x
                            // sqrt(9) = 3

    // z = Math.log(x);       -> logaritmo natural (base e)
                            // usado mais em matemática avançada

    // z = Math.sin(x);       -> seno de x (em radianos)
    // z = Math.cos(x);       -> cosseno de x (em radianos)
    // z = Math.tan(x);       -> tangente de x (em radianos)
                            // muito usado em jogos e física

    // z = Math.abs(x);       -> valor absoluto (remove sinal negativo)
                            // -10 -> 10

    // z = Math.sign(x);      -> retorna o sinal do número
                            // -1 se negativo | 0 se zero | 1 se positivo

    let max = Math.max(x, y, z); -> retorna o MAIOR valor entre x, y e z
                                // aqui retorna 3

    let min = Math.min(x, y, z); -> retorna o MENOR valor entre x, y e z
                                // aqui retorna 1

    console.log(min);        -> imprime o menor valor no console



    // ========================================
    // FUNÇÕES IMPORTANTES QUE TU PRECISA SABER
    // ========================================

    // Math.random()          -> gera um número aleatório entre 0 e 1
    // Math.random() * 10     -> número aleatório entre 0 e 10

    // Math.round(Math.random() * 10)
                            -> número aleatório inteiro de 0 a 10

    // Math.PI                -> valor de π (3.141592...)

    // Math.E                 -> constante de Euler (≈ 2.718)

    // Number("10")           -> converte string para número
    // String(10)             -> converte número para string
    // Boolean(1)             -> converte para boolean (true ou false)

    // parseInt("10.5")       -> converte para inteiro (10)
    // parseFloat("10.5")     -> converte para decimal (10.5)

    // x + y                  -> soma
    // x - y                  -> subtração
    // x * y                  -> multiplicação
    // x / y                  -> divisão
    // x % y                  -> resto da divisão (módulo)

    // x ** y                 -> potência (3 ** 2 = 9)

    // isNaN(x)               -> verifica se NÃO é um número
    // Number.isInteger(x)    -> verifica se é inteiro


    console.log("Hello Word") -> Write in console
    window.alert("this is an alert!") -> Take a alert on the page

    document.getElementById("myH1").textContent = "Hello";
    document.getElementById("myp").textContent = "I like Hamburguers";
    
    -------------------------------------- USER INPUT ----------------------------------------------

    1. EASY WAY = window.prompt()

    let username

    username = window.prompt("What's your username?")

    console.log(username)

    2. PROFESSIONAL WAY = HTML textbox

    document.getElementById("mySubmit").onclick = function(){
        username = document.getElementById("myText").value;
        document.getElementById("myH1").textContent = `Hello ${username}`
    }

    type conversion = change the datatype of a value to another
                    ( strings, numbers, booleans )

    let age = window.prompt("How old are you?");
    age = Number(age);
    age += 1;
    console.log(age, typeof age);

    const values = ["pizza", "0", ""]

    for (const [i, value] of values.entries() )
    {
        x = Number(value);
        y = String(value);
        z = Boolean(value);

        console.log(`Teste ${i + 1}:`)
        console.log(x, typeof x)
        console.log(y, typeof y)
        console.log(z, typeof z)
    }

    const = a variable that can't be changed
    Always put const variables in uppercase, don't do this only when this variable is not of the primary type

    const PI = 3.14159;
    let radius;
    let circumference;

    radius = window.prompt('Enter the radius of a circle');
    radius = Number(radius);

    circumference = 2 * PI * radius;

    console.log(circumference)

    ------------------------------------ TERNARY OPERATOR -----------------------------------------

    ternary operator = a shortcut to if{} and else{} statements
    helps to assign a variable based on a condition
    condition ? codeIfTrue : codeIfFalse;

    let age = 11;
    message = age < 18 ? "You are a minor" : "You are an Adult";
    console.log(message);

    let time = 9;
    message = time < 12 ?  "Good Morning!" : "Good Afternoon!";
    console.log(message)

    let purchaseAmount = 80;
    let discount = purchaseAmount >= 100 ? 10: 0;
    console.log(`Your Total is $${purchaseAmount - purchaseAmount * (discount / 100)}`) 

    ----------------------------------------- SWITCHS -----------------------------------------------
    SWITCH - can be an efficient replacement to many else if statements

    day = 6;

    Put "break", because this stop the console.log
    switch(day){
        case 1:
            console.log("It's Monday");
            break;
        case 2:
            console.log("It is Tuesday");
            break;
        case 3:
            console.log("It's Wednesday");
            break;
        case 4:
            console.log("It is Thursday");
            break;
        case 5:
            console.log("It's Friday");
            break;
        case 6:
            console.log("It is Saturday");
            break;
        case 7:
            console.log("It is Sunday");
            break;
        default:
            console.log(`${day} is not a day!`);
    }


    let testScore = 80;
    let letterGrade;

    switch(true){
        case testScore >= 90:
            letterGrade = "A";
            break;
        case testScore >= 80:
            letterGrade = "B";
            break;
        case testScore >= 70:
            letterGrade = "C";
            break;
        case testScore >= 60:
            letterGrade = "D";
            break;
        default:
            letterGrade = "F";
    }

    console.log(letterGrade);

    ------------------------------------- STRING MANIPULATION ------------------------------------

    1) length
    - Returns the length of the string
    Ex: str.length

    2) toUpperCase()
    - Converts everything to UPPERCASE
    Ex: str.toUpperCase()

    3) toLowerCase()
    - Converts everything to lowercase
    Ex: str.toLowerCase()

    4) trim()
    - Removes spaces from the beginning and end
    Ex: str.trim()

    5) trimStart() / trimEnd()
    - Removes spaces only from the start or only from the end
    Ex: str.trimStart(), str.trimEnd()

    6) charAt(index)
    - Returns the character at the given position
    Ex: str.charAt(0)

    7) charCodeAt(index)
    - Returns the Unicode code of the character
    Ex: str.charCodeAt(0)

    8) at(index)
    - Similar to charAt, but accepts negative indexes
    Ex: str.at(-1)

    9) includes(value)
    - Checks if the string contains a value
    Ex: str.includes("abc")

    10) startsWith(value)
    - Checks if it starts with something
    Ex: str.startsWith("Hello")

    11) endsWith(value)
    - Checks if it ends with something
    Ex: str.endsWith("!")

    12) indexOf(value)
    - Returns the first position of the value
    Ex: str.indexOf("a")

    13) lastIndexOf(value)
    - Returns the last position of the value
    Ex: str.lastIndexOf("a")

    14) slice(start, end)
    - Extracts part of the string
    Ex: str.slice(0, 5) 
    Ex: str.slice(-1)

    15) substring(start, end)
    - Similar to slice, but does not accept negative indexes
    Ex: str.substring(0, 5)

    16) substr(start, length)
    - Extracts using length (OBSOLETE, avoid it)
    Ex: str.substr(0, 3)

    17) replace(oldValue, newValue)
    - Replaces the first occurrence
    Ex: str.replace("a", "b")

    18) replaceAll(oldValue, newValue)
    - Replaces all occurrences
    Ex: str.replaceAll("a", "b")

    19) split(separator)
    - Splits the string into an array
    Ex: str.split(",")

    20) concat()
    - Concatenates strings
    Ex: str.concat(" world")

    21) repeat(amount)
    - Repeats the string
    Ex: str.repeat(3)

    22) padStart(length, value)
    - Pads the beginning of the string
    Ex: str.padStart(5, "0")

    23) padEnd(length, value)
    - Pads the end of the string
    Ex: str.padEnd(5, "0")

    24) match(regex)
    - Finds patterns using regex
    Ex: str.match(/[a-z]/g)

    25) matchAll(regex)
    - Returns all matches (iterator)
    Ex: str.matchAll(/[a-z]/g)

    26) search(regex)
    - Returns the index where the regex is found
    Ex: str.search(/[0-9]/)

    27) localeCompare(otherString)
    - Compares strings considering locale/language
    Ex: str.localeCompare("abc")

    28) normalize()
    - Normalizes Unicode characters
    Ex: str.normalize()

    29) toString()
    - Converts to string (almost useless here)
    Ex: value.toString()

    30) valueOf()
    - Returns the primitive value of the string
    Ex: str.valueOf()

    ==============================
    TEMPLATE STRINGS
    ==============================
    - Use backticks ``
    - Allow interpolation
    Ex: `Hello ${name}`

    Method Chaining - Calling one method after another
    in one continuous line of code.

    let username = window.prompt("Enter your username: ");

    ----- NO METHOD CHAINING -----

    username = username.trim();
    let letter = username.charAt(0);
    letter = letter.toUpperCase();

    let extraChars = username.slice(1);
    extraChars = extraChars.toLowerCase();
    username = letter + extraChars;

    console.log(username);

    ----- METHOD CHAINING -----

    username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
    console.log(username);

    ------------------------------------- LOGICAL OPERATOR ---------------------------------------

    logical operators = used to combine or manipulate boolean values
                        (true or false)
    
    AND = &&
    OR  = ||
    NOT = !

    ------------------------------------- STRICT EQUALITY ---------------------------------------

    = assignment operator
    == comparison operator (compare if values are equal)
    === strict equality operator (compare if values & datatype are equal)
    != inequality operator (compare if values not are equal)
    !== strict inequality operator (compare if values & datatype not are equal)

    ------------------------------------- WHILE LOOP ---------------------------------------

    while loop = repeat some code WHILE some condition is true

    let username = "";

    while (username === "" || username === null) {
        username = window.prompt(`Enter your name`);
    }

    console.log(`Hello ${username}`);

    do while loop = repeat some code WHILE some condition is true, but starts first and after take the verification

    let username = "";

    let username = "";

    do{
        username = window.prompt(`Enter your name`);
    }while(username === "" || username === null) 

    console.log(`Hello ${username}`);

    let loggedIn = true;
    let username;
    let password;

    while (!loggedIn) {
        username = window.prompt(`Enter your username`);
        password = window.prompt(`Enter your password`);

        if (username === "myUsername" && password === "myPassword") {
            loggedIn = true;
            console.log("You are logged in!");
        }
        else {
            console.log("Invalid credentials! Please try again");
        }
    }
    ------------------------------------- FOR LOOP ---------------------------------------

    for loop = repeat some code a LIMITED amount of times

    for (let i = 1; i <= 20; i++) {

        if (i == 13) {
            break;
        }
        else {
            console.log(i);
        }

    }
    
    ------------------------------------- FUNCTIONS ---------------------------------------

    function isValidEmail(email){
        return email.includes("@") ? true : false;
    }

    console.log(isValidEmail("Bro@fake.com"));
    console.log(isValidEmail("ElonMusk.com"));
    console.log(isValidEmail("Zuckerborg@Meta.com"));

    ------------------------------------- ARRAYS ---------------------------------------

    array = a variable like structure that can hold
    more than 1 value

    let fruits = ["apple", "orange", "banana", "coconut"];

    fruits.push("coconut"); 
    → push(): adiciona um novo elemento no FINAL do array

    fruits.pop(); 
    → pop(): remove o ÚLTIMO elemento do array

    fruits.unshift("mango"); 
    → unshift(): adiciona um novo elemento no INÍCIO do array

    fruits.shift(); 
    → shift(): remove o PRIMEIRO elemento do array

    let numOfFruits = fruits.length;
    → length: retorna a quantidade total de elementos dentro do array

    let index = fruits.indexOf("mango");
    → indexOf(): retorna o índice (posição) do elemento no array; se não existir, retorna -1

    console.log(index);
    → console.log(): imprime/exibe o valor no console

    -> sort(): ordena os elementos do Array
    -> reverse(): reverte os elementos do Array
    fruits.sort().reverse();

    for (let fruit of fruits) {
        console.log(fruit);
    }

    ------------------------------------- SPREAD OPERATOR ---------------------------------------

    spread operator = ... allows an iterable such as an
    array or string to be expanded
    into seperate elements
    (unpacks the elements)

    ❌ let maxValue = max(numbers) -> max([1,2,3,4,5])
    ✅ let maxValue = max(...numbers) -> max(1,2,3,4,5)

    let fruits = ["apple", "orange", "banana"];
    let vegetables = ["carrots", "celery", "potatoes"];

    let foods = [...fruits, ...vegetables, "eggs", "milk"];

    console.log(foods);

    ------------------------------------- REST PARAMETERS ---------------------------------------

    rest parameters = (...rest) allow a function work with a variable
    number of arguments by bundling them into an array

    spread = expands an array into seperate elements
    rest = bundles seperate elements into an array

    function combineStrings(...strings) {
        return strings.join(" ");
    }

    const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

    console.log(fullName);

    function sum(...numbers){

        let result = 0;
        for(let number of numbers){
            result += number;
        }
        return result;
    }

    function getAverage(...numbers){

        let result = 0;
        for(let number of numbers){
            result += number;
        }
        return result / numbers.length;
    }

    const total = getAverage(75, 100, 85, 90, 50);

    console.log(total);

    ------------------------------------- CALLBACK ---------------------------------------

    callback = a function that is passed as an argument
            to another function.

            used to handle asynchronous operations:
            1. Reading a file
            2. Network requests
            3. Interacting with databases

            "Hey, when you're done, call this next."

    sum(displayPage, 1, 2);

    function sum(callback, x, y){
        let result = x + y;
        callback(result);
    }

    function displayConsole(result){
        console.log(result);
    }

    function displayPage(result){
        document.getElementById("myH1").textContent = result;
    }

    ------------------------------------- FOREACH() ---------------------------------------

    forEach() = method used to iterate over the elements
                of an array and apply a specified function (callback)
                to each element

                array.forEach(callback)
                element, index, array are provided

    let fruits = ["apple", "orange", "banana", "coconut"];

    fruits.forEach(capitalize);
    fruits.forEach(display);

    function upperCase(element, index, array){
        array[index] = element.toUpperCase();
    }

    function lowerCase(element, index, array){
        array[index] = element.toLowerCase();
    }

    function capitalize(element, index, array){
        array[index] = element.charAt(0).toUpperCase() + element.slice(1);
    }

    function display(element){
        console.log(element);
    }
    
    ------------------------------------- MAP() ---------------------------------------
    
    .map() = accepts a callback and applies that function
         to each element of an array, then return a new array

    const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
    const formattedDates = dates.map(formatDates);

    console.log(formattedDates);

    function formatDates(element){
        const parts = element.split("-");
        return `${parts[1]}/${parts[2]}/${parts[0]}`;
    }

    ------------------------------------- FILTER() ---------------------------------------

    // .filter() = creates a new array by filtering out elements

    let numbers = [1, 2, 3, 4, 5, 6, 7];
    let evenNums = numbers.filter(isEven);
    let oddNums = numbers.filter(isOdd);
    console.log(oddNums);

    function isEven(element) {
        return element % 2 === 0;
    }
    
    function isOdd(element) {
        return element % 2 !== 0;
    }

    const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
    const shortWords = words.filter(getShortWords);
    const longWords = words.filter(getLongWords);
    console.log(longWords);

    function getShortWords(element) {
        return element.length <= 6;
    }
    
    function getLongWords(element) {
        return element.length > 6;
    }

    ------------------------------------- REDUCE() ---------------------------------------

    // .reduce() = reduce the elements of an array to a single value
    {
        const prices = [5, 30, 10, 25, 15, 20];
        const total = prices.reduce(sum);
        console.log(`$${total.toFixed(2)}`);

        function sum(accumulator, element) {
            return accumulator + element;
        }
    }

    {
        const grades = [75, 50, 90, 80, 65, 95];
        const maximum = grades.reduce(getMax);
        const minimum = grades.reduce(getMin);
        console.log(maximum);
        console.log(minimum);

        function getMax(accumulator, element) {
            return Math.max(accumulator, element);
        }

        function getMin(accumulator, element) {
            return Math.min(accumulator, element);
        }
    }

    ------------------------------------- FUNCTIONS EXPRESSIONS ---------------------------------------

    // function declaration = define a reusable block of code that performs a specific task
    {
        function hello() {
            console.log("Hello");
        }
        
        // function expressions = a way to define functions as values or variables
        const hello2 = function() {
            console.log("Hello");
        };
        
        hello();
        hello2();
    }

    {
        function hello() {
            console.log("Hello");
        }
        
        setTimeout(hello, 3000);
    }

    // ===== SETTIMEOUT COM FUNÇÃO ANÔNIMA =====
    {
        setTimeout(function() {
            console.log("Hello");
        }, 3000);
    }

    // ===== MAP COM FUNÇÃO NOMEADA =====
    {
        const numbers = [1, 2, 3, 4, 5, 6];
        const squares = numbers.map(square);
        console.log(squares);

        function square(element) {
            return Math.pow(element, 2);
        }
    }

    // ===== FUNCTION EXPRESSIONS COM MAP, FILTER E REDUCE =====
    {
        const numbers = [1, 2, 3, 4, 5, 6];
        
        const cubes = numbers.map(function(element) {
            return Math.pow(element, 3);
        });

        const evenNums = numbers.filter(function(element) {
            return element % 2 === 0;
        });

        const oddNums = numbers.filter(function(element) {
            return element % 2 !== 0;
        });

        const total = numbers.reduce(function(accumulator, element) {
            return accumulator + element;
        });

        console.log(total);
    }

    ------------------------------------- ARROW FUNCTIONS ---------------------------------------

    // arrow functions = a concise way to write function expressions
    // good for simple functions that you use only once
    // (parameters) => some code
    {
        const numbers = [1, 2, 3, 4, 5, 6];
        const squares = numbers.map((element) => Math.pow(element, 2));
        console.log(squares);
    }

    ------------------------------------- JAVASCRIPT OBJECTS ---------------------------------------

    // object = A collection of related properties and/or methods
    // Can represent real world objects (people, products, places)
    // object = {key:value, function()}
    {
        const person1 = {
            firstName: "Spongebob",
            lastName: "Squarepants",
            age: 30,
            isEmployed: true,
            sayHello: function() { console.log("Hi! I am Spongebob!"); },
            sayBye: function() { console.log("Goodbye!"); }
        };

        const person2 = {
            firstName: "Patrick",
            lastName: "Star",
            age: 42,
            isEmployed: false,
            sayHello: () => console.log("Hey I'm Patrick..."),
            sayBye: function() { console.log("Bye..."); }
        };

        console.log(person1.firstName);
        console.log(person1.lastName);
        console.log(person1.age);
        console.log(person1.isEmployed);
        person1.sayHello();
        person1.sayBye();

        console.log(person2.firstName);
        console.log(person2.lastName);
        console.log(person2.age);
        console.log(person2.isEmployed);
        person2.sayHello();
        person2.sayBye();
    }

    ------------------------------------- THIS ---------------------------------------

    // this = reference to the object where THIS is used
    // (the object depends on the immediate context)
    // person.name = this.name
    {
        const person = {
            name: "Spongebob",
            favFood: "hamburgers",
            sayHello: function() { console.log(`Hi! I am ${this.name}`); },
            eat: function() { console.log(`${this.name} is eating ${this.favFood}`); }
        };

        const person2 = {
            name: "Patrick",
            favFood: "pizza",
            sayHello: function() { console.log(`Hi! I am ${this.name}`); },
            eat: function() { console.log(`${this.name} is eating ${this.favFood}`); }
        };

        person.eat();
        person2.eat();
    }

    ------------------------------------- CONSTRUCTOR ---------------------------------------

    // constructor function = special method for defining the properties and methods of objects
    {
        function Car(make, model, year, color) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.color = color;
            this.drive = function() { console.log(`You drive the ${this.model}`); };
        }

        const car1 = new Car("Ford", "Mustang", 2024, "red");
        const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
        const car3 = new Car("Dodge", "Charger", 2026, "silver");

        car1.drive();
        car2.drive();
        car3.drive();
    }

    ------------------------------------- CLASSES ---------------------------------------

    // class = (ES6 feature) provides a more structured and cleaner way to
    // work with objects compared to traditional constructor functions
    // ex. static keyword, encapsulation, inheritance
    {
        class Product {
            constructor(name, price) {
                this.name = name;
                this.price = price;
            }
            
            displayProduct() {
                console.log(`Product: ${this.name}`);
                console.log(`Price: $${this.price.toFixed(2)}`);
            }
            
            calculateTotal(salesTax) {
                return this.price + (this.price * salesTax);
            }
        }

        const salesTax = 0.05;
        const product1 = new Product("Shirt", 19.99);
        const product2 = new Product("Pants", 22.58);
        const product3 = new Product("Underwear", 100.00);
        
        product3.displayProduct();
        const total = product3.calculateTotal(salesTax);
        console.log(`Total price (with tax): $${total.toFixed(2)}`);
    }

    ------------------------------------- STATIC() ---------------------------------------

    // static = keyword that defines properties or methods that belong
    // to a class itself rather than the objects created
    // from that class (class owns anything static, not the objects)
    {
        class User {
            static userCount = 0;
            
            constructor(username) {
                this.username = username;
                User.userCount++;
            }
            
            static getUserCount() {
                console.log(`There are ${User.userCount} users online`);
            }
            
            sayHello() {
                console.log(`Hello, my username is ${this.username}`);
            }
        }

        const user1 = new User("Spongebob");
        const user2 = new User("Patrick");
        const user3 = new User("Sandy");
        
        user1.sayHello();
        User.getUserCount();
    }

    ------------------------------------- INHERITANCE(HERANÇA) ---------------------------------------

    // inheritance = allows a new class to inherit properties and methods
    // from an existing class (parent -> child)
    // helps with code reusability

    class Animal {
        alive = true;

        eat() {
            console.log(`This ${this.name} is eating`);
        }

        sleep() {
            console.log(`This ${this.name} is sleeping`);
        }
    }

    class Rabbit extends Animal {
        name = "rabbit";

        run() {
            console.log(`This ${this.name} is running`);
        }
    }

    class Fish extends Animal {
        name = "fish";

        swim() {
            console.log(`This ${this.name} is swimming`);
        }
    }

    class Hawk extends Animal {
        name = "hawk";

        fly() {
            console.log(`This ${this.name} is flying`);
        }
    }

    const rabbit = new Rabbit();
    const fish = new Fish();
    const hawk = new Hawk();

    console.log(rabbit.alive);
    rabbit.eat();
    rabbit.sleep();
    rabbit.run();

    ------------------------------------- SUPER KEYWORD ---------------------------------------

    // super - keyword is used in classes to call the constructor or
    // access the properties and methods of a parent (superclass)
    // this = this object
    // super = the parent

    {
        class Animal {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            
            move(speed) {
                console.log(`The ${this.name} moves at a speed of ${speed}mph`);
            }
        }

        class Rabbit extends Animal {
            constructor(name, age, runSpeed) {
                super(name, age);
                this.runSpeed = runSpeed;
            }
            
            run() {
                console.log(`This ${this.name} can run`);
                super.move(this.runSpeed);
            }
        }

        class Fish extends Animal {
            constructor(name, age, swimSpeed) {
                super(name, age);
                this.swimSpeed = swimSpeed;
            }
            
            swim() {
                console.log(`This ${this.name} can swim`);
                super.move(this.swimSpeed);
            }
        }

        class Hawk extends Animal {
            constructor(name, age, flySpeed) {
                super(name, age);
                this.flySpeed = flySpeed;
            }
            
            fly() {
                console.log(`This ${this.name} can fly`);
                super.move(this.flySpeed);
            }
        }

        const rabbit = new Rabbit("rabbit", 1, 25);
        const fish = new Fish("fish", 2, 12);
        const hawk = new Hawk("hawk", 3, 50);
        
        rabbit.run();
        fish.swim();
        hawk.fly();
    }

    /------------------------------------- GETTERS E SETTERS ---------------------------------------

    // getter = special method that makes a property readable
    // setter = special method that makes a property writeable
    // validate and modify a value when reading/writing a property

    {
        class Person {
            constructor(firstName, lastName, age) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
            }
            
            set firstName(newFirstName) {
                if (typeof newFirstName === "string" && newFirstName.length > 0) {
                    this._firstName = newFirstName;
                } else {
                    console.error("First name must be a non-empty string");
                }
            }
            
            set lastName(newLastName) {
                if (typeof newLastName === "string" && newLastName.length > 0) {
                    this._lastName = newLastName;
                } else {
                    console.error("Last name must be a non-empty string");
                }
            }
            
            set age(newAge) {
                if (typeof newAge === "number" && newAge >= 0) {
                    this._age = newAge;
                } else {
                    console.error("Age must be a non-negative number");
                }
            }
            
            get firstName() {
                return this._firstName;
            }
            
            get lastName() {
                return this._lastName;
            }
            
            get age() {
                return this._age;
            }
            
            get fullName() {
                return this._firstName + " " + this._lastName;
            }
        }

        const person = new Person("Spongebob", "Squarepants", 30);
        console.log(person.firstName);
        console.log(person.lastName);
        console.log(person.fullName);
        console.log(person.age);
    }

    ------------------------------------- DESTRUCTURING ---------------------------------------
    // destructuring = extract values from arrays and objects,
    // then assign them to variables in a convenient way
    // [] = to perform array destructuring
    // {} = to perform object destructuring

    // ----- EXEMPLO 1: TROCAR VALORES DE VARIÁVEIS -----
    {
        let a = 1;
        let b = 2;
        [a, b] = [b, a];
        console.log(a);
        console.log(b);
    }

    // ----- EXEMPLO 2: TROCAR 2 ELEMENTOS EM UM ARRAY -----
    {
        const colors = ["red", "green", "blue", "black", "white"];
        [colors[0], colors[4]] = [colors[4], colors[0]];
        console.log(colors);
    }

    // ----- EXEMPLO 3: ATRIBUIR ELEMENTOS DO ARRAY A VARIÁVEIS -----
    {
        const colors = ["red", "green", "blue", "black", "white"];
        const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
        console.log(firstColor);
        console.log(secondColor);
        console.log(thirdColor);
        console.log(extraColors);
    }

    // ----- EXEMPLO 4: EXTRAIR VALORES DE OBJETOS -----
    {
        const person1 = {
            firstName: "Spongebob",
            lastName: "SquarePants",
            age: 30,
            job: "Fry Cook"
        };

        const person2 = {
            firstName: "Patrick",
            lastName: "Star",
            age: 34
        };

        const {firstName, lastName, age, job = "Unemployed"} = person2;
        console.log(firstName);
        console.log(lastName);
        console.log(age);
        console.log(job);
    }
    
    // ----------- EXAMPLE 5 -----------
    // DESTRUCTURE IN FUNCTION PARAMETERS

    function displayPerson({firstName, lastName, age, job="Unemployed"}) {
        console.log(` name: ${firstName} ${lastName}`);
        console.log(` age: ${age}`);
        console.log(` job: ${job}`);
    }

    const person1 = {
        firstName: "Spongebob",
        lastName: "SquarePants",
        age: 30,
        job: "Fry Cook",
    }

    const person2 = {
        firstName: "Patrick",
        lastName: "Star",
        age: 34,
    }

    displayPerson(person1)

    ------------------------------------- NESTED OBJECTS ( OBJETOS ANINHADOS ) ---------------------------------------

    {
        const person = {
            fullName: "Spongebob Squarepants",
            age: 30,
            isStudent: true,
            hobbies: ["karate", "jellyfishing", "cooking"],
            address: {
                street: "124 Conch st.",
                city: "Bikini Bottom",
                country: "Int. Water"
            }
        };

        console.log(person.fullName);
        console.log(person.age);
        console.log(person.isStudent);
        console.log(person.hobbies[2]);
        console.log(person.address.country);

        for (const property in person.address) {
            console.log(person.address[property]);
        }
    }

    {
        class Address {
            constructor(street, city, country) {
                this.street = street;
                this.city = city;
                this.country = country;
            }
        }

        class Person {
            constructor(name, age, ...address) {
                this.name = name;
                this.age = age;
                this.address = new Address(...address);
            }
        }

        const person1 = new Person("Spongebob", 38, "124 Conch St.", "Bikini Bottom", "Int. Waters");
        const person2 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Waters");
        
        console.log(person1.address.country);
    }

    ------------------------------------- ARRAY OBJECTS ( FRUITS ) ---------------------------------------
    {
        const fruits = [
            { name: "apple", color: "red", calories: 95 },
            { name: "orange", color: "orange", calories: 45 },
            { name: "banana", color: "yellow", calories: 105 },
            { name: "coconut", color: "white", calories: 159 },
            { name: "pineapple", color: "yellow", calories: 37 }
        ];
        
        fruits.push({ name: "grapes", color: "purple", calories: 62 });
        console.log(fruits);
        
        fruits.forEach(fruit => console.log(fruit.calories));
        
        const maxFruit = fruits.reduce((max, fruit) => 
            fruit.calories > max.calories ? fruit : max);
        
        const minFruit = fruits.reduce((min, fruit) => 
            fruit.calories < min.calories ? fruit : min);
        
        console.log(maxFruit);
        console.log(minFruit);
    }

    ------------------------------------- SORTING ---------------------------------------
    {
        let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
        numbers.sort((a, b) => a - b);
        console.log(numbers);
    }

    // ===== SORT COM OBJETOS =====
    // sort() = method used to sort elements of an array in place.
    // Sorts elements as strings in lexicographic order, not alphabet
    // lexicographic = (alphabet + numbers + symbols) as strings
    {
        const people = [
            { name: "Spongebob", age: 30, gpa: 3.0 },
            { name: "Patrick", age: 37, gpa: 1.5 },
            { name: "Squidward", age: 51, gpa: 2.5 },
            { name: "Sandy", age: 27, gpa: 4.0 }
        ];
        
        people.sort((a, b) => a.age - b.age);
        console.log(people);
        
        people.sort((a, b) => a.name.localeCompare(b.name));
        console.log(people);
    }

    ------------------------------------- SHUFFLE IN ARRAY ---------------------------------------
    {
        const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
        cards.sort(() => Math.random() - 0.5);
        console.log(cards);
    }

    // ===== FISHER-YATES ALGORITHM =====
    // Fisher-Yates algorithm for shuffling
    {
        const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
        
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const random = Math.floor(Math.random() * (i + 1));
                [array[i], array[random]] = [array[random], array[i]];
            }
        }
        
        shuffle(cards);
        console.log(cards);
    }

    ------------------------------------- DATES OBJECTS ---------------------------------------

    // date objects = objects that contain values that represent dates and times
    // These date objects can be changed and formatted

    // Date(year, month, day, hour, minute, second, ms)
    {
        const date1 = new Date(2024, 0, 1, 2, 3, 4, 5);
        console.log(date1);
        
        const date2 = new Date("2024-01-02T12:00:00Z");
        console.log(date2);
        
        const date3 = new Date(1704067200000);
        console.log(date3);
        
        const date4 = new Date();
        const year = date4.getFullYear();
        const month = date4.getMonth();
        const day = date4.getDate();
        const hour = date4.getHours();
        const minutes = date4.getMinutes();
        const seconds = date4.getSeconds();
        const dayOfWeek = date4.getDay();
        
        console.log(year);
        console.log(month);
        console.log(day);
        console.log(hour);
        console.log(minutes);
        console.log(seconds);
        console.log(dayOfWeek);
        
        date4.setFullYear(2024);
        date4.setMonth(0);
        date4.setDate(1);
        date4.setHours(2);
        date4.setMinutes(3);
        date4.setSeconds(3);
        console.log(date4);
        
        const dateA = new Date("2023-12-31");
        const dateB = new Date("2024-01-01");
        
        if (dateB > dateA) {
            console.log("HAPPY NEW YEAR!");
        }
    }

    ------------------------------------- CLOSURES ---------------------------------------

    // closure = A function defined inside of another function,
    // the inner function has access to the variables
    // and scope of the outer function.
    // Allow for private variables and state maintenance
    // Used frequently in JS frameworks: React, Vue, Angular
    {
        function outer() {
            let message = "Hello";
            
            function inner() {
                console.log(message);
            }
            
            inner();
        }
        
        outer();
    }

    // ===== CREATE COUNTER WITH CLOSURE =====
    {
        function createCounter() {
            let count = 0;
            
            function increment() {
                count++;
                console.log(`Count increased to ${count}`);
            }
            
            function getCount() {
                return count;
            }
            
            return { increment, getCount };
        }
        
        const counter = createCounter();
        counter.increment();
        counter.increment();
        counter.increment();
        counter.increment();
        console.log(`The current count is ${counter.getCount()}`);
    }

    // ===== CREATE GAME WITH CLOSURE =====
    {
        function createGame() {
            let score = 0;
            
            function increaseScore(points) {
                score += points;
                console.log(`+${points}pts`);
            }
            
            function decreaseScore(points) {
                score -= points;
                console.log(`-${points}pts`);
            }
            
            function getScore() {
                return score;
            }
            
            return { increaseScore, decreaseScore, getScore };
        }
        
        const game = createGame();
        game.increaseScore(5);
        game.increaseScore(6);
        game.decreaseScore(3);
        console.log(`The final score is ${game.getScore()}pts`);
    }

    ------------------------------------- SETTIMEOUT() ---------------------------------------

    // setTimeout() = function in JavaScript that allows you to schedule
    // the execution of a function after an amount of time (milliseconds)
    // Times are approximate (varies based on the workload of the JavaScript runtime env.)
    // setTimeout(callback, delay);
    {
        setTimeout(() => window.alert("Hello"), 3000);
        
        const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
        clearTimeout(timeoutId);
    }

    // ===== SETTIMEOUT COM BOTÕES =====
    {
        let timeoutId;
        
        function startTimer() {
            timeoutId = setTimeout(() => window.alert("Hello"), 3000);
            console.log("STARTED");
        }
        
        function clearTimer() {
            clearTimeout(timeoutId);
            console.log("CLEARED");
        }
    }
    
    ------------------------------------- ES6 MODULES ---------------------------------------

    

*/