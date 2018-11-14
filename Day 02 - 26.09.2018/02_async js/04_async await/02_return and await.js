
/*
Every function with async decleration:
     1) can use `await` keyword
     2) the returned value is sent as resolve of a promise
*/


function getPromise(num) {
    return new Promise(
        (resolve, reject) => {
            (num == 4) ? resolve("OK") : reject("NOT OK");
        });
}

async function test(n1) {

    try {
        let myMsg = await getPromise(n1);
        return myMsg;  //this is resolve promise
    } 
    catch (myErr) {
        throw new Error(myErr); //this is reject promise
    }
}


    test(4)
        .then(msg => console.log(`test(4) :${msg}`))
        .catch(err => console.log(`test(4) :${err}`));

    test(1)
        .then(msg => console.log(`test(1) :${msg}`))
        .catch(err => console.log(`test(1) :${err}`));


        /*
        OUTPUT:
        ___________________________
        test(4) :OK
        test(1) :Error: NOT OK
        */