import { HttpConnector } from "./httpConnector";
let ioc = [
    { name: "IConnector", mapTo: HttpConnector }
];
export default ioc;