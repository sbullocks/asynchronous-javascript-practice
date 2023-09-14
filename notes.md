<!--
Asynchronous JavaScript
-breaks down bigger projects into smaller tasks.
-using callbacks, async/await or promises
-forms a connection that returns the final result




***Definitions: Synchronous & Asynchronous Systems
-JavaScript is by default Synchronous [single threaded].
-In an synchronous system, JavaScript handles each function 1 by 1 from top to bottom and waits for each to complete before proceeding. Dependent on one another. Follows an order. Example: relay race, same lane.
-In an asynchronous system, JavaScript handles each function independently at the same time and does not know/care about the other function(s). Independent of each other. Example: track race, own lanes.

Steps to make ice cream: (work, time-seconds)
1 place order, 2 seconds (2000)
2 cut the fruit, 2 seconds (2000)
3 add water and ice, 1 second (1000)
4 start the machine, 1 second (1000)
5 select container, 2 seconds (2000)
6 select toppings, 3 seconds (3000)
7 server ice cream, 2 seconds (2000)

*Synchronous Example
console.log(" I "); // > "I"
console.log(" eat "); // > "eat"
console.log(" Ice Cream "); // > "Ice Cream"

*Asynchronous Example - fake 2 seconds.
console.log("I");
// This will be shown after 2 seconds..
setTimeout(()=>{
    console.log("eat");
        },2000)
console.log("Ice Cream");

console returns 
"I" 
"Ice Cream"
"eat" // this is due to the 2 second delay from the setTimeout().




***Definition(s): Callbacks
-A function nested in another function as an argument.
-Calling a function inside another function.
-Creates connections between functions.

*Below are 2 regular functions that do not have any connection to each other:

function one () {
    console.log(" step one ")
}

function two () {
    console.log(" step two" )
}
one(); > // " step one "
two(); > // " step two "

If I reverse the order that I call the above functions, the console will print them in reverse order as JS reads from top to bottom.


*Callback Example
-make connection of function two() inside funtion one().
-use an argument: call_two
-in order to provoke, need to call call_two()
-now can call function one() & pass function two() inside. there is no need to call function two() anymore as its a callback in function one(call_two). Example: one(two);
This forms the relationship/connection between the functions as a callback.

function one (call_two) {
    console.log(" step one complete. plesae call step 2 ");
    call_two()
}

function two () {
    console.log(" step two " )
}
one(two);

console returns
"step one complete. plesae call step 2"
"step two"

If I reverse the order of logic in function one(), the console will print them in reverse order as JS reads from top to bottom.




Start Ice Cream Business
-understand the relationship between the customers and business.
1 get order from customer
2 fetch ingredients
3 start production
4 serve

create 2 functions: order function and production function

connection: if order is not received, cannot start production. This will form the connection between the two functions using a callback.

let order = (call_production)=> {
    console.log("order placed. please call production");
    call_production()
};

let production = ()=> {
    console.log("order received. starting production");
};
order(production);

console returns
"order placed. please call production"
"order received. starting production"

-understand the relationship between the frontend (kitchen - make the ice cream) and backend (storage room - ingredients, containers, ect.. "stocks").
1 store stocks inside a object (variable)
2 the stocks are in arrays within the object
3 to access a specific stock, call it: stocks.fruits[2]
4 customer can pick different options of fruits so the options needs stored in a variable; Fruit_name. Customer picks fruit and then functions 2nd argument is call_production.
    -forms a relationship between the functions
5 when calling the function order(Fruit_name, call_production); need Fruit_name argument as "" so a number from the fruit array can be passed in. 
    -Example: order(0, production); // > "strawberry"
6 per the steps to make ice cream, step 1 takes 2 seconds to place order; add setTimeout() with a console.log
    -`` back ticks needed in console.log for template literal to access the Fruit_name; ${stocks.Fruits[Fruit_name]}

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

console.log(stocks.Fruits[2]; // > banana

*Example Continued

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (Fruit_name, call_production)=> {
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
    },2000)
    call_production()
};

let production = ()=> {
    setTimeout(()=>{
        console.log("production has started.")
    },0000)
};
order(0, production); 

console returns
"production has started" // after a 0 second delay, no delay.
"strawberry was selected" // after a 2 second dealy.

-THIS IS WRONG - JS runs from top to bottom. I need to fix the order of when call_production() is called in the logic; moving it inside the setTimeout()
    -now it wont fire production() until a fruit is selected.

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (Fruit_name, call_production)=> {
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
        call_production()
    },2000)
   
};

let production = ()=> {
    setTimeout(()=>{
        console.log("production has started.")
    },0000)
};
order(0, production); 

console returns
"strawberry was selected" // after a 2 second dealy.
"production has started" // after a 0 second delay, no delay.

ORDER FUNCTION IS COMPLETED!


*Steps to make ice cream; step 2 - cut the fruit, 2 seconds

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (Fruit_name, call_production)=> {
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
        call_production()
    },2000);
   
};

let production = ()=> {
    setTimeout(()=>{
        console.log("production has started.");

        setTimeout(() => {
            console.log("the fruit has been chopped.");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} was added.`);

                setTimeout(() => {
                    console.log("the machine was started.");

                    setTimeout(() => {
                        console.log(` ice cream was placed on the ${stocks.holder[0]}.`);

                        setTimeout(() => {
                            console.log(` with ${stocks.toppings[0]}`);

                            setTimeout(() => {
                                console.log("ice cream served! thank you, come again!");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
};
order(0, production); 

console return (with the corresponding delays from setTimeout.)
"production has started."
"the fruit has been chopped."
"water & ice was added."
"the machine was started."
"ice cream was placed on the cone."
"with chocolate"
"ice cream served! thank you, come again!"

***** THIS IS KNOWN AS CALLBACK HELL - HARD TO READ AND FOLLOW WHAT IS GOING ON. CAN BE FIXED WITH PROMISES AND ASYNC/AWAIT. *****




***Definition(s): Promise (my example is that I promise to serve ice cream)
- below is the promise cycle which has 1 of 2 outcomes: 
- promises can be fulfilled or rejected
- .finally runs no matter if promise is fulfilled or rejected

*PENDING > RESOLVE > .then > .then > .FINALLY 
-pending state - before customer order
*customer places order for strawberry ice cream. 
-if strawberry is available, the promise RESOLVES (can serve)
-.THEN (steps to create the order) 
-.FINALLY (end of day so close the business)



*PENDING > REJECT > .catch > .FINALLY
-pending state - before customer order
*customer places order for strawberry ice cream. 
-if strawberry is available, the promise REJECTS (cannot serve)
-.CATCH (error message) 
-.FINALLY (end of day so close the business)


-promise cycle (resolve or reject)
-relationship between time and work (steps to make ice cream instructions)
-promise chaining (.then())
-error handling (.catch())
-the .finally handler (.finally())

*Promise Example

-create a variable for status of is shop open?
    -true = open; false = closed;
-create function for order and create a relationship for time and work (order does not matter) (time is the delay and work is the Promise to start to serve ice cream when shop_is_open is true)
-once order is made, create the Promise; return new Promise(()=>{})
-the Promise takes 2 arguments; (resolve, reject)
-write if/else statement for if_shop_open is true, then resolve and pass work ()
    -else if_shop_open is false, then reject
* THE RELATIONSHIP WITH WORK IS NOW FORM. NEED TO FORM RELATIONSHIP WITH TIME AS SETTIMEOUT() TO RELATE WITH WORK.

let is_shop_open = true;

 let order = (time, work)=> {
    return new Promise((resolve, reject)=>{
        if (is_shop_open){

            setTimeout(()=>{
                resolve( work() )},time);
           
        }
        else{
            reject(
                console.log("Sorry, the shop is closed currently!"));
        }

    });
    };
order(2000, ()=>console.log(`${stocks.Fruits[0]}`));














































 -->
