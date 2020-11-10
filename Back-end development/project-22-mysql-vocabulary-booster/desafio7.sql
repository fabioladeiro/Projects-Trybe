SELECT 
    UCASE(CONCAT(A.FIRST_NAME, ' ', A.LAST_NAME)) AS 'Nome completo',
    B.START_DATE AS 'Data de início',
    A.SALARY AS 'Salário'
FROM
    hr.employees AS A
        INNER JOIN
    hr.job_history AS B ON A.EMPLOYEE_ID = B.EMPLOYEE_ID
WHERE
    MONTH(B.START_DATE) IN ('1' , '2', '3')
ORDER BY 1, 2;
