function samplePromise(){
    return Promise.resolve("Amalia");
}

const name = await samplePromise();
console.info(name);