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

    ------------------------------------- LOGICAL OPERATOR ---------------------------------------

    logical operators = used to combine or manipulate boolean values
                        (true or false)
    
    AND = &&
    OR  = ||
    NOT = !
*/




