import HashForm from "@/components/HashForm";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SectionTitle title="Hashes" subtitle="Generate hashes here!"/>
      <Information title="Whats is a hash?" text="A hash is..."/>
      <HashForm/>
    </div>
  );
}
