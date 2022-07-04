let axios = require('axios');
require('dotenv').config();
const version = process.env.VERSION;
const Phone_Number_Id = process.env.PHONE_NUMBER_ID;

module.exports = class Operations {
  static async sendReadMessage(data) {
    console.log({
      "Incoming data": data
    });
    try {
      // write your Axios code here
      var config = {
        method: 'post',
        url: `https://graph.facebook.com/${version}/${Phone_Number_Id}/messages`,
        headers: {
          'Authorization': process.env.FB_AUTHORIZATION,
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          if(response.data){
            console.log(response.data);
            console.log("Successfully updated the received message");
            return {data: response.data};
          }
        })
        .catch(function (error) {
          console.table([{
              "error": "failed to make a succesful request"
            },
            {
              "error": error.message
            },
            {
              "error": error.response.data.error.message
            }
          ]);
        });

    } catch (error) {
      return {
        status: 'error',
        message: "update unmessage to readmessage failed",
        error: error.message
      };
    }
  }

  static async sendMessage() {
    try {
      // write your Axios code here
      console.log('sending message');
      return "message sent";
    } catch (error) {
      throw new Error(error);
    }
  }

  static async sendTemplate(data) {
    try {
      // write your Axios code here
      var config = {
        method: 'post',
        url: 'https://graph.facebook.com/v13.0/107923255306769/messages',
        headers: {
          'Authorization': process.env.FB_AUTHORIZATION,
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

      console.log('sending saved template');
    } catch (error) {
      throw new Error(error);
    }
  }

  static async sendLocation() {
    try {
      // write your Axios code here
      console.log('sending location');
    } catch (error) {
      throw new Error(error);
    }
  }

};