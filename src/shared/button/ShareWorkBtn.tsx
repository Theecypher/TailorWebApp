interface ShareWorkButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean
}

const ShareWorkButton: React.FC<ShareWorkButtonProps> = ({
    children,
    onClick,
    className,
    type = 'button',
    disabled = false,
    loading = false
}) => {
    return ( 
        <button type={type} onClick={onClick} disabled={disabled || loading} className={`bg-[#008080] rounded-100 py-2 text-12 px-8 ${className}`}>{children}</button>
     );
}
 
export default ShareWorkButton;