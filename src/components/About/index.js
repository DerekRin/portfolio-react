import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">More about me</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "18%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          Hi, my name is Derek and as a kid that lived most of their life in the
          small town of Dodge City, I've always had this fascination when it
          comes to technology and coding. Whether it was websites, systems, or
          video games I was always inthralled by them and wanted to know how
          they work and how to do it myself. During my six months of fullstack
          development, I spent everyday studying and learning to code, using
          HTML, JavaScript, CSS, and so on. However, I became more interested in
          development of the front-end of web development than the back-end.
          When I'm not busy with learning I'm either spending my free time
          drawing, writing, working on personal video game related projects, or
          relaxing by watching Ultraman. I hope we can get along and move
          forward to make something great.
        </p>
      </div>
    </section>
  );
}

export default About;
