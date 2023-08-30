let users = [
    {id: 1, nome: "Igor Simao", email: "igor.simao@gmail.com"},
    {id: 2, nome: "Fulano", email: "fulano@gmail.com"}
]

module.exports = {
    getAllUsers : function(req, res, next){
        res.setHeader("content-type", "application/json");
        res.status(200).json(users)
    }
}