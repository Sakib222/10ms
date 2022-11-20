CREATE TABLE events(
ID int,
title varchar(45),
start_at datetime,
end_at datetime,
);



Insert into 10msql.events (ID, title, start_at, end_at)
Values
(1, 'Demo_1', '2022-11-17 12:00:00', '2022-11-17 17:00:00'),
(2, 'Demo_2', '2022-11-18 12:00:00', '2022-11-18 17:00:00'),
(3, 'Demo_3', '2022-11-19 12:00:00', '2022-11-19 17:00:00')

