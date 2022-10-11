import AccImg from "../img/accImg"


const AboutAcc = () => {
    return(
    <div className="about-acc">
        <div className="about-acc_title h4">Acchievement</div>
        <div className="about-acc-cards">
          <div className="card">
            <img src={AccImg[0]} alt="achievement" />
            <div className="h4">50+ Worldwide Freelance Clients</div>
            <p>
              more than 50 clients from all around the world for design and web
              development project
            </p>
          </div>
          <div className="card">
            <img src={AccImg[1]} alt="Client " />
            <div className="h4">250+ Graphic & Web Development Projects</div>
            <p>
              more than 250 project for logo design, web and landing page design
              and web development both static and using framework like reactmore
              than 50 clients from all around the world for design and web
              development project
            </p>
          </div>
          <div className="card">
            <img src={AccImg[2]} alt="Time" />
            <div className="h4">2 Years of Experience</div>
            <p>
              more than 50 clients from all around the world for design and web
              development project2 years of both web development and graphic
              design freelancing experience
            </p>
          </div>
        </div>
        <div className="about-para">
            <p>And with my past experience as marketing management at a briquette manufacturing company called Cv. Panji Morang, I learned a valuable experience called leadership and teamwork. Also since my previous company had me handling many overseas clients, it helped me in speaking with people from all over the world and helped me speak in English better. My previous job also helped me to gain a better time management ability</p>
            <p>
I also have some good achievements from when I was still in college. here are my achievement</p>
        </div>
        <div className="acc">
            <div className="h4">
                7th Trisakti Economic Business Fair and Competition 2011
            </div>
            <div>Trisakti University - 2011</div>
            <div className="h6">“1st place”</div>
        </div>
        <div className="acc">
            <div className="h4">
                Moslem Entrepreneur Awards 2011
            </div>
            <div>Lampung University - 2011</div>
            <div className="h6">“3rd place”</div>
        </div>
      </div>)
}
export default AboutAcc