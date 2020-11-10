SELECT 
    CONCAT(B.FIRST_NAME, ' ', B.LAST_NAME) AS 'Nome completo',
    D.JOB_TITLE AS 'Cargo',
    A.START_DATE AS 'Data de início do cargo',
    C.DEPARTMENT_NAME AS 'Departamento'
FROM
    hr.job_history AS A
        INNER JOIN
    hr.employees AS B ON A.EMPLOYEE_ID = B.EMPLOYEE_ID
        INNER JOIN
    hr.jobs AS D ON A.JOB_ID = D.JOB_ID
        INNER JOIN
    hr.departments AS C ON A.DEPARTMENT_ID = C.DEPARTMENT_ID
ORDER BY 1 DESC , 2;
