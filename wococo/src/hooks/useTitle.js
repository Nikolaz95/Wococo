import { useEffect, useState } from 'react';

function useTitle(initialTitle) {
    const [title, setTitle] = useState(initialTitle);

    useEffect(() => {
        document.title = title;

        return () => {
            document.title = initialTitle; // Reset to initial title on unmount
        };
    }, [title]);

    return [title, setTitle];
}

export default useTitle;