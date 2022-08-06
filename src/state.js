const state = {
  data: {
    headerActive: false,
  },
  listeners: [],

  getState() {
    return this.data;
  },
  setState(newDate) {
    this.data = newDate;
    for (const cb of this.listeners) {
      cb();
    }
    console.log("el state cambio", newDate);
  },
  subscribe(callback) {
    this.listeners.push(callback);
  },
};
