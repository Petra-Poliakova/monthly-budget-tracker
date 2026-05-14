import {useCallback, useState, type Dispatch, type SetStateAction} from "react";

export const useLocalStorage = <T>(
    key: string,
    initialValue: T,
): [T, Dispatch<SetStateAction<T>>, () => void] => {
    const readValue = (): T => {
        if (typeof window === "undefined") {
            return initialValue;
        }

        const storedValue = window.localStorage.getItem(key);

        if (storedValue === null) {
            return initialValue;
        }

        try {
            return JSON.parse(storedValue) as T;
        } catch {
            return initialValue;
        }
    };

    const [value, setValue] = useState<T>(readValue);

    const updateValue: Dispatch<SetStateAction<T>> = useCallback((newValue) => {
        setValue((currentValue) => {
            const nextValue =
                typeof newValue === "function"
                    ? (newValue as (value: T) => T)(currentValue)
                    : newValue;

            window.localStorage.setItem(key, JSON.stringify(nextValue));

            return nextValue;
        });
    }, [key]);

    const removeValue = useCallback(() => {
        window.localStorage.removeItem(key);
        setValue(initialValue);
    }, [key, initialValue]);

    return [value, updateValue, removeValue];
};






// import {useCallback, useEffect, useState, type Dispatch, type SetStateAction} from "react";
//
// const isBrowser = typeof window !== "undefined";
//
// export const useLocalStorage = <T>(
//     key: string,
//     initialValue: T,
// ): [T, Dispatch<SetStateAction<T>>, () => void] => {
//     const readValue = useCallback((): T => {
//         if (!isBrowser) {
//             return initialValue;
//         }
//
//         const storedValue = window.localStorage.getItem(key);
//
//         if (storedValue === null) {
//             return initialValue;
//         }
//
//         try {
//             return JSON.parse(storedValue) as T;
//         } catch {
//             return initialValue;
//         }
//     }, [initialValue, key]);
//
//     const [storedValue, setStoredValue] = useState<T>(readValue);
//
//     useEffect(() => {
//         setStoredValue(readValue());
//     }, [readValue]);
//
//     const setValue: Dispatch<SetStateAction<T>> = useCallback((value) => {
//         setStoredValue((currentValue) => {
//             const nextValue = value instanceof Function ? value(currentValue) : value;
//
//             if (isBrowser) {
//                 window.localStorage.setItem(key, JSON.stringify(nextValue));
//             }
//
//             return nextValue;
//         });
//     }, [key]);
//
//     const removeValue = useCallback(() => {
//         if (isBrowser) {
//             window.localStorage.removeItem(key);
//         }
//
//         setStoredValue(initialValue);
//     }, [initialValue, key]);
//
//     return [storedValue, setValue, removeValue];
// };
