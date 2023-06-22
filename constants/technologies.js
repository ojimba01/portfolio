import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { FaReact, FaFigma, FaTrello, FaJenkins} from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { TbBrandGolang } from "react-icons/tb";
import { BiLogoAws, BiLogoDocker, BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi"
import { SiTerraform, SiGnubash, SiLinux, SiRedis } from "react-icons/si";
import {LiaLinode} from "react-icons/lia";
import AdobeXDIcon from "public/assets/svg/adobexd.svg";
import ZeplinIcon from "public/assets/svg/zeplin.svg";
import WebstormIcon from "public/assets/svg/webstorm.svg";
import JiraIcon from "public/assets/svg/jira.svg";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import ChakraIcon from "public/assets/svg/chakraui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

export const TECHNOLOGIES = [
	{
		category: "Backend",
		items: [
			{ name: "Go (Golang)", icon: <TbBrandGolang size={32} /> },
			// python icon
			{ name: "Python", icon: <IoLogoPython size={32} /> },
		
		]
		
	},
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JavaScript", icon: <IoLogoJavascript size={32} /> },
			{ name: "Typescript", icon: <BiLogoTypescript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			{ name: "Chakra", icon: <ChakraIcon width={32} /> },
			{ name: "HeadlessUI", icon: <HeadlessUiIcon width={32} /> }
		]
	},
	{
		category: "UI tools",
		items: [
			{ name: "Figma", icon: <FaFigma size={32} /> },
			{ name: "XD", icon: <AdobeXDIcon width={32} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Jira", icon: <JiraIcon width={32} /> },
			{ name: "Trello", icon: <FaTrello size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={32} /> },
			{ name: "AWS", icon: <BiLogoAws size={32} /> },
			{ name: "Docker", icon: <BiLogoDocker size={32} /> },
			{ name: "Terraform", icon: <SiTerraform size={32} /> },
			{ name: "Jenkins", icon: <FaJenkins size={32} /> },
			{ name: "Bash", icon: <SiGnubash size={32} /> },
			{ name: "Unix/Linux", icon: <SiLinux size={32} /> },
			{ name: "Linode", icon: <LiaLinode size={32} /> },
			{ name: "Redis", icon: <SiRedis size={32} /> },
			{ name: "PostgreSQL", icon: <BiLogoPostgresql size={32} /> },


			
		]
	}
];
