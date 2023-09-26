// Code your solutions in this file

function writeCards (names, occasion){
    const thankYou= [];
    for (let i=0; i<names.length; i++){
        const message = `Thank You, ${names[i]}, for the wonderful surprise gift! `
        thankYou.push(message);

    }
    return thankYou;
}
