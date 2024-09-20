import {
  About,
  Card,
  Customers,
  Header,
  Intro,
  Network,
  Plan,
} from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Card />
      <About />
      <Plan />
      <Network />
      <Customers />
    </div>
  );
}
