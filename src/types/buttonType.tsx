export default interface buttonType {
    texto: string;
    classe: string;
    onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
}
