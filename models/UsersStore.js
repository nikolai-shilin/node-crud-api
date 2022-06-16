import { User } from "./User.js";
import { readFileSync } from "fs";

class UsersStore {
    constructor(userListRawData) {
        this.store = new Map();
        for (const userRawData of userListRawData) {
            const user = new User(userRawData);
            this.addUser(user);
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

    #validateUserExistance(key) {
        if (this.store.has(key)) {
            return true;
        } else {
            throw Error('No such user');
        }
    }

    // CRUD INTERFACE
    addUser(user) {
        this.store.set(user.id, user);
    }

    getAll() {
        return Array.from(this.store.values());
    }

    getUserByKey(key) {
        return this.store.get(key)
    }

    updateUser(key, newUserData){
        this.#validateUserExistance(key);
        const user = this.store.get(key);
        user.update(newUserData);
        this.store.set(key, user);
    }

    deleteUser(key) {
        this.#validateUserExistance(key);
        this.store.delete(key);
    }
}

export { UsersStore };