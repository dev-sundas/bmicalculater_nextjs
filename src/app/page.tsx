import BmiItems from "@/components/Bmiitems";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-[url('/images/background_image.jpg')] w-[100%] h-[100vh]">
      <Header />
      <BmiItems />
    </main>
  );
}
