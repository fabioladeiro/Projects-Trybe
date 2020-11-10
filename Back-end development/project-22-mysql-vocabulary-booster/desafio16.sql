USE hr;

DROP FUNCTION IF EXISTS `buscar_quantidade_de_empregos_por_funcionario`;
DELIMITER $$
CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
DECLARE jobsQuantity INT;
SELECT 
    COUNT(*)
FROM
    hr.employees AS A
        INNER JOIN
    hr.job_history AS B ON A.EMPLOYEE_ID = B.EMPLOYEE_ID
GROUP BY A.EMAIL
HAVING A.EMAIL = email INTO jobsQuantity;
RETURN jobsQuantity;
END $$

DELIMITER ;

SELECT buscar_quantidade_de_empregos_por_funcionario('NKOCHHAR');
