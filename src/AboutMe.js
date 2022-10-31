import "./AboutMe.css"

export default function AboutMe() {
  
  return (
    <>
      <div className="mission-statement">
        <div className="mission-intro">
          <div>
            <h1 className="heading">Hi, my name is Owen Flood</h1>
            <h3 className="subheading">Mechanical & Robotics Engineer</h3>
            <p>
              I am a former web developer and current fourth-year student at
              Drexel University studying Mechanical Engineering and Robotics.
            </p>
          </div>
        </div>
        <img src="headshot.jpg" alt="headshot" className="headshot" />
      </div>
      <p className="blurb">
        My greatest passion is to use my skills and abilities to contribute
        towards making the world a more equitable and just place. I love
        bringing people together from diverse backgrounds to solve complex, real
        world issues. Whether it's serving as the president of Drexel
        Hack4Impact building software for nonprofits and leading boot camps for
        beginner programmers, or working with the Drexel Urban Growers to build
        and implement affordable aeroponic systems that can help provide fresh
        produce to the West Philadelphia year-round, I believe that technology
        has a far-reaching, transformative, and important part to play in creating a
        safe, equitable, and greener future.
      </p>
    </>
  );
}
