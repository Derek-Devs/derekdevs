SELECT carriers.carrier_name, 
COUNT(trucks.truck_id) AS truck_count, 
AVG(carriers.rating) AS avg_rating, 
COUNT(shipments.shipment_id) AS shipment_count

FROM carriers

INNER JOIN trucks ON carriers.carrier_id = trucks.carrier_id
INNER JOIN shipments ON trucks.truckid = shipments.truck_id

GROUP BY carriers.carrier_id

ORDER BY AVG(trucks.on_time_percentage)
DESC

LIMIT 3;



