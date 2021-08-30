import React, { useState } from "react";
import clsx from "clsx";
import './TopBar.sass';

const TopBarComponent = () => {
  const [searchResult, setSearchResult] = useState(false);

  return (
    <div className="top-bar">
      <div className="breadcrumb mr-auto sm:flex">
        <a href="">Application</a>
        <i className="fas fa-chevron-right" />
        <a href="" className="breadcrumb--active">Dashboard</a>
      </div>

      <div className="relative mr-3 sm:mr-6">
        <div className="search sm:block">
          <input 
            type="text" 
            className="search__input form-control border-transparent placeholder-theme-13"
            placeholder="Search..."
            onFocus={() => setSearchResult(true)}
            onBlur={() => setSearchResult(false)}
          />
          <i className="fas fa-search" />
        </div>

        <a className="notification sm:hidden" href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search notification__icon dark:text-gray-300 notification__icon dark:text-gray-300">
            <circle cx="11" cy="11" r="8">
            </circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65">
            </line>
          </svg>
        </a>
        <div className={clsx([
          "search-result",
          { show: searchResult }
        ])}>
          <div className="search-result__content">
            <div className="search-result__content__title">Pages</div>
            <div className="mb-5">
              <a href="" className="flex items-center">
                <div className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-inbox w-4 h-4 w-4 h-4">
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12">
                    </polyline>
                    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z">
                    </path>
                  </svg>
                </div>
                <div className="ml-3">Mail Settings</div>
              </a>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users w-4 h-4 w-4 h-4">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2">
                    </path>
                    <circle cx="9" cy="7" r="4">
                    </circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87">
                    </path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75">
                    </path>
                  </svg>
                </div>
                <div className="ml-3">Users &amp; Permissions</div>
              </a>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-credit-card w-4 h-4 w-4 h-4">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2">
                    </rect>
                    <line x1="1" y1="10" x2="23" y2="10">
                    </line>
                  </svg>
                </div>
                <div className="ml-3">Transactions Report</div>
              </a>
            </div>
            <div className="search-result__content__title">Users</div>
            <div className="mb-5">
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/img/profile-11.b5ab9aac.jpg" />
                </div>
                <div className="ml-3">Matt Damon</div>
                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">mattdamon@left4code.com</div>
              </a>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/img/profile-12.554b684b.jpg" />
                </div>
                <div className="ml-3">Tom Cruise</div>
                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">tomcruise@left4code.com</div>
              </a>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/img/profile-10.bac8c958.jpg" />
                </div>
                <div className="ml-3">John Travolta</div>
                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">johntravolta@left4code.com</div>
              </a>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/img/profile-7.e6fd9c30.jpg" />
                </div>
                <div className="ml-3">Richard Gere</div>
                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">richardgere@left4code.com</div>
              </a>
            </div>
            <div className="search-result__content__title">Products</div>
            <a href="" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/img/preview-9.a4a1f893.jpg" />
              </div>
              <div className="ml-3">Nike Tanjun</div>
              <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Sport &amp; Outdoor</div>
            </a>
            <a href="" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/img/preview-3.e4697cbe.jpg" />
              </div>
              <div className="ml-3">Dell XPS 13</div>
              <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">PC &amp; Laptop</div>
            </a>
            <a href="" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/img/preview-12.27bc2ad9.jpg" />
              </div>
              <div className="ml-3">Sony A7 III</div>
              <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Photography</div>
            </a>
            <a href="" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/img/preview-12.27bc2ad9.jpg" />
              </div>
              <div className="ml-3">Samsung Q90 QLED TV</div>
              <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Electronic</div>
            </a>
          </div>
        </div>
      </div>

      <div className="dropdown mr-auto sm:mr-6">
        <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell notification__icon dark:text-gray-300 notification__icon dark:text-gray-300">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9">
            </path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0">
            </path>
          </svg>
        </div>
        <div className="notification-content pt-2 dropdown-menu">
          <div className="notification-content__box dropdown-menu__content box dark:bg-dark-6">
            <div className="notification-content__title">Notifications</div>
            <div className="cursor-pointer relative flex items-center">
              <div className="w-12 h-12 flex-none image-fit mr-1">
                <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/img/profile-11.b5ab9aac.jpg" />
                <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white">
                </div>
              </div>
              <div className="ml-2 overflow-hidden">
                <div className="flex items-center">
                  <a href="javascript:;" className="font-medium truncate mr-5">Matt Damon</a>
                  <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">05:09 AM</div>
                </div>
                <div className="w-full truncate text-gray-600 mt-0.5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
              </div>
            </div>
            <div className="cursor-pointer relative flex items-center mt-5">
              <div className="w-12 h-12 flex-none image-fit mr-1">
                <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/img/profile-12.554b684b.jpg" />
                <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white">
                </div>
              </div>
              <div className="ml-2 overflow-hidden">
                <div className="flex items-center">
                  <a href="javascript:;" className="font-medium truncate mr-5">Tom Cruise</a>
                  <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">06:05 AM</div>
                </div>
                <div className="w-full truncate text-gray-600 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
              </div>
            </div>
            <div className="cursor-pointer relative flex items-center mt-5">
              <div className="w-12 h-12 flex-none image-fit mr-1">
                <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/img/profile-10.bac8c958.jpg" />
                <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white">
                </div>
              </div>
              <div className="ml-2 overflow-hidden">
                <div className="flex items-center">
                  <a href="javascript:;" className="font-medium truncate mr-5">John Travolta</a>
                  <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">04:50 AM</div>
                </div>
                <div className="w-full truncate text-gray-600 mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
              </div>
            </div>
            <div className="cursor-pointer relative flex items-center mt-5">
              <div className="w-12 h-12 flex-none image-fit mr-1">
                <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/img/profile-7.e6fd9c30.jpg" />
                <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white">
                </div>
              </div>
              <div className="ml-2 overflow-hidden">
                <div className="flex items-center">
                  <a href="javascript:;" className="font-medium truncate mr-5">Richard Gere</a>
                  <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">04:50 AM</div>
                </div>
                <div className="w-full truncate text-gray-600 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</div>
              </div>
            </div>
            <div className="cursor-pointer relative flex items-center mt-5">
              <div className="w-12 h-12 flex-none image-fit mr-1">
                <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/img/profile-2.9a680eaf.jpg" />
                <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white">
                </div>
              </div>
              <div className="ml-2 overflow-hidden">
                <div className="flex items-center">
                  <a href="javascript:;" className="font-medium truncate mr-5">Keanu Reeves</a>
                  <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                </div>
                <div className="w-full truncate text-gray-600 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-x dropdown w-8 h-8">
        <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in" role="button" aria-expanded="false">
          <img alt="Icewall Tailwind HTML Admin Template" src="/img/profile-3.a42bec32.jpg" />
        </div>
        <div className="dropdown-menu w-56">
          <div className="dropdown-menu__content box bg-theme-26 dark:bg-dark-6 text-white">
            <div className="p-4 border-b border-theme-27 dark:border-dark-3">
              <div className="font-medium">Matt Damon</div>
              <div className="text-xs text-theme-28 mt-0.5 dark:text-gray-600">Software Engineer</div>
            </div>
            <div className="p-2">
              <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user w-4 h-4 mr-2 w-4 h-4 mr-2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2">
                  </path>
                  <circle cx="12" cy="7" r="4">
                  </circle>
                </svg> Profile </a>
              <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit w-4 h-4 mr-2 w-4 h-4 mr-2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                  </path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                  </path>
                </svg> Add Account </a>
              <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-lock w-4 h-4 mr-2 w-4 h-4 mr-2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2">
                  </rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4">
                  </path>
                </svg> Reset Password </a>
              <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-help-circle w-4 h-4 mr-2 w-4 h-4 mr-2">
                  <circle cx="12" cy="12" r="10">
                  </circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3">
                  </path>
                  <line x1="12" y1="17" x2="12.01" y2="17">
                  </line>
                </svg> Help </a>
            </div>
            <div className="p-2 border-t border-theme-27 dark:border-dark-3">
              <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-toggle-right w-4 h-4 mr-2 w-4 h-4 mr-2">
                  <rect x="1" y="5" width="22" height="14" rx="7" ry="7">
                  </rect>
                  <circle cx="16" cy="12" r="3">
                  </circle>
                </svg> Logout </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBarComponent;