import ClipLoader from "react-spinners/ClipLoader";

export default function Loader({color, size}) {
    return (
        <div className="flex justify-center items-center">
            <ClipLoader size={size} color={color} cssOverride={{ margin: 'auto', marginTop: '8px', marginBottom: '8px' }} />
        </div>
    );
}