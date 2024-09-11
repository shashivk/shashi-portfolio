import React from "react";
import { techStackDetails } from "../Details";

// function Technologies() {
//   const {
//     html,
//     css,
//     js,
//     react,
//     redux,
//     tailwind,
//     bootstrap,
//     sass,
//     vscode,
//     git,
//     github,
//     npm,
//     postman,
//     figma,
//   } = techStackDetails;
//   return (
//     <main className="container mx-auto max-width pt-10 pb-20 ">
//       <section>
//         <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
//           Tech Stack
//         </h1>
//         <p className="text-content py-2 lg:max-w-3xl">
//           Technologies I've been working with recently
//         </p>
//       </section>
//       <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
//         <img src={html} title="html" alt="" />
//         <img src={css} title="CSS" alt="" />
//         <img src={js} title="JavaScript" alt="" />
//         <img src={react} title="React" alt="" />
//         <img src={redux} title="Redux" alt="" />
//         <img src={tailwind} title="Tailwind CSS" alt="" />
//         <img src={bootstrap} title="Bootstrap" alt="" />
//         <img src={sass} title="SASS" alt="" />
//       </section>
//       <section>
//         <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
//           Tools
//         </h1>
//       </section>
//       <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
//         <img src={vscode} title="Visual Studio Code" alt="" />
//         <img src={git} title="Git" alt="Git" />
//         <img src={github} title="Github" alt="Github" />
//         <img src={figma} title="Figma" alt="Figma" />
//         <img src={npm} title="NPM" alt="NPM" />
//         <img src={postman} title="Postman" alt="Postman" />
//       </section>
//     </main>
//   );
// }

function Technologies() {
  const {
    tf,
    // flask,
    // django,
    aws,
    // python,
    java,
    springboot,
    express,
    jenkins,
    nginx,
    nodejs,
    redis,
    mysql,
    postgre,
    insomnia,
    html,
    css,
    js,
    react,
    bootstrap,
    vscode,
    git,
    github,
    // npm,
    figma,
    intellij,
    // pytorch
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        {/* <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p> */}
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        {/* <img src={python} title="Python" alt="Python" /> */}
        {/* <img src={django} title="Django" alt="Django" /> */}
        {/* <img src={flask} title="flask" alt="flask" /> */}
        <img src={java} title="Java" alt="Java" />
        <img src={springboot} title="springboot" alt="springboot" />
        <img src={js} title="JavaScript" alt="JavaScript" />
        <img src={nodejs} title="nodejs" alt="nodejs" />
        <img src={express} title="express" alt="express" />

        <img src={postgre} title="postgre" alt="postgre" />
        <img src={redis} title="redis" alt="redis" />
        <img src={mysql} title="Mysql" alt="Mysql" />
        <img src={html} title="html" alt="html" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={react} title="react" alt="react" />
        <img src={bootstrap} title="bootstrap" alt="bootstrap" />
        {/* <img src={pytorch} title="Pyrorch" alt="Pyrorch" /> */}
        <img src={tf} title="TensorFlow" alt="TensorFlow" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={aws} title="Amazon Web Services" alt="aws" />
        <img src={vscode} title="Visual Studio Code" alt="vscode" />
        <img src={intellij} title="intellij" alt="intellij" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={insomnia} title="Insomnia" alt="insomnia" />
        <img src={nginx} title="nginx" alt="nginx" />
        <img src={jenkins} title="jenkins" alt="jenkins" />
      </section>
    </main>
  );
}

export default Technologies;
