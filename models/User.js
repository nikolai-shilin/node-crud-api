import { v4 as uuidv4, validate as uuidValidate } from "uuid";

class User {
    static validateUserData(userData) {
        if ("username" in userData &&
            "age" in userData &&
            "hobbies" in userData) {
                return true;
            };
            throw Error('Invalid user data');
    }

    static validateProhibitedUserData(userData) {
        if (!("id" in userData)) {
                return true;
            };
            throw Error('Invalid user data');
    }

    constructor(userData) {
        User.validateUserData(userData)
        if (userData.id && uuidValidate(userData.id)) {
            this.id = userData.id;
        } else  {
            this.id = uuidv4();
        }
        this.username = userData.username;
        this.age = userData.age;
        this.hobbies = userData.hobbies;
    }

    update(newUserData) {
        User.validateUserData(newUserData);
        User.validateProhibitedUserData(newUserData);
        Object.assign(this, newUserData);
    }
}

export { User };