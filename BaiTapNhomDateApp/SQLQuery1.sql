USE master
GO
IF EXISTS (SELECT * FROM sys.databases WHERE Name='DATE_APP')
DROP DATABASE DATE_APP
GO
CREATE DATABASE DATE_APP
GO
USE DATE_APP
GO

CREATE TABLE NguoiDung(
	USERID CHAR(12) PRIMARY KEY,
	Email VARCHAR(50) NOT NULL,
	Gioitinh char(3) check(GioiTinh not like '%[^Nam,Nu]%' )  DEFAULT 'Nam',
	MatKhau VARCHAR(20) NOT NULL,
	NgaySinh DATE CHECK (NgaySinh < getdate()),
	ChieuCao int,
	HocVan VARCHAR(50),
	TonGiao VARCHAR(30),
	QuocGia VARCHAR(50),
	ThanhPho VARCHAR(50),
	SDT char(10) check (SDT not like '%[^0-9]%') NOT NULL,
	NgonNgu VARCHAR(50),
	Ten nvarchar(50) NOT NULL

)

CREATE TABLE Thich(
	LIKEID CHAR(12) PRIMARY KEY,
	USERID CHAR(12),
	USERID_liked CHAR(12),
	CONSTRAINT FK_LIKE_ND
    FOREIGN KEY (USERID)
    REFERENCES NguoiDung(USERID),
	CONSTRAINT FK_LIKEd_ND
    FOREIGN KEY (USERID_liked)
    REFERENCES NguoiDung(USERID),
)


CREATE TABLE TuongHop(
	MATCHID CHAR(12) PRIMARY KEY,
	NhanTin text,
	ThoiGianMatch DATETIME,
	LIKEID CHAR(12),
	CONSTRAINT FK_MATCH_LIKE
    FOREIGN KEY (LIKEID)
    REFERENCES Thich(LIKEID),
)