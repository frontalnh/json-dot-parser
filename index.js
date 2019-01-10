function removeDotInJson(target) {
  let result = {};
  Object.assign(result, target);

  for (let key in target) {
    let parts = key.split('.');
    let last = parts.pop();
    let part;
    let iterRef = result;

    while ((part = parts.shift())) {
      if (typeof iterRef[part] !== 'object') {
        iterRef[part] = {};
      }
      iterRef = iterRef[part];
    }

    delete result[key];
    iterRef[last] = target[key];
  }

  return result;
}

exports.removeDotInJson = removeDotInJson;
