import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from '@/components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Vishal Dongre</GradientText> 👋
        </>
      }
      description={
        <>
          A software engineer with a robust background in cloud architecture and automation. I possess skills in various programming languages, including Python, JavaScript, and GoLang. I also have a deep understanding of cloud computing, CI/CD tools, along with containerization and container orchestration.
          {/* <a className="text-amber-400 hover:underline" href="/">
            malesuada
          </a>{' '}
          nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{' '}
          <a className="text-amber-400 hover:underline" href="/">
            consectetur
          </a>{' '}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. */}
        </>
      }
      // avatar={
      //   <img
      //     className="h-64 w-64"
      //     src="/assets/images/profile.svg"
      //     alt="Avatar image"
      //     loading="lazy"
      //   />
      // }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
