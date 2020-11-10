// DESAFIO 8
// Trocando de contexto, vamos utilizar nosso outro dataset que contém dados de empresas aéreas, suas rotas, seus voos e parcerias.

// Liste todas as parcerias da coleção air_alliances, que voam rotas com um Boing 747 ou um Airbus A380 (que estão abreviados para 747 e 380 no campo airplane na coleção air_routes, respectivamente), e descubra qual delas tem o maior número de rotas com esses aviões.

// O resultado da sua query deve ter o seguinte formato:

// { "_id" : <nome_da_alianca>, "totalRotas" : <total_de_rotas> }

db.air_alliances.find().pretty();
db.air_routes.find().limit(1).pretty();

db.air_routes
  .aggregate([
    {
      $lookup: {
        from: "air_alliances",
        localField: "airline.name",
        foreignField: "airline",
        as: "airAlliance",
      },
    },
  ])
  .pretty();

db.air_routes.aggregate([
    { $match: { airplane: { $in: ["747", "380"] } } },
    {
      $lookup: {
        from: "air_alliances",
        let: { airlineName: "$airline.name", airplane: "$airplane" },
        pipeline: [
          {
            $unwind: "$airlines",
          },
          {
            $match: {
              $expr: {
                $eq: ["$airlines", "$$airlineName"],
              },
            },
          },
        ],
        as: "deuBom",
      },
    },
    {
      $match: {
        deubom: { $size: 1 },
      },
    },
  ]).pretty();
