const multer = require('multer')
const fs = require('fs')
const router = require('express').Router()
const game = require('../controller/Game')

var storage = multer.diskStorage({
    filename: function (req, file, cb) {
        let ext = file.originalname.substring(
            file.originalname.lastIndexOf("."),
            file.originalname.length
        )
        cb(null, Date.now() + ext);
    },
    destination: function (req, file, cb) {
        cb(null, './gambar')
    }
})

var upload = multer({storage: storage}).single("gambar")


router.post("/input", upload, (req, res)=> {

game.inputDataGame(req.body, req.file.filename)
    .then((result)=> res.json(result))
    .catch((err) => res.json(err))

})

router.get("/datagame", (req, res)=>{
    game.lihatDataGame()
        .then((result)=> res.json(result))
        .catch((err) => res.json(err))
})
router.get("/datagame/:id", (req, res)=>{
    game.lihatDetailDataGame(req.params.id)
        .then((result)=> res.json(result))
        .catch((err) => res.json(err))
})
router.delete("/hapus/:id", (req, res)=>{
    game.hapusgame(req.params.id)
        .then((result)=> res.json(result))
        .catch((err) => res.json(err))
})
router.put("/ubah/:id",upload, (req, res)=>{
    let fileName;
    if (req.body.gambar){
        fileName = req.body.gambar;
    }else {
        fileName = req.file.filename;
    }
    game.updateGame(req.params.id, req.body, fileName )
        .then((result)=> res.json(result))
        .catch((err) => res.json(err))
    })

module.exports = router
