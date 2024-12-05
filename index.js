import "dotenv/config";
import cowsay from "cowsay";
console.log(cowsay.say({
    text : process.env.NAME,
    e : "oO",
    T : "U "
}));

