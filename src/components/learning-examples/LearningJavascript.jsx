const Person = {
    name: 'shivani',
    address: {
        line1: 'RVCE',
        line2: 'DJ Hostel',
        line3: 217,
    },
    profile:['twitter', 'linkedin','instagram'],
    printProfile: () => {
        Person.profile.map(
            profile => console.log(profile)
        )
    } 
}

export default function LearningComponent(){
    return(
        <>
            <div>{Person.name}</div>
            <div>{Person.address.line1}</div>
            <div>{Person.profile[0]}</div>
            <div>{Person.printProfile()}</div>
        </>
    )
}