let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (call_production)=> {
    call_production()
};

let production = ()=> {
};
order(production);