CREATE TABLE Users(
username varchar(50),
passwords varchar(50),
email varchar(50),
first_name varchar(30),
last_name varchar(30)
);

CREATE TABLE Admins(
username varchar(50),
passwords varchar(50),
email varchar(50),
first_name varchar(30),
last_name varchar(30)
);

insert into Admins values ('jz4441', 'geohealth2024', 'jz4441@nyu.edu', 'Junwen', 'Zhong');
insert into Admins values ('akg9910', 'geohealth2024', 'akg9910@nyu.edu', 'Amanda', 'Gonzalez');
insert into Admins values ('dae7138', 'geohealth2024', 'dae7138@nyu.edu', 'Dominique', 'Elizee');
insert into Admins values ('jwh8918', 'geohealth2024', 'jwh8918@nyu.edu', 'Joel', 'Harawa');

select * from Admins;