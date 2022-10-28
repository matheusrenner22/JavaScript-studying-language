var promessa = new Promise((resolve, reject) => {
    return resolve('ok');
});

async function start() {
    try {
        var result = await promessa;
        console.log(result);

    } catch (error) {
        console.log(error);
    } finally {
        console.log('rodar sempre');
    }
}

start();