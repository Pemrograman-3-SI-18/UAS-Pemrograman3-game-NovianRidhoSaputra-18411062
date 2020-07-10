const game = require('../model/Game.js')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputDataGame=(data, gambar)=>
    new Promise(async (resolve, reject)=>{

        const gameBaru = new game ({
            kodeGame : data.kodeGame,
            namagame : data.namagame,
            developer : data.developer,
            tahunterbit : data.tahunterbit,
            hargagame: data.hargagame,
            gambar: gambar

        })
       await game.findOne({kodeGame: data.kodeGame})
            .then(game =>{
                if (game){
                    reject(response.commonErrorMsg('Kode Game Sudah Ada'))
                }else{
                    gameBaru.save()
                        .then(r=>{
                            resolve(response.commonsuccessMsg('Berhasil Input Data'))
                        }).catch(err=>{
                        reject(response.commonErrorMsg('Input Data Gagal'))
                    })
                }
            }).catch(err =>{
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami'))
        })
    })
exports.lihatDataGame = () =>
    new Promise(async (resolve, reject) =>{
       await game.find({})
            .then(result =>{
                resolve(response.commonResult(result))
            }).catch(()=>reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami')))
    })
exports.lihatDetailDataGame = (kodeGame) =>
    new Promise(async (resolve, reject) =>{
        await game.findOne({kodeGame:kodeGame})
            .then(result =>{
                resolve(response.commonResult(result))
            }).catch(()=>reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami')))
    })
exports.updateGame = (id, data, gambar) =>
        new Promise(async (resolve, reject) =>{
           await game.updateOne(
            {_id : ObjectId(id)},
            {
                $set: {
                    kodeGame : data.kodeGame,
                        namagame : data.namagame,
                        developer : data.developer,
                        tahunterbit : data.tahunterbit,
                        hargagame: data.hargagame,
                        gambar: gambar
                }
            }
            ).then(game =>{
                resolve(response.commonsuccessMsg('Berhasil Update Data'))
            }).catch(err =>{
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami'))
            })
        })

exports.hapusgame = (_id) =>
    new Promise(async (resolve, reject)=>{
        await game.remove({_id: ObjectId(_id)})
            .then(()=>{
                resolve(response.commonsuccessMsg('Berhasil Menghapus Data'))
            }).catch(()=>{
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami'))
            })
    })
