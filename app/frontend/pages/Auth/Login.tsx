import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}









// import { Head, useForm } from '@inertiajs/react'
// import React from 'react'

// const Login: React.FC = () => {
//   const { data, setData, post, processing, errors } = useForm({
//     user: {
//       email: '',
//       password: '',
//       remember: false,
//     }
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     post('/login')
//   }

//   return (
//     <>
//       <Head title="Login" />
      
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-6">
//         <div>
//           <input
//             type="email"
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={data.user.email || ''}
//             onChange={e => setData('user', { ...data.user, email: e.target.value })}
//             placeholder="Email"
//           />
//           {errors.email && (
//             <div className="text-red-500 text-sm mt-1">{errors.email}</div>
//           )}
//         </div>

//         <div>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={data.user.password || ''}
//             onChange={e => setData('user', { ...data.user, password: e.target.value })}
//             placeholder="Password"
//           />
//           {errors.password && (
//             <div className="text-red-500 text-sm mt-1">{errors.password}</div>
//           )}
//         </div>

//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//             checked={data.user.remember}
//             onChange={e => setData('user', { ...data.user, remember: e.target.checked })}
//             id="remember"
//           />
//           <label htmlFor="remember" className="ml-2 text-gray-700">
//             Remember Me
//           </label>
//         </div>

//         <button
//           type="submit"
//           disabled={processing}
//           className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
//         >
//           {processing ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </>
//   )
// }

// export default Login
