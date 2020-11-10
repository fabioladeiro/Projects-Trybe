USE hr;

DROP PROCEDURE IF exists exibir_historico_completo_por_funcionario;
DELIMITER $$
CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN email VARCHAR(100))
BEGIN
SELECT 
    CONCAT(employees.FIRST_NAME,' ',employees.LAST_NAME) AS 'Nome completo',
    departments.DEPARTMENT_NAME AS 'Departamento',
    jobs.JOB_TITLE AS 'Cargo'
FROM hr.job_history AS history
INNER JOIN hr.employees AS employees ON history.EMPLOYEE_ID = employees.EMPLOYEE_ID
INNER JOIN hr.departments AS departments ON history.DEPARTMENT_ID = departments.DEPARTMENT_ID
INNER JOIN hr.jobs AS jobs ON history.JOB_ID = jobs.JOB_ID
WHERE employees.EMAIL = email
ORDER BY `Departamento`, `Cargo`;
END $$

DELIMITER ;

CALL exibir_historico_completo_por_funcionario('NKOCHHAR');
