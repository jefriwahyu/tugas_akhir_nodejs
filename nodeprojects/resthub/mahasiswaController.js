// import mahasiswaModel
Masis = require("./mahasiswaModel");

// handle index action
exports.index = function (req, res) {
  Masis.get(function (err, masis) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }

    res.json({
      status: "success",
      message: "Data Mahasiswa Berhasil Didapatkan",
      data: masis,
    });
  });
};

//handle create data mahasiswa
exports.new = function (req, res) {
  let masis = new Masis();
  masis.nim = req.body.nim;
  masis.nama = req.body.nama ? req.body.nama : masis.nama;
  masis.jurusan = req.body.jurusan;
  masis.semester = req.body.semester;
  masis
    .save()
    .then((data) => {
      res.json({
        message: "Mahasiswa Baru Terdaftar!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Server Error",
      });
    });
};

//handle view masis info
exports.view = function (req, res) {
  Masis.findById(req.params.masis_id, function (err, masis) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "Mahasiswa details loading..",
      data: masis,
    });
  });
};

//handle update masis info
exports.update = function (req, res) {
  Masis.findById(req.params.masis_id, function (err, masis) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    masis.nim = req.body.nim;
    masis.nama = req.body.nama ? req.body.nama : masis.nama;
    masis.jurusan = req.body.jurusan;
    masis.semester = req.body.semester;
    masis
      .save()
      .then((data) => {
        res.json({
          status: "success",
          message: "Mahasiswa Info updated",
          Masis: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Internal Server Error",
        });
      });
  });
};

//handle delete mahasiswa info
exports.delete = function (req, res) {
  Masis.remove(
    {
      _id: req.params.masis_id,
    },
    function (err, masis) {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Mahasiswa deleted",
      });
    }
  );
};
