import dayjs from 'dayjs'

export default function BarChart({ data }) {
  return (
    <div className="rounded-xl bg-gray-50 p-4 w-full">
      <div className="sm:grid-cols-[repeat(13,minmax(0,1fr))] mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
        <div className="h-[350px] mb-6 hidden flex-col-reverse justify-between text-sm text-gray-400 sm:flex">
          {[...Array(6)].map((_, index) => (
            <p key={index}>{`$${index}K`}</p>
          ))}
        </div>
        {data.map((height, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div
              style={{ height }}
              className="w-full rounded-md bg-blue-300"
            ></div>
            <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
              {dayjs(`2023${(index + 1).toString().padStart(2, 0)}16`).format(
                'MMM'
              )}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center pb-2 pt-6">
        <svg
          fill="none"
          aria-hidden="true"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          ></path>
        </svg>
        <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
      </div>
    </div>
  )
}
