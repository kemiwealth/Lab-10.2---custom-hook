

import { useEffect, useState } from "react"


function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState('')

    useEffect (() => {
        const timeId = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(timeId)
    }, [value, delay])

    return {debouncedValue}
}

export default useDebounce