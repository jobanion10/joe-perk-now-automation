module.exports = {
    login:{
        email:{
            goodData1:'email@poo.com',
            badData1:'whydoes@adamsmell.com'    
        },
        password:{
            goodData1:'e',
            badData1:"sigh"
        }
    },
    createAnAccount: {
        workEmail: {
            goodData: {
                transaction1: 'test17@gmail.com',
                transaction2: 'test11@hotmail.com',
                transaction3: 'test@devmountain.com'
            },
            badData: {
                transaction1: 'test@poo.com',
                transaction2: '',
                transaction3: 'testing@123.com'
            }
        },
        firstName: {
            goodData: {
                transaction1: 'Joe',
                transaction2: 'Sean 3rd',
                transaction3: "O'Toole"
            },
            badData: {
                transaction1: ''
            }
        },
        lastName: {
            goodData: {
                transaction1: "O'Banion"
            },
            badData: {
                transaction1: ""
            }
        },
        password: {
            goodData: {
                transaction1: "1234"
            },
            badData: {
                transaction1: ''
            }
        },
        zipcode: {
            goodData: {
                transaction1: '84404'
            },
            badData: {
                transaction1: ''
            }
        },
        code1: {
            goodData: {
                transaction1: '0'
            },
            badData: {
                transaction1: 'd'
            }
        },
        code2: {
            goodData: {
                transaction1: '0'
            },
            badData: {
                transaction1: 'a'
            }
        },
        code3: {
            goodData: {
                transaction1: '0'
            },
            badData: {
                transaction1: 'm'
            }
        },
        code4: {
            goodData: {
                transaction1: '3'
            },
            badData: {
                transaction1: 'n'
            }
        },
    },
    vendorsTested: {
        Food1: {
            deals: {
                deal1Name: "3 20% off",
                deal1Description:'3 Come in today for 20% off Food 1'
            },
            phone: 'tel:123-456-7890',
            website: 'goo.gl/2xj7bs',
            locationUrl:'https://maps.google.com/?q=123%20NJHUYTG%20St%20KLN%20UT',
            locationLine1:'123 NJHUYTG St',
            locationLine2:'KLN, UT 84043',
            hoursLine1: 'Weekday hours: 9-5',
            hoursLine2: 'Saturday hours: 9-5',
            hoursLine3: 'Sunday hours: Closed'
        },
        Concierge1: {
            deals: {
                deal1Name: "2 50% off",
                deal1Description:'2 Come in today for 50% off Concierge 2'
            },
            phone: 'tel:123-456-7890',
            website: 'goo.gl/2xj7bs',
            locationUrl:'https://maps.google.com/?q=123%20NJHUYTG%20St%20KLN%20VT',
            locationLine1:'123 NJHUYTG St',
            locationLine2:'KLN, VT 84043',
            hoursLine1: 'Weekday hours: 9-5',
            hoursLine2: 'Saturday hours: 9-5',
            hoursLine3: 'Sunday hours: Closed'
        },
        Services1: {
            deals: {
                deal1Name: "5 50% off",
                deal1Description:'5 Come in today for 50% off Services 1'
            },
            phone: 'tel:123-456-7890',
            website: 'goo.gl/2xj7bs',
            locationUrl:'https://maps.google.com/?q=123%20NJHUYTG%20St%20KLN%20UT',
            locationLine1:'123 NJHUYTG St',
            locationLine2:'KLN, UT 84043',
            hoursLine1: 'Weekday hours: 9-5',
            hoursLine2: 'Saturday hours: 9-5',
            hoursLine3: 'Sunday hours: Closed'
        },
        Fun1: {
            deals: {
                deal1Name: "7 20% off",
                deal1Description: '7 Come in today for 20% off Fun'
            },
            phone: 'tel:123-456-7890',
            website: 'goo.gl/2xj7bs',
            locationUrl:'https://maps.google.com/?q=123%20NJHUYTG%20St%20KLN%20UT',
            locationLine1:'123 NJHUYTG St',
            locationLine2:'KLN, UT 84043',
            hoursLine1: 'Weekday hours: 9-5',
            hoursLine2: 'Saturday hours: 9-5',
            hoursLine3: 'Sunday hours: Closed'
        }
    }
}