USE master
GO
IF EXISTS (SELECT * FROM sys.databases WHERE Name='QL_CH_MyPham')
DROP DATABASE QL_CH_MyPham
GO
CREATE DATABASE QL_CH_MyPham
GO
USE QL_CH_MyPham
GO

CREATE TABLE CuaHang(
	Ten_CH char(20) primary key,
	DiaChi_CH nvarchar(50),
	SDT_CH char(10) check (SDT_CH not like '%[^0-9]%') 
)

CREATE TABLE NhanVien(
	Ma_NV char(8) primary key,
	Ten_NV nvarchar(50) NOT NULL,
	SDT_NV char(10) check (SDT_NV not like '%[^0-9]%') NOT NULL,
	SoCMND char(9) check (SoCMND not like '%[^0-9]%'),
	GioiTinh char(1) check(GioiTinh not like '%[^F,M]%' )  DEFAULT 'M',
	DiaChi nvarchar(100),
	Ten_CH char(20),
	CONSTRAINT FK_NV_CH
    FOREIGN KEY (Ten_CH)
    REFERENCES CuaHang(Ten_CH),
)

CREATE TABLE SanPham(
	Ma_SP char(10) primary key,
	Ten_SP nvarchar(30) NOT NULL,
	MieuTa_SP nvarchar(100),
	HSD_SP DATE CHECK (HSD_SP < getdate()),
	SoLuong_SP int NOT NULL,
	Gia_SP MONEY,
	Ten_CH char(20),
	CONSTRAINT FK_SP_CH
    FOREIGN KEY (Ten_CH)
    REFERENCES CuaHang(Ten_CH),

)

CREATE TABLE LoaiSanPham(
	MaLoai_SP char(10) primary key,
	TenLoai_SP nvarchar(30) NOT NULL,
	Ma_SP char(10),
	Ma_NV char(8),
	CONSTRAINT FK_LSP_SP
    FOREIGN KEY (Ma_SP)
    REFERENCES SanPham(Ma_SP),
	CONSTRAINT FK_LSP_NV
    FOREIGN KEY (Ma_NV)
    REFERENCES NhanVien(Ma_NV),

)

CREATE TABLE KhachHang(
	Ma_KH int primary key identity,
	Ten_KH nvarchar(50) NOT NULL,
	SDT_KH char(10) check (SDT_KH not like '%[^0-9]%') NOT NULL,
	SoCMND char(9) check (SoCMND not like '%[^0-9]%'),
	GioiTinh char(1) check(GioiTinh not like '%[^F,M]%' )  DEFAULT 'M',
	DiaChi nvarchar(100),
)


CREATE TABLE HoaDon(
	Ma_HD int primary key IDENTITY,
	NgayXuat_HD DATE,
	GiaBan money,
	SoLuongBan int check(SoLuongBan>1),
	MaLoai_SP char(10),
	Ma_KH int,
	CONSTRAINT FK_HD_LSP
    FOREIGN KEY (MaLoai_SP)
    REFERENCES LoaiSanPham(MaLoai_SP),
	CONSTRAINT FK_HD_KH
    FOREIGN KEY (Ma_KH)
    REFERENCES KhachHang(Ma_KH),

)