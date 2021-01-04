export default interface Endpoint {
    // TODO : Supress this warning !
    // eslint-disable-next-line no-unused-vars
    send(json: string): void,
    release(): void,
}
