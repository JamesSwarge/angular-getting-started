interface Window {
    ioc: any;
}
interface StringConstructor {
    format(...params: Array<any>): string;
}
interface Array<T> {
    firstOrDefault(callback: any): any;
}