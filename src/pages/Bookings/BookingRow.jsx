const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, price, img, date, service, status } = booking;

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </label>
        </th>
        <td>
          <div className="avatar">
            <div className="w-12 md:w-24 h-12 md:h-24 rounded">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{service}</td>
        <td>{date}</td>
        <td>$ {price}</td>
        <th>
          {status == "confirm" ? (
            <span className="text-md">Confirmed</span>
          ) : (
            <button
              onClick={() => handleBookingConfirm(_id)}
              className="btn btn-ghost btn-xs">
              Confirm
            </button>
          )}
        </th>
      </tr>
    </>
  );
};

export default BookingRow;
