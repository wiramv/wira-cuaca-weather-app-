import { Link } from "react-router-dom";
import pp from "../img/Logo.png";
import social from "../img/social"

const Footer = () => {
  const portData = [
        {
            title : "wira-cuaca",
            link : "https://wira-cuaca.netlify.app/"
        },
        {
            title : "wira-finance",
            link : "https://wira-finance-tracker.netlify.app/"
        },
        {
            title : "name-generator",
            link : "https://wira-name-generator.netlify.app/"
        }
    ]

  const resData = [
        {
            title : "Free Code Camp",
            link : "https://www.freecodecamp.org/"
        },
        {
            title : "Padjadjaran University",
            link : "https://www.unpad.ac.id/en/"
        },
        {
            title : "SMAT Krida Nusantara",
            link : "https://www.kridanusantara.com/"
        }
    ]
    const socialData = [
      {
        title : "Facebook",
        link : "https://www.facebook.com/"
      },
      {
        title : "Instagram",
        link : "https://www.instagram.com/"
      },
      {
        title : "Linkdin",
        link : "https://www.linkedin.com/"
      },
      {
        title : "Twitter",
        link : "https://twitter.com/"
      },
      {
        title : "Youtube",
        link : "https://www.youtube.com/"
      }
    ]
  return (
    <footer className="footer">
        <div className="footer-top">
      <div className="footer-1">
        <Link className="navbar-brand">
          <img src={pp} alt="logo-wira" />
          <span>
            Wira<b>Mahatvavirya</b>
          </span>
        </Link>
        <div className="footer-portfolio foot-list">
          <div className="h5">Portfolio</div>

          {portData.map((pr, i) => (
            <a href={pr.link} key={i+1} target="_blank">{pr.title}</a>
          ))}
          
        </div>
      </div>

      <div className="footer-2">
        <div className="footer-portfolio foot-list">
          <div className="h5">About Resume</div>
          {resData.map((res, i) => (
            <a href={res.link} key={i+1} target="_blank">
              {res.title}
            </a>
          ))}
        </div>
        <div className="footer-portfolio foot-list">
          <div className="h5">Contact Me</div>
          <a href="https://wa.me/6285156600229" className="h6">
            Phone : +6285156600229
          </a>
          <a href="mailto:wiramv@gmail.com?subject=email for wira" className="h6">
            Mail : wiramv@gmail.com
          </a>
          <a className="h6">
            location : Bandung, Indonesia
          </a>
        </div>
      </div>
        </div>

        <div className="footer-line"></div>
        <div className="footer-social">

            {socialData.map((sc, i) => (
              <a key={i+1} href={sc.link} target="_blank">
                <img src={social[i]} alt={sc.title} />
              </a>
            ))}
        </div>
    </footer>
  );
};
export default Footer;
