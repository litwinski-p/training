import * as crypto from "node:crypto";


const bytes = crypto.randomBytes(16);
console.log(bytes);