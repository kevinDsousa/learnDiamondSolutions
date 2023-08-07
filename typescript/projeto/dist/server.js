"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 3000;
const server = app_1.app.listen(PORT, () => console.log(`Server is listening on port http://localhost:${PORT}`));
process.on('SIGINT', () => {
    server.close();
    console.log('app finalizado');
});
//# sourceMappingURL=server.js.map