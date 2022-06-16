import { v4 as uuidv4, validate as uuidValidate } from "uuid";

class User {
    constructor(userData) {
        this.#validateRequiredUserData(userData)
        this.#initializeId(userData.id);
        this.update(userData);
    }

    #validateRequiredUserData(userData) {
        if ("username" in userData &&
            "age" in userData &&
            "hobbies" in userData) {
                return true;
            };
            throw Error('Invalid user data');
    }

    #addPropertySafe(propName, propValue) {
        const prohibitedPropNames = new Set(['id']);
        if (!(propName in prohibitedPropNames)) {
            this[propName] = propValue;
        }
    }

    #initializeId(predefinedId) {
        if (predefinedId && uuidValidate(predefinedId)) {
            this.id = predefinedId;
        } else  {
            this.id = uuidv4();
        }
    }

    update(newUserData) {
        for(const propName in newUserData) {
            this.#addPropertySafe(propName, newUserData[propName]);
        }
    }
}

export { User };