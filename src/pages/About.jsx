import Back from "../components/Back";
import Title from "../components/Title";

function About() {
  return (
    <>
      <Title text={"About"} />
      <p className="mt-8 text-justify">
        This is my personal blog. It's been built from scratch using Express.js
        and PostgreSQL on the backend and React.js for the frontend. I write
        mainly about philosophy, programming, and life in Japan.
      </p>
      <Back />
    </>
  );
}

export default About;
