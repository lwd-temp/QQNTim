import { useEffect, useRef } from "react";

// Thanks https://learnersbucket.com/examples/interview/useprevious-hook-in-react/
export function usePrevious<T>(value: T) {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}
