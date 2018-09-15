import BaseRepository from "../infrastructure/database/BaseRepository";
import { User, userSchema} from "../model/areas/user/User";

class UserRepository extends BaseRepository<User> {
    constructor() {
        super(userSchema);
    }

    public findByUserId (userId: string, done: (err: any, result: any) => void) {
        this.findOne({userId}, done);
    }
}

export default UserRepository;