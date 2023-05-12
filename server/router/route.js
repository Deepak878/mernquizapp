
import { Router } from "express";
const router = Router()

//import controlllers
import * as controller from "../controllers/controller.js"
//Question Route
// router.get('/questions', controller.getQuestions)
// router.post('/questions', controller.insertQuestions)

router.route('/questions').get(controller.getQuestions).post(controller.insertQuestions).delete(controller.dropQuestions)
router.route('/result').get(controller.getResult).post(controller.storeResult).delete(controller.deleteResult)



export default router;
