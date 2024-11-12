require("dotenv").config();
module.exports = {
    webhook: {
        error: "https://discord.com/api/webhooks/1305835230795534336/vdaTw3E0ufLQqKGbGi62wSRP10o_Ei3Ce1pa1wXpyKOmc1mj_j0NRZ1t2ua9wFmavOFy" || process.env.error, //webhook link where error logs are sent
        join: "https://discord.com/api/webhooks/1305835230795534336/vdaTw3E0ufLQqKGbGi62wSRP10o_Ei3Ce1pa1wXpyKOmc1mj_j0NRZ1t2ua9wFmavOFy" || process.env.join, //webhook link where join logs are sent
        leave: "https://discord.com/api/webhooks/1305835230795534336/vdaTw3E0ufLQqKGbGi62wSRP10o_Ei3Ce1pa1wXpyKOmc1mj_j0NRZ1t2ua9wFmavOFy" || process.env.leave, //webhook link where leave logs are sent
    },

    TOKEN: "" || process.env.TOKEN, //Your Bot Token
    MONGO_URI: "mongodb+srv://Abhijeet:Abhijeet2010@rapid-king.esp21.mongodb.net/?retryWrites=true&w=majority&appName=Rapid-King" || process.env.MONGO_URI, //Mongo Uri
    EMBED_COLOR: "#87e6d3" || process.env.EMBED_COLOR, //Embed Color
    DEV_ID: "1273178612333543426" || process.env.DEV_ID, //Developer ID
    OWNER_ID: "1119979840423079957" || process.env.OWNER_ID, //Owner ID

}
