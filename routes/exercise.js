const express = require('express')
const routes = express.Router()
const Exercise = require('../models/Exercise');

//index && filter
routes.get('/', async (request, response) => {
    console.log(request.query)
    await Exercise.find(request.query)
        .then((items) => response.json({data: items, message: ''}))
        .catch((err) => response.json({data: {}, message: err}))
})

//create
routes.post('/', (request, response) => {
    const body = request.body;
    Exercise.create({
        title: request.body.title,
        description: request.body.description
    }).then(item => response.json({message: 'item ' + item.title + ' is added to the database'}, 201))
        .catch((err) => response.json({message: err}, 422))
});

//get
routes.get('/:Id', async (request, response) => {
    await Exercise.findById(request.params.Id)
        .then((item) => response.json({data: item, message: 'item ' + item.title + ' is found'}, 200))
        .catch((err) => response.json({data: {}, message: "not found"}, 404))
})

//delete
routes.delete('/:Id', async (request, response) => {
    // Exercise.deleteOne({"_id": request.params.Id})
    //   .then((result) => response.json({message: "deleted successfully", data: result}))
    //           .catch(err => response.json({message: "not deleted  ", data: err}))
    await Exercise.deleteOne({_id: request.params.Id})
        .then(function (result) {
            if (result.n > 0) return response.json({message: "deleted successfully"})
            else return response.json({message: " already deleted  "})
        })

})

//update
routes.put('/:Id', async (request, response) => {
    if (Object.keys(request.body).length === 0) {
        return response.status(400).send({
            message: " content can not be empty"
        });
    }
    console.log(request.body)
    const updatedItem = await Exercise.updateOne({_id: request.params.Id},
        {
            title: request.body.title,
            description: request.body.description
        }).then(function (result) {
        console.log(result)
        return response.status(200).send({
            message: "updated successfully"
        });
    })
})

module.exports = routes
