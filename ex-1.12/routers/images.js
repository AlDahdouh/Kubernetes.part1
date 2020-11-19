const download = require("../utils/ImageDownload");
const fs = require("fs");
const imageRouter = require("express").Router();

imageRouter.get("/:id", async (request, response) => {
  const imageId = request.params.id;
  const imageOfDay = `./images/${imageId}.jpg`;
  console.log("Searching for image: ", imageOfDay);
  fs.access(imageOfDay, fs.constants.F_OK, async (err) => {
    if (err) {
      // the file does not exists
      console.log("Image does not exist. Download new image from Picsum ...  ");
      await download("https://picsum.photos/1200", imageOfDay);
      response.sendFile(`${imageId}.jpg`, { root: `./images/` });
    } else {
      // the file exists
      response.sendFile(`${imageId}.jpg`, { root: `./images/` });
    }
  });
});

module.exports = imageRouter;
