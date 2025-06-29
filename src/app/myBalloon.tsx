interface MyBalloonProps {
  balloonText: string;
} 

export default function MyBalloon({ balloonText }: MyBalloonProps) {

  return (
    <div>
        <h1>This is a balloon animal</h1>
        <img className="w-128 h-128" src="https://www.thesprucecrafts.com/thmb/7Ur-p4j2O7vh8oH8wT3iM6kPM4c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dog-balloon-animal-583d18485f9b58d5b172347f.jpg" />
        <span>Custom text:</span> { balloonText}
        <p>
            The art of balloon animals has a surprising and long history, predating modern rubber balloons. Ancient civilizations, like the Aztecs, are believed to have created "balloon animals" from cleaned and twisted animal intestines for ceremonial purposes. The invention of rubber balloons in 1824 by Michael Faraday, and their subsequent mass-marketing as toys by Thomas Hancock in 1825, paved the way for modern balloon artistry. However, it wasn't until the development of specialized, long, thin latex balloons in the 20th century (with the first modern latex balloon appearing in 1931) that intricate balloon twisting became widely possible. Herman Bonnert, a magician from Scranton, Pennsylvania, is often credited with popularizing balloon twisting at conventions in the late 1930s, laying the groundwork for the whimsical creations we see today.
        </p>
    </div>
  );
}