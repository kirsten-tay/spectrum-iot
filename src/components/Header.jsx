import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { ButtonLink } from './Button.jsx'
import Logo from '../../images/Vector.jpg'
import { Container } from './Container.jsx'


// function MobileNavigation() {
//   return (

//     <Popover>
//       {({ open, close }) => (
//         <>
//           <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
//             <span className="sr-only">Toggle Navigation</span>
//             <svg
//               aria-hidden="true"
//               className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
//               fill="none"
//               strokeWidth={2}
//               strokeLinecap="round"
//             >
//               <path
//                 d="M0 1H14M0 7H14M0 13H14"
//                 className={clsx('origin-center transition', {
//                   'scale-90 opacity-0': open,
//                 })}
//               />
//               <path
//                 d="M2 2L12 12M12 2L2 12"
//                 className={clsx('origin-center transition', {
//                   'scale-90 opacity-0': !open,
//                 })}
//               />
//             </svg>
//           </Popover.Button>
//           <Transition.Root>
//             <Transition.Child
//               as={Fragment}
//               enter="duration-150 ease-out"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="duration-150 ease-in"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
//             </Transition.Child>
//             <Transition.Child
//               as={Fragment}
//               enter="duration-150 ease-out"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="duration-100 ease-in"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <Popover.Panel
//                 as="ul"
//                 className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
//               >
//                 <li>
//                   <Link href="#">
//                     <a className="block w-full " onClick={() => close()}>
//                       SPECTRUM
//                     </a>
//                   </Link>
//                 </li>

//               </Popover.Panel>
//             </Transition.Child>
//           </Transition.Root>
//         </>
//       )}
//     </Popover>
//   )
// }

export function Header() {
  return (
    <Container>
      <header className="absolute flex-row w-full py-4 px-4 bg-slate-400/30 z-10 right-0 left-0">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
          <div className="flex space-x-3 items-center " >
            <Image src={Logo} alt="Laravel"
              layout="fixed"
              unoptimized className="h-auto w-full"
            />
            <a className="rounded-lg py-1 text-white text-xl">
              SPECTRUM
            </a>
          </div>
          <div>
            <ButtonLink color="blue" href="#">
              <span>
                Get started<span className="hidden lg:inline"> today</span>
              </span>
            </ButtonLink>
          </div>
        </div>
      </header>
    </Container>
  )
}
