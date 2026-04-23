import Link from 'next/link'
import React from 'react'

interface VariantProps {
  content?: string,
  route?:boolean
}

const style = "flex justify-center items-center text-[#6e7281] font-medium text-[14px] py-2 px-4 transition-opacity duration-300 hover:opacity-85 active:opacity-75"

const Variant = ( {content="Variant", route=true} : VariantProps) => {
  return route ? (
    <Link href="/login" className={`rounded-xl ${style}`}>
      {content}
    </Link>
  ) : (
    <div className={`text-[16px] sm:text-xl rounded-4xl ${style}`}>{content}</div>
  );
};

export default Variant