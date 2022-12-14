const landingSlides = [
    {
      "id": '0',
      "title": "Welcome to Cocktails on Draft!",
      "text": "Are you thirsty? Have you tried already all pubs and winery nearby? Then it's time to have some adventures with cocktails. We would like to help a bit for beginners why cocktails are so much fun. Browse our page and found you recipes which are easy to do at home. Let the adventure begin!"
    },
    {
      "id": '1',
      "title": "Cocktail gallery",
      "text": "We have gathered some cocktails which is easy to create but hard to master. Check out our collection and learn more. Mark up your favorites and it will be save to your account."
    },
    {
      "id": '2',
      "title": "Favorites section",
      "text": "Have you checked our cocktails and found some interesting? You can reach them here and save yourselves some time. Life is too short to spend it on searching when you can make a cocktail instead."
    }
  ];
  
  const cocktails = [
    {
      "id": '0',
      "name": "Margarita",
      "howTo": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
      "ingredients": "1 1/2 oz Tequila, 1/2 oz Triple sec, 1 oz Lime juice, Salt",
      "image": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      "favorite": false,
      "userFav": ['0', '1']
    },
    {
      "id": '1',
      "name": "Bloody Mary",
      "howTo": "Stirring gently, pour all ingredients into highball glass. Garnish.",
      "ingredients": "1 1/2 oz Vodka, 3 oz Tomato juice, 1 dash Lemon juice, 1/2 tsp Worcestershire sauce, 2-3 drops Tabasco sauce, 1 wedge Lime",
      "image": "https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg",
      "favorite": false,
      "userFav": ['0', '1']
    },
    {
      "id": '2',
      "name": "Daiquiri",
      "howTo": "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
      "ingredients": "1 1/2 oz Vodka, 3 oz Tomato juice, 1 dash Lemon juice, 1/2 tsp Worcestershire sauce, 2-3 drops Tabasco sauce, 1 wedge Lime",
      "image": "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
      "favorite": false,
      "userFav": ['0', '1']
    },
    {
      "id": '3',
      "name": "Rum Punch",
      "howTo": "Mix all ingredients in a punch bowl and serve.",
      "ingredients": "mikey bottle Rum, large bottle Ginger ale, 355 ml frozen Fruit punch, 355 ml frozen Orange juice, crushed Ice",
      "image": "https://www.thecocktaildb.com/images/media/drink/wyrsxu1441554538.jpg",
      "favorite": false,
      "userFav": ['0', '1']
    },
    {
      "id": '4',
      "name": "Gin Fizz",
      "howTo": "Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.",
      "ingredients": "2 oz Gin, Juice of 1/2 Lemon, 1 tsp Powdered sugar, Carbonated water",
      "image": "https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
      "favorite": true,
      "userFav": ['1', '2']
    },
    {
      "id": '5',
      "name": "Old Fashioned",
      "howTo": "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\r\nFill the glass with ice cubes and add whiskey.\r\n\r\nGarnish with orange twist, and a cocktail cherry.",
      "ingredients": "4.5 cL Bourbon, 2 dashes Angostura bitters, 1 cube Sugar, 1 dash Water",
      "image": "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
      "favorite": false,
      "userFav": ['1', '2']
    },
    {
      "id": '6',
      "name": "Moscow Mule",
      "howTo": "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.",
      "ingredients": "2 oz Vodka, 2 oz Lime juice, 8 oz Ginger ale",
      "image": "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
      "favorite": false,
      "userFav": ['1', '2']
    },
    {
      "id": '7',
      "name": "Ramos Gin Fizz",
      "howTo": "Prepare all the ingredients on the counter to be able to work well and quickly, especially the cream and egg white.\r\n\r\nPour all the ingredients into a shaker.\r\n\r\nShake vigorously for 1 minute: cream and egg white must be mixed perfectly, so don't rush.\r\n\r\nNow open the shaker and put some ice and shake for 1-2 minutes. It depends on how long you can resist!\r\n\r\nPour into a highball glass, add a splash of soda and garnish to taste.\r\n\r\nRamos Gin Fizz was once drunk as an invigorating drink or even as a breakfast, try it as an aperitif and after dinner and you will discover a little gem now lost.",
      "ingredients": "4.5 cL Gin, 3 cl Lemon Juice, 3 cl Sugar Syrup, 6 cl Cream, 1 pcs Egg White, 2 drop Vanilla extract, 2 cl Soda Water",
      "image": "https://www.thecocktaildb.com/images/media/drink/967t911643844053.jpg",
      "favorite": true,
      "userFav": ['1', '2']
    },
    {
      "id": '8',
      "name": "Gin Tonic",
      "howTo": "Fill a highball glass with ice, pour the gin, top with tonic water and squeeze a lemon wedge and garnish with a lemon wedge.",
      "ingredients": "4 cL Gin, 10 cL Tonic Water, 1 Slice Lemon Peel, Ice",
      "image": "https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg",
      "favorite": false,
      "userFav": ['0', '2']
    },
    {
      "id": '9',
      "name": "Bahama Mama",
      "howTo": "Add 2 parts club soda or more or less to taste.\r\n\r\nMix it all together and pour over a bunch of ice. Drink with a straw.",
      "ingredients": "3 parts Rum, 1 part Dark Rum, 1 part Banana liqueur, 1 part Grenadine, 2 parts Pineapple Juice, 2 parts Orange Juice, 1 part Sweet and Sour",
      "image": "https://www.thecocktaildb.com/images/media/drink/tyb4a41515793339.jpg",
      "favorite": true,
      "userFav": ['0', '2']
    }
  ];
  
  const users = [
    {
      "id": '0',
      "name": "John Doe",
      "email": "john.doe@freemail.hu",
      "age": 83
    },
    {
      "id": '1',
      "name": "Jane Doe",
      "email": "jane.doe@freemail.hu",
      "age": 22
    },
    {
      "id": '2',
      "name": "Scooby Doo",
      "email": "scooby.doo@citromail.hu",
      "age": 35
    }
  ];

  const reviews = [
    {
      "id": "0",
      "title": "Absolute the best!",
      "text": "Never had anything like that! Gives an absolute twist to your night!",
      "postedBy": '2',
      "cocktailID": '6'
    },
    {
      "id": "1",
      "title": "Totally average",
      "text": "Good but nothing special.",
      "postedBy": '1',
      "cocktailID": '9'
    },
    {
      "id": "2",
      "title": "Hard to create",
      "text": "Very complex but worth the trial!",
      "postedBy": '0',
      "cocktailID": '8'
    }
  ];

  export const db = {
    cocktails,
    landingSlides,
    users,
    reviews
  }