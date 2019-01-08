function removeDotInJson(target) {
  let newObj = target;

  for (let key in newObj) {
    let value = newObj[key];
    let parts = key.split('.');
    let part;

    let last = parts.pop();

    while ((part = parts.shift())) {
      if (typeof target[part] !== 'object') target[part] = {};
      target = target[part];
    }
    delete newObj[key];
    target[last] = value;
    target = newObj;
  }
}

exports.removeDotInJson = removeDotInJson;
