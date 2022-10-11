import eduImg from "./img/eduImg";

const Educations = () => {
  const sekolah = [
    {
      title: "Padjadjaran University",
      text: "Business & Management",
      link : "https://www.unpad.ac.id/en/"
    },
    {
      title: "SMAT Krida Nusantara",
      text: "Highschool",
      link : "https://www.kridanusantara.com/"
    },
  ];
  return (
    <div className="edu main-blur">
      <div className="h3">Educations</div><br /><br />
      <div className="edu-image">
        {sekolah.map((edu, index) => (
          <a target="_blank" href={edu.link} className="edu-image-thumb">
            <img src={eduImg[index]} alt={edu.title} />
            <div className="edu-image-thumb__text">
              <div className="h5">{edu.title}</div>
              <p>{edu.text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
export default Educations;
