/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import victoria from "../public/victoria.png";
import {
  IdentificationIcon,
  SparklesIcon,
  BoltIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import List from "./List";
import CV from "./CV";
import Modal from "./Modal";

const navigation = [
  {
    name: "Personal Projects",
    href: "/",
    icon: ComputerDesktopIcon,
    current: true,
  },
  { name: "Resume", href: "/", icon: IdentificationIcon, current: false },
  {
    name: "LinkedIn",
    href: "/",
    icon: SparklesIcon,
    current: false,
  },
  {
    name: "Github",
    href: "",
    icon: BoltIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function setClick() {}

export default function Sidebar() {
  const [current, setCurrent] = useState(false);
  const [page, setPage] = useState(false);
  const [modal, setModal] = useState(false);
  const togglePage = () => setPage((value) => !value);
  const toggleModal = () => setModal((open) => !open);

  return (
    <>
      {/* start header */}
      <div className="md:hidden border-b-2 bg-red-100 sm:flex">
        {/* image container */}
        <div className="h-64 w-64 mx-auto sm:mx-0">
          <Image
            src={victoria}
            alt="profile pic"
            layout="responsive"
            quality={100}
            className="rounded object-cover"
          />
        </div>
        {/* end image container */}
        <div className="justify-center m-auto">
          <div className="text-center">Victoria Jordan</div>
          <div className="text-center">vjordan.cs@gmail.com</div>
          <div className="text-center">LinkedIn</div>
          <div className="text-center">Github</div>
        </div>
      </div>
      {/* end header */}
      <div>
        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-96 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-[#2B3346]">
            <div className="flex-1 flex flex-col pt-8 pb-4 overflow-y-auto">
              {/* <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                  alt="Workflow"
                />
              </div> */}
              <div className="justify-center m-auto">
                <div className="text-center text-3xl text-white">
                  Victoria Jordan
                </div>
              </div>
              {/* image container */}
              <div className="h-64 w-64 mx-auto my-2">
                <Image
                  src={victoria}
                  alt="profile pic"
                  layout="responsive"
                  quality={100}
                  className="rounded object-cover"
                />
              </div>
              <div className="justify-center m-auto">
                <Link href="mailto:vjordan.cs@gmail.com">
                  <div className="text-center text-slate-300 underline underline-offset-2 cursor-pointer">
                    vjordan.cs@gmail.com
                  </div>
                </Link>
              </div>
              {/* end image container */}
              <nav className="mt-4 flex-1 px-4 space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <div
                      className={classNames(
                        item.current
                          ? "bg-[#CAD7E8] text-[#03040F]"
                          : "text-gray-400 hover:bg-[#90AFDA] hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
                      )}
                      onClick={toggleModal}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-[#060E22]"
                            : "text-gray-500 group-hover:text-gray-800",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-2">
              <div href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div className="ml-2">
                    <p className="text-xs font-medium text-gray-400">
                      Created by
                      <span className="pl-1 text-sm font-medium text-gray-300">
                        Victoria Jordan
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-96 flex flex-col flex-1 ">
          <main className="flex-1">
            <div className="py-6 ">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 ">
                <h1 className="text-2xl font-semibold text-gray-900">
                  {/* {page && "Personal Projects"}
                  {!page && "Resume"} */}
                  {page ? "Personal Projects" : "Resume"}
                </h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                {page ? <List /> : <CV />}
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
      {modal && <Modal />}
    </>
  );
}
