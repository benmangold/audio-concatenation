const fs = require('fs');

/**
 * promise-wrapped utility functions
 */

module.exports.readFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, file) => {
      if (err) {
        reject(err);
      } else {
        resolve(file);
      }
    });
  });
};

module.exports.writeFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
