const express = require('express')
const router = express.Router()
const users = require('../../controlers/user_api')



router.get('/', (req, res) => {
    const search = req.query.name
    if(search){
        const userFound = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(userFound)
    }
    else{
        res.send(users)
    }
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const userData = users[id]
    res.send(userData)
})

router.post('/', (req, res) => {
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    res.json(newUser)
    console.log('hitting the post', req.body)
})


module.exports = router;