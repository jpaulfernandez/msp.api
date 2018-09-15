import LedgerRepository from "../../../repository/LedgerRepository";

export default class ClientModel {
    public static async getLedger(owner: String) {
        let repo = new LedgerRepository();
        let ledger: any = {};
		await repo.getLedgerByOwner(owner, (err, res) => {
            if (err) {
                ledger.err = err;
            }

            ledger.res = res;
        });
        return ledger;
	}

	public static async getLedgerById(ledgerId: String) {
        let repo = new LedgerRepository();
        let ledger: any = {};
		await repo.getLedgerById(ledgerId, (err, res) => {
            if (err) {
                ledger.err = err;
            }

            ledger.res = res;
        });
        return ledger;
    }

    public static async getOverdue() {
        let repo = new LedgerRepository();
        let ledger: any = {};
        await repo.GetOverdue((err, res) => {
            console.log(err);
            console.log(res);
            if (err) {
                ledger.err = err;
            }

            ledger.res = res;
        });
        return ledger;
    }
}