// api-routes

//import Express routes
const express = require("express");
const router = express();

//setup default api respon
router.get("/", (req, res) => {
  res.json({
    status: "Api it's working now..",
    message: "Selamat Datang di Website Mahasiswa..",
  });
});

//import mahasiswaController
const mahasiswaController = require("./mahasiswaController");

// mahasiswa routes
router
  .route("/mahasiswa")
  .get(mahasiswaController.index)
  .post(mahasiswaController.new);

router
  .route("/mahasiswa/:masis_id")
  .get(mahasiswaController.view)
  .patch(mahasiswaController.update)
  .put(mahasiswaController.update)
  .delete(mahasiswaController.delete);

//export api router
module.exports = router;
