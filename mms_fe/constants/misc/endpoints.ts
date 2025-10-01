class Endpoints {
    static merchants = {
        listOrCreate: 'merchants/',
        detail: (id: string) => `merchants/${id}/`,
    }
}

export default Endpoints;