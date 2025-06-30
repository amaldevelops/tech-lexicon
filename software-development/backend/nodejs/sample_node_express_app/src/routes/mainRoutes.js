import { Router } from "express";

import {
  apiStatus,
  login,
  register,
  getAllContacts,
  getContactMessages,
  sendMessageToContact,
  loadUserProfile,
  updateLoggedUserProfile,
} from "../controllers/mainController.js";

import { authenticateJWT } from "../middleware/Authenticator.js";

const mainRouter = Router();

mainRouter.get("/messaging-api/v1/status", apiStatus); // End Point to show the running status of backend systems

mainRouter.post("/messaging-api/v1/contacts/login", login); // POST End Point to login to Messaging App

mainRouter.post("/messaging-api/v1/contacts/register", register); // POST End Point to Register new user

mainRouter.get("/messaging-api/v1/contacts", authenticateJWT, getAllContacts); // Authenticated End Point to GET all the contacts and messages related current logged in user

mainRouter.get(
  "/messaging-api/v1/contacts/:loggedInUserID/messages",
  authenticateJWT,
  getContactMessages
); // Authenticated End Point to GET messages sent and received by the logged in user

mainRouter.post(
  "/messaging-api/v1/contacts/:loggedInUserID/message/:contactID",
  authenticateJWT,
  sendMessageToContact
); // Authenticated End Point to send message to selected contact

mainRouter.get(
  "/messaging-api/v1/contacts/:contactID/profile",
  authenticateJWT,
  loadUserProfile
); // Authenticated End Point to get logged in users profile

mainRouter.put(
  "/messaging-api/v1/contacts/:contactID/profile",
  authenticateJWT,
  updateLoggedUserProfile
); // Authenticated End Point to update logged in users profile

export default mainRouter;
