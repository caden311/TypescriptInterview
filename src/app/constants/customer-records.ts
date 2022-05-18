export type CustomerRecord = {
    FirstName: string;
    LastName: string;
    NickName: string;
    Age: number;
    City: string;
    Country: string;
    State: string;
    PinCode: number;
}
export const CUSTOMER_RECORDS: CustomerRecord[] = [
    {
        FirstName: 'Bill',
        LastName: 'Gates',
        NickName: 'Good ol\' Bill',
        Age: 66,
        City: 'Seattle',
        State: 'WA',
        Country: 'USA',
        PinCode: 2288,
    },
    {
        FirstName: 'Mark',
        LastName: 'Zuckerberg',
        NickName: 'Zuck',
        Age: 38,
        City: 'White Plains',
        State: 'NY',
        Country: 'USA',
        PinCode: 8765,
    },
    {
        FirstName: 'Ken',
        LastName: 'Thompson',
        NickName: 'Kenny',
        Age: 79,
        City: 'New Orleans',
        State: 'LA',
        Country: 'USA',
        PinCode: 4652,
    },
    {
        FirstName: 'Linus',
        LastName: 'Torvalds',
        NickName: 'Linny',
        Age: 52,
        City: 'Helsinki',
        State: '',
        Country: 'Finland',
        PinCode: 6413,
    },
    {
        FirstName: 'Niklaus',
        LastName: 'Wirth',
        NickName: 'Nik',
        Age: 88,
        City: 'Winterthur',
        State: '',
        Country: 'Switzerland',
        PinCode: 7777,
    },
]