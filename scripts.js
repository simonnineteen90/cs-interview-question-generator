console.log('hello world')

let questions = {
    comps : ["Manage a Quality Service", "Develope your Self and Others", "Make an Effective Decision", " show Leadership"],
    compDetails: [
        ["Understand customers needs and expectations", 
        "Set clear plans and prioritise tasks that meet the project goals",
        "Explain what can be done",
        "Keep colleagues and stakeholders up to date with progress",
        "Identify problems and communicate and deal with them ",
        "Good customer service"],
        
        ["Identify gaps in own and teams skills and knowledge",
        "Set and meet development objectives",
        "Seek new learning opportunities",
        "Support the development plans of other colleagues , consider diversity and building inclusive culture",
        "Consider all team members contributions and delegate tasks where possible",
        "Encourage and take onboard feedback"],

        ["Take responsibility for making decisions and do it quickly",
        "Talk to SME or more experienced staff to get advice when unsure",
        "Explain reasoning behind decisions",
        "Show that all options have been considered, risks and bigger picture, end users/ accessibility"],

        ["Show pride and passion for your work",
        "Inclusive engagement with rest of team",
        "Understand own responsibility and how it affects big picture",
        "Proactively role model and promote inclusivity",
        "Give praise and credit to team and stakeholders where appropriate"],
    
    ],
    variants: ["with external stake holders", "in difficult circumstances", "whilst under pressure", "whilst working to a deadline", "as a result of something going wrong"]
}

let randomiser = () => {
    let randomComp = Math.floor(Math.random() * questions.comps.length)
    let randomVariant = Math.floor(Math.random() * questions.variants.length)
    let el = document.getElementById('output')
    let str = '<ul>'

    questions.compDetails[randomComp].forEach(function(detail){
        str += `<li> ${detail} </li>`
    })

    el.innerText = `Tell me about a time when you had to ${questions.comps[randomComp]} ${questions.variants[randomVariant]}`
    document.getElementById("details").innerHTML = str
} 

let myButton = document.getElementById('myButton')
myButton.addEventListener('click',randomiser)

// a test 
