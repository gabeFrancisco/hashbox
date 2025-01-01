import HashForm from "@/components/HashForm";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import data from "../data/data";

export default function Home() {
  return (
    <div>
      <SectionTitle title="Hashes" subtitle="Generate hashes here!" />
      <HashForm />
      <Information title={data[0].title} text={data[0].text} />
    </div>
  );
}
