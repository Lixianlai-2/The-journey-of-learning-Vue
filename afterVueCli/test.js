const eventHub = {
  hashMap: {},
  on(name, fn) {
    if (!eventHub.hashMap[name]) {
      eventHub.hashMap[name] = [];
    }
    eventHub.hashMap[name].push(fn);
  },
  off(name, fn) {
    const q = eventHub.hashMap[name];
    if (!q) return;
    const index = q.indexof(fn);
    if (index === -1) return;
    q.splice(index, 1);
  },
  emit(name, data) {
    const q = eventHub.hashMap[name];
    if (!q) return;
    q.map((fn) => {
      fn(data);
    });
  },
};

eventHub.on("click", console.log("点击了"));
eventHub.off("click", console.log("取消了"));
eventHub.emit("click");
