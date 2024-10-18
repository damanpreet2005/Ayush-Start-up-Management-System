CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    Email NVARCHAR(100),
    Mobile NVARCHAR(15),
    Password NVARCHAR(50),
    Address NVARCHAR(200),
    State NVARCHAR(50),
    District NVARCHAR(50)
);