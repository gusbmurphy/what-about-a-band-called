import md5 from "md5";

export const defaultState = {
    // session: {
    //     authenticated: false
    // },
    users: [{
        id: "U1",
        name: "Jordan",
        passHash: md5("goodguy")
    },
    {
        id: "U2",
        name: "David",
        passHash: md5("wawa")
    },
    {
        id: "U3",
        name: "Brock",
        passHash: md5("hello")
    }],
    bands: [{
        id: "B1",
        owner: "U1",
        name: "Normal Freaks",
        score: -1,
        flags: 0
    },
    {
        id: "B2",
        owner: "U1",
        name: "Good Boy",
        score: 3,
        flags: 0
    },
    {
        id: "B3",
        owner: "U1",
        name: "Hydro Lovers",
        score: 0,
        flags: 1
    },
    {
        id: "B4",
        owner: "U2",
        name: "Guitar Makers",
        score: 3,
        flags: 0
    },
    {
        id: "B5",
        owner: "U2",
        name: "George Bush Historical Society",
        score: 2,
        flags: 0
    }]
}