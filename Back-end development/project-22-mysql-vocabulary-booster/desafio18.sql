USE hr;
DELIMITER $$

DROP FUNCTION IF EXISTS `exibir_quantidade_pessoas_contratadas_por_mes_e_ano`;

CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(mes INT, ano INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE hireQuantity INT;
SELECT COUNT(HIRE_DATE) FROM hr.employees as employees
WHERE YEAR(employees.HIRE_DATE) = ano AND MONTH(employees.HIRE_DATE) = mes INTO hireQuantity;
RETURN hireQuantity;
END $$

DELIMITER ;

SELECT exibir_quantidade_pessoas_contratadas_por_mes_e_ano(6, 1987);
