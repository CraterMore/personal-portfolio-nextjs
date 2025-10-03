'use client'
 
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
 
export default function Alert(props: { text: string, link: string }) {
  const pathname = usePathname()
  const [isShowing, setIsShowing] = useState(true);

  return (
    <div>
    {pathname == "/" && isShowing &&
        <div className="bg-accent text-center py-2 px-4 text-background flex items-center justify-center">
            <a href={props.link} className="underline md:no-underline md:hover:underline mx-auto text-wrap">{props.text}</a>
            <button className="font-light ml-4 cursor-pointer justify-self-end" onClick={() => setIsShowing(false)}>X</button>
        </div>
    }
    </div>
  );
}