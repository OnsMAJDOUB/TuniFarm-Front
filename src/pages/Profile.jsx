
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.AuthReducer.user);

  return (
    <div className="py-20 md:py-24 px-8 md:px-16 bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <div className="flex gap-6 items-center">
        <div className="w-14 h-14 border-2 border-solid border-green-500 rounded-full flex justify-center items-center bg-green-200 shadow-md">
          <p className="text-4xl text-green-700 font-semibold">
            {user && user.firstName[0].toUpperCase()}
          </p>
        </div>

        <div className="px-4 sm:px-0">
          <h3 className="text-2xl font-bold text-green-700">
            Profile Information
          </h3>
          <p className="mt-1 max-w-2xl text-lg text-green-600">
            Personal details and application.
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-green-300">
        <dl className="divide-y divide-green-300">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium text-green-700">First name</dt>
            <dd className="mt-1 text-lg text-green-600 sm:col-span-2 sm:mt-0">
              {user && user.firstName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium text-green-700">Last name</dt>
            <dd className="mt-1 text-lg text-green-600 sm:col-span-2 sm:mt-0">
              {user && user.lastName}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium text-green-700">
              Email address
            </dt>
            <dd className="mt-1 text-lg text-green-600 sm:col-span-2 sm:mt-0">
              {user && user.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium text-green-700">
              Phone number
            </dt>
            <dd className="mt-1 text-lg text-green-600 sm:col-span-2 sm:mt-0">
              {user && user.phone}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
