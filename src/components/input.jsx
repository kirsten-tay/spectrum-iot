export function Input({ id, label, type = 'text', ...props }) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="flex mb-3 block text-sm justify-left font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea rows={10}  {...props} className="block  w-full appearance-none rounded-md border border-gray-200 bg-gray-200 px-3 py-2 text-gray-900 placeholder-gray-800  focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"></textarea>
      ) : (
        <input
          id={id}
          type={type}
          {...props}
          className="block  w-full appearance-none rounded-md border border-gray-200 bg-gray-200 px-3 py-2 h-16 text-gray-900 placeholder-gray-800  focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
        />
      )}

    </div>
  )
}
