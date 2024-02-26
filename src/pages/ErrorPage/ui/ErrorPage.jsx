export const ErrorPage = () => {

    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className="">
            <p>{ 'Something went wrong' }</p>
            <button onClick={reloadPage}>Refresh</button>
        </div>
    );
};
