import { User } from "./User.js";
import { readFileSync } from "fs";

class UsersStore {
    constructor(rawData) {
        this.store = new Map();
        for (const userRawData of rawData) {
            this.addUser(userRawData);
        }
    }

    static getInstance(sourceFile="./users.json") {
        if (!this.instance) {
            const rawData = JSON.parse(readFileSync(sourceFile));
            this.instance = new UsersStore(rawData);
            return this.instance;
        } else {
            return this.instance;
        }
    }

    validateUserExistance(key) {
        if (this.store.has(key)) {
            return true;
        } else {
            throw Error('No such user');
        }
    }

    getAll() {
        return Array.from(this.store.values());
    }

    getUserByKey(key) {
        return this.store.get(key)
    }

    addUser(user) {
        this.store.set(user.id, user);
    }

    updateUser(key, newUserData){
        if (this.store.has(key)) {
            const user = this.store.get(key);
            this.store.set(key, user.update(newUserData));
        } else {
            throw Error('No such user');
        }
    }

    deleteUser(key) {
        if (this.store.has(key)) {
            this.store.delete(key);
        } else {
            throw Error('No such user');
        }
    }
}

export { UsersStore };