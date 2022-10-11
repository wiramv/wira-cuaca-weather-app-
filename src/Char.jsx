import charImg from "./img/charImg"

const Char = () => {

    const charSet = [
        {
            title: "Bilingual",
            text: "With my experience in handling international clients and my current Toefl score which is 580, I'm certain that I can speak in English almost at a native level"
        },
        {
            title: "Team Works",
            text: "My past experience in working as Marketing team has taught me the importance of team work and I'm ready to do it on my next job"
        },
        {
            title: "Time Management",
            text: "With my previous work as a frelance web developer and designer i used to do many jobs with a tight deadline, even more so, sometimes i have to do it on my own, thus this experience is teaching me how to manage my time efficiently"
        },
        {
            title: "Leadership",
            text: "Having Past Experince as Marketing Leader and also a team leader in islamic organization on my college have taught about how to behave as a leader and to lead a team as their leader"
        },
        {
            title: "Fast Learner",
            text: "My programming and designing capabilites are proof enough that I have a great dedication in learning anything new despite the lack of formal education on both."
        },
        {
            title: "Adapteble",
            text: "Since I have many experience both as office employee and as freelance I can easily adapt to any working condition in a relatively short time"
        }
    ]
    return (
        <div className="char main-blur">
            <div className="h3">Character</div><br /><br />
            {charSet.map((char, index) => (
                <div className="char-set" key={index + 1}>
                    <img src={charImg[index]} alt={char.title} />
                    <div className="char-set__text">
                        <div className="h4">{char.title}</div>
                        <p>{char.text}</p>
                        <div className="char-set__text-line"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Char