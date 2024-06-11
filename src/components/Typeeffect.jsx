
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  return (
    <span className="text-[#915eff]">
      <Typewriter
        options={{
          strings: [
            'Hey Guys,',
            " I'm Usama Bhatti",
            "I'm a,",
            'Fullstack Web Developer',
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 300,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('Hey Guys,')
            .pauseFor(600)
            .deleteAll()
            .typeString(" I'm Usama Bhatti")
            .pauseFor(500)
            .deleteAll()
            .typeString("I'm a,")
            .pauseFor(500)
            .deleteAll()
            .typeString('Fullstack web developer')
            .pauseFor(500)
            .deleteAll()
            .start();
        }}
      />
    </span>
  );
};

export default TypewriterComponent;
