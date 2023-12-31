# Mocca Tester for ComputerRegister Class

## Goal: Create and test ComputerStorage class

Create a class `ComputerStorage` for computer data. Data storage is passed to the constractor as a parameter. Data is in a json array. Use the following json array as default storage.

## Technologies

- JavaScript
- Nodejs
- Mocha
- Chai

### computers.json

```json
[
  {
    "computerNumber": 1,
    "name": "Xunil 4.7",
    "type": "server",
    "price": 10,
    "manufacturer": "Xyz computing",
    "colors": ["yellow", "white", "green"],
    "extras": {
      "consumption": "C",
      "comments": "no comments",
      "model": "XXL"
    }
  },
  {
    "computerNumber": 2,
    "name": "Xunil 4.7",
    "type": "gameover",
    "price": 200,
    "manufacturer": "Leila Hökki & co",
    "colors": ["red", "green", "blue"],
    "extras": {
      "consumption": "D",
      "comments": "-",
      "model": "silver"
    }
  },
  {
    "computerNumber": 3,
    "name": "King 3000",
    "type": "gameover",
    "price": 36,
    "manufacturer": "Leila Hökki & co",
    "colors": ["black", "orange", "blue"],
    "extras": {
      "consumption": "A+",
      "comments": "no comments",
      "model": "gold"
    }
  },
  {
    "computerNumber": 4,
    "name": "BigFlop Mark II",
    "type": "laptop",
    "price": 10,
    "manufacturer": "Home Computer Depot",
    "colors": ["black", "orange", "red"],
    "extras": {
      "consumption": "D",
      "comments": "high quality",
      "model": "chrome"
    }
  },
  {
    "computerNumber": 5,
    "name": "Cera 2400",
    "type": "tabletop",
    "price": 10,
    "manufacturer": "Ocean",
    "colors": ["black", "orange", "green"]
  }
]
```

## Tests

### Test 1: Constructor Testing

#### **constructor(jsondata)**

Initializes ComputerStorage object

> Parameters:
>
> > The data storage json object is passed as a parameter to the constructor.

> Returns:
>
> >

> Throws:
>
> > If the parameter is missing, constructor throws an error `'data storage missing'`

### Test 2: **has_extras(searchKey)** Method test

Method checks based on computerNumber if the computer has `extras` or not.

> Parameters:
>
> > searchKey is the computerNumber to be searched

> Returns:
>
> > Returns true if the computer matching the searchKey has `extras` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

> Throws:
>
> >

### Test 3: **get_total_price_of_computers_by_type(searchValue)** Method Test

returns the total price of all computers that have the same type than the given searchValue

> Parameters:
>
> > searchValue is the type of the computer to be searched

> Returns:
>
> > total cumulative price of computers matching the searchValue

> Throws:
>
> > if no computer with the given searchValue is found throws an exeption `'nothing found with given type'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### Test 4: **get_Price(computerNumber)** Method Test

get the price of the computer

> Parameters:
>
> > computerNumber of the computer which price is to be returned

> Returns:
>
> > returns the price of a computer matching the given computerNumber

> Throws:
>
> > if no computer with the given computerNumber is found throws an exeption `'nothing found with given number'`

### Test 5: **get_All_computers_By_type(searchValue)** Method Test

searches computers with given type

> Parameters:
>
> > searchValue is the type of the computer to be searched

> Returns:
>
> > Returns an array of computer objects of given type. If no computer of given type is found, returns an empty array.

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### Test 6: **get_All_computers_By_color(searchValue)** Method Test

searches computers with given color

> Parameters:
>
> > searchValue is the the color of the computer to be searched

> Returns:
>
> > Returns an array of computerNumbers that are available with given color. If no computer with given color is found, returns an empty array. Also if parameter is missing an empty array is returned.

> Throws:
>
> >

### Test 7: **get_a_computer_matching_computerNumber(searchKey)** Method Test

Method searches the datastorage for an object with given searchKey. Key is unique.

> Parameters:
>
> > searchKey is the primary key computerNumber of the computer

> Returns:
>
> > returns the computer object matching the computerNumber or null if there is no match

> Throws:
>
> > if parameter searchKey is missing, throws an exception `'missing parameter'`

### Test 8: **get_All_computers_By_manufacturer(searchValue)** Method Test

searches computers with given manufacturer

> Parameters:
>
> > searchValue is the manufacturer of the computer to be searched

> Returns:
>
> > Returns an array of computer objects of given manufacturer. If no computer of given manufacturer is found, returns an empty array.

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown
