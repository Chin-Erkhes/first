"use client"

const { usePathname } = require("next/navigation") 

const Page = () => {
    const pathName = usePathname();

    return (
        <div>
            {pathName}
        </div>
    )
}

export default Page;