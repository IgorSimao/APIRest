let id = 2;

let users = [
    {id: 1, nome: "Igor Simao", email: "igor.simao@gmail.com"},
    {id: 2, nome: "Fulano", email: "fulano@gmail.com"}
]

module.exports = {
    getAllUsers : function(req, res, next){
        res.setHeader("content-type", "application/json");
        res.status(200).json(users)
    },
    getUserById : function(req, res, next){
        let id = req.params.id;
        let result = users.filter(elemento => elemento.id == id);

        if(result.length != 0){
            return res.status(200).json(result);

        }else{
            return res.status(404).json({error: "Usuário não encontrado!"})
        }
    },
    addUser : function(req, res, next){
        let nome = req.body.name;
        let email = req.body.email;
        let user = {
            id: ++id,
            nome: nome,
            email: email
        }
        
        users.push(user);

        return res.status(201).json(user);
    },
    deleteUser : function(req, res, next) {
        let id = req.params.id;
        for(i = 0; i < users.length; i ++){
            let user = users[i];

            if(user.id == id){
                users.splice(i, 1);
                return res.status(200).json({
                    msg: "Usuário Removido!"
                })
            }
        }
        return res.status(404).json({error: "Usuário não encontrado!"})
    }
}