
function Card({username,btn='visit me'}) {
  return (
    <>
        <div className="max-w-[300px] rounded-md shadow-md bg-black text-gray-100">
            <img
              src="https://picsum.photos/id/237/300/200" alt="fixed"
              className="object-cover object-center w-full rounded-t-md h-60 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-6">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold tracking-wide">{username}</h2>
                <p className="text-sm text-gray-400">
                    This card belongs to the {username} channel.
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-1 text-sm font-medium rounded-md bg-gray-800 text-gray-200"
              >
                {btn}
              </button>
            </div>
        </div>
    </>
  );
}

export default Card;