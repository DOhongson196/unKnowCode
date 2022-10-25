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
	SDT char(10) check (SDT not like '%[^0-9]%') NOT NULL,
	MatKhau VARCHAR(20) NOT NULL,
	TenTaiKhoan  VARCHAR(20) NOT NULL
)

CREATE TABLE HoSoNguoiDung(
	USERPID CHAR(12) PRIMARY KEY,
	Gioitinh char(3) check(GioiTinh not like '%[^Nam,Nu]%' )  DEFAULT 'Nam' NOT NULL,
	NgaySinh DATE CHECK (NgaySinh < getdate()) NOT NULL,
	ChieuCao Char(10) NOT NULL,
	HocVan VARCHAR(50) NOT NULL,
	TonGiao VARCHAR(30) NOT NULL,
	QuocGia VARCHAR(50) NOT NULL,
	ThanhPho VARCHAR(50) NOT NULL,
	NgonNgu VARCHAR(50) NOT NULL,
	Ten nvarchar(50) NOT NULL,
	TinhTrangQuanHe VARCHAR(20) NOT NULL,
	USERID CHAR(12),
	CONSTRAINT FK_HSND_ND
    FOREIGN KEY (USERID)
    REFERENCES NguoiDung(USERID),
)

CREATE TABLE Thich(
	LIKEID CHAR(12) PRIMARY KEY,
	USERPID CHAR(12),
	USERPID_liked CHAR(12),
	CONSTRAINT FK_LIKE_HSND
    FOREIGN KEY (USERPID)
    REFERENCES HoSoNguoiDung(USERPID),
	CONSTRAINT FK_LIKEd_ND
    FOREIGN KEY (USERPID_liked)
    REFERENCES HoSoNguoiDung(USERPID),
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