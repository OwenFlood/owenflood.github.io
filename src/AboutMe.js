import "./AboutMe.css"

export default function AboutMe() {
  
  return (
    <>
      <div className="mission-statement">
        <div className="mission-intro">
          <div>
            <h1>Hi, my name is Owen Flood</h1>
            <p>
              I am an ex-web developer and current fourth-year student at <br />
              Drexel University studying Mechanical Engineering and Robotics.
            </p>
          </div>
        </div>
        <img src="headshot.jpg" alt="headshot" className="headshot" />
      </div>
      <p className="blurb">
        My biggest goal is to use my skills and abilities to contribute towards
        making the world a more equitable and just place. I love bringing people
        together from diverse backgrounds to solve pressing issues, whether it's
        serving as the president of Drexel Hack4Impact building software for
        nonprofits and leading boot camps for beginner programmers, or working
        with the Drexel Urban Growers to build and implement affordable
        aeroponic systems that can help provide fresh produce to the West
        Philadelphia year-round, I believe that technology has an undeniable
        part to play in shaping a safe, equitable, and greener future.
      </p>
    </>
  );
}
