'use strict';
const bcrypt  = require('bcrypt');
const logger = require('./../../logger');


// Use case is not clear that what's the requirement regaring the message encryption.
async function sendMessages(req,res,next){
  try{
    const encryptedMessage = await bcrypt.hash(req.body.message, 10);
    res.json({
      success: true,
      message: encryptedMessage
    })
  }catch(error){
    logger.error("Error while creating user for email %s is:",req.body.email,error);
    res.json({sucess:false,error:error})
  }
}
exports.sendMessages = sendMessages;