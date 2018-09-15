import BaseRepository from "../infrastructure/database/BaseRepository";
import { Ledger, ledgerSchema} from "../model/areas/client/Ledger";

class LedgerRepository extends BaseRepository<Ledger> {
    constructor() {
        super(ledgerSchema);
    }

    public async getLedgerById (ledgerId: String, done: (err: any, res: any) => void) {
        await this.find({ledgerId}, {}, {}, done);
    }

    public async getLedgerByOwner (owner: String, done: (err: any, res: any) => void) {
        await this.find({owner}, {}, {}, done);
    }

    public async GetOverdue (done: (err: any, res: any) => void) {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let newDate = new Date("2018-08-28T16:00:00.000Z");
        console.log(newDate);
        let dateToday = `${day}/${month}/${year}`;
        this.find({dueDate: newDate}, {}, {}, done);
    }
}

export default LedgerRepository;