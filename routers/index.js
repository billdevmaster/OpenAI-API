import express from 'express';
import ChatCtrl from "../controllers/chatCtrl.js";
const router = express.Router();

router.post('/getResponse', ChatCtrl.getResponse);
router.post('/postText', ChatCtrl.postText);
router.post('/postAudio', ChatCtrl.postAudio);

export default router;