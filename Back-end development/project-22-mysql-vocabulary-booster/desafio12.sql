SELECT 
    CONCAT(A.FIRST_NAME, ' ', A.LAST_NAME) AS 'Nome completo funcionário 1',
    A.SALARY AS 'Salário funcionário 1',
    A.PHONE_NUMBER AS 'Telefone funcionário 1',
    CONCAT(B.FIRST_NAME, ' ', B.LAST_NAME) AS 'Nome completo funcionário 2',
    B.SALARY AS 'Salário funcionário 2',
    B.PHONE_NUMBER AS 'Telefone funcionário 2'
FROM
    hr.employees AS A
        LEFT JOIN
    hr.employees AS B ON A.JOB_ID = B.JOB_ID
WHERE
    CONCAT(A.FIRST_NAME, ' ', A.LAST_NAME) <> CONCAT(B.FIRST_NAME, ' ', B.LAST_NAME)
ORDER BY 1, 4;
