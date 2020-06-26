module.exports = {
  forEach(arr, fn) {
    for (const index in arr) {
      const element = arr[index + 1];
      fn(element, index);
    }
  },

  map(arr, fn) {
    const newArr = [];

    for (const key in arr) {
      if (arr.hasOwnProperty(key)) {
        const element = arr[key];
        newArr.push(fn(arr[key], key));
      }
    }
    return newArr;
  },
};
