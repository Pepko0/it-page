import { Header, Title, SubText, Text, Logo } from "./styled";

const HomePageHeader = () => {
  return (
    <Header>
      <Logo viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m20.145 6.097-7.286-4.37a1.734 1.734 0 0 0-1.718 0l-7.286 4.37A1.79 1.79 0 0 0 3 7.633v8.727a1.794 1.794 0 0 0 .855 1.537l1.91 1.141.011.006c.965.494 1.334.494 1.762.494 1.507 0 2.443-.975 2.443-2.545V8.532a.399.399 0 0 0-.395-.403H8.537a.399.399 0 0 0-.394.403v8.461a.703.703 0 0 1-.321.613c-.277.168-.679.133-1.132-.101l-1.83-1.102a.052.052 0 0 1-.023-.043V7.756a.062.062 0 0 1 .027-.05l7.118-4.359a.039.039 0 0 1 .034 0l7.122 4.36a.063.063 0 0 1 .026.052v8.6a.062.062 0 0 1-.022.048l-7.127 4.249a.057.057 0 0 1-.038 0l-1.82-1.081a.365.365 0 0 0-.367-.02l-.016.01c-.503.298-.638.375-1.104.545-.075.027-.254.093-.27.27-.015.177.155.303.306.39l2.433 1.494c.259.155.555.238.857.238h.027c.295-.005.583-.087.836-.238l7.286-4.365a1.798 1.798 0 0 0 .855-1.54V7.634a1.79 1.79 0 0 0-.855-1.536Z"></path>
        <path d="M14.432 14.91c-1.748 0-2.12-.488-2.231-1.276a.395.395 0 0 0-.386-.343h-.928a.396.396 0 0 0-.387.402c0 .683.24 2.914 3.934 2.914 1.143 0 2.093-.267 2.748-.773.655-.506 1.006-1.242 1.006-2.118 0-1.76-1.149-2.243-3.41-2.558-2.3-.32-2.3-.482-2.3-.838 0-.257 0-.857 1.662-.857 1.183 0 1.816.15 2.019.938a.392.392 0 0 0 .378.312h.931a.386.386 0 0 0 .289-.134.417.417 0 0 0 .1-.302c-.121-1.666-1.34-2.511-3.715-2.511-2.16 0-3.448.972-3.448 2.601 0 1.786 1.336 2.291 3.342 2.5 2.344.242 2.344.596 2.344.908.001.487-.201 1.136-1.948 1.136Z"></path>
      </Logo>
      <div>
        <Title>IT-Lion</Title>
        <Text>
          Looking for a modern, responsive, and functional website?
          💻<br></br> <b>Contact us today!</b> <br></br> We are an experienced company
          specializing in creating websites using React.
          With modern technologies and proven programming methods,
          we create websites that not only look great but also
          work flawlessly.<br></br> <b>Why choose us?</b><br></br> 🌟 Individual
          approach to every project <br></br>🚀 Fast and efficient execution<br></br> 📱
          Responsive websites, adapted to mobile devices <br></br>🔒
          Security and optimization <br></br>Don't wait! Contact us today
          and get a website that will make your company stand out
          from the competition! 📧

        </Text>
      </div>
    </Header>
  );
};

export default HomePageHeader;
