import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useAuthStore } from '../../store/useAuthStore'
import React from 'react'

type LicenseProps = {
  isLicense: boolean
  setIsLicense: React.Dispatch<React.SetStateAction<boolean>>
  name: string
  artist: string
}

export default function License(
  props: LicenseProps,
  { isLicense, setIsLicense }: LicenseProps,
) {
  function closeModal() {
    props.setIsLicense(false)
  }

  function openModal() {
    props.setIsLicense(true)
  }
  const auth = useAuthStore()

  return (
    <>
      <Transition appear show={props.isLicense} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 mt-16 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full flex flex-col justify-center max-w-[100vh] md:max-h-[85vh] transform rounded-2xl bg-white p-6 text-left align-middle transition-all">
                  <button
                    className="self-end fixed top-5 right-3 m-2"
                    onClick={closeModal}
                  >
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 2L18.5563 17.5563"
                        stroke="black"
                        stroke-width="2"
                      />
                      <path
                        d="M19.5564 2L4.00005 17.5563"
                        stroke="black"
                        stroke-width="2"
                      />
                    </svg>
                  </button>

                  <div className="flex flex-col gap-7 font-body">
                    <div className="flex self-center mt-5">
                      <svg
                        width="500"
                        height="50"
                        viewBox="0 0 1094 288"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1012.16 126.125C1013.13 126.125 1014.06 126.418 1014.74 126.94C1015.43 127.461 1015.81 128.169 1015.81 128.906V190.094C1015.81 190.831 1015.43 191.539 1014.74 192.06C1014.06 192.582 1013.13 192.875 1012.16 192.875C1011.19 192.875 1010.26 192.582 1009.57 192.06C1008.89 191.539 1008.5 190.831 1008.5 190.094V128.906C1008.5 128.169 1008.89 127.461 1009.57 126.94C1010.26 126.418 1011.19 126.125 1012.16 126.125ZM997.531 137.25C998.501 137.25 999.431 137.543 1000.12 138.065C1000.8 138.586 1001.19 139.294 1001.19 140.031V178.969C1001.19 179.706 1000.8 180.414 1000.12 180.935C999.431 181.457 998.501 181.75 997.531 181.75C996.562 181.75 995.632 181.457 994.946 180.935C994.26 180.414 993.875 179.706 993.875 178.969V140.031C993.875 139.294 994.26 138.586 994.946 138.065C995.632 137.543 996.562 137.25 997.531 137.25ZM1026.78 137.25C1027.75 137.25 1028.68 137.543 1029.37 138.065C1030.05 138.586 1030.44 139.294 1030.44 140.031V178.969C1030.44 179.706 1030.05 180.414 1029.37 180.935C1028.68 181.457 1027.75 181.75 1026.78 181.75C1025.81 181.75 1024.88 181.457 1024.2 180.935C1023.51 180.414 1023.12 179.706 1023.12 178.969V140.031C1023.12 139.294 1023.51 138.586 1024.2 138.065C1024.88 137.543 1025.81 137.25 1026.78 137.25ZM982.906 145.594C983.876 145.594 984.806 145.887 985.492 146.408C986.177 146.93 986.562 147.637 986.562 148.375V170.625C986.562 171.363 986.177 172.07 985.492 172.592C984.806 173.113 983.876 173.406 982.906 173.406C981.937 173.406 981.007 173.113 980.321 172.592C979.635 172.07 979.25 171.363 979.25 170.625V148.375C979.25 147.637 979.635 146.93 980.321 146.408C981.007 145.887 981.937 145.594 982.906 145.594ZM1041.41 145.594C1042.38 145.594 1043.31 145.887 1043.99 146.408C1044.68 146.93 1045.06 147.637 1045.06 148.375V170.625C1045.06 171.363 1044.68 172.07 1043.99 172.592C1043.31 173.113 1042.38 173.406 1041.41 173.406C1040.44 173.406 1039.51 173.113 1038.82 172.592C1038.14 172.07 1037.75 171.363 1037.75 170.625V148.375C1037.75 147.637 1038.14 146.93 1038.82 146.408C1039.51 145.887 1040.44 145.594 1041.41 145.594ZM968.281 151.156C969.251 151.156 970.181 151.449 970.867 151.971C971.552 152.492 971.938 153.2 971.938 153.938V165.062C971.938 165.8 971.552 166.508 970.867 167.029C970.181 167.551 969.251 167.844 968.281 167.844C967.312 167.844 966.382 167.551 965.696 167.029C965.01 166.508 964.625 165.8 964.625 165.062V153.938C964.625 153.2 965.01 152.492 965.696 151.971C966.382 151.449 967.312 151.156 968.281 151.156ZM1056.03 151.156C1057 151.156 1057.93 151.449 1058.62 151.971C1059.3 152.492 1059.69 153.2 1059.69 153.938V165.062C1059.69 165.8 1059.3 166.508 1058.62 167.029C1057.93 167.551 1057 167.844 1056.03 167.844C1055.06 167.844 1054.13 167.551 1053.45 167.029C1052.76 166.508 1052.38 165.8 1052.38 165.062V153.938C1052.38 153.2 1052.76 152.492 1053.45 151.971C1054.13 151.449 1055.06 151.156 1056.03 151.156Z"
                          fill="#D1F812"
                        />
                        <path
                          d="M48.7061 56.7402H0V40.5049H116.211V56.7402H67.749V223H48.7061V56.7402ZM219.761 225.319C213.82 225.075 208.123 224.18 202.671 222.634C195.835 220.843 189.569 218.321 183.872 215.065C178.257 211.729 173.374 207.701 169.224 202.98C165.073 198.179 161.981 192.849 159.946 186.989C158.481 182.676 157.464 177.956 156.895 172.829C156.406 167.621 156.162 162.331 156.162 156.96V40.5049H175.205V158.059C175.205 161.721 175.327 165.424 175.571 169.167C175.815 172.91 176.426 176.369 177.402 179.543C178.786 183.856 180.942 187.803 183.872 191.384C186.802 194.965 190.301 198.098 194.37 200.783C198.439 203.387 203.037 205.422 208.164 206.887C211.826 208.026 215.692 208.758 219.761 209.084V225.319ZM229.404 208.962C233.229 208.636 236.932 207.945 240.513 206.887C245.64 205.422 250.238 203.387 254.307 200.783C258.376 198.098 261.875 194.965 264.805 191.384C267.734 187.803 269.769 183.856 270.908 179.543C271.803 176.206 272.373 172.666 272.617 168.923C272.861 165.179 272.983 161.558 272.983 158.059V40.5049H291.904V156.716C291.904 162.087 291.701 167.336 291.294 172.463C290.887 177.508 289.951 182.188 288.486 186.501C286.452 192.36 283.359 197.691 279.209 202.492C275.059 207.294 270.135 211.403 264.438 214.821C258.823 218.239 252.598 220.843 245.762 222.634C240.553 224.099 235.101 224.994 229.404 225.319V208.962ZM344.551 34.5234L479.072 181.008V40.5049H498.115V229.47L363.594 82.7412V223H344.551V34.5234ZM550.396 206.765H662.822V223H550.518L550.396 206.765ZM550.518 121.193H658.306V137.551H550.518V121.193ZM550.518 40.5049H662.822V56.7402H550.518V40.5049ZM718.398 34.0352L800.43 187.722L881.606 34.0352L902.114 223H883.193L869.399 96.291L800.186 227.517L730.361 96.0469L716.934 223H697.891L718.398 34.0352ZM1012.01 31.96L1093.43 223H1072.68L1012.01 77.9805L950.732 223H929.98L1012.01 31.96Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <p>
                      This certifies that{' '}
                      <span className="font-bold"> {auth.user.username}</span>{' '}
                      has been granted a license for the distribution of music
                      samples, subject to the terms and conditions set forth
                      herein. This license acknowledges the importance of
                      fostering creativity and innovation within the music
                      industry, while also respecting the rights of content
                      creators and copyright holders.
                    </p>
                    <div className="flex flex-col">
                      <p>Title &emsp;&nbsp;&nbsp; : {props.name}</p>
                      <p>Artist &emsp; : {props.artist}</p>
                    </div>
                    <p>
                      By obtaining this license,{' '}
                      <span className="font-bold"> {auth.user.username}</span>{' '}
                      agrees to adhere to the following terms and conditions:
                    </p>
                    <div className="flex gap-5 justify-between">
                      <div className="flex items-center gap-3">
                        <svg
                          width="200"
                          height="200"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_1533_21809"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="44"
                            height="44"
                          >
                            <path
                              d="M22 42C24.627 42.0034 27.2287 41.4876 29.6556 40.4823C32.0826 39.477 34.2869 38.002 36.142 36.142C38.002 34.2869 39.477 32.0826 40.4823 29.6556C41.4876 27.2287 42.0034 24.627 42 22C42.0034 19.3731 41.4876 16.7714 40.4823 14.3444C39.4769 11.9175 38.0019 9.71312 36.142 7.85802C34.2869 5.99804 32.0826 4.52302 29.6556 3.5177C27.2287 2.51239 24.627 1.99661 22 2.00002C19.3731 1.99667 16.7714 2.51247 14.3444 3.51778C11.9175 4.52309 9.71312 5.99809 7.85802 7.85802C5.99809 9.71312 4.52309 11.9175 3.51778 14.3444C2.51247 16.7714 1.99667 19.3731 2.00002 22C1.99661 24.627 2.51239 27.2287 3.5177 29.6556C4.52302 32.0826 5.99804 34.2869 7.85802 36.142C9.71312 38.0019 11.9175 39.4769 14.3444 40.4823C16.7714 41.4876 19.3731 42.0034 22 42Z"
                              fill="white"
                              stroke="white"
                              stroke-width="4"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14 22L20 28L32 16"
                              stroke="black"
                              stroke-width="4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </mask>
                          <g mask="url(#mask0_1533_21809)">
                            <path d="M-2 -2H46V46H-2V-2Z" fill="#9CB719" />
                          </g>
                        </svg>
                        <div className="flex flex-col">
                          <h1 className="font-bold">Attribution</h1>
                          <p>
                            All distributed music samples are properly
                            attributed to their original creators, including
                            providing appropriate credits and acknowledgments
                            where required.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          width="200"
                          height="200"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_1533_21809"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="44"
                            height="44"
                          >
                            <path
                              d="M22 42C24.627 42.0034 27.2287 41.4876 29.6556 40.4823C32.0826 39.477 34.2869 38.002 36.142 36.142C38.002 34.2869 39.477 32.0826 40.4823 29.6556C41.4876 27.2287 42.0034 24.627 42 22C42.0034 19.3731 41.4876 16.7714 40.4823 14.3444C39.4769 11.9175 38.0019 9.71312 36.142 7.85802C34.2869 5.99804 32.0826 4.52302 29.6556 3.5177C27.2287 2.51239 24.627 1.99661 22 2.00002C19.3731 1.99667 16.7714 2.51247 14.3444 3.51778C11.9175 4.52309 9.71312 5.99809 7.85802 7.85802C5.99809 9.71312 4.52309 11.9175 3.51778 14.3444C2.51247 16.7714 1.99667 19.3731 2.00002 22C1.99661 24.627 2.51239 27.2287 3.5177 29.6556C4.52302 32.0826 5.99804 34.2869 7.85802 36.142C9.71312 38.0019 11.9175 39.4769 14.3444 40.4823C16.7714 41.4876 19.3731 42.0034 22 42Z"
                              fill="white"
                              stroke="white"
                              stroke-width="4"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14 22L20 28L32 16"
                              stroke="black"
                              stroke-width="4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </mask>
                          <g mask="url(#mask0_1533_21809)">
                            <path d="M-2 -2H46V46H-2V-2Z" fill="#9CB719" />
                          </g>
                        </svg>
                        <div className="flex flex-col">
                          <h1 className="font-bold">
                            Compliance with Copyright Law
                          </h1>
                          <p>
                            Shall comply with all applicable copyright laws,
                            ensuring that the licensed music samples are used
                            within the bounds of fair use or any other
                            exceptions provided by the law.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
