import Back from "../components/Back";

function FourOhfour() {
  return (
    <section className="flex flex-col items-center justify-center mt-6">
      <h2 className="text-6xl font-bold mb-6">404</h2>
      <p className="text-2xl text-center">
        Sorry, it looks like this page doesn't exist.
      </p>
      <Back />
    </section>
  );
}

export default FourOhfour;
