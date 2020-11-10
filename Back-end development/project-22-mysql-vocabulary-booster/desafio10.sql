SELECT 
    products.ProductName AS 'Produto',
    MIN(order_details.Quantity) AS 'Mínima',
    MAX(order_details.Quantity) AS 'Máxima',
    ROUND(AVG(order_details.Quantity), 2) AS 'Média'
FROM
    w3schools.order_details AS order_details
        LEFT JOIN
    w3schools.products AS products ON order_details.ProductID = products.ProductID
GROUP BY products.ProductName
HAVING AVG(order_details.Quantity) > 20.00
ORDER BY 4 , 1;
