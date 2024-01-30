const parseEnv = () => {
    const envKeys = Object.keys(process.env);
    const rssKeys = envKeys.filter(key => key.startsWith("RSS_"));
    const rssPairs = rssKeys.map((key) => `${key}=${process.env[key]}`);
    console.log(rssPairs.join("; "));
};

parseEnv();
