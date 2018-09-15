import ClientRepository from "../../../repository/ClientRepository";

export default class ClientModel {
    public static async retrieveAllClient() {
        let repo = new ClientRepository();
        let clients: any = {};
		await repo.retrieve((err, res) => {
			if (err) {
                clients.err = err;
            }

			clients.res = res;
        });
        return clients;
	}

	public static async filter(cond: object) {
        let repo = new ClientRepository();
        let clients: any = {};
		await repo.find(cond, {}, {}, (err, res) => {
			if (err) {
				clients.err = err;
			}
			clients.res = res;
        });
        return clients;
    }
}