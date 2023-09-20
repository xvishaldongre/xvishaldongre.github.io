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
          I am a DevOps Engineer with 2 years of experience in building and maintaining cloud-based systems. As a DevOps professional, I am well-versed in the process and have extensive experience working with tools and technologies like AWS, Python, Docker, and Terraform.
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
