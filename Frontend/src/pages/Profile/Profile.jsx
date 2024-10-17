import React from "react";

const Profile = () => {
  return (
    <>
      <div
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{fontFamily: 'Lexend, "Noto Sans", sans-serif;'}}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight">
                    Personal Information
                  </p>
                  <p className="text-[#60778a] text-sm font-normal leading-normal">
                    Basic info, like your name and photo, that you use on
                    Infinite Learning services
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
                    data-icon="Person"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M160,40a32,32,0,1,0-32,32A32,32,0,0,0,160,40ZM128,56a16,16,0,1,1,16-16A16,16,0,0,1,128,56Zm90.34,78.05L173.17,82.83a32,32,0,0,0-24-10.83H106.83a32,32,0,0,0-24,10.83L37.66,134.05a20,20,0,0,0,28.13,28.43l16.3-13.08L65.55,212.28A20,20,0,0,0,102,228.8l26-44.87,26,44.87a20,20,0,0,0,36.41-16.52L173.91,149.4l16.3,13.08a20,20,0,0,0,28.13-28.43Zm-11.51,16.77a4,4,0,0,1-5.66,0c-.21-.2-.42-.4-.65-.58L165,121.76A8,8,0,0,0,152.26,130L175.14,217a7.72,7.72,0,0,0,.48,1.35,4,4,0,1,1-7.25,3.38,6.25,6.25,0,0,0-.33-.63L134.92,164a8,8,0,0,0-13.84,0L88,221.05a6.25,6.25,0,0,0-.33.63,4,4,0,0,1-2.26,2.07,4,4,0,0,1-5-5.45,7.72,7.72,0,0,0,.48-1.35L103.74,130A8,8,0,0,0,91,121.76L55.48,150.24c-.23.18-.44.38-.65.58a4,4,0,1,1-5.66-5.65c.12-.12.23-.24.34-.37L94.83,93.41a16,16,0,0,1,12-5.41h42.34a16,16,0,0,1,12,5.41l45.32,51.39c.11.13.22.25.34.37A4,4,0,0,1,206.83,150.82Z"></path>
                    </svg>
                  </div>
                  <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                    Profile Photo
                  </p>
                </div>
                <div className="shrink-0">
                  <div
                    className="text-[#111518] flex size-7 items-center justify-center"
                    data-icon="ArrowRight"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
                    data-icon="Image"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                      Photo Descriptions
                    </p>
                    <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">
                      Help people who are visually impaired understand your
                      photos better by adding a description
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div
                    className="text-[#111518] flex size-7 items-center justify-center"
                    data-icon="ArrowRight"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
                    data-icon="User"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                      Name
                    </p>
                    <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">
                      Your name will be used in any certification you earn.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div
                    className="text-[#111518] flex size-7 items-center justify-center"
                    data-icon="ArrowRight"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
                    data-icon="EnvelopeOpen"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                      Email
                    </p>
                    <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">
                      Your email address is the primary way we communicate with
                      you. You can change it at any time.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div
                    className="text-[#111518] flex size-7 items-center justify-center"
                    data-icon="ArrowRight"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Contact Information
              </h3>
              <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
                    data-icon="Phone"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                      Phone Number
                    </p>
                    <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">
                      Add a phone number to help secure your account and more
                      easily recover your password if needed.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div
                    className="text-[#111518] flex size-7 items-center justify-center"
                    data-icon="ArrowRight"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Preferences
              </h3>
              <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
                    data-icon="Chat"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.25,14.5A16.05,16.05,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H82.5a16,16,0,0,0-10.3,3.75l-.12.11L40,224V64H216Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                      Language
                    </p>
                    <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">
                      Choose your preferred language for Infinite Learning.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div
                    className="text-[#111518] flex size-7 items-center justify-center"
                    data-icon="ArrowRight"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
                    data-icon="Bell"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                      Notifications
                    </p>
                    <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">
                      Control your notifications from Infinite Learning.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div
                    className="text-[#111518] flex size-7 items-center justify-center"
                    data-icon="ArrowRight"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
                    data-icon="EnvelopeOpen"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                      Email Preferences
                    </p>
                    <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">
                      You can control the types of emails you receive from
                      Infinite Learning.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div
                    className="text-[#111518] flex size-7 items-center justify-center"
                    data-icon="ArrowRight"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-10"
                    data-icon="Shield"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56l160,0Z"></path>
                    </svg>
                  </div>
                  <p className="text-[#111518] text-base font-normal leading-normal flex-1 truncate">
                    Privacy Settings
                  </p>
                </div>
                <div className="shrink-0">
                  <div
                    className="text-[#111518] flex size-7 items-center justify-center"
                    data-icon="ArrowRight"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
                    data-icon="Trash"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                      Delete Account
                    </p>
                    <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">
                      If you wish to delete your account, you can do so here.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div
                    className="text-[#111518] flex size-7 items-center justify-center"
                    data-icon="ArrowRight"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
