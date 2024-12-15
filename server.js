import express from 'express'

const app = express()

const stars = [{
    name: "Salman",
    status: 'hit',
    collection: 15
}, {
    name: "Srk",
    status: "ATB",
    collection: 7
}, {
    name: "Aamir",
    status: "flop",
    collection: 3
}]

//Middleware
app.use(express.json())


//End Point
// app.get("/test", (req, res) => {
//     res.status(200).json({ name: "Seenu" })
// })
// app.post("/test", (req, res) => {
//     res.status(200).json({ name: "Pankaj Kumar" })
// })

//List of All Stars
//Get all Record
app.get("/stars", (req, res) => {
    return res.status(200).json(stars)
})

//Get a particular record
app.get("/stars/:name", (req, res) => {
    let name = req.params.name
    let result = stars.filter(star => star.name === name)
    return res.status(200).json(result[0])
})

//Add a record
app.post("/stars", (req, res) => {
    const data = req.body
    stars.push(data)
    return res.status(200).json(stars)
})

//delete a record
app.delete("/stars/:sname", (req, res) => {
    const name = req.params.sname
    const newstars = stars.filter(star => star.name !== name)
    return res.status(200).json(newstars)
})

//Update the record
app.put("/stars/:name", (req, res) => {
    const name = req.params.name
    const collectionNum = req.body.collectionNum
    stars.forEach(star => {
        if (star.name === name) {
            star.collection = collectionNum
        }
    })
    return res.status(200).json(stars)
})


const PORT = 3000
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))