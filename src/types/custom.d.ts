interface Window {
    fbq?: (...args: Array<string>) => void;
}

interface Message {
    role: string;
    content: string;
}
