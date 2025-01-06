import Title from "../components/Title";

function About() {
  return (
    <main className="flex flex-col items-center">
      <div className="md:w-1/2 w-11/12">
        <Title text={"About"} />
        <p className="mt-8 text-justify">
          This is my personal blog. It's been built from scratch using
          Express.js and PostgreSQL on the backend and React.js for the
          frontend. I write mainly about philosophy, programming, and life in
          Japan.
        </p>
      </div>
    </main>
  );
}

export default About;
