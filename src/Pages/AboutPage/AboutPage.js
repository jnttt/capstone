import michiImg from "../../images/michi-and-nori.jpeg"

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <img className="michi" src={michiImg} alt="shiba"/>
      <p className="aboutP">
        I was inspired to create this gallery because our family dog was a Shiba
        Inu. His name was Michi which means right path. He passed away suddenly this
        year. He was only 6 years old. RIP Michi. We love you.{" "}
      </p>    
    </>
  );
}
