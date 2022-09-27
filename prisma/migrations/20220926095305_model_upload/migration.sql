-- CreateTable
CREATE TABLE "LandingSlide" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cocktail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "howTo" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,
    "cocktailID" INTEGER NOT NULL,
    CONSTRAINT "Review_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_cocktailID_fkey" FOREIGN KEY ("cocktailID") REFERENCES "Cocktail" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CocktailToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CocktailToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Cocktail" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CocktailToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CocktailToUser_AB_unique" ON "_CocktailToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CocktailToUser_B_index" ON "_CocktailToUser"("B");
