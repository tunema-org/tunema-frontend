import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import Container from '../../components/container'
import IconGoogle from '../../components/icons/icon-google'
import IconSoundcloud from '../../components/icons/icon-soundcloud'
import Navbar from '../../components/Navbar/navbar'
import { useAuthStore } from '../../store/useAuthStore'

type RegisterFormData = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

function Register() {
  const {
    register: registerInput,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>()

  const navigate = useNavigate()

  const [register, registrationError] = useAuthStore((state) => [
    state.register,
    state.error,
  ])

  useAuthStore.subscribe((state) => {
    if (state.isAuthenticated) {
      navigate('/home')
    }
  })

  const onSubmit = handleSubmit(async (data) => {
    await register({
      username: data.username,
      email: data.email,
      password: data.password,
      profile_img_url: 'https://i.pravatar.cc/300',
    })
  })

  return (
    <>
      <Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>// Register</title>
        <link rel="icon" type="image/x-icon" href="/pic/favicon/favicon.ico" />
      </Helmet>
      <main>
        <section className="flex h-full w-full bg-white justify-center">
          <div className="flex md:bg-[url('/pic/login/login.png')] md:w-full md:bg-cover"></div>
          <Container>
            <div className="flex flex-row bg-white h-72 pt-28 content-center items-center justify-center">
              <a href="" className="">
                <img
                  className="object-contain h-12 w-40 items-center"
                  src={'/pic/LOGO TUNEMA BLACK 2.png'}
                  id="2"
                  title="logoBlack"
                  alt="logo"
                />
              </a>
            </div>
            <div className="pt-10 flex justify-center text-center">
              <button className="p-5 flex justify-center gap-2 w-full h-8 shadow-md rounded-md font-medium content-center items-center text-small text-center hover:bg-primary-green">
                <IconGoogle className="mb-0.5 inline" />
                <b>Sign Up with Google</b>
              </button>
            </div>
            <div className="pt-5 flex justify-center text-center">
              <button className="p-5 flex gap-2 w-full h-8 shadow-md rounded-md font-medium content-center items-center justify-center text-small text-center hover:bg-primary-green">
                <IconSoundcloud className="mb-1 inline" />
                <b>Sign Up with Soundcloud</b>
              </button>
            </div>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="flex w-full my-8 bg-gray-3 border-1" />
              <span className="flex absolute px-3 font-medium font-smallest -translate-x-1/2 bg-white text-center text-gray-3">
                Or
              </span>
            </div>
            <form onSubmit={onSubmit}>
              <div className="flex flex-col w-full justify-center items-center font-medium text-small">
                <label className="flex text-gray-3 text-small self-start font-medium mb-2">
                  Username
                </label>
                <input
                  className="flex bg-gray-2 rounded w-full h-9 pl-3"
                  type="text"
                  placeholder=""
                  {...registerInput('username', {
                    required: true,
                    validate(val: string) {
                      if (val.length > 50)
                        return 'Username must be less than 50 characters'
                      return true
                    },
                  })}
                />
              </div>
              <span className="flex text-red-500 text-small">
                {errors.username?.message}
              </span>
              <div className="flex flex-col w-full justify-center items-center font-medium text-small">
                <label className="flex text-gray-3 text-small self-start font-medium mt-5 mb-2">
                  E-mail
                </label>
                <input
                  className="flex bg-gray-2 rounded w-full h-9 pl-3"
                  type="email"
                  placeholder=""
                  {...registerInput('email', { required: true })}
                />
              </div>
              <div className="flex flex-col w-full justify-center font-medium text-small">
                <label className="flex text-gray-3 text-small font-medium mt-5 mb-2">
                  Password
                </label>
                <input
                  className="flex bg-gray-2 rounded w-auto h-9 pl-3"
                  type="password"
                  placeholder=""
                  {...registerInput('password', { required: true })}
                />
              </div>
              <div className="flex flex-col w-full justify-center font-medium text-small">
                <label className="flex text-gray-3 text-small font-medium mt-5 mb-2">
                  Re-enter Password
                </label>
                <input
                  className="flex bg-gray-2 rounded w-auto h-9 pl-3 mb-5"
                  type="password"
                  placeholder=""
                  {...registerInput('confirmPassword', {
                    required: true,
                    validate(val: string) {
                      if (watch('password') === val) return true
                      return 'Password does not match'
                    },
                  })}
                />
                <span className="flex text-red-500 text-small">
                  {errors.confirmPassword?.message}
                </span>
              </div>
              <span className="flex text-red-500 text-small capitalize">
                {registrationError}
              </span>
              <div className="flex flex-col pt-5 w-full">
                <Button type="primary" submit>
                  Register
                </Button>
              </div>
            </form>
            <div className="flex flex-row w-full justify-center pt-5 pb-10 font-medium text-small text-gray-3">
              Already have an account?
              <Link
                to="/login"
                className="indent-1 text-dark-green hover:text-primary-green bg-white"
              >
                Login
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Register
