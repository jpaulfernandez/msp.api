import BaseRepository from "../infrastructure/database/BaseRepository";
import { Client, clientSchema} from "../model/areas/client/Client";

class ClientRepository extends BaseRepository<Client> {
    constructor() {
        super(clientSchema);
    }
}

export default ClientRepository;