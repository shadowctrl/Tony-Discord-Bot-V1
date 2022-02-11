require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "", // your bot token
    prefix: process.env.PREFIX || "", // bot prefix
    ownerID: process.env.OWNERID || "", //your discord id
    mongourl: process.env.MONGO_URI || "", // MongoDb URL
    embedColor: process.env.COlOR || "", // embed colour
    logs: process.env.LOGS || "", // channel id for guild create and delete logs

    //nodes: [
    //{
    //  host: process.env.NODE_HOST || "disbotlistlavalink.ml",
    //  identifer: process.env.NODE_ID || "local",
    //  port: parseInt(process.env.NODE_PORT || "443"),
    //  password: process.env.NODE_PASSWORD || "LAVA",
    //  secure: parseBoolean(process.env.NODE_SECURE || "true"),
    //  
    //}
    nodes: [{
        host: "disbotlistlavalink.ml",
        identifer: "local",
        port: parseInt("443"),
        password: "LAVA",
        secure: parseBoolean("true"),

    }],

}

function parseBoolean(value) {
    if (typeof(value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}