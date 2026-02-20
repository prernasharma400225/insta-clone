const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")/**agr koi file use krni h frontend se toh hum multer ka use krte h. */

const upload = multer({ storage: multer.memoryStorage() })



/**
 * Post /api/posts [protected]  => {jiske pass token hoga sirf wohi acces kr skte, agr kisi k pass token nhi hoga toh wo unauthorized access ho jayega.}
 * - req.body = {caption, image-file}
 */


/** /api/posts/ */
postRouter.post("/", upload.single("image") ,postController.createPostController)


module.exports = postRouter