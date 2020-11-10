USE hr;
DELIMITER $$
DROP PROCEDURE IF exists buscar_media_por_cargo;
CREATE PROCEDURE buscar_media_por_cargo(IN nomeCargo VARCHAR(100))
BEGIN
SELECT ROUND(AVG(B.SALARY),2) as 'Média salarial' FROM hr.jobs as A
INNER JOIN hr.employees as B
ON A.JOB_ID = B.JOB_ID
GROUP BY A.JOB_TITLE
HAVING A.JOB_TITLE = nomeCargo;
END $$

DELIMITER ;

CALL buscar_media_por_cargo('Programmer');
