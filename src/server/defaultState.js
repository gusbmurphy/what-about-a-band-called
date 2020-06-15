import md5 from "md5";

export const defaultState = {
    // session: {
    //     authenticated: false
    // },
    users: [{
        id: "U1",
        name: "Jordan",
        passHash: md5("goodguy"),
        modifications: [
            {bandID: "B1", value: -1, isFlag: false},
            {bandID: "B2", value: 1, isFlag: false},
            {bandID: "B3", value: 1, isFlag: true},
            {bandID: "B4", value: 1, isFlag: false}
        ]
    },
    {
        id: "U2",
        name: "David",
        passHash: md5("wawa"),
        modification: [
            {bandID: "B2", value: 1, isFlag: true},
            {bandID: "B4", value: 1, isFlag: true},
            {bandID: "B5", value: 1, isFlag: true}
        ]
    },
    {
        id: "U3",
        name: "Brock",
        passHash: md5("hello"),
        modification: [
            {bandID: "B2", value: 1, isFlag: true},
            {bandID: "B4", value: 1, isFlag: true},
            {bandID: "B5", value: 1, isFlag: true}
        ]
    }],
    bands: [{
        id: "B1",
        owner: "U1",
        name: "Normal Freaks",
        score: -1,
        flags: 0,
        modifications: [
            {userID: "U1", value: -1, isFlag: false}
        ]
    },
    {
        id: "B2",
        owner: "U1",
        name: "Good Boy",
        score: 3,
        flags: 0,
        modifications: [
            {userID: "U1", value: 1, isFlag: false},
            {userID: "U2", value: 1, isFlag: false},
            {userID: "U3", value: 1, isFlag: false}
        ]
    },
    {
        id: "B3",
        owner: "U1",
        name: "Hydro Lovers",
        score: 0,
        flags: 1,
        modifications: [
            {userID: "U1", value: 1, isFlag: true}
        ]
    },
    {
        id: "B4",
        owner: "U2",
        name: "Guitar Makers",
        score: 3,
        flags: 0,
        modifications: [
            {userID: "U1", value: 1, isFlag: false},
            {userID: "U2", value: 1, isFlag: false},
            {userID: "U3", value: 1, isFlag: false}
        ]
    },
    {
        id: "B5",
        owner: "U2",
        name: "George Bush Historical Society",
        score: 2,
        flags: 0,
        modifications: [
            {userID: "U2", value: 1, isFlag: false},
            {userID: "U3", value: 1, isFlag: false}
        ]
    }]
}