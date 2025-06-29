import Image from "next/image";
import MyLabel from './mylabel';
import MyBalloon from './myBalloon';

export default function Home() {
  const label: string = "Alex's first next app";
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <MyLabel labelText="custom text!!!!" />
      <MyBalloon balloonText="cute doggie."/>
      
    </div>
  );
}
