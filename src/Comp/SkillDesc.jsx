import { useEffect, useState } from "react";
import parse from "html-react-parser"

const SkillDesc = ({skill, halaman}) => {
  const [descTitle, setDescTitle] = useState("");
  const [descP, setDescP] = useState("");

  const myData = [
    {
      title: "ReactJs",
      p: "<b>React</b> (also known as <b>React.js</b> or </b>ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.",
      data : "react"
    },
    {
        title : "Redux",
        p : "An open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. Since mid-2016, the primary maintainers are Mark Erikson and Tim Dorr.",
        data : "redux"
    },
    {
        title : "Router",
        p : "A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform. The following illustration shows how react router’s dynamic routing works as compared to traditional static routing",
        data : "router"
    },
    {
        title : "Express",
        p : "<b>Express.js</b>, or simply <b>Express</b>, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.The original author, TJ Holowaychuk, described it as a Sinatra-inspired server, meaning that it is relatively minimal with many features available as plugins. Express is the back-end component of popular development stacks like the MEAN, MERN or MEVN stack, together with the MongoDB database software and a JavaScript front-end framework or library",
        data : "express"
    },
    {
        title : "Node Js",
        p : "<b>Node.js</b> is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a 'JavaScript everywhere' paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.<br/><br/> Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games). <br/><br/>The Node.js distributed development project was previously governed by the Node.js Foundation, and has now merged with the JS Foundation to form the OpenJS Foundation, which is facilitated by the Linux Foundation's Collaborative Projects program.",
        data : "node"
    },
    {
        title : "Typescript",
        p : "<b>TypeScript</b> is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiled to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.<br/>TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). Multiple options are available for transpilation. The default TypeScript Compiler can be used, or the Babel compiler can be invoked to convert TypeScript to JavaScript.<br/><br/>TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.<br/><br/>The TypeScript compiler is itself written in TypeScript and compiled to JavaScript. It is licensed under the Apache License 2.0. TypeScript is included as a first-class programming language in Microsoft Visual Studio 2013 Update 2 and later, alongside C# and other Microsoft languages. An official extension also allows Visual Studio 2012 to support TypeScript. Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript.",
        data : "typescript"
    },
    {
        title : "MySql",
        p : 'An open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter My, and "SQL", the abbreviation for Structured Query Language. A relational database organizes data into one or more data tables in which data may be related to each other; these relations help structure the data. SQL is a language programmers use to create, modify and extract data from the relational database, as well as control user access to the database. In addition to relational databases and SQL, an RDBMS like MySQL works with an operating system to implement a relational database in a computer\'s storage system, manages users, allows for network access and facilitates testing database integrity and creation of backups.<br/><br/>MySQL is free and open-source software under the terms of the GNU General Public License, and is also available under a variety of proprietary licenses. MySQL was owned and sponsored by the Swedish company MySQL AB, which was bought by Sun Microsystems (now Oracle Corporation). In 2010, when Oracle acquired Sun, Widenius forked the open-source MySQL project to create MariaDB.<br/><br/>MySQL has stand-alone clients that allow users to interact directly with a MySQL database using SQL, but more often, MySQL is used with other programs to implement applications that need relational database capability. MySQL is a component of the LAMP web application software stack (and others), which is an acronym for Linux, Apache, MySQL, Perl/PHP/Python. MySQL is used by many database-driven web applications, including Drupal, Joomla, phpBB, and WordPress. MySQL is also used by many popular websites, including Facebook, Flickr, MediaWiki,  Twitter,  and YouTube.',
        data : 'sql'
    },
    {
        title : "Bootstrap",
        p : "A free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
        data : "bootstrap"
    },
    {
        title : "Tailwind Css",
        p : "<b>Tailwind CSS</b> is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of \"utility\" CSS classes that can be used to style each element by mixing and matching.",
        data : "tailwind"
    },
    {
        title : "SASS",
        p : "Short for syntactically awesome style sheets is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.<br/>Sass consists of two syntaxes. The original syntax, called \"the indented syntax,\" uses a syntax similar to Haml. It uses indentation to separate code blocks and newline characters to separate rules. The newer syntax, SCSS (Sassy CSS), uses block formatting like that of CSS. It uses braces to denote code blocks and semicolons to separate rules within a block. The indented syntax and SCSS files are traditionally given the extensions .sass and .scss, respectively.",
        data : 'sass'
    },
    {
        title : "Adobe XD",
        p : "Adobe first announced they were developing a new interface design and prototyping tool under the name \"Project Comet\" at the Adobe MAX conference in October 2015, which was a response to the rising popularity of Sketch, a UX and UI design-focused vector editor, released in 2010.<br/>The first public beta was released for macOS as \"Adobe Experience Design CC\" to anyone with an Adobe account, on March 14, 2016. A beta of Adobe XD was released for Windows 10 on December 13, 2016. On October 18, 2017, Adobe announced that Adobe XD was out of beta.",
        data : "xd"
    },
    {
        title : "Figma",
        p : "A collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows. The feature set of Figma focuses on user interface and user experience design, with an emphasis on real-time collaboration, utilizing a variety of vector graphics editor and prototyping tools. The Figma mobile app for Android and iOS allows viewing and interacting with Figma prototypes in real-time on mobile and tablet devices.<br/>Adobe announced on 15 September 2022 that it would acquire Figma for approximately $20 billion in cash and stock.",
        data : "figma"
    }
]

  useEffect(()=> {
    myData.forEach(x => {
        if(x.data === skill){
            setDescTitle(x.title)
            setDescP(x.p)
        }
    })
  },[skill])

  return (
    <>
      {descTitle && halaman === "skills" && (
        <div className="desc">
          <div className="h3">{descTitle}</div>
          <p>{parse(descP)}</p>
        </div>
      )}
    </>
  );
};

export default SkillDesc;
