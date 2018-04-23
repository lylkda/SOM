const router = require("express").Router();
const studentsController = require("../../controllers/studentsController");

router.get('/mystudents', (req, res) => {
  console.log('mystudents', req.user);
  studentsController.findByTeacher(req, res);
  //res.status(200).json({ students: });
});

// Matches with "/api/books"
router.route("/")
  .get(studentsController.findAll)
  .post(studentsController.create);

 router.get("/test", (req, res) => {
    console.log('/test',req.user);
    res.status(200).json({
      message: "success?",
      user: 'user: ' + req.user
    });

    
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(studentsController.findById)
  .put(studentsController.update)
  .delete(studentsController.remove);

 
  });
// Matches with

module.exports = router;

