create database DBL

use DBL


create table dbo.t_login(

	Username varchar(50) NOT NULL,
	Pass varchar(15) NOT NULL 
)

select * from  dbo.t_login

drop table dbo.t_login
insert into  dbo.t_login values ('admin','admin1234')