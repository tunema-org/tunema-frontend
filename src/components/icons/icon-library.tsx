import * as React from 'react'

type IconLibraryProps = {
  isActive: boolean
}

const IconLibraryActive = (props: any) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5001 18.4584H7.50008C5.29498 18.4584 3.84042 17.9854 2.92759 17.0726C2.01476 16.1597 1.54175 14.7052 1.54175 12.5001V7.50008C1.54175 5.29498 2.01476 3.84042 2.92759 2.92759C3.84042 2.01476 5.29498 1.54175 7.50008 1.54175H12.5001C14.7052 1.54175 16.1597 2.01476 17.0726 2.92759C17.9854 3.84042 18.4584 5.29498 18.4584 7.50008V12.5001C18.4584 14.7052 17.9854 16.1597 17.0726 17.0726C16.1597 17.9854 14.7052 18.4584 12.5001 18.4584ZM7.50008 1.79175C5.54397 1.79175 4.06899 2.13449 3.10174 3.10174C2.13449 4.06899 1.79175 5.54397 1.79175 7.50008V12.5001C1.79175 14.4562 2.13449 15.9312 3.10174 16.8984C4.06899 17.8657 5.54397 18.2084 7.50008 18.2084H12.5001C14.4562 18.2084 15.9312 17.8657 16.8984 16.8984C17.8657 15.9312 18.2084 14.4562 18.2084 12.5001V7.50008C18.2084 5.54397 17.8657 4.06899 16.8984 3.10174C15.9312 2.13449 14.4562 1.79175 12.5001 1.79175H7.50008Z"
      fill="#292D32"
      stroke="#9CB719"
    />
    <path
      d="M14.1466 10.4865L14.875 10.8606V10.0417V6.45841C14.875 5.60727 14.1845 4.91675 13.3333 4.91675H6.66667C5.81552 4.91675 5.125 5.60727 5.125 6.45841V10.0417V10.8606L5.8534 10.4865C6.0924 10.3638 6.37259 10.2917 6.66667 10.2917H13.3333C13.6274 10.2917 13.9076 10.3638 14.1466 10.4865ZM15 12.2084C14.9699 12.2084 14.9386 12.1961 14.9129 12.1705C14.8873 12.1448 14.875 12.1136 14.875 12.0834C14.875 11.2323 14.1845 10.5417 13.3333 10.5417H6.66667C5.81552 10.5417 5.125 11.2323 5.125 12.0834C5.125 12.1136 5.11272 12.1448 5.08707 12.1705C5.06143 12.1961 5.03015 12.2084 5 12.2084C4.96985 12.2084 4.93857 12.1961 4.91293 12.1705C4.88728 12.1448 4.875 12.1136 4.875 12.0834V6.45841C4.875 5.46789 5.67614 4.66675 6.66667 4.66675H13.3333C14.3239 4.66675 15.125 5.46789 15.125 6.45841V12.0834C15.125 12.1136 15.1127 12.1448 15.0871 12.1705C15.0614 12.1961 15.0301 12.2084 15 12.2084Z"
      fill="#292D32"
      stroke="#9CB719"
    />
    <path
      d="M15.8333 13.25H15C14.9699 13.25 14.9386 13.2377 14.9129 13.2121C14.8873 13.1864 14.875 13.1551 14.875 13.125C14.875 13.0949 14.8873 13.0636 14.9129 13.0379C14.9386 13.0123 14.9699 13 15 13H15.8333C15.8635 13 15.8948 13.0123 15.9204 13.0379C15.946 13.0636 15.9583 13.0949 15.9583 13.125C15.9583 13.1551 15.946 13.1864 15.9204 13.2121C15.8948 13.2377 15.8635 13.25 15.8333 13.25Z"
      fill="#292D32"
      stroke="#9CB719"
    />
    <path
      d="M5.00008 13.25H4.16675C4.1366 13.25 4.10532 13.2377 4.07968 13.2121C4.05403 13.1864 4.04175 13.1551 4.04175 13.125C4.04175 13.0949 4.05403 13.0636 4.07968 13.0379C4.10532 13.0123 4.1366 13 4.16675 13H5.00008C5.03023 13 5.06151 13.0123 5.08715 13.0379C5.1128 13.0636 5.12508 13.0949 5.12508 13.125C5.12508 13.1551 5.1128 13.1864 5.08715 13.2121C5.06151 13.2377 5.03023 13.25 5.00008 13.25Z"
      fill="#292D32"
      stroke="#9CB719"
    />
    <path
      d="M15 11.7917C14.9699 11.7917 14.9386 11.7794 14.9129 11.7537C14.8873 11.7281 14.875 11.6968 14.875 11.6667V9.16667C14.875 8.31552 14.1845 7.625 13.3333 7.625H6.66667C5.81552 7.625 5.125 8.31552 5.125 9.16667V11.6667C5.125 11.6968 5.11272 11.7281 5.08707 11.7537C5.06143 11.7794 5.03015 11.7917 5 11.7917C4.96985 11.7917 4.93857 11.7794 4.91293 11.7537C4.88728 11.7281 4.875 11.6968 4.875 11.6667V9.16667C4.875 8.17614 5.67614 7.375 6.66667 7.375H13.3333C14.3239 7.375 15.125 8.17614 15.125 9.16667V11.6667C15.125 11.6968 15.1127 11.7281 15.0871 11.7537C15.0614 11.7794 15.0301 11.7917 15 11.7917Z"
      fill="#292D32"
      stroke="#9CB719"
    />
    <path
      d="M7.85313 13.6344L7.76175 13.2501H7.36669H5C4.96985 13.2501 4.93857 13.2378 4.91293 13.2122C4.88728 13.1865 4.875 13.1552 4.875 13.1251V12.0834C4.875 11.0929 5.67614 10.2917 6.66667 10.2917H13.3333C14.3239 10.2917 15.125 11.0929 15.125 12.0834V13.1251C15.125 13.1552 15.1127 13.1865 15.0871 13.2122C15.0614 13.2378 15.0301 13.2501 15 13.2501H12.6333H12.2383L12.1469 13.6344C11.9156 14.607 11.0371 15.3334 10 15.3334C8.96287 15.3334 8.08436 14.607 7.85313 13.6344ZM5.125 12.5001V13.0001H5.625H7.91667C7.94681 13.0001 7.97809 13.0124 8.00374 13.038C8.02938 13.0637 8.04167 13.0949 8.04167 13.1251C8.04167 14.2012 8.92386 15.0834 10 15.0834C11.0761 15.0834 11.9583 14.2012 11.9583 13.1251C11.9583 13.0949 11.9706 13.0637 11.9963 13.038C12.0219 13.0124 12.0532 13.0001 12.0833 13.0001H14.375H14.875V12.5001V12.0834C14.875 11.2323 14.1845 10.5417 13.3333 10.5417H6.66667C5.81552 10.5417 5.125 11.2323 5.125 12.0834V12.5001Z"
      fill="#292D32"
      stroke="#9CB719"
    />
  </svg>
)

const IconLibraryInactive = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#292D32"
      stroke="#000"
      d="M12.5 18.458h-5c-2.205 0-3.66-.473-4.573-1.385-.912-.913-1.385-2.368-1.385-4.573v-5c0-2.205.473-3.66 1.385-4.572.913-.913 2.368-1.386 4.573-1.386h5c2.205 0 3.66.473 4.572 1.386.913.912 1.386 2.367 1.386 4.572v5c0 2.205-.473 3.66-1.386 4.573-.912.912-2.367 1.385-4.572 1.385Zm-5-16.666c-1.956 0-3.431.342-4.398 1.31-.968.967-1.31 2.442-1.31 4.398v5c0 1.956.342 3.431 1.31 4.398.967.968 2.442 1.31 4.398 1.31h5c1.956 0 3.431-.342 4.398-1.31.968-.967 1.31-2.442 1.31-4.398v-5c0-1.956-.342-3.431-1.31-4.398-.967-.968-2.442-1.31-4.398-1.31h-5Z"
    />
    <path
      fill="#292D32"
      stroke="#000"
      d="m14.147 10.486.728.375V6.458c0-.85-.69-1.541-1.542-1.541H6.667c-.851 0-1.542.69-1.542 1.541V10.861l.728-.375c.24-.122.52-.194.814-.194h6.666c.294 0 .575.072.814.194ZM15 12.208a.124.124 0 0 1-.087-.037.124.124 0 0 1-.038-.088c0-.85-.69-1.541-1.542-1.541H6.667c-.851 0-1.542.69-1.542 1.541 0 .03-.012.062-.038.088a.123.123 0 0 1-.087.037.123.123 0 0 1-.087-.037.123.123 0 0 1-.038-.088V6.458c0-.99.801-1.791 1.792-1.791h6.666c.99 0 1.792.8 1.792 1.791v5.625c0 .03-.012.062-.038.088a.124.124 0 0 1-.087.037ZM15.833 13.25H15a.124.124 0 0 1-.087-.038.124.124 0 0 1-.038-.087c0-.03.012-.061.038-.087A.124.124 0 0 1 15 13h.833c.03 0 .062.012.087.038a.124.124 0 0 1 .038.087c0 .03-.012.061-.038.087a.123.123 0 0 1-.087.038ZM5 13.25h-.833a.123.123 0 0 1-.087-.038.124.124 0 0 1-.038-.087c0-.03.012-.061.038-.087A.123.123 0 0 1 4.167 13H5c.03 0 .061.012.087.038a.124.124 0 0 1 .038.087c0 .03-.012.061-.038.087A.123.123 0 0 1 5 13.25Z"
    />
    <path
      fill="#292D32"
      stroke="#000"
      d="M15 11.792a.123.123 0 0 1-.087-.038.123.123 0 0 1-.038-.087v-2.5c0-.851-.69-1.542-1.542-1.542H6.667c-.851 0-1.542.69-1.542 1.542v2.5c0 .03-.012.061-.038.087a.123.123 0 0 1-.087.038.123.123 0 0 1-.087-.038.123.123 0 0 1-.038-.087v-2.5c0-.99.801-1.792 1.792-1.792h6.666c.99 0 1.792.801 1.792 1.792v2.5c0 .03-.012.061-.038.087a.123.123 0 0 1-.087.038Z"
    />
    <path
      fill="#292D32"
      stroke="#000"
      d="m7.853 13.634-.091-.384H5a.123.123 0 0 1-.087-.038.124.124 0 0 1-.038-.087v-1.042c0-.99.801-1.791 1.792-1.791h6.666c.99 0 1.792.8 1.792 1.791v1.042c0 .03-.012.062-.038.087a.124.124 0 0 1-.087.038h-2.762l-.091.384a2.215 2.215 0 0 1-2.147 1.7 2.215 2.215 0 0 1-2.147-1.7ZM5.125 12.5v.5h2.792c.03 0 .061.012.087.038a.123.123 0 0 1 .038.087c0 1.076.882 1.958 1.958 1.958a1.965 1.965 0 0 0 1.958-1.958c0-.03.013-.061.038-.087a.123.123 0 0 1 .087-.038h2.792v-.917c0-.85-.69-1.541-1.542-1.541H6.667c-.851 0-1.542.69-1.542 1.541v.417Z"
    />
  </svg>
)

const IconLibrary = (props: IconLibraryProps) =>
  props.isActive ? <IconLibraryActive /> : <IconLibraryInactive />

export default IconLibrary