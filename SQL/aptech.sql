USE master
GO
IF EXISTS (SELECT * FROM sys.databases WHERE Name='Aptech')
DROP DATABASE Aptech
GO
CREATE DATABASE Aptech
GO
USE Aptech
GO

CREATE TABLE Classes(
	CName char(6),
	Teacher varchar(30),
	TimeSlot varchar(30),
	Class int,
	Lab int
)

CREATE UNIQUE CLUSTERED INDEX MyClusteredIndex ON Classes(CName)
WITH(Pad_index = on, FillFactor = 70, Ignore_Dup_key = on)

CREATE INDEX TeacherIndex ON Classes(teacher)

DROP INDEX Classes.TeacherIndex

DROP INDEX Classes.MyClusteredIndex

CREATE UNIQUE CLUSTERED INDEX MyClusteredIndex ON Classes(CName)
WITH(DROP_EXISTING = on , ALLOW_ROW_LOCKS = on ,ALLOW_PAGE_LOCKS=On,MAXDOP=2)

CREATE INDEX ClassLabIndex ON Classes(Class,lab)

EXEC sys.sp_helpindex N'Classes'

