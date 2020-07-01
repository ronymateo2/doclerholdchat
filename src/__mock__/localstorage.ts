class LocalStorageFake {
    store: any = {}
    getItem(key: string) {
        return this.store[key];
    }

    setItem(key: string, value: string) {
        this.store[key] = value;
    }
    clear() {
        this.store = {};
    }
    removeItem(key: string) {
        delete this.store[key];
    }
}

export default LocalStorageFake