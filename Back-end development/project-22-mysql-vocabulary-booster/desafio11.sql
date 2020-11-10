SELECT 
    ContactName AS 'Nome',
    Country AS 'País',
    (SELECT 
            (COUNT(Country) - 1)
        FROM
            w3schools.customers AS B
        WHERE
            A.Country = B.Country
        GROUP BY Country) AS 'Número de compatriotas'
FROM
    w3schools.customers AS A
HAVING `Número de compatriotas`> 0
ORDER BY ContactName;
