SELECT A.COUNTRY_NAME AS 'País',
IF(B.REGION_ID = 1, 'incluído', 'não incluído') AS 'Status Inclusão'
FROM hr.countries AS A
INNER JOIN hr.regions AS B
ON (A.REGION_ID = B.REGION_ID)
ORDER BY A.COUNTRY_NAME;
