import React from 'react'
import { Link } from '@/navigation' 
import LocaleSwitcher from '@/LocalSwitcher/local-switcher'



export const Navbar = () => {
  return (
    <div>
        <div className="bg-slate-800 flex justify-between items-center px-14 py-4 text-white">

            <div className="text-lg">
                Learning
            </div>

            <div className="text-md flex gap-6">

                <Link href="/">
                    <button className="">Home</button>
                </Link>

                <Link href="/about">
                    <button className="">About</button>
                </Link>

                <Link href="/articals">
                    <button className="">Articals</button>
                </Link>

            </div>

            <div className="flex items-center gap-3">
            <Link href="/">
                    <button className="">Login</button>
                </Link>
                <Link href="/">
                    <button className="">Sing up</button>
                </Link>
            </div>

            <LocaleSwitcher />

            

        </div>
    </div>
  )
}
