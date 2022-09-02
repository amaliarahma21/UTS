function samplePromise(){
    return Promise.resolve("Amalia");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();