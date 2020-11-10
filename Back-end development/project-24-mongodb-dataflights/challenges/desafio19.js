// Retorne o vooId do primeiro voo em que o campo litrosCombustivel exista.
db.voos.find({"litrosCombustivel": {$exists: true}}, {"vooId": true, "_id": false}).limit(1);
