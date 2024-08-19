import { Link } from "react-router-dom";

function LinkUi({ children, to, ...props }) {
    return (
        <Link
            to={to}
            className="font-semibold text-primary hover:underline"
            {...props}
        >
            {children}
        </Link>
    );
}

export default LinkUi;
