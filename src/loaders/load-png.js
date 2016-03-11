import pngjs from 'pngjs';
import fs from 'fs';

const { PNG } = pngjs;

function parseImage(data) {
  const png = new PNG({});

  return new Promise(
    (res, rej) => png.parse(data, (err, parsedData) => {
      if (err) {
        return rej(err);
      }

      return res({
        width: parsedData.width,
        height: parsedData.height,
        image: parsedData.data,
      });
    })
  );
}

function readFile(filepath) {
  return new Promise((res, rej) => {
    fs.readFile(filepath, (err, data) => {
      if (err) {
        return rej(err);
      }

      return res(data);
    });
  });
}

export default function loadPng(filepath) {
  return readFile(
    filepath
  ).then(
    parseImage
  ).catch(err => {
    throw err;
  });
}

