const https = require("https");

const getPetition = ({ id }) => {
  return new Promise((resolve, reject) => {
    https
      .get(`https://swapi.py4e.com/api/people/${id}/`, (res) => {
        let body = "";
        res.on("data", (data) => {
          body += data;
        });
        res.on("end", () => resolve(JSON.parse(body)));
      })
      .on("error", (err) => reject(err));
  });
};

module.exports = {
  getPetition,
};
