import {BlockRight, Link, ContactLogo, ContactText} from "./styled"

const Contact = () => (
    <BlockRight>
        <Link href="mailto: k.lewkosga@gmail.com">
          <ContactLogo
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M.05 4A2.35 2.35 0 0 1 2.4 1.65h19.2A2.35 2.35 0 0 1 23.95 4v16a2.35 2.35 0 0 1-2.35 2.35H2.4A2.35 2.35 0 0 1 .05 20V4Zm2.35-.85a.85.85 0 0 0-.85.85v2.765L12 12.736l10.45-5.971V4a.85.85 0 0 0-.85-.85H2.4Zm20.05 5.342L12 14.464 1.55 8.492V20c0 .47.38.85.85.85h19.2c.47 0 .85-.38.85-.85V8.492Z"
              clip-rule="evenodd"
            ></path>
          </ContactLogo>
          <ContactText>k.lewkosga@gmail.com</ContactText>
        </Link>
        <Link href="tel: +48667804407">
          <ContactLogo
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M.05 4A3.95 3.95 0 0 1 4 .05h3.55a2.35 2.35 0 0 1 2.28 1.78l.938 3.75a2.35 2.35 0 0 1-1.536 2.8l-1.774.591c-.567.19-.905.771-.788 1.357a8.925 8.925 0 0 0 7.002 7.002 1.185 1.185 0 0 0 1.357-.788l.476-1.429a2.35 2.35 0 0 1 3.28-1.359l3.866 1.933a2.35 2.35 0 0 1 1.299 2.102V20A3.95 3.95 0 0 1 20 23.95h-3.2C7.55 23.95.05 16.45.05 7.2V4ZM4 1.55A2.45 2.45 0 0 0 1.55 4v3.2c0 8.422 6.828 15.25 15.25 15.25H20A2.45 2.45 0 0 0 22.45 20v-2.211a.85.85 0 0 0-.47-.76l-3.865-1.933a.85.85 0 0 0-1.187.491l-.476 1.43a2.685 2.685 0 0 1-3.074 1.784 10.425 10.425 0 0 1-8.178-8.18 2.685 2.685 0 0 1 1.783-3.074l1.774-.59a.85.85 0 0 0 .556-1.013l-.938-3.751a.85.85 0 0 0-.824-.644H4Z"
              clip-rule="evenodd"
            ></path>
          </ContactLogo>
          <ContactText>667 804 407</ContactText>
        </Link>
      </BlockRight>

)
export default Contact;