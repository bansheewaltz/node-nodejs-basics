const parseArgs = () => {
    const args = process.argv;
    const parsedArgs = [];

    for (let i = 2; i < process.argv.length; i += 2) {
        parsedArgs.push(args[i].slice(2) + " is " + process.argv[i + 1]);
    }

    console.log(parsedArgs.join(", "));
};

parseArgs();
