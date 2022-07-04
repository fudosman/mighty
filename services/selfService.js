// the user inputs the words he wants to catch in the message
// 

module.exports = class handler {
  static async mark_as_read(data) {
    const startLetter = 'A';
    const endLetter = 'H';
    const regex = new RegExp(`[${startLetter}-${endLetter}]`, 'g');
    
    'Hello World'.replace(regex, 'J');
  }
};