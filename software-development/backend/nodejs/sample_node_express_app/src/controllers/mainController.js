
import {
  allContacts,
  contactMessages,
  sendNewMessage,
  authenticateContact,
  registerNewContact,
  userProfileRead,
  userProfileUpdate,
} from "../prisma/PrismaQueries.js";

import { createJWT, authenticateJWT } from "../middleware/Authenticator.js";

async function apiStatus(req, res, next) {
  try {
    res.json({
      status: "Backend Systems running ok",
      response: [
        "/messaging-api/v1/status : GET End Point to show the running status of backend systems",
        "/messaging-api/v1/contacts/login : POST End Point to login to Messaging App",
        "/messaging-api/v1/contacts/register : POST End Point to Register new user",
        "/messaging-api/v1/contacts : GET Authenticated End Point to GET all the contacts and messages related current logged in user",
        "/messaging-api/v1/contacts/:loggedInUserID/messages : GET Authenticated End Point to GET messages sent and received by the logged in user",
        "/messaging-api/v1/contacts/:loggedInUserID/message/:contactID : POST Authenticated End Point to send message to selected contact",
        "/messaging-api/v1/contacts/:contactID/profile: GET Authenticated End Point to get logged in users profile",
        "/messaging-api/v1/contacts/:contactID/profile : PUT Authenticated End Point to update logged in users profile",
      ],
    });
  } catch (error) {
    console.error(error);
  }
}
// Middleware to Authenticate login existing user using sent form data
// POST Method
// Require email, password,
// Message is sent as body=>raw=>JSON
// JSON Format: {"email":"","password":""}
async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const response = await authenticateContact(email, password);
    const createdJWT = await createJWT(response);
    res.json({
      jwt: createdJWT.token,
    });
  } catch (error) {
    console.error(error);
    res.json({
      response: response,
    });
  }
}

// Middleware to Register New user using received form data
// POST Method
// Require name, email, password, bio
// Message is sent as body=>raw=>JSON
// JSON Format: {"name":"","email":"","password":"","bio":""}
async function register(req, res, next) {
  try {
    const { name, email, password, bio } = req.body;
    const response = await registerNewContact(name, email, password, bio);
    res.json({
      response: response,
    });
  } catch (error) {
    console.error(error);
    res.json({
      response: response,
    });
  }
}

async function getAllContacts(req, res, next) {
  try {
    const allContactsReceived = await allContacts();
    console.log(allContactsReceived);
    res.json({ status: "Get all contacts", response: allContactsReceived });
  } catch (error) {
    console.error(error);
  }
}

async function getContactMessages(req, res, next) {
  try {
    const contactID = parseInt(req.params.loggedInUserID);
    console.log(contactID);
    const getUserMessages = await contactMessages(contactID);
    console.log(getUserMessages);
    res.json({
      status: "Get logged in users messages",
      response: getUserMessages,
    });
  } catch (error) {
    console.error(error);
    res.json({ error: "Error Fetching messages" });
  }
}
// Function to send messages to a contact
// POST Method
// Require loggedInUserID, contactID, message
// Message is sent as body=>raw=>JSON
// JSON Format: {"loggedInUserID":"","contactID":"", "message":""}

async function sendMessageToContact(req, res, next) {
  try {
    // const senderID = parseInt(req.params.loggedInUserID);
    // const receiverID = parseInt(req.params.contactID);

    const { message, loggedInUserID, contactID } = req.body;

    const response = await sendNewMessage(
      parseInt(loggedInUserID),
      parseInt(contactID),
      message
    );
    res.json({
      response: response,
    });
  } catch (error) {
    console.error(error);
    res.json({ error: "Error Sending messages" });
  }
}

async function loadUserProfile(req, res, next) {
  try {
    const userProfileID = parseInt(req.params.contactID);
    const getUserProfile = await userProfileRead(userProfileID);

    res.json({
      status: "Load logged in users profile",
      response: getUserProfile,
    });
  } catch (error) {
    console.error(error);
    res.json({ error: "Error Loading profile" });
  }
}
// This function will update the user profile based on contactID
// PUT Method
// Require contactID, updatedBio
// Message is sent as body=>raw=>JSON,
// JSON Format expected: {"contactID":"", "updatedBio":""}
async function updateLoggedUserProfile(req, res, next) {
  try {
    const { contactID, updatedBio } = req.body;
    const updateProfile = await userProfileUpdate(
      parseInt(contactID),
      updatedBio
    );
    res.json({ response: updateProfile });
  } catch (error) {
    console.error(error);
    res.json({ error: "Error Updating profile" });
  }
}

export {
  apiStatus,
  login,
  register,
  getAllContacts,
  getContactMessages,
  sendMessageToContact,
  loadUserProfile,
  updateLoggedUserProfile,
};
