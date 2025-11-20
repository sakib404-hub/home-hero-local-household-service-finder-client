import errorImg from "../../assets/2668387.jpg";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-50 to-gray-200 text-center p-6">
            <div className="max-w-lg">
                <img
                    src={errorImg}
                    alt="Error Illustration"
                    className="w-72 mx-auto mb-8 drop-shadow-xl animate-[bounce_3s_ease-in-out_infinite]"
                />

                <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                    Oops! Something Went Wrong
                </h1>

                <p className="text-lg text-gray-600 mb-8">
                    The page you’re looking for might be missing, moved, or temporarily unavailable.
                </p>

                <a
                    href="/"
                    className="inline-block px-8 py-3 text-lg font-medium bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 hover:shadow-xl active:scale-95 transition-all"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;
