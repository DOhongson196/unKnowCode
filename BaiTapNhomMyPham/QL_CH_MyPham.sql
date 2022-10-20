USE master
GO
IF EXISTS (SELECT * FROM sys.databases WHERE Name='QL_CH_MyPham')
DROP DATABASE QL_CH_MyPham
GO
CREATE DATABASE QL_CH_MyPham
GO
USE QL_CH_MyPham
GO


CREATE TABLE NhanVien(
	Ma_NV char(8) primary key,
	Ten_NV nvarchar(50) NOT NULL,
	SDT_NV char(10) check (SDT_NV not like '%[^0-9]%') NOT NULL,
	SoCMND char(9) check (SoCMND not like '%[^0-9]%'),
	GioiTinh char(1) check(GioiTinh not like '%[^F,M]%' )  DEFAULT 'M',
	NgayThem DATE,
	NgaySua DATE,
	NgayXoa DATE,
	DiaChi nvarchar(100),
	VaiTro nvarchar(50),
)



CREATE TABLE SanPham(
	Ma_SP char(10) primary key,
	Ten_SP nvarchar(30) NOT NULL,
	MieuTa_SP nvarchar(100),
	HSD_SP DATE CHECK (HSD_SP < getdate()),
	SoLuong_SP int NOT NULL,
	TenLoai_SP nvarchar(30),
	Gia_SP MONEY,
	NgayThem DATE,
	NgaySua DATE,
	NgayXoa DATE,

)



CREATE TABLE KhachHang(
	Ma_KH int primary key identity,
	Ten_KH nvarchar(50) NOT NULL,
	SDT_KH char(10) check (SDT_KH not like '%[^0-9]%') NOT NULL,
	SoCMND char(9) check (SoCMND not like '%[^0-9]%'),
	GioiTinh char(1) check(GioiTinh not like '%[^F,M]%' )  DEFAULT 'M',
	DiaChi nvarchar(100),
	NgayThem DATE,
	NgaySua DATE,
	NgayXoa DATE,
)


CREATE TABLE DonHang(
	Ma_DH int primary key IDENTITY,
	NgayXuat_DH DATE,
	NgayThem DATE,
	NgaySua DATE,
	NgayXoa DATE,
	GiaBan money,
	SoLuongBan int check(SoLuongBan>1),
	Ma_SP char(10),
	Ma_KH int,
	Ma_NV char(8),
	CONSTRAINT FK_DH_SP
    FOREIGN KEY (Ma_SP)
    REFERENCES SanPham(Ma_SP),
	CONSTRAINT FK_DH_KH
    FOREIGN KEY (Ma_KH)
    REFERENCES KhachHang(Ma_KH),
	CONSTRAINT FK_DH_NV
    FOREIGN KEY (Ma_NV)
    REFERENCES NhanVien(Ma_NV)

)