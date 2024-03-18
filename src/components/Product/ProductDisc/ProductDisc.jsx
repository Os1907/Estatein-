import KeyFeature from "./KeyFeature/KeyFeature";
import Title from "./Title/Title";


export default function ProductDisc() {
  return (
    <>
      <section className="lg:pt-14 pt-6">
        <div className="grid grid-cols-12 lg:mx-20 mx-4 gap-4">
      <Title />
      <KeyFeature/>

        </div>
      </section>
    </>
  );
}
