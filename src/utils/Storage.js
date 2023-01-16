class Storage {
  save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get(key) {
    const json = localStorage.getItem(key);
    return JSON.parse(json);
  }
}

const storage = new Storage();
export default storage; // that means we return a single object named "storage", not full class
