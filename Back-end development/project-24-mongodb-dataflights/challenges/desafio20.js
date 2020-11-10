// Retorne o vooId do primeiro voo em que o campo rtk não exista.
db.voos.find({"rtk": {$exists: 0}}, {"vooId": 1, "_id": 0}).limit(1);
