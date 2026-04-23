import SearchIcon from '@/app/assets/icons/SearchIcon'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState, useRef } from 'react'

const Search = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlQuery = searchParams.get("q") ?? ""
  const pathname = usePathname()

  const [query, setQuery] = useState(urlQuery)
  const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (pathname === "/search") {
			inputRef.current?.focus()
		}
	}, [pathname])

	useEffect(() => {
		setQuery(urlQuery)
	}, [urlQuery])

	useEffect(() => {
		const timer = setTimeout(() => {
			if (pathname !== "/search") return
			if (query.trim()) {
				router.push(`/search?q=${encodeURIComponent(query)}`)
			} 
			else {
				router.push(`/search`)
			}
	}, 400) 

    return () => clearTimeout(timer)
  }, [query])


	const handleSearch = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!query.trim()) return
		router.push(`/search?q=${encodeURIComponent(query)}`)
	}

  return (
	<form onSubmit={handleSearch}>
		<div className='flex flex-col w-full p-2 gap-4 mb-5 justify-center items-center'>
		<div className='text-2xl md:text-3xl text-[#9fadbd] font-bold flex justify-center items-center gap-2'>
			Browse <span className='bg-[#162230] p-3 rounded-lg'>Anime</span>
		</div>

		<div className='flex flex-col md:flex-row md:items-center gap-4 w-full justify-center flex-wrap'>
			<div className='relative w-full lg:w-[250px]'>
			<SearchIcon className='absolute top-1/2 left-2 -translate-y-1/2'/>
			<input
				ref={inputRef}
				type='search'
				placeholder="Search"
				className='text-[#516170] bg-[#151f2e] w-full lg:w-[250px] h-[42px] rounded-md placeholder:text-[#516170] px-8 placeholder:font-semibold outline-none'
				value={query}
				onChange={(e) => {
					const val = e.target.value
					setQuery(val)
					if (pathname !== "/search") {
						router.push(`/search?q=${encodeURIComponent(val)}`)
					}
				}}
			/>
			</div>

			<div className='hidden lg:flex flex-wrap gap-2 justify-center'>
			<input type="text" placeholder="Genre" className='bg-[#151f2e] text-[#516170] h-[42px] rounded-md px-3 outline-none'/>
			<input type="text" placeholder="Season" className='bg-[#151f2e] text-[#516170] h-[42px] rounded-md px-3 outline-none'/>
			<input type="text" placeholder="Type" className='bg-[#151f2e] text-[#516170] h-[42px] rounded-md px-3 outline-none'/>
			</div>
		</div>
		</div>
	</form>
  )
}

export default Search