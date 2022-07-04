const Operations = require("../services/index");
const {
  sendMessage,
  sendTemplate,
  sendReadMessage
} = Operations;
require('dotenv').config();


exports.webHook = async (req, res) => {

  // SEND TO PROPER CONTROLLER FOR HANDLING THE MESSAGES
  let message = {
    messaging_product: 'whatsapp',
    recipient_type: "individual",
    to: `${req.body.entry[0].changes[0].value.metadata.phone_number_id}`,
    type: req.body.entry[0].changes[0].value.messages[0].type
  };

  // MARK AS READ WITH A PUT REQUEST
  if (message.type === "text") {

    if (req.body.entry[0].changes[0].value.messages[0].type === 'text') {
      let data = {
        "messaging_product": "whatsapp",
        "status": "read",
        "message_id": req.body.entry[0].changes[0].value.messages[0].id
      };
      await sendReadMessage(data);
      let text_messages = req.body.entry[0].changes[0].value.messages[0].text.body;
      let user_name = req.body.entry[0].changes[0].value.contacts[0].profile.name;
      if (text_messages.includes("hi")) {
        // send a message to the bot
        data = {
          "messaging_product": "whatsapp",
          "recipient_type": "individual",
          "to": `${req.body.entry[0].changes[0].value.contacts[0].wa_id}`,
          "type": "text",
          "text": {
            "body": `Hello ${user_name}`
          }
        };
        await sendReadMessage(data);
      } else {

      }

    }

    // ASSEMBLE TEXT OBJECT
    // let text = {
    //   body: `${properMessage}`,
    //   preview_url: ''
    // };

    // message.context = {
    //   message_id: "<WAMID.ID>"
    // };

    // message.text = text;
    // send_text_message(message);
  }

  if (message.type === "video") {
    // ASSEMBLE VIDEO OBJECT
    let video = {

    };
    message.video = video;
    send_video_message(message);
  }

  if (message.type === "audio") {
    // ASSEMBLE AUDIO OBJECT
    let audio = {

    };
    message.audio = audio;
    send_audio_message(message);

  }

  if (message.type === "contact") {
    // ASSEMBLE CONTACT OBJECT
    let contact = {

    };
    message.contact = contact;
    send_contact_message(message);

  }

  if (message.type === "document") {
    // ASSEMBLE DOCUMENT OBJECT
    let document = {

    };
    message.document = document;
    send_document_message(message);

  }

  if (message.type === "image") {
    // ASSEMBLE IMAGE OBJECT
    let image = {

    };
    message.image = image;
    send_image_message(message);
  }

  if (message.type === "interactive") {
    // ASSEMBLE INTERACTIVE OBJECT
    let interactive = {

    };
    message.interactive = interactive;
    send_interactive_message(message);
  }

  if (message.type === "location") {
    // ASSEMBLE LOCATION OBJECT
    let location = {

    };
    message.location = location;
    send_location_message(message);

  }

  if (message.type === "sticker") {
    // ASSEMBLE STICKER OBJECT
    let sticker = {

    };
    message.sticker = sticker;
    send_sticker_message(message);
  }

  if (message.type === "template") {
    // ASSEMBLE TEMPLATE OBJECT
    let template = {

    };
    message.template = template;
    send_template_message(message);
  }

};