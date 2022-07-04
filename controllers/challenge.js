const {
  StatusCodes
} = require('http-status-codes');
const token = "12345";


exports.returnChallenge = (req, res) => {
  try {
    const tesing1 = req.query;
    if (tesing1['hub.verify_token'] !== token) {
      console.log("failed again");
      return res.status(StatusCodes.UNAUTHORIZED).json({
        status: "failed",
        message: "you are unauthorized"
      });
    }
    console.log("success");
    const data = tesing1['hub.challenge'];
    console.log(typeof (data));
    // convert data into an interger
    const dataInt = parseInt(data);
    return res.json(dataInt);
  } catch (error) {
    console.error(error);
  }
};
