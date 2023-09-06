import Image from "next/image";
import data from "../data.json";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-2 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-4 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center text-lg font-semibold w-full text-gray-700 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white cursor-pointer">
        {data.name}
      </h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex items-center gap-4 mt-8">
        {data.socials.map((social) => {
          let icon = null;
          if (social.href.includes("twitter")) {
            icon = <BsTwitter size={30} />;
          } else if (social.href.includes("github")) {
            icon = <BsGithub size={30} />;
          } else if (social.href.includes("linkedin")) {
            icon = <BsLinkedin size={30} />;
          } else if (social.href.includes("instagram")) {
            icon = <BsInstagram size={30} />;
          }
          return (
            <a
              className="hover:scale-105 transition-all text-white"
              aria-label={`${social.title} link`}
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          );
        })}
      </div>
      <footer className="text-lg text-white p-4 text-center absolute bottom-0 w-full">
        <p className="flex flex-row items-center justify-center mt-2">
          &copy; {new Date().getFullYear()}&nbsp;
          <a href="https://abhivarde.vercel.app" className=" hover:underline">
            AbhiVarde
          </a>
          . Built with&nbsp;
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiNextdotjs size={24} />
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTailwindcss size={24} />
          </a>
        </p>
      </footer>
    </div>
  );
}
