import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from '@/components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={ 
          <svg className="mr-1 h-6 w-6 stroke-amber-500" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
          }
          name="Vishal's Portfolio"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="https://github.com/xvishaldongre">GitHub</NavMenuItem>
        <NavMenuItem href="https://twitter.com/xvishaldongre">Twitter</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
