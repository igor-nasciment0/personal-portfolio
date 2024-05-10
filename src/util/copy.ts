import toast from "react-hot-toast";

export default async function copyToClipboard(text: string, toastText: string): Promise<void> {
    if (!navigator.clipboard) {
        throw new Error('A API da área de transferência não está disponível.');
    }

    try {
        await navigator.clipboard.writeText(text);
        toast(toastText,
            {
                icon: '✔',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
        console.log('a');        

    } catch (err) {
        console.error(err);
    }
}
