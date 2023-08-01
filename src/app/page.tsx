import HashForm from "@/components/HashForm";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SectionTitle title="Hashes" subtitle="Generate hashes here!"/>
      <HashForm/>
    </div>
  );
}
